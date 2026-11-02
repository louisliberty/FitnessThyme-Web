<?php
/**
 * FitnessThyme early-access sign-up endpoint.
 *
 * Receives a JSON POST from the website and adds the person to the right
 * MailerLite group. The MailerLite API token is NOT in this repository: it is
 * read from a config file that lives outside the web root (see
 * docs/ft-config.example.php and README.md).
 */
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $code, array $body): void {
    http_response_code($code);
    echo json_encode($body);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'method_not_allowed']);
}

/* ── Only accept submissions that come from our own site ─────────────── */
$allowedHosts = array_filter(array_map('trim', explode(',', getenv('FT_ALLOWED_HOSTS') ?: 'fitnessthyme.com,www.fitnessthyme.com')));
$source = $_SERVER['HTTP_ORIGIN'] ?? ($_SERVER['HTTP_REFERER'] ?? '');
$sourceHost = $source !== '' ? parse_url($source, PHP_URL_HOST) : null;
if (!$sourceHost || !in_array(strtolower((string)$sourceHost), $allowedHosts, true)) {
    respond(403, ['ok' => false, 'error' => 'forbidden']);
}

/* ── Read and validate the request body ──────────────────────────────── */
$raw = file_get_contents('php://input', false, null, 0, 8193);
if ($raw === false || strlen($raw) > 8192) {
    respond(413, ['ok' => false, 'error' => 'too_large']);
}
$in = json_decode($raw, true);
if (!is_array($in)) {
    respond(400, ['ok' => false, 'error' => 'bad_request']);
}

// Honeypot: real people never fill this hidden field. Pretend success to bots.
if (!empty($in['website'])) {
    respond(200, ['ok' => true]);
}

// kind => [MailerLite group id, role label]
$KINDS = [
    'trainer' => ['203024178212767358', 'Trainer'],
    'client'  => ['203024179041141908', 'Client'],
    'intro'   => ['203024179708036637', 'Client'],
];
$kind = (string)($in['kind'] ?? '');
if (!isset($KINDS[$kind])) {
    respond(400, ['ok' => false, 'error' => 'bad_kind']);
}

function clean($v, int $max): string {
    $v = is_string($v) ? $v : '';
    $v = preg_replace('/[\x00-\x1F\x7F]/u', ' ', $v) ?? '';
    $v = trim(preg_replace('/\s+/u', ' ', $v) ?? '');
    return mb_substr($v, 0, $max);
}

$first = clean($in['first_name'] ?? '', 80);
$last  = clean($in['last_name'] ?? '', 80);
$email = strtolower(clean($in['email'] ?? '', 254));
$phone = clean($in['phone'] ?? '', 40);
$spec  = clean($in['specialty_or_goal'] ?? '', 250);

if ($first === '' || $last === '') {
    respond(422, ['ok' => false, 'error' => 'name_required']);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => 'email_invalid']);
}
if ($phone !== '' && !preg_match('/^[0-9+()\-.\s]{7,40}$/', $phone)) {
    respond(422, ['ok' => false, 'error' => 'phone_invalid']);
}

/* ── Simple per-IP throttle (8 sign-ups per hour) ────────────────────── */
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rlFile = sys_get_temp_dir() . '/ft_rl_' . md5($ip) . '.json';
$now = time();
$fh = @fopen($rlFile, 'c+');
if ($fh && flock($fh, LOCK_EX)) {
    $hits = json_decode((string)stream_get_contents($fh), true);
    $hits = is_array($hits) ? array_values(array_filter($hits, fn($t) => is_int($t) && $t > $now - 3600)) : [];
    if (count($hits) >= 8) {
        flock($fh, LOCK_UN); fclose($fh);
        respond(429, ['ok' => false, 'error' => 'too_many_requests']);
    }
    $hits[] = $now;
    ftruncate($fh, 0); rewind($fh); fwrite($fh, json_encode($hits));
    flock($fh, LOCK_UN);
}
if ($fh) { fclose($fh); }

/* ── Load the API token (kept outside the web root) ──────────────────── */
$configPath = getenv('FT_CONFIG_PATH') ?: dirname(__DIR__, 2) . '/ft-config.php';
$config = is_readable($configPath) ? include $configPath : null;
$token = is_array($config) ? (string)($config['mailerlite_token'] ?? '') : '';
$apiBase = is_array($config) && !empty($config['api_base']) ? rtrim((string)$config['api_base'], '/') : 'https://connect.mailerlite.com/api';
if ($token === '') {
    error_log('FitnessThyme subscribe: config file or mailerlite_token missing');
    respond(500, ['ok' => false, 'error' => 'not_configured']);
}

/* ── Send to MailerLite ──────────────────────────────────────────────── */
[$groupId, $role] = $KINDS[$kind];
$fields = ['name' => $first, 'last_name' => $last, 'role' => $role];
if ($phone !== '') { $fields['phone'] = $phone; }
if ($spec !== '')  { $fields['specialty_or_goal'] = $spec; }
$payload = json_encode(['email' => $email, 'fields' => $fields, 'groups' => [$groupId]]);

if (!function_exists('curl_init')) {
    error_log('FitnessThyme subscribe: PHP curl extension not available');
    respond(500, ['ok' => false, 'error' => 'not_configured']);
}
$ch = curl_init($apiBase . '/subscribers');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $token,
        'Content-Type: application/json',
        'Accept: application/json',
    ],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 15,
    CURLOPT_CONNECTTIMEOUT => 8,
]);
$res = curl_exec($ch);
$code = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($res !== false && ($code === 200 || $code === 201)) {
    respond(200, ['ok' => true]);
}
if ($code === 422) {
    respond(422, ['ok' => false, 'error' => 'email_invalid']);
}
// Never log personal details, only the status.
error_log('FitnessThyme subscribe: MailerLite returned HTTP ' . $code);
respond(502, ['ok' => false, 'error' => 'upstream_error']);

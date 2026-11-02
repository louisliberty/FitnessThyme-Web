# FitnessThyme (early access)

Static site served from HostGator. The site is a single page (`public/index.html`)
plus one small PHP endpoint (`public/api/subscribe.php`) that adds sign-ups to MailerLite.

## How it deploys
Merging to `main` runs `.github/workflows/deploy.yml`, which uploads `public/` to
`/home3/wrkwicte/fitnessthyme.com` over FTPS (secrets: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`).

## How sign-ups work
The forms POST JSON to `/api/subscribe.php`, which calls the MailerLite API and adds the person to a group:

| Form | `kind` | MailerLite group |
|---|---|---|
| Trainer application | `trainer` | FitnessThyme - Trainer applications |
| Client waitlist / quiz | `client` | FitnessThyme - Client interest |
| Intro request (not on the site yet) | `intro` | FitnessThyme - Intro requests |

Fields sent: `name`, `last_name`, `email`, `phone`, `role`, `specialty_or_goal`.

## One-time server setup (the API token is NOT in this repo)
1. In MailerLite: Integrations > API > generate a new token.
2. In HostGator cPanel > File Manager, open your HOME folder (`/home3/wrkwicte/`, the folder that contains `fitnessthyme.com`, not the folder itself).
3. Create a file named `ft-config.php` there using `docs/ft-config.example.php` as the template, with your token pasted in.
4. Submit a test sign-up on the live site with your own email and check it appears in the right MailerLite group.

## Safeguards in the endpoint
Same-site requests only, hidden honeypot field, 8 sign-ups per hour per IP, input length/format checks, no personal data in logs.

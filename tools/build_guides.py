#!/usr/bin/env python3
"""Generate static guide pages into public/guides/. Run: python3 tools/build_guides.py"""
import html, json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "public" / "guides"
SITE = "https://fitnessthyme.com"
PUBLISHED = "2026-11-02"
BYLINE = "FitnessThyme editorial team"

SRC = {
 "fortune": ("Fortune, “The Best Online Personal Trainers of 2026” (published May 8, 2026; updated Aug 1, 2026)", "https://www.fortune.com/article/best-online-personal-trainers/"),
 "tw_compare": ("Trainwell, “Trainwell vs. Caliber: personal coaching apps compared” (July 3, 2026) — published by Trainwell, a seller", "https://www.trainwell.net/blog/trainwell-vs-caliber-personal-coaching-apps-compared-2026"),
 "tw_buyers": ("Trainwell, “How to choose the right online personal trainer” (June 15, 2026) — published by Trainwell, a seller", "https://www.trainwell.net/blog/how-to-choose-the-right-online-personal-trainer-buyers-guide"),
}

NOTE = ('<p class="note"><strong>How this guide was made.</strong> It is based on the published sources listed at the bottom. '
        'The FitnessThyme editorial team has not personally tested these services, and prices and plans change, so confirm current details with each provider before you pay.</p>')

GUIDES = [
{
 "slug": "how-to-choose-an-online-personal-trainer",
 "title": "How to Choose an Online Personal Trainer",
 "desc": "A practical checklist for picking an online personal trainer: credentials, customization, communication, pricing and what to test during a trial.",
 "blurb": "A practical checklist: credentials, customization, communication, pricing and what to test in a trial.",
 "sources": ["tw_buyers", "fortune"],
 "body": """
<p>Online personal training ranges from a human coach who rewrites your program every week to an app that serves pre-built classes. Both get called “coaching,” so the first job is to know what you are actually buying. Use the criteria below to compare any option, including ones we don’t mention.</p>

<h2>1. Decide what level of support you need</h2>
<p>Ask yourself honestly how much accountability you need. If you stay consistent on your own and want a good plan, a self-guided app can be enough. If you tend to drift without someone checking in, a human coach who messages you first may matter more than any feature list.</p>

<h2>2. Check the coach’s credentials</h2>
<p>One published buyer’s guide suggests looking for a nationally accredited certification (it names NASM-CPT as an example), a relevant degree, and several years of experience.<sup><a href="#s-tw_buyers">[1]</a></sup> That guide is written by a company that sells coaching, so treat it as one reasonable checklist rather than a standard. Ask any provider what its hiring requirements are for the <em>whole</em> roster, not just the featured coaches.</p>

<h2>3. Look for real customization</h2>
<p>A program built around your schedule, equipment, injuries and goals is different from a template you pick from a library. Ask whether the coach changes your plan based on how your workouts actually went, or only at scheduled check-ins.</p>

<h2>4. Understand how you will communicate</h2>
<p>Find out whether you talk to your coach directly or to a support team, and through which channels (text, video, calls). Fortune’s reviewer noted that one human-coach service communicated by message or FaceTime but had no live chat in its app, which is the kind of detail that is easy to miss until you are a customer.<sup><a href="#s-fortune">[2]</a></sup></p>

<h2>5. Get the full price in writing</h2>
<p>Ask for the monthly cost, the billing period (some services bill several months at once), the cancellation process, and whether any introductory price changes after the first month. Our <a href="/guides/how-much-does-online-personal-training-cost/">cost guide</a> shows the published ranges.</p>

<h2>6. Make sure you can switch coaches</h2>
<p>Chemistry matters. Ask whether you can change coaches and whether there is a penalty for doing so.</p>

<h2>7. Use the trial on purpose</h2>
<p>If there is a trial, treat it as a test: send a question on day one and see how quickly and substantively the coach answers. Check whether the coach reaches out first or waits for you. Note any trial that requires payment details, and set a reminder to cancel if it isn’t right.</p>

<h2>Quick scorecard</h2>
<ul class="check">
<li>I know whether I want a human coach, an AI-built plan, or classes.</li>
<li>I know the coach’s qualifications and the company’s hiring standards.</li>
<li>My plan will be built for my schedule, equipment and limitations.</li>
<li>I know who I will talk to and how.</li>
<li>I have the total price, billing period and cancellation steps.</li>
<li>I can switch coaches.</li>
<li>I have tested response time during a trial.</li>
</ul>
<p>If you have an injury, a medical condition, or are returning after a long break, talk to your doctor before starting a new program, and tell your coach.</p>
"""},
{
 "slug": "how-much-does-online-personal-training-cost",
 "title": "How Much Does Online Personal Training Cost?",
 "desc": "Published prices for online personal training and fitness coaching apps, from about $15 a month to $199 a month and up, compared with in-person sessions.",
 "blurb": "Published prices for coaching and training apps, from about $15 a month to $199 a month and up.",
 "sources": ["fortune", "tw_compare", "tw_buyers"],
 "body": """
<p>Prices for online training vary widely because the products differ. A $15 app and a $199 coaching plan are not the same thing. Here is what recent published sources report. These figures were gathered in autumn 2026 and may have changed, so check each provider’s site.</p>

<table class="data">
<caption>Published prices as reported by the sources below</caption>
<thead><tr><th>Service</th><th>Reported price</th><th>What you get</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Aaptiv</td><td>$14.99/month or $99.99/year</td><td>AI-built plans from expert-designed classes; no one-on-one coaching</td><td><a href="#s-fortune">[1]</a></td></tr>
<tr><td>iFIT</td><td>Train $15/month; Pro $39/month</td><td>AI coach rather than a human; Pro requires compatible equipment</td><td><a href="#s-fortune">[1]</a></td></tr>
<tr><td>Caliber (app)</td><td>Free tier; Plus listed at $6/month in one place and $12/month in another</td><td>Coach-designed plans, self-directed; no one-on-one</td><td><a href="#s-fortune">[1]</a></td></tr>
<tr><td>Caliber (Premium Coaching)</td><td>From $600 for three months</td><td>Paired with an accredited trainer</td><td><a href="#s-fortune">[1]</a></td></tr>
<tr><td>Future</td><td>$199/month (first month discounted to $29)</td><td>One-on-one human coach; contact by message or FaceTime</td><td><a href="#s-fortune">[1]</a></td></tr>
<tr><td>Trainwell</td><td>$149/month, billed in three-month increments; 14-day trial</td><td>Dedicated trainer, messaging, form-check videos, live video calls</td><td><a href="#s-tw_compare">[2]</a> (self-reported)</td></tr>
<tr><td>In-person training</td><td>About $75–$150 per session in urban markets</td><td>Face-to-face sessions</td><td><a href="#s-tw_buyers">[3]</a> (seller-published)</td></tr>
</tbody></table>

<h2>What explains the price gap</h2>
<ul>
<li><strong>A person versus software.</strong> The lowest-priced options rely on AI or pre-built classes. The $149–$199/month plans include a human coach who adjusts your program.</li>
<li><strong>Billing structure.</strong> Some plans bill several months up front; others use a low introductory price. Compare the total over three months, not just the headline number.</li>
<li><strong>Scope.</strong> Some coaching includes nutrition guidance; check what is and isn’t included.</li>
</ul>

<h2>Online coaching versus in-person</h2>
<p>One source estimates that training in person three times a week at $75–$150 a session would run about $900 to $1,800 a month, against $149–$199 a month for the online human-coach plans above.<sup><a href="#s-tw_buyers">[3]</a></sup> That comparison comes from a company that sells online coaching, and in-person pricing varies by city, so use it as a rough guide. Online coaching can cost less, but you won’t get a coach standing next to you to correct form in person.</p>

<h2>Before you pay</h2>
<ul class="check">
<li>Ask what the price is after any introductory offer.</li>
<li>Ask about the billing period and how to cancel.</li>
<li>Check whether the plan can be paid with an HSA or FSA account (eligibility depends on your plan and documentation; ask your plan administrator).</li>
</ul>
<p>See also: <a href="/guides/how-to-choose-an-online-personal-trainer/">how to choose an online personal trainer</a>.</p>
"""},
{
 "slug": "online-coach-vs-ai-app-vs-in-person",
 "title": "Online Coach vs. AI App vs. In-Person Trainer",
 "desc": "How human online coaching, AI-driven fitness apps and in-person personal training differ in cost, accountability and form feedback, and who each suits.",
 "blurb": "How the three main options differ in cost, accountability and feedback, and who each suits.",
 "sources": ["fortune", "tw_buyers"],
 "body": """
<p>There are three common ways to get structured training help. None is best for everyone; the right one depends on your budget, how much accountability you need, and how much hands-on feedback you want.</p>

<table class="data">
<thead><tr><th></th><th>Online human coach</th><th>AI or class-based app</th><th>In-person trainer</th></tr></thead>
<tbody>
<tr><th scope="row">Typical published price</th><td>About $149–$199/month<sup><a href="#s-fortune">[1]</a></sup></td><td>About $15–$39/month<sup><a href="#s-fortune">[1]</a></sup></td><td>About $75–$150 per session in urban markets<sup><a href="#s-tw_buyers">[2]</a></sup></td></tr>
<tr><th scope="row">Who plans your training</th><td>A person who can adjust your plan</td><td>Software or pre-built classes</td><td>A person, in the room with you</td></tr>
<tr><th scope="row">Accountability</th><td>Check-ins by message or video</td><td>Notifications and reminders</td><td>A scheduled appointment</td></tr>
<tr><th scope="row">Form feedback</th><td>Usually through video you send</td><td>Limited</td><td>Immediate and hands-on</td></tr>
<tr><th scope="row">Flexibility</th><td>High; train anywhere</td><td>Highest</td><td>Fixed times and location</td></tr>
</tbody></table>

<h2>When an online human coach fits</h2>
<p>You want personalized programming and someone who notices when you go quiet, but you can’t justify in-person rates or want to train at home or while travelling.</p>

<h2>When an AI or class-based app fits</h2>
<p>You are self-motivated, on a tight budget, or just starting out and want structure cheaply. Fortune’s reviewers noted trade-offs: one app offered no one-on-one coaching and little progressive overload, and an AI-coach service required compatible equipment for its higher tier.<sup><a href="#s-fortune">[1]</a></sup></p>

<h2>When in-person fits</h2>
<p>You are new to lifting and want a person to check your technique as you learn, you like having a fixed appointment, or you have a particular need that benefits from someone seeing you move.</p>

<h2>A mixed approach</h2>
<p>Many people combine them: a few in-person sessions to learn technique, then an app or online coach for ongoing programming. Whatever you choose, start gradually, and check with a doctor first if you have health concerns.</p>
<p>Next: <a href="/guides/how-much-does-online-personal-training-cost/">what online training costs</a> and <a href="/guides/how-to-choose-an-online-personal-trainer/">how to choose a trainer</a>.</p>
"""},
{
 "slug": "caliber-vs-future-vs-trainwell",
 "title": "Caliber vs. Future vs. Trainwell: How They Differ",
 "desc": "A source-based comparison of Caliber, Future and Trainwell online coaching: published pricing, how coaching works and what to check before you sign up.",
 "blurb": "A source-based look at three online coaching services: pricing, how coaching works, what to check.",
 "sources": ["fortune", "tw_compare"],
 "body": """
<p>Caliber, Future and Trainwell are three of the better-known online coaching options. This comparison relies on published information only. Some of it comes from Trainwell itself, which is a seller, so we mark which claims are self-reported. We have not tested these services, and details change often.</p>

<table class="data">
<thead><tr><th></th><th>Caliber</th><th>Future</th><th>Trainwell</th></tr></thead>
<tbody>
<tr><th scope="row">Reported price</th><td>Free tier; Plus reported at $6 or $12/month; Premium Coaching from $600 for three months<sup><a href="#s-fortune">[1]</a></sup></td><td>$199/month, first month $29<sup><a href="#s-fortune">[1]</a></sup></td><td>$149/month billed in three-month increments (self-reported)<sup><a href="#s-tw_compare">[2]</a></sup></td></tr>
<tr><th scope="row">Human coach</th><td>Only with Premium Coaching; Plus is self-directed<sup><a href="#s-fortune">[1]</a></sup></td><td>Yes, one-on-one<sup><a href="#s-fortune">[1]</a></sup></td><td>Yes, a dedicated trainer (self-reported)<sup><a href="#s-tw_compare">[2]</a></sup></td></tr>
<tr><th scope="row">How you communicate</th><td>Not detailed in our sources</td><td>Message or FaceTime; no live chat in the app, per Fortune’s reviewer<sup><a href="#s-fortune">[1]</a></sup></td><td>Messaging, form-check videos and live video calls (self-reported)<sup><a href="#s-tw_compare">[2]</a></sup></td></tr>
<tr><th scope="row">Free option</th><td>Free app with strength plans<sup><a href="#s-tw_compare">[2]</a></sup></td><td>No free tier reported</td><td>14-day trial that requires payment details (self-reported)<sup><a href="#s-tw_compare">[2]</a></sup></td></tr>
<tr><th scope="row">Noted drawbacks</th><td>Pricing hard to find; focus mostly on strength training<sup><a href="#s-fortune">[1]</a></sup></td><td>Fairly expensive; website hard to navigate<sup><a href="#s-fortune">[1]</a></sup></td><td>No free app (self-reported)<sup><a href="#s-tw_compare">[2]</a></sup></td></tr>
</tbody></table>

<h2>Reading the table</h2>
<ul>
<li><strong>Caliber</strong> is the only one with a free tier, so it is the lowest-risk way to see whether a strength-focused app suits you. Its human coaching is a separate, pricier product.</li>
<li><strong>Future</strong> is the priciest per month in these sources, with a discounted first month. Work out the cost from month two.</li>
<li><strong>Trainwell</strong> sits in between on price, but its description comes from its own marketing. Verify its trainer standards and rating claims yourself.</li>
</ul>

<h2>What none of this tells you</h2>
<p>Whether a particular coach is a good fit for you. Whichever you consider, use the questions in our <a href="/guides/how-to-choose-an-online-personal-trainer/">selection checklist</a>, ask about cancellation, and test response time during any trial. Price and plan details may differ from what is listed here, so check each provider’s own site.</p>
"""},
{
 "slug": "questions-before-hiring-an-online-coach",
 "title": "10 Questions to Ask Before Hiring an Online Coach",
 "desc": "Ten questions to ask any online fitness coach or coaching company before you pay, covering credentials, communication, pricing, cancellation and switching coaches.",
 "blurb": "Ten questions to ask before you pay: credentials, communication, pricing, cancellation.",
 "sources": ["tw_buyers"],
 "body": """
<p>Copy these into an email or chat with any coach or company you are considering. Clear answers are a good sign. Vague ones are worth noticing.</p>
<ol class="qs">
<li><strong>What are your qualifications and experience?</strong> Ask about certifications, education and how long you have coached online.</li>
<li><strong>What are the hiring standards for your coaches?</strong> If it’s a company, ask about the whole roster, not just the featured coaches.</li>
<li><strong>Who will I actually talk to?</strong> A named coach, or a support team?</li>
<li><strong>How do we communicate and how fast do you reply?</strong> Text, video, calls; typical response time.</li>
<li><strong>Do you reach out to me, or do I have to start every check-in?</strong></li>
<li><strong>How do you adjust my program?</strong> Based on my workout data and feedback, or only at scheduled reviews?</li>
<li><strong>How do you handle injuries, travel and equipment limits?</strong></li>
<li><strong>What is the total monthly cost?</strong> Including the billing period, any intro pricing and what is not included.</li>
<li><strong>How do I cancel, and is there a trial or refund policy?</strong> Ask where in the app or contract the cancellation steps live.</li>
<li><strong>Can I switch coaches, and is there a penalty?</strong></li>
</ol>
<p>These draw on the selection criteria in a published buyer’s guide.<sup><a href="#s-tw_buyers">[1]</a></sup> The guide’s author sells online coaching; the questions are general, but treat its rankings with caution.</p>

<h2>Red flags</h2>
<ul>
<li>Promises of specific results or guaranteed outcomes.</li>
<li>Pressure to sign up today, or a trial that is hard to cancel.</li>
<li>No clear answer on price or cancellation.</li>
<li>Advice that overrides what your doctor told you.</li>
</ul>
<p>More on this: <a href="/guides/how-to-choose-an-online-personal-trainer/">how to choose an online personal trainer</a>.</p>
"""},
]

def page(title, desc, path, body, kind="Article", sources=None, extra_head=""):
    url = f"{SITE}{path}"
    ld = {"@context": "https://schema.org", "@type": kind, "headline": title, "description": desc,
          "author": {"@type": "Organization", "name": BYLINE}, "publisher": {"@type": "Organization", "name": "FitnessThyme", "url": SITE},
          "datePublished": PUBLISHED, "dateModified": PUBLISHED, "mainEntityOfPage": url} if kind == "Article" else \
         {"@context": "https://schema.org", "@type": "CollectionPage", "name": title, "description": desc, "url": url}
    src_html = ""
    if sources:
        items = "".join(f'<li id="s-{k}"><a href="{SRC[k][1]}" rel="noopener" target="_blank">{html.escape(SRC[k][0])}</a></li>' for k in sources)
        src_html = f'<section class="sources"><h2>Sources</h2><ol>{items}</ol></section>'
    t = html.escape(title + " | FitnessThyme", quote=True)
    d = html.escape(desc, quote=True)
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{t}</title>
<meta name="description" content="{d}">
<link rel="canonical" href="{url}">
<meta property="og:type" content="article">
<meta property="og:title" content="{t}">
<meta property="og:description" content="{d}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{SITE}/og-image.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%235a7a5a'/%3E%3Ctext x='32' y='46' font-family='Georgia,serif' font-size='40' font-weight='700' text-anchor='middle' fill='%23faf8f3'%3EF%3C/text%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/guides/guides.css">
<script type="application/ld+json">{json.dumps(ld)}</script>
</head>
<body>
<header class="top"><div class="wrap bar">
<a class="logo" href="/">🌿 Fitness<span>Thyme</span></a>
<nav><a href="/guides/">Guides</a><a href="/find-a-trainer" class="cta">Join the waitlist</a></nav>
</div></header>
<main class="wrap">
{body}
{src_html}
</main>
<footer><div class="wrap"><p>© 2026 FitnessThyme. General information only, not medical advice. <a href="/guides/how-we-review/">How we write guides &amp; our disclosure</a> · <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></p></div></footer>
</body>
</html>
"""

def article(g):
    crumbs = '<p class="crumbs"><a href="/guides/">Guides</a> › Coaching</p>'
    head = (f'{crumbs}<article><h1>{html.escape(g["title"])}</h1>'
            f'<p class="byline">By the {BYLINE} · Published November 2, 2026</p>'
            f'<p class="disclose">Disclosure: this page contains no affiliate links today. If we add any, they will be labeled and may earn FitnessThyme a commission. <a href="/guides/how-we-review/">Read more</a>.</p>'
            f'{NOTE}{g["body"]}</article>')
    return page(g["title"], g["desc"], f'/guides/{g["slug"]}/', head, sources=g["sources"])

def hub():
    cards = "".join(f'<li><a href="/guides/{g["slug"]}/"><h3>{html.escape(g["title"])}</h3><p>{html.escape(g["blurb"])}</p></a></li>' for g in GUIDES)
    body = f"""<h1>Fitness guides</h1>
<p class="lead">Plain-language guides to help you choose fitness coaching and training. Written by the {BYLINE} from published sources, with the sources listed on every page.</p>
<h2>Coaching and training</h2>
<ul class="cards">{cards}</ul>
<p class="small"><a href="/guides/how-we-review/">How we write guides and our affiliate disclosure</a></p>"""
    return page("Fitness Guides", "Plain-language guides to choosing online personal training and fitness coaching, with prices and sources.", "/guides/", body, kind="CollectionPage")

def review():
    body = f"""<p class="crumbs"><a href="/guides/">Guides</a> › How we write guides</p>
<article><h1>How we write guides &amp; our disclosure</h1>
<p class="byline">By the {BYLINE} · Updated November 2, 2026</p>
<h2>Who writes these</h2>
<p>Guides are published under the {BYLINE}. We aren’t doctors, dietitians or certified trainers writing in a professional capacity, and nothing here is medical advice.</p>
<h2>How we research</h2>
<p>Our guides are based on published sources, which we link at the bottom of every page. We say when a source is a company describing its own product, and we do not describe a product as “tested” unless we have tested it ourselves. At the moment we have not hands-on tested the services we write about. If that changes, we will say exactly what we did.</p>
<h2>Prices and accuracy</h2>
<p>Prices, plans and features change often. We note when information was gathered, but you should confirm current details with the provider. If you spot an error, tell us once our contact address is live on the <a href="/contact">contact page</a>.</p>
<h2>Affiliate disclosure</h2>
<p>FitnessThyme may in future join affiliate programs, which means we could earn a commission if you buy through certain links. At the time of writing, our guides contain no affiliate links. If we add any, we will label them clearly near the link and on the page, and commissions will not change what we write about a product.</p>
<h2>Health claims</h2>
<p>We don’t make claims that a product treats, cures or prevents any condition. For any health concern, talk to a qualified professional.</p>
</article>"""
    return page("How We Write Guides & Our Disclosure", "How the FitnessThyme editorial team researches its guides, how we handle prices and accuracy, and our affiliate disclosure.", "/guides/how-we-review/", body)

def write(rel, content):
    p = ROOT / rel; p.parent.mkdir(parents=True, exist_ok=True); p.write_text(content, encoding="utf-8")

if __name__ == "__main__":
    write("index.html", hub())
    write("how-we-review/index.html", review())
    for g in GUIDES:
        write(f'{g["slug"]}/index.html', article(g))
    urls = ["/guides/", "/guides/how-we-review/"] + [f'/guides/{g["slug"]}/' for g in GUIDES]
    print("\n".join(urls))

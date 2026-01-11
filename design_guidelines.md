# Fitness Thyme Design Guidelines

## Design Approach
**Reference-Based:** Drawing from Wirecutter's authoritative review aesthetic + REI's product showcase + The Verge's editorial layout. Professional, trust-building design that positions the site as an expert authority while maintaining visual appeal that drives affiliate conversions.

## Typography System
- **Primary Font:** Inter (Google Fonts) - clean, professional, excellent readability
- **Accent Font:** Archivo (Google Fonts) - bold headers and CTAs
- **Scale:**
  - Hero Headlines: text-5xl/text-6xl, font-bold
  - Section Headers: text-3xl/text-4xl, font-bold
  - Product Titles: text-2xl, font-semibold
  - Body Text: text-base/text-lg, font-normal
  - Captions/Meta: text-sm, font-medium

## Layout System
**Spacing Primitives:** Use Tailwind units of 3, 4, 6, 8, 12, 16, 20, 24 for consistent rhythm across all layouts.

## Core Components

### Homepage
**Hero Section:** Full-width (h-[600px]) featuring rotating featured deals with large product imagery, headline, brief description, pricing, and prominent "View Deal" CTA with blurred background (backdrop-blur-md bg-white/20).

**Featured Categories Grid:** 4-column (lg:grid-cols-4 md:grid-cols-2) with category cards showing product image, name, item count, and "Shop Category" link.

**Trending Products:** 3-column product grid with product cards (image, title, star rating, price, quick comparison bullet points, CTA).

**Latest Reviews Section:** 2-column featured article cards with large thumbnail, headline, excerpt, "Read Review" link.

**Trust Indicators Bar:** Single row displaying "10,000+ Products Reviewed | Expert Analysis | Unbiased Recommendations | Updated Daily"

**Email Capture Banner:** Sticky bottom popup (after 10s scroll) with simple form: headline "Get the Best Deals" + email input + subscribe button.

### Category Pages
**Category Header:** Full-width banner (h-64) with category image, title, description, product count.

**Filter Sidebar:** Left rail (w-64) with collapsible filter groups (Price Range, Brand, Rating, Features) using checkboxes and range sliders.

**Product Grid:** 3-column (lg:grid-cols-3) responsive cards with consistent spacing (gap-6).

**Comparison Quick View:** Floating sticky comparison bar (bottom) showing selected products (max 4) with "Compare Now" button.

### Product Review Pages
**Review Header:** Product hero with large image gallery (left 60%), title, rating stars, pros/cons boxes, price comparison table, multiple affiliate CTAs (right 40%).

**Content Structure:**
- Sticky navigation (Quick Links: Overview, Testing, Comparison, Verdict)
- Executive summary card (highlighted background, key findings)
- 2000-word review in scannable sections with H2/H3 hierarchy
- Pros/Cons cards (green checkmarks, red X icons)
- Comparison table (horizontal scroll, sticky first column)
- Image gallery interspersed throughout content
- Related products carousel at bottom

**Affiliate CTA Pattern:** Prominent buttons with store logos (Amazon, Titan, etc.), current price, "Check Price" text, using backdrop-blur-md bg-gradient-to-r styling.

### Blog/Guide Pages
**Article Layout:** Single column max-w-3xl centered, large featured image, author byline with photo, publication date, read time.

**Table of Contents:** Sticky sidebar (hidden on mobile) with anchor links to H2 sections.

**Product Recommendation Cards:** Embedded within content, showcasing top picks with images, ratings, quick specs, affiliate links.

### Navigation
**Header:** Sticky top navigation with logo (left), category mega-menu dropdowns (center), search bar, blog link (right).

**Footer:** 4-column layout - Categories, Resources, Company, Newsletter signup. Bottom bar with copyright and trust badges.

## Component Library
**Product Cards:** Image (aspect-ratio-square), title (2 lines), rating stars + review count, price, 3 key features as bullet points, CTA button.

**Comparison Tables:** Responsive horizontal scroll, sticky headers, alternating row backgrounds, checkmark/X icons for features, highlighted "Best" column.

**Review Rating System:** 5-star display with half-star precision, numerical score (/10), category breakdown bars (Performance, Value, Quality, Features).

**CTA Buttons:** Primary (affiliate links) - large, bold, with store branding. Secondary (internal) - outline style. All buttons use rounded-lg, px-8 py-3 sizing.

## Images
**Hero Image:** Large, high-quality fitness environment shot (home gym setup, person using equipment) with overlay gradient for text legibility.

**Product Images:** High-resolution product photography on white backgrounds (Amazon-style), lifestyle shots showing products in use, detail shots highlighting features.

**Category Images:** Aspirational fitness scenes relevant to category (person on treadmill, rowing machine in bright space).

**Review Images:** Mix of product shots, comparison images, charts/graphs for data visualization, lifestyle usage photos.

**Placement:** Hero section, product cards, review galleries (3-4 images per review), category headers, blog featured images.

## Mobile Optimization
**PWA Features:** Install prompt, offline product browsing capability, cached images.

**Mobile Navigation:** Hamburger menu, bottom navigation bar for key actions (Home, Categories, Search, Saved).

**Touch Targets:** Minimum 48px height for all interactive elements, generous spacing between tappable areas.
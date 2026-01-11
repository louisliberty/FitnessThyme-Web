# Fitness Thyme - SEO-Optimized Affiliate Ecommerce Site

## Overview
Fitness Thyme is a high-ticket affiliate ecommerce site for premium fitness products. The site features exercise equipment (treadmills, rowers), smart devices (Whoop, Oura), digital subscriptions (Peloton app), and nutrition/supplements (Onnit).

## Current State
- **Status**: MVP Complete
- **Last Updated**: January 2026
- **Live URL**: fitnessthyme.com

## Tech Stack
- **Frontend**: React 18 with Vite, TypeScript, Tailwind CSS
- **Backend**: Express.js with in-memory storage
- **UI Components**: Shadcn/UI, Radix primitives
- **State Management**: TanStack React Query v5
- **Routing**: Wouter
- **SEO**: react-helmet-async for per-page meta tags

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── layout/        # Header, Footer, Layout wrapper
│   │   ├── ui/            # Shadcn components
│   │   ├── ProductCard.tsx
│   │   ├── ComparisonTable.tsx
│   │   ├── AffiliateButton.tsx
│   │   ├── RatingStars.tsx
│   │   ├── ScoreBar.tsx
│   │   ├── BlogCard.tsx
│   │   ├── EmailPopup.tsx
│   │   └── SEO.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Category.tsx
│   │   ├── Product.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogArticle.tsx
│   │   └── Compare.tsx
│   ├── lib/
│   │   ├── products.ts    # Product data and helpers
│   │   └── queryClient.ts
│   └── App.tsx
├── public/
│   └── manifest.json      # PWA manifest
└── index.html             # SEO meta tags, GA4, schema.org

server/
├── data.ts               # Product/blog/review data
├── routes.ts             # API endpoints
├── storage.ts            # In-memory storage for subscribers
└── index.ts

shared/
└── schema.ts             # TypeScript types and Zod schemas
```

## Pages & Routes
- `/` - Homepage with hero, categories, trending products, blog previews
- `/category/:slug` - Category pages with product listings
- `/product/:slug` - Full product reviews with specs, pros/cons, affiliate CTAs
- `/blog` - Blog listing with buying guides
- `/blog/:slug` - Individual blog articles
- `/compare` - Side-by-side product comparison tool

## API Endpoints
- `GET /api/products` - All products
- `GET /api/products/featured` - Featured products
- `GET /api/products/trending` - Trending products
- `GET /api/products/:slug` - Single product by slug
- `GET /api/categories` - All categories
- `GET /api/categories/:slug/products` - Products by category
- `GET /api/blog` - All blog posts
- `GET /api/blog/:slug` - Single blog post by slug
- `GET /api/reviews` - All reviews
- `GET /api/reviews/product/:productId` - Review by product ID
- `POST /api/subscribe` - Email newsletter subscription

## Product Data
10 pre-populated products:
1. Bowflex Treadmill 22
2. Concept2 RowErg
3. Titan Fitness T-3 Power Rack
4. NordicTrack Commercial 2950
5. WHOOP 4.0
6. Oura Ring Gen 3
7. Peloton App Membership
8. LADDER by Arnold
9. Onnit Alpha Brain
10. Onnit Total Human

## SEO Features
- Per-page meta titles and descriptions
- Open Graph tags for social sharing
- Schema.org markup (Product, Review, Article, Organization)
- PWA manifest with theme color
- Google Analytics 4 integration (replace G-XXXXXXXXXX with real ID)
- Semantic H1-H3 heading structure
- Alt text on all images
- Canonical URLs on all pages

## Key Components
- **ProductCard**: Displays product with image, rating, features, price, CTA
- **ComparisonTable**: Side-by-side product comparison with specs
- **AffiliateButton**: Store-branded buttons with prices
- **EmailPopup**: Newsletter signup modal (appears after 10s)
- **SEO**: Helmet component for per-page meta management

## Affiliate Links
Placeholder affiliate links to:
- Amazon
- Bowflex
- Concept2
- Titan Fitness
- NordicTrack
- WHOOP
- Oura
- Peloton
- LADDER
- Onnit

## Development
```bash
npm run dev  # Start development server on port 5000
```

## Notes
- Replace GA4 ID (G-XXXXXXXXXX) in index.html with real tracking ID
- Update affiliate URLs with real tracking links
- Email subscriptions stored in memory (consider email service integration for production)
- Images use Unsplash placeholders - replace with actual product photos

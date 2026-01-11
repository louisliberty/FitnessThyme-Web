import type { Product, BlogPost, Review } from "@shared/schema";

export const products: Product[] = [
  {
    id: "1",
    name: "Bowflex Treadmill 22",
    slug: "bowflex-treadmill-22",
    categoryId: "exercise-equipment",
    shortDescription: "Premium home treadmill with 22\" HD touchscreen and JRNY adaptive fitness platform",
    price: 2499,
    originalPrice: 2999,
    rating: 4.7,
    reviewCount: 1284,
    imageUrl: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&h=600&fit=crop",
    brand: "Bowflex",
    features: ["22\" HD Touchscreen", "-5% to 20% Incline", "JRNY Membership Included", "Bluetooth Speakers"],
    pros: ["Excellent build quality", "Immersive workout experience", "Quiet motor", "Great entertainment options"],
    cons: ["Premium price point", "Large footprint", "Requires subscription for full features"],
    affiliateLinks: [
      { store: "Amazon", url: "https://amazon.com/dp/placeholder", price: 2499 },
      { store: "Bowflex", url: "https://bowflex.com/placeholder", price: 2499 },
    ],
    specifications: {
      "Motor": "4.0 HP",
      "Speed Range": "0-12 MPH",
      "Incline Range": "-5% to 20%",
      "Running Surface": "22\" x 60\"",
      "Weight Capacity": "400 lbs",
      "Dimensions": "85\" L x 39.6\" W x 65\" H",
    },
    isFeatured: true,
    isTrending: true,
    overallScore: 9.2,
    scores: { performance: 9.5, value: 8.5, quality: 9.4, features: 9.4 },
  },
  {
    id: "2",
    name: "Concept2 RowErg",
    slug: "concept2-rowerg",
    categoryId: "exercise-equipment",
    shortDescription: "The gold standard in indoor rowing machines used by Olympic athletes worldwide",
    price: 1095,
    rating: 4.9,
    reviewCount: 3421,
    imageUrl: "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=600&h=600&fit=crop",
    brand: "Concept2",
    features: ["PM5 Performance Monitor", "Air Resistance", "Separates for Storage", "ErgData App Compatible"],
    pros: ["Industry gold standard", "Exceptional durability", "Accurate performance tracking", "Great resale value"],
    cons: ["Basic design aesthetics", "Noisy at high intensity", "No built-in workouts"],
    affiliateLinks: [
      { store: "Amazon", url: "https://amazon.com/dp/placeholder", price: 1095 },
      { store: "Concept2", url: "https://concept2.com/placeholder", price: 1095 },
    ],
    specifications: {
      "Resistance Type": "Air",
      "Monitor": "PM5",
      "Seat Height": "14 inches",
      "Weight Capacity": "500 lbs",
      "Dimensions": "96\" L x 24\" W x 14\" H (in use)",
    },
    isFeatured: true,
    isTrending: true,
    overallScore: 9.6,
    scores: { performance: 9.8, value: 9.5, quality: 9.8, features: 9.2 },
  },
  {
    id: "3",
    name: "Titan Fitness T-3 Series Power Rack",
    slug: "titan-fitness-t3-power-rack",
    categoryId: "exercise-equipment",
    shortDescription: "Commercial-grade power rack for serious home gym enthusiasts at an unbeatable price",
    price: 469,
    originalPrice: 549,
    rating: 4.6,
    reviewCount: 892,
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop",
    brand: "Titan Fitness",
    features: ["11-Gauge Steel", "1\" Hole Spacing", "1000 lb Capacity", "Westside Spacing"],
    pros: ["Incredible value", "Sturdy construction", "Lots of attachment options", "Easy assembly"],
    cons: ["Paint chips easily", "Limited color options", "Accessories sold separately"],
    affiliateLinks: [
      { store: "Titan Fitness", url: "https://titanfitness.com/placeholder", price: 469 },
      { store: "Amazon", url: "https://amazon.com/dp/placeholder", price: 499 },
    ],
    specifications: {
      "Steel Gauge": "11-gauge",
      "Hole Size": "1\"",
      "Hole Spacing": "2\" Westside Pattern",
      "Weight Capacity": "1000 lbs",
      "Inside Depth": "30\"",
    },
    isFeatured: false,
    isTrending: true,
    overallScore: 9.0,
    scores: { performance: 9.0, value: 9.8, quality: 8.8, features: 8.5 },
  },
  {
    id: "4",
    name: "NordicTrack Commercial 2950",
    slug: "nordictrack-commercial-2950",
    categoryId: "exercise-equipment",
    shortDescription: "Feature-packed treadmill with 22\" touchscreen and iFit interactive training",
    price: 2999,
    originalPrice: 3499,
    rating: 4.5,
    reviewCount: 756,
    imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=600&fit=crop",
    brand: "NordicTrack",
    features: ["22\" Smart HD Touchscreen", "-3% to 15% Incline", "iFit Enabled", "AutoBreeze Fans"],
    pros: ["Immersive iFit experience", "Automatic trainer control", "Quality build", "Good cushioning"],
    cons: ["Requires iFit subscription", "Heavy unit", "Complex assembly"],
    affiliateLinks: [
      { store: "Amazon", url: "https://amazon.com/dp/placeholder", price: 2999 },
      { store: "NordicTrack", url: "https://nordictrack.com/placeholder", price: 2999 },
    ],
    specifications: {
      "Motor": "4.25 HP",
      "Speed Range": "0-12 MPH",
      "Incline Range": "-3% to 15%",
      "Running Surface": "22\" x 60\"",
      "Weight Capacity": "300 lbs",
    },
    isFeatured: false,
    isTrending: false,
    overallScore: 8.8,
    scores: { performance: 9.0, value: 8.2, quality: 9.0, features: 9.2 },
  },
  {
    id: "5",
    name: "WHOOP 4.0",
    slug: "whoop-4",
    categoryId: "smart-devices",
    shortDescription: "Advanced fitness and health wearable with 24/7 monitoring and personalized insights",
    price: 239,
    rating: 4.4,
    reviewCount: 2156,
    imageUrl: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&h=600&fit=crop",
    brand: "WHOOP",
    features: ["Strain Coach", "Sleep Tracking", "Recovery Score", "HRV Monitoring"],
    pros: ["Comprehensive health metrics", "No screen distractions", "Comfortable 24/7 wear", "Actionable recovery insights"],
    cons: ["Requires subscription", "No GPS", "Learning curve for data"],
    affiliateLinks: [
      { store: "WHOOP", url: "https://whoop.com/placeholder", price: 239 },
      { store: "Amazon", url: "https://amazon.com/dp/placeholder", price: 239 },
    ],
    specifications: {
      "Battery Life": "5 days",
      "Water Resistance": "IP68",
      "Sensors": "PPG, Accelerometer, Gyroscope, Temperature",
      "Connectivity": "Bluetooth 5.0",
    },
    isFeatured: true,
    isTrending: true,
    overallScore: 8.9,
    scores: { performance: 9.2, value: 8.0, quality: 9.0, features: 9.4 },
  },
  {
    id: "6",
    name: "Oura Ring Gen 3",
    slug: "oura-ring-gen3",
    categoryId: "smart-devices",
    shortDescription: "Premium smart ring for sleep, activity, and readiness tracking in an elegant form",
    price: 299,
    rating: 4.5,
    reviewCount: 1834,
    imageUrl: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&h=600&fit=crop",
    brand: "Oura",
    features: ["Sleep Staging", "Temperature Sensing", "Activity Tracking", "Readiness Score"],
    pros: ["Sleek ring design", "Excellent sleep tracking", "Long battery life", "Comfortable to wear"],
    cons: ["Monthly subscription required", "Limited workout tracking", "Sizing can be tricky"],
    affiliateLinks: [
      { store: "Oura", url: "https://ouraring.com/placeholder", price: 299 },
      { store: "Amazon", url: "https://amazon.com/dp/placeholder", price: 299 },
    ],
    specifications: {
      "Battery Life": "4-7 days",
      "Water Resistance": "100m",
      "Sensors": "Infrared PPG, 3D Accelerometer, Gyroscope, Temperature",
      "Materials": "Titanium",
    },
    isFeatured: true,
    isTrending: true,
    overallScore: 9.1,
    scores: { performance: 9.0, value: 8.5, quality: 9.5, features: 9.2 },
  },
  {
    id: "7",
    name: "Peloton App Membership",
    slug: "peloton-app-membership",
    categoryId: "digital-subscriptions",
    shortDescription: "World-class fitness classes from strength to yoga, accessible on any device",
    price: 12.99,
    rating: 4.6,
    reviewCount: 4521,
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=600&fit=crop",
    brand: "Peloton",
    features: ["10,000+ Classes", "Multiple Disciplines", "Live & On-Demand", "Progress Tracking"],
    pros: ["Huge class library", "Top-tier instructors", "Multi-platform access", "Regular new content"],
    cons: ["No equipment integration without bike/tread", "Competitive features limited", "Price adds up yearly"],
    affiliateLinks: [
      { store: "Peloton", url: "https://onepeloton.com/placeholder", price: 12.99 },
    ],
    specifications: {
      "Class Types": "Strength, Cardio, Yoga, Meditation, Running, Cycling",
      "Platforms": "iOS, Android, Web, TV Apps",
      "Profiles": "Up to 6",
      "Downloads": "Yes (mobile)",
    },
    isFeatured: true,
    isTrending: false,
    overallScore: 9.0,
    scores: { performance: 9.2, value: 9.0, quality: 9.0, features: 8.8 },
  },
  {
    id: "8",
    name: "LADDER by Arnold",
    slug: "ladder-by-arnold",
    categoryId: "digital-subscriptions",
    shortDescription: "Arnold Schwarzenegger's science-backed fitness app with personalized training",
    price: 19.99,
    rating: 4.3,
    reviewCount: 892,
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop",
    brand: "LADDER",
    features: ["Personalized Programs", "Expert Coaches", "Nutrition Guidance", "Arnold's Insights"],
    pros: ["Science-backed programming", "Detailed exercise demos", "Nutrition integration", "Motivating content"],
    cons: ["Newer platform", "Smaller community", "Higher price point"],
    affiliateLinks: [
      { store: "LADDER", url: "https://ladder.sport/placeholder", price: 19.99 },
    ],
    specifications: {
      "Program Types": "Strength, Hypertrophy, Athletic",
      "Platforms": "iOS, Android",
      "Personalization": "Yes",
      "Expert Content": "Arnold + Team",
    },
    isFeatured: false,
    isTrending: false,
    overallScore: 8.5,
    scores: { performance: 8.8, value: 8.0, quality: 8.5, features: 8.6 },
  },
  {
    id: "9",
    name: "Onnit Alpha Brain",
    slug: "onnit-alpha-brain",
    categoryId: "nutrition-supplements",
    shortDescription: "Flagship nootropic for focus, memory, and mental clarity without caffeine",
    price: 79.95,
    originalPrice: 89.95,
    rating: 4.2,
    reviewCount: 3892,
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&h=600&fit=crop",
    brand: "Onnit",
    features: ["Caffeine-Free", "Clinically Studied", "Memory Support", "Flow State Enhancement"],
    pros: ["No caffeine jitters", "Noticeable focus boost", "Third-party tested", "Stacks well with other supps"],
    cons: ["Premium price", "Results vary", "Takes time to notice effects"],
    affiliateLinks: [
      { store: "Onnit", url: "https://onnit.com/placeholder", price: 79.95 },
      { store: "Amazon", url: "https://amazon.com/dp/placeholder", price: 79.95 },
    ],
    specifications: {
      "Serving Size": "2 capsules",
      "Servings Per Container": "45",
      "Key Ingredients": "Alpha GPC, Bacopa, Cat's Claw, Oat Straw",
      "Certification": "NSF Certified for Sport",
    },
    isFeatured: true,
    isTrending: false,
    overallScore: 8.4,
    scores: { performance: 8.5, value: 7.8, quality: 8.8, features: 8.5 },
  },
  {
    id: "10",
    name: "Onnit Total Human",
    slug: "onnit-total-human",
    categoryId: "nutrition-supplements",
    shortDescription: "Complete daily supplement system for total body optimization in convenient packs",
    price: 139,
    originalPrice: 159,
    rating: 4.4,
    reviewCount: 1567,
    imageUrl: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&h=600&fit=crop",
    brand: "Onnit",
    features: ["Day + Night Packs", "Complete Vitamin Stack", "Performance Support", "Sleep Optimization"],
    pros: ["Comprehensive formula", "Convenient packaging", "Day/night optimization", "Quality ingredients"],
    cons: ["High cost per day", "Many pills to take", "May duplicate existing supps"],
    affiliateLinks: [
      { store: "Onnit", url: "https://onnit.com/placeholder", price: 139 },
      { store: "Amazon", url: "https://amazon.com/dp/placeholder", price: 145 },
    ],
    specifications: {
      "Serving": "1 Day Pack + 1 Night Pack",
      "Day Pack Pills": "6",
      "Night Pack Pills": "4",
      "Supply": "30 days",
    },
    isFeatured: false,
    isTrending: true,
    overallScore: 8.7,
    scores: { performance: 8.8, value: 8.2, quality: 9.0, features: 8.8 },
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Best Treadmills for Home Gyms 2026: Expert Buying Guide",
    slug: "best-treadmills-home-gym-2026",
    excerpt: "We tested 15 treadmills to find the best options for every budget and goal. From budget-friendly to premium, here are our top picks.",
    content: "",
    author: "Mike Chen",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    publishedAt: "2026-01-08",
    readTime: 12,
    imageUrl: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&h=450&fit=crop",
    category: "Buying Guides",
    tags: ["treadmills", "home gym", "cardio", "2026"],
    relatedProducts: ["1", "4"],
  },
  {
    id: "2",
    title: "WHOOP 4.0 vs Oura Ring Gen 3: Which Tracker Wins?",
    slug: "whoop-vs-oura-comparison-2026",
    excerpt: "Two of the most popular recovery trackers go head-to-head. We compare accuracy, features, comfort, and value.",
    content: "",
    author: "Sarah Johnson",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    publishedAt: "2026-01-05",
    readTime: 10,
    imageUrl: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&h=450&fit=crop",
    category: "Comparisons",
    tags: ["WHOOP", "Oura", "fitness trackers", "wearables"],
    relatedProducts: ["5", "6"],
  },
  {
    id: "3",
    title: "Best Rowing Machines 2026: From Budget to Premium",
    slug: "best-rowing-machines-2026",
    excerpt: "Indoor rowing is one of the best full-body workouts. We tested the top rowers to help you find the perfect match.",
    content: "",
    author: "Tom Bradley",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    publishedAt: "2026-01-02",
    readTime: 14,
    imageUrl: "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=800&h=450&fit=crop",
    category: "Buying Guides",
    tags: ["rowing machines", "cardio", "home gym", "2026"],
    relatedProducts: ["2"],
  },
  {
    id: "4",
    title: "Building Your Dream Home Gym on a $3000 Budget",
    slug: "home-gym-budget-3000",
    excerpt: "You don't need to spend a fortune to build an effective home gym. Here's exactly what to buy with $3000.",
    content: "",
    author: "Mike Chen",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    publishedAt: "2025-12-28",
    readTime: 8,
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=450&fit=crop",
    category: "Guides",
    tags: ["home gym", "budget", "equipment"],
    relatedProducts: ["3", "2"],
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    productId: "1",
    title: "Bowflex Treadmill 22 Review: Is It Worth $2,500?",
    slug: "bowflex-treadmill-22-review",
    excerpt: "After 6 months of daily use, we share our complete verdict on Bowflex's flagship treadmill.",
    content: `<h2>Executive Summary</h2>
<p>The Bowflex Treadmill 22 represents a significant investment in your fitness journey, but after six months of rigorous testing, we believe it's worth every penny for the right user. With its stunning 22-inch HD touchscreen, adaptive JRNY coaching, and rock-solid build quality, this treadmill delivers a premium workout experience that rivals commercial gym equipment.</p>

<h2>Design & Build Quality</h2>
<p>From the moment you unbox the Bowflex Treadmill 22, it's clear this is a serious piece of equipment. The frame is constructed from heavy-gauge steel with a sleek matte finish that resists fingerprints and sweat stains. The 22-inch HD touchscreen is the centerpiece, offering crisp visuals and responsive touch controls that never lag during workouts.</p>
<p>The console angles perfectly for viewing whether you're walking at an incline or running at full speed. Integrated Bluetooth speakers deliver surprisingly good sound quality, though we'd still recommend headphones for the most immersive experience.</p>

<h2>Performance Testing</h2>
<p>We put this treadmill through its paces with over 200 hours of testing across multiple users. The 4.0 HP motor handles everything from slow walks to all-out sprints without hesitation. The speed adjusts smoothly and quickly, and we never experienced any stuttering or inconsistency.</p>
<p>The incline range from -5% to 20% is particularly impressive. Decline training is rare in home treadmills, and it adds valuable variety to your workouts. The transitions between incline levels are smooth and relatively quiet.</p>
<p>The 22" x 60" running surface provides ample room for users up to 6'4", and the cushioning system strikes the right balance between impact absorption and stability.</p>

<h2>JRNY Adaptive Training</h2>
<p>Bowflex's JRNY platform is the software heart of this machine. The AI-powered adaptive workouts adjust in real-time based on your performance, keeping you challenged without overdoing it. The scenic run library includes hundreds of global destinations with excellent video quality.</p>
<p>One standout feature is the Netflix, Hulu, and Disney+ integration. Being able to stream your favorite shows while walking or jogging is a game-changer for longer sessions.</p>

<h2>Value Assessment</h2>
<p>At $2,499, this isn't a budget treadmill. However, compared to commercial gym memberships ($50-100/month), you're looking at break-even in 2-4 years with unlimited family access and zero commute time. The included 1-year JRNY membership ($149 value) sweetens the deal.</p>

<h2>Who Should Buy This?</h2>
<p>The Bowflex Treadmill 22 is ideal for dedicated home gym enthusiasts who want a connected fitness experience without the Peloton Tread's higher price tag. It's perfect for households with multiple users who appreciate variety in their cardio workouts.</p>

<h2>Final Verdict</h2>
<p>The Bowflex Treadmill 22 earns our strong recommendation for anyone serious about home cardio fitness. Its combination of robust hardware, immersive software, and thoughtful design details creates an experience that'll keep you coming back day after day. Yes, it's an investment – but it's one that pays dividends in health and convenience.</p>`,
    author: "Mike Chen",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    publishedAt: "2026-01-10",
    readTime: 15,
    imageUrl: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&h=450&fit=crop",
  },
  {
    id: "2",
    productId: "2",
    title: "Concept2 RowErg Review: The Only Rower You'll Ever Need",
    slug: "concept2-rowerg-review",
    excerpt: "There's a reason every CrossFit gym and Olympic training center uses this machine. Here's our deep dive.",
    content: `<h2>Executive Summary</h2>
<p>The Concept2 RowErg isn't just a rowing machine – it's THE rowing machine. Used by Olympic teams, CrossFit gyms, and serious home athletes worldwide, this air resistance rower has earned its legendary status through decades of reliable performance. At $1,095, it represents exceptional long-term value for anyone serious about rowing fitness.</p>

<h2>Why Concept2 Dominates</h2>
<p>When every major rowing competition uses Concept2 as the standard, you know you're getting the real deal. The RowErg (formerly Model D) has been refined over 40+ years to deliver an experience that perfectly mimics on-water rowing dynamics.</p>

<h2>The PM5 Performance Monitor</h2>
<p>The included PM5 monitor is a masterpiece of fitness tracking. It displays every metric a rower could want: split times, stroke rate, distance, calories, and watts. The accuracy is competition-grade – your times will transfer directly to any Concept2 leaderboard or competition.</p>
<p>Wireless connectivity via Bluetooth and ANT+ means seamless integration with heart rate monitors and fitness apps. The ErgData app provides detailed workout analysis and cloud storage for all your sessions.</p>

<h2>Build Quality & Durability</h2>
<p>This is where Concept2 truly shines. We've seen RowErgs in commercial gyms with 15+ years of daily abuse still functioning perfectly. The aluminum rail, steel frame, and industrial components are built for millions of meters.</p>
<p>The machine separates into two pieces for storage, sliding under a bed or standing against a wall. At 57 lbs, it's manageable for most users to move around.</p>

<h2>The Rowing Experience</h2>
<p>Air resistance means the machine matches your effort – row harder, and resistance increases naturally. This creates an incredibly intuitive experience that feels remarkably like rowing on water.</p>
<p>The damper setting (1-10) adjusts the airflow, not the resistance level. Lower settings (3-5) simulate a sleek racing shell, while higher settings feel like a heavy rowboat. Most users find their sweet spot between 3-5.</p>

<h2>What's Missing</h2>
<p>Unlike fancy connected rowers, the Concept2 is intentionally simple. No touchscreen, no streaming classes, no flashy graphics. For some, this is a dealbreaker. For purists, it's exactly the point – distraction-free training focused on performance metrics.</p>
<p>The PM5 does connect to third-party apps like EXR and Regatta, which add game-like elements if you want them.</p>

<h2>Value Proposition</h2>
<p>At $1,095, the RowErg is actually mid-range priced compared to connected rowers like Hydrow ($2,495) or Ergatta ($2,199). But here's the kicker: Concept2s hold their value incredibly well. Used models sell for 70-80% of retail price even after years of use.</p>

<h2>Final Verdict</h2>
<p>The Concept2 RowErg is the GOAT of rowing machines. Its combination of accuracy, durability, and authentic rowing feel is unmatched at any price point. If you're serious about rowing as a primary cardio modality, there's simply no better choice.</p>`,
    author: "Tom Bradley",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    publishedAt: "2026-01-08",
    readTime: 12,
    imageUrl: "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=800&h=450&fit=crop",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(p => p.categoryId === categoryId);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.isFeatured);
}

export function getTrendingProducts(): Product[] {
  return products.filter(p => p.isTrending);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getReviewByProductId(productId: string): Review | undefined {
  return reviews.find(r => r.productId === productId);
}

export function getReviewBySlug(slug: string): Review | undefined {
  return reviews.find(r => r.slug === slug);
}

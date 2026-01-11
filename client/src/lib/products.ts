import type { Product, Guide, Comparison, Category, Subcategory } from "@shared/schema";
import { categories as schemaCategories } from "@shared/schema";

export const products: Product[] = [
  {
    id: "1",
    name: "Bowflex Treadmill 22",
    slug: "bowflex-treadmill-22",
    categoryId: "exercise-equipment",
    subcategoryId: "treadmills",
    shortDescription: "Premium home treadmill with 22\" HD touchscreen and JRNY adaptive fitness platform",
    price: 2498,
    originalPrice: 2999,
    imageUrl: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&h=600&fit=crop",
    brand: "Bowflex",
    features: ["22\" HD Touchscreen", "-5% to 20% Incline", "JRNY Membership Included", "Bluetooth Speakers"],
    pros: ["Excellent build quality and quiet motor", "Immersive workout experience with streaming", "Great entertainment options", "Folds for storage"],
    cons: ["Premium price point", "Large footprint when unfolded", "Subscription needed for full features"],
    affiliateLinks: [
      { store: "Amazon", url: "https://amazon.com/dp/placeholder", price: 2498 },
      { store: "Bowflex", url: "https://bowflex.com/placeholder", price: 2498 },
    ],
    specifications: {
      "Motor": "4.0 HP",
      "Speed Range": "0-12 MPH",
      "Incline Range": "-5% to 20%",
      "Running Surface": "22\" x 60\"",
      "Weight Capacity": "400 lbs",
    },
    isFeatured: true,
    isTrending: true,
    aggregatedRating: 4.7,
    totalReviewCount: 2847,
    reviewSources: [
      { platform: "Amazon", rating: 4.6, reviewCount: 2156, snippet: "Best treadmill I've ever owned. The screen is amazing." },
      { platform: "Reddit", rating: 4.8, reviewCount: 412, snippet: "r/homegym loves this for the build quality" },
      { platform: "Trustpilot", rating: 4.5, reviewCount: 279, snippet: "Great customer service and product" },
    ],
  },
  {
    id: "2",
    name: "Concept2 RowErg",
    slug: "concept2-rowerg",
    categoryId: "exercise-equipment",
    subcategoryId: "rowing-machines",
    shortDescription: "The gold standard in indoor rowing machines used by Olympic athletes worldwide",
    price: 1095,
    imageUrl: "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=600&h=600&fit=crop",
    brand: "Concept2",
    features: ["PM5 Performance Monitor", "Air Resistance", "Separates for Storage", "ErgData App Compatible"],
    pros: ["Industry gold standard for accuracy", "Exceptional durability - lasts decades", "Accurate performance tracking", "Great resale value"],
    cons: ["Basic design aesthetics", "Can be noisy at high intensity", "No built-in workout programs"],
    affiliateLinks: [
      { store: "Amazon", url: "https://amazon.com/dp/placeholder", price: 1095 },
      { store: "Concept2", url: "https://concept2.com/placeholder", price: 1095 },
    ],
    specifications: {
      "Resistance Type": "Air",
      "Monitor": "PM5",
      "Seat Height": "14 inches",
      "Weight Capacity": "500 lbs",
    },
    isFeatured: true,
    isTrending: true,
    aggregatedRating: 4.9,
    totalReviewCount: 5421,
    reviewSources: [
      { platform: "Amazon", rating: 4.9, reviewCount: 4521, snippet: "The GOAT of rowing machines. Period." },
      { platform: "Reddit", rating: 4.9, reviewCount: 687, snippet: "If you want one rower for life, this is it" },
      { platform: "YouTube", rating: 4.8, reviewCount: 213, snippet: "Every fitness YouTuber recommends this" },
    ],
  },
  {
    id: "3",
    name: "Titan Fitness T-3 Series Power Rack",
    slug: "titan-fitness-t3-power-rack",
    categoryId: "exercise-equipment",
    subcategoryId: "weight-racks",
    shortDescription: "Commercial-grade power rack for serious home gym enthusiasts at an excellent value",
    price: 469,
    originalPrice: 549,
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop",
    brand: "Titan Fitness",
    features: ["11-Gauge Steel", "1\" Hole Spacing", "1000 lb Capacity", "Westside Spacing"],
    pros: ["Incredible value for the quality", "Sturdy commercial-grade construction", "Lots of attachment options", "Easy assembly"],
    cons: ["Paint chips during shipping", "Limited color options", "Accessories sold separately"],
    affiliateLinks: [
      { store: "Titan Fitness", url: "https://titanfitness.com/placeholder", price: 469 },
      { store: "Amazon", url: "https://amazon.com/dp/placeholder", price: 499 },
    ],
    specifications: {
      "Steel Gauge": "11-gauge",
      "Hole Size": "1\"",
      "Hole Spacing": "2\" Westside Pattern",
      "Weight Capacity": "1000 lbs",
    },
    isFeatured: false,
    isTrending: true,
    aggregatedRating: 4.6,
    totalReviewCount: 1892,
    reviewSources: [
      { platform: "Amazon", rating: 4.5, reviewCount: 1234, snippet: "Best value rack on the market" },
      { platform: "Reddit", rating: 4.7, reviewCount: 456, snippet: "r/homegym budget king" },
      { platform: "Trustpilot", rating: 4.6, reviewCount: 202, snippet: "Great quality for the price" },
    ],
  },
  {
    id: "4",
    name: "NordicTrack Commercial 2950",
    slug: "nordictrack-commercial-2950",
    categoryId: "exercise-equipment",
    subcategoryId: "treadmills",
    shortDescription: "Feature-packed treadmill with 22\" touchscreen and iFit interactive training",
    price: 2999,
    originalPrice: 3499,
    imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=600&fit=crop",
    brand: "NordicTrack",
    features: ["22\" Smart HD Touchscreen", "-3% to 15% Incline", "iFit Enabled", "AutoBreeze Fans"],
    pros: ["Immersive iFit experience", "Automatic trainer control adjusts speed/incline", "Quality build", "Good deck cushioning"],
    cons: ["Requires iFit subscription for best experience", "Very heavy unit", "Complex assembly"],
    affiliateLinks: [
      { store: "Amazon", url: "https://amazon.com/dp/placeholder", price: 2999 },
      { store: "NordicTrack", url: "https://nordictrack.com/placeholder", price: 2999 },
    ],
    specifications: {
      "Motor": "4.25 HP",
      "Speed Range": "0-12 MPH",
      "Incline Range": "-3% to 15%",
      "Running Surface": "22\" x 60\"",
    },
    isFeatured: false,
    isTrending: false,
    aggregatedRating: 4.5,
    totalReviewCount: 1756,
    reviewSources: [
      { platform: "Amazon", rating: 4.4, reviewCount: 1234, snippet: "iFit makes workouts fun" },
      { platform: "Reddit", rating: 4.6, reviewCount: 312, snippet: "Great if you commit to iFit" },
      { platform: "Trustpilot", rating: 4.5, reviewCount: 210, snippet: "Solid treadmill overall" },
    ],
  },
  {
    id: "5",
    name: "WHOOP 4.0",
    slug: "whoop-4",
    categoryId: "smart-devices",
    subcategoryId: "fitness-trackers",
    shortDescription: "Advanced fitness and health wearable with 24/7 monitoring and personalized insights",
    price: 239,
    imageUrl: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&h=600&fit=crop",
    brand: "WHOOP",
    features: ["Strain Coach", "Sleep Tracking", "Recovery Score", "HRV Monitoring"],
    pros: ["Comprehensive health metrics", "No screen distractions", "Comfortable 24/7 wear", "Actionable recovery insights"],
    cons: ["Requires monthly subscription", "No GPS built-in", "Learning curve for data"],
    affiliateLinks: [
      { store: "WHOOP", url: "https://whoop.com/placeholder", price: 239 },
      { store: "Amazon", url: "https://amazon.com/dp/placeholder", price: 239 },
    ],
    specifications: {
      "Battery Life": "5 days",
      "Water Resistance": "IP68",
      "Sensors": "PPG, Accelerometer, Gyroscope, Temperature",
    },
    isFeatured: true,
    isTrending: true,
    aggregatedRating: 4.4,
    totalReviewCount: 3156,
    reviewSources: [
      { platform: "Amazon", rating: 4.3, reviewCount: 2156, snippet: "Best recovery tracker available" },
      { platform: "Reddit", rating: 4.5, reviewCount: 687, snippet: "Changed how I approach training" },
      { platform: "Trustpilot", rating: 4.4, reviewCount: 313, snippet: "Great product, subscription is pricey" },
    ],
  },
  {
    id: "6",
    name: "Oura Ring Gen 3",
    slug: "oura-ring-gen-3",
    categoryId: "smart-devices",
    subcategoryId: "fitness-trackers",
    shortDescription: "Smart ring for sleep, activity, and readiness tracking in an elegant form factor",
    price: 299,
    imageUrl: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&h=600&fit=crop",
    brand: "Oura",
    features: ["Sleep Staging", "Temperature Sensing", "Activity Tracking", "Readiness Score"],
    pros: ["Sleek ring design - discreet", "Excellent sleep tracking accuracy", "Long battery life", "Comfortable to wear 24/7"],
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
    aggregatedRating: 4.5,
    totalReviewCount: 2834,
    reviewSources: [
      { platform: "Amazon", rating: 4.5, reviewCount: 1834, snippet: "Best sleep tracker I've used" },
      { platform: "Reddit", rating: 4.6, reviewCount: 687, snippet: "The gold standard for sleep" },
      { platform: "YouTube", rating: 4.4, reviewCount: 313, snippet: "Tech reviewers love it" },
    ],
  },
  {
    id: "7",
    name: "Peloton App Membership",
    slug: "peloton",
    categoryId: "digital-subscriptions",
    subcategoryId: "fitness-apps",
    shortDescription: "World-class fitness classes from strength to yoga, accessible on any device",
    price: 12.99,
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=600&fit=crop",
    brand: "Peloton",
    features: ["10,000+ Classes", "Multiple Disciplines", "Live & On-Demand", "Progress Tracking"],
    pros: ["Huge class library - something for everyone", "Top-tier instructors", "Multi-platform access", "Regular new content"],
    cons: ["No equipment integration without bike/tread", "Competitive features limited", "Price adds up yearly"],
    affiliateLinks: [
      { store: "Peloton", url: "https://onepeloton.com/placeholder", price: 12.99 },
    ],
    specifications: {
      "Class Types": "Strength, Cardio, Yoga, Meditation, Running",
      "Platforms": "iOS, Android, Web, TV Apps",
      "Profiles": "Up to 6",
    },
    isFeatured: true,
    isTrending: false,
    aggregatedRating: 4.6,
    totalReviewCount: 6521,
    reviewSources: [
      { platform: "Amazon", rating: 4.6, reviewCount: 4521, snippet: "Best fitness app available" },
      { platform: "Reddit", rating: 4.7, reviewCount: 1234, snippet: "Instructors make the difference" },
      { platform: "Trustpilot", rating: 4.5, reviewCount: 766, snippet: "Great value for the content" },
    ],
  },
  {
    id: "8",
    name: "LADDER by Arnold",
    slug: "ladder-by-arnold",
    categoryId: "nutrition-supplements",
    subcategoryId: "protein",
    shortDescription: "Arnold Schwarzenegger's science-backed protein and supplement line for serious athletes",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop",
    brand: "LADDER",
    features: ["NSF Certified", "Clean Ingredients", "Arnold Approved", "Performance Tested"],
    pros: ["Science-backed formulas", "Clean ingredient profile", "Great taste", "Trusted by pro athletes"],
    cons: ["Premium price point", "Limited flavor options", "Not widely available in stores"],
    affiliateLinks: [
      { store: "LADDER", url: "https://ladder.sport/placeholder", price: 49.99 },
      { store: "Amazon", url: "https://amazon.com/dp/placeholder", price: 49.99 },
    ],
    specifications: {
      "Protein Per Serving": "26g",
      "Servings": "20",
      "Certification": "NSF Certified for Sport",
    },
    isFeatured: false,
    isTrending: false,
    aggregatedRating: 4.3,
    totalReviewCount: 1892,
    reviewSources: [
      { platform: "Amazon", rating: 4.2, reviewCount: 892, snippet: "Great protein from Arnold's team" },
      { platform: "Reddit", rating: 4.4, reviewCount: 687, snippet: "Quality over quantity" },
      { platform: "YouTube", rating: 4.3, reviewCount: 313, snippet: "Solid science-based approach" },
    ],
  },
  {
    id: "9",
    name: "Onnit Alpha Brain",
    slug: "onnit-alpha-brain",
    categoryId: "nutrition-supplements",
    subcategoryId: "vitamins",
    shortDescription: "Flagship nootropic for focus, memory, and mental clarity without caffeine",
    price: 79.95,
    originalPrice: 89.95,
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&h=600&fit=crop",
    brand: "Onnit",
    features: ["Caffeine-Free", "Clinically Studied", "Memory Support", "Flow State Enhancement"],
    pros: ["No caffeine jitters", "Noticeable focus boost", "Third-party tested", "Stacks well with other supplements"],
    cons: ["Premium price", "Results vary by individual", "Takes time to notice effects"],
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
    aggregatedRating: 4.2,
    totalReviewCount: 5892,
    reviewSources: [
      { platform: "Amazon", rating: 4.1, reviewCount: 4892, snippet: "Subtle but noticeable focus improvement" },
      { platform: "Reddit", rating: 4.3, reviewCount: 687, snippet: "r/nootropics approved" },
      { platform: "Trustpilot", rating: 4.2, reviewCount: 313, snippet: "Quality product from Onnit" },
    ],
  },
  {
    id: "10",
    name: "Onnit Total Human",
    slug: "onnit-total-human",
    categoryId: "nutrition-supplements",
    subcategoryId: "vitamins",
    shortDescription: "Complete daily supplement system for total body optimization in convenient packs",
    price: 139,
    originalPrice: 159,
    imageUrl: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&h=600&fit=crop",
    brand: "Onnit",
    features: ["Day + Night Packs", "Complete Vitamin Stack", "Performance Support", "Sleep Optimization"],
    pros: ["Comprehensive all-in-one formula", "Convenient daily packs", "Day/night optimization", "Quality ingredients"],
    cons: ["Higher cost per day", "Many pills to take", "May duplicate existing supplements"],
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
    aggregatedRating: 4.4,
    totalReviewCount: 2567,
    reviewSources: [
      { platform: "Amazon", rating: 4.3, reviewCount: 1567, snippet: "Best all-in-one supplement stack" },
      { platform: "Reddit", rating: 4.5, reviewCount: 687, snippet: "Worth it for the convenience" },
      { platform: "Trustpilot", rating: 4.4, reviewCount: 313, snippet: "Premium quality supplements" },
    ],
  },
];

export const comparisons: Comparison[] = [
  {
    id: "1",
    slug: "bowflex-vs-nordictrack-treadmills",
    title: "Bowflex Treadmill 22 vs NordicTrack 2950: Which Premium Treadmill Wins?",
    description: "A detailed comparison of two top premium home treadmills based on real user reviews",
    productIds: ["1", "4"],
    publishedAt: "2026-01-08",
    imageUrl: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&h=450&fit=crop",
  },
  {
    id: "2",
    slug: "whoop-vs-oura",
    title: "WHOOP 4.0 vs Oura Ring Gen 3: Best Recovery Tracker 2026",
    description: "Comparing the two most popular recovery and sleep trackers based on thousands of user reviews",
    productIds: ["5", "6"],
    publishedAt: "2026-01-05",
    imageUrl: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&h=450&fit=crop",
  },
];

export const guides: Guide[] = [
  {
    id: "1",
    slug: "home-gym-setup-2026",
    title: "Complete Home Gym Setup Guide 2026",
    excerpt: "Everything you need to build the perfect home gym, from essential equipment to optional upgrades",
    content: "",
    author: "Fitness Thyme Team",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    publishedAt: "2026-01-10",
    readTime: 15,
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=450&fit=crop",
    relatedProducts: ["2", "3"],
    category: "Setup Guides",
  },
  {
    id: "2",
    slug: "best-treadmills-2026",
    title: "Best Treadmills 2026: A Buyer's Guide",
    excerpt: "Our curated list of the best home treadmills based on aggregated reviews from Amazon, Reddit, and more",
    content: "",
    author: "Fitness Thyme Team",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    publishedAt: "2026-01-08",
    readTime: 12,
    imageUrl: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&h=450&fit=crop",
    relatedProducts: ["1", "4"],
    category: "Buying Guides",
  },
  {
    id: "3",
    slug: "recovery-tracking-guide",
    title: "Ultimate Guide to Recovery Tracking",
    excerpt: "How to use wearables like WHOOP and Oura to optimize your training and recovery",
    content: "",
    author: "Fitness Thyme Team",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    publishedAt: "2026-01-02",
    readTime: 10,
    imageUrl: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&h=450&fit=crop",
    relatedProducts: ["5", "6"],
    category: "Guides",
  },
];

export const categories = schemaCategories;

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(p => p.categoryId === categoryId);
}

export function getProductsBySubcategory(subcategoryId: string): Product[] {
  return products.filter(p => p.subcategoryId === subcategoryId);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.isFeatured);
}

export function getTrendingProducts(): Product[] {
  return products.filter(p => p.isTrending);
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find(c => c.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getSubcategoryBySlug(categorySlug: string, subcategorySlug: string): Subcategory | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories?.find(s => s.slug === subcategorySlug);
}

export function getProductUrl(product: Product): string {
  const category = categories.find(c => c.id === product.categoryId);
  const subcategory = category?.subcategories?.find(s => s.id === product.subcategoryId);
  if (category && subcategory) {
    return `/${category.slug}/${subcategory.slug}/${product.slug}`;
  }
  return `/${category?.slug || 'products'}/${product.slug}`;
}

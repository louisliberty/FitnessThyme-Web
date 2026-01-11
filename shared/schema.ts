import { z } from "zod";

export interface ReviewSource {
  platform: "Amazon" | "Reddit" | "Trustpilot" | "YouTube";
  rating: number;
  reviewCount: number;
  snippet?: string;
  url?: string;
}

export interface AffiliateLink {
  store: string;
  url: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  subcategoryId?: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  brand: string;
  features: string[];
  pros: string[];
  cons: string[];
  affiliateLinks: AffiliateLink[];
  specifications: Record<string, string>;
  isFeatured: boolean;
  isTrending: boolean;
  aggregatedRating: number;
  totalReviewCount: number;
  reviewSources: ReviewSource[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  productCount: number;
  imageUrl?: string;
  subcategories?: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  productCount: number;
}

export interface Comparison {
  id: string;
  slug: string;
  title: string;
  description: string;
  productIds: string[];
  publishedAt: string;
  imageUrl: string;
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  publishedAt: string;
  readTime: number;
  imageUrl: string;
  relatedProducts: string[];
  category: string;
}

export interface Subscriber {
  id: string;
  email: string;
  subscribedAt: Date;
}

export const categories: Category[] = [
  {
    id: "exercise-equipment",
    name: "Exercise Equipment",
    slug: "exercise-equipment",
    description: "Premium treadmills, rowers, power racks and strength training equipment for your home gym",
    productCount: 4,
    subcategories: [
      { id: "treadmills", name: "Treadmills", slug: "treadmills", description: "Premium home treadmills with smart features", productCount: 2 },
      { id: "rowing-machines", name: "Rowing Machines", slug: "rowing-machines", description: "Air, water, and magnetic rowers for full-body cardio", productCount: 1 },
      { id: "home-gyms", name: "Home Gyms", slug: "home-gyms", description: "Complete home gym systems and multi-stations", productCount: 0 },
      { id: "weight-racks", name: "Weight Racks", slug: "weight-racks", description: "Power racks, squat stands, and weight storage", productCount: 1 },
    ],
  },
  {
    id: "smart-devices",
    name: "Smart Devices",
    slug: "smart-devices",
    description: "Wearable fitness trackers, smart watches, and recovery monitoring devices",
    productCount: 2,
    subcategories: [
      { id: "fitness-trackers", name: "Fitness Trackers", slug: "fitness-trackers", description: "Wearable fitness and recovery trackers", productCount: 2 },
      { id: "scales", name: "Smart Scales", slug: "scales", description: "Connected scales with body composition analysis", productCount: 0 },
      { id: "wearables", name: "Wearables", slug: "wearables", description: "Smart watches and connected fitness gear", productCount: 0 },
    ],
  },
  {
    id: "digital-subscriptions",
    name: "Digital Subscriptions",
    slug: "digital-subscriptions",
    description: "Fitness apps, training programs, and digital coaching platforms",
    productCount: 1,
    subcategories: [
      { id: "fitness-apps", name: "Fitness Apps", slug: "fitness-apps", description: "Workout and training apps", productCount: 1 },
      { id: "coaching", name: "Coaching", slug: "coaching", description: "Online personal training and coaching services", productCount: 0 },
      { id: "streaming", name: "Streaming", slug: "streaming", description: "Fitness video streaming platforms", productCount: 0 },
    ],
  },
  {
    id: "nutrition-supplements",
    name: "Nutrition & Supplements",
    slug: "nutrition-supplements",
    description: "Premium supplements, protein, and nutrition products",
    productCount: 3,
    subcategories: [
      { id: "protein", name: "Protein", slug: "protein", description: "Protein powders and supplements", productCount: 1 },
      { id: "vitamins", name: "Vitamins", slug: "vitamins", description: "Vitamins, nootropics, and supplement stacks", productCount: 2 },
      { id: "meal-replacements", name: "Meal Replacements", slug: "meal-replacements", description: "Complete nutrition shakes and bars", productCount: 0 },
    ],
  },
];

export const insertSubscriberSchema = z.object({
  email: z.string().email(),
});

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;

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
      { id: "rowers", name: "Rowing Machines", slug: "rowers", description: "Air, water, and magnetic rowers for full-body cardio", productCount: 1 },
      { id: "strength", name: "Strength Equipment", slug: "strength", description: "Power racks, benches, and weight systems", productCount: 1 },
    ],
  },
  {
    id: "smart-devices",
    name: "Smart Devices",
    slug: "smart-devices",
    description: "Wearable fitness trackers, smart watches, and recovery monitoring devices",
    productCount: 2,
    subcategories: [
      { id: "wearables", name: "Wearables", slug: "wearables", description: "Fitness trackers and smart rings", productCount: 2 },
    ],
  },
  {
    id: "digital-subscriptions",
    name: "Digital Subscriptions",
    slug: "digital-subscriptions",
    description: "Fitness apps, training programs, and digital coaching platforms",
    productCount: 2,
    subcategories: [
      { id: "fitness-apps", name: "Fitness Apps", slug: "fitness-apps", description: "Workout and training apps", productCount: 2 },
    ],
  },
  {
    id: "nutrition-supplements",
    name: "Nutrition & Supplements",
    slug: "nutrition-supplements",
    description: "Premium supplements, nootropics, and nutrition products",
    productCount: 2,
    subcategories: [
      { id: "nootropics", name: "Nootropics", slug: "nootropics", description: "Cognitive enhancement supplements", productCount: 1 },
      { id: "vitamins", name: "Vitamins & Stacks", slug: "vitamins", description: "Complete vitamin systems", productCount: 1 },
    ],
  },
];

export const insertSubscriberSchema = z.object({
  email: z.string().email(),
});

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;

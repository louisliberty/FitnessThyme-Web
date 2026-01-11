import { z } from "zod";

// Categories
export const categories = [
  { id: "exercise-equipment", name: "Exercise Equipment", slug: "exercise-equipment", description: "Premium treadmills, rowers, and home gym equipment", productCount: 4 },
  { id: "smart-devices", name: "Smart Devices", slug: "smart-devices", description: "Fitness trackers and wearables from Whoop, Oura, and more", productCount: 2 },
  { id: "digital-subscriptions", name: "Digital Subscriptions", slug: "digital-subscriptions", description: "Streaming fitness apps and workout programs", productCount: 2 },
  { id: "nutrition-supplements", name: "Nutrition & Supplements", slug: "nutrition-supplements", description: "Premium supplements and nutrition products", productCount: 2 },
] as const;

export type Category = (typeof categories)[number];

// Product schema
export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  categoryId: z.string(),
  shortDescription: z.string(),
  price: z.number(),
  originalPrice: z.number().optional(),
  rating: z.number().min(0).max(5),
  reviewCount: z.number(),
  imageUrl: z.string(),
  brand: z.string(),
  features: z.array(z.string()),
  pros: z.array(z.string()),
  cons: z.array(z.string()),
  affiliateLinks: z.array(z.object({
    store: z.string(),
    url: z.string(),
    price: z.number(),
  })),
  specifications: z.record(z.string()),
  isFeatured: z.boolean().default(false),
  isTrending: z.boolean().default(false),
  overallScore: z.number().min(0).max(10),
  scores: z.object({
    performance: z.number(),
    value: z.number(),
    quality: z.number(),
    features: z.number(),
  }),
});

export type Product = z.infer<typeof productSchema>;
export type InsertProduct = z.infer<typeof productSchema>;

// Review schema (for full product reviews)
export const reviewSchema = z.object({
  id: z.string(),
  productId: z.string(),
  title: z.string(),
  slug: z.string(),
  excerpt: z.string(),
  content: z.string(), // HTML content for 2000-word reviews
  author: z.string(),
  authorImage: z.string(),
  publishedAt: z.string(),
  readTime: z.number(),
  imageUrl: z.string(),
});

export type Review = z.infer<typeof reviewSchema>;

// Blog post schema
export const blogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  excerpt: z.string(),
  content: z.string(),
  author: z.string(),
  authorImage: z.string(),
  publishedAt: z.string(),
  readTime: z.number(),
  imageUrl: z.string(),
  category: z.string(),
  tags: z.array(z.string()),
  relatedProducts: z.array(z.string()),
});

export type BlogPost = z.infer<typeof blogPostSchema>;

// Email subscriber schema
export const subscriberSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  subscribedAt: z.string(),
});

export type Subscriber = z.infer<typeof subscriberSchema>;
export const insertSubscriberSchema = subscriberSchema.pick({ email: true });
export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;

// Keep existing user schema for compatibility
import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

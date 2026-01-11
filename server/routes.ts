import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { 
  products, 
  blogPosts, 
  reviews, 
  categories,
  getProductById,
  getProductBySlug,
  getProductsByCategory,
  getFeaturedProducts,
  getTrendingProducts,
  getBlogPostBySlug,
  getReviewByProductId,
  getReviewBySlug
} from "./data";

const emailSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get("/api/products", (_req, res) => {
    res.json(products);
  });

  app.get("/api/products/featured", (_req, res) => {
    res.json(getFeaturedProducts());
  });

  app.get("/api/products/trending", (_req, res) => {
    res.json(getTrendingProducts());
  });

  app.get("/api/products/:slug", (req, res) => {
    const product = getProductBySlug(req.params.slug);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  });

  app.get("/api/categories", (_req, res) => {
    res.json(categories);
  });

  app.get("/api/categories/:slug/products", (req, res) => {
    const categoryProducts = getProductsByCategory(req.params.slug);
    res.json(categoryProducts);
  });

  app.get("/api/blog", (_req, res) => {
    res.json(blogPosts);
  });

  app.get("/api/blog/:slug", (req, res) => {
    const post = getBlogPostBySlug(req.params.slug);
    if (!post) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json(post);
  });

  app.get("/api/reviews", (_req, res) => {
    res.json(reviews);
  });

  app.get("/api/reviews/product/:productId", (req, res) => {
    const review = getReviewByProductId(req.params.productId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json(review);
  });

  app.get("/api/reviews/:slug", (req, res) => {
    const review = getReviewBySlug(req.params.slug);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json(review);
  });

  app.post("/api/subscribe", async (req, res) => {
    try {
      const { email } = emailSchema.parse(req.body);

      const existing = await storage.getSubscriberByEmail(email);
      if (existing) {
        return res.status(400).json({ message: "Email already subscribed" });
      }

      const subscriber = await storage.createSubscriber(email);
      res.status(201).json({ 
        message: "Successfully subscribed!", 
        id: subscriber.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: error.errors[0]?.message || "Invalid email" 
        });
      }
      console.error("Subscribe error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/subscribers", async (_req, res) => {
    try {
      const subscribers = await storage.getAllSubscribers();
      res.json(subscribers);
    } catch (error) {
      console.error("Get subscribers error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  return httpServer;
}

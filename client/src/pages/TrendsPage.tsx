import { Link } from "wouter";
import { ChevronRight, TrendingUp, Flame } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ProductCard from "@/components/ProductCard";
import { getTrendingProducts, getProductUrl } from "@/lib/products";

export default function TrendsPage() {
  const trendingProducts = getTrendingProducts();

  return (
    <Layout>
      <SEO
        title="Trending Fitness Products 2026 | Fitness Thyme"
        description="Discover what's trending in fitness right now. The most popular exercise equipment, smart devices, and supplements based on user reviews and search trends."
      />

      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" data-testid="nav-breadcrumb">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">Trends</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <Flame className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h1 className="text-3xl font-bold" data-testid="text-page-title">Trending Now</h1>
              <p className="text-muted-foreground">What's hot in fitness right now</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              productUrl={getProductUrl(product)}
            />
          ))}
        </div>

        {trendingProducts.length === 0 && (
          <div className="text-center py-12">
            <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No trending products at the moment. Check back soon!</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

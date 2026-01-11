import { Link } from "wouter";
import { ArrowRight, Shield, Award, TrendingUp, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ProductCard";
import { BlogCard } from "@/components/BlogCard";
import { SEO } from "@/components/SEO";
import { categories } from "@shared/schema";
import { getTrendingProducts, getFeaturedProducts, blogPosts } from "@/lib/products";

const categoryImages: Record<string, string> = {
  "exercise-equipment": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
  "smart-devices": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop",
  "digital-subscriptions": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
  "nutrition-supplements": "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=300&fit=crop",
};

export default function Home() {
  const trendingProducts = getTrendingProducts();
  const featuredProducts = getFeaturedProducts();
  const latestPosts = blogPosts.slice(0, 2);

  return (
    <Layout>
      <SEO
        title="Fitness Thyme - High Ticket Home Gym Equipment Reviews & Deals 2026"
        description="Expert reviews of premium fitness equipment, smart devices, and supplements. Compare treadmills, rowers, Whoop, Oura, Peloton and more. Unbiased recommendations for your home gym."
        keywords="high ticket home gym equipment reviews, best treadmill 2026, rowing machine reviews, Whoop vs Oura, Peloton app review, Onnit supplements, home gym setup, fitness equipment comparison"
        canonicalUrl="https://fitnessthyme.com"
      />
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 backdrop-blur-md">
            January 2026 Deals
          </Badge>
          
          <h1 
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-4xl mx-auto leading-tight"
            data-testid="text-hero-title"
          >
            High Ticket Home Gym Equipment Reviews & Expert Buying Guides
          </h1>
          
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Unbiased reviews of premium treadmills, rowers, smart devices, and supplements. 
            Make informed decisions with our expert analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/category/exercise-equipment">
              <Button size="lg" className="gap-2" data-testid="button-hero-cta">
                Browse Equipment
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline" className="backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20" data-testid="button-hero-guides">
                Read Buying Guides
              </Button>
            </Link>
          </div>

          {featuredProducts.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <span className="text-white/60 text-sm">Featured Today:</span>
              {featuredProducts.slice(0, 3).map((product) => (
                <Link key={product.id} href={`/product/${product.slug}`}>
                  <Badge className="backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20 cursor-pointer">
                    {product.name} - ${product.price.toLocaleString()}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-4 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-primary-foreground text-sm font-medium">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>10,000+ Products Reviewed</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Expert Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>Unbiased Recommendations</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              <span>Updated Daily</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-2" data-testid="text-categories-title">
                Shop by Category
              </h2>
              <p className="text-muted-foreground">
                Explore our curated selection of premium fitness products
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/category/${category.slug}`}>
                <Card className="overflow-hidden hover-elevate group cursor-pointer h-full" data-testid={`card-category-${category.slug}`}>
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={categoryImages[category.id]}
                      alt={`${category.name} - fitness equipment and products`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-heading font-bold text-lg text-white mb-1">
                        {category.name}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {category.productCount} products
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-2" data-testid="text-trending-title">
                Trending Products
              </h2>
              <p className="text-muted-foreground">
                Top-rated fitness equipment our readers love
              </p>
            </div>
            <Link href="/compare">
              <Button variant="outline" className="gap-2 hidden sm:flex">
                Compare All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingProducts.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link href="/compare">
              <Button variant="outline" className="gap-2">
                Compare All Products
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-2" data-testid="text-reviews-title">
                Latest Reviews & Guides
              </h2>
              <p className="text-muted-foreground">
                Expert analysis and buying advice for 2026
              </p>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="gap-2 hidden sm:flex">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} featured={i === 0} />
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link href="/blog">
              <Button variant="outline" className="gap-2">
                View All Articles
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-primary-foreground mb-4">
            Get Exclusive Deals & Expert Tips
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join 15,000+ fitness enthusiasts who get our weekly newsletter with the best deals, product drops, and expert buying advice.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border-0 bg-white/10 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              data-testid="input-footer-email"
            />
            <Button variant="secondary" size="lg" data-testid="button-footer-subscribe">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

import { Link } from "wouter";
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ProductCard";
import { SEO } from "@/components/SEO";
import { categories } from "@shared/schema";
import { getFeaturedProducts, guides, comparisons } from "@/lib/products";

const categoryImages: Record<string, string> = {
  "exercise-equipment": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
  "smart-devices": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop",
  "digital-subscriptions": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
  "nutrition-supplements": "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=300&fit=crop",
};

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const [carouselIndex, setCarouselIndex] = useState(0);
  
  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % featuredProducts.length);
  };
  
  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  return (
    <Layout>
      <SEO
        title="Fitness Thyme - Premium Fitness Product Directory 2026"
        description="Discover premium wellness gear with real user reviews. Compare elite home gyms, smart devices, and nutrition products. Aggregated ratings from Amazon, Reddit, and Trustpilot."
        keywords="premium home treadmill 2026, best rowing machine, WHOOP vs Oura, Peloton app review, home gym equipment, fitness tracker reviews"
        canonicalUrl="https://fitnessthyme.com"
      />
      
      <section className="relative min-h-[550px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 text-center">
          <Badge variant="secondary" className="mb-6" data-testid="badge-hero">
            Real User Reviews Included
          </Badge>
          
          <h1 
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight"
            data-testid="text-hero-title"
          >
            Discover Premium Wellness Gear
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Elite Home Gyms, Smart Devices, Nutrition – with aggregated reviews from Amazon, Reddit & Trustpilot
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/exercise-equipment">
              <Button size="lg" className="gap-2" data-testid="button-browse-equipment">
                Browse Equipment
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/comparisons/whoop-vs-oura">
              <Button size="lg" variant="outline" data-testid="button-see-comparisons">
                See Comparisons
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
              Featured Products
            </h2>
            <p className="text-muted-foreground">Top-rated gear with real user reviews</p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
              >
                {featuredProducts.map((product) => (
                  <div key={product.id} className="w-full flex-shrink-0 px-4">
                    <Card className="p-6 mx-auto max-w-2xl">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-48 h-48 object-cover rounded-lg"
                        />
                        <div className="flex-1 text-center md:text-left">
                          <Badge variant="secondary" className="mb-2">{product.brand}</Badge>
                          <h3 className="font-heading font-bold text-xl mb-2">{product.name}</h3>
                          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                            <div className="flex items-center gap-1">
                              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                              <span className="font-semibold">{product.aggregatedRating}</span>
                            </div>
                            <span className="text-muted-foreground text-sm">
                              from {product.totalReviewCount.toLocaleString()} reviews
                            </span>
                          </div>
                          <p className="text-2xl font-bold text-primary mb-4">
                            ${product.price.toLocaleString()}
                          </p>
                          <Link href={`/product/${product.slug}`}>
                            <Button data-testid={`button-featured-${product.slug}`}>
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-background"
              onClick={prevSlide}
              data-testid="button-carousel-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-background"
              onClick={nextSlide}
              data-testid="button-carousel-next"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
            
            <div className="flex justify-center gap-2 mt-4">
              {featuredProducts.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === carouselIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCarouselIndex(index)}
                  data-testid={`button-carousel-dot-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
              Shop by Category
            </h2>
            <p className="text-muted-foreground">Find exactly what you need</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/${category.slug}`}>
                <Card 
                  className="group overflow-hidden hover-elevate cursor-pointer h-full"
                  data-testid={`card-category-${category.slug}`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={categoryImages[category.id]}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.productCount} products
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
                Popular Products
              </h2>
              <p className="text-muted-foreground">Based on real user reviews</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
              Comparisons & Guides
            </h2>
            <p className="text-muted-foreground">Make informed decisions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparisons.map((comparison) => (
              <Link key={comparison.id} href={`/comparisons/${comparison.slug}`}>
                <Card className="overflow-hidden hover-elevate cursor-pointer h-full" data-testid={`card-comparison-${comparison.slug}`}>
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={comparison.imageUrl}
                      alt={comparison.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <Badge variant="outline" className="mb-2">Comparison</Badge>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {comparison.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{comparison.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
            
            {guides.slice(0, 2).map((guide) => (
              <Link key={guide.id} href={`/guides/${guide.slug}`}>
                <Card className="overflow-hidden hover-elevate cursor-pointer h-full" data-testid={`card-guide-${guide.slug}`}>
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={guide.imageUrl}
                      alt={guide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <Badge variant="outline" className="mb-2">Guide</Badge>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{guide.excerpt}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
            Stay Updated
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Get notified about new product reviews and exclusive deals
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md bg-primary-foreground text-foreground"
              data-testid="input-newsletter"
            />
            <Button variant="secondary" size="lg" data-testid="button-subscribe">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

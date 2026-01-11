import { useState } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { SEO } from "@/components/SEO";
import { products } from "@/lib/products";
import { categories } from "@shared/schema";

export default function Compare() {
  const [selectedIds, setSelectedIds] = useState<string[]>(
    products.slice(0, 3).map(p => p.id)
  );
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProducts = activeCategory
    ? products.filter(p => p.categoryId === activeCategory)
    : products;

  const selectedProducts = products.filter(p => selectedIds.includes(p.id));

  const toggleProduct = (id: string) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(pid => pid !== id);
      }
      if (prev.length >= 4) {
        return [...prev.slice(1), id];
      }
      return [...prev, id];
    });
  };

  const bestProduct = selectedProducts.length > 0
    ? selectedProducts.reduce((best, p) => p.overallScore > best.overallScore ? p : best)
    : null;

  return (
    <Layout>
      <SEO
        title="Compare Fitness Equipment Side-by-Side | Fitness Thyme"
        description="Compare treadmills, rowers, smart devices, and supplements side-by-side. Find the best fitness equipment for your home gym with our comparison tool."
        keywords="compare fitness equipment, treadmill comparison, rower comparison, fitness tracker comparison, home gym equipment comparison"
        canonicalUrl="https://fitnessthyme.com/compare"
      />
      <section className="relative h-48 flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="relative z-10 text-center px-4">
          <nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/">
              <span className="hover:text-foreground transition-colors">Home</span>
            </Link>
            <span>/</span>
            <span className="text-foreground">Compare</span>
          </nav>
          
          <h1 
            className="font-heading font-bold text-4xl text-foreground mb-2"
            data-testid="text-compare-title"
          >
            Product Comparison Tool
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select up to 4 products to compare side-by-side
          </p>
        </div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm text-muted-foreground">Filter by category:</span>
            <Button
              variant={activeCategory === null ? "secondary" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(null)}
            >
              All
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "secondary" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <Card className="p-4 sticky top-20">
                <h3 className="font-heading font-semibold text-foreground mb-4">
                  Select Products ({selectedIds.length}/4)
                </h3>
                <div className="space-y-3 max-h-[60vh] overflow-y-auto">
                  {filteredProducts.map((product) => (
                    <label
                      key={product.id}
                      className="flex items-start gap-3 cursor-pointer group"
                    >
                      <Checkbox
                        checked={selectedIds.includes(product.id)}
                        onCheckedChange={() => toggleProduct(product.id)}
                        disabled={!selectedIds.includes(product.id) && selectedIds.length >= 4}
                        data-testid={`checkbox-product-${product.id}`}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-foreground text-sm line-clamp-1 group-hover:text-primary transition-colors">
                          {product.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          ${product.price.toLocaleString()} • {product.rating.toFixed(1)}★
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                {selectedIds.length > 0 && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4"
                    onClick={() => setSelectedIds([])}
                  >
                    Clear Selection
                  </Button>
                )}
              </Card>
            </aside>

            <div className="lg:col-span-3">
              {selectedProducts.length > 0 ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-heading font-bold text-xl text-foreground">
                      Comparing {selectedProducts.length} Products
                    </h2>
                    {bestProduct && (
                      <Badge className="bg-primary text-primary-foreground">
                        Best Pick: {bestProduct.name}
                      </Badge>
                    )}
                  </div>
                  <ComparisonTable
                    products={selectedProducts}
                    bestProductId={bestProduct?.id}
                  />
                </>
              ) : (
                <Card className="p-12 text-center">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    No Products Selected
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Select products from the sidebar to start comparing
                  </p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
            Need More Help Deciding?
          </h2>
          <p className="text-muted-foreground mb-6">
            Check out our in-depth buying guides and expert reviews for detailed analysis
          </p>
          <Link href="/blog">
            <Button data-testid="button-browse-guides">
              Browse Buying Guides
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

import { Link } from "wouter";
import { ChevronRight, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { comparisons, getProductById } from "@/lib/products";

export default function ComparisonsIndex() {
  return (
    <Layout>
      <SEO
        title="Product Comparisons - Side by Side Reviews | Fitness Thyme"
        description="Compare the best fitness products side by side. Real user reviews from Amazon, Reddit, and Trustpilot help you make the right choice."
      />

      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" data-testid="nav-breadcrumb">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">Product Comparisons</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4" data-testid="text-page-title">Product Comparisons</h1>
          <p className="text-muted-foreground max-w-2xl">
            Can't decide between two products? Our side-by-side comparisons break down the key differences
            using real user reviews from Amazon, Reddit, and Trustpilot.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {comparisons.map((comparison) => {
            const products = comparison.productIds.map(id => getProductById(id)).filter(Boolean);
            return (
              <Card key={comparison.id} className="overflow-hidden hover-elevate" data-testid={`card-comparison-${comparison.slug}`}>
                <div className="aspect-video relative">
                  <img
                    src={comparison.imageUrl}
                    alt={comparison.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-white text-xl font-semibold">{comparison.title}</h2>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-muted-foreground mb-4">{comparison.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {products.map((product, index) => (
                        <img
                          key={index}
                          src={product?.imageUrl}
                          alt={product?.name}
                          className="w-10 h-10 rounded-full border-2 border-background object-cover"
                        />
                      ))}
                    </div>
                    <Button asChild variant="ghost" data-testid={`link-comparison-${comparison.slug}`}>
                      <Link href={`/product-comparisons/${comparison.slug}`}>
                        View Comparison
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

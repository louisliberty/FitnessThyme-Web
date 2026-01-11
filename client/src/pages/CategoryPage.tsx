import { useParams, Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ProductCard";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/products";

const categoryImages: Record<string, string> = {
  "exercise-equipment": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=400&fit=crop",
  "smart-devices": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=1920&h=400&fit=crop",
  "digital-subscriptions": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&h=400&fit=crop",
  "nutrition-supplements": "https://images.unsplash.com/photo-1550572017-edd951b55104?w=1920&h=400&fit=crop",
};

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const categoryData = category ? getCategoryBySlug(category) : undefined;
  const products = category ? getProductsByCategory(category) : [];

  if (!categoryData) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <Link href="/">
            <span className="text-primary hover:underline">Return to Home</span>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`${categoryData.name} - Premium Products 2026 | Fitness Thyme`}
        description={`${categoryData.description}. Browse ${categoryData.productCount} products with aggregated reviews from Amazon, Reddit, and Trustpilot.`}
        keywords={`best ${categoryData.name.toLowerCase()} 2026, ${categoryData.name.toLowerCase()} reviews, premium ${categoryData.name.toLowerCase()}`}
        canonicalUrl={`https://fitnessthyme.com/${categoryData.slug}`}
      />

      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${categoryImages[categoryData.id]}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        
        <div className="relative z-10 text-center px-4">
          <nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/">
              <span className="hover:text-foreground transition-colors">Home</span>
            </Link>
            <span>/</span>
            <span className="text-foreground">{categoryData.name}</span>
          </nav>
          
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-3">
            {categoryData.name}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {categoryData.description}
          </p>
        </div>
      </section>

      {categoryData.subcategories && categoryData.subcategories.length > 0 && (
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-semibold text-xl mb-4">Browse by Type</h2>
            <div className="flex flex-wrap gap-3">
              {categoryData.subcategories.map((sub) => (
                <Link key={sub.id} href={`/${categoryData.slug}/${sub.slug}`}>
                  <Card className="p-4 hover-elevate cursor-pointer" data-testid={`card-subcategory-${sub.slug}`}>
                    <div className="font-medium text-foreground">{sub.name}</div>
                    <div className="text-sm text-muted-foreground">{sub.productCount} products</div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading font-semibold text-2xl text-foreground">
                All {categoryData.name}
              </h2>
              <p className="text-muted-foreground">{products.length} products</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

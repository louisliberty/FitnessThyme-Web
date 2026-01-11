import { useParams, Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ProductCard";
import { SEO } from "@/components/SEO";
import { getCategoryBySlug, getSubcategoryBySlug, getProductsBySubcategory } from "@/lib/products";

export default function SubcategoryPage() {
  const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
  const categoryData = category ? getCategoryBySlug(category) : undefined;
  const subcategoryData = category && subcategory ? getSubcategoryBySlug(category, subcategory) : undefined;
  const products = subcategory ? getProductsBySubcategory(subcategory) : [];

  if (!categoryData || !subcategoryData) {
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
        title={`Best ${subcategoryData.name} 2026 - Reviews & Comparison | Fitness Thyme`}
        description={`${subcategoryData.description}. Compare ${subcategoryData.productCount} premium ${subcategoryData.name.toLowerCase()} with real user reviews.`}
        keywords={`best ${subcategoryData.name.toLowerCase()} 2026, premium ${subcategoryData.name.toLowerCase()}, ${subcategoryData.name.toLowerCase()} reviews`}
        canonicalUrl={`https://fitnessthyme.com/${categoryData.slug}/${subcategoryData.slug}`}
      />

      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
            <Link href="/">
              <span className="hover:text-foreground transition-colors">Home</span>
            </Link>
            <span>/</span>
            <Link href={`/${categoryData.slug}`}>
              <span className="hover:text-foreground transition-colors">{categoryData.name}</span>
            </Link>
            <span>/</span>
            <span className="text-foreground">{subcategoryData.name}</span>
          </nav>
          
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">
            Best {subcategoryData.name} 2026
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            {subcategoryData.description}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">{products.length} products</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found in this category.</p>
              <Link href={`/${categoryData.slug}`}>
                <span className="text-primary hover:underline">View all {categoryData.name}</span>
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

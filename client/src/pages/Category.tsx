import { useParams } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ProductCard";
import { SEO } from "@/components/SEO";
import { categories } from "@shared/schema";
import { getProductsByCategory } from "@/lib/products";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

const categoryImages: Record<string, string> = {
  "exercise-equipment": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=400&fit=crop",
  "smart-devices": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=1920&h=400&fit=crop",
  "digital-subscriptions": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&h=400&fit=crop",
  "nutrition-supplements": "https://images.unsplash.com/photo-1550572017-edd951b55104?w=1920&h=400&fit=crop",
};

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(c => c.slug === slug);
  const products = slug ? getProductsByCategory(slug) : [];

  if (!category) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-heading font-bold text-3xl text-foreground mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-8">The category you're looking for doesn't exist.</p>
          <Link href="/">
            <span className="text-primary hover:underline">Go back home</span>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`Best ${category.name} 2026 - Reviews & Buying Guide`}
        description={`${category.description}. Expert reviews, comparisons, and deals on the best ${category.name.toLowerCase()} for your home gym.`}
        keywords={`best ${category.name.toLowerCase()} 2026, ${category.name.toLowerCase()} reviews, buy ${category.name.toLowerCase()}, home gym ${category.name.toLowerCase()}`}
        canonicalUrl={`https://fitnessthyme.com/category/${category.slug}`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `${category.name} - Fitness Thyme`,
            description: category.description,
            url: `https://fitnessthyme.com/category/${category.slug}`,
          }),
        }}
      />

      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${categoryImages[category.id]}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        
        <div className="relative z-10 text-center px-4">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-4">
            <Link href="/">
              <span className="hover:text-white transition-colors">Home</span>
            </Link>
            <span>/</span>
            <span className="text-white">{category.name}</span>
          </nav>
          
          <h1 
            className="font-heading font-bold text-4xl sm:text-5xl text-white mb-3"
            data-testid="text-category-title"
          >
            {category.name}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {category.description}
          </p>
          <Badge className="mt-4 bg-white/10 border-white/20 text-white">
            {products.length} products
          </Badge>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
            About {category.name}
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Discover our comprehensive collection of {category.name.toLowerCase()}. Each product has been
              thoroughly tested and reviewed by our expert team to help you make the best purchase decision
              for your fitness journey.
            </p>
            <p>
              We evaluate products based on performance, build quality, value for money, and feature set.
              Our unbiased recommendations are designed to help you find the perfect equipment for your
              home gym or fitness routine.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { useParams, Link } from "wouter";
import { Clock, ChevronRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ProductCard";
import { SEO } from "@/components/SEO";
import { getGuideBySlug, getProductById } from "@/lib/products";

export default function GuidePage() {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? getGuideBySlug(slug) : undefined;

  if (!guide) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Guide Not Found</h1>
          <Link href="/">
            <span className="text-primary hover:underline">Return to Home</span>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = guide.relatedProducts
    .map(id => getProductById(id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  return (
    <Layout>
      <SEO
        title={guide.title}
        description={guide.excerpt}
        keywords={`${guide.category}, ${guide.title.toLowerCase()}, 2026`}
        canonicalUrl={`https://fitnessthyme.com/guides/${guide.slug}`}
        ogImage={guide.imageUrl}
        ogType="article"
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
          <Link href="/">
            <span className="hover:text-foreground transition-colors">Home</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span>Guides</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{guide.title}</span>
        </nav>

        <Badge variant="outline" className="mb-4">{guide.category}</Badge>

        <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
          {guide.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <img
            src={guide.authorImage}
            alt={guide.author}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="font-medium text-foreground">{guide.author}</div>
            <div className="flex items-center gap-3">
              <span>{new Date(guide.publishedAt).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {guide.readTime} min read
              </span>
            </div>
          </div>
        </div>

        <div className="aspect-[16/9] mb-8 rounded-lg overflow-hidden">
          <img
            src={guide.imageUrl}
            alt={guide.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            {guide.excerpt}
          </p>
          
          <h2>Why This Matters</h2>
          <p>
            Setting up a home gym or choosing the right fitness equipment can be overwhelming 
            with so many options available. This guide aggregates real user feedback from Amazon, 
            Reddit, and Trustpilot to help you make an informed decision.
          </p>
          
          <h2>What to Look For</h2>
          <p>
            When evaluating fitness products, we consider factors like build quality, value for money, 
            user experience, and long-term durability. Our recommendations are based on thousands of 
            real user reviews, not sponsored content.
          </p>
          
          <h2>Our Top Picks</h2>
          <p>
            Based on aggregated reviews and expert analysis, here are our top recommendations:
          </p>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mb-12">
            <h2 className="font-heading font-bold text-2xl mb-6">Recommended Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
}

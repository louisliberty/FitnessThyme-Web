import { useParams, Link } from "wouter";
import { Clock, ChevronRight, ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { SEO } from "@/components/SEO";
import { getBlogPostBySlug, getProductById } from "@/lib/products";

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-heading font-bold text-3xl text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <span className="text-primary hover:underline">Back to Blog</span>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = post.relatedProducts
    .map(id => getProductById(id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
        canonicalUrl={`https://fitnessthyme.com/blog/${post.slug}`}
        ogImage={post.imageUrl}
        ogType="article"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.imageUrl,
            author: { "@type": "Person", name: post.author },
            datePublished: post.publishedAt,
            publisher: {
              "@type": "Organization",
              name: "Fitness Thyme",
              url: "https://fitnessthyme.com",
            },
          }),
        }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
          <Link href="/">
            <span className="hover:text-foreground transition-colors">Home</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog">
            <span className="hover:text-foreground transition-colors">Blog</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground line-clamp-1">{post.title}</span>
        </nav>

        <Badge className="mb-4">{post.category}</Badge>

        <h1 
          className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-6 leading-tight"
          data-testid="text-article-title"
        >
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="font-medium text-foreground">{post.author}</div>
              <div className="text-xs">Expert Reviewer</div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} min read</span>
          </div>
          <span>
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        <div className="aspect-video rounded-lg overflow-hidden mb-8">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {post.excerpt}
          </p>

          <h2>Overview</h2>
          <p>
            Finding the right fitness equipment can be overwhelming with so many options on the market. 
            In this comprehensive guide, we break down everything you need to know to make an informed 
            purchase decision.
          </p>

          <h2>What We Look For</h2>
          <p>
            Our testing methodology focuses on four key areas: performance, build quality, value for 
            money, and feature set. We spend weeks with each product before making our recommendations.
          </p>

          <h3>Performance Testing</h3>
          <p>
            We put every product through rigorous real-world testing. For cardio equipment, this means 
            hours of workouts at various intensities. For supplements, we evaluate both short-term and 
            long-term effects with proper controls.
          </p>

          <h3>Build Quality Assessment</h3>
          <p>
            Durability matters when you're investing in high-ticket items. We examine construction 
            materials, manufacturing quality, and long-term reliability based on user reports and our 
            own extended testing periods.
          </p>

          <h2>Our Top Recommendations</h2>
          <p>
            Based on our extensive testing, we've identified the top products in this category. Each 
            recommendation is tailored to different needs and budgets.
          </p>

          <h2>Buying Considerations</h2>
          <p>
            Before making a purchase, consider your available space, budget, fitness goals, and how 
            the equipment fits into your overall workout routine. The best product is the one you'll 
            actually use consistently.
          </p>

          <h2>Final Thoughts</h2>
          <p>
            Investing in quality fitness equipment is an investment in your health. While the upfront 
            cost might seem high, the long-term benefits and durability of premium products often make 
            them the better value.
          </p>
        </div>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-sm text-muted-foreground">Tags:</span>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <Link href="/blog">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Button>
        </Link>
      </article>

      {relatedProducts.length > 0 && (
        <section className="py-12 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
              Products Mentioned
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

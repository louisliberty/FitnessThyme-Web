import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { BlogCard } from "@/components/BlogCard";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { blogPosts } from "@/lib/products";

export default function Blog() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  const allCategories = [...new Set(blogPosts.map(p => p.category))];

  return (
    <Layout>
      <SEO
        title="Fitness Equipment Buying Guides & Expert Reviews 2026"
        description="Expert buying guides, product comparisons, and in-depth fitness equipment reviews. Find the best treadmills, rowers, smart devices, and supplements for your home gym."
        keywords="fitness buying guides, home gym equipment reviews, best fitness equipment 2026, workout equipment comparison"
        canonicalUrl="https://fitnessthyme.com/blog"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Fitness Thyme Blog",
            description: "Expert buying guides, product comparisons, and fitness equipment reviews",
            url: "https://fitnessthyme.com/blog",
          }),
        }}
      />

      <section className="relative h-48 flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="relative z-10 text-center px-4">
          <nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/">
              <span className="hover:text-foreground transition-colors">Home</span>
            </Link>
            <span>/</span>
            <span className="text-foreground">Blog</span>
          </nav>
          
          <h1 
            className="font-heading font-bold text-4xl text-foreground mb-2"
            data-testid="text-blog-page-title"
          >
            Buying Guides & Reviews
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert analysis and advice to help you build the perfect home gym
          </p>
        </div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm text-muted-foreground">Filter by:</span>
            <Badge variant="secondary" className="cursor-pointer">All</Badge>
            {allCategories.map((cat) => (
              <Badge key={cat} variant="outline" className="cursor-pointer hover-elevate">
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
              Featured Article
            </h2>
            <BlogCard post={featuredPost} featured />
          </div>
        </section>
      )}

      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
            Latest Articles
          </h2>
          {otherPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">
              More articles coming soon!
            </p>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
            Looking for Something Specific?
          </h2>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Check out our product categories or use the search to find exactly what you need.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/category/exercise-equipment">
              <Badge variant="outline" className="cursor-pointer hover-elevate px-4 py-2">
                Exercise Equipment
              </Badge>
            </Link>
            <Link href="/category/smart-devices">
              <Badge variant="outline" className="cursor-pointer hover-elevate px-4 py-2">
                Smart Devices
              </Badge>
            </Link>
            <Link href="/category/digital-subscriptions">
              <Badge variant="outline" className="cursor-pointer hover-elevate px-4 py-2">
                Digital Subscriptions
              </Badge>
            </Link>
            <Link href="/category/nutrition-supplements">
              <Badge variant="outline" className="cursor-pointer hover-elevate px-4 py-2">
                Nutrition & Supplements
              </Badge>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { useParams, Link } from "wouter";
import { Star, Check, X, ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { getComparisonBySlug, getProductById, getProductUrl } from "@/lib/products";

export default function ComparisonPage() {
  const { slug } = useParams<{ slug: string }>();
  const comparison = slug ? getComparisonBySlug(slug) : undefined;
  const products = comparison?.productIds.map(id => getProductById(id)).filter(Boolean) || [];

  if (!comparison || products.length < 2) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Comparison Not Found</h1>
          <Link href="/">
            <span className="text-primary hover:underline">Return to Home</span>
          </Link>
        </div>
      </Layout>
    );
  }

  const winner = products.reduce((best, p) => 
    p && (!best || p.aggregatedRating > best.aggregatedRating) ? p : best
  , products[0]);

  return (
    <Layout>
      <SEO
        title={comparison.title}
        description={comparison.description}
        keywords={products.map(p => p?.name).join(", ") + " comparison 2026"}
        canonicalUrl={`https://fitnessthyme.com/product-comparisons/${comparison.slug}`}
        ogImage={comparison.imageUrl}
      />

      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/">
              <span className="hover:text-foreground transition-colors">Home</span>
            </Link>
            <span>/</span>
            <Link href="/product-comparisons">
              <span className="hover:text-foreground transition-colors">Product Comparisons</span>
            </Link>
            <span>/</span>
            <span className="text-foreground">{comparison.title}</span>
          </nav>
          
          <Badge variant="secondary" className="mb-4">Comparison</Badge>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            {comparison.title}
          </h1>
          <p className="text-muted-foreground max-w-3xl">{comparison.description}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {products.map((product) => product && (
              <Card key={product.id} className={`p-6 ${product.id === winner?.id ? 'ring-2 ring-primary' : ''}`}>
                {product.id === winner?.id && (
                  <Badge className="mb-4 bg-primary">Top Pick</Badge>
                )}
                <div className="flex gap-4 mb-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="font-heading font-bold text-xl">{product.name}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-semibold">{product.aggregatedRating}</span>
                      <span className="text-muted-foreground text-sm">
                        ({product.totalReviewCount.toLocaleString()} reviews)
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-primary mt-2">${product.price.toLocaleString()}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">Pros</h3>
                    <ul className="space-y-1">
                      {product.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2 text-destructive">Cons</h3>
                    <ul className="space-y-1">
                      {product.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">User Reviews</h3>
                    <div className="space-y-2">
                      {product.reviewSources.map((source) => (
                        <div key={source.platform} className="bg-muted/50 p-3 rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-sm">{source.platform}</span>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                              <span className="text-sm">{source.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground italic">"{source.snippet}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  {product.affiliateLinks.map((link) => (
                    <Button 
                      key={link.store} 
                      className="w-full gap-2" 
                      variant={link.store === "Amazon" ? "default" : "outline"}
                      asChild
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        Buy on {link.store} - ${link.price.toLocaleString()}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-primary/5">
            <h2 className="font-heading font-bold text-2xl mb-4">Our Verdict</h2>
            <p className="text-muted-foreground mb-4">
              Based on aggregated reviews from Amazon, Reddit, and Trustpilot, <strong>{winner?.name}</strong> comes 
              out ahead with a {winner?.aggregatedRating} rating from {winner?.totalReviewCount.toLocaleString()} reviews. 
              Both are excellent choices, but {winner?.name} offers the best overall value for most users.
            </p>
            <Link href={winner ? getProductUrl(winner) : '/'}>
              <Button>View Full Details</Button>
            </Link>
          </Card>
        </div>
      </section>
    </Layout>
  );
}

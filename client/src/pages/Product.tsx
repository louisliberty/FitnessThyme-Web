import { useParams } from "wouter";
import { Link } from "wouter";
import { Check, X, Star, Clock, ChevronRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RatingStars } from "@/components/RatingStars";
import { ScoreBar } from "@/components/ScoreBar";
import { AffiliateButton } from "@/components/AffiliateButton";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ProductCard } from "@/components/ProductCard";
import { SEO } from "@/components/SEO";
import { getProductBySlug, getReviewByProductId, getProductsByCategory, products } from "@/lib/products";
import { categories } from "@shared/schema";

export default function Product() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const review = product ? getReviewByProductId(product.id) : undefined;

  if (!product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-heading font-bold text-3xl text-foreground mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Link href="/">
            <span className="text-primary hover:underline">Go back home</span>
          </Link>
        </div>
      </Layout>
    );
  }

  const category = categories.find(c => c.id === product.categoryId);
  const relatedProducts = getProductsByCategory(product.categoryId).filter(p => p.id !== product.id).slice(0, 3);
  const compareProducts = products.filter(p => p.categoryId === product.categoryId).slice(0, 3);

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Layout>
      <SEO
        title={`${product.name} Review 2026 - ${product.brand} | Fitness Thyme`}
        description={`${product.shortDescription}. Read our in-depth ${product.name} review with pros, cons, specs, and where to buy at the best price.`}
        keywords={`${product.name} review, ${product.brand} ${category?.name || ''}, buy ${product.name}, ${product.name} price, ${product.name} vs`}
        canonicalUrl={`https://fitnessthyme.com/product/${product.slug}`}
        ogImage={product.imageUrl}
        ogType="product"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.shortDescription,
            image: product.imageUrl,
            brand: { "@type": "Brand", name: product.brand },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: product.rating,
              reviewCount: product.reviewCount,
            },
            offers: {
              "@type": "Offer",
              price: product.price,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            review: review ? {
              "@type": "Review",
              author: { "@type": "Person", name: review.author },
              datePublished: review.publishedAt,
              reviewRating: {
                "@type": "Rating",
                ratingValue: product.overallScore,
                bestRating: 10,
              },
            } : undefined,
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
          <Link href="/">
            <span className="hover:text-foreground transition-colors">Home</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          {category && (
            <>
              <Link href={`/category/${category.slug}`}>
                <span className="hover:text-foreground transition-colors">{category.name}</span>
              </Link>
              <ChevronRight className="w-4 h-4" />
            </>
          )}
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted mb-4">
              <img
                src={product.imageUrl}
                alt={`${product.name} - ${product.brand} ${category?.name || 'fitness equipment'}`}
                className="w-full h-full object-cover"
              />
              {discountPercent > 0 && (
                <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground text-lg px-3 py-1">
                  {discountPercent}% OFF
                </Badge>
              )}
              {product.isFeatured && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  Editor's Choice
                </Badge>
              )}
            </div>

            {review && (
              <Card className="p-6 bg-accent/50 border-accent-border mb-8">
                <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Executive Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {review.excerpt} After extensive testing, the {product.name} earns an overall score of{" "}
                  <strong className="text-primary">{product.overallScore}/10</strong>. 
                  It excels in {Object.entries(product.scores).sort((a, b) => b[1] - a[1])[0][0]} 
                  ({Object.entries(product.scores).sort((a, b) => b[1] - a[1])[0][1]}/10) 
                  and offers solid performance across all categories.
                </p>
              </Card>
            )}

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <Card className="p-5">
                <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  Pros
                </h3>
                <ul className="space-y-3">
                  {product.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                      <span className="text-muted-foreground">{pro}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-5">
                <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-red-500" />
                  Cons
                </h3>
                <ul className="space-y-3">
                  {product.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                      <span className="text-muted-foreground">{con}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {review && (
              <div className="prose prose-lg max-w-none">
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4" id="review">
                  {review.title}
                </h2>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <img
                      src={review.authorImage}
                      alt={review.author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>{review.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{review.readTime} min read</span>
                  </div>
                  <span>{new Date(review.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                </div>
                <div 
                  className="text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
              </div>
            )}
          </div>

          <aside className="lg:col-span-2">
            <div className="sticky top-20 space-y-6">
              <Card className="p-6">
                <div className="text-sm text-muted-foreground mb-1">{product.brand}</div>
                <h1 
                  className="font-heading font-bold text-2xl text-foreground mb-4"
                  data-testid="text-product-title"
                >
                  {product.name}
                </h1>

                <div className="flex items-center gap-3 mb-4">
                  <RatingStars rating={product.rating} showNumber />
                  <span className="text-muted-foreground text-sm">
                    ({product.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-bold text-foreground" data-testid="text-product-price">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  {product.affiliateLinks.map((link, i) => (
                    <AffiliateButton
                      key={link.store}
                      store={link.store}
                      url={link.url}
                      price={link.price}
                      primary={i === 0}
                    />
                  ))}
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  Prices updated daily. We may earn a commission on purchases.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">
                  Our Score: {product.overallScore}/10
                </h3>
                <div className="space-y-4">
                  <ScoreBar label="Performance" score={product.scores.performance} />
                  <ScoreBar label="Value" score={product.scores.value} />
                  <ScoreBar label="Quality" score={product.scores.quality} />
                  <ScoreBar label="Features" score={product.scores.features} />
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">
                  Specifications
                </h3>
                <dl className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <dt className="text-muted-foreground">{key}</dt>
                      <dd className="text-foreground font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </Card>
            </div>
          </aside>
        </div>
      </section>

      {compareProducts.length > 1 && (
        <section className="py-12 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
              Compare {category?.name}
            </h2>
            <ComparisonTable 
              products={compareProducts} 
              bestProductId={compareProducts.reduce((best, p) => p.overallScore > best.overallScore ? p : best).id}
            />
          </div>
        </section>
      )}

      {relatedProducts.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
              Related Products
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

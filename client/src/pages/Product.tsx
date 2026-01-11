import { useParams, Link } from "wouter";
import { Check, X, Star, ChevronRight, ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { SEO } from "@/components/SEO";
import { getProductBySlug, getProductsByCategory, products, getCategoryBySlug } from "@/lib/products";

export default function Product() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

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

  const category = getCategoryBySlug(product.categoryId);
  const subcategory = category?.subcategories?.find(s => s.id === product.subcategoryId);
  const relatedProducts = getProductsByCategory(product.categoryId).filter(p => p.id !== product.id).slice(0, 3);

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Layout>
      <SEO
        title={`${product.name} Review 2026 - ${product.brand} | Fitness Thyme`}
        description={`${product.shortDescription}. ${product.aggregatedRating}/5 from ${product.totalReviewCount.toLocaleString()} reviews on Amazon, Reddit & Trustpilot.`}
        keywords={`${product.name} review, ${product.brand} ${category?.name || ''}, buy ${product.name}, ${product.name} price, ${product.name} rating`}
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
              ratingValue: product.aggregatedRating,
              reviewCount: product.totalReviewCount,
              bestRating: 5,
            },
            offers: {
              "@type": "Offer",
              price: product.price,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
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
              <Link href={`/${category.slug}`}>
                <span className="hover:text-foreground transition-colors">{category.name}</span>
              </Link>
              <ChevronRight className="w-4 h-4" />
            </>
          )}
          {subcategory && (
            <>
              <Link href={`/${category?.slug}/${subcategory.slug}`}>
                <span className="hover:text-foreground transition-colors">{subcategory.name}</span>
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
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted mb-6">
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
                  Top Pick
                </Badge>
              )}
            </div>

            <Card className="p-6 mb-6">
              <h2 className="font-heading font-semibold text-xl text-foreground mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Real User Reviews
              </h2>
              <p className="text-muted-foreground mb-4">
                Aggregated from {product.totalReviewCount.toLocaleString()} reviews across multiple platforms
              </p>
              <div className="space-y-4">
                {product.reviewSources.map((source) => (
                  <div key={source.platform} className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{source.platform}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {source.reviewCount.toLocaleString()} reviews
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="font-semibold">{source.rating}</span>
                      </div>
                    </div>
                    {source.snippet && (
                      <p className="text-muted-foreground text-sm italic">"{source.snippet}"</p>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <Card className="p-5">
                <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  Pros
                </h3>
                <ul className="space-y-3">
                  {product.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">{pro}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-5">
                <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-destructive" />
                  Cons
                </h3>
                <ul className="space-y-3">
                  {product.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X className="w-4 h-4 text-destructive shrink-0 mt-1" />
                      <span className="text-muted-foreground">{con}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <Card className="p-6 mb-6">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                Key Features
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <aside className="lg:col-span-2">
            <div className="sticky top-20 space-y-6">
              <Card className="p-6">
                <Badge variant="secondary" className="mb-2">{product.brand}</Badge>
                <h1 
                  className="font-heading font-bold text-2xl text-foreground mb-4"
                  data-testid="text-product-title"
                >
                  {product.name}
                </h1>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-lg">{product.aggregatedRating}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    from {product.totalReviewCount.toLocaleString()} reviews
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {product.reviewSources.map((source) => (
                    <Badge 
                      key={source.platform} 
                      variant="outline" 
                      className="text-xs"
                    >
                      {source.platform}: {source.rating}
                    </Badge>
                  ))}
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
                    <Button
                      key={link.store}
                      className="w-full gap-2"
                      variant={i === 0 ? "default" : "outline"}
                      asChild
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer" data-testid={`button-buy-${link.store.toLowerCase()}`}>
                        Buy on {link.store} - ${link.price.toLocaleString()}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  Prices updated daily. We may earn a commission on purchases.
                </p>
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

      {relatedProducts.length > 0 && (
        <section className="py-12 bg-muted/30">
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

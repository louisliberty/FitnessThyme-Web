import { useParams, Link } from "wouter";
import { Star, Check, X, ExternalLink, ChevronRight } from "lucide-react";
import { SiAmazon } from "react-icons/si";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getProductBySlug, getCategoryBySlug, getSubcategoryBySlug } from "@/lib/products";

const platformColors: Record<string, string> = {
  Amazon: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  Reddit: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  Trustpilot: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  YouTube: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200",
};

export default function ProductPage() {
  const { category, subcategory, slug } = useParams<{ category: string; subcategory: string; slug: string }>();
  const product = getProductBySlug(slug || "");
  const categoryData = getCategoryBySlug(category || "");
  const subcategoryData = getSubcategoryBySlug(category || "", subcategory || "");

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
          <Link href="/">
            <Button data-testid="link-home">Back to Home</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Layout>
      <SEO
        title={`${product.name} Review - Real User Reviews | Fitness Thyme`}
        description={product.shortDescription}
        ogType="product"
      />

      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" data-testid="nav-breadcrumb">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-4 h-4" />
          {categoryData && (
            <>
              <Link href={`/${category}`} className="hover:text-primary">{categoryData.name}</Link>
              <ChevronRight className="w-4 h-4" />
            </>
          )}
          {subcategoryData && (
            <>
              <Link href={`/${category}/${subcategory}`} className="hover:text-primary">{subcategoryData.name}</Link>
              <ChevronRight className="w-4 h-4" />
            </>
          )}
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="relative">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full aspect-square object-cover rounded-lg"
              data-testid="img-product"
            />
            {discount > 0 && (
              <Badge className="absolute top-4 left-4 bg-red-500 text-white" data-testid="badge-discount">
                {discount}% OFF
              </Badge>
            )}
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
            <h1 className="text-3xl font-bold mb-4" data-testid="text-product-name">{product.name}</h1>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-lg">{product.aggregatedRating.toFixed(1)}</span>
              </div>
              <span className="text-muted-foreground">
                Based on {product.totalReviewCount.toLocaleString()} reviews
              </span>
            </div>

            <p className="text-muted-foreground mb-6">{product.shortDescription}</p>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-primary" data-testid="text-price">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {product.features.map((feature, index) => (
                <Badge key={index} variant="secondary" data-testid={`badge-feature-${index}`}>
                  {feature}
                </Badge>
              ))}
            </div>

            <div className="space-y-3">
              {product.affiliateLinks.map((link, index) => (
                <Button
                  key={index}
                  className="w-full justify-between"
                  variant={index === 0 ? "default" : "outline"}
                  asChild
                  data-testid={`button-affiliate-${link.store.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center gap-2">
                      {link.store === "Amazon" && <SiAmazon className="w-4 h-4" />}
                      Buy on {link.store}
                    </span>
                    <span className="flex items-center gap-1">
                      ${link.price.toLocaleString()}
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                Pros
              </h2>
              <ul className="space-y-2">
                {product.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-2" data-testid={`text-pro-${index}`}>
                    <Check className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <X className="w-5 h-5 text-red-500" />
                Cons
              </h2>
              <ul className="space-y-2">
                {product.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-2" data-testid={`text-con-${index}`}>
                    <X className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b pb-2" data-testid={`text-spec-${key.toLowerCase().replace(/\s+/g, '-')}`}>
                  <span className="text-muted-foreground">{key}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-6">Real User Reviews</h2>
            <p className="text-muted-foreground mb-6">
              Aggregated ratings from across the web to give you the full picture.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.reviewSources.map((source, index) => (
                <Card key={index} className="bg-muted/50" data-testid={`card-review-source-${source.platform.toLowerCase()}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={platformColors[source.platform]} variant="secondary">
                        {source.platform}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{source.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {source.reviewCount.toLocaleString()} reviews
                    </p>
                    {source.snippet && (
                      <p className="text-sm italic">"{source.snippet}"</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

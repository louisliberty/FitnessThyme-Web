import { Link } from "wouter";
import { Star, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="overflow-hidden hover-elevate group" data-testid={`card-product-${product.id}`}>
      <Link href={`/product/${product.slug}`}>
        <div className="aspect-square relative overflow-hidden bg-muted">
          <img
            src={product.imageUrl}
            alt={`${product.name} - ${product.brand} fitness equipment`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          {discountPercent > 0 && (
            <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
              {discountPercent}% OFF
            </Badge>
          )}
          {product.isFeatured && (
            <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
              Editor's Choice
            </Badge>
          )}
        </div>
      </Link>

      <div className="p-4">
        <div className="text-sm text-muted-foreground mb-1">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h3 
            className="font-heading font-semibold text-foreground line-clamp-2 hover:text-primary transition-colors mb-2"
            data-testid={`text-product-name-${product.id}`}
          >
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviewCount.toLocaleString()} reviews)
          </span>
        </div>

        <ul className="space-y-1 mb-4">
          {product.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-end justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-foreground" data-testid={`text-product-price-${product.id}`}>
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>
          <Link href={`/product/${product.slug}`}>
            <Button size="sm" data-testid={`button-view-${product.id}`}>
              View Deal
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

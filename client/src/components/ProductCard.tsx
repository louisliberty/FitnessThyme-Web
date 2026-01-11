import { Link } from "wouter";
import { Star, Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const platformIcons: Record<string, string> = {
    "Amazon": "A",
    "Reddit": "R",
    "Trustpilot": "T",
    "YouTube": "Y",
  };

  return (
    <Card 
      className="overflow-hidden hover-elevate h-full flex flex-col"
      data-testid={`card-product-${product.id}`}
    >
      <Link href={`/product/${product.slug}`}>
        <div className="aspect-square overflow-hidden bg-muted relative">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {product.originalPrice && (
            <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
              Save ${(product.originalPrice - product.price).toFixed(0)}
            </Badge>
          )}
        </div>
      </Link>
      
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant="secondary" className="text-xs">{product.brand}</Badge>
        </div>
        
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-heading font-semibold text-lg text-foreground mb-2 line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-sm">{product.aggregatedRating}</span>
          </div>
          <span className="text-muted-foreground text-xs">
            ({product.totalReviewCount.toLocaleString()} reviews)
          </span>
        </div>
        
        <div className="flex gap-1 mb-3 flex-wrap">
          {product.reviewSources.slice(0, 3).map((source) => (
            <Badge 
              key={source.platform} 
              variant="outline" 
              className="text-xs px-2 py-0.5"
              title={`${source.rating} from ${source.reviewCount} reviews on ${source.platform}`}
            >
              {platformIcons[source.platform]} {source.rating}
            </Badge>
          ))}
        </div>
        
        {!compact && (
          <div className="space-y-1 mb-3">
            {product.pros.slice(0, 2).map((pro, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <Check className="w-3 h-3 text-primary mt-1 shrink-0" />
                <span className="text-muted-foreground line-clamp-1">{pro}</span>
              </div>
            ))}
            {product.cons.slice(0, 1).map((con, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <X className="w-3 h-3 text-destructive mt-1 shrink-0" />
                <span className="text-muted-foreground line-clamp-1">{con}</span>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-auto pt-3 border-t border-border">
          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="text-xl font-bold text-foreground">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through ml-2">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <Link href={`/product/${product.slug}`}>
              <Button size="sm" data-testid={`button-view-${product.slug}`}>
                View
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}

import { Check, X, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import type { Product } from "@shared/schema";

interface ComparisonTableProps {
  products: Product[];
  bestProductId?: string;
}

export function ComparisonTable({ products, bestProductId }: ComparisonTableProps) {
  if (products.length === 0) return null;

  const allSpecs = new Set<string>();
  products.forEach(p => {
    Object.keys(p.specifications).forEach(key => allSpecs.add(key));
  });

  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <table className="w-full min-w-[600px] border-collapse" data-testid="table-comparison">
        <thead>
          <tr className="border-b border-border">
            <th className="sticky left-0 bg-background p-4 text-left font-medium text-muted-foreground w-40">
              Product
            </th>
            {products.map((product) => (
              <th
                key={product.id}
                className={`p-4 text-center min-w-[180px] ${
                  product.id === bestProductId ? "bg-primary/5" : ""
                }`}
              >
                {product.id === bestProductId && (
                  <Badge className="mb-2 bg-primary text-primary-foreground gap-1">
                    <Crown className="w-3 h-3" />
                    Best Pick
                  </Badge>
                )}
                <Link href={`/product/${product.slug}`}>
                  <div className="font-heading font-semibold text-foreground hover:text-primary transition-colors">
                    {product.name}
                  </div>
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="sticky left-0 bg-background p-4 text-muted-foreground">Price</td>
            {products.map((product) => (
              <td
                key={product.id}
                className={`p-4 text-center ${product.id === bestProductId ? "bg-primary/5" : ""}`}
              >
                <span className="text-lg font-bold text-foreground">
                  ${product.price.toLocaleString()}
                </span>
              </td>
            ))}
          </tr>

          <tr className="border-b border-border">
            <td className="sticky left-0 bg-background p-4 text-muted-foreground">Rating</td>
            {products.map((product) => (
              <td
                key={product.id}
                className={`p-4 text-center ${product.id === bestProductId ? "bg-primary/5" : ""}`}
              >
                <span className="font-semibold">{product.rating.toFixed(1)}</span>
                <span className="text-muted-foreground text-sm"> / 5</span>
              </td>
            ))}
          </tr>

          <tr className="border-b border-border">
            <td className="sticky left-0 bg-background p-4 text-muted-foreground">Overall Score</td>
            {products.map((product) => (
              <td
                key={product.id}
                className={`p-4 text-center ${product.id === bestProductId ? "bg-primary/5" : ""}`}
              >
                <span className="text-lg font-bold text-primary">{product.overallScore.toFixed(1)}</span>
                <span className="text-muted-foreground text-sm"> / 10</span>
              </td>
            ))}
          </tr>

          {Array.from(allSpecs).map((spec) => (
            <tr key={spec} className="border-b border-border">
              <td className="sticky left-0 bg-background p-4 text-muted-foreground">{spec}</td>
              {products.map((product) => (
                <td
                  key={product.id}
                  className={`p-4 text-center text-sm ${product.id === bestProductId ? "bg-primary/5" : ""}`}
                >
                  {product.specifications[spec] || "—"}
                </td>
              ))}
            </tr>
          ))}

          <tr className="border-b border-border">
            <td className="sticky left-0 bg-background p-4 text-muted-foreground">Pros</td>
            {products.map((product) => (
              <td
                key={product.id}
                className={`p-4 ${product.id === bestProductId ? "bg-primary/5" : ""}`}
              >
                <ul className="space-y-1 text-sm">
                  {product.pros.slice(0, 3).map((pro, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>

          <tr className="border-b border-border">
            <td className="sticky left-0 bg-background p-4 text-muted-foreground">Cons</td>
            {products.map((product) => (
              <td
                key={product.id}
                className={`p-4 ${product.id === bestProductId ? "bg-primary/5" : ""}`}
              >
                <ul className="space-y-1 text-sm">
                  {product.cons.slice(0, 2).map((con, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>

          <tr>
            <td className="sticky left-0 bg-background p-4"></td>
            {products.map((product) => (
              <td
                key={product.id}
                className={`p-4 text-center ${product.id === bestProductId ? "bg-primary/5" : ""}`}
              >
                <Link href={`/product/${product.slug}`}>
                  <Button data-testid={`button-compare-view-${product.id}`}>
                    View Details
                  </Button>
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

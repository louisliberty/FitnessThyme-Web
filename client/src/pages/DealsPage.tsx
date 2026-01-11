import { Link } from "wouter";
import { ChevronRight, Tag, Percent } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ProductCard from "@/components/ProductCard";
import { products, getProductUrl } from "@/lib/products";

export default function DealsPage() {
  const dealsProducts = products.filter(p => p.originalPrice && p.originalPrice > p.price);

  return (
    <Layout>
      <SEO
        title="Fitness Deals & Discounts | Fitness Thyme"
        description="Find the best deals on premium fitness equipment, smart devices, and supplements. Save money on top-rated products."
      />

      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" data-testid="nav-breadcrumb">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">Deals</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <Percent className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h1 className="text-3xl font-bold" data-testid="text-page-title">Deals & Discounts</h1>
              <p className="text-muted-foreground">Save on premium fitness products</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dealsProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              productUrl={getProductUrl(product)}
            />
          ))}
        </div>

        {dealsProducts.length === 0 && (
          <div className="text-center py-12">
            <Tag className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No deals available right now. Check back soon!</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

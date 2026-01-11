import { Link } from "wouter";
import { ChevronRight, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { guides } from "@/lib/products";

export default function GuidesIndex() {
  return (
    <Layout>
      <SEO
        title="Buying Guides - Expert Fitness Product Advice | Fitness Thyme"
        description="Expert buying guides to help you choose the right fitness equipment, smart devices, and supplements. Based on real user reviews and expert analysis."
      />

      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" data-testid="nav-breadcrumb">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">Guides</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4" data-testid="text-page-title">Buying Guides</h1>
          <p className="text-muted-foreground max-w-2xl">
            Expert guides to help you make informed decisions about fitness equipment, smart devices,
            and supplements. Based on aggregated reviews and expert analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link key={guide.id} href={`/guides/${guide.slug}`}>
              <Card className="overflow-hidden hover-elevate cursor-pointer h-full" data-testid={`card-guide-${guide.slug}`}>
                <div className="aspect-video relative">
                  <img
                    src={guide.imageUrl}
                    alt={guide.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    {guide.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h2 className="text-lg font-semibold mb-2 line-clamp-2">{guide.title}</h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{guide.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{guide.readTime} min read</span>
                    </div>
                    <span className="text-primary text-sm font-medium flex items-center" data-testid={`link-guide-${guide.slug}`}>
                      Read Guide
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

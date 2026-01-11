import { Link } from "wouter";
import { ChevronRight, Info } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function DisclosurePage() {
  return (
    <Layout>
      <SEO
        title="Affiliate Disclosure - Fitness Thyme"
        description="Learn about Fitness Thyme's affiliate relationships and how we earn commissions from product recommendations."
      />

      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" data-testid="nav-breadcrumb">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">Affiliate Disclosure</span>
        </nav>

        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-6" data-testid="text-page-title">Affiliate Disclosure</h1>

            <Alert className="mb-6">
              <Info className="h-4 w-4" />
              <AlertDescription>
                Transparency is important to us. This page explains how we earn money and how it affects our content.
              </AlertDescription>
            </Alert>

            <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">How We Make Money</h2>
                <p className="text-muted-foreground">
                  Fitness Thyme is a participant in various affiliate marketing programs. This means we may 
                  earn a commission when you click on links to products and make a purchase. This comes at 
                  no additional cost to you.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Our Affiliate Partners</h2>
                <p className="text-muted-foreground mb-4">
                  We partner with various retailers and brands in the fitness industry, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Amazon Associates Program</li>
                  <li>Bowflex Affiliate Program</li>
                  <li>Concept2</li>
                  <li>Titan Fitness</li>
                  <li>NordicTrack</li>
                  <li>WHOOP</li>
                  <li>Oura</li>
                  <li>Peloton</li>
                  <li>LADDER</li>
                  <li>Onnit</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Our Commitment to Honest Reviews</h2>
                <p className="text-muted-foreground">
                  While we earn commissions from affiliate links, our reviews and recommendations are based 
                  on aggregated user reviews from multiple sources including Amazon, Reddit, Trustpilot, and 
                  YouTube. We do not let affiliate relationships influence our product ratings or recommendations.
                </p>
                <p className="text-muted-foreground mt-3">
                  Our goal is to help you find the best fitness products for your needs. We believe that 
                  providing honest, unbiased information is the best way to earn your trust and serve you well.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Product Selection</h2>
                <p className="text-muted-foreground">
                  We choose which products to feature based on their quality, user reviews, and relevance to 
                  our audience - not based on commission rates. We will never recommend a product simply 
                  because it offers a higher commission.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Questions?</h2>
                <p className="text-muted-foreground">
                  If you have any questions about our affiliate relationships or this disclosure, please 
                  contact us at disclosure@fitnessthyme.com.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

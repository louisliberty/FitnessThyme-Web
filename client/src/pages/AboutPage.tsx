import { Link } from "wouter";
import { ChevronRight, Target, Users, Shield, TrendingUp } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Unbiased Reviews",
      description: "We aggregate reviews from multiple sources to give you the complete picture, not just cherry-picked testimonials.",
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Real opinions from real users on Amazon, Reddit, Trustpilot, and YouTube inform our product ratings.",
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "We clearly disclose our affiliate relationships. Your trust is more important than any commission.",
    },
    {
      icon: TrendingUp,
      title: "Always Current",
      description: "Our team continuously updates product information and reviews to reflect the latest user experiences.",
    },
  ];

  return (
    <Layout>
      <SEO
        title="About Us - Fitness Thyme"
        description="Learn about Fitness Thyme's mission to help you find the best fitness products through aggregated user reviews from Amazon, Reddit, and Trustpilot."
      />

      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" data-testid="nav-breadcrumb">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">About</span>
        </nav>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center" data-testid="text-page-title">About Fitness Thyme</h1>
          
          <div className="prose prose-lg dark:prose-invert mx-auto mb-12">
            <p className="text-muted-foreground text-center text-lg mb-8">
              Fitness Thyme is your trusted source for premium fitness product reviews. 
              We aggregate real user reviews from across the web to help you make informed decisions.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              Finding the right fitness equipment, smart devices, and supplements can be overwhelming. 
              With thousands of products and countless reviews scattered across the internet, how do you 
              know what's actually worth your investment?
            </p>
            <p className="text-muted-foreground">
              That's where Fitness Thyme comes in. We aggregate reviews from Amazon, Reddit, Trustpilot, 
              and YouTube to give you a complete picture of each product. No cherry-picked reviews, no 
              hidden agendas - just honest, comprehensive information to help you make the best choice.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">How We Work</h2>
            <p className="text-muted-foreground">
              Our team researches each product category thoroughly, identifying the top options based on 
              user reviews, expert opinions, and real-world performance. We then present this information 
              in an easy-to-digest format, complete with pros, cons, and side-by-side comparisons.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-6 text-center">Our Values</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {values.map((value, index) => (
              <Card key={index} data-testid={`card-value-${index}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy - Fitness Thyme"
        description="Learn how Fitness Thyme collects, uses, and protects your personal information."
      />

      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" data-testid="nav-breadcrumb">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">Privacy Policy</span>
        </nav>

        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-6" data-testid="text-page-title">Privacy Policy</h1>
            <p className="text-muted-foreground mb-6">Last updated: January 2026</p>

            <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
                <p className="text-muted-foreground">
                  We collect information you provide directly to us, such as when you subscribe to our 
                  newsletter, contact us, or interact with our website. This may include your email address 
                  and any other information you choose to provide.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
                <p className="text-muted-foreground">
                  We use the information we collect to provide, maintain, and improve our services, 
                  send you newsletters and updates (if you've subscribed), respond to your inquiries, 
                  and analyze how our website is used to improve user experience.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Cookies and Tracking</h2>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to track activity on our website 
                  and hold certain information. You can instruct your browser to refuse all cookies 
                  or to indicate when a cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
                <p className="text-muted-foreground">
                  We use third-party services such as Google Analytics to help us understand how our 
                  website is used. These services may collect information about your use of our website 
                  and other websites.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Affiliate Links</h2>
                <p className="text-muted-foreground">
                  Our website contains affiliate links to third-party retailers. When you click these 
                  links, cookies may be placed by those retailers to track your purchase for commission 
                  purposes. Please refer to each retailer's privacy policy for more information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
                <p className="text-muted-foreground">
                  You have the right to access, update, or delete your personal information. You may 
                  also opt out of receiving marketing communications from us at any time by clicking 
                  the unsubscribe link in any email.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at 
                  privacy@fitnessthyme.com.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

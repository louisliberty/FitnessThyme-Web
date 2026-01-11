import { Link } from "wouter";
import { categories } from "@shared/schema";
import logoImage from "@assets/generated_images/sleek_fitness_thyme_luxury_logo.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-card-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading font-bold text-foreground mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    href={`/${cat.slug}`}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    data-testid={`footer-category-${cat.slug}`}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/guides"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="footer-guides"
                >
                  Buying Guides
                </Link>
              </li>
              <li>
                <Link 
                  href="/product-comparisons"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="footer-comparisons"
                >
                  Product Comparisons
                </Link>
              </li>
              <li>
                <Link 
                  href="/trends"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="footer-trends"
                >
                  Trending Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/deals"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="footer-deals"
                >
                  Deals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="footer-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="footer-contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/disclosure"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="footer-disclosure"
                >
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="footer-privacy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-foreground mb-4">Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get the best deals and expert fitness tips delivered to your inbox.
            </p>
            <Link href="/" className="block">
              <img 
                src={logoImage} 
                alt="Fitness Thyme" 
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            2026 Fitness Thyme. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>10,000+ Products Reviewed</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Expert Analysis</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Unbiased Recommendations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

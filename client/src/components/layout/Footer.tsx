import { Link } from "wouter";
import { categories } from "@shared/schema";

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
                    href={`/category/${cat.slug}`}
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
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="footer-blog"
                >
                  Buying Guides
                </Link>
              </li>
              <li>
                <Link 
                  href="/compare"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="footer-compare"
                >
                  Product Comparison
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="footer-reviews"
                >
                  Expert Reviews
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
                <span className="text-muted-foreground text-sm">Affiliate Disclosure</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Privacy Policy</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-foreground mb-4">Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get the best deals and expert fitness tips delivered to your inbox.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">F</span>
              </div>
              <span className="font-heading font-bold text-foreground">Fitness Thyme</span>
            </div>
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

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@shared/schema";
import logoImage from "@assets/generated_images/bold_fitness_thyme_large_text_logo.png";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center shrink-0">
            <img 
              src={logoImage} 
              alt="Fitness Thyme" 
              className="h-14 sm:h-16 max-w-[240px] sm:max-w-[320px] object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            <Link href="/">
              <Button 
                variant={location === "/" ? "secondary" : "ghost"} 
                className="text-base"
                data-testid="nav-home"
              >
                Home
              </Button>
            </Link>

            <div 
              className="relative"
              onMouseEnter={() => setCategoryDropdownOpen(true)}
              onMouseLeave={() => setCategoryDropdownOpen(false)}
            >
              <Button 
                variant="ghost" 
                className="gap-1 text-base"
                data-testid="nav-categories"
              >
                Categories
                <ChevronDown className="w-5 h-5" />
              </Button>

              {categoryDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-popover border border-popover-border rounded-md shadow-lg py-2 mt-1">
                  {categories.map((cat) => (
                    <Link key={cat.id} href={`/${cat.slug}`}>
                      <div 
                        className="px-4 py-2 hover-elevate cursor-pointer"
                        data-testid={`nav-category-${cat.slug}`}
                      >
                        <div className="font-medium text-foreground">{cat.name}</div>
                        <div className="text-sm text-muted-foreground">{cat.productCount} products</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/guides">
              <Button 
                variant={location.startsWith("/guides") ? "secondary" : "ghost"} 
                className="text-base"
                data-testid="nav-guides"
              >
                Guides
              </Button>
            </Link>

            <Link href="/product-comparisons">
              <Button 
                variant={location.startsWith("/product-comparisons") ? "secondary" : "ghost"} 
                className="text-base"
                data-testid="nav-comparisons"
              >
                Comparisons
              </Button>
            </Link>

            <Link href="/trends">
              <Button 
                variant={location === "/trends" ? "secondary" : "ghost"} 
                className="text-base"
                data-testid="nav-trends"
              >
                Trends
              </Button>
            </Link>

            <Link href="/deals">
              <Button 
                variant={location === "/deals" ? "secondary" : "ghost"} 
                className="text-base"
                data-testid="nav-deals"
              >
                Deals
              </Button>
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            {searchOpen ? (
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-48 sm:w-64 pr-8"
                  autoFocus
                  onBlur={() => setSearchOpen(false)}
                  data-testid="input-search"
                />
                <X 
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground cursor-pointer" 
                  onClick={() => setSearchOpen(false)}
                />
              </div>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setSearchOpen(true)}
                data-testid="button-search"
              >
                <Search className="w-5 h-5" />
              </Button>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start" data-testid="mobile-nav-home">
                  Home
                </Button>
              </Link>
              
              <div className="py-2">
                <div className="px-4 text-sm font-medium text-muted-foreground mb-2">Categories</div>
                {categories.map((cat) => (
                  <Link key={cat.id} href={`/${cat.slug}`} onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start pl-8" data-testid={`mobile-nav-category-${cat.slug}`}>
                      {cat.name}
                    </Button>
                  </Link>
                ))}
              </div>

              <Link href="/guides" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start" data-testid="mobile-nav-guides">
                  Guides
                </Button>
              </Link>

              <Link href="/product-comparisons" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start" data-testid="mobile-nav-comparisons">
                  Comparisons
                </Button>
              </Link>

              <Link href="/trends" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start" data-testid="mobile-nav-trends">
                  Trends
                </Button>
              </Link>

              <Link href="/deals" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start" data-testid="mobile-nav-deals">
                  Deals
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

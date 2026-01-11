import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@shared/schema";
import logoImage from "@assets/Fitness_Thyme_1768094141430.jpg";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img 
              src={logoImage} 
              alt="Fitness Thyme" 
              className="h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/">
              <Button 
                variant={location === "/" ? "secondary" : "ghost"} 
                size="sm"
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
                size="sm" 
                className="gap-1"
                data-testid="nav-categories"
              >
                Categories
                <ChevronDown className="w-4 h-4" />
              </Button>

              {categoryDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-popover border border-popover-border rounded-md shadow-lg py-2 mt-1">
                  {categories.map((cat) => (
                    <Link key={cat.id} href={`/category/${cat.slug}`}>
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

            <Link href="/blog">
              <Button 
                variant={location.startsWith("/blog") ? "secondary" : "ghost"} 
                size="sm"
                data-testid="nav-blog"
              >
                Blog
              </Button>
            </Link>

            <Link href="/compare">
              <Button 
                variant={location === "/compare" ? "secondary" : "ghost"} 
                size="sm"
                data-testid="nav-compare"
              >
                Compare
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
                  <Link key={cat.id} href={`/category/${cat.slug}`} onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start pl-8" data-testid={`mobile-nav-category-${cat.slug}`}>
                      {cat.name}
                    </Button>
                  </Link>
                ))}
              </div>

              <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start" data-testid="mobile-nav-blog">
                  Blog
                </Button>
              </Link>

              <Link href="/compare" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start" data-testid="mobile-nav-compare">
                  Compare
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

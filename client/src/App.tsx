import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import CategoryPage from "@/pages/CategoryPage";
import SubcategoryPage from "@/pages/SubcategoryPage";
import ProductPage from "@/pages/ProductPage";
import ComparisonPage from "@/pages/ComparisonPage";
import ComparisonsIndex from "@/pages/ComparisonsIndex";
import GuidePage from "@/pages/GuidePage";
import GuidesIndex from "@/pages/GuidesIndex";
import AboutPage from "@/pages/AboutPage";
import TrendsPage from "@/pages/TrendsPage";
import DealsPage from "@/pages/DealsPage";
import ContactPage from "@/pages/ContactPage";
import PrivacyPage from "@/pages/PrivacyPage";
import DisclosurePage from "@/pages/DisclosurePage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/product-comparisons" component={ComparisonsIndex} />
      <Route path="/product-comparisons/:slug" component={ComparisonPage} />
      <Route path="/guides" component={GuidesIndex} />
      <Route path="/guides/:slug" component={GuidePage} />
      <Route path="/trends" component={TrendsPage} />
      <Route path="/deals" component={DealsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/disclosure" component={DisclosurePage} />
      <Route path="/:category/:subcategory/:slug" component={ProductPage} />
      <Route path="/:category/:subcategory" component={SubcategoryPage} />
      <Route path="/:category" component={CategoryPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;

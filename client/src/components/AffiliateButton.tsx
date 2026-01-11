import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AffiliateButtonProps {
  store: string;
  url: string;
  price: number;
  primary?: boolean;
}

const storeColors: Record<string, string> = {
  Amazon: "bg-[#FF9900] hover:bg-[#e68a00] text-black",
  Bowflex: "bg-[#E31837] hover:bg-[#cc1530] text-white",
  "Concept2": "bg-[#1A1A1A] hover:bg-[#333333] text-white",
  "Titan Fitness": "bg-[#1A1A1A] hover:bg-[#333333] text-white",
  NordicTrack: "bg-[#00529B] hover:bg-[#004488] text-white",
  WHOOP: "bg-[#00F19F] hover:bg-[#00d88f] text-black",
  Oura: "bg-[#1A1A1A] hover:bg-[#333333] text-white",
  Peloton: "bg-[#F5355C] hover:bg-[#e02a4f] text-white",
  LADDER: "bg-[#1A1A1A] hover:bg-[#333333] text-white",
  Onnit: "bg-[#1A1A1A] hover:bg-[#333333] text-white",
};

export function AffiliateButton({ store, url, price, primary = false }: AffiliateButtonProps) {
  const colorClass = storeColors[store] || "bg-primary hover:bg-primary/90 text-primary-foreground";

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer nofollow"
      className="block"
    >
      <Button
        className={`w-full gap-2 ${primary ? colorClass + " no-default-hover-elevate" : ""}`}
        variant={primary ? "default" : "outline"}
        size={primary ? "lg" : "default"}
        data-testid={`button-affiliate-${store.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <span className="flex-1 text-left">
          <span className="block font-medium">{store}</span>
          <span className={`block text-xs ${primary ? "opacity-80" : "text-muted-foreground"}`}>
            ${price.toLocaleString()}
          </span>
        </span>
        <ExternalLink className="w-4 h-4 shrink-0" />
      </Button>
    </a>
  );
}

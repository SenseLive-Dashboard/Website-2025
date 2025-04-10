import { Badge } from "@/components/ui/badge";
import { Link } from "lucide-react";

// This is a server component approach for product categories navigation
export default function ProductCategoriesNav({ currentSlug = "" }) {
    const productCategories = [
      { id: "gateways", name: "Modbus Gateways", slug: "gateways" },
      { id: "controllers", name: "Remote IO Controllers", slug: "controllers" },
      { id: "connectivity", name: "4G/5G Products", slug: "connectivity" },
      { id: "wireless", name: "LoRa/ZigBee Devices", slug: "wireless" },
      { id: "wifi", name: "WiFi Solutions", slug: "wifi" },
      { id: "fiber", name: "Optical Fiber", slug: "fiber" },
      { id: "wireless-bus-bar", name: "Wireless Bus Bar Solutions", slug: "wireless-bus-bar" },
    ];
  
    const isAllProducts = currentSlug === "";
  
    return (
      <div className="mt-8 mb-12">
        <div className="flex flex-wrap gap-2">
          <Link href="/products">
            <Badge
              variant="outline"
              className={`px-4 py-2 text-sm ${
                isAllProducts 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "hover:bg-primary/10"
              }`}
            >
              All Products
            </Badge>
          </Link>
          {productCategories.map((category) => (
            <Link key={category.id} href={`/products/${category.slug}`}>
              <Badge 
                variant="outline" 
                className={`px-4 py-2 text-sm ${
                  currentSlug === category.slug 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "hover:bg-primary/10"
                }`}
              >
                {category.name}
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    );
  }
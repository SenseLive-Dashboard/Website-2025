import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { ProductCard } from "@/components/product-card"

export const metadata: Metadata = {
  title: "LoRa/ZigBee Devices | SenseLive",
  description:
    "Explore SenseLive's range of LoRa and ZigBee devices for industrial IoT applications with long-range wireless connectivity.",
}

export default function WirelessProductsPage() {
  // Product data
  const products = [
    {
      id: "x7050",
      name: "SenseLive X7050",
      description: "Industrial WiFi AP",
      specs: [
        "Dual Band",
        "IP65 Rated",
        "PoE Powered",
        "Enterprise Security",
      ],
      image: "/products/wifi/x7050/x7050.png",
      category: "wireless",
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="w-full py-8  lg: bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-foreground">
              Products
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">WiFi Devices</span>
          </div>

          <PageHeader
            title="WiFi Devices"
            description="Explore our range of WiFi devices designed for short-range wireless connectivity in industrial IoT applications."
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                specs={product.specs}
                image={product.image}
                category="wifi"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Need Technical Assistance?</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Our team of experts is ready to help you find the right wifi solution for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/support">
                <Button variant="outline">Visit Support Center</Button>
              </Link>
              <Link href="/contact">
                <Button>Contact Sales</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { ProductCard } from "@/components/product-card"

export const metadata: Metadata = {
  title: "4G/5G Products - SenseLive",
  description: "Explore SenseLive's range of 4G/5G solutions for industrial IoT applications.",
}

export default function ConnectivityPage() {
  const categoryName = "4G/5G Products"

  // Products in the 4G/5G Products category
  const products = [
    {
      id: "x9000",
      name: "X9000",
      description: "4G IoT Gateway with Edge Intelligence",
      specs: ["4G CAT1 Connectivity", "Digital & Analog Inputs", "Dual RS485 Ports", "Edge Computing"],
      image: "/products/connectivity/x9000/main.png",
    },
    {
      id: "x7400d",
      name: "SenseLive X7400D",
      description: "DIN-rail 4G CAT1 DTU with RS485 Interface",
      specs: ["4G CAT1 with 2G Fallback", "RS485 Interface", "MQTT & JSON Support", "Edge Computing Features"],
      image: "/placeholder.svg?height=300&width=300",
      category: "connectivity",
    },
    {
      id: "x7400",
      name: "X7400",
      description: "Compact 4G Router",
      specs: ["LTE Cat 4", "WiFi Hotspot", "Compact Design", "Easy Setup"],
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
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
            <span className="text-foreground">{categoryName}</span>
          </div>

          <PageHeader
            title={categoryName}
            description={`Explore our range of ${categoryName.toLowerCase()} designed for industrial IoT applications with reliability and performance in mind.`}
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
                category="connectivity"
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
              Our team of experts is ready to help you find the right solution for your specific requirements.
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


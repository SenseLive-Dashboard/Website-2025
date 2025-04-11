import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { ProductCard } from "@/components/product-card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Remote IO Controllers",
  description: "Explore SenseLive's range of Remote IO Controllers for industrial automation and smart infrastructure.",
}

const productCategories = [
  { id: "gateways", name: "Modbus Gateways", slug: "gateways" },
  { id: "controllers", name: "Remote IO Controllers", slug: "controllers" },
  { id: "connectivity", name: "4G/5G Products", slug: "connectivity" },
  { id: "wireless", name: "LoRa/ZigBee Devices", slug: "wireless" },
  { id: "wifi", name: "WiFi Solutions", slug: "wifi" },
  { id: "fiber", name: "Optical Fiber", slug: "fiber" },
  { id: "wireless-bus-bar", name: "Wireless Bus Bar Solutions", slug: "wireless-bus-bar" },
]

export default function ControllersPage() {
  // Product categories
  const category = {
    id: "controllers",
    name: "Remote IO Controllers",
    description: "Monitor and control remote inputs and outputs for industrial automation.",
    icon: Zap,
  }

  // Featured products
  const products = [
    {
      id: "e7500",
      name: "SenseLive E7500",
      description: "RS485-based Remote IO Controller",
      specs: ["4 Digital Inputs", "2 Analog Inputs", "4 Relay Outputs", "Modbus RTU Support"],
      image: "/products/controllers/e7500/thumbnail.png",
    },
    {
      id: "e7000",
      name: "SenseLive E7000",
      description: "Ethernet-based Remote I/O Controller",
      specs: ["4 Digital Inputs", "2 Analog Inputs", "4 Relay Outputs", "Modbus TCP/RTU Support"],
      image: "/products/controllers/e7000/thumbnail.png",
    },
    
  ]

  return (
    <div className="flex flex-col">
      <section className="w-full py-8 bg-muted/30">
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
            <span className="text-foreground">{category.name}</span>
          </div>

          <PageHeader
            title={category.name}
            description={`Explore our range of ${category.name.toLowerCase()} designed for industrial IoT applications with reliability and performance in mind.`}
          />
          <div className="mt-8 mb-12">
            <div className="flex flex-wrap gap-2">
              <Link href="/products">
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  All Products
                </Badge>
                
              </Link>
              {productCategories.map((category) => (
                <Link key={category.id} href={`/products/${category.slug}`}>
                  <Badge variant="outline" className="px-4 py-2 text-sm hover:bg-primary/10">
                    {category.name}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                specs={product.specs}
                image={product.image}
                category="controllers"
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


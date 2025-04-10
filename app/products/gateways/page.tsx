import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { ProductCard } from "@/components/product-card"

export const metadata: Metadata = {
  title: "Modbus Gateways | SenseLive",
  description:
    "Explore SenseLive's range of industrial Modbus gateways for connecting Modbus RTU devices to TCP/IP networks.",
}

export default function GatewaysPage() {
  // This would typically come from a database or API
  const products = [
    {
      id: "x5050",
      name: "SenseLive X5050",
      description: "RS485 to TCP/IP Modbus Server",
      specs: [
        "Modbus TCP ↔ RTU Conversion",
        "MQTT Protocol Support",
        "DIN-Rail Mounting",
        "Industrial Temperature Range",
      ],
      image: "/products/gateways/x5050/thumbnail.png",
      category: "gateways",
    },
    {
      id: "x5100",
      name: "SenseLive X5100",
      description: "Multi-Protocol Industrial Gateway",
      specs: [
        "Modbus, BACnet, MQTT Support",
        "Web Configuration Interface",
        "Multiple RS485 Ports",
        "Ethernet Connectivity",
      ],
      image: "/placeholder.svg?height=300&width=300&text=X5100",
      category: "gateways",
    },
    {
      id: "x5200",
      name: "SenseLive X5200",
      description: "Wireless Modbus Gateway",
      specs: ["WiFi & Ethernet Connectivity", "Dual RS485 Ports", "Cloud Integration", "Secure Data Transmission"],
      image: "/placeholder.svg?height=300&width=300&text=X5200",
      category: "gateways",
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
            <span className="text-foreground">Modbus Gateways</span>
          </div>

          <PageHeader
            title="Modbus Gateways"
            description="Connect your Modbus RTU devices to TCP/IP networks with our reliable and feature-rich industrial gateways."
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
                category={product.category}
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
              Our team of experts is ready to help you find the right gateway solution for your specific requirements.
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


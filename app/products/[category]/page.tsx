import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { ProductCard } from "@/components/product-card"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const categoryName = getCategoryName(params.category)

  return {
    title: categoryName,
    description: `Explore SenseLive's range of ${categoryName.toLowerCase()} for industrial IoT applications.`,
  }
}

// Update the getCategoryName function to ensure consistent naming

function getCategoryName(categorySlug: string): string {
  const categoryMap: Record<string, string> = {
    "wireless-bus-bar": "Wireless Bus Bar Solutions",
    gateways: "Modbus Gateways",
    controllers: "Remote IO Controllers",
    connectivity: "4G/5G Products",
    wireless: "LoRa/ZigBee Devices",
    fiber: "Optical Fiber",
    wifi: "WiFi Solutions",
  }

  return categoryMap[categorySlug] || "Products"
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = getCategoryName(params.category)

  // This would typically come from a database or API
  const products = getProductsByCategory(params.category)

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
                category={params.category}
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

// Update the getProductsByCategory function
function getProductsByCategory(category: string) {
  const productsByCategory: Record<string, any[]> = {
    "wireless-bus-bar": [
      {
        id: "edge8000",
        name: "SenseLive Edge8000",
        description: "Wireless Bus Bar / Surface Temperature Monitoring System",
        specs: ["Up to 60 wireless sensors", "Integrated Energy Meter", "RS485 Data Output", "Built-In Dual Relays"],
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "sensebt-222",
        name: "SenseBT-222",
        description: "Battery-Powered Wireless Temperature Sensor",
        specs: ["Long Battery Life", "Wide Range", "Industrial Design", "Wireless Communication"],
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "sensect-222",
        name: "SenseCT-222",
        description: "CT-Powered Wireless Temperature Sensor",
        specs: ["Self-Powered", "Real-time Monitoring", "Easy Installation", "Maintenance-Free"],
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    gateways: [
      {
        id: "x5050",
        name: "X5050",
        description: "RS485 to TCP/IP Modbus Server",
        specs: ["MQTT Support", "Web Configuration", "Multiple Hosts", "Industrial Grade"],
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    controllers: [
      {
        id: "e7000",
        name: "SenseLive E7000",
        description: "Ethernet-based Remote IO Controller",
        specs: ["4 Digital Inputs", "2 Analog Inputs", "4 Relay Outputs", "Modbus TCP/RTU Support"],
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "e7500",
        name: "SenseLive E7500",
        description: "RS485-based Remote IO Controller",
        specs: ["4 Digital Inputs", "2 Analog Inputs", "4 Relay Outputs", "Modbus RTU Support"],
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    connectivity: [
      {
        id: "x9000",
        name: "X9000",
        description: "4G IoT Gateway with Edge Intelligence",
        specs: ["4G CAT1 Connectivity", "Digital & Analog Inputs", "Dual RS485 Ports", "Edge Computing"],
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "x7400d",
        name: "X7400D",
        description: "Industrial 4G Router with Dual SIM",
        specs: ["Dual SIM", "VPN Support", "Advanced Firewall", "Industrial Design"],
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "x7400",
        name: "X7400",
        description: "Compact 4G Router",
        specs: ["LTE Cat 4", "WiFi Hotspot", "Compact Design", "Easy Setup"],
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    wireless: [
      {
        id: "x7700",
        name: "SenseLive X7700",
        description: "DIN-Rail LoRa Device",
        specs: [
          "DIN-Rail Mounting",
          "RS485 & Modbus RTU support",
          "Long-Range LoRa Transmission",
          "Secure & Encrypted Communication",
        ],
        image: "/placeholder.svg?height=300&width=300&text=X7700",
      },
      {
        id: "x7800d",
        name: "SenseLive X7800D",
        description: "Wall-Mounted LoRa Device with RS232 Features",
        specs: [
          "Wall-Mounted & Compact Design",
          "Dual RS232 & RS485 Support",
          "LoRaWAN & Private LoRa Protocol",
          "Low Power Consumption",
        ],
        image: "/placeholder.svg?height=300&width=300&text=X7800D",
      },
      {
        id: "x7900",
        name: "SenseLive X7900",
        description: "LoRa Gateway with TCP Output",
        specs: [
          "LoRaWAN & Private LoRa Protocols",
          "TCP/IP Gateway Functionality",
          "Multiple Network Interfaces",
          "Web-Based Management Console",
        ],
        image: "/placeholder.svg?height=300&width=300&text=X7900",
      },
    ],
    fiber: [
      {
        id: "x8555",
        name: "X8555",
        description: "Fiber Optic Converter",
        specs: ["Single-mode", "Dual Fiber", "Industrial Grade", "Wide Temperature Range"],
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    wifi: [
      {
        id: "x7050",
        name: "X7050",
        description: "Industrial WiFi AP",
        specs: ["Dual Band", "IP65 Rated", "PoE Powered", "Enterprise Security"],
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  }

  return productsByCategory[category] || []
}


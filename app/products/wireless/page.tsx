import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { ProductCard } from "@/components/product-card"

export const metadata: Metadata = {
  title: "LoRa/ZigBee Devices",
  description:
    "Explore SenseLive's range of LoRa and ZigBee devices for industrial IoT applications with long-range, low-power wireless communication.",
}

export default function WirelessPage() {
  // This would typically come from a database or API
  const products = [
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
      category: "wireless",
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
      category: "wireless",
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
      category: "wireless",
    },
  ]

  // Filter options
  const filterOptions = [
    { name: "All", value: "all" },
    { name: "RS232 Support", value: "rs232" },
    { name: "LoRa Gateway", value: "gateway" },
    { name: "DIN-Rail Mount", value: "din-rail" },
    { name: "Cloud Integration", value: "cloud" },
  ]

  // Sort options
  const sortOptions = [
    { name: "Default", value: "default" },
    { name: "LoRaWAN", value: "lorawan" },
    { name: "Modbus RTU", value: "modbus" },
    { name: "Private LoRa", value: "private-lora" },
    { name: "TCP/IP", value: "tcp-ip" },
    { name: "SCADA", value: "scada" },
    { name: "IoT", value: "iot" },
    { name: "Industrial Automation", value: "industrial" },
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
            <span className="text-foreground">LoRa/ZigBee Devices</span>
          </div>

          <PageHeader
            title="LoRa/ZigBee Devices"
            description="Explore our range of LoRa and ZigBee devices designed for industrial IoT applications with long-range, low-power wireless communication."
          />

          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mt-8 mb-6">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium">Filter by:</span>
              {filterOptions.map((option) => (
                <Button key={option.value} variant="outline" size="sm" className="h-8">
                  {option.name}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Sort by:</span>
              <select className="h-8 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background">
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
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
              Our team of experts is ready to help you find the right LoRa/ZigBee solution for your specific
              requirements.
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


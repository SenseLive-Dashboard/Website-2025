import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Server, Wifi, Radio, Network, Zap, Layers, Thermometer } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { ProductCard } from "@/components/product-card"

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore SenseLive's range of IoT hardware solutions for industrial automation and smart infrastructure.",
}

export default function ProductsPage() {
  // Product categories
  const categories = [
    {
      id: "wireless-bus-bar",
      name: "Wireless Bus Bar Solutions",
      description: "Advanced wireless temperature monitoring systems for bus bars and industrial equipment.",
      icon: Thermometer,
    },
    {
      id: "gateways",
      name: "Modbus Gateways",
      description: "Connect and integrate industrial devices with Modbus protocol support.",
      icon: Server,
    },
    {
      id: "controllers",
      name: "Remote IO Controllers",
      description: "Monitor and control remote inputs and outputs for industrial automation.",
      icon: Zap,
    },
    {
      id: "wireless",
      name: "LoRa/ZigBee Devices",
      description: "Low-power wireless solutions for IoT applications.",
      icon: Radio,
    },
    {
      id: "wifi",
      name: "WiFi Products",
      description: "Wireless connectivity solutions for industrial environments.",
      icon: Wifi,
    },
    {
      id: "connectivity",
      name: "4G/5G Products",
      description: "Reliable cellular connectivity for remote monitoring and control.",
      icon: Network,
    },
    {
      id: "fiber",
      name: "Optical Fiber",
      description: "High-speed, reliable data transmission for industrial networks.",
      icon: Layers,
    },
  ]

  // Featured products
  const featuredProducts = [
    {
      id: "edge8000",
      name: "SenseLive Edge8000",
      description: "Wireless Bus Bar Temperature Monitoring System",
      specs: [
        "Wireless temperature monitoring",
        "Integrated energy metering",
        "Dual relays for control",
        "Real-time alerts and notifications",
      ],
      image: "/products/wireless-bus-bar/edge8000/thumbnail.png",
      category: "wireless-bus-bar",
    },
    {
      id: "x9000",
      name: "X9000",
      description: "4G IoT Gateway with Edge Intelligence",
      specs: ["4G CAT1 Connectivity", "Digital & Analog Inputs", "Dual RS485 Ports", "Edge Computing Features"],
      image: "/products/connectivity/x9000/main.png",
      category: "connectivity",
    },
    {
      id: "x5050",
      name: "X5050",
      description: "RS485 to TCP/IP Modbus Server",
      specs: ["Modbus TCP ↔ RTU", "MQTT Gateway", "DIN-Rail Mount", "-40°C to +85°C"],
      image: "/placeholder.svg?height=300&width=300",
      category: "gateways",
    },
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
  ]

  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <PageHeader
            title="IoT Hardware Solutions"
            description="Explore our comprehensive range of industrial-grade IoT hardware designed for reliability, connectivity, and performance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {categories.map((category) => (
              <Link key={category.id} href={`/products/${category.id}`}>
                <Card className="h-full hover:shadow-md transition-shadow border-muted hover:border-primary/50">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{category.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">{category.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="gap-1 text-primary">
                      View products
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Products</h2>
            <p className="text-muted-foreground md:text-xl max-w-[800px]">
              Our most popular IoT hardware solutions trusted by industry leaders worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
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

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Need help finding the right product for your application?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="outline" className="w-full sm:w-auto">
                  Contact our experts
                </Button>
              </Link>
              <Link href="/inquiry">
                <Button className="w-full sm:w-auto">Request a quote</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


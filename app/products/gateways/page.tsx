import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { ProductCard } from "@/components/product-card"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Modbus Gateways | SenseLive",
  description:
    "Explore SenseLive's range of industrial Modbus gateways for seamless protocol conversion and data communication.",
}

interface GatewayProduct {
  id: string
  name: string
  model: string
  description: string
  specs: string[]
  features: string[]
  image: string
  category: string
  badge?: string
  datasheet?: string
}

export default function GatewaysPage() {
  // Gateway products data
  const gatewayProducts: GatewayProduct[] = [
    {
      id: "sl5143d",
      name: "SenseLive SL5143D",
      model: "SL5143D",
      description: "Industrial Modbus Gateway with RS485 to TCP/IP Conversion",
      specs: ["RS485/232 to TCP/IP", "Modbus RTU/TCP Protocol", "DC 9-24V Power Input", "DIN Rail Mount"],
      features: ["Ethernet RJ45 Connection", "Status LED Indicators", "Industrial Design", "Wide Voltage Range"],
      image: "/placeholder.svg?height=300&width=300",
      category: "gateways",
      badge: "Featured",
      datasheet: "/downloads/datasheets/sl5143d.pdf",
    },
    {
      id: "x5050",
      name: "SenseLive X5050",
      model: "X5050",
      description: "RS485 to TCP/IP Modbus Server with MQTT Support",
      specs: ["RS485 to TCP/IP", "MQTT Protocol Support", "Web Configuration", "Industrial Grade"],
      features: ["Built-in MQTT Gateway", "JSON Data Format", "Multiple Host Support", "Diagnostic Tools"],
      image: "/placeholder.svg?height=300&width=300",
      category: "gateways",
      badge: "New",
      datasheet: "/downloads/datasheets/x5050.pdf",
    },
    // Add more gateway products as needed
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
            description="Industrial-grade Modbus gateways for seamless protocol conversion and reliable data communication in demanding environments."
          />

          {/* Featured Product */}
          <div className="mt-12 mb-16">
            <Card className="overflow-hidden border-muted hover:border-primary/50 transition-all">
              <div className="grid md:grid-cols-2 gap-6 p-6">
                <div className="flex items-center justify-center bg-muted/50 rounded-lg p-8">
                  <div className="relative w-full max-w-sm aspect-square">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="SenseLive SL5143D"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <Badge className="w-fit">Featured Product</Badge>
                  <h2 className="text-2xl font-bold">SenseLive SL5143D</h2>
                  <p className="text-muted-foreground">
                    Industrial Modbus Gateway with seamless RS485 to TCP/IP conversion, perfect for connecting legacy
                    serial devices to modern IP networks.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      RS485/232 to TCP/IP conversion
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      Modbus RTU/TCP protocol support
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      Industrial-grade design with DIN rail mount
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      Wide voltage range (DC 9-24V)
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Link href="/products/gateways/sl5143d">
                      <Button className="w-full sm:w-auto">View Details</Button>
                    </Link>
                    <Link href="/downloads/datasheets/sl5143d.pdf">
                      <Button variant="outline" className="w-full sm:w-auto gap-2">
                        <FileText className="h-4 w-4" />
                        Download Datasheet
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {gatewayProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                specs={product.specs}
                image={product.image}
                category="gateways"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Need Technical Assistance?</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Our team of experts is ready to help you select and implement the right Modbus gateway solution for your
              specific requirements.
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


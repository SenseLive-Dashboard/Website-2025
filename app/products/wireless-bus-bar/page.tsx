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
  title: "Wireless Bus Bar Solutions | SenseLive",
  description: "Advanced wireless temperature monitoring systems for bus bars and industrial equipment.",
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


export default function WirelessBusBarPage() {
  // Products in this category
  const products = [
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
      id: "sensebt-222",
      name: "SenseBT-222",
      description: "Battery-Powered Wireless Temperature Sensor",
      specs: ["Long Battery Life", "Wide Range", "Industrial Design", "Wireless Communication"],
      image: "/products/wireless-bus-bar/SenseBT222/SenseBT222img1.png",
      category: "wireless-bus-bar",
    },
    {
      id: "sensect-222",
      name: "SenseCT-222",
      description: "CT-Powered Wireless Temperature Sensor",
      specs: ["Self-Powered", "Real-time Monitoring", "Easy Installation", "Maintenance-Free"],
      image: "/products/wireless-bus-bar/SenseCT222/SenseCT222img1.png",
      category: "wireless-bus-bar",
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-10 bg-muted/30">
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
            <span className="text-foreground">Wireless Bus Bar Solutions</span>
          </div>

          <PageHeader
            title="Wireless Bus Bar Solutions"
            description="Advanced wireless temperature monitoring systems for bus bars and industrial equipment, featuring both battery-powered and CT-powered sensors."
          />
          <div className="mt-8 mb-12">
            <div className="flex flex-wrap gap-2">
              <Link href="/products">
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Al Products
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
          

          {/* Featured Product */}
          {/* <div className="mt-12 mb-16">
            <Card className="overflow-hidden border-muted hover:border-primary/50 transition-all">
              <div className="grid md:grid-cols-2 gap-6 p-6">
                <div className="flex items-center justify-center bg-muted/50 rounded-lg p-8">
                  <div className="relative w-full max-w-sm aspect-square">
                    <Image
                      src="/products/wireless-bus-bar/edge8000/thumbnail.png"
                      alt="SenseLive Edge8000"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <Badge className="w-fit">Premium Product</Badge>
                  <h2 className="text-2xl font-bold">SenseLive Edge8000</h2>
                  <p className="text-muted-foreground">
                    Next-generation wireless bus bar and surface temperature monitoring system with integrated energy
                    metering and dual relays for threshold-based alarms.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      Support for up to 60 wireless temperature sensors
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      Integrated energy metering functionality
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      RS485 data output for system integration
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      Built-in dual relays for automated responses
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Link href="/products/wireless-bus-bar/edge8000">
                      <Button className="w-full sm:w-auto">View Details</Button>
                    </Link>
                    <Link href="/downloads/datasheets/edge8000.pdf">
                      <Button variant="outline" className="w-full sm:w-auto gap-2">
                        <FileText className="h-4 w-4" />
                        Download Datasheet
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div> */}

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                specs={product.specs}
                image={product.image}
                category="wireless-bus-bar"
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
              Our team of experts is ready to help you select and implement the right wireless monitoring solution for
              your specific requirements.
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


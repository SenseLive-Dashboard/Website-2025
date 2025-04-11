import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { ProductCard } from "@/components/product-card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Products | SenseLive",
  description: "Explore SenseLive's comprehensive range of IoT hardware and solutions for industrial applications.",
}

// Define all product categories
const productCategories = [
  { id: "gateways", name: "Modbus Gateways", slug: "gateways" },
  { id: "controllers", name: "Remote IO Controllers", slug: "controllers" },
  { id: "connectivity", name: "4G/5G Products", slug: "connectivity" },
  { id: "wireless", name: "LoRa/ZigBee Devices", slug: "wireless" },
  { id: "wifi", name: "WiFi Solutions", slug: "wifi" },
  { id: "fiber", name: "Optical Fiber", slug: "fiber" },
  { id: "wireless-bus-bar", name: "Wireless Bus Bar Solutions", slug: "wireless-bus-bar" },
]

// Define all products
const allProducts = [
  // Wireless Bus Bar Solutions
  {
    id: "edge8000",
    name: "SenseLive Edge8000",
    description: "Wireless Bus Bar / Surface Temperature Monitoring System",
    specs: ["Up to 60 wireless sensors", "Integrated Energy Meter", "RS485 Data Output", "Built-In Dual Relays"],
    image: "/products/wireless-bus-bar/edge8000/thumbnail.png",
    category: "wireless-bus-bar",
  },
  {
    id: "sensebt-222",
    name: "SenseLive SenseBT-222",
    description: "Battery-Powered Wireless Temperature Sensor",
    specs: ["Long Battery Life", "Wide Range", "Industrial Design", "Wireless Communication"],
    image: "/products/wireless-bus-bar/SenseBT222/SenseBT222img1.png",
    category: "wireless-bus-bar",
  },
  {
    id: "sensect-222",
    name: "SenseLive SenseCT-222",
    description: "CT-Powered Wireless Temperature Sensor",
    specs: ["Self-Powered", "Real-time Monitoring", "Easy Installation", "Maintenance-Free"],
    image: "/products/wireless-bus-bar/SenseCT222/SenseCT222img1.png",
    category: "wireless-bus-bar",
  },

  // Controllers
  {
    id: "e7000",
    name: "SenseLive E7000",
    description: "Ethernet-based Remote IO Controller",
    specs: ["4 Digital Inputs", "2 Analog Inputs", "4 Relay Outputs", "Modbus TCP Support"],
    image: "/products/controllers/e7000/thumbnail.png",
    category: "controllers",
  },
  {
    id: "e7500",
    name: "SenseLive E7500",
    description: "RS485-based Remote IO Controller",
    specs: ["4 Digital Inputs", "2 Analog Inputs", "4 Relay Outputs", "Modbus RTU Support"],
    image: "/products/controllers/e7500/thumbnail.png",
    category: "controllers",
  },

  // Connectivity
  {
    id: "x9000",
    name: "SenseLive X9000",
    description: "4G IoT Gateway with Edge Intelligence",
    specs: ["4G CAT1 Connectivity", "Digital & Analog Inputs", "Dual RS485 Ports", "Edge Computing"],
    image: "/products/connectivity/x9000/thumbnail.png",
    category: "connectivity",
  },
  {
    id: "x7400d",
    name: "SenseLive X7400D",
    description: "DIN-rail 4G CAT1 DTU with RS485 Interface",
    specs: ["4G CAT1 with 2G Fallback", "RS485 Interface", "MQTT & JSON Support", "Edge Computing Features"],
    image: "/products/connectivity/x7400D/x7400Dimg1.png",
    category: "connectivity",
  },
  {
    id: "x7400",
    name: "SenseLive X7400",
    description: "Compact 4G Router",
    specs: ["LTE Cat 4", "WiFi Hotspot", "Compact Design", "Easy Setup"],
    image: "/products/connectivity/x7400/x7400.png",
    category: "connectivity",
  },

  // Gateways
  {
    id: "x5050",
    name: "SenseLive X5050",
    description: "RS485 to TCP/IP Modbus Server",
    specs: ["Modbus TCP ↔ RTU", "MQTT Gateway", "DIN-Rail Mount", "-40°C to +85°C"],
    image: "/products/gateway/x5050/x5050.png",
    category: "gateways",
  },

  // Wireless
  {
    id: "x7700d",
    name: "SenseLive X7700D",
    description: "DIN-Rail LoRa Device",
    specs: [
      "DIN-Rail Mounting",
      "RS485 & Modbus RTU support",
      "Long-Range LoRa Transmission",
      "Secure & Encrypted Communication",
    ],
    image: "/products/wireless/X7700D/X7700Dimg1.png",
    category: "wireless",
  },
  {
    id: "x7800",
    name: "SenseLive X7800",
    description: "Wall-Mounted LoRa Device with RS232 Features",
    specs: [
      "Wall-Mounted & Compact Design",
      "Dual RS232 & RS485 Support",
      "LoRaWAN & Private LoRa Protocol",
      "Low Power Consumption",
    ],
    image: "/products/wireless/x7800/x7800.png",
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
    image: "/products/wireless/x7900/thumbnail.png",
    category: "wireless",
  },

  // WiFi
  {
    id: "x7050",
    name: "SenseLive X7050",
    description: "Industrial WiFi AP",
    specs: ["Dual Band", "IP65 Rated", "PoE Powered", "Enterprise Security"],
    image: "/products/wifi/x7050/X7050.png",
    category: "wifi",
  },

  // Fiber
  {
    id: "x8555",
    name: "SenseLive X8555",
    description: "Fiber Optic Converter",
    specs: ["Single-mode", "Dual Fiber", "Industrial Grade", "Wide Temperature Range"],
    image: "/products/fiber/X8555/X8555img1.png",
    category: "fiber",
  },
]

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-8 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Products</span>
          </div>

          <PageHeader
            title="All Products"
            description="Explore our comprehensive range of industrial IoT hardware designed for reliability, connectivity, and performance."
          />

          {/* Category Filter */}
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

          {/* All Products Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allProducts.map((product) => (
              <div key={`${product.category}-${product.id}`} className="flex flex-col">
                <ProductCard
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  specs={product.specs}
                  image={product.image}
                  category={product.category}
                />
                <div className="mt-2">
                  <Link href={`/products/${product.category}`}>
                    <Badge variant="outline" className="text-xs hover:bg-primary/10">
                      {productCategories.find((cat) => cat.id === product.category)?.name || product.category}
                    </Badge>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-senselive text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Need Help Selecting the Right Product?</h2>
            <p className="text-white/90 md:text-lg">
              Our team of experts is ready to help you find the perfect solution for your specific requirements. Contact
              us today for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/inquiry">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Request a Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 font-medium transition-all"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Download */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="SenseLive Product Catalog"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Download Our Product Catalog</h2>
              <p className="text-muted-foreground">
                Get comprehensive information about our complete product range, including technical specifications,
                features, and application examples.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  Detailed product specifications
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  Application case studies
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  Compatibility information
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  Ordering information
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/downloads/catalog">
                  <Button size="lg" className="font-medium">
                    Download Catalog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


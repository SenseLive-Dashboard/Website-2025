import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Download, FileText, CheckCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProductImageGallery } from "@/components/product-image-gallery"
import { RelatedProducts } from "@/components/related-products"
import { ProductStructuredData } from "@/components/structured-data"
import { getProductImagePath, getProductGalleryImages } from "@/lib/product-image-service"

export const metadata: Metadata = {
  title: "SenseLive X5050 - RS485 to TCP/IP Modbus Gateway | SenseLive",
  description:
    "The SenseLive X5050 is a high-performance industrial Modbus gateway that converts between Modbus RTU and Modbus TCP protocols with MQTT support.",
}

export default function X5050ProductPage() {
  // Product data
  
  const productImages = {
    main: "/products/gateway/x5050/X5050.png",
    gallery: [
      "/products/gateway/x5050/X5050.png",
      "/products/gateway/x5050/X5050.png",
      "/products/gateway/x5050/X5050.png",
    ],
  }
  const product = {
    id: "x5050",
    name: "SenseLive X5050",
    shortDescription: "RS485 to TCP/IP Modbus Server",
    description:
      "The SenseLive X5050 is a high-performance industrial Modbus gateway that enables seamless communication between Modbus RTU devices and TCP/IP networks. With support for MQTT protocol, it's ideal for Industrial IoT applications requiring reliable data transmission.",
    specs: [
      "Modbus TCP ↔ RTU Conversion",
      "MQTT Protocol Support",
      "DIN-Rail Mounting",
      "Industrial Temperature Range (-40°C to +85°C)",
      "9-24V DC Power Supply",
      "Ethernet RJ45 Interface",
      "RS485 Serial Interface",
      "Status LED Indicators",
      "Web-Based Configuration",
    ],
    features: [
      {
        title: "Dual Protocol Support",
        description:
          "Supports both Modbus TCP and Modbus RTU protocols, enabling seamless integration between serial devices and Ethernet networks.",
      },
      {
        title: "MQTT Connectivity",
        description:
          "Built-in MQTT client for direct cloud connectivity, making it ideal for Industrial IoT applications.",
      },
      {
        title: "Industrial Design",
        description:
          "Rugged DIN-rail mount design with wide temperature range (-40°C to +85°C) for reliable operation in harsh industrial environments.",
      },
      {
        title: "Easy Configuration",
        description:
          "Web-based configuration interface allows for quick setup and parameter adjustment without specialized software.",
      },
    ],
    applications: [
      "Factory Automation",
      "Building Management Systems",
      "Energy Monitoring",
      "Remote Equipment Monitoring",
      "Industrial IoT Deployments",
      "Legacy System Integration",
    ],
    technicalSpecs: [
      { name: "Communication", value: "Modbus TCP, Modbus RTU, MQTT" },
      { name: "Serial Interface", value: "RS485 (2-wire)" },
      { name: "Network Interface", value: "10/100 Mbps Ethernet (RJ45)" },
      { name: "Power Supply", value: "9-24V DC" },
      { name: "Power Consumption", value: "< 2W" },
      { name: "Operating Temperature", value: "-40°C to +85°C" },
      { name: "Humidity", value: "5% to 95% (non-condensing)" },
      { name: "Dimensions", value: "90 x 70 x 25 mm" },
      { name: "Mounting", value: "DIN-Rail" },
      { name: "Certification", value: "CE, FCC, RoHS" },
    ],
    downloads: [
      { name: "User Manual", path: "/downloads/x5050-user-manual.pdf", icon: FileText },
      { name: "Datasheet", path: "/downloads/x5050-datasheet.pdf", icon: FileText },
      { name: "Configuration Tool", path: "/downloads/x5050-config-tool.zip", icon: Download },
    ],
    image: getProductImagePath("x5050", "main"),
    category: "gateways",
  }

  // Get the main image and gallery images
  const mainImage = getProductImagePath("x5050", "main")
  const galleryImages = getProductGalleryImages("x5050")

  // Related products
  const relatedProducts = [
    {
      id: "x7900",
      name: "SenseLive X7900",
      description: "LoRa Gateway with TCP Output",
      specs: ["LoRaWAN & Private LoRa", "TCP/IP Gateway", "Multiple Interfaces", "Web Management"],
      image: "/products/wireless/x7900/thumbnail.png",
      category: "wireless",
    },
    {
      id: "e7000",
      name: "SenseLive E7000",
      description: "Ethernet-based Remote IO Controller",
      specs: ["4 Digital Inputs", "2 Analog Inputs", "4 Relay Outputs", "Modbus TCP Support"],
      image: "/products/controllers/e7000/thumbnail.png",
      category: "controllers",
    },
  ]

  return (
    
    <div className="flex flex-col">
      {/* Structured Data for SEO */}
      <ProductStructuredData
        name={product.name}
        description={product.description}
        image={product.image}
        sku={product.id}
        brand="SenseLive"
        category="Industrial Modbus Gateway"
        url={`/products/${product.category}/${product.id}`}
      />

<section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-foreground">
              Products
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products/connectivity" className="hover:text-foreground">
              Modbus Gateway
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">SenseLive X5050</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Product Images */}
            <ProductImageGallery
              mainImage={productImages.main}
              galleryImages={productImages.gallery}
              productName="SenseLive X5050"
            />

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">SenseLive X5050</h1>
                <p className="text-xl text-muted-foreground mt-2">RS485 to TCP/IP Modbus Server</p>
              </div>

              <div className="prose max-w-none text-muted-foreground">
                <p>
                The SenseLive X5050 is a high-performance industrial Modbus gateway that enables seamless communication between Modbus RTU devices and TCP/IP networks. With support for MQTT protocol, it's ideal for Industrial IoT applications requiring reliable data transmission.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/inquiry">
                  <Button size="lg" className="w-full sm:w-auto">
                    Request a Quote
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Detailed Features */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">Features & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.features.map((feature, index) => (
              <Card key={index} className="border-muted">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">Applications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.applications.map((application, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-muted">
                <ArrowRight className="h-5 w-5 text-primary" />
                <span className="font-medium">{application}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">Technical Specifications</h2>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                {product.technicalSpecs.map((spec, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                    <td className="py-3 px-4 font-medium border-r">{spec.name}</td>
                    <td className="py-3 px-4">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">Downloads</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.downloads.map((download, index) => (
              <Link key={index} href={download.path} className="group">
                <Card className="h-full hover-lift border-muted hover:border-primary/50 transition-all">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <download.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium group-hover:text-primary transition-colors">{download.name}</h3>
                      <p className="text-sm text-muted-foreground">Download</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <RelatedProducts products={relatedProducts} />
        </div>
      </section>
    </div>
  )
}


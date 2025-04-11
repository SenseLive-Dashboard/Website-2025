import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Download, FileText, Share2, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductImageGallery } from "@/components/product-image-gallery"
import { ProductStructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "SenseLive X7900 - LoRa Gateway with TCP Output | SenseLive",
  description:
    "The X7900 is a professional LoRa Gateway that converts LoRa wireless signals to TCP/IP, supporting both LoRaWAN and private LoRa protocols with multiple network interfaces.",
}



export default function X7900ProductPage() {
  // Product data
  const product = {
    id: "x7900",
    name: "SenseLive X7900",
    shortDescription: "LoRa Gateway with TCP Output",
    status: "In Stock",
    image: "/products/wireless/x7900/main.png",
    galleryImages: [
      "/products/wireless/x7900/with-antenna.png",
      "/products/wireless/x7900/angle-view.png",
      "/products/wireless/x7900/rear-ports.png",
      "/products/wireless/x7900/side-connections.png",
    ],
    keyFeatures: [
      "Supports both LoRaWAN and private LoRa protocols",
      "TCP/IP gateway functionality for seamless integration",
      "Multiple network interfaces (Ethernet, RS232/485/422)",
      "Web-based management console",
      "Industrial-grade design for harsh environments",
      "Wide operating temperature range: -40°C to 85°C",
    ],
    datasheetUrl: "/downloads/datasheets/x7900.pdf",
    overview: [
      "The X7900 is a professional LoRa Gateway that converts LoRa wireless signals to TCP/IP, enabling seamless integration with existing network infrastructure. It supports both LoRaWAN and private LoRa protocols, making it versatile for various IoT applications.",
      "With multiple network interfaces including Ethernet and serial ports (RS232/485/422), the X7900 can connect to a wide range of devices and systems. The built-in web-based management console provides easy configuration and monitoring capabilities.",
      "Designed for industrial applications, the X7900 features a robust metal enclosure, wide operating temperature range, and reliable performance even in harsh environments. It's the ideal solution for IoT deployments requiring long-range wireless communication with TCP/IP connectivity.",
    ],
    benefits: [
      {
        title: "Versatile Connectivity",
        description: "Multiple interfaces and protocol support ensure compatibility with various systems and devices.",
      },
      {
        title: "Easy Management",
        description: "Web-based configuration and monitoring simplify setup and maintenance.",
      },
      {
        title: "Industrial Reliability",
        description: "Robust design and wide temperature range ensure reliable operation in demanding environments.",
      },
      {
        title: "Seamless Integration",
        description:
          "Convert LoRa wireless signals to standard TCP/IP for easy integration with existing infrastructure.",
      },
    ],
    specifications: {
      Communication: {
        "LoRa Frequency": "433/868/915 MHz (region dependent)",
        "LoRa Range": "Up to 10km line-of-sight",
        "Network Interfaces": "1 x 10/100 Mbps Ethernet, RS232/485/422",
        Protocols: "LoRaWAN, Private LoRa, TCP/IP, MQTT, HTTP",
      },
      Hardware: {
        Processor: "ARM Cortex-M4, 168 MHz",
        Memory: "128 MB RAM, 256 MB Flash",
        "Power Supply": "9-24 VDC",
        "Power Consumption": "< 3W typical",
      },
      Physical: {
        Dimensions: "100 x 70 x 25 mm",
        Weight: "250g",
        Mounting: "DIN rail or wall mount",
        "Operating Temperature": "-40°C to 85°C",
        "IP Rating": "IP30",
      },
      Software: {
        Configuration: "Web interface, CLI",
        Security: "TLS/SSL, Access Control",
        Management: "SNMP, Remote firmware update",
        Diagnostics: "System logs, Signal strength indicator",
      },
    },
    applications: [
      {
        title: "Smart Agriculture",
        industry: "Agriculture",
        description:
          "Monitor soil moisture, temperature, and other environmental parameters across large farming areas.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Industrial Monitoring",
        industry: "Manufacturing",
        description:
          "Collect data from sensors distributed throughout factory floors for equipment monitoring and predictive maintenance.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Smart City Infrastructure",
        industry: "Urban Management",
        description:
          "Connect street lighting, parking sensors, waste management systems, and other city infrastructure.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    downloads: [
      {
        title: "X7900 Datasheet",
        description: "Detailed technical specifications and features",
        type: "Datasheet",
        version: "2.1",
        date: "2023-06-15",
        fileSize: "1.8 MB",
        url: "/downloads/datasheets/x7900.pdf",
      },
      {
        title: "X7900 User Manual",
        description: "Installation, configuration, and operation guide",
        type: "Manual",
        version: "1.4",
        date: "2023-07-10",
        fileSize: "3.5 MB",
        url: "/downloads/manuals/x7900.pdf",
      },
      {
        title: "X7900 Firmware",
        description: "Latest firmware with security updates and new features",
        type: "Firmware",
        version: "3.1.2",
        date: "2023-08-22",
        fileSize: "6.2 MB",
        url: "/downloads/firmware/x7900_v3.1.2.bin",
      },
      {
        title: "X7900 Quick Start Guide",
        description: "Step-by-step guide for initial setup",
        type: "Guide",
        version: "1.0",
        date: "2023-05-05",
        fileSize: "1.1 MB",
        url: "/downloads/guides/x7900_quickstart.pdf",
      },
    ],
  }

  // Related products
  const relatedProducts = [
    {
      id: "x7800",
      name: "SenseLive X7800",
      description: "Wall-Mounted LoRa Device with RS232 Features",
      specs: ["Wall Mounted & Compact Design", "Dual RS323 & RS485 Support", "LoRaWAN & private LoRa Protocol", "Low Power Consumption"],
      image: "/products/connectivity/x9000/thumbnail.png",
      category: "connectivity",
    },
    {
      id: "x7900",
      name: "SenseLive X7900",
      description: "LoRa Gateway with TCP Output",
      specs: ["LoRaWAN & private LoRa Protocol", "TCP/IP Gateway Functionality", "Multiple Network Interface", "Web Based Management Console"],
      image: "/products/connectivity/X7400/X7400.png",
      category: "connectivity",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Structured Data for SEO */}
      <ProductStructuredData
        name={product.name}
        description={product.shortDescription}
        image={product.image}
        sku="X7900"
        brand="SenseLive"
        category="LoRa/ZigBee Devices"
        url={`/products/wireless/x7900`}
      />

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
            <Link href="/products/wireless" className="hover:text-foreground">
              LoRa/ZigBee Devices
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <ProductImageGallery
              mainImage={product.image}
              galleryImages={product.galleryImages}
              productName={product.name}
            />

            <div className="space-y-6">
              <div>
                <Badge className="mb-2">{product.status}</Badge>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-xl text-muted-foreground mt-2">{product.shortDescription}</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Key Features</h3>
                <ul className="space-y-2">
                  {product.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/inquiry" className="flex-1">
                  <Button className="w-full gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Request a Quote
                  </Button>
                </Link>
                <Link href={product.datasheetUrl} className="flex-1">
                  <Button variant="outline" className="w-full gap-2">
                    <FileText className="h-4 w-4" />
                    Download Datasheet
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Link href="/support" className="text-sm text-muted-foreground hover:text-foreground">
                  Need help? Contact support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="overview"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3 text-muted-foreground data-[state=active]:text-foreground"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="specifications"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3 text-muted-foreground data-[state=active]:text-foreground"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger
                value="applications"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3 text-muted-foreground data-[state=active]:text-foreground"
              >
                Applications
              </TabsTrigger>
              <TabsTrigger
                value="downloads"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3 text-muted-foreground data-[state=active]:text-foreground"
              >
                Downloads
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="pt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Product Overview</h2>
                  <div className="prose max-w-none text-muted-foreground">
                    {product.overview.map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-md opacity-30"></div>
                    <Image
                      src="/products/wireless/x7900/with-antenna.png"
                      alt="SenseLive X7900 with antenna in use"
                      width={600}
                      height={400}
                      className="relative rounded-lg object-cover shadow-xl"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Why Choose {product.name}</h3>
                    <ul className="space-y-4">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">{benefit.title}</h4>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="pt-6">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>

                <div className="grid gap-6 md:grid-cols-2">
                  {Object.entries(product.specifications).map(([category, specs]) => (
                    <Card key={category} className="border-muted">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <dl className="space-y-2">
                          {Object.entries(specs).map(([key, value]) => (
                            <div key={key} className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                              <dt className="text-sm font-medium text-muted-foreground">{key}</dt>
                              <dd className="text-sm">{value}</dd>
                            </div>
                          ))}
                        </dl>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="applications" className="pt-6">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Application Scenarios</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {product.applications.map((application, index) => (
                    <Card key={index} className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src={application.image || "/placeholder.svg"}
                          alt={application.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{application.title}</CardTitle>
                        <CardDescription>{application.industry}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{application.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="downloads" className="pt-6">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Downloads</h2>

                <div className="grid gap-4">
                  {product.downloads.map((download, index) => (
                    <Card key={index} className="border-muted">
                      <CardHeader className="p-4 pb-0">
                        <div className="flex justify-between items-start">
                          <div className="flex items-start gap-3">
                            <div className="mt-1">
                              <FileText className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-base">{download.title}</CardTitle>
                              <CardDescription className="text-sm mt-1">{download.description}</CardDescription>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs font-normal">
                            {download.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-3">
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2">
                          {download.version && <span>Version: {download.version}</span>}
                          <span>Released: {download.date}</span>
                          {download.fileSize && <span>Size: {download.fileSize}</span>}
                        </div>
                      </CardContent>
                      <CardContent className="p-4 pt-0">
                        <Link href={download.url}>
                          <Button variant="outline" size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            Download
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Related Products</h2>
            <p className="text-muted-foreground max-w-[800px]">
              Explore other products that work well with {product.name} or serve similar purposes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {relatedProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.category}/${product.id}`} className="group">
                <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors">
                  <div className="relative aspect-square">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {product.specs.map((spec, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-2"></div>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Need More Information?</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Contact our team of experts to learn more about the SenseLive X7800 and how it can benefit your
              application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/inquiry">
                <Button>Request a Quote</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Contact Sales</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


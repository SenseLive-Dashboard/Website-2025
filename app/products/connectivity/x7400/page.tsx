import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, FileText, ShoppingCart } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductImageGallery } from "@/components/product-image-gallery"
import { ProductStructuredData } from "@/components/structured-data"
import { RelatedProducts } from "@/components/related-products"

export const metadata: Metadata = {
  title: "SenseLive X7400D | 4G CAT1 DTU with RS485 Interface",
  description:
    "Industrial DIN-rail 4G CAT1 Data Transmission Unit with RS485 interface, MQTT support, and edge computing capabilities for IoT applications.",
  keywords: "4G DTU, RS485 to 4G, SenseLive Vircom, Modbus to MQTT, Edge DTU",
}

export default function X7400DProductPage() {
  // Product images
  const productImages = {
    main: "/products/connectivity/x7400/x7400img1.png",
    gallery: [
      "/products/connectivity/x7400/x7400img1.png",
      "/products/connectivity/x7400/x7400img1.png",
      "/products/connectivity/x7400/x7400img1.png",
      "/products/connectivity/x7400/x7400img1.png",
    
    ],
  }

  // Related products
  const relatedProducts = [
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
      description: "Compact 4G Router",
      specs: ["LTE Cat 4", "WiFi Hotspot", "Compact Design", "Easy Setup"],
      image: "/products/connectivity/X7400D/X7400Dimg1.png",
      category: "connectivity",
    },
    {
      id: "x5050",
      name: "SenseLive X5050",
      description: "RS485 to TCP/IP Modbus Server",
      specs: ["Modbus TCP ↔ RTU", "MQTT Gateway", "DIN-Rail Mount", "-40°C to +85°C"],
      image: "/products/gateway/x5050/X5050.png",
      category: "gateways",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Structured Data for SEO */}
      <ProductStructuredData
        name="SenseLive X7400D"
        description="DIN-rail 4G CAT1 DTU with RS485 Interface"
        image={productImages.main}
        sku="X7400D"
        brand="SenseLive"
        category="Industrial DTU"
        url="/products/connectivity/x7400d"
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
              4G/5G Products
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">SenseLive X7400D</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Product Images */}
            <ProductImageGallery
              mainImage={productImages.main}
              galleryImages={productImages.gallery}
              productName="SenseLive X7400D"
            />

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">SenseLive X7400</h1>
                <p className="text-xl text-muted-foreground mt-2">Compact 4G Router</p>
              </div>


              <div className="space-y-4">
                <h3 className="font-medium">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">
                    4G CAT1 DTU connectivity with high-speed uplink/downlink and 2G fallback support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">
                    Multi-protocol conversion: RS232/485 to 4G, Modbus RTU to Modbus TCP, and RS232/485 to MQTT/JSON </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">
                    Adaptive serial port support with a wide baud rate range (300–921600 bps), data bits, and parity options
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">
                    Remote management capabilities including configuration, real-time monitoring, and firmware upgrades
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">
                    Industrial-grade design with a wide operating temperature range (–40°C to 85°C) and robust power input (9–24V DC)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">
                    Plug and play installation with intuitive LED indicators for device status 
                    </span>
                  </li>

                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/inquiry" className="flex-1">
                  <Button className="w-full gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Request a Quote
                  </Button>
                </Link>
                <Link href="https://senselive.in/downloads/documents/datasheets/datasheet_senselive_x7400.pdf" className="flex-1">
                  <Button variant="outline" className="w-full gap-2">
                    <FileText className="h-4 w-4" />
                    Download Datasheet
                  </Button>
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

            {/* Overview Tab */}
            <TabsContent value="overview" className="pt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Product Overview</h2>
                  <div className="prose max-w-none text-muted-foreground">
                    <p>
                    SenseLive X7400 is a high-performance 4G CAT1 DTU that bridges legacy serial communication devices (RS232/485) with modern 4G networks—while also providing fallback support for 2G networks. It effectively converts serial data into formats suitable for cloud-based applications via protocols such as Modbus TCP, MQTT, and JSON. Ideal for remote monitoring, industrial automation, and data collection applications, the X7400 offers reliable and real-time data transmission in challenging industrial environments. 
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-md opacity-30"></div>
                    <Image
                      src="/products/connectivity/x7400/x7400img1.png"
                      alt="SenseLive X7400D in application"
                      width={600}
                      height={400}
                      className="relative rounded-lg object-cover shadow-xl"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Complete Feature Set</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Seamless Integration</h4>
                          <p className="text-sm text-muted-foreground">
                          Connects legacy serial devices to modern wireless networks without complex configurations.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Universal Compatibility</h4>
                          <p className="text-sm text-muted-foreground">
                          Multi-protocol support and adaptive serial port ensure high-speed, reliable data transmission.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Industrial-Grade Durability</h4>
                          <p className="text-sm text-muted-foreground">
                          Robust construction and wide temperature range for reliable performance in harsh environments.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Remote Management & Monitoring</h4>
                          <p className="text-sm text-muted-foreground">
                          Advanced features and intuitive LED indicators reduce installation and maintenance downtime.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Ideal for Industrial Use</h4>
                          <p className="text-sm text-muted-foreground">
                          Designed for remote monitoring and demanding applications with long-term reliability.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Specifications Tab */}
            <TabsContent value="specifications" className="pt-6">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-muted">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Communication</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Interface Conversion</dt>
                          <dd className="text-sm">RS232/485 to 4G </dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Supported Network Modes</dt>
                          <dd className="text-sm">4G CAT1 with fallback to 2G </dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">LTE Transmission Rate</dt>
                          <dd className="text-sm">Up to 10 Mbps (Downlink) / Up to 5 Mbps (Uplink) </dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Serial Port Parameters</dt>
                          <dd className="text-sm">Baud Rate: 300–921600 bps; Data Bits: 5–8; Parity: None/Odd/Even; Stop Bits: 1–2 </dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Communication Protocols</dt>
                          <dd className="text-sm">Transparent serial transmission, Modbus RTU ⇆ Modbus TCP, RS232/485 to MQTT/JSON, DLT-645 conversion to cloud JSON </dd>
                        </div>
                      </dl>
                    </CardContent>
                  </Card>

                  <Card className="border-muted">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Hardware</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Power Supply</dt>
                          <dd className="text-sm">DC 9–24V (via Q2.1 Socket or customizable terminal block) </dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Working Currently</dt>
                          <dd className="text-sm">Approximately 50 mA during 4G communication, 25 mA when idle </dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Product Dimension</dt>
                          <dd className="text-sm">9.4 cm (L) × 6.5 cm (W) × 2.5 cm (H) </dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Construction</dt>
                          <dd className="text-sm">Durable metal casing with radiation-resistant design and dual mounting ears; optional rail mounting accessories </dd>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Operating Temperature</dt>
                          <dd className="text-sm">P2P, M2M, offline storage, edge computing</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Antenna Interface</dt>
                          <dd className="text-sm">50Ω SMA (female) connector for external 4G antennas </dd>
                        </div>
                      </dl>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Applications Tab */}
            <TabsContent value="applications" className="pt-6">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Application Scenarios</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="border-muted">
                    <div className="relative aspect-video">
                      <Image
                        src="/placeholder.svg?height=200&width=300&text=Industrial+Automation"
                        alt="Industrial Automation"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Industrial Automation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                      Seamlessly connect legacy serial devices for process monitoring and control over long distances.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-muted">
                    <div className="relative aspect-video">
                      <Image
                        src="/placeholder.svg?height=200&width=300&text=Energy+Monitoring"
                        alt="Energy & Power Monitoring"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Power and Utility Monitoring</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                      Collect and transmit real-time power meter data and environmental parameters
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-muted">
                    <div className="relative aspect-video">
                      <Image
                        src="/placeholder.svg?height=200&width=300&text=Environmental+Monitoring"
                        alt="Environmental Monitoring"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Remote Access and Security</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                      Enable secure remote monitoring and control for access systems and surveillance equipment.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-muted">
                    <div className="relative aspect-video">
                      <Image
                        src="/placeholder.svg?height=200&width=300&text=Transportation+Systems"
                        alt="Transportation Systems"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Environmental Data Collection</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                      Ideal for gathering hydrological, meteorological, and environmental sensor data.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-muted">
                    <div className="relative aspect-video">
                      <Image
                        src="/placeholder.svg?height=200&width=300&text=Security+Access+Control"
                        alt="Security & Access Control"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Intelegent Transportation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                      Suited for vehicle-mounted data acquisition and remote monitoring applications.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Downloads Tab */}
            <TabsContent value="downloads" className="pt-6">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Downloads</h2>

                <div className="grid gap-4">
                  <Card className="border-muted">
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">SenseLive X7400D Datasheet</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-muted-foreground mb-4">
                        Comprehensive technical specifications and features of the SenseLive X7400D.
                      </p>
                      <Link href="/https://senselive.in/downloads/documents/datasheets/datasheet_senselive_x7400.pdf">
                        <Button variant="outline" size="sm">
                          Download Datasheet
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="border-muted">
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">SenseLive X7400D User Manual</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-muted-foreground mb-4">
                        Detailed installation, configuration, and operation instructions.
                      </p>
                      <Link href="/downloads/manuals/x7400d.pdf">
                        <Button variant="outline" size="sm">
                          Download Manual
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="border-muted">
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">SenseLive Vircom Software</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-muted-foreground mb-4">
                        Management software for configuring and monitoring SenseLive X7400D devices.
                      </p>
                      <Link href="https://senselive.in/downloads/documents/datasheets/datasheet_senselive_x7400.pdf">
                        <Button variant="outline" size="sm">
                          Download Software
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <RelatedProducts products={relatedProducts} title="Related Products" />
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-4">Need a Custom Solution?</h2>
            <p className="text-muted-foreground md:text-lg max-w-[800px] mx-auto mb-8">
              Contact our sales team to discuss your specific requirements and how SenseLive X9000 can help you
              implement a tailored IoT solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/inquiry">
                <Button size="lg" className="font-medium">
                  Request a Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="font-medium">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
    </div>
  )
}


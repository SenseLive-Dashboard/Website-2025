import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
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
    main: "/products/connectivity/X7400D/X7400Dimg1.png",
    gallery: [
      "/products/connectivity/X7400D/X7400Dimg1.png",
      "/products/connectivity/X7400D/X7400Dimg2.png",
      "/products/connectivity/X7400D/X7400Dimg3.png",
      
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
      id: "x7400",
      name: "SenseLive X7400",
      description: "Compact 4G Router",
      specs: ["LTE Cat 4", "WiFi Hotspot", "Compact Design", "Easy Setup"],
      image: "/products/connectivity/X7400/X7400.png",
      category: "connectivity",
    },
    {
      id: "x5050",
      name: "SenseLive X5050",
      description: "RS485 to TCP/IP Modbus Server",
      specs: ["Modbus TCP ↔ RTU", "MQTT Gateway", "DIN-Rail Mount", "-40°C to +85°C"],
      image: "/products/gateway/x5050/x5050.png",
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
                <h1 className="text-3xl font-bold">SenseLive X7400D</h1>
                <p className="text-xl text-muted-foreground mt-2">DIN-rail 4G CAT1 DTU with RS485 Interface</p>
              </div>

              <div className="prose max-w-none text-muted-foreground">
                <p>
                  SenseLive X7400D is a DIN-rail mountable 4G CAT1 Data Transmission Unit (DTU) developed for industrial
                  environments. It provides secure and real-time RS485-to-4G data communication, with 2G fallback, MQTT
                  and JSON support, and seamless remote management using SenseLive Vircom software. It is designed with
                  rugged construction and intelligent edge features for critical industrial and IoT deployments.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">
                      4G CAT1 DTU with RS485 interface and fallback to 2G/GPRS
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">
                      High-speed transmission: 5Mbps uplink / 10Mbps downlink
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">
                      Compact DIN-Rail mount design, with fire-retardant housing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">
                      Cloud-ready: Supports MQTT, Modbus RTU to JSON, HTTP GET/POST
                    </span>
                  </li>
                </ul>
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
                      The SenseLive X7400D is a premium industrial-grade 4G CAT1 Data Transmission Unit (DTU) designed
                      for mission-critical applications. It seamlessly bridges the gap between RS485 serial devices and
                      modern cloud platforms, enabling real-time data transmission and remote management.
                    </p>
                    <p>
                      With its robust DIN-rail mountable design and wide operating temperature range, the X7400D is
                      built to withstand harsh industrial environments. The device features advanced edge computing
                      capabilities, allowing for local data processing, caching, and threshold-based alarms.
                    </p>
                    <p>
                      Integration with the SenseLive Vircom platform provides comprehensive remote management, including
                      configuration, firmware updates, and diagnostics. The X7400D supports multiple protocols including
                      Modbus RTU, MQTT, and HTTP, making it compatible with a wide range of industrial systems and IoT
                      platforms.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-md opacity-30"></div>
                    <Image
                      src="/products/connectivity/X7400D/X7400Dimg2.png"
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
                          <h4 className="font-medium">Edge Computing</h4>
                          <p className="text-sm text-muted-foreground">
                            Includes local caching, scaling, threshold alarms for intelligent operation at the edge
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Remote Management</h4>
                          <p className="text-sm text-muted-foreground">
                            Remote configuration & updates via SenseLive Vircom platform
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Flexible Networking</h4>
                          <p className="text-sm text-muted-foreground">
                            Supports P2P and M2M networking without custom servers
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Industrial Grade</h4>
                          <p className="text-sm text-muted-foreground">
                            Wide voltage support (9–24V DC) and -40°C to +85°C operating range
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
                          <dt className="text-sm font-medium text-muted-foreground">Wireless Connectivity</dt>
                          <dd className="text-sm">4G CAT1 (TD-LTE, FDD-LTE), GSM fallback</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Data Transmission Rate</dt>
                          <dd className="text-sm">5 Mbps (uplink), 10 Mbps (downlink)</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Serial Interface</dt>
                          <dd className="text-sm">RS485</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Protocols Supported</dt>
                          <dd className="text-sm">Modbus RTU, MQTT, HTTP POST/GET, JSON</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">SIM Card Type</dt>
                          <dd className="text-sm">Standard SIM (1.8V/3V)</dd>
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
                          <dt className="text-sm font-medium text-muted-foreground">Operating Voltage</dt>
                          <dd className="text-sm">9–24V DC</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Operating Temperature</dt>
                          <dd className="text-sm">-40°C to +85°C</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Structure</dt>
                          <dd className="text-sm">Compact, DIN-rail mount, flame-retardant</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Software Support</dt>
                          <dd className="text-sm">Fully managed by SenseLive Vircom</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Additional Features</dt>
                          <dd className="text-sm">P2P, M2M, offline storage, edge computing</dd>
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
                        Seamlessly connect PLCs and controllers to cloud platforms for real-time monitoring and control
                        of industrial processes.
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
                      <CardTitle className="text-lg">Energy & Power Monitoring</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Collect energy consumption and fault data from remote substations and power distribution
                        networks.
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
                      <CardTitle className="text-lg">Environmental Monitoring</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Transmit sensor data from hydrological and meteorological stations to central monitoring
                        systems.
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
                      <CardTitle className="text-lg">Transportation Systems</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Enable remote data logging and control for mobile and roadside units in intelligent
                        transportation systems.
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
                      <CardTitle className="text-lg">Security & Access Control</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Integrate surveillance and gate systems with centralized security dashboards for comprehensive
                        monitoring.
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
                      <Link href="/downloads/datasheets/x7400d.pdf">
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
                      <Link href="/downloads/software/senselive-vircom.zip">
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
    </div>
  )
}


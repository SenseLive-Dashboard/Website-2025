import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Download, FileText, Share2, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductStructuredData } from "@/components/structured-data"
import { ProductImageGallery } from "@/components/product-image-gallery"

// Define the images for the X9000 product
const mainImage = "/products/connectivity/x9000/main.png"
const galleryImages = [
  "/products/connectivity/x9000/front.png",
  "/products/connectivity/x9000/back.png",
  "/products/connectivity/x9000/side.png",
]

export const metadata: Metadata = {
  title: "SenseLive X9000 – Advanced 4G IoT Gateway",
  description:
    "The SenseLive X9000 is an advanced 4G IoT Gateway with edge intelligence, multiple I/O channels, and comprehensive protocol support for industrial applications.",
  keywords: [
    "4G IoT Gateway",
    "Industrial IoT",
    "Edge Computing",
    "Remote Monitoring",
    "Modbus Gateway",
    "SenseLive X9000",
  ],
}

export default function X9000Page() {
  // Product details
  const product = {
    id: "x9000",
    name: "X9000",
    shortDescription: "4G IoT Gateway with Edge Intelligence",
    status: "In Stock",
    image: "/products/connectivity/x9000/main.png",
    galleryImages: [
      "/products/connectivity/x9000/front.png",
      "/products/connectivity/x9000/back.png",
      "/products/connectivity/x9000/side.png",
    ],
    keyFeatures: [
      "4G CAT1 Connectivity for reliable wireless communication",
      "Digital & Analog Inputs for versatile sensor integration",
      "Dual RS485 Ports for industrial device connectivity",
      "Edge Computing capabilities for local data processing",
      "Industrial-grade design for harsh environments",
      "Wide operating temperature range: -40°C to 85°C",
    ],
    datasheetUrl: "/downloads/datasheets/x9000.pdf",
    overview: [
      "The X9000 is an industrial-grade 4G IoT Gateway designed for reliable data communication in demanding environments. It seamlessly connects industrial devices to cloud platforms, enabling remote monitoring and control of equipment.",
      "With built-in 4G CAT1 connectivity, the X9000 provides reliable communication even in locations where wired networks are unavailable or impractical. The dual RS485 ports allow connection to multiple Modbus RTU devices simultaneously.",
      "The robust design ensures reliable operation in harsh industrial environments, with a wide operating temperature range and multiple mounting options. Advanced security features, including VPN support and firewall, protect your data and devices from unauthorized access.",
    ],
    benefits: [
      {
        title: "Reliable Connectivity",
        description:
          "Industrial-grade hardware and cellular redundancy ensure continuous operation in demanding environments.",
      },
      {
        title: "Easy Integration",
        description:
          "Seamless integration with existing industrial devices and cloud platforms reduces implementation time.",
      },
      {
        title: "Remote Management",
        description: "Web-based configuration and remote firmware updates simplify maintenance and reduce site visits.",
      },
      {
        title: "Enhanced Security",
        description: "Built-in VPN, firewall, and encryption protect your data and devices from unauthorized access.",
      },
    ],
    specifications: {
      Communication: {
        Cellular: "4G LTE Cat 1",
        Ethernet: "1 x 10/100 Mbps",
        "Serial Ports": "2 x RS485",
        Protocols: "Modbus RTU/TCP, MQTT, HTTP, HTTPS",
      },
      Hardware: {
        Processor: "ARM Cortex-A7, 528 MHz",
        Memory: "256 MB RAM, 512 MB Flash",
        "Power Supply": "9-36 VDC",
        "Power Consumption": "< 5W typical",
      },
      Physical: {
        Dimensions: "120 x 85 x 35 mm",
        Weight: "350g",
        Mounting: "DIN rail or wall mount",
        "Operating Temperature": "-40°C to 85°C",
        "IP Rating": "IP30",
      },
      Software: {
        Configuration: "Web interface, CLI",
        Security: "Firewall, VPN, HTTPS",
        Management: "SNMP, Remote firmware update",
        Diagnostics: "System logs, Signal strength indicator",
      },
      /*applications: [
        {
          title: "Remote Equipment Monitoring",
          industry: "Manufacturing",
          description: "Enables real-time monitoring and control of manufacturing equipment in remote locations.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Smart Grid Monitoring",
          industry: "Energy",
          description: "Collects data from power distribution equipment for grid optimization and outage prevention.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Water Infrastructure Management",
          industry: "Utilities",
          description: "Monitors water pumps, flow meters, and quality sensors across distributed water networks.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],*/
      /*downloads: [
        {
          title: "X9000 Datasheet",
          description: "Detailed technical specifications and features",
          type: "Datasheet",
          version: "2.1",
          date: "2023-05-15",
          fileSize: "2.4 MB",
          url: "/downloads/datasheets/x9000.pdf",
        },
        {
          title: "X9000 User Manual",
          description: "Installation, configuration, and operation guide",
          type: "Manual",
          version: "1.3",
          date: "2023-06-10",
          fileSize: "4.8 MB",
          url: "/downloads/manuals/x9000.pdf",
        },
        {
          title: "X9000 Firmware",
          description: "Latest firmware with security updates and new features",
          type: "Firmware",
          version: "3.2.1",
          date: "2023-07-22",
          fileSize: "8.5 MB",
          url: "/downloads/firmware/x9000_v3.2.1.bin",
        },
        {
          title: "X9000 Quick Start Guide",
          description: "Step-by-step guide for initial setup",
          type: "Guide",
          version: "1.0",
          date: "2023-04-05",
          fileSize: "1.2 MB",
          url: "/downloads/guides/x9000_quickstart.pdf",
        },
      ],*/
    },
    applications: [
      {
        title: "Remote Equipment Monitoring",
        industry: "Manufacturing",
        description: "Enables real-time monitoring and control of manufacturing equipment in remote locations.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Smart Grid Monitoring",
        industry: "Energy",
        description: "Collects data from power distribution equipment for grid optimization and outage prevention.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Water Infrastructure Management",
        industry: "Utilities",
        description: "Monitors water pumps, flow meters, and quality sensors across distributed water networks.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    downloads: [
      {
        title: "X9000 Datasheet",
        description: "Detailed technical specifications and features",
        type: "Datasheet",
        version: "2.1",
        date: "2023-05-15",
        fileSize: "2.4 MB",
        url: "/downloads/datasheets/x9000.pdf",
      },
      {
        title: "X9000 User Manual",
        description: "Installation, configuration, and operation guide",
        type: "Manual",
        version: "1.3",
        date: "2023-06-10",
        fileSize: "4.8 MB",
        url: "/downloads/manuals/x9000.pdf",
      },
      {
        title: "X9000 Firmware",
        description: "Latest firmware with security updates and new features",
        type: "Firmware",
        version: "3.2.1",
        date: "2023-07-22",
        fileSize: "8.5 MB",
        url: "/downloads/firmware/x9000_v3.2.1.bin",
      },
      {
        title: "X9000 Quick Start Guide",
        description: "Step-by-step guide for initial setup",
        type: "Guide",
        version: "1.0",
        date: "2023-04-05",
        fileSize: "1.2 MB",
        url: "/downloads/guides/x9000_quickstart.pdf",
      },
    ],
  }

  // Related products
  const relatedProducts = [
    {
      id: "x7400d",
      name: "X7400D",
      description: "Industrial 4G Router with Dual SIM",
      specs: ["Dual SIM", "VPN Support", "Advanced Firewall", "Industrial Design"],
      image: "/placeholder.svg?height=300&width=300",
      category: "connectivity",
    },
    {
      id: "x7400",
      name: "X7400",
      description: "Compact 4G Router",
      specs: ["LTE Cat 4", "WiFi Hotspot", "Compact Design", "Easy Setup"],
      image: "/placeholder.svg?height=300&width=300",
      category: "connectivity",
    },
    {
      id: "x5050",
      name: "X5050",
      description: "RS485 to TCP/IP Modbus Server",
      specs: ["MQTT Support", "Web Configuration", "Multiple Hosts", "Industrial Grade"],
      image: "/products/gateways/x5050/main.png",
      category: "gateways",
    },
  ]

  return (
    <>
      <ProductStructuredData
        name="SenseLive X9000"
        description="Advanced 4G IoT Gateway with Edge Intelligence"
        image={mainImage}
        sku="X9000"
        brand="SenseLive"
        category="4G/5G Connectivity Solutions"
        url="https://senselive.io/products/connectivity/x9000"
      />
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
              <Link href="/products/connectivity" className="hover:text-foreground">
                4G/5G Connectivity
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">X9000</span>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <ProductImageGallery mainImage={mainImage} galleryImages={galleryImages} productName="SenseLive X9000" />

              <div className="space-y-6">
                <div>
                  <Badge className="mb-2">Featured</Badge>
                  <h1 className="text-3xl font-bold">SenseLive X9000</h1>
                  <p className="text-xl text-muted-foreground mt-2">Advanced 4G IoT Gateway with Edge Intelligence</p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        Built-in 4G LTE cellular connectivity for reliable remote communications
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        Multiple I/O channels including RS485, digital inputs, and analog inputs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        Edge computing capabilities for local data processing and decision-making
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        Industrial-grade design with wide operating temperature range (-40°C to 85°C)
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
                  <Link href="https://www.senselive.io/downloads/documents/x9000-datasheet.pdf" className="flex-1">
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

        {/* Rest of the page content remains the same */}
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

              {/* Tab content sections would go here - similar to the Edge8000 page */}
              <TabsContent value="overview" className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Product Overview</h2>
                    <div className="prose max-w-none text-muted-foreground">
                      <p className="mb-4">
                        The SenseLive X9000 is an advanced 4G IoT Gateway designed for industrial applications requiring
                        reliable connectivity and edge intelligence. With its robust design and comprehensive feature
                        set, it serves as a central communication hub for remote monitoring and control systems.
                      </p>
                      <p className="mb-4">
                        Featuring built-in 4G LTE connectivity, the X9000 ensures reliable data transmission even in
                        locations where wired networks are unavailable or impractical. Its multiple I/O channels,
                        including RS485, digital inputs, and analog inputs, allow for connection to a wide range of
                        industrial sensors and equipment.
                      </p>
                      <p className="mb-4">
                        The edge computing capabilities enable local data processing and decision-making, reducing cloud
                        dependency and enabling faster response times for critical applications. The industrial-grade
                        design ensures reliable operation in harsh environments, with a wide operating temperature range
                        and multiple mounting options.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg opacity-30"></div>
                      <Image
                        src="/products/connectivity/x9000/main.png"
                        alt="X9000 in use"
                        width={600}
                        height={400}
                        className="relative rounded-lg object-cover shadow-xl"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Why Choose SenseLive X9000</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 />
                          </div>
                          <div>
                            <h4 className="font-medium">Reliable Connectivity</h4>
                            <p className="text-sm text-muted-foreground">
                              Built-in 4G LTE ensures continuous data transmission even in remote locations.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Versatile Integration</h4>
                            <p className="text-sm text-muted-foreground">
                              Multiple I/O channels and protocol support enable seamless integration with existing
                              systems.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Edge Intelligence</h4>
                            <p className="text-sm text-muted-foreground">
                              Local data processing reduces latency and enables real-time decision making.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Industrial Durability</h4>
                            <p className="text-sm text-muted-foreground">
                              Robust design ensures reliable operation in harsh industrial environments.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="specifications" className="pt-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-border p-2 text-left">Parameter</th>
                          <th className="border border-border p-2 text-left">SenseLive X9000</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-2 font-medium">Cellular Connectivity</td>
                          <td className="border border-border p-2">4G LTE Cat 4</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Ethernet</td>
                          <td className="border border-border p-2">1 x 10/100 Mbps</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Serial Interfaces</td>
                          <td className="border border-border p-2">2 x RS485</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Digital I/O</td>
                          <td className="border border-border p-2">4 x Digital Inputs, 2 x Digital Outputs</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Analog Inputs</td>
                          <td className="border border-border p-2">4 x Analog Inputs (0-5V, 4-20mA)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Protocols</td>
                          <td className="border border-border p-2">Modbus RTU/TCP, MQTT, HTTP/HTTPS</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Power Supply</td>
                          <td className="border border-border p-2">9-36 VDC</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Operating Temperature</td>
                          <td className="border border-border p-2">-40°C to 85°C</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Dimensions</td>
                          <td className="border border-border p-2">120 x 85 x 35 mm</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Mounting</td>
                          <td className="border border-border p-2">DIN rail or wall mount</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Package Contents</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>1 × SenseLive X9000 Gateway</li>
                      <li>1 × 4G LTE Antenna</li>
                      <li>1 × Power Adapter</li>
                      <li>1 × Quick Start Guide</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="applications" className="pt-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Application Scenarios</h2>

                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Remote Monitoring"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Remote Monitoring</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Monitor remote equipment and infrastructure in real-time, with alerts for abnormal conditions.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
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
                          Connect and control industrial equipment with reliable communication and edge processing.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Smart Agriculture"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Smart Agriculture</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Monitor soil conditions, weather, and irrigation systems for optimized crop management.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Energy Management"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Energy Management</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Monitor and optimize energy consumption in buildings, factories, and remote facilities.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="downloads" className="pt-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Downloads</h2>

                  <div className="grid gap-4">
                    <Card className="border-muted">
                      <CardHeader className="p-4 pb-0">
                        <div className="flex justify-between items-start">
                          <div className="flex items-start gap-3">
                            <div className="mt-1">
                              <FileText className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-base">X9000 Datasheet</CardTitle>
                              <CardDescription className="text-sm mt-1">
                                Complete technical specifications and features
                              </CardDescription>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs font-normal">
                            Datasheet
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-3">
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2">
                          <span>Version: 1.2</span>
                          <span>Released: March 2025</span>
                          <span>Size: 2.4 MB</span>
                        </div>
                      </CardContent>
                      <CardContent className="p-4 pt-0">
                        <Link href="https://www.senselive.io/downloads/documents/x9000-datasheet.pdf">
                          <Button variant="outline" size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            Download
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <CardHeader className="p-4 pb-0">
                        <div className="flex justify-between items-start">
                          <div className="flex items-start gap-3">
                            <div className="mt-1">
                              <FileText className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-base">X9000 User Manual</CardTitle>
                              <CardDescription className="text-sm mt-1">
                                Installation, configuration, and operation guide
                              </CardDescription>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs font-normal">
                            Manual
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-3">
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2">
                          <span>Version: 1.0</span>
                          <span>Released: March 2025</span>
                          <span>Size: 4.8 MB</span>
                        </div>
                      </CardContent>
                      <CardContent className="p-4 pt-0">
                        <Link href="https://www.senselive.io/downloads/documents/x9000-manual.pdf">
                          <Button variant="outline" size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            Download
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <CardHeader className="p-4 pb-0">
                        <div className="flex justify-between items-start">
                          <div className="flex items-start gap-3">
                            <div className="mt-1">
                              <FileText className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-base">X9000 Quick Start Guide</CardTitle>
                              <CardDescription className="text-sm mt-1">
                                Step-by-step guide for initial setup
                              </CardDescription>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs font-normal">
                            Guide
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-3">
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2">
                          <span>Version: 1.0</span>
                          <span>Released: March 2025</span>
                          <span>Size: 1.2 MB</span>
                        </div>
                      </CardContent>
                      <CardContent className="p-4 pt-0">
                        <Link href="https://www.senselive.io/downloads/documents/x9000-quickstart.pdf">
                          <Button variant="outline" size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            Download
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
    </>
  )
}


import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Download, FileText, Share2, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductStructuredData } from "@/components/structured-data"
import { ProductCard } from "@/components/product-card"
import { ProductImageGallery } from "@/components/product-image-gallery"



const mainImage = "/products/fiber/x8555/x8555img1.png"
const galleryImages = [
  "/products/fiber/x8555/x8555img1.png",
  "/products/fiber/x8555/x8555img2.png",
  "/products/fiber/x8555/x8555img3.png",
  "/products/fiber/x8555/x8555img1.png"
]
export const metadata: Metadata = {
  title: "Fiber Optic Converter",
  description:
    "The SenseLive X8555 is a high-performance wired Optical fiber designed to modernize legacy RS485 devices by integrating them into modern Wi‑Fi networks.",
  keywords: [
    "Wireless Sensor",
    "Sensor",
    "Self-Powered Sensor",
    "Bus Bar Monitoring",
    "Electrical Equipment Monitoring",
    "Industrial IoT",
    "SenseCT-222",
  ],
}

export default function SenseCT222Page() {
  return (
    <>
      <ProductStructuredData
        name="X8555"
        description="Fiber Optic"
        image="/products/fiber/x8555/x8555img1.png"
        sku="X8555"
        brand="SenseLive"
        category="Optical Fiber"
        url="https://senselive.io/products/fiber/x8555"
      />
      <div className="flex flex-col">
        <section className="w-full py-8  lg: bg-muted/30">
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
              <Link href="/products/wireless-bus-bar" className="hover:text-foreground">
                Optical Fiber
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">X8555</span>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                          <ProductImageGallery
                            mainImage={mainImage}
                            galleryImages={galleryImages}
                            productName="SenseLive Edge8000"
                          />

              <div className="space-y-6">
                <div>
                  <Badge className="mb-2">Self-Powered</Badge>
                  <h1 className="text-3xl font-bold">X8555</h1>
                  <p className="text-xl text-muted-foreground mt-2">CT-Powered Wireless Temperature Sensor</p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        Zero-delay serial data transmission for high-speed, real-time communication
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                      Multi-interface conversion: RS232/485/422 to optical fiber (SC interface)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        Plug and play operation with full serial port parameter adaptation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                      Wide power supply range of 9–24V DC with robust, industrial-grade design
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                      Long distance optical transmission up to 20 km with single-mode fiber

                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                      Intuitive LED indicators for fiber link, data activity, and power status
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
                  <Link
                    href="https://www.senselive.io/downloads/documents/sensect-222-datasheet.pdf"
                    className="flex-1"
                  >
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
                      <p className="mb-4">
                      The SenseLive X8555 is an advanced optical fiber converter designed to bridge RS232/485/422 serial devices with optical fiber networks. Built for industrial environments, this product ensures plug and play operation with zero configuration required, automatically adapting to various serial port parameters. With its robust construction, wide input voltage range, and real-time data transmission technology, the X8555 delivers reliable, long-distance connectivity, making it an ideal solution for industrial automation, remote monitoring, and data communication in harsh conditions.   
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-md opacity-30"></div>
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="SenseCT-222 in use"
                        width={600}
                        height={400}
                        className="relative rounded-lg object-cover shadow-xl"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Why Choose X7050</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Zero-Delay Transmission</h4>
                            <p className="text-sm text-muted-foreground">
                            Ensures high-speed, real-time data communication without configuration hassles.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Industrial-Grade Reliability</h4>
                            <p className="text-sm text-muted-foreground">
                                Wide voltage input and extended operating temperature range for robust performance in harsh environments.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Plug and Play Installation</h4>
                            <p className="text-sm text-muted-foreground">
                            Optical fiber interface simplifies setup, reducing downtime and maintenance costs.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Seamless Integration</h4>
                            <p className="text-sm text-muted-foreground">
                            Effortlessly connects legacy serial systems to modern optical fiber networks, offering scalability and superior efficiency.
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
                  <h2 className="text-2xl font-bold mb-4">Communication Specifications</h2>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-border p-2 text-left">Parameter</th>
                          <th className="border border-border p-2 text-left">X8555 Specification/Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-2 font-medium">Interface Conversion</td>
                          <td className="border border-border p-2">RS232/485/422 to Optical Fiber (SC Connector) </td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Supported Baud Rate</td>
                          <td className="border border-border p-2">Up to 115200 bps </td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Serial Parameter</td>
                          <td className="border border-border p-2">Adaptive to various baud rates, data bits (5–9), parity (None, Odd, Even, Mark, Space) </td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Optical Fiber Type</td>
                          <td className="border border-border p-2">WEP64, WEP128, TKIP, AES, Automatic (TKIP/AES)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Operating Modes</td>
                          <td className="border border-border p-2">AP mode/ STA Mode, TCP Server/Client, UDP, Multiple IP connections</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Protocol Conversion</td>
                          <td className="border border-border p-2">Transparent serial pass-through, Modbus TCP⇆RTU, MQTT/JSON</td>
                        </tr>
                        
                      </tbody>
                    </table>

                    
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4 pt-10">Hardware Physical</h2>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-border p-2 text-left">Parameter</th>
                          <th className="border border-border p-2 text-left">X7050 Specification/Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-2 font-medium">RS485 Interface</td>
                          <td className="border border-border p-2">2.5mm terminal blocks (485A, 485B, GND)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Power Supply</td>
                          <td className="border border-border p-2">9-24V DC</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Current Consumption</td>
                          <td className="border border-border p-2">~30 mA at 12V (typical)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Operating Temperature</td>
                          <td className="border border-border p-2">-40℃ to 85℃</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Physical Dimension</td>
                          <td className="border border-border p-2">Approximately 37.6mm(L)x 83.6mm (W) x 89.2mm (H) (customized per design)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Mounting Options</td>
                          <td className="border border-border p-2">Rail-mount with integrated mounting accessories</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Indicator LEDs</td>
                          <td className="border border-border p-2">Dedicated LEDs  for Data Activity, TCP Connection, Wi-Fi, and Power</td>
                        </tr>
                        
                      </tbody>
                    </table>

                    
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="applications" className="pt-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Application Scenarios</h2>

                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/products/fiber/X8555/X8555img1.png"
                          alt="Bus Bar Monitoring"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Industrial Automation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Seamlessly integrate legacy RS485 devices into modern control systems and supervisory networks.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Power Cable Monitoring"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Smart Building and Home Automation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Enable remote monitoring and management of sensors, meters, and other RS485-based equipment via Wi‑Fi connectivity.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Circuit Breaker Monitoring"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Energy and Utility Management</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Connect intelligent meters and energy monitoring systems to a centralized network for real-time data acquisition and control. 
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Transformer Monitoring"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">IoT Cloud Integration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                        Use MQTT/JSON protocol support to bridge field devices with cloud platforms, enabling efficient remote diagnostics, firmware upgrade, and data analytics.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Motor Connection Monitoring"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Remote Monitoring and Management</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Ideal for scenarios where devices need remote configuration, network diagnostics, or integration into larger enterprise systems without the need for physical intervention.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Data Center Power Monitoring"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Data Center Power Monitoring</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Track temperatures in critical power distribution systems to ensure reliability and prevent
                          downtime in data centers.
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
                              <CardTitle className="text-base">SenseCT-222 Datasheet</CardTitle>
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
                          <span>Size: 2.3 MB</span>
                        </div>
                      </CardContent>
                      <CardContent className="p-4 pt-0">
                        <Link href="https://www.senselive.io/downloads/documents/sensect-222-datasheet.pdf">
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
                              <CardTitle className="text-base">SenseCT-222 User Manual</CardTitle>
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
                          <span>Size: 3.8 MB</span>
                        </div>
                      </CardContent>
                      <CardContent className="p-4 pt-0">
                        <Link href="https://www.senselive.io/downloads/documents/sensect-222-manual.pdf">
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
                              <CardTitle className="text-base">SenseCT-222 Quick Start Guide</CardTitle>
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
                          <span>Size: 1.4 MB</span>
                        </div>
                      </CardContent>
                      <CardContent className="p-4 pt-0">
                        <Link href="https://www.senselive.io/downloads/documents/sensect-222-quickstart.pdf">
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
                              <CardTitle className="text-base">Installation Guide for Electrical Panels</CardTitle>
                              <CardDescription className="text-sm mt-1">
                                Specialized guide for installing SenseCT-222 in electrical panels
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
                          <span>Size: 2.1 MB</span>
                        </div>
                      </CardContent>
                      <CardContent className="p-4 pt-0">
                        <Link href="https://www.senselive.io/downloads/documents/sensect-222-electrical-panel-installation.pdf">
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
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4 mb-8">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Related Products</h2>
              <p className="text-muted-foreground max-w-[800px]">
                Explore other products that work well with SenseCT-222 or serve similar purposes.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: "edge8000",
                  name: "SenseLive Edge8000",
                  description: "Wireless Bus Bar / Surface Temperature Monitoring System",
                  specs: [
                    "Up to 60 wireless sensors",
                    "Integrated Energy Meter",
                    "RS485 Data Output",
                    "Built-In Dual Relays",
                  ],
                  image: "/placeholder.svg?height=300&width=300",
                  category: "wireless-bus-bar",
                },
                {
                  id: "sensebt-222",
                  name: "SenseBT-222",
                  description: "Battery-Powered Wireless Temperature Sensor",
                  specs: ["Long Battery Life", "Wide Range", "Industrial Design", "Wireless Communication"],
                  image: "/placeholder.svg?height=300&width=300",
                  category: "wireless-bus-bar",
                },
              ].map((product) => (
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

        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-4">Need a Custom Solution?</h2>
            <p className="text-muted-foreground md:text-lg max-w-[800px] mx-auto mb-8">
              Contact our sales team to discuss your specific requirements and how SenseLive SenseCT-222 can help you
              implement a tailored wireless temperature monitoring solution.
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


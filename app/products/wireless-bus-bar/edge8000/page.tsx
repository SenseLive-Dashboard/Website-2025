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
import { RelatedProducts } from "@/components/related-products"
import { ProductCard } from "@/components/product-card"

// Update the mainImage and galleryImages in the product page
const mainImage = "/products/wireless-bus-bar/edge8000/front.png"
const galleryImages = [
  "/products/wireless-bus-bar/edge8000/front-right.png",
  "/products/wireless-bus-bar/edge8000/top-view.png",
  "/products/wireless-bus-bar/edge8000/complete-product.png",
]
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
    image: "/products/gateway/x5050/x5050img1.png",
    category: "gateways",
  },
]
export const metadata: Metadata = {
  title: "SenseLive Edge8000 – Wireless Bus Bar / Surface Temperature Monitoring System",
  description:
    "The SenseLive Edge8000 is a next-generation controller designed for wireless bus bar and surface temperature monitoring, featuring integrated energy metering, RS485 output, and dual relays for threshold-based alarms.",
  keywords: [
    "Wireless Bus Bar Monitoring",
    "Surface Temperature Monitoring",
    "Controllers",
    "Tags",
    "Energy Meter",
    "RS485",
    "Industrial Monitoring",
    "SenseLive Edge8000",
  ],
}

export default function Edge8000Page() {
  return (
    <>
      <ProductStructuredData
        name="SenseLive Edge8000"
        description="Wireless Bus Bar / Surface Temperature Monitoring System"
        image={mainImage}
        sku="EDGE8000"
        brand="SenseLive"
        category="Wireless Bus Bar Solutions"
        url="https://senselive.io/products/wireless-bus-bar/edge8000"
      />
      <div className="flex flex-col">
        <section className="w-full py-12 bg-muted/30">
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
                Wireless Bus Bar Solutions
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">SenseLive Edge8000</span>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <ProductImageGallery
                mainImage={mainImage}
                galleryImages={galleryImages}
                productName="SenseLive Edge8000"
              />

              <div className="space-y-6">
                <div>
                  <Badge className="mb-2">Premium</Badge>
                  <h1 className="text-3xl font-bold">SenseLive Edge8000</h1>
                  <p className="text-xl text-muted-foreground mt-2">
                    Wireless Bus Bar / Surface Temperature Monitoring System
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
                        Supports up to 60 wireless sensors for continuous temperature measurement
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        Integrated energy meter function for real-time power consumption monitoring
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        RS485 data output for easy integration with SCADA, EMS, or other systems
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        Built-in dual relays for threshold-based alarms and automated responses
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
                  <Link href="https://senselive.in/downloads/documents/datasheets/datasheet_senselive_edge8000.pdf" className="flex-1">
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
                        The SenseLive Edge8000 is a next-generation controller designed for wireless bus bar and surface
                        temperature monitoring, featuring integrated energy metering, RS485 output, and dual relays for
                        threshold-based alarms. Ideal for industrial, commercial, and utility applications, it supports
                        up to 60 sensors for real-time temperature data and energy insights.
                      </p>
                      <p className="mb-4">
                        With its advanced wireless technology, the SenseLive Edge8000 eliminates the need for complex
                        wiring, making installation simpler and more cost-effective. The system provides continuous
                        monitoring of critical temperature points, helping prevent equipment failures and optimize
                        performance.
                      </p>
                      <p className="mb-4">
                        The integrated energy meter function allows for simultaneous monitoring of power consumption,
                        voltage, current, and other key parameters, providing a comprehensive view of your electrical
                        system's health and efficiency.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    <div className="relative">
                      <div className="absolute -inset-1 from-primary to-primary/50 rounded-lg opacity-30"></div>
                      <Image
                        src="/products/wireless-bus-bar/edge8000/complete-product.png"
                        alt="SenseLive Edge8000 complete system"
                        width={500}
                        height={200}
                        className="relative rounded-lg object-cover shadow-xl"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Why Choose SenseLive Edge8000</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">All-in-One Monitoring</h4>
                            <p className="text-sm text-muted-foreground">
                              Consolidates temperature and energy data in a single platform.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Safety & Reliability</h4>
                            <p className="text-sm text-muted-foreground">
                              Dual relays enable automated alarms or tripping for immediate intervention.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Flexible Integration</h4>
                            <p className="text-sm text-muted-foreground">
                              RS485 output seamlessly links to SCADA, EMS, or cloud systems.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Long-Term Support</h4>
                            <p className="text-sm text-muted-foreground">
                              2-year warranty and dedicated customer service.
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
                          <th className="border border-border p-2 text-left">SenseLive Edge8000</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-2 font-medium">Power Supply</td>
                          <td className="border border-border p-2">AC85–265V / DC100–300V</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Wireless Frequency</td>
                          <td className="border border-border p-2">470 MHz / 433 MHz</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Max Sensors Supported</td>
                          <td className="border border-border p-2">60 (purchased separately)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Communication Distance</td>
                          <td className="border border-border p-2">Up to 100 m (Line of Sight)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Data Output</td>
                          <td className="border border-border p-2">RS485 (Temp & Energy Data)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Temp Monitoring Range</td>
                          <td className="border border-border p-2">-40°C to 125°C (Sensor Range)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Operating Temp</td>
                          <td className="border border-border p-2">-50°C to 85°C (Controller)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Relays</td>
                          <td className="border border-border p-2">2 Built-in (Threshold-Based)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Warranty</td>
                          <td className="border border-border p-2">2 Years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Package Contents</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>1 × SenseLive Edge8000 Controller</li>
                      <li>User Manual & Quick Start Guide</li>
                      <li>
                        Note: Sensors (tags) such as SenseCT-222 (CT-powered) or SenseBT-222 (battery-powered) are not
                        included and must be purchased separately.
                      </li>
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
                          alt="Bus Bar & Switchgear"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Bus Bar & Switchgear</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Prevent overheating and potential electrical failures by monitoring critical connection points
                          in real-time with the SenseLive Edge8000.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Surface Temperature Monitoring"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Surface Temperature Monitoring</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Track critical points in industrial machinery or infrastructure to ensure optimal operating
                          conditions with the SenseLive Edge8000.
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
                          Gain real-time insights into power usage for cost savings and efficiency improvements with the
                          SenseLive Edge8000.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Cold-Line Monitoring"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Cold-Line Monitoring</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Suitable for refrigeration or cold storage applications with monitoring down to -40°C using
                          the SenseLive Edge8000.
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
                              <CardTitle className="text-base">SenseLive Edge8000 Datasheet</CardTitle>
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
                        <Link href="https://www.senselive.io/downloads/documents/edge8000-datasheet.pdf">
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
                              <CardTitle className="text-base">SenseLive Edge8000 User Manual</CardTitle>
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
                        <Link href="https://www.senselive.io/downloads/documents/edge8000-manual.pdf">
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
                              <CardTitle className="text-base">SenseLive Edge8000 Quick Start Guide</CardTitle>
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
                        <Link href="https://www.senselive.io/downloads/documents/edge8000-quickstart.pdf">
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
                      Explore other products that work well with SenseLive E7000 or serve similar purposes.
                    </p>
                  </div>
        
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <ProductCard
                      id="e7500"
                      name="SenseLive E7500"
                      description="RS485-based Remote IO Controller"
                      specs={["4 Digital Inputs", "2 Analog Inputs", "4 Relay Outputs", "Modbus RTU Support"]}
                      image="/products/controllers/e7500/thumbnail.png"
                      category="controllers"
                    />
                    <ProductCard
                      id="x5050"
                      name="SenseLive X5050"
                      description="RS485 to TCP/IP Modbus Server"
                      specs={["Modbus TCP ↔ RTU", "MQTT Gateway", "DIN-Rail Mount", "-40°C to +85°C"]}
                      image="/products/gateway/X5050/X5050.png"
                      category="gateways"
                    />
                    <ProductCard
                      id="x9000"
                      name="SenseLive X9000"
                      description="4G IoT Gateway with Edge Intelligence"
                      specs={["4G CAT1 Connectivity", "Digital & Analog Inputs", "Dual RS485 Ports", "Edge Computing Features"]}
                      image="/products/connectivity/x9000/thumbnail.png"
                      category="connectivity"
                    />
                  </div>
                </div>
              </section>

        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-4">Need a Custom Solution?</h2>
            <p className="text-muted-foreground md:text-lg max-w-[800px] mx-auto mb-8">
              Contact our sales team to discuss your specific requirements and how the SenseLive Edge8000 can help you
              implement a tailored wireless monitoring solution.
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


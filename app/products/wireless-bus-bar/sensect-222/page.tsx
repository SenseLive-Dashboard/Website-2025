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



const mainImage = "/products/wireless-bus-bar/SenseCT222/SenseCT222img1.png"
const galleryImages = [
  "/products/wireless-bus-bar/SenseCT222/SenseCT222img1.png",
  "/products/wireless-bus-bar/SenseCT222/SenseCT222img2.png",
  "/products/wireless-bus-bar/SenseCT222/SenseCT222img3.png",
  // "/products/wireless-bus-bar/SenseCT222/SenseCT222img3.png"
]
export const metadata: Metadata = {
  title: "SenseCT-222 – CT-Powered Wireless Temperature Sensor",
  description:
    "The SenseCT-222 is a self-powered wireless temperature sensor that harvests energy from current transformers, providing maintenance-free monitoring for bus bars and electrical equipment.",
  keywords: [
    "Wireless Temperature Sensor",
    "CT-Powered Sensor",
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
        name="SenseCT-222"
        description="CT-Powered Wireless Temperature Sensor"
        image="/placeholder.svg?height=500&width=500"
        sku="SENSECT222"
        brand="SenseLive"
        category="Wireless Bus Bar Solutions"
        url="https://senselive.io/products/wireless-bus-bar/sensect-222"
      />
      <div className="flex flex-col">
        <section className="w-full py-8 bg-muted/30">
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
              <span className="text-foreground">SenseCT-222</span>
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
                  <h1 className="text-3xl font-bold">SenseCT-222</h1>
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
                        Self-powered design harvests energy from current transformers (CTs)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        Maintenance-free operation with no battery replacement required
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        Wide temperature measurement range from -40°C to +125°C
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        Wireless communication up to 100m (line of sight) with Edge8000 controller
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
                        The SenseCT-222 is a revolutionary self-powered wireless temperature sensor designed
                        specifically for monitoring bus bars and electrical equipment. Unlike traditional sensors that
                        require batteries or external power sources, the SenseCT-222 harvests energy from current
                        transformers (CTs), making it completely maintenance-free and ideal for long-term deployments in
                        critical electrical systems.
                      </p>
                      <p className="mb-4">
                        This innovative sensor begins operating when current flows through the monitored conductor,
                        harvesting energy from the magnetic field and storing it for continuous operation. The
                        SenseCT-222 provides accurate temperature measurements across a wide range and communicates
                        wirelessly with the SenseLive Edge8000 controller, which aggregates data from multiple sensors
                        and provides connectivity to SCADA systems, energy management platforms, or the cloud.
                      </p>
                      <p className="mb-4">
                        With its compact design and robust construction, the SenseCT-222 is easy to install on bus bars,
                        cables, and other current-carrying conductors. It provides real-time temperature monitoring
                        without the maintenance overhead of battery replacement, making it an ideal solution for
                        critical electrical infrastructure where reliability and minimal maintenance are essential.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-md opacity-30"></div>
                      <Image
                        src="/products/wireless-bus-bar/SenseCT222/SenseCT222img1.png"
                        alt="SenseCT-222 in use"
                        width={600}
                        height={400}
                        className="relative rounded-lg object-cover shadow-xl"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Why Choose SenseCT-222</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Maintenance-Free Operation</h4>
                            <p className="text-sm text-muted-foreground">
                              Self-powered design eliminates the need for battery replacement, reducing maintenance
                              costs and downtime.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Real-Time Monitoring</h4>
                            <p className="text-sm text-muted-foreground">
                              Provides continuous temperature data when current is flowing, enabling proactive
                              maintenance.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Easy Installation</h4>
                            <p className="text-sm text-muted-foreground">
                              Simple clamp-on design allows for quick installation without power interruption.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Reliable Performance</h4>
                            <p className="text-sm text-muted-foreground">
                              Operates whenever current is flowing, with energy storage for brief periods of low
                              current.
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
                          <th className="border border-border p-2 text-left">SenseCT-222</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-2 font-medium">Power Source</td>
                          <td className="border border-border p-2">Current Transformer (CT) Energy Harvesting</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Minimum Operating Current</td>
                          <td className="border border-border p-2">5A (for continuous operation)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Maximum Conductor Current</td>
                          <td className="border border-border p-2">600A</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Conductor Diameter</td>
                          <td className="border border-border p-2">Up to 30mm</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Wireless Frequency</td>
                          <td className="border border-border p-2">470 MHz / 433 MHz</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Communication Range</td>
                          <td className="border border-border p-2">Up to 100 m (Line of Sight)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Temperature Range</td>
                          <td className="border border-border p-2">-40°C to +125°C</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Temperature Accuracy</td>
                          <td className="border border-border p-2">±0.5°C (0°C to 70°C), ±1.0°C (full range)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Resolution</td>
                          <td className="border border-border p-2">0.1°C</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Reporting Interval</td>
                          <td className="border border-border p-2">
                            Adaptive (based on current flow and temperature changes)
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Energy Storage</td>
                          <td className="border border-border p-2">
                            Super capacitor (for operation during brief current interruptions)
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Dimensions</td>
                          <td className="border border-border p-2">45 × 35 × 20 mm</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Weight</td>
                          <td className="border border-border p-2">50g</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Ingress Protection</td>
                          <td className="border border-border p-2">IP65</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Mounting</td>
                          <td className="border border-border p-2">Clamp-on (for bus bars and cables)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Compatibility</td>
                          <td className="border border-border p-2">SenseLive Edge8000 Controller</td>
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
                      <li>1 × SenseCT-222 Wireless Temperature Sensor</li>
                      <li>1 × Installation Kit</li>
                      <li>1 × Quick Start Guide</li>
                    </ul>
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
                          src="/placeholder.svg?height=200&width=300"
                          alt="Bus Bar Monitoring"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Bus Bar Monitoring</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Monitor temperature of bus bars in switchgear and distribution panels to prevent overheating
                          and potential failures.
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
                        <CardTitle className="text-lg">Power Cable Monitoring</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Track temperatures of power cables to detect overloading, poor connections, or insulation
                          degradation before failures occur.
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
                        <CardTitle className="text-lg">Circuit Breaker Monitoring</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Monitor temperature of circuit breaker connections to identify potential issues before they
                          lead to failures or nuisance tripping.
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
                        <CardTitle className="text-lg">Transformer Monitoring</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Track temperatures of transformer connections and windings to detect potential issues and
                          prevent failures.
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
                        <CardTitle className="text-lg">Motor Connection Monitoring</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Monitor temperature of motor power connections to detect loose connections or overloading
                          conditions.
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
              Explore other products that work well with SenseLive E7000 or serve similar purposes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ProductCard
              id="sensebt-222"
              name="SenseLive SenseBT222"
              description="Battery-Powered Wireless Temperature Sensor"
              specs={["Long Battery Life", "Wide Range", "Industrial Design", "Wireless Communication"]}
              image="/products/wireless-bus-bar/SenseBT222/SenseBT222img1.png"
              category="wireless-bus-bar"
            />
            <ProductCard
              id="sensect-222"
              name="SenseLive SenseCT222"
              description="CT-Powered Wireless Temperature Sensor"
              specs={["Self Powered", "Real Time Monitoring", "Easy Installation", "Maintainance-Fee"]}
              image="/products/wireless-bus-bar/SenseCT222/SenseCT222img1.png"
              category="wireless-bus-bar"
            />
            <ProductCard
              id="edge8000"
              name="SenseLive Edge8000"
              description="Wireless Bus Bar / Surface Temperature Monitoring System"
              specs={["Up to 60 wireless sensors", "Integrated Energy Meter", "RS485 Data Output", "Built-in Dual Relays"]}
              image="/products/wireless-bus-bar/edge8000/thumbnail.png"
              category="wireless-bus-bar"
            />
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


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

const mainImage = "/products/wireless-bus-bar/SenseBT222/senseBT222img2.png"
const galleryImages = [
  "/products/wireless-bus-bar/SenseBT222/SenseBT222img1.png",
  "/products/wireless-bus-bar/SenseBT222/SenseBT222img1.png",
  "/products/wireless-bus-bar/SenseBT222/SenseBT222img2.png",
]




export const metadata: Metadata = {
  title: "SenseBT-222 – Battery-Powered Wireless Temperature Sensor",
  description:
    "The SenseBT-222 is a long-life battery-powered wireless temperature sensor designed for bus bar and surface temperature monitoring in industrial environments.",
  keywords: [
    "Wireless Temperature Sensor",
    "Battery-Powered Sensor",
    "Bus Bar Monitoring",
    "Surface Temperature Monitoring",
    "Industrial IoT",
    "SenseBT-222",
  ],
}

export default function SenseBT222Page() {
  return (
    <>
      <ProductStructuredData
        name="SenseBT-222"
        description="Battery-Powered Wireless Temperature Sensor"
        image="/products/wireless-bus-bar/SenseBT222/SenseBT222img2.png"
        sku="SENSEBT222"
        brand="SenseLive"
        category="Wireless Bus Bar Solutions"
        url="https://senselive.io/products/wireless-bus-bar/sensebt-222"
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
              <span className="text-foreground">SenseBT-222</span>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <ProductImageGallery
              mainImage={mainImage}
              galleryImages={galleryImages}
              productName="SenseLive Edge8000"
            />

              <div className="space-y-6">
                <div>
                  <Badge className="mb-2">Long Battery Life</Badge>
                  <h1 className="text-3xl font-bold">SenseBT-222</h1>
                  <p className="text-xl text-muted-foreground mt-2">Battery-Powered Wireless Temperature Sensor</p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        Up to 5-year battery life with standard lithium battery
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
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        Compact, rugged design with IP65 rating for harsh industrial environments
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
                    href="https://senselive.in/downloads/documents/datasheets/datasheet_senselive_sensebt222.pdf"
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
                        The SenseBT-222 is a battery-powered wireless temperature sensor designed for monitoring bus
                        bars, electrical connections, and surface temperatures in industrial environments. With its long
                        battery life and robust design, it provides a reliable and flexible solution for temperature
                        monitoring without the need for external power sources.
                      </p>
                      <p className="mb-4">
                        Featuring advanced power management technology, the SenseBT-222 can operate for up to 5 years on
                        a single lithium battery while providing accurate temperature measurements across a wide range.
                        The sensor communicates wirelessly with the SenseLive Edge8000 controller, which aggregates data
                        from multiple sensors and provides connectivity to SCADA systems, energy management platforms,
                        or the cloud.
                      </p>
                      <p className="mb-4">
                        The compact and rugged design, with an IP65 rating, ensures reliable operation in harsh
                        industrial environments, including electrical cabinets, manufacturing facilities, and outdoor
                        installations. The SenseBT-222 is easy to install and requires minimal maintenance, making it an
                        ideal solution for both new deployments and retrofitting existing equipment with temperature
                        monitoring capabilities.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-md opacity-30"></div>
                      <Image
                        src="/products/wireless-bus-bar/SenseBT222/SenseBT222img1.png"
                        alt="SenseBT-222 in use"
                        width={600}
                        height={400}
                        className="relative rounded-lg object-cover shadow-xl"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Why Choose SenseBT-222</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Long Battery Life</h4>
                            <p className="text-sm text-muted-foreground">
                              Up to 5 years of operation on a single battery, reducing maintenance costs and downtime.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Flexible Installation</h4>
                            <p className="text-sm text-muted-foreground">
                              No wiring required, allowing for easy installation in hard-to-reach locations.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">High Accuracy</h4>
                            <p className="text-sm text-muted-foreground">
                              ±0.5°C accuracy across the operating range ensures reliable temperature monitoring.
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
                              Works with Edge8000 controller for comprehensive monitoring and data management.
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
                          <th className="border border-border p-2 text-left">SenseBT-222</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-2 font-medium">Power Supply</td>
                          <td className="border border-border p-2">3.6V Lithium Battery (ER14505)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Battery Life</td>
                          <td className="border border-border p-2">Up to 5 years (15-minute reporting interval)</td>
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
                          <td className="border border-border p-2">Configurable (1 min to 24 hours)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Dimensions</td>
                          <td className="border border-border p-2">40 × 30 × 15 mm</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Weight</td>
                          <td className="border border-border p-2">35g (including battery)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Ingress Protection</td>
                          <td className="border border-border p-2">IP65</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Mounting</td>
                          <td className="border border-border p-2">Adhesive, Magnetic, or Screw Mount</td>
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
                      <li>1 × SenseBT-222 Wireless Temperature Sensor</li>
                      <li>1 × 3.6V Lithium Battery (ER14505)</li>
                      <li>1 × Mounting Kit (adhesive pad, magnetic mount)</li>
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
                          alt="Electrical Panel Monitoring"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Electrical Panel Monitoring</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Monitor temperature of bus bars, circuit breakers, and connections in electrical panels to
                          prevent overheating and potential failures.
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
                          Track surface temperatures of transformers to detect potential issues before they lead to
                          failures or reduced efficiency.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Motor and Pump Monitoring"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Motor and Pump Monitoring</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Monitor surface temperatures of motors and pumps to detect bearing issues, overloading, or
                          cooling problems before equipment failure.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="HVAC System Monitoring"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">HVAC System Monitoring</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Track temperatures in heating, ventilation, and air conditioning systems to ensure optimal
                          performance and energy efficiency.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Process Equipment Monitoring"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Process Equipment Monitoring</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Monitor surface temperatures of industrial process equipment to ensure optimal operation and
                          prevent overheating.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Cold Storage Monitoring"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Cold Storage Monitoring</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Track temperatures in refrigeration units and cold storage facilities to ensure proper
                          conditions and prevent product spoilage.
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
                              <CardTitle className="text-base">SenseBT-222 Datasheet</CardTitle>
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
                          <span>Size: 2.1 MB</span>
                        </div>
                      </CardContent>
                      <CardContent className="p-4 pt-0">
                        <Link href="https://www.senselive.io/downloads/documents/sensebt-222-datasheet.pdf">
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
                              <CardTitle className="text-base">SenseBT-222 User Manual</CardTitle>
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
                          <span>Size: 3.5 MB</span>
                        </div>
                      </CardContent>
                      <CardContent className="p-4 pt-0">
                        <Link href="https://www.senselive.io/downloads/documents/sensebt-222-manual.pdf">
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
                              <CardTitle className="text-base">SenseBT-222 Quick Start Guide</CardTitle>
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
                        <Link href="https://www.senselive.io/downloads/documents/sensebt-222-quickstart.pdf">
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
                              <CardTitle className="text-base">Battery Replacement Guide</CardTitle>
                              <CardDescription className="text-sm mt-1">
                                Instructions for replacing the battery in your SenseBT-222
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
                          <span>Size: 0.8 MB</span>
                        </div>
                      </CardContent>
                      <CardContent className="p-4 pt-0">
                        <Link href="https://www.senselive.io/downloads/documents/sensebt-222-battery-replacement.pdf">
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
              Contact our sales team to discuss your specific requirements and how SenseLive SenseBT-222 can help you
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


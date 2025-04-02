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

export const metadata: Metadata = {
  title: "SenseLive X7900 - Advanced LoRa Sensor Node",
  description:
    "Industrial-grade LoRa sensor node with multiple sensor inputs, long battery life, and robust connectivity for IoT applications.",
  keywords: ["LoRa Sensor", "Wireless Sensor", "IoT Sensor", "Industrial IoT", "SenseLive X7900"],
}

export default function X7900Page() {
  return (
    <>
      <ProductStructuredData
        name="SenseLive X7900"
        description="Advanced LoRa Sensor Node"
        image="/placeholder.svg?height=500&width=500"
        sku="X7900"
        brand="SenseLive"
        category="LoRa/ZigBee Devices"
        url="https://senselive.io/products/wireless/x7900"
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
              <Link href="/products/wireless" className="hover:text-foreground">
                LoRa/ZigBee Devices
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">X7900</span>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <ProductImageGallery
                mainImage="/placeholder.svg?height=500&width=500"
                galleryImages={[
                  "/placeholder.svg?height=500&width=500&text=View+2",
                  "/placeholder.svg?height=500&width=500&text=View+3",
                  "/placeholder.svg?height=500&width=500&text=View+4",
                ]}
                productName="SenseLive X7900"
              />

              <div className="space-y-6">
                <div>
                  <Badge className="mb-2">New</Badge>
                  <h1 className="text-3xl font-bold">SenseLive X7900</h1>
                  <p className="text-xl text-muted-foreground mt-2">Advanced LoRa Sensor Node</p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        LoRaWAN Class A/C device with long range connectivity
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        Multiple sensor inputs: temperature, humidity, pressure, and more
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        Up to 5 years battery life with standard configuration
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        IP67 rated enclosure for harsh environment deployment
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
                  <Link href="https://www.senselive.io/downloads/documents/x7900-datasheet.pdf" className="flex-1">
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
                        The SenseLive X7900 is an advanced LoRa sensor node designed for industrial IoT applications. It
                        combines long-range wireless connectivity with multiple sensor inputs and long battery life to
                        provide a comprehensive solution for remote monitoring.
                      </p>
                      <p className="mb-4">
                        With support for LoRaWAN Class A and C, the X7900 ensures reliable connectivity even in
                        challenging environments. The device features multiple sensor inputs for temperature, humidity,
                        pressure, and more, making it suitable for a wide range of monitoring applications.
                      </p>
                      <p className="mb-4">
                        The X7900's energy-efficient design enables up to 5 years of battery life with standard
                        configuration, reducing maintenance costs and ensuring continuous operation. The IP67-rated
                        enclosure protects the device from dust and water, making it suitable for deployment in harsh
                        environments.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-md opacity-30"></div>
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="X7900 in use"
                        width={600}
                        height={400}
                        className="relative rounded-lg object-cover shadow-xl"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Why Choose SenseLive X7900</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Long-Range Connectivity</h4>
                            <p className="text-sm text-muted-foreground">
                              LoRaWAN technology enables communication over several kilometers, even in urban
                              environments.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Extended Battery Life</h4>
                            <p className="text-sm text-muted-foreground">
                              Energy-efficient design with up to 5 years of battery life reduces maintenance costs.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Versatile Sensor Inputs</h4>
                            <p className="text-sm text-muted-foreground">
                              Support for multiple sensor types enables monitoring of various parameters with a single
                              device.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Robust Design</h4>
                            <p className="text-sm text-muted-foreground">
                              IP67-rated enclosure ensures reliable operation in harsh environments.
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
                          <th className="border border-border p-2 text-left">Feature Category</th>
                          <th className="border border-border p-2 text-left">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-2 font-medium">Device Type</td>
                          <td className="border border-border p-2">LoRa Sensor Node</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">LoRaWAN Specification</td>
                          <td className="border border-border p-2">Class A/C, 1.0.3</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Frequency Bands</td>
                          <td className="border border-border p-2">EU868, US915, AS923, AU915, KR920, IN865</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Transmit Power</td>
                          <td className="border border-border p-2">Up to +20 dBm</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Receiver Sensitivity</td>
                          <td className="border border-border p-2">-137 dBm</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Sensor Inputs</td>
                          <td className="border border-border p-2">
                            Temperature, Humidity, Pressure, Light, Accelerometer
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Temperature Range</td>
                          <td className="border border-border p-2">-40°C to +85°C</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Humidity Range</td>
                          <td className="border border-border p-2">0-100% RH</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Pressure Range</td>
                          <td className="border border-border p-2">300-1100 hPa</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Power Supply</td>
                          <td className="border border-border p-2">3.6V Lithium Battery (replaceable)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Battery Life</td>
                          <td className="border border-border p-2">Up to 5 years (depending on configuration)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Operating Temperature</td>
                          <td className="border border-border p-2">-40°C to +85°C</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">IP Rating</td>
                          <td className="border border-border p-2">IP67</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Dimensions</td>
                          <td className="border border-border p-2">120 x 80 x 40 mm</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Weight</td>
                          <td className="border border-border p-2">200g (including battery)</td>
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
                          src="/placeholder.svg?height=200&width=300"
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
                          Monitor temperature, humidity, and air quality in indoor and outdoor environments.
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
                          Monitor soil moisture, temperature, and environmental conditions for optimized crop
                          management.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Cold Chain Monitoring"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Cold Chain Monitoring</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Track temperature and humidity during transportation and storage of temperature-sensitive
                          goods.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Industrial Monitoring"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Industrial Monitoring</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Monitor equipment conditions and environmental parameters in industrial facilities.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Smart Buildings"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Smart Buildings</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Monitor indoor air quality, temperature, and occupancy for improved comfort and energy
                          efficiency.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Asset Tracking"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Asset Tracking</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Track the location and condition of valuable assets with long battery life and robust
                          connectivity.
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
                              <CardTitle className="text-base">X7900 Datasheet</CardTitle>
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
                          <span>Version: 1.0</span>
                          <span>Released: March 2025</span>
                          <span>Size: 2.8 MB</span>
                        </div>
                      </CardContent>
                      <CardContent className="p-4 pt-0">
                        <Link href="https://www.senselive.io/downloads/documents/x7900-datasheet.pdf">
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
                              <CardTitle className="text-base">X7900 User Manual</CardTitle>
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
                          <span>Size: 4.5 MB</span>
                        </div>
                      </CardContent>
                      <CardContent className="p-4 pt-0">
                        <Link href="https://www.senselive.io/downloads/documents/x7900-manual.pdf">
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
                              <CardTitle className="text-base">X7900 Configuration Tool</CardTitle>
                              <CardDescription className="text-sm mt-1">
                                Software for configuring and managing X7900 devices
                              </CardDescription>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs font-normal">
                            Software
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-3">
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2">
                          <span>Version: 1.0</span>
                          <span>Released: March 2025</span>
                          <span>Size: 15.2 MB</span>
                        </div>
                      </CardContent>
                      <CardContent className="p-4 pt-0">
                        <Link href="https://www.senselive.io/downloads/software/x7900-config-tool.zip">
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
              Contact our sales team to discuss your specific requirements and how SenseLive X7900 can help you
              implement a tailored IoT solution.
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


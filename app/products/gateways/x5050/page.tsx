import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Download, FileText, Share2, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductStructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "SenseLive X5050 – RS485 to TCP/IP Modbus Server",
  description:
    "The SenseLive X5050 is a DIN-rail mountable, industrial-grade RS485-to-Ethernet converter and Modbus gateway for seamless data communication and integration.",
  keywords: [
    "RS485 to TCP/IP",
    "Modbus TCP to RTU",
    "MQTT Gateway",
    "Industrial IoT",
    "Serial Device Server",
    "SenseLive X5050",
    "DIN-Rail Mount",
  ],
}

export default function X5050Page() {
  return (
    <>
      <ProductStructuredData
        name="SenseLive X5050"
        description="RS485 to TCP/IP Modbus Server"
        image="/placeholder.svg?height=500&width=500"
        sku="X5050"
        brand="SenseLive"
        category="Modbus Gateways"
        url="https://senselive.io/products/gateways/x5050"
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
              <Link href="/products/gateways" className="hover:text-foreground">
                Modbus Gateways
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">X5050</span>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="flex flex-col gap-6">
                <div className="bg-background rounded-lg p-8 border flex items-center justify-center">
                  <div className="relative w-full max-w-md aspect-square">
                    <Image
                      src="/placeholder.svg?height=500&width=500"
                      alt="SenseLive X5050"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((index) => (
                    <div
                      key={index}
                      className="bg-background rounded-lg p-2 border cursor-pointer hover:border-primary"
                    >
                      <div className="relative aspect-square">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt={`SenseLive X5050 view ${index}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Badge className="mb-2">Featured</Badge>
                  <h1 className="text-3xl font-bold">SenseLive X5050</h1>
                  <p className="text-xl text-muted-foreground mt-2">RS485 to TCP/IP Modbus Server</p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        Effortlessly convert serial (RS485) data to Ethernet (TCP/UDP) for remote monitoring
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        Built-in protocol conversion between Modbus TCP and Modbus RTU
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        Functions as an MQTT gateway for publishing data to cloud brokers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        DIN-rail mountable with wide operating temperature range (-40°C to +85°C)
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
                  <Link href="https://www.senselive.io/downloads/documents/x5050-datasheet.pdf" className="flex-1">
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
                        The SenseLive X5050 is a DIN-rail mountable, industrial-grade RS485-to-Ethernet converter and
                        Modbus gateway. It bridges serial devices (RS485) with TCP/IP networks, enabling seamless data
                        communication and integration with SCADA, IoT platforms, and cloud applications.
                      </p>
                      <p className="mb-4">
                        Featuring support for Modbus TCP ↔ RTU, MQTT gateway, JSON formatting, and advanced diagnostic
                        tools, SenseLive X5050 is the ideal solution for robust, real-time monitoring and control in
                        demanding industrial environments.
                      </p>
                      <p className="mb-4">
                        With its wide operating temperature range (-40°C to +85°C) and industrial design, the X5050 is
                        built to withstand harsh environments while providing reliable connectivity between legacy
                        serial devices and modern IP-based systems.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-md opacity-30"></div>
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="X5050 in use"
                        width={600}
                        height={400}
                        className="relative rounded-lg object-cover shadow-xl"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Why Choose SenseLive X5050</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">All-in-One Gateway</h4>
                            <p className="text-sm text-muted-foreground">
                              Combines serial server, Modbus gateway, MQTT/JSON functions in one compact unit.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Plug & Play</h4>
                            <p className="text-sm text-muted-foreground">
                              Easy to set up with user-friendly web UI and remote configuration tools.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">High Performance</h4>
                            <p className="text-sm text-muted-foreground">
                              Fast data throughput, multi-host capabilities, and advanced scheduling to prevent bus
                              collisions.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Rugged Reliability</h4>
                            <p className="text-sm text-muted-foreground">
                              Wide temperature range and surge protection ensure long-term, stable operation.
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
                          <th className="border border-border p-2 text-left">SenseLive X5050</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-2 font-medium">Model</td>
                          <td className="border border-border p-2">X5050 (DIN-rail type)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Serial Interface</td>
                          <td className="border border-border p-2">1× RS485 (Terminal Block)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Ethernet Interface</td>
                          <td className="border border-border p-2">1× RJ45, 10/100 Mbps, 2KV surge protection</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Supported Protocols</td>
                          <td className="border border-border p-2">
                            TCP, UDP, Modbus TCP ↔ RTU, MQTT, JSON, HTTPD Client
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Baud Rate (RS485)</td>
                          <td className="border border-border p-2">1200–115200 bps</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Data Bits</td>
                          <td className="border border-border p-2">5–9</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Stop Bits</td>
                          <td className="border border-border p-2">1, 2</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Parity</td>
                          <td className="border border-border p-2">None, Even, Odd, Mark, Space</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Flow Control</td>
                          <td className="border border-border p-2">None, CTS/RTS, XON/XOFF (software)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Power Supply</td>
                          <td className="border border-border p-2">
                            9–24 V DC, terminal block, reverse-polarity protection
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Power Consumption</td>
                          <td className="border border-border p-2">&lt;2W typical</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Operating Temperature</td>
                          <td className="border border-border p-2">-40°C to +85°C</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Storage Temperature</td>
                          <td className="border border-border p-2">-45°C to +165°C</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Humidity</td>
                          <td className="border border-border p-2">5–95% RH, non-condensing</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Installation</td>
                          <td className="border border-border p-2">35 mm DIN-rail</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-2 font-medium">Dimensions (L×W×H)</td>
                          <td className="border border-border p-2">Approx. 87 × 36 × 59 mm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Configuration Methods</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Web browser (HTTP)</li>
                      <li>ZLVircom software (search, configure, & upgrade)</li>
                      <li>Serial AT commands (advanced users)</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Package Contents</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>1 × SenseLive X5050 DIN-Rail Gateway</li>
                      <li>1 × Quick Start Guide</li>
                      <li>Note: Power adapter and additional cables are sold separately.</li>
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
                          alt="Industrial Automation & PLC"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Industrial Automation & PLC</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Connect PLCs with SCADA systems over Ethernet, enabling remote monitoring and control of
                          industrial processes.
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
                          Integrate energy meters (Modbus RTU) into cloud-based dashboards for real-time monitoring and
                          analysis of energy consumption.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Building Management Systems"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Building Management Systems</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Monitor HVAC, lighting, and access control systems remotely, improving building efficiency and
                          occupant comfort.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="IoT & Smart City"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">IoT & Smart City</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Publish sensor data to MQTT brokers for real-time analytics and control of smart city
                          infrastructure and services.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Utility Substations"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Utility Substations</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Manage power distribution equipment with high reliability and secure data transfer in critical
                          infrastructure environments.
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
                              <CardTitle className="text-base">X5050 Datasheet</CardTitle>
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
                          <span>Size: 2.8 MB</span>
                        </div>
                      </CardContent>
                      <CardContent className="p-4 pt-0">
                        <Link href="https://www.senselive.io/downloads/documents/x5050-datasheet.pdf">
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
                              <CardTitle className="text-base">X5050 User Manual</CardTitle>
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
                        <Link href="https://www.senselive.io/downloads/documents/x5050-manual.pdf">
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
                              <CardTitle className="text-base">ZLVircom Configuration Software</CardTitle>
                              <CardDescription className="text-sm mt-1">
                                Software for configuring and managing X5050 devices
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
                          <span>Version: 2.1</span>
                          <span>Released: February 2025</span>
                          <span>Size: 15.3 MB</span>
                        </div>
                      </CardContent>
                      <CardContent className="p-4 pt-0">
                        <Link href="https://www.senselive.io/downloads/software/zlvircom-setup.exe">
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
              Contact our sales team to discuss your specific requirements and how SenseLive X5050 can help you
              implement a tailored connectivity solution.
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


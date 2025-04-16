import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Download, FileText, Share2, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductCard } from "@/components/product-card"
import { ProductStructuredData } from "@/components/structured-data"
import { ProductImageGallery } from "@/components/product-image-gallery"

export const metadata: Metadata = {
  title: "SenseLive E7000 - Ethernet-based Remote IO Controller",
  description:
    "SenseLive E7000 is an intelligent remote IO controller designed for digital input/output and analog input across Ethernet networks.",
}

export default function E7000Page() {
  return (
    <div className="flex flex-col">
      <ProductStructuredData
        name="SenseLive E7000"
        description="Ethernet-based Remote IO Controller"
        image="/products/controllers/e7000/E7000.png"
        sku="E7000"
        brand="SenseLive"
        category="Remote IO Controllers"
        url="/products/controllers/e7000"
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
            <Link href="/products/controllers" className="hover:text-foreground">
              Remote IO Controllers
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">SenseLive E7000</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <ProductImageGallery
                mainImage="/products/controllers/e7000/main.png"
                galleryImages={[
                  "/products/controllers/e7000/front.png",
                  "/products/controllers/e7000/back.png",
                  "/products/controllers/e7000/port.png",
                ]}
                productName="SenseLive E7000 Remote I/O Controller"
              />
            </div>

            <div className="space-y-6">
              <div>
                <Badge className="mb-2">In Stock</Badge>
                <h1 className="text-3xl font-bold">SenseLive E7000</h1>
                <p className="text-xl text-muted-foreground mt-2">Ethernet-based Remote IO Controller</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">
                      4 Digital Inputs (passive switch or active power level)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">2 Analog Inputs (0-5V, 0-10V, 4-20mA, or 0-10kΩ)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">4 Relay Outputs (5A @ AC250V or DC30V)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Modbus TCP/RTU support with virtual COM port</span>
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
                <Link href="https://senselive.in/downloads/documents/datasheets/datasheet_senselive_e7000.pdf" className="flex-1">
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
                      SenseLive E7000 is an intelligent remote IO controller designed for digital input/output and
                      analog input across Ethernet networks. It enables convenient connections to TCP/IP systems,
                      supporting remote control and data acquisition in industrial, commercial, or utility environments.
                    </p>
                    <p className="mb-4">
                      With support for Modbus TCP to Modbus RTU, SenseLive E7000 provides 4 digital inputs, 2 analog
                      inputs, and 4 relay outputs. It's ideal for integrating with SCADA or other industrial software.
                    </p>
                    <p className="mb-4">
                      SenseLive E7000 can be configured and managed via Windows tools for easy parameter updates and
                      virtual COM port mapping. The device management library simplifies programming with standard
                      read/write functions in various languages.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-md opacity-30"></div>
                    <Image
                      src="/products/controllers/e7000/main.png"
                      alt="SenseLive E7000 Remote I/O Controller"
                      width={600}
                      height={400}
                      className="relative rounded-lg object-contain shadow-xl bg-white/90 p-4"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Why Choose SenseLive E7000</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Versatile I/O Options</h4>
                          <p className="text-sm text-muted-foreground">
                            Multiple digital and analog I/O channels for comprehensive control and monitoring.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Network Features</h4>
                          <p className="text-sm text-muted-foreground">
                            DHCP, DNS support, up to 100 TCP connections, 2KV ESD protection.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">High Reliability</h4>
                          <p className="text-sm text-muted-foreground">
                            Operates in wide temperature ranges and engineered for stable, long-term performance.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Active Reporting</h4>
                          <p className="text-sm text-muted-foreground">
                            Can actively push DI state changes and AI values to a host, eliminating the need for
                            constant polling.
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

                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-muted">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Physical Specifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Dimensions</dt>
                          <dd className="text-sm">~12.2 × 7.2 × 3.4 cm</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Power Consumption</dt>
                          <dd className="text-sm">&lt;1.8W</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Operating Temperature</dt>
                          <dd className="text-sm">-40°C to +85°C</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Storage Temperature</dt>
                          <dd className="text-sm">-45°C to +165°C</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Humidity</dt>
                          <dd className="text-sm">5–95% (non-condensing)</dd>
                        </div>
                      </dl>
                    </CardContent>
                  </Card>

                  <Card className="border-muted">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">I/O Specifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Digital Inputs</dt>
                          <dd className="text-sm">4 (passive switch or active power level)</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Digital Input Levels</dt>
                          <dd className="text-sm">Low: 0–3V, High: 8–24V (using 24V power)</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Analog Inputs</dt>
                          <dd className="text-sm">2 (0–5V, 0–10V, 4–20mA, or 0–10kΩ)</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Digital Outputs</dt>
                          <dd className="text-sm">4 relay outputs</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Relay Rating</dt>
                          <dd className="text-sm">5A @ AC250V or DC30V</dd>
                        </div>
                      </dl>
                    </CardContent>
                  </Card>

                  <Card className="border-muted">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Network Specifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Protocol Support</dt>
                          <dd className="text-sm">Modbus TCP/RTU</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Network Features</dt>
                          <dd className="text-sm">DHCP, DNS support</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">TCP Connections</dt>
                          <dd className="text-sm">Up to 100</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">ESD Protection</dt>
                          <dd className="text-sm">2KV</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Virtual COM</dt>
                          <dd className="text-sm">Supported</dd>
                        </div>
                      </dl>
                    </CardContent>
                  </Card>

                  <Card className="border-muted">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Software & Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Configuration</dt>
                          <dd className="text-sm">Windows tools</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Device Management</dt>
                          <dd className="text-sm">Library for various languages</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Active Reporting</dt>
                          <dd className="text-sm">DI state changes, AI values</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Pairing</dt>
                          <dd className="text-sm">Two devices can exchange DI/DO states</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Warranty</dt>
                          <dd className="text-sm">1–2 years (model-dependent)</dd>
                        </div>
                      </dl>
                    </CardContent>
                  </Card>
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
                        src="/products/controllers/e7000/main.png"
                        alt="Building Automation with SenseLive E7000"
                        fill
                        className="object-contain rounded-t-lg p-4 bg-white/90"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Building Automation</CardTitle>
                      <CardDescription>Smart Buildings</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Monitor and control HVAC systems, lighting, and security systems in commercial buildings for
                        improved energy efficiency and comfort.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-muted">
                    <div className="relative aspect-video">
                      <Image
                        src="/products/controllers/e7000/front.png"
                        alt="Industrial Process Control with SenseLive E7000"
                        fill
                        className="object-contain rounded-t-lg p-4 bg-white/90"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Industrial Process Control</CardTitle>
                      <CardDescription>Manufacturing</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Integrate with SCADA systems to monitor and control industrial processes, ensuring optimal
                        operation and early detection of issues.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-muted">
                    <div className="relative aspect-video">
                      <Image
                        src="/products/controllers/e7000/back.png"
                        alt="Utility Monitoring with SenseLive E7000"
                        fill
                        className="object-contain rounded-t-lg p-4 bg-white/90"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Utility Monitoring</CardTitle>
                      <CardDescription>Energy & Water</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Monitor power consumption, water flow, and other utility metrics in remote locations, with
                        real-time alerts for abnormal conditions.
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
                            <CardTitle className="text-base">SenseLive E7000 Datasheet</CardTitle>
                            <CardDescription className="text-sm mt-1">
                              Detailed technical specifications and features
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
                        <span>Version: 2.1</span>
                        <span>Released: 2023-05-15</span>
                        <span>Size: 2.4 MB</span>
                      </div>
                    </CardContent>
                    <CardContent className="p-4 pt-0">
                      <Link href="https://senselive.in/downloads/documents/datasheets/datasheet_senselive_e7000.pdf">
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
                            <CardTitle className="text-base">SenseLive E7000 User Manual</CardTitle>
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
                        <span>Version: 1.3</span>
                        <span>Released: 2023-06-10</span>
                        <span>Size: 4.8 MB</span>
                      </div>
                    </CardContent>
                    <CardContent className="p-4 pt-0">
                      <Link href="/downloads/documents/E7000-manual.pdf">
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
                            <CardTitle className="text-base">SenseLive E7000 Firmware</CardTitle>
                            <CardDescription className="text-sm mt-1">
                              Latest firmware with security updates and new features
                            </CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs font-normal">
                          Firmware
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-3">
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2">
                        <span>Version: 3.2.1</span>
                        <span>Released: 2023-07-22</span>
                        <span>Size: 8.5 MB</span>
                      </div>
                    </CardContent>
                    <CardContent className="p-4 pt-0">
                      <Link href="/downloads/firmware/E7000_v3.2.1.bin">
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
              image="/products/gateways/x5050/thumbnail.png"
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

      
    </div>
  )
}


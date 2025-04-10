import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Download, FileText, Share2, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductCard } from "@/components/product-card"
import { ProductImageGallery } from "@/components/product-image-gallery"
import { getProductImagePath, getProductGalleryImages, getProductAltText } from "@/lib/product-image-service"

export const metadata: Metadata = {
  title: "SenseLive SL6002A - Remote I/O Controller",
  description:
    "SenseLive SL6002A - Industrial-grade Remote I/O Controller with Modbus RTU support, 4 Digital Inputs, 2 Analog Inputs, and 4 Relay Outputs.",
}

export default function ProductPage() {
  const productId = "sl6002a"
  const categoryId = "controllers"

  // Get product images
  const mainImage = getProductImagePath(productId, "main")
  const galleryImages = getProductGalleryImages(productId)

  return (
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
            <Link href={`/products/${categoryId}`} className="hover:text-foreground">
              Remote IO Controllers
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">SL6002A</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <ProductImageGallery
              mainImage={mainImage}
              galleryImages={galleryImages}
              productName={getProductAltText(productId)}
            />

            <div className="space-y-6">
              <div>
                <Badge className="mb-2">In Stock</Badge>
                <h1 className="text-3xl font-bold">SenseLive SL6002A</h1>
                <p className="text-xl text-muted-foreground mt-2">RS485-based Remote I/O Controller</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">4 Digital Inputs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">2 Analog Inputs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">4 Relay Outputs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Modbus RTU Support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Industrial-grade Design</span>
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
                <Link href="/downloads/datasheets/sl6002a.pdf" className="flex-1">
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
                      The SenseLive SL6002A is an industrial-grade Remote I/O Controller designed for reliable data
                      acquisition and control in demanding environments. It seamlessly connects to Modbus RTU networks,
                      enabling remote monitoring and control of industrial equipment.
                    </p>
                    <p className="mb-4">
                      With 4 digital inputs, 2 analog inputs, and 4 relay outputs, the SL6002A provides versatile I/O
                      capabilities for a wide range of industrial applications. The robust design ensures reliable
                      operation in harsh industrial environments, with a wide operating temperature range and multiple
                      mounting options.
                    </p>
                    <p className="mb-4">
                      The SL6002A is ideal for industrial automation, energy management, and remote monitoring
                      applications where reliable data acquisition and control are essential.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-md opacity-30"></div>
                    <Image
                      src={getProductImagePath(productId, "angle") || "/placeholder.svg"}
                      alt={getProductAltText(productId, "angle")}
                      width={600}
                      height={400}
                      className="relative rounded-lg object-cover shadow-xl"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Why Choose SL6002A</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Reliable Operation</h4>
                          <p className="text-sm text-muted-foreground">
                            Industrial-grade hardware ensures continuous operation in demanding environments.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Easy Integration</h4>
                          <p className="text-sm text-muted-foreground">
                            Seamless integration with existing Modbus systems reduces implementation time.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Versatile I/O</h4>
                          <p className="text-sm text-muted-foreground">
                            Multiple digital inputs, analog inputs, and relay outputs provide flexibility for various
                            applications.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Cost-Effective</h4>
                          <p className="text-sm text-muted-foreground">
                            Provides excellent value with high reliability and performance at a competitive price point.
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
                      <CardTitle className="text-lg">Communication</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Protocol</dt>
                          <dd className="text-sm">Modbus RTU</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Interface</dt>
                          <dd className="text-sm">RS485</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Baud Rate</dt>
                          <dd className="text-sm">1200 to 115200 bps</dd>
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
                          <dt className="text-sm font-medium text-muted-foreground">Digital Inputs</dt>
                          <dd className="text-sm">4 channels</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Analog Inputs</dt>
                          <dd className="text-sm">2 channels</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Relay Outputs</dt>
                          <dd className="text-sm">4 channels</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Power Supply</dt>
                          <dd className="text-sm">24V DC</dd>
                        </div>
                      </dl>
                    </CardContent>
                  </Card>

                  <Card className="border-muted">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Physical</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Dimensions</dt>
                          <dd className="text-sm">100 x 70 x 35 mm</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Weight</dt>
                          <dd className="text-sm">150g</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Mounting</dt>
                          <dd className="text-sm">DIN rail or wall mount</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Operating Temperature</dt>
                          <dd className="text-sm">-40°C to 85°C</dd>
                        </div>
                      </dl>
                    </CardContent>
                  </Card>

                  <Card className="border-muted">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">LED Indicators</dt>
                          <dd className="text-sm">Power, Communication, I/O Status</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Protection</dt>
                          <dd className="text-sm">Surge, Reverse Polarity</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Certification</dt>
                          <dd className="text-sm">CE, FCC, RoHS</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                          <dt className="text-sm font-medium text-muted-foreground">Warranty</dt>
                          <dd className="text-sm">2 years</dd>
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
                        src="/placeholder.svg?height=200&width=300&text=Industrial+Automation"
                        alt="Industrial Automation"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Industrial Automation</CardTitle>
                      <CardDescription>Manufacturing</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Monitor and control industrial equipment in manufacturing facilities, with real-time data
                        collection and process automation.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-muted">
                    <div className="relative aspect-video">
                      <Image
                        src="/placeholder.svg?height=200&width=300&text=Building+Management"
                        alt="Building Management"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Building Management</CardTitle>
                      <CardDescription>Commercial Buildings</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Monitor and control HVAC, lighting, and other building systems for improved energy efficiency
                        and comfort.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-muted">
                    <div className="relative aspect-video">
                      <Image
                        src="/placeholder.svg?height=200&width=300&text=Energy+Monitoring"
                        alt="Energy Monitoring"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Energy Monitoring</CardTitle>
                      <CardDescription>Utilities</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Collect energy consumption data from meters and analyzers for optimization and cost reduction in
                        utility applications.
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
                            <CardTitle className="text-base">SL6002A Datasheet</CardTitle>
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
                      <Link href="/downloads/datasheets/sl6002a.pdf">
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
                            <CardTitle className="text-base">SL6002A User Manual</CardTitle>
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
                      <Link href="/downloads/manuals/sl6002a.pdf">
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
                            <CardTitle className="text-base">SL6002A Quick Start Guide</CardTitle>
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
                        <span>Released: 2023-04-05</span>
                        <span>Size: 1.2 MB</span>
                      </div>
                    </CardContent>
                    <CardContent className="p-4 pt-0">
                      <Link href="/downloads/guides/sl6002a_quickstart.pdf">
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
              Explore other products that work well with SL6002A or serve similar purposes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ProductCard
              id="e7500"
              name="SenseLive E7500"
              description="RS485-based Remote IO Controller"
              specs={["4 Digital Inputs", "2 Analog Inputs", "4 Relay Outputs", "Modbus RTU Support"]}
              image={getProductImagePath("e7500", "thumbnail")}
              category="controllers"
            />
            <ProductCard
              id="x5050"
              name="X5050"
              description="RS485 to TCP/IP Modbus Server"
              specs={["MQTT Support", "Web Configuration", "Multiple Hosts", "Industrial Grade"]}
              image={getProductImagePath("x5050", "thumbnail")}
              category="gateways"
            />
            <ProductCard
              id="x7700"
              name="SenseLive X7700"
              description="DIN-Rail LoRa Device"
              specs={[
                "DIN-Rail Mounting",
                "RS485 & Modbus RTU support",
                "Long-Range LoRa Transmission",
                "Secure Communication",
              ]}
              image={getProductImagePath("x7700", "thumbnail")}
              category="wireless"
            />
          </div>
        </div>
      </section>
    </div>
  )
}


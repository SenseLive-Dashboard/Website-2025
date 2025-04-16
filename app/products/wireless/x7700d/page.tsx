import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Download, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductStructuredData } from "@/components/structured-data"
import { ProductImageGallery } from "@/components/product-image-gallery"
import { RelatedProducts } from "@/components/related-products"

export const metadata: Metadata = {
  title: "SenseLive X7700D - DIN-Rail LoRa Device",
  description:
    "High-performance LoRa-based DIN-rail device designed for industrial environments requiring long-range, low-power wireless communication.",
}

const relatedProducts = [
  {
    id: "x7800",
    name: "SenseLive X7800",
    description: "Wall-Mounted LoRa Device with RS232 Features",
    specs: ["Wall Mounted & Compact Design", "Dual RS323 & RS485 Support", "LoRaWAN & private LoRa Protocol", "Low Power Consumption"],
    image: "/products/wireless/X7800/x7800.png",
    category: "wireless",
  },
  {
    id: "x7900",
    name: "SenseLive X7900",
    description: "LoRa Gateway with TCP Output",
    specs: ["LoRaWAN & private LoRa Protocol", "TCP/IP Gateway Functionality", "Multiple Network Interface", "Web Based Management Console"],
    image: "/products/wireless/x7900/main.png",
    category: "wireless",
  },
]

export default function ProductPage() {
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
            <Link href="/products/wireless" className="hover:text-foreground">
              LoRa/ZigBee Devices
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">SenseLive X7700D</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col space-y-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">SenseLive X7700D</h1>
                <p className="mt-4 text-xl text-muted-foreground">DIN-Rail LoRa Device</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary">
                  LoRaWAN
                </Badge>
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary">
                  DIN-Rail
                </Badge>
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary">
                  Modbus RTU
                </Badge>
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary">
                  Industrial IoT
                </Badge>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Short Description</h2>
                <p className="text-muted-foreground">
                  SenseLive X7700D is a high-performance LoRa-based DIN-rail device designed for industrial environments
                  requiring long-range, low-power wireless communication. It supports RS485/Modbus RTU, allowing
                  seamless integration with SCADA, BMS, and remote monitoring applications.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>DIN-Rail Mounting for industrial installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>RS485 & Modbus RTU support for wired connectivity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Long-Range LoRa Transmission for up to 15 km (line of sight)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Secure & Encrypted Communication ensuring data integrity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Cloud Integration & Remote Management capabilities</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://senselive.in/downloads/documents/datasheets/datasheet_senselive_x7700d.pdf">
                  <Button className="w-full sm:w-auto gap-2">
                    <FileText className="h-4 w-4" />
                    Download Datasheet
                  </Button>
                </Link>
                <Link href="https://www.senselive.io/downloads/documents/X7700D-manual.pdf">
                  <Button variant="outline" className="w-full sm:w-auto gap-2">
                    <Download className="h-4 w-4" />
                    User Manual
                  </Button>
                </Link>
              </div>
            </div>

            <ProductImageGallery
              mainImage="/products/wireless/X7700D/X7700Dimg1.png"
              galleryImages={[
                "/products/wireless/X7700D/X7700Dimg1.png",
                "/products/wireless/X7700D/X7700Dimg2.png",
                "/products/wireless/X7700D/X7700Dimg2.png",
              ]}
              productName="SenseLive X7700D"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specs">Technical Specs</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-4">Key Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">DIN-Rail Mounting</h3>
                    <p className="text-muted-foreground">Easy installation in industrial control cabinets and panels</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">RS485 & Modbus RTU Support</h3>
                    <p className="text-muted-foreground">
                      Seamless integration with existing industrial equipment and SCADA systems
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Long-Range LoRa Transmission</h3>
                    <p className="text-muted-foreground">
                      Up to 15 km line-of-sight range for remote monitoring applications
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Secure & Encrypted Communication</h3>
                    <p className="text-muted-foreground">AES-128 encryption ensures data integrity and security</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Cloud Integration</h3>
                    <p className="text-muted-foreground">
                      Ready for integration with SenseLive Cloud and third-party platforms
                    </p>
                  </div>
                </li>
              </ul>
            </TabsContent>

            <TabsContent value="specs">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-4">Technical Specifications</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 pr-4 font-medium">Wireless Protocol</td>
                      <td className="py-4">LoRaWAN, Private LoRa</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 pr-4 font-medium">Frequency Band</td>
                      <td className="py-4">433/470/868/915 MHz</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 pr-4 font-medium">Max Transmission Power</td>
                      <td className="py-4">27 dBm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 pr-4 font-medium">Communication Distance</td>
                      <td className="py-4">Up to 15 km (Line of Sight)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 pr-4 font-medium">Data Interface</td>
                      <td className="py-4">RS485 (Modbus RTU)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 pr-4 font-medium">Baud Rate</td>
                      <td className="py-4">1200-115200 bps</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 pr-4 font-medium">Power Supply</td>
                      <td className="py-4">9-24V DC</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 pr-4 font-medium">Operating Temperature</td>
                      <td className="py-4">-40°C to +85°C</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 pr-4 font-medium">Installation</td>
                      <td className="py-4">DIN-Rail Mount</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="applications">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-4">Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Industrial Monitoring & Automation</h3>
                    <p className="text-muted-foreground">
                      Monitor and control industrial equipment and processes with reliable, long-range wireless
                      communication.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Smart Grid & Power Distribution</h3>
                    <p className="text-muted-foreground">
                      Enable remote monitoring and control of power distribution systems for improved efficiency and
                      reliability.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Environmental Sensing & Data Logging</h3>
                    <p className="text-muted-foreground">
                      Collect and transmit environmental data from remote locations for analysis and decision-making.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="documents">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-4">Documents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Product Datasheet</h3>
                      <p className="text-muted-foreground mb-4">
                        Complete technical specifications and product details
                      </p>
                      <Link href="https://www.senselive.io/downloads/documents/X7700D-datasheet.pdf">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Download PDF
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">User Manual</h3>
                      <p className="text-muted-foreground mb-4">Installation, configuration, and operation guide</p>
                      <Link href="https://www.senselive.io/downloads/documents/X7700D-manual.pdf">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Download PDF
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Configuration Tool</h3>
                      <p className="text-muted-foreground mb-4">Software for device configuration and management</p>
                      <Link href="https://www.senselive.io/downloads/software/X7700D-config-tool.zip">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Download ZIP
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Firmware Update</h3>
                      <p className="text-muted-foreground mb-4">
                        Latest firmware version with bug fixes and improvements
                      </p>
                      <Link href="https://www.senselive.io/downloads/firmware/X7700D-firmware-v1.2.bin">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Download Firmware
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-8">Applications</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Industrial Monitoring & Automation</h3>
                <p className="text-muted-foreground">
                  Monitor and control industrial equipment and processes with reliable, long-range wireless
                  communication.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Smart Grid & Power Distribution</h3>
                <p className="text-muted-foreground">
                  Enable remote monitoring and control of power distribution systems for improved efficiency and
                  reliability.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Environmental Sensing & Data Logging</h3>
                <p className="text-muted-foreground">
                  Collect and transmit environmental data from remote locations for analysis and decision-making.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Need More Information?</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Contact our team of experts to learn more about the SenseLive X7700D and how it can benefit your
              application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/inquiry">
                <Button>Request a Quote</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Contact Sales</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/30">
              <div className="container px-4 md:px-6">
                <RelatedProducts products={relatedProducts} title="Related Products" />
              </div>
            </section>
      <ProductStructuredData
        name="SenseLive X7700D"
        description="High-performance LoRa-based DIN-rail device designed for industrial environments requiring long-range, low-power wireless communication."
        image="/placeholder.svg?height=400&width=400"
        sku="X7700D"
        brand="SenseLive"
        category="LoRa/ZigBee Devices"
        url="https://www.senselive.io/products/wireless/x7700"
      />
    </div>
  )
}


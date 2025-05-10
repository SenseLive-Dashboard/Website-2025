import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Download, FileText, Share2, ShoppingCart, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductCard } from "@/components/product-card"
import { ProductStructuredData } from "@/components/structured-data"
import { ProductImageGallery } from "@/components/product-image-gallery"

export const metadata: Metadata = {
  title: "SenseLive E7500 - RS485-based Remote IO Controller",
  description:
    "SenseLive E7500 is an intelligent remote IO controller designed for digital input/output and analog input across RS485 networks.",
  openGraph: {
    title: "SenseLive E7500 - RS485-based Remote IO Controller",
    description:
      "Industrial-grade remote IO controller with Modbus RTU support for automation and monitoring applications.",
    images: [
      {
        url: "/products/controllers/e7500/main.png",
        width: 1200,
        height: 630,
        alt: "SenseLive E7500 Remote IO Controller",
      },
    ],
  },
}

export default function E7500Page() {
  // Product images
  const mainImage = "/products/controllers/e7500/main.png"
  const galleryImages = [
    "/products/controllers/e7500/front.png",
    "/products/controllers/e7500/top.png",
    "/products/controllers/e7500/back.png",
  ]

  // Product specifications
  const physicalSpecs = [
    { name: "Dimensions", value: "12.2 × 7.2 × 3.4 cm" },
    { name: "Power Supply", value: "DC 12-24V" },
    { name: "Power Consumption", value: "<1.7W" },
    { name: "Operating Temperature", value: "-40°C to +85°C" },
    { name: "Storage Temperature", value: "-45°C to +165°C" },
    { name: "Humidity", value: "5–95% (non-condensing)" },
    { name: "Mounting", value: "DIN-Rail" },
    { name: "Weight", value: "~150g" },
  ]

  const ioSpecs = [
    { name: "Digital Inputs", value: "4 (passive switch or active power level)" },
    { name: "Digital Input Levels", value: "Low: 0–3V, High: 8–24V (using 24V power)" },
    { name: "Analog Inputs", value: "2 (0–5V, 0–10V, 4–20mA, or 0–10kΩ)" },
    { name: "Digital Outputs", value: "4 relay outputs" },
    { name: "Relay Rating", value: "5A @ AC250V or DC30V" },
    { name: "Isolation", value: "1500V between I/O and power" },
  ]

  const commSpecs = [
    { name: "Protocol Support", value: "Modbus RTU" },
    { name: "Baud Rates", value: "1200–115200 bps" },
    { name: "Data Format", value: "8 data bits, no parity, 1 stop bit" },
    { name: "RS485 Interface", value: "A/B lines with termination" },
    { name: "Address Range", value: "1-247" },
    { name: "Response Time", value: "<10ms" },
  ]

  const softwareSpecs = [
    { name: "Configuration", value: "Windows tools" },
    { name: "Device Management", value: "Library for various languages" },
    { name: "Active Reporting", value: "DI state changes, AI values" },
    { name: "Pairing", value: "Two devices can exchange DI/DO states" },
    { name: "Firmware Updates", value: "Via configuration tool" },
    { name: "Warranty", value: "2 years standard" },
  ]

  // Key features with detailed descriptions
  const keyFeatures = [
    {
      title: "Versatile I/O Options",
      description:
        "Multiple digital and analog I/O channels for comprehensive control and monitoring in industrial environments.",
    },
    {
      title: "RS485 Communication",
      description: "Reliable RS485 communication with Modbus RTU protocol and baud rates from 1200 to 115200 bps.",
    },
    {
      title: "High Reliability",
      description:
        "Industrial-grade design that operates in wide temperature ranges (-40°C to +85°C) for stable, long-term performance.",
    },
    {
      title: "Active Reporting",
      description:
        "Can actively push DI state changes and AI values to a host, eliminating the need for constant polling.",
    },
    {
      title: "Easy Integration",
      description: "Compatible with SCADA systems and industrial software through standard Modbus RTU protocol.",
    },
  ]

  // Application scenarios with images
  const applications = [
    {
      title: "Building Automation",
      subtitle: "Smart Buildings",
      description:
        "Monitor and control HVAC systems, lighting, and security systems in commercial buildings for improved energy efficiency and comfort.",
      image: "/products/controllers/e7000/application1.png",
    },
    {
      title: "Industrial Process Control",
      subtitle: "Manufacturing",
      description:
        "Integrate with SCADA systems to monitor and control industrial processes, ensuring optimal operation and early detection of issues.",
      image: "/products/controllers/e7000/application2.png",
    },
    {
      title: "Utility Monitoring",
      subtitle: "Energy & Water",
      description:
        "Monitor power consumption, water flow, and other utility metrics in remote locations, with real-time alerts for abnormal conditions.",
      image: "/products/controllers/e7000/application3.png",
    },
  ]

  // Downloads with metadata
  const downloads = [
    {
      title: "SenseLive E7500 Datasheet",
      description: "Detailed technical specifications and features",
      type: "Datasheet",
      version: "2.1",
      released: "2023-05-15",
      size: "2.4 MB",
      url: "https://senselive.in/downloads/documents/datasheets/datasheet_senselive_e7500.pdf",
    },
    {
      title: "SenseLive E7500 User Manual",
      description: "Installation, configuration, and operation guide",
      type: "Manual",
      version: "1.3",
      released: "2023-06-10",
      size: "4.8 MB",
      url: "/downloads/documents/E7500-manual.pdf",
    },
    {
      title: "SenseLive E7500 Firmware",
      description: "Latest firmware with security updates and new features",
      type: "Firmware",
      version: "3.2.1",
      released: "2023-07-22",
      size: "8.5 MB",
      url: "/downloads/firmware/E7500_v3.2.1.bin",
    },
    {
      title: "SenseLive E7500 Configuration Tool",
      description: "Windows software for device configuration and management",
      type: "Software",
      version: "2.0.5",
      released: "2023-08-05",
      size: "12.3 MB",
      url: "/downloads/software/E7500-config-tool.zip",
    },
  ]

  // Related products
  const relatedProducts = [
    {
      id: "e7000",
      name: "SenseLive E7000",
      description: "Ethernet-based Remote IO Controller",
      specs: ["4 Digital Inputs", "2 Analog Inputs", "4 Relay Outputs", "Modbus TCP/RTU Support"],
      image: "/products/controllers/e7000/thumbnail.png",
      category: "controllers",
    },
    {
      id: "x9000",
      name: "SenseLive X9000",
      description: "4G IoT Gateway with Edge Intelligence",
      specs: ["4G CAT1 Connectivity", "Digital & Analog Inputs", "Dual RS485 Ports", "Edge Computing Features"],
      image: "/products/connectivity/x9000/thumbnail.png",
      category: "connectivity",
    },
  ]

  return (
    <div className="flex flex-col">
      <ProductStructuredData
        name="SenseLive E7500"
        description="RS485-based Remote IO Controller"
        image="/products/controllers/e7500/main.png"
        sku="E7500"
        brand="SenseLive"
        category="Remote IO Controllers"
        url="/products/controllers/e7500"
      />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          {/* Breadcrumbs */}
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
            <span className="text-foreground">SenseLive E7500</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Product Images */}
            <div className="flex flex-col gap-6">
              <ProductImageGallery mainImage={mainImage} galleryImages={galleryImages} productName="SenseLive E7500" />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge className="bg-green-500 hover:bg-green-600">In Stock</Badge>
                  <Badge variant="outline">New</Badge>
                  <Badge variant="outline">Industrial Grade</Badge>
                </div>
                <h1 className="text-3xl font-bold">SenseLive E7500</h1>
                <p className="text-xl text-muted-foreground mt-2">RS485-based Remote IO Controller</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Key Features</h3>
                <ul className="space-y-2">
                  {keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">{feature.title}:</span>{" "}
                        <span className="text-muted-foreground">{feature.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/inquiry?product=E7500" className="flex-1">
                  <Button className="w-full gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Request a Quote
                  </Button>
                </Link>
                <Link href={downloads[0].url} className="flex-1">
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

            {/* Overview Tab */}
            <TabsContent value="overview" className="pt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Product Overview</h2>
                  <div className="prose max-w-none text-muted-foreground">
                    <p className="mb-4">
                      SenseLive E7500 is an intelligent remote IO controller designed for digital input/output and
                      analog input across RS485 networks. It enables convenient connections to RS485 systems, supporting
                      remote control and data acquisition in industrial, commercial, or utility environments.
                    </p>
                    <p className="mb-4">
                      With support for Modbus RTU, SenseLive E7500 provides 4 digital inputs, 2 analog inputs, and 4
                      relay outputs. It's ideal for integrating with SCADA or other industrial software for monitoring
                      and control applications.
                    </p>
                    <p className="mb-4">
                      The compact DIN-rail mountable design makes it easy to install in control cabinets, while the wide
                      operating temperature range ensures reliable operation in harsh environments. The device can be
                      configured and managed via Windows tools for easy parameter updates, and the device management
                      library simplifies programming with standard read/write functions in various languages.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-md opacity-30"></div>
                    <Image
                      src="/products/controllers/e7500/front.png"
                      alt="SenseLive E7500 Remote IO Controller"
                      width={600}
                      height={400}
                      className="relative rounded-lg object-contain shadow-xl bg-white/5 p-4"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Why Choose SenseLive E7500</h3>
                    <ul className="space-y-4">
                      {keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Compatible with Industry Standards</h3>
                  <p className="text-muted-foreground mb-6">
                    The SenseLive E7500 is designed to work seamlessly with industry-standard protocols and systems:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M2 9h20M9 20h6M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-center">SCADA Systems</h4>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14M2 20h20M14 12v.01" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-center">PLC Integration</h4>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-center">Security Systems</h4>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-center">Alarm Systems</h4>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Specifications Tab */}
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
                        {physicalSpecs.map((spec, index) => (
                          <div key={index} className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                            <dt className="text-sm font-medium text-muted-foreground">{spec.name}</dt>
                            <dd className="text-sm">{spec.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </CardContent>
                  </Card>

                  <Card className="border-muted">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">I/O Specifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        {ioSpecs.map((spec, index) => (
                          <div key={index} className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                            <dt className="text-sm font-medium text-muted-foreground">{spec.name}</dt>
                            <dd className="text-sm">{spec.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </CardContent>
                  </Card>

                  <Card className="border-muted">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Communication Specifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        {commSpecs.map((spec, index) => (
                          <div key={index} className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                            <dt className="text-sm font-medium text-muted-foreground">{spec.name}</dt>
                            <dd className="text-sm">{spec.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </CardContent>
                  </Card>

                  <Card className="border-muted">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Software & Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        {softwareSpecs.map((spec, index) => (
                          <div key={index} className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                            <dt className="text-sm font-medium text-muted-foreground">{spec.name}</dt>
                            <dd className="text-sm">{spec.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8">
                  <Card className="border-muted">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Certifications & Compliance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold mb-1">CE</div>
                          <p className="text-xs text-center text-muted-foreground">European Conformity</p>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold mb-1">FCC</div>
                          <p className="text-xs text-center text-muted-foreground">Federal Communications Commission</p>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold mb-1">RoHS</div>
                          <p className="text-xs text-center text-muted-foreground">
                            Restriction of Hazardous Substances
                          </p>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold mb-1">IP20</div>
                          <p className="text-xs text-center text-muted-foreground">Ingress Protection Rating</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Dimensional Drawing</h3>
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-2xl aspect-[4/3] bg-white rounded-lg p-4">
                      <Image
                        src="/placeholder.svg?height=600&width=800&text=E7500+Dimensional+Drawing"
                        alt="SenseLive E7500 Dimensional Drawing"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-center text-muted-foreground mt-4">
                    All dimensions are in millimeters (mm). For detailed mounting instructions, please refer to the user
                    manual.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Applications Tab */}
            <TabsContent value="applications" className="pt-6">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Application Scenarios</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {applications.map((app, index) => (
                    <Card key={index} className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src={app.image || "/placeholder.svg"}
                          alt={app.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{app.title}</CardTitle>
                        <CardDescription>{app.subtitle}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{app.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6">Integration Examples</h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">SCADA Integration</h4>
                      <p className="text-muted-foreground">
                        The SenseLive E7500 can be easily integrated with SCADA systems using the Modbus RTU protocol.
                        The device acts as a Modbus slave, allowing SCADA masters to read input states and control
                        outputs. This enables real-time monitoring and control of industrial processes from a central
                        location.
                      </p>
                      <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                        <h5 className="font-medium mb-2">Integration Steps:</h5>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Configure the E7500 with the appropriate Modbus address and communication parameters</li>
                          <li>Connect the RS485 lines to your SCADA system or gateway</li>
                          <li>Configure your SCADA software to poll the device using standard Modbus function codes</li>
                          <li>Map the Modbus registers to your SCADA tags for visualization and control</li>
                        </ol>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">Building Management Systems</h4>
                      <p className="text-muted-foreground">
                        In building automation applications, the E7500 can monitor environmental conditions and control
                        equipment such as HVAC systems, lighting, and access control. The device's wide operating
                        temperature range makes it suitable for installation in mechanical rooms and other challenging
                        environments.
                      </p>
                      <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                        <h5 className="font-medium mb-2">Common Applications:</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Temperature and humidity monitoring</li>
                          <li>Equipment status monitoring (on/off, running, fault)</li>
                          <li>Lighting control based on schedules or sensor inputs</li>
                          <li>Alarm generation for abnormal conditions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                    <h4 className="text-lg font-medium mb-4">Case Study: Energy Monitoring System</h4>
                    <p className="text-muted-foreground mb-4">
                      A manufacturing facility used multiple E7500 units to monitor energy consumption across different
                      production lines. The analog inputs were connected to current transformers to measure power
                      consumption, while the digital inputs monitored equipment status. The system provided real-time
                      data to identify energy waste and optimize production schedules.
                    </p>
                    <div className="flex justify-end">
                      <Link href="/case-studies/energy-monitoring">
                        <Button variant="link" className="gap-1 p-0">
                          Read full case study
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Downloads Tab */}
            <TabsContent value="downloads" className="pt-6">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Downloads</h2>

                <div className="grid gap-4">
                  {downloads.map((download, index) => (
                    <Card key={index} className="border-muted">
                      <CardHeader className="p-4 pb-0">
                        <div className="flex justify-between items-start">
                          <div className="flex items-start gap-3">
                            <div className="mt-1">
                              <FileText className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-base">{download.title}</CardTitle>
                              <CardDescription className="text-sm mt-1">{download.description}</CardDescription>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs font-normal">
                            {download.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-3">
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2">
                          <span>Version: {download.version}</span>
                          <span>Released: {download.released}</span>
                          <span>Size: {download.size}</span>
                        </div>
                      </CardContent>
                      <CardContent className="p-4 pt-0">
                        <Link href={download.url}>
                          <Button variant="outline" size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            Download
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-muted rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Additional Resources</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Link href="/support/knowledge-base/e7500-quick-start">
                      <div className="p-4 border rounded-lg hover:border-primary transition-colors">
                        <h4 className="font-medium">Quick Start Guide</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Step-by-step instructions for getting started with your E7500
                        </p>
                      </div>
                    </Link>
                    <Link href="/support/knowledge-base/e7500-modbus-register-map">
                      <div className="p-4 border rounded-lg hover:border-primary transition-colors">
                        <h4 className="font-medium">Modbus Register Map</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Complete reference of all Modbus registers and their functions
                        </p>
                      </div>
                    </Link>
                    <Link href="/support/knowledge-base/e7500-troubleshooting">
                      <div className="p-4 border rounded-lg hover:border-primary transition-colors">
                        <h4 className="font-medium">Troubleshooting Guide</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Solutions to common issues and troubleshooting steps
                        </p>
                      </div>
                    </Link>
                    <Link href="/support/knowledge-base/e7500-application-examples">
                      <div className="p-4 border rounded-lg hover:border-primary transition-colors">
                        <h4 className="font-medium">Application Examples</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Code samples and application examples for various use cases
                        </p>
                      </div>
                    </Link>
                  </div>
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
              Explore other products that work well with SenseLive E7500 or serve similar purposes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {relatedProducts.map((product, index) => (
              <ProductCard
                key={index}
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

      <section className="w-full py-12 md:py-16 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Need Technical Assistance?</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Our team of experts is ready to help you find the right solution for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/support">
                <Button variant="outline">Visit Support Center</Button>
              </Link>
              <Link href="/contact">
                <Button>Contact Sales</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


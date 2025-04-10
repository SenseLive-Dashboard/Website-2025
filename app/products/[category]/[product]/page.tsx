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

interface ProductPageProps {
  params: {
    category: string
    product: string
  }
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductDetails(params.category, params.product)

  return {
    title: product.name,
    description: `${product.name} - ${product.shortDescription}. View specifications, features, and applications.`,
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductDetails(params.category, params.product)
  const relatedProducts = getRelatedProducts(params.category, params.product)

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
            <Link href={`/products/${params.category}`} className="hover:text-foreground">
              {getCategoryName(params.category)}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <ProductImageGallery
              mainImage={product.image || "/placeholder.svg?height=500&width=500"}
              galleryImages={
                product.galleryImages || [
                  "/placeholder.svg?height=500&width=500&text=View+2",
                  "/placeholder.svg?height=500&width=500&text=View+3",
                  "/placeholder.svg?height=500&width=500&text=View+4",
                ]
              }
              productName={product.name}
            />

            <div className="space-y-6">
              <div>
                <Badge className="mb-2">{product.status}</Badge>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-xl text-muted-foreground mt-2">{product.shortDescription}</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Key Features</h3>
                <ul className="space-y-2">
                  {product.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/inquiry" className="flex-1">
                  <Button className="w-full gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Request a Quote
                  </Button>
                </Link>
                <Link href={product.datasheetUrl} className="flex-1">
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
                    {product.overview.map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-md opacity-30"></div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Product in use"
                      width={600}
                      height={400}
                      className="relative rounded-lg object-cover shadow-xl"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Why Choose {product.name}</h3>
                    <ul className="space-y-4">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">{benefit.title}</h4>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="pt-6">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>

                <div className="grid gap-6 md:grid-cols-2">
                  {Object.entries(product.specifications).map(([category, specs]) => (
                    <Card key={category} className="border-muted">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <dl className="space-y-2">
                          {Object.entries(specs).map(([key, value]) => (
                            <div key={key} className="grid grid-cols-2 gap-2 py-2 border-b border-muted last:border-0">
                              <dt className="text-sm font-medium text-muted-foreground">{key}</dt>
                              <dd className="text-sm">{value != null ? String(value) : ''}</dd>
                            </div>
                          ))}
                        </dl>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="applications" className="pt-6">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Application Scenarios</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {product.applications.map((application, index) => (
                    <Card key={index} className="border-muted">
                      <div className="relative aspect-video">
                        <Image
                          src={application.image || "/placeholder.svg"}
                          alt={application.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{application.title}</CardTitle>
                        <CardDescription>{application.industry}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{application.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="downloads" className="pt-6">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Downloads</h2>

                <div className="grid gap-4">
                  {product.downloads.map((download, index) => (
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
                          {download.version && <span>Version: {download.version}</span>}
                          <span>Released: {download.date}</span>
                          {download.fileSize && <span>Size: {download.fileSize}</span>}
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
              Explore other products that work well with {product.name} or serve similar purposes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {relatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                specs={product.specs}
                image={product.image}
                category={params.category}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function getCategoryName(categorySlug: string): string {
  const categoryMap: Record<string, string> = {
    gateways: "Modbus Gateways",
    controllers: "Remote IO Controllers",
    connectivity: "4G/5G Solutions",
    wireless: "LoRa/ZigBee Devices",
    fiber: "Optical Fiber",
    wifi: "WiFi Solutions",
  }

  return categoryMap[categorySlug] || "Products"
}

// Updated getProductDetails function that removes all SLXXXX references
function getProductDetails(category: string, productId: string) {
  // For the X5050 product (previously SL5143D)
  if (productId === "x5050") {
    return {
      id: productId,
      name: "X5050",
      shortDescription: "Industrial Modbus Gateway with 4G Connectivity",
      status: "In Stock",
      image: "/products/gateways/x5050/main.png",
      galleryImages: [
        "/products/gateways/x5050/angle-view.png",
        "/products/gateways/x5050/side-view.png",
        "/products/gateways/x5050/ports-view.png",
      ],
      keyFeatures: [
        "Supports Modbus RTU/TCP protocol conversion",
        "Built-in 4G LTE cellular connectivity",
        "Dual RS485/232 serial ports",
        "Industrial-grade design for harsh environments",
        "Wide operating temperature range: -40°C to 85°C",
        "DIN rail or wall mounting options",
      ],
      datasheetUrl: "/downloads/datasheets/x5050.pdf",
      overview: [
        "The X5050 is an industrial-grade Modbus gateway designed for reliable data communication in demanding environments. It seamlessly connects Modbus RTU devices to Modbus TCP networks, enabling remote monitoring and control of industrial equipment.",
        "With built-in 4G LTE connectivity, the X5050 provides reliable communication even in locations where wired networks are unavailable or impractical. The dual RS485/232 serial ports allow connection to multiple Modbus RTU devices simultaneously.",
        "The robust design ensures reliable operation in harsh industrial environments, with a wide operating temperature range and multiple mounting options. Advanced security features, including VPN support and firewall, protect your data and devices from unauthorized access.",
      ],
      benefits: [
        {
          title: "Reliable Connectivity",
          description:
            "Industrial-grade hardware and cellular redundancy ensure continuous operation in demanding environments.",
        },
        {
          title: "Easy Integration",
          description:
            "Seamless integration with existing Modbus devices and SCADA systems reduces implementation time.",
        },
        {
          title: "Remote Management",
          description:
            "Web-based configuration and remote firmware updates simplify maintenance and reduce site visits.",
        },
        {
          title: "Enhanced Security",
          description: "Built-in VPN, firewall, and encryption protect your data and devices from unauthorized access.",
        },
      ],
      specifications: {
        Communication: {
          Cellular: "4G LTE Cat 4",
          Ethernet: "1 x 10/100 Mbps",
          "Serial Ports": "2 x RS485/232",
          Protocols: "Modbus RTU/TCP, MQTT, HTTP, HTTPS",
        },
        Hardware: {
          Processor: "ARM Cortex-A7, 528 MHz",
          Memory: "256 MB RAM, 512 MB Flash",
          "Power Supply": "9-36 VDC",
          "Power Consumption": "< 5W typical",
        },
        Physical: {
          Dimensions: "120 x 85 x 35 mm",
          Weight: "350g",
          Mounting: "DIN rail or wall mount",
          "Operating Temperature": "-40°C to 85°C",
          "IP Rating": "IP30",
        },
        Software: {
          Configuration: "Web interface, CLI",
          Security: "Firewall, VPN, HTTPS",
          Management: "SNMP, Remote firmware update",
          Diagnostics: "System logs, Signal strength indicator",
        },
      },
      applications: [
        {
          title: "Remote Monitoring of Water Pumps",
          industry: "Water Utilities",
          description:
            "Enables real-time monitoring and control of water pumps in remote locations, with alerts for abnormal conditions.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Energy Consumption Monitoring",
          industry: "Manufacturing",
          description:
            "Collects energy consumption data from meters and analyzers for optimization and cost reduction.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Oil & Gas Pipeline Monitoring",
          industry: "Oil & Gas",
          description:
            "Monitors pressure, flow, and temperature along pipelines, with real-time alerts for leaks or abnormal conditions.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      downloads: [
        {
          title: "X5050 Datasheet",
          description: "Detailed technical specifications and features",
          type: "Datasheet",
          version: "2.1",
          date: "2023-05-15",
          fileSize: "2.4 MB",
          url: "/downloads/datasheets/x5050.pdf",
        },
        {
          title: "X5050 User Manual",
          description: "Installation, configuration, and operation guide",
          type: "Manual",
          version: "1.3",
          date: "2023-06-10",
          fileSize: "4.8 MB",
          url: "/downloads/manuals/x5050.pdf",
        },
        {
          title: "X5050 Firmware",
          description: "Latest firmware with security updates and new features",
          type: "Firmware",
          version: "3.2.1",
          date: "2023-07-22",
          fileSize: "8.5 MB",
          url: "/downloads/firmware/x5050_v3.2.1.bin",
        },
        {
          title: "X5050 Quick Start Guide",
          description: "Step-by-step guide for initial setup",
          type: "Guide",
          version: "1.0",
          date: "2023-04-05",
          fileSize: "1.2 MB",
          url: "/downloads/guides/x5050_quickstart.pdf",
        },
      ],
    }
  }

  // For other products, return default data with correct naming conventions
  return {
    id: productId,
    name: productId.charAt(0).toUpperCase() + productId.slice(1),
    shortDescription: "Industrial IoT Device for Smart Infrastructure",
    status: "In Stock",
    image: `/placeholder.svg?height=500&width=500&text=${productId.toUpperCase()}`,
    galleryImages: [
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
    keyFeatures: [
      "Industrial-grade design for harsh environments",
      "Wide operating temperature range: -40°C to 85°C",
      "Low power consumption",
      "Secure communication protocols",
      "Easy integration with existing systems",
      "Remote management capabilities",
    ],
    datasheetUrl: `/downloads/datasheets/${productId}.pdf`,
    overview: [
      `The ${productId.toUpperCase()} is an industrial-grade IoT device designed for reliable operation in demanding environments. It provides seamless connectivity and data collection capabilities for industrial automation and smart infrastructure applications.`,
      "With its robust design and advanced features, it ensures reliable operation even in harsh conditions, making it ideal for critical infrastructure monitoring and control applications.",
      "The device supports multiple communication protocols and can be easily integrated with existing systems, providing a flexible and scalable solution for various industrial IoT requirements.",
    ],
    benefits: [
      {
        title: "Reliable Operation",
        description: "Industrial-grade hardware ensures continuous operation in demanding environments.",
      },
      {
        title: "Easy Integration",
        description: "Seamless integration with existing systems reduces implementation time.",
      },
      {
        title: "Remote Management",
        description: "Web-based configuration and remote firmware updates simplify maintenance and reduce site visits.",
      },
      {
        title: "Enhanced Security",
        description: "Built-in security features protect your data and devices from unauthorized access.",
      },
    ],
    specifications: {
      Communication: {
        Ethernet: "1 x 10/100 Mbps",
        "Serial Ports": "2 x RS485/232",
        Protocols: "Modbus RTU/TCP, MQTT, HTTP, HTTPS",
      },
      Hardware: {
        Processor: "ARM Cortex-A7, 528 MHz",
        Memory: "256 MB RAM, 512 MB Flash",
        "Power Supply": "9-36 VDC",
        "Power Consumption": "< 5W typical",
      },
      Physical: {
        Dimensions: "120 x 85 x 35 mm",
        Weight: "350g",
        Mounting: "DIN rail or wall mount",
        "Operating Temperature": "-40°C to 85°C",
        "IP Rating": "IP30",
      },
      Software: {
        Configuration: "Web interface, CLI",
        Security: "Firewall, VPN, HTTPS",
        Management: "SNMP, Remote firmware update",
        Diagnostics: "System logs, Signal strength indicator",
      },
    },
    applications: [
      {
        title: "Remote Monitoring",
        industry: "Utilities",
        description:
          "Enables real-time monitoring and control of remote equipment, with alerts for abnormal conditions.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Energy Management",
        industry: "Manufacturing",
        description: "Collects energy consumption data for optimization and cost reduction.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Asset Tracking",
        industry: "Logistics",
        description: "Monitors location and condition of valuable assets in real-time.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    downloads: [
      {
        title: `${productId.toUpperCase()} Datasheet`,
        description: "Detailed technical specifications and features",
        type: "Datasheet",
        version: "2.0",
        date: "2023-05-15",
        fileSize: "2.4 MB",
        url: `/downloads/datasheets/${productId}.pdf`,
      },
      {
        title: `${productId.toUpperCase()} User Manual`,
        description: "Installation, configuration, and operation guide",
        type: "Manual",
        version: "1.2",
        date: "2023-06-10",
        fileSize: "4.8 MB",
        url: `/downloads/manuals/${productId}.pdf`,
      },
      {
        title: `${productId.toUpperCase()} Firmware`,
        description: "Latest firmware with security updates and new features",
        type: "Firmware",
        version: "3.0",
        date: "2023-07-22",
        fileSize: "8.5 MB",
        url: `/downloads/firmware/${productId}_v3.0.bin`,
      },
    ],
  }
}

// Mock function to get related products
function getRelatedProducts(category: string, productId: string) {
  return [
    {
      id: "x5144",
      name: "X5144",
      description: "Advanced Modbus Gateway",
      specs: ["Dual Ethernet", "Multiple Serial Ports", "DIN Rail Mount"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "x5150",
      name: "X5150",
      description: "Compact Modbus Gateway",
      specs: ["WiFi Connectivity", "RS485 Port", "Compact Design"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "x6002",
      name: "X6002",
      description: "4G/5G Router",
      specs: ["Dual SIM", "VPN Support", "Advanced Firewall"],
      image: "/placeholder.svg?height=300&width=300",
    },
  ]
}


import type { Metadata } from "next"
import Link from "next/link"
import {
  ChevronRight,
  Download,
  Globe,
  LineChart,
  Server,
  Settings,
  Zap,
  BarChart3,
  Droplets,
  ClipboardCheck,
  Factory,
  Network,
  Wifi,
  Radio,
  Layers,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductCard3DEnhanced } from "@/components/product-card-3d-enhanced"
import { TestimonialCarouselModern } from "@/components/testimonial-carousel-modern"
import { SolutionCardModern } from "@/components/solution-card-modern"
import { HeroSectionEnhanced } from "@/components/hero-section-enhanced"
import { CustomerLogos } from "@/components/customer-logos"

export const metadata: Metadata = {
  title: "SenseLive | Advanced IoT Solutions",
  description:
    "Leading provider of IoT hardware and solutions for industrial automation, energy management, and smart infrastructure.",
}

export default function Home() {
  // Extended testimonials data with avatars
  const testimonials = [
    {
      quote:
        "SenseLive's EMS solution has reduced our energy consumption by 23% within the first six months of implementation, resulting in significant cost savings and helping us meet our sustainability targets.",
      author: "John Smith",
      role: "Operations Director",
      company: "Global Manufacturing Inc.",
      logo: "/placeholder.svg?height=40&width=120",
      caseStudyLink: "/case-studies/global-manufacturing",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The water management system from SenseLive has been instrumental in our sustainability initiatives. We've detected and prevented multiple leaks, saving both water resources and avoiding costly damages.",
      author: "Sarah Johnson",
      role: "Sustainability Manager",
      company: "EcoTech Solutions",
      logo: "/solutions/wms/wms1.png",
      caseStudyLink: "/case-studies/ecotech-solutions",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Implementing the Digital Checksheet solution has streamlined our quality control process, eliminated paper waste, and improved our compliance reporting. The ROI was achieved within just 4 months.",
      author: "Michael Chen",
      role: "Quality Assurance Manager",
      company: "Precision Industries",
      logo: "/placeholder.svg?height=40&width=120",
      caseStudyLink: "/case-studies/precision-industries",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "SenseLive's 4G/5G solutions have provided reliable connectivity for our remote sites, enabling real-time monitoring and control that was previously impossible with our legacy systems.",
      author: "Emma Rodriguez",
      role: "IT Director",
      company: "Utility Services Co.",
      logo: "/placeholder.svg?height=40&width=120",
      caseStudyLink: "/case-studies/utility-services",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  // Customer logos data - reduced to 13 logos
  const customerLogos = [
    
    { name: "Adnoc", image: "/clientlogo/adnoc.png", alt: "Adnoc" },
    { name: "Elkem", image: "/clientlogo/elkem.png", alt: "Elkem" },
    { name: "Baidyanath", image: "/clientlogo/baidyanath.png", alt: "Baidyanath" },
    { name: "Bansal", image: "/clientlogo/bansal.png", alt: "Bansal" },
    { name: "Calderys", image: "/clientlogo/calderys.png", alt: "Calderys" },
    { name: "CEAT", image: "/clientlogo/ceat.png", alt: "CEAT" },
    { name: "Coal India", image: "/clientlogo/coalindia.png", alt: "Coal India" },
    { name: "Haldirams", image: "/clientlogo/haldirams.png", alt: "Haldiram" },
    { name: "Indorama", image: "/clientlogo/indorama.png", alt: "Indorama" },
    { name: "JSW", image: "/clientlogo/jsw.png", alt: "JSW" },
    { name: "Kapilansh", image: "/clientlogo/kapilansh.png", alt: "Kapilansh" },
    { name: "Mahindra", image: "/clientlogo/mahindra.png", alt: "Mahindra" },
    { name: "Masdar", image: "/clientlogo/masdar.png", alt: "Masdar" },
    { name: "Minex", image: "/clientlogo/minex.png", alt: "Minex" },
    { name: "Multiflex", image: "/clientlogo/multiflex.png", alt: "Multiflex" },
    { name: "OFDC", image: "/clientlogo/ofdc.png", alt: "OFDC" },
    { name: "Solar", image: "/clientlogo/solar.png", alt: "Solar" },
    { name: "Taqa", image: "/clientlogo/taqa.png", alt: "Taqa" },
    
  ]

  // Product data
  const featuredProducts = [
    {
      id: "edge8000",
      name: "SenseLive Edge8000",
      description: "Wireless Bus Bar / Surface Temperature Monitoring System",
      specs: ["Up to 60 wireless sensors", "Integrated Energy Meter", "RS485 Data Output", "Built-In Dual Relays"],
      image: "/products/wireless-bus-bar/edge8000/thumbnail.png",
      category: "wireless-bus-bar",
    },
    {
      id: "x7900",
      name: "SenseLive X7900",
      description: "LoRa Gateway with TCP Output",
      specs: ["LoRaWAN & Private LoRa", "TCP/IP Gateway", "Multiple Interfaces", "Web Management"],
      image: "/products/wireless/x7900/thumbnail.png",
      category: "wireless",
    },
    {
      id: "x9000",
      name: "SenseLive X9000",
      description: "4G IoT Gateway with Edge Intelligence",
      specs: ["4G CAT1 Connectivity", "Digital & Analog Inputs", "Dual RS485 Ports", "Edge Computing Features"],
      image: "/products/connectivity/x9000/main.png",
      category: "connectivity",
    },
    {
      id: "x5050",
      name: "SenseLive X5050",
      description: "RS485 to TCP/IP Modbus Server",
      specs: ["Modbus TCP ↔ RTU", "MQTT Gateway", "DIN-Rail Mount", "-40°C to +85°C"],
      image: "/products/gateway/x5050/X5050.png",
      category: "gateways",
    },
  ]

  // Solution data
  const solutions = [
    {
      id: "ems",
      name: "Energy Management System",
      description:
        "Comprehensive energy monitoring and management solution that helps businesses reduce energy consumption, optimize operations, and meet sustainability goals.",
      image: "/solutions/ems/ems1.png",
      badge: "Energy Management",
      icon: <BarChart3 className="h-5 w-5 text-primary" />,
    },
    {
      id: "water-management",
      name: "Water Management System",
      description:
        "Intelligent water monitoring and management solution that helps organizations optimize water usage, detect leaks, and ensure water quality.",
      image: "/solutions/wms/wms1.png",
      badge: "Water Management",
      icon: <Droplets className="h-5 w-5 text-primary" />,
    },
    {
      id: "digital-checksheet",
      name: "Digital Checksheet",
      description:
        "Paperless inspection and quality control solution that streamlines processes, ensures compliance, and improves operational efficiency.",
      image: "/solutions/checklist/checklist1.png",
      badge: "Digital Transformation",
      icon: <ClipboardCheck className="h-5 w-5 text-primary" />,
    },
    {
      id: "production-monitoring",
      name: "Production Monitoring",
      description:
        "End-to-end production monitoring solution that provides real-time visibility, improves efficiency, and optimizes manufacturing processes.",
      image: "/solutions/production/production1.png",
      badge: "Manufacturing Excellence",
      icon: <Factory className="h-5 w-5 text-primary" />,
    },
  ]

  // Key features data
  const keyFeatures = [
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      title: "Reliable Hardware",
      description: "Industrial-grade IoT devices designed for 24/7 operation in demanding environments.",
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: "Scalable Solutions",
      description: "Flexible architecture that grows with your business needs, from single site to global deployment.",
    },
    {
      icon: <LineChart className="h-6 w-6 text-primary" />,
      title: "Advanced Analytics",
      description: "Turn data into actionable insights with our powerful analytics and reporting tools.",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Global Support",
      description: "24/7 technical assistance and implementation support from our team of experts worldwide.",
    },
  ]

  // Product categories
  const productCategories = [
    { name: "Modbus Gateways", path: "/products/gateways", icon: Server },
    { name: "Remote IO Controllers", path: "/products/controllers", icon: Zap },
    { name: "4G/5G Solutions", path: "/products/connectivity", icon: Network },
    { name: "WiFi Solutions", path: "/products/wifi", icon: Wifi },
    { name: "Optical Fiber", path: "/products/fiber", icon: Layers },
    { name: "LoRa/ZigBee Devices", path: "/products/wireless", icon: Radio },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSectionEnhanced />

      {/* Customer Logos Section - Added after Hero */}
      <CustomerLogos logos={customerLogos} />

      {/* Product Categories Section */}
      <section className="w-full py-8 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
              Complete IoT <span className="gradient-text">Hardware Ecosystem</span>
            </h2>
            <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Discover our comprehensive range of industrial-grade IoT hardware designed for reliability, connectivity,
              and performance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {productCategories.map((category, index) => (
              <div key={category.path} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <Link href={category.path} className="group">
                  <Card className="h-full hover-lift overflow-hidden border-border bg-card">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <category.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-medium text-base md:text-lg group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2 max-w-[800px]">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Featured <span className="gradient-text">Hardware</span>
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Industry-leading IoT devices designed for reliability, connectivity, and performance.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard3DEnhanced
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  specs={product.specs}
                  image={product.image}
                  category={product.category}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/products">
              <Button size="lg" variant="outline" className="font-medium group">
                View All Products
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2 max-w-[800px]">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Comprehensive <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-muted-foreground md:text-xl">
                End-to-end IoT solutions tailored for your industry needs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {solutions.map((solution, index) => (
              <div key={solution.id} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <SolutionCardModern
                  id={solution.id}
                  name={solution.name}
                  description={solution.description}
                  image={solution.image}
                  badge={solution.badge}
                  icon={solution.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2 max-w-[800px]">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Success <span className="gradient-text">Stories</span>
              </h2>
              <p className="text-muted-foreground md:text-xl">
                See how our clients are transforming their operations with SenseLive solutions.
              </p>
            </div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <TestimonialCarouselModern testimonials={testimonials} />
          </div>
        </div>
      </section> */}

      {/* Key Features */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={feature.title} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <Card className="bg-card border-border hover-lift h-full">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-senselive text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Transform Your Operations?</h2>
              <p className="text-white/90 md:text-xl">
                Contact our team of experts to discuss how SenseLive can help you implement IoT solutions tailored to
                your specific needs.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/inquiry">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full min-[400px]:w-auto font-medium shadow-lg hover:shadow-xl transition-all"
                  >
                    Request a Quote
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full min-[400px]:w-auto border-white/20 text-white hover:bg-white/10 font-medium transition-all"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 border-white/20 hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Download className="h-5 w-5" />
                    Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">Access product datasheets, firmware updates, and case studies.</p>
                </CardContent>
                <CardFooter>
                  <Link href="/downloads">
                    <Button variant="link" className="text-white p-0 font-medium transition-all hover:opacity-80 group">
                      Download Center
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-white/10 border-white/20 hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Zap className="h-5 w-5" />
                    R&D Strength
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">Learn about our innovation process and rigorous testing standards.</p>
                </CardContent>
                <CardFooter>
                  <Link href="/about/research">
                    <Button variant="link" className="text-white p-0 font-medium transition-all hover:opacity-80 group">
                      Our Technology
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


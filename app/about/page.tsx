import Image from "next/image"
import Link from "next/link"
import { Award, Calendar, ChevronRight, Clock, Globe, Layers, Lightbulb, Shield, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 animate-fade-in">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4 animate-fade-up">
              <PageHeader
                title="About SenseLive"
                description="SenseLive is a leading provider of industrial IoT solutions, dedicated to transforming industries through innovative hardware and software technologies. Our commitment to innovation, quality, and excellence drives us to deliver cutting-edge solutions that empower businesses to achieve operational efficiency and sustainability."
              />
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="transition-all hover:shadow-md">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/careers">
                  <Button size="lg" variant="outline" className="transition-all hover:bg-muted">
                    Join Our Team
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center animate-fade-up delay-200">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-md opacity-30"></div>
                <Image
                  src="/about/about1.png"
                  alt="SenseLive Team"
                  width={600}
                  height={400}
                  className="relative rounded-lg object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-16 animate-fade-in">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-up">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-md opacity-30"></div>
                <Image
                  src="/about/about2.png"
                  alt="SenseLive History"
                  width={500}
                  height={500}
                  className="relative rounded-lg object-cover shadow-xl mx-auto"
                />
              </div>
            </div>
            <div className="space-y-4 order-1 lg:order-2 animate-fade-up delay-200">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-muted-foreground">
                SenseLive was founded in April 2019 with a dedicated mission to develop innovative IoT solutions for
                cold chain monitoring. What began as a small team with a big vision has rapidly evolved into a
                pioneering force in the industrial IoT landscape.
              </p>
              <p className="text-muted-foreground">
                From our humble beginnings, we quickly identified critical gaps in industrial monitoring and control
                systems. This insight led us to expand our focus beyond cold chain monitoring to comprehensive
                industrial IoT solutions that address real-world challenges across multiple sectors.
              </p>
              <p className="text-muted-foreground">
                Our journey has been marked by continuous innovation, strategic partnerships, and groundbreaking
                achievements—including our collaboration with ISRO to launch IoT technology into space. Today, SenseLive
                solutions are trusted by industry leaders across manufacturing, energy, water management, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 animate-fade-in">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10 animate-fade-up">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Mission & Values</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Our mission is to provide best-in-class IoT solutions that enable real-time monitoring, energy management,
              and operational efficiency across industries. We're guided by core values that shape everything we do.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="bg-background p-6 rounded-lg shadow-sm hover-lift animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously push the boundaries of what's possible in IoT, investing in R&D to develop solutions
                that address emerging challenges and anticipate future needs.
              </p>
            </div>
            <div
              className="bg-background p-6 rounded-lg shadow-sm hover-lift animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reliability</h3>
              <p className="text-muted-foreground">
                We build robust, dependable solutions that perform consistently in the most demanding industrial
                environments, earning the trust of our clients through proven performance.
              </p>
            </div>
            <div
              className="bg-background p-6 rounded-lg shadow-sm hover-lift animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                We work closely with our clients and partners, fostering relationships built on transparency, mutual
                respect, and a shared commitment to achieving exceptional results.
              </p>
            </div>
            <div
              className="bg-background p-6 rounded-lg shadow-sm hover-lift animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to the highest standards of quality in our products, services, and customer support,
                striving for excellence in every aspect of our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-16 animate-fade-in">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10 animate-fade-up">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Leadership Team</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Meet the experienced professionals guiding SenseLive's vision and growth.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Abhijeet Bhoyar",
                role: "Chief Executive Officer",
                bio: "With a strong background in Mechanical Engineering, Abhijeet drives SenseLive's strategic vision and operational excellence. His leadership has been instrumental in establishing SenseLive as a leader in industrial IoT solutions.",
                image: "/about/about3.png",
              },
              {
                name: "Mayur Dafare",
                role: "Chief Technology Officer",
                bio: "An expert with advanced qualifications in Electronics and Telecommunications, Mayur's leadership was instrumental in launching a satellite in collaboration with ISRO, showcasing our pioneering work in IoT in space.",
                image: "/about/about4.png",
              },
              {
                name: "Sandesh Waghmare",
                role: "Chief Operations Officer",
                bio: "With engineering expertise and a Masters in Electronics and Telecommunications, Sandesh ensures operational efficiency and smooth execution across our projects, driving excellence in product development and delivery.",
                image: "/about/about5.png",
              },
            ].map((leader, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative w-40 h-40 mb-4 hover-lift">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur-md opacity-30"></div>
                  <div className="relative w-40 h-40">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold">{leader.name}</h3>
                <p className="text-primary font-medium">{leader.role}</p>
                <p className="mt-2 text-muted-foreground">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 animate-fade-in">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10 animate-fade-up">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Journey</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Key milestones in SenseLive's evolution as an IoT leader, showcasing our product development and growth.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>
            <div className="space-y-12">
              {[
                {
                  year: "April 2019",
                  title: "Company Founded",
                  description:
                    "SenseLive was founded with a dedicated mission to develop IoT solutions for cold chain monitoring, marking the beginning of our journey in industrial IoT.",
                  icon: Calendar,
                  product: null,
                },
                {
                  year: "June 2020",
                  title: "First Gateway Launch",
                  description:
                    "Released our first industrial gateway, the X5050, establishing our foundation in industrial connectivity solutions.",
                  icon: Layers,
                  product: {
                    name: "X5050 Gateway",
                    link: "/products/gateways/x5050",
                  },
                },
                {
                  year: "December 2020",
                  title: "Energy Management Platform",
                  description:
                    "Launched our comprehensive energy management platform and received an award for Best Startup in EMS, introducing the E7000 controller series.",
                  icon: Award,
                  product: {
                    name: "E7000 Controller",
                    link: "/products/controllers/e7000",
                  },
                },
                {
                  year: "February 2021",
                  title: "IoT in Space",
                  description:
                    "Successfully collaborated with ISRO and GHRCE UnitySat to launch a satellite for IoT demonstration in space, led by our CTO. The satellite was placed into low-earth orbit, marking a significant breakthrough.",
                  icon: Globe,
                  product: null,
                },
                {
                  year: "July 2021",
                  title: "Production Monitoring System",
                  description:
                    "Launched a production monitoring system for the wire drawing industry with deployments in companies like Salasar and Bansal Wire, featuring our X7700 wireless sensor.",
                  icon: Layers,
                  product: {
                    name: "X7700D Wireless Sensor",
                    link: "/products/wireless/x7700d",
                  },
                },
                {
                  year: "October 2022",
                  title: "IDT Innovations Technologies Pvt. Ltd",
                  description:
                    "Officially registered SenseLive as a private limited organization, solidifying our corporate structure and introducing the advanced E7500 controller series.",
                  icon: Shield,
                  product: {
                    name: "E7500 Controller",
                    link: "/products/controllers/e7500",
                  },
                },
                {
                  year: "March 2023",
                  title: "Water Management System",
                  description:
                    "Introduced a state-of-the-art water management system, trusted by prominent clients such as Elkem, Ceat Tyre, and several solar industries, powered by our X7800 wireless device.",
                  icon: Clock,
                  product: {
                    name: "X7800 Wireless Device",
                    link: "/products/wireless/x7800",
                  },
                },
                {
                  year: "August 2023",
                  title: "Wireless Bus Bar Monitoring",
                  description:
                    "Launched our innovative Edge8000 wireless bus bar monitoring system, revolutionizing power monitoring in industrial environments.",
                  icon: Layers,
                  product: {
                    name: "Edge8000 Bus Bar Monitor",
                    link: "/products/wireless-bus-bar/edge8000",
                  },
                },
                {
                  year: "January 2024",
                  title: "Advanced Wireless Solutions",
                  description:
                    "Expanded our wireless product line with the X7900 series, offering enhanced range and reliability for industrial applications.",
                  icon: Layers,
                  product: {
                    name: "X7900 Wireless Device",
                    link: "/products/wireless/x7900",
                  },
                },
                {
                  year: "June 2024",
                  title: "Premium Connectivity Solutions",
                  description:
                    "Introduced our flagship X9000 connectivity solution, representing the pinnacle of our industrial IoT technology with advanced features and unparalleled reliability.",
                  icon: Award,
                  product: {
                    name: "X9000 Connectivity Solution",
                    link: "/products/connectivity/x9000",
                  },
                },
                {
                  year: "January 2025",
                  title: "Satellite IoT Hardware",
                  description:
                    "Expanded our innovation by designing and developing satellite IoT hardware and delivering complete IoT solutions for global needs, cementing our position as an industry leader.",
                  icon: Globe,
                  product: null,
                },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} animate-fade-up`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <h3 className="text-xl font-bold">{milestone.title}</h3>
                    <p className="text-primary font-medium">{milestone.year}</p>
                    <p className="mt-2 text-muted-foreground">{milestone.description}</p>
                    {milestone.product && (
                      <Link
                        href={milestone.product.link}
                        className="inline-flex items-center mt-2 text-primary hover:underline"
                      >
                        View {milestone.product.name} <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    )}
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-background rounded-full border-4 border-primary flex items-center justify-center z-10 hover-lift">
                    <milestone.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Evolution */}
      <section className="w-full py-12 md:py-24 lg:py-32 animate-fade-in">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10 animate-fade-up">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Product Evolution</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Our journey of innovation has led to the development of a comprehensive suite of industrial IoT products,
              each representing a milestone in our technological advancement.
            </p>
          </div>
          <div className="relative py-8">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  year: "2020",
                  title: "Foundation",
                  products: [
                    { name: "X5050 Gateway", link: "/products/gateways/x5050" },
                    { name: "E7000 Controller", link: "/products/controllers/e7000" },
                  ],
                  description:
                    "Our initial product line established the foundation for industrial connectivity and control.",
                },
                {
                  year: "2021-2022",
                  title: "Expansion",
                  products: [
                    { name: "X7700D Wireless Sensor", link: "/products/wireless/x7700d" },
                    { name: "E7500 Controller", link: "/products/controllers/e7500" },
                    { name: "SL6002A Controller", link: "/products/controllers/sl6002a" },
                  ],
                  description: "We expanded our offerings with advanced wireless sensors and enhanced controllers.",
                },
                {
                  year: "2023",
                  title: "Innovation",
                  products: [
                    { name: "X7800D Wireless Device", link: "/products/wireless/x7800d" },
                    { name: "Edge8000 Bus Bar Monitor", link: "/products/wireless-bus-bar/edge8000" },
                    { name: "SenseBT-222", link: "/products/wireless-bus-bar/sensebt-222" },
                    { name: "SenseCT-222", link: "/products/wireless-bus-bar/sensect-222" },
                  ],
                  description:
                    "Our innovation accelerated with specialized monitoring solutions for critical applications.",
                },
                {
                  year: "2024-2025",
                  title: "Premium Solutions",
                  products: [
                    { name: "X7900 Wireless Device", link: "/products/wireless/x7900" },
                    { name: "X9000 Connectivity Solution", link: "/products/connectivity/x9000" },
                    { name: "X7400D Advanced Device", link: "/products/connectivity/x7400d" },
                  ],
                  description:
                    "We introduced our premium product line, representing the pinnacle of industrial IoT technology.",
                },
              ].map((era, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-lg shadow-sm hover-lift animate-fade-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{era.title}</h3>
                  <p className="text-primary font-medium mb-3">{era.year}</p>
                  <p className="text-muted-foreground mb-4">{era.description}</p>
                  <ul className="space-y-2">
                    {era.products.map((product, idx) => (
                      <li key={idx}>
                        <Link href={product.link} className="inline-flex items-center text-primary hover:underline">
                          {product.name} <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 animate-fade-in">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10 animate-fade-up">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Manufacturing Excellence</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Our state-of-the-art manufacturing facilities ensure the highest quality standards in every product we
              deliver.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-background p-6 rounded-lg shadow-sm animate-fade-up">
              <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="R&D Facility"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">R&D Facility</h3>
              <p className="text-muted-foreground">
                Established in 2020, our R&D center is equipped with advanced testing and prototyping equipment,
                enabling rapid development and validation of new IoT technologies.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm animate-fade-up delay-100">
              <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Production Line"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Production Line</h3>
              <p className="text-muted-foreground">
                Our production facility, established in 2022, features automated assembly lines and rigorous quality
                control processes, ensuring consistent, high-quality manufacturing of our IoT devices.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm animate-fade-up delay-200">
              <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Testing Laboratory"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Testing Laboratory</h3>
              <p className="text-muted-foreground">
                Our comprehensive testing laboratory, expanded in 2023, subjects every product to rigorous environmental
                and performance testing, ensuring reliability in the most demanding industrial conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground animate-fade-in">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4 animate-fade-up">
            Join Us on Our Journey of Innovation
          </h2>
          <p className="text-primary-foreground/90 md:text-xl max-w-3xl mx-auto mb-8 animate-fade-up delay-100">
            Whether you're looking to partner with us, join our team, or implement our solutions, we'd love to hear from
            you. Discover how SenseLive can transform your industrial operations with our cutting-edge IoT technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up delay-200">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="font-medium transition-all hover:shadow-md">
                Contact Us
              </Button>
            </Link>
            <Link href="/products">
            <Button size="lg" variant="secondary" className="font-medium transition-all hover:shadow-md">
                Explore Our Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

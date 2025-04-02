import Image from "next/image"
import Link from "next/link"
import { Award, Calendar, Clock, Globe, Layers, Users } from "lucide-react"

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
                description="SenseLive is a leading provider of IoT solutions, dedicated to transforming industries through innovative hardware and software solutions. Our mission is to empower businesses with reliable, scalable, and user-centric IoT technologies."
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
                  src="/placeholder.svg?height=400&width=600"
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
                  src="/placeholder.svg?height=500&width=500"
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
                Founded in 2010, SenseLive began with a vision to bridge the gap between industrial hardware and modern
                software solutions. What started as a small team of engineers has grown into a global company serving
                clients across multiple industries.
              </p>
              <p className="text-muted-foreground">
                Our journey has been marked by continuous innovation, strategic partnerships, and a relentless focus on
                customer success. From our first Modbus gateway to our comprehensive IoT ecosystem today, we've
                maintained our commitment to quality, reliability, and cutting-edge technology.
              </p>
              <p className="text-muted-foreground">
                Today, SenseLive solutions are deployed in over 30 countries, helping businesses optimize operations,
                reduce costs, and achieve their sustainability goals.
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
              Guided by our core principles, we strive to create technology that makes a meaningful difference.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div
              className="bg-background p-6 rounded-lg shadow-sm hover-lift animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously push the boundaries of what's possible in IoT, investing in R&D to develop solutions
                that address emerging challenges.
              </p>
            </div>
            <div
              className="bg-background p-6 rounded-lg shadow-sm hover-lift animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <p className="text-muted-foreground">
                We place our customers at the center of everything we do, designing solutions that address their
                specific needs and challenges.
              </p>
            </div>
            <div
              className="bg-background p-6 rounded-lg shadow-sm hover-lift animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to the highest standards of quality in our products, services, and customer support.
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
                name: "David Chen",
                role: "Chief Executive Officer",
                bio: "With over 20 years of experience in industrial automation, David leads SenseLive's strategic vision and global expansion.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Emily Rodriguez",
                role: "Chief Technology Officer",
                bio: "Emily drives SenseLive's technology roadmap, focusing on innovation and scalable IoT architecture.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Michael Wong",
                role: "Chief Operations Officer",
                bio: "Michael oversees global operations, ensuring efficient delivery of SenseLive solutions to customers worldwide.",
                image: "/placeholder.svg?height=300&width=300",
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
              Key milestones in SenseLive's evolution as an IoT leader.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>
            <div className="space-y-12">
              {[
                {
                  year: "2010",
                  title: "Company Founded",
                  description: "SenseLive was established with a focus on industrial connectivity solutions.",
                  icon: Calendar,
                },
                {
                  year: "2013",
                  title: "First Product Launch",
                  description:
                    "Released our flagship Modbus Gateway, setting new standards for industrial connectivity.",
                  icon: Layers,
                },
                {
                  year: "2016",
                  title: "International Expansion",
                  description: "Opened offices in Asia and Europe to better serve our growing global customer base.",
                  icon: Globe,
                },
                {
                  year: "2018",
                  title: "IoT Platform Launch",
                  description:
                    "Introduced our comprehensive IoT platform, integrating hardware and software solutions.",
                  icon: Clock,
                },
                {
                  year: "2021",
                  title: "Industry Recognition",
                  description: "Received multiple industry awards for innovation and excellence in IoT solutions.",
                  icon: Award,
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

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground animate-fade-in">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4 animate-fade-up">
            Join Us on Our Journey
          </h2>
          <p className="text-primary-foreground/90 md:text-xl max-w-3xl mx-auto mb-8 animate-fade-up delay-100">
            Whether you're looking to partner with us, join our team, or implement our solutions, we'd love to hear from
            you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up delay-200">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="font-medium transition-all hover:shadow-md">
                Contact Us
              </Button>
            </Link>
            <Link href="/careers">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-medium transition-all"
              >
                Explore Careers
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


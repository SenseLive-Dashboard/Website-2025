import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { SolutionCard } from "@/components/solution-card"

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore SenseLive's comprehensive IoT solutions for energy management, water management, digital checksheets, and production monitoring.",
}

export default function SolutionsPage() {
  const solutions = [
    {
      id: "ems",
      name: "Energy Management System",
      description:
        "Comprehensive energy monitoring and management solution that helps businesses reduce energy consumption, optimize operations, and meet sustainability goals.",
      image: "/solutions/ems/ems1.png",
      badge: "Energy Management",
    },
    {
      id: "water-management",
      name: "Water Management System",
      description:
        "Intelligent water monitoring and management solution that helps organizations optimize water usage, detect leaks, and ensure water quality.",
      image: "/solutions/wms/wms1.png",
      badge: "Water Management",
    },
    {
      id: "digital-checksheet",
      name: "Digital Checksheet",
      description:
        "Paperless inspection and quality control solution that streamlines processes, ensures compliance, and improves operational efficiency.",
      image: "/solutions/checklist/checklist1.png",
      badge: "Digital Transformation",
    },
    {
      id: "production-monitoring",
      name: "Production Monitoring",
      description:
        "End-to-end production monitoring solution that provides real-time visibility, improves efficiency, and optimizes manufacturing processes.",
      image: "/solutions/production/production1.png",
      badge: "Manufacturing Excellence",
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="w-full py-20  bg-muted/30">   {/*md:py-24 lg:py-32 */}
        <div className="container px-4 md:px-6">
          <PageHeader
            title="Comprehensive IoT Solutions"
            description="End-to-end solutions designed to transform your operations, improve efficiency, and drive sustainable growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {solutions.map((solution) => (
              <SolutionCard
                key={solution.id}
                id={solution.id}
                name={solution.name}
                description={solution.description}
                image={solution.image}
                badge={solution.badge}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose SenseLive Solutions</h2>
              <p className="text-muted-foreground md:text-xl">
                Our solutions are designed with your business needs in mind, combining cutting-edge technology with
                practical implementation to deliver real results.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">End-to-End Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      Seamlessly connect hardware, software, and analytics for a complete solution.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Scalable Architecture</h4>
                    <p className="text-sm text-muted-foreground">
                      Start small and expand as your needs grow, without replacing your initial investment.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Industry Expertise</h4>
                    <p className="text-sm text-muted-foreground">
                      Solutions designed with deep understanding of industry-specific challenges and requirements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Rapid ROI</h4>
                    <p className="text-sm text-muted-foreground">
                      Designed for quick implementation and fast return on investment through operational improvements.
                    </p>
                  </div>
                </li>
              </ul>

              <Link href="/contact">
                <Button className="gap-2">
                  Discuss Your Requirements
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-md opacity-30"></div>
              <Image
                src="/home/IIOT.png"
                alt="SenseLive Solutions"
                width={700}
                height={500}
                className="relative rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Solution Process</h2>
            <p className="text-muted-foreground md:text-xl mt-4 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful implementation and long-term value from your IoT
              solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We work with you to understand your specific challenges, goals, and requirements.",
                icon: "/solutions/wms/wms1.png",
              },
              {
                step: "2",
                title: "Solution Design",
                description:
                  "Our experts design a tailored solution combining the right hardware, software, and services.",
                icon: "/placeholder.svg?height=40&width=40",
              },
              {
                step: "3",
                title: "Implementation",
                description: "Professional installation, configuration, and integration with your existing systems.",
                icon: "/placeholder.svg?height=40&width=40",
              },
              {
                step: "4",
                title: "Ongoing Support",
                description: "Continuous monitoring, maintenance, and optimization to ensure long-term success.",
                icon: "/placeholder.svg?height=40&width=40",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-background rounded-lg p-6 border h-full">
                  <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {step.step}
                  </div>
                  <div className="pt-6">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {index < 3 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-border z-10"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Ready to Transform Your Operations?</h2>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto mb-8">
            Contact our team of experts to discuss how SenseLive solutions can address your specific challenges and help
            you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/inquiry">
              <Button size="lg" className="font-medium">
                Request a Consultation
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
  )
}


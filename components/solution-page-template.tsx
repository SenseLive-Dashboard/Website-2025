import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface SolutionPageTemplateProps {
  title: string
  description: string
  badge: string
  heroImage: string
  features: {
    icon: ReactNode
    title: string
    description: string
  }[]
  architectureImage: string
  architectureSteps: {
    title: string
    description: string
  }[]
  benefitTabs: {
    id: string
    label: string
    title: string
    description: string
    bulletPoints: string[]
    image: string
  }[]
  caseStudies: {
    company: string
    industry: string
    result: string
    description: string
    image: string
  }[]
  resources: {
    title: string
    description: string
    type: string
    icon: ReactNode
    link: string
  }[]
}

export function SolutionPageTemplate({
  title,
  description,
  badge,
  heroImage,
  features,
  architectureImage,
  architectureSteps,
  benefitTabs,
  // caseStudies,
  resources,
}: SolutionPageTemplateProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-senselive text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4 animate-fade-up">
              <Badge className="bg-white/20 text-white hover:bg-white/30 transition-colors">{badge}</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">{title}</h1>
              <p className="text-white/90 md:text-xl max-w-[600px]">{description}</p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/inquiry">
                  <Button
                    size="lg"
                    className="w-full min-[400px]:w-auto font-medium bg-white text-primary hover:bg-white/90 transition-colors"
                  >
                    Request a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full min-[400px]:w-auto font-medium border-white text-white hover:bg-white/10 transition-colors"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-fade-up delay-200">
              <div className="relative">
                <div className="absolute -inset-1 bg-white/20 rounded-lg blur-md opacity-50"></div>
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={heroImage || "/placeholder.svg"}
                    alt={title}
                    width={700}
                    height={500}
                    className="relative rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Key Features</h2>
            <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Our {title} provides a comprehensive suite of features designed to help you monitor, analyze, and optimize
              your operations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {features.map((feature, index) => (
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

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">How It Works</h2>
            <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Our {title} is designed to be easy to implement and use, providing immediate value to your organization.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative animate-fade-up">
              <div className="absolute -inset-1 bg-gradient-senselive rounded-lg blur-md opacity-30"></div>
              <Image
                src={architectureImage || "/placeholder.svg"}
                alt={`${title} Architecture`}
                width={700}
                height={500}
                className="relative rounded-lg object-cover shadow-premium"
              />
            </div>
            <div className="space-y-6 animate-fade-up delay-200">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">System Architecture</h3>
                <p className="text-muted-foreground">
                  Our {title} consists of three main components: data collection hardware, cloud-based analytics
                  platform, and user interface.
                </p>
              </div>
              <ul className="space-y-4">
                {architectureSteps.map((step, index) => (
                  <li key={step.title} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href={`/solutions/${title.toLowerCase().replace(/\s+/g, "-")}/architecture`}>
                <Button className="gap-1 transition-all group">
                  Learn More About Architecture
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Benefits</h2>
            <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Implementing our {title} provides numerous benefits for your organization.
            </p>
          </div>

          <Tabs defaultValue={benefitTabs[0].id} className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent overflow-x-auto flex-nowrap">
              {benefitTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3 text-muted-foreground data-[state=active]:text-foreground"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {benefitTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="pt-6">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{tab.title}</h3>
                    <p className="text-muted-foreground">{tab.description}</p>
                    <ul className="space-y-2">
                      {tab.bulletPoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative">
                    <Image
                      src={tab.image || "/placeholder.svg"}
                      alt={tab.title}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Case Studies */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Success Stories</h2>
            <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
              See how our customers have achieved significant improvements with our {title}.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((caseStudy, index) => (
              <Card key={index} className="overflow-hidden hover-lift">
                <div className="aspect-video relative">
                  <Image
                    src={caseStudy.image || "/placeholder.svg"}
                    alt={caseStudy.company}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <Badge className="bg-primary text-white mb-2">{caseStudy.industry}</Badge>
                      <h3 className="text-xl font-bold">{caseStudy.company}</h3>
                      <p className="text-white/80 font-medium">{caseStudy.result}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-muted-foreground">{caseStudy.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Link href={`/case-studies/${caseStudy.company.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button variant="outline" className="w-full">
                      Read Case Study
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-senselive text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4 animate-fade-up">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-white/90 md:text-xl max-w-3xl mx-auto mb-8 animate-fade-up delay-100">
            Contact our team to discuss how our {title} can help your organization reduce costs, improve sustainability,
            and enhance operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up delay-200">
            <Link href={`/inquiry?solution=${title.toLowerCase().replace(/\s+/g, "-")}`}>
              <Button size="lg" className="font-medium bg-white text-primary hover:bg-white/90 transition-colors">
                Request a Demo
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 font-medium transition-colors"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


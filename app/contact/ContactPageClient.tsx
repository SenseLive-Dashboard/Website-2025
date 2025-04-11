"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { Input } from "@/components/ui/input"

export default function ContactPageClient() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <PageHeader
            title="Contact Us"
            description="Get in touch with our team for sales inquiries, technical support, or general information about SenseLive products and solutions."
          />

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Phone</h3>
                  <p className="text-muted-foreground mt-2">
                    Call us for immediate assistance with sales or support inquiries.
                  </p>
                  <p className="font-medium mt-2">+91 9604070622 / +91 8408058531</p>
                  <p className="text-sm text-muted-foreground">Monday - Saturday: 9:30 AM - 10:30 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Email</h3>
                  <p className="text-muted-foreground mt-2">Send us an email and we'll respond within 24 hours.</p>
                  <div className="space-y-1 mt-2">
                    <p className="font-medium">General & Sales: info@senselive.io</p>
                    <p className="font-medium">Support: support@senselive.io</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Office Location</h3>
                  <p className="text-muted-foreground mt-2">
                    Visit our headquarters for in-person meetings and demonstrations.
                  </p>
                  <p className="font-medium mt-2">
                    G.H Raisoni Business Incubation Foundation CRPF Gate 3, Hingna Road,
                    <br />
                    NAGPUR, Maharashtra
                    <br />
                    India - 440012
                  </p>
                </div>
              </div>

              <div className="relative mt-8 h-[300px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=300&width=600" alt="Map location" fill className="object-cover" />
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()

                  // Get form elements
                  const form = e.currentTarget
                  const nameInput = form.querySelector("#name") as HTMLInputElement
                  const emailInput = form.querySelector("#email") as HTMLInputElement
                  const subjectInput = form.querySelector("#subject") as HTMLInputElement
                  const messageInput = form.querySelector("#message") as HTMLTextAreaElement

                  // Basic validation
                  if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
                    alert("Please fill in all required fields.")
                    return
                  }

                  // Email validation
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                  if (!emailRegex.test(emailInput.value)) {
                    alert("Please enter a valid email address.")
                    return
                  }

                  // If validation passes
                  alert("Thank you for your message. We'll get back to you soon!")
                  form.reset()
                }}
              >
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone (optional)
                  </label>
                  <Input id="phone" placeholder="Your phone number" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Message subject" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Global Presence</h2>
            <p className="text-muted-foreground md:text-xl max-w-[800px]">
              SenseLive has offices and partners around the world to serve our global customer base.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                region: "India",
                office: "Nagpur, India (Headquarters)",
                address: "268, BHAMTEE COLONEY, NAGPUR, Maharashtra, India - 440022",
                phone: "+91 9604070622 / +91 8408058531",
                email: "info@senselive.io",
              },
              {
                region: "Europe",
                office: "Berlin, Germany",
                address: "Technologiepark 15, 10587 Berlin, Germany",
                phone: "+49 30 1234567",
                email: "info@senselive.io",
              },
              {
                region: "Asia Pacific",
                office: "Singapore",
                address: "80 Raffles Place, #25-01 UOB Plaza, Singapore 048624",
                phone: "+65 6123 4567",
                email: "info@senselive.io",
              },
            ].map((office, index) => (
              <Card key={index} className="border-muted">
                <CardHeader>
                  <CardTitle>{office.region}</CardTitle>
                  <CardDescription>{office.office}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">{office.address}</p>
                  <p className="text-sm font-medium">Phone: {office.phone}</p>
                  <p className="text-sm font-medium">Email: {office.email}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground md:text-lg max-w-[800px] mx-auto mb-8">
            Contact our sales team to discuss your specific requirements and how SenseLive can help you implement a
            tailored IoT solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/inquiry">
              <Button size="lg" className="font-medium">
                Request a Quote
              </Button>
            </Link>
            <Link href="/solutions">
              <Button size="lg" variant="outline" className="font-medium">
                Explore Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


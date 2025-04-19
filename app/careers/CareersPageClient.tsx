"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Clock, Globe, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"

export default function CareersPageClient() {
  // Mock job openings
  const jobOpenings = [
    {
      id: "senior-hardware-engineer",
      title: "Senior Hardware Engineer",
      department: "Engineering",
      location: "Boston, MA",
      type: "Full-time",
      description: "Design and develop innovative IoT hardware solutions for industrial applications.",
    },
    {
      id: "software-developer",
      title: "Software Developer",
      department: "Engineering",
      location: "Boston, MA",
      type: "Full-time",
      description: "Develop and maintain software for our IoT platforms and solutions.",
    },
    {
      id: "product-manager",
      title: "Product Manager",
      department: "Product",
      location: "Berlin, Germany",
      type: "Full-time",
      description: "Lead the development and launch of new IoT products and solutions.",
    },
    {
      id: "sales-engineer",
      title: "Sales Engineer",
      department: "Sales",
      location: "Singapore",
      type: "Full-time",
      description: "Provide technical expertise and support to our sales team and customers.",
    },
    {
      id: "marketing-specialist",
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Boston, MA",
      type: "Full-time",
      description: "Develop and execute marketing strategies for our IoT products and solutions.",
    },
    {
      id: "customer-success-manager",
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description: "Ensure customer satisfaction and drive adoption of our IoT solutions.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-24 bg-muted/30 animate-fade-in">
        <div className="container px-4 md:px-6">
          <PageHeader
            title="Join Our Team"
            description="Be part of a team that's transforming industries through innovative IoT solutions. Explore current opportunities and grow your career with SenseLive."
          />

          <div className="grid gap-8 lg:grid-cols-2 items-center mt-12">
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-2xl font-bold tracking-tight">Why Work With Us</h2>
              <p className="text-muted-foreground">
                At SenseLive, we're passionate about creating technology that makes a meaningful difference. We offer a
                collaborative environment where innovation thrives, and every team member has the opportunity to
                contribute to our mission of transforming industries through IoT.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Innovation-Driven Culture</h4>
                    <p className="text-sm text-muted-foreground">
                      We encourage creative thinking and provide resources to bring new ideas to life.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Professional Growth</h4>
                    <p className="text-sm text-muted-foreground">
                      Continuous learning opportunities and clear career advancement paths.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Global Impact</h4>
                    <p className="text-sm text-muted-foreground">
                      Our solutions are deployed worldwide, helping businesses optimize operations and achieve
                      sustainability goals.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Competitive Benefits</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive health coverage, retirement plans, flexible work arrangements, and more.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative animate-fade-up delay-200">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-md opacity-30"></div>
              <Image
                src="/about/about2.png"
                alt="SenseLive Team"
                width={700}
                height={500}
                className="relative rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 animate-fade-in">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Current Openings</h2>
            <p className="text-muted-foreground md:text-xl max-w-[800px]">
              Explore our current job opportunities and find your next career move.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobOpenings.map((job, index) => (
              <Card
                key={job.id}
                className="hover-lift border-muted hover:border-primary/50 transition-all animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <CardDescription>{job.department}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.type}
                  </div>
                  <p className="text-sm text-muted-foreground">{job.description}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/careers/${job.id}`}>
                    <Button
                      variant="outline"
                      className="w-full gap-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="internship-program" className="w-full py-12 md:py-24 lg:py-32 bg-background animate-fade-in">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">6-Month Internship Program</h2>
            <p className="text-muted-foreground md:text-xl max-w-[800px]">
              Gain valuable industry experience and kickstart your career with our comprehensive internship program.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-4">Internship Application</h3>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  // Basic validation
                  const form = e.currentTarget
                  const nameInput = form.querySelector("#intern-name") as HTMLInputElement
                  const emailInput = form.querySelector("#intern-email") as HTMLInputElement
                  const phoneInput = form.querySelector("#intern-phone") as HTMLInputElement
                  const educationInput = form.querySelector("#intern-education") as HTMLInputElement
                  const areaSelect = form.querySelector("#intern-area") as HTMLSelectElement
                  const startInput = form.querySelector("#intern-start") as HTMLInputElement
                  const resumeInput = form.querySelector("#intern-resume") as HTMLInputElement
                  const messageInput = form.querySelector("#intern-message") as HTMLTextAreaElement
                  const termsCheckbox = form.querySelector("#intern-terms") as HTMLInputElement

                  // Check required fields
                  if (
                    !nameInput.value ||
                    !emailInput.value ||
                    !phoneInput.value ||
                    !educationInput.value ||
                    !areaSelect.value ||
                    !startInput.value ||
                    !resumeInput.files?.length ||
                    !messageInput.value ||
                    !termsCheckbox.checked
                  ) {
                    alert("Please fill in all required fields and accept the terms.")
                    return
                  }

                  // Email validation
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                  if (!emailRegex.test(emailInput.value)) {
                    alert("Please enter a valid email address.")
                    return
                  }

                  // File size validation (max 5MB)
                  if (resumeInput.files && resumeInput.files[0].size > 5 * 1024 * 1024) {
                    alert("Resume file size must be less than 5MB.")
                    return
                  }

                  // If all validation passes
                  alert("Thank you for your application! We will review your information and contact you soon.")
                  form.reset()
                }}
              >
                <div className="grid gap-2">
                  <label htmlFor="intern-name" className="text-sm font-medium">
                    Full Name *
                  </label>
                  <input
                    id="intern-name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="intern-email" className="text-sm font-medium">
                    Email *
                  </label>
                  <input
                    id="intern-email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="intern-phone" className="text-sm font-medium">
                    Phone *
                  </label>
                  <input
                    id="intern-phone"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your phone number"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="intern-education" className="text-sm font-medium">
                    Educational Background *
                  </label>
                  <input
                    id="intern-education"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="University/College and Degree"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="intern-area" className="text-sm font-medium">
                    Area of Interest *
                  </label>
                  <select
                    id="intern-area"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    <option value="">Select an area</option>
                    <option value="hardware">Hardware Engineering</option>
                    <option value="software">Software Development</option>
                    <option value="iot">IoT Solutions</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="intern-start" className="text-sm font-medium">
                    Preferred Start Date *
                  </label>
                  <input
                    id="intern-start"
                    type="date"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="intern-resume" className="text-sm font-medium">
                    Resume/CV *
                  </label>
                  <input
                    id="intern-resume"
                    type="file"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                  <p className="text-xs text-muted-foreground">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="intern-message" className="text-sm font-medium">
                    Why do you want to intern at SenseLive? *
                  </label>
                  <textarea
                    id="intern-message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us why you're interested in interning with us and what you hope to learn"
                    required
                  ></textarea>
                </div>
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="intern-terms"
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                    required
                  />
                  <label htmlFor="intern-terms" className="text-sm">
                    I agree to the processing of my personal data according to the{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/30 animate-fade-in">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-2xl font-bold tracking-tight">Our Culture</h2>
              <p className="text-muted-foreground">
                At SenseLive, we foster a culture of innovation, collaboration, and continuous learning. We believe that
                diverse perspectives drive better solutions, and we're committed to creating an inclusive environment
                where everyone can thrive.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Collaborative Teams</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Global Opportunities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Work-Life Balance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Continuous Learning</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-fade-up delay-200">
              <Image
                src="/about/about9.png"
                alt="Team Collaboration"
                width={250}
                height={250}
                className="rounded-lg object-cover"
              />
              <Image
                src="/about/about10.png"
                alt="Office Environment"
                width={250}
                height={250}
                className="rounded-lg object-cover"
              />
              <Image
                src="/about/about11.png"
                alt="Team Event"
                width={250}
                height={250}
                className="rounded-lg object-cover"
              />
              <Image
                src="/about/about12.png"
                alt="Innovation Workshop"
                width={250}
                height={250}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground animate-fade-in">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Don't See a Perfect Fit?</h2>
          <p className="text-primary-foreground/90 md:text-xl max-w-3xl mx-auto mb-8">
            We're always looking for talented individuals to join our team. Send us your resume and let us know how you
            can contribute to SenseLive's mission.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#internship-program">
              <Button size="lg" variant="secondary" className="font-medium">
                Apply for Internship
              </Button>
            </Link>
            <Link href="/about">
            <Button size="lg" variant="secondary" className="font-medium">
                Learn more About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


"use client"

import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function InquiryClientPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-15 bg-muted/30">
        <div className="container px-4 md:px-6">
          <PageHeader
            title="Request a Quote"
            description="Tell us about your project requirements and our team will prepare a customized quote for you."
          />

          <div className="grid md:grid-cols-3 gap-12 mt-12">
            <div className="md:col-span-2">
              <div className="bg-background p-6 rounded-lg border">
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault()

                    // Get form elements
                    const form = e.currentTarget
                    const firstNameInput = form.querySelector("#first-name") as HTMLInputElement
                    const lastNameInput = form.querySelector("#last-name") as HTMLInputElement
                    const emailInput = form.querySelector("#email") as HTMLInputElement
                    const phoneInput = form.querySelector("#phone") as HTMLInputElement
                    const companyInput = form.querySelector("#company") as HTMLInputElement
                    const jobTitleInput = form.querySelector("#job-title") as HTMLInputElement
                    const projectDescInput = form.querySelector("#project-description") as HTMLTextAreaElement
                    const privacyCheckbox = form.querySelector("#privacy-policy") as HTMLInputElement

                    // Basic validation
                    if (
                      !firstNameInput.value ||
                      !lastNameInput.value ||
                      !emailInput.value ||
                      !phoneInput.value ||
                      !companyInput.value ||
                      !jobTitleInput.value ||
                      !projectDescInput.value ||
                      !privacyCheckbox.checked
                    ) {
                      alert("Please fill in all required fields and accept the privacy policy.")
                      return
                    }

                    // Email validation
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    if (!emailRegex.test(emailInput.value)) {
                      alert("Please enter a valid email address.")
                      return
                    }

                    // Phone validation - basic check for minimum length
                    if (phoneInput.value.replace(/\D/g, "").length < 10) {
                      alert("Please enter a valid phone number.")
                      return
                    }

                    // If validation passes
                    alert(
                      "Thank you for your inquiry. Our team will prepare a customized quote for you and contact you shortly.",
                    )
                    form.reset()
                  }}
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold">Contact Information</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="first-name">First Name *</Label>
                        <Input id="first-name" placeholder="First name" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="last-name">Last Name *</Label>
                        <Input id="last-name" placeholder="Last name" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="Email address" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input id="phone" placeholder="Phone number" required />
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input id="company" placeholder="Company name" required />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="job-title">Job Title *</Label>
                      <Input id="job-title" placeholder="Your job title" required />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold">Project Information</h3>

                    <div className="grid gap-2">
                      <Label>What are you interested in? *</Label>
                      <RadioGroup defaultValue="both">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="hardware" id="hardware" />
                          <Label htmlFor="hardware">Hardware Products</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="solutions" id="solutions" />
                          <Label htmlFor="solutions">IoT Solutions</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="both" id="both" />
                          <Label htmlFor="both">Both Hardware and Solutions</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="grid gap-2">
                      <Label>Which products are you interested in? (Select all that apply)</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="modbus-gateways" />
                          <Label htmlFor="modbus-gateways">Modbus Gateways</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="remote-io" />
                          <Label htmlFor="remote-io">Remote IO Controllers</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="4g-5g" />
                          <Label htmlFor="4g-5g">4G/5G Solutions</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="wifi" />
                          <Label htmlFor="wifi">WiFi Solutions</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="optical-fiber" />
                          <Label htmlFor="optical-fiber">Optical Fiber</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="lora-zigbee" />
                          <Label htmlFor="lora-zigbee">LoRa/ZigBee Devices</Label>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label>Which solutions are you interested in? (Select all that apply)</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="ems" />
                          <Label htmlFor="ems">Energy Management System</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="water-management" />
                          <Label htmlFor="water-management">Water Management</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="digital-checksheet" />
                          <Label htmlFor="digital-checksheet">Digital Checksheet</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="production-monitoring" />
                          <Label htmlFor="production-monitoring">Production Monitoring</Label>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="industry">Industry *</Label>
                      <Select>
                        <SelectTrigger id="industry">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="energy">Energy & Utilities</SelectItem>
                          <SelectItem value="oil-gas">Oil & Gas</SelectItem>
                          <SelectItem value="water">Water & Wastewater</SelectItem>
                          <SelectItem value="building">Building Automation</SelectItem>
                          <SelectItem value="agriculture">Agriculture</SelectItem>
                          <SelectItem value="transportation">Transportation & Logistics</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="project-timeline">Project Timeline *</Label>
                      <Select>
                        <SelectTrigger id="project-timeline">
                          <SelectValue placeholder="Select your timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (0-3 months)</SelectItem>
                          <SelectItem value="short">Short-term (3-6 months)</SelectItem>
                          <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                          <SelectItem value="long">Long-term (12+ months)</SelectItem>
                          <SelectItem value="planning">Just planning</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="project-description">Project Description *</Label>
                      <Textarea
                        id="project-description"
                        placeholder="Please describe your project, requirements, and any specific questions you have."
                        className="min-h-[150px]"
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="budget">Estimated Budget (USD)</Label>
                      <Select>
                        <SelectTrigger id="budget">
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Under $10,000</SelectItem>
                          <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                          <SelectItem value="250k-plus">$250,000+</SelectItem>
                          <SelectItem value="undecided">Undecided</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="privacy-policy" className="mt-1" />
                      <Label htmlFor="privacy-policy" className="text-sm">
                        I agree to the processing of my personal data according to the{" "}
                        <Link href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-4">Why Choose SenseLive</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Industry-leading IoT hardware and solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Customized solutions tailored to your specific needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Comprehensive support from planning to implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Proven track record with global enterprise clients</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Scalable solutions that grow with your business</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>If you have any questions before submitting your request:</p>
                  <p>
                    Email:{" "}
                    <Link href="mailto:info@senselive.io" className="text-primary hover:underline">
                      info@senselive.io
                    </Link>
                  </p>
                  <p>Phone: +91 9604070622 / +91 8408058531</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


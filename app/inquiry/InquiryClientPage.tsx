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
import { useState } from "react"

export default function InquiryClientPage() {

  const [status, setStatus] = useState(''); // '', 'submitting', 'success', 'error'
    const [errorMessage, setErrorMessage] = useState('');

    // Optional: State for controlled Selects if needed for default values or resets
    const [interestType, setInterestType] = useState('both'); // Matches default RadioGroup value
    const [industry, setIndustry] = useState('');
    const [timeline, setTimeline] = useState('');
    const [budget, setBudget] = useState('');


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        const form = e.currentTarget;
        const formData = new FormData(form);

        // --- Optional: Client-Side Basic Validation (Server validation is primary) ---
        const email = formData.get('email');
        const privacy = formData.get('privacy-policy'); // Checkbox value 'on' if checked
        if (!email || !privacy /* Add checks for other truly essential fields if desired */) {
             setErrorMessage("Please fill in required fields and accept the privacy policy.");
             setStatus('error');
             return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email as string)) {
            setErrorMessage("Please enter a valid email address.");
            setStatus('error');
            return;
        }
        // --- End Client Validation ---


        try {
            // --- Send Data using Fetch API ---
            // !! Point to your new API endpoint !!
            const response = await fetch("/api/inquiry", {
                method: 'POST',
                body: formData, // Send FormData directly
                // No 'Content-Type' header needed!
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('success');
                form.reset(); // Reset form fields
                // Reset controlled state if used
                setInterestType('both');
                setIndustry('');
                setTimeline('');
                setBudget('');
            } else {
                setErrorMessage(result.message || "Submission failed. Please try again.");
                setStatus('error');
            }
        } catch (error: any) {
             if (error instanceof SyntaxError) { // Handle cases where response isn't JSON
                 console.error("Failed to parse JSON response:", error);
                 setErrorMessage("Received an invalid response from the server.");
             } else {
                 console.error("Submission error:", error);
                 setErrorMessage("Network error or server issue. Please try again.");
             }
            setStatus('error');
        }
    };

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
            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* --- Contact Information Section --- */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Contact Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="grid gap-1.5">
                            <Label htmlFor="first-name">First Name *</Label>
                            <Input id="first-name" name="first-name" placeholder="First name" required />
                        </div>
                        <div className="grid gap-1.5">
                            <Label htmlFor="last-name">Last Name *</Label>
                            <Input id="last-name" name="last-name" placeholder="Last name" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="grid gap-1.5">
                            <Label htmlFor="email">Email *</Label>
                            <Input id="email" name="email" type="email" placeholder="Email address" required />
                        </div>
                        <div className="grid gap-1.5">
                            <Label htmlFor="phone">Phone *</Label>
                             {/* Use type="tel" for better mobile experience */}
                            <Input id="phone" name="phone" type="tel" placeholder="Phone number" required />
                        </div>
                    </div>
                    <div className="grid gap-1.5">
                        <Label htmlFor="company">Company *</Label>
                        <Input id="company" name="company" placeholder="Company name" required />
                    </div>
                    <div className="grid gap-1.5">
                        <Label htmlFor="job-title">Job Title *</Label>
                        <Input id="job-title" name="job-title" placeholder="Your job title" required />
                    </div>
                </div>

                {/* --- Project Information Section --- */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Project Information</h3>

                    {/* Interest Type (Radio Group) */}
                    <div className="grid gap-2">
                        <Label>What are you interested in? *</Label>
                        {/* Add name="interest-type" */}
                        <RadioGroup name="interest-type" required defaultValue={interestType} onValueChange={setInterestType}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="hardware" id="interest-hardware" />
                                <Label htmlFor="interest-hardware">Hardware Products</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="solutions" id="interest-solutions" />
                                <Label htmlFor="interest-solutions">IoT Solutions</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="both" id="interest-both" />
                                <Label htmlFor="interest-both">Both Hardware and Solutions</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Products Interested In (Checkboxes) */}
                    <div className="grid gap-2">
                        <Label>Which products are you interested in? (Select all that apply)</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {/* Add name="product-..." to each checkbox */}
                            <div className="flex items-center space-x-2">
                                <Checkbox id="product-modbus-gateways" name="product-modbus-gateways" />
                                <Label htmlFor="product-modbus-gateways">Modbus Gateways</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="product-remote-io" name="product-remote-io" />
                                <Label htmlFor="product-remote-io">Remote IO Controllers</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="product-4g-5g" name="product-4g-5g" />
                                <Label htmlFor="product-4g-5g">4G/5G Solutions</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="product-wifi" name="product-wifi" />
                                <Label htmlFor="product-wifi">WiFi Solutions</Label>
                            </div>
                             <div className="flex items-center space-x-2">
                                 <Checkbox id="product-optical-fiber" name="product-optical-fiber" />
                                 <Label htmlFor="product-optical-fiber">Optical Fiber</Label>
                             </div>
                             <div className="flex items-center space-x-2">
                                 <Checkbox id="product-lora-zigbee" name="product-lora-zigbee" />
                                 <Label htmlFor="product-lora-zigbee">LoRa/ZigBee Devices</Label>
                             </div>
                        </div>
                    </div>

                     {/* Solutions Interested In (Checkboxes) */}
                    <div className="grid gap-2">
                        <Label>Which solutions are you interested in? (Select all that apply)</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                             {/* Add name="solution-..." to each checkbox */}
                             <div className="flex items-center space-x-2">
                                 <Checkbox id="solution-ems" name="solution-ems" />
                                 <Label htmlFor="solution-ems">Energy Management System</Label>
                             </div>
                             <div className="flex items-center space-x-2">
                                 <Checkbox id="solution-water-management" name="solution-water-management" />
                                 <Label htmlFor="solution-water-management">Water Management</Label>
                             </div>
                             <div className="flex items-center space-x-2">
                                 <Checkbox id="solution-digital-checksheet" name="solution-digital-checksheet" />
                                 <Label htmlFor="solution-digital-checksheet">Digital Checksheet</Label>
                             </div>
                             <div className="flex items-center space-x-2">
                                 <Checkbox id="solution-production-monitoring" name="solution-production-monitoring" />
                                 <Label htmlFor="solution-production-monitoring">Production Monitoring</Label>
                             </div>
                        </div>
                    </div>

                    {/* Industry (Select) */}
                    <div className="grid gap-1.5">
                        <Label htmlFor="industry">Industry *</Label>
                        {/* Add name="industry" */}
                        <Select name="industry" required value={industry} onValueChange={setIndustry}>
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

                    {/* Project Timeline (Select) */}
                    <div className="grid gap-1.5">
                        <Label htmlFor="project-timeline">Project Timeline *</Label>
                         {/* Add name="project-timeline" */}
                        <Select name="project-timeline" required value={timeline} onValueChange={setTimeline}>
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

                    {/* Project Description */}
                    <div className="grid gap-1.5">
                        <Label htmlFor="project-description">Project Description *</Label>
                        <Textarea
                            id="project-description"
                            name="project-description"
                            placeholder="Please describe your project, requirements, and any specific questions you have."
                            className="min-h-[150px]"
                            required
                        />
                    </div>

                     {/* Budget (Select - Optional Field) */}
                     <div className="grid gap-1.5">
                         <Label htmlFor="budget">Estimated Budget (USD)</Label>
                         {/* Add name="budget" */}
                         <Select name="budget" value={budget} onValueChange={setBudget}>
                             <SelectTrigger id="budget">
                                 <SelectValue placeholder="Select your budget range (optional)" />
                             </SelectTrigger>
                             <SelectContent>
                                 <SelectItem value="under-10k">Under ₹10,000</SelectItem>
                                 <SelectItem value="10k-50k">₹10,000 - ₹50,000</SelectItem>
                                 <SelectItem value="50k-100k">₹50,000 - ₹100,000</SelectItem>
                                 <SelectItem value="100k-250k">₹100,000 - ₹250,000</SelectItem>
                                 <SelectItem value="250k-plus">₹250,000+</SelectItem>
                                 <SelectItem value="undecided">Undecided</SelectItem>
                             </SelectContent>
                         </Select>
                     </div>

                    {/* Privacy Policy Checkbox */}
                    <div className="flex items-start space-x-2">
                        {/* Add name="privacy-policy" */}
                        <Checkbox id="privacy-policy" name="privacy-policy" className="mt-1" required />
                        <Label htmlFor="privacy-policy" className="text-sm font-normal">
                            I agree to the processing of my personal data according to the{" "}
                            <Link href="/privacy" className="text-primary hover:underline">
                                Privacy Policy
                            </Link>
                            .
                        </Label>
                    </div>
                </div>

                {/* --- Status Messages --- */}
                {status === 'success' && (
                    <p className="text-sm text-green-600">Thank you! Your quote request has been submitted. Our team will contact you shortly.</p>
                )}
                {status === 'error' && (
                    <p className="text-sm text-red-600">{errorMessage}</p>
                )}

                {/* --- Submit Button --- */}
                <Button type="submit" className="w-full" disabled={status === 'submitting'}>
                     {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
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


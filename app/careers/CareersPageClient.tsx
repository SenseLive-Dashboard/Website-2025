"use client"

import Image from "next/image"
import { ArrowRight, CheckCircle, Clock, Globe, MapPin, Users } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"

import React, { useState } from 'react';
import Link from 'next/link';
// Assuming you are using Shadcn UI or similar components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CareersPageClient() {

  const [status, setStatus] = useState(''); // '', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');
  // State specifically for the Select component if needed for Shadcn UI
  const [selectedArea, setSelectedArea] = useState('');

  const handleSubmit = async (e:any) => {
      e.preventDefault();
      setStatus('submitting');
      setErrorMessage('');

      const form = e.currentTarget;
      const formData = new FormData(form); // Use FormData for file uploads

      // --- Client-Side Validation (Good practice before sending) ---
      const name = formData.get('intern-name');
      const email = formData.get('intern-email');
      const phone = formData.get('intern-phone');
      const education = formData.get('intern-education');
      const area = formData.get('intern-area'); // FormData gets the value directly
      const startDate = formData.get('intern-start');
      const resumeFile = formData.get('intern-resume') as File; // Get the file object
      const message = formData.get('intern-message');
      const terms = formData.get('intern-terms'); // Checkbox value is 'on' if checked

      if (!name || !email || !phone || !education || !area || !startDate || !resumeFile || resumeFile.size === 0 || !message || terms !== 'on') {
          setErrorMessage("Please fill in all required fields, upload a resume, and accept the terms.");
          setStatus('error');
          return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email as string)) {
          setErrorMessage("Please enter a valid email address.");
          setStatus('error');
          return;
      }

      const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
      if (resumeFile.size > MAX_FILE_SIZE) {
          setErrorMessage(`Resume file size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB.`);
          setStatus('error');
          return;
      }

      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(resumeFile.type)) {
           setErrorMessage('Invalid resume file type. Only PDF, DOC, DOCX allowed.');
           setStatus('error');
           return;
      }


      // --- Send Data using Fetch API ---
      try {
          // !! Point to your new API endpoint !!
          const response = await fetch("/api/careers", {
              method: 'POST',
              // ** IMPORTANT: Do NOT set Content-Type header manually for FormData **
              // headers: { 'Content-Type': 'multipart/form-data' }, // Browser sets this automatically
              body: formData, // Send the FormData object directly
          });

          const result = await response.json();

          if (response.ok) {
              setStatus('success');
              form.reset(); // Reset form fields
              setSelectedArea(''); // Reset select state if using controlled component
          } else {
              setErrorMessage(result.message || "Submission failed. Please try again.");
              setStatus('error');
          }
      } catch (error) {
          console.error("Submission error:", error);
          setErrorMessage("Network error or server issue. Please try again.");
          setStatus('error');
      }
  };
  // Mock job openings
  // const jobOpenings = [
  //   {
  //     id: "senior-hardware-engineer",
  //     title: "Senior Hardware Engineer",
  //     department: "Engineering",
  //     location: "Boston, MA",
  //     type: "Full-time",
  //     description: "Design and develop innovative IoT hardware solutions for industrial applications.",
  //   },
  //   {
  //     id: "software-developer",
  //     title: "Software Developer",
  //     department: "Engineering",
  //     location: "Boston, MA",
  //     type: "Full-time",
  //     description: "Develop and maintain software for our IoT platforms and solutions.",
  //   },
  //   {
  //     id: "product-manager",
  //     title: "Product Manager",
  //     department: "Product",
  //     location: "Berlin, Germany",
  //     type: "Full-time",
  //     description: "Lead the development and launch of new IoT products and solutions.",
  //   },
  //   {
  //     id: "sales-engineer",
  //     title: "Sales Engineer",
  //     department: "Sales",
  //     location: "Singapore",
  //     type: "Full-time",
  //     description: "Provide technical expertise and support to our sales team and customers.",
  //   },
  //   {
  //     id: "marketing-specialist",
  //     title: "Marketing Specialist",
  //     department: "Marketing",
  //     location: "Boston, MA",
  //     type: "Full-time",
  //     description: "Develop and execute marketing strategies for our IoT products and solutions.",
  //   },
  //   {
  //     id: "customer-success-manager",
  //     title: "Customer Success Manager",
  //     department: "Customer Success",
  //     location: "Remote",
  //     type: "Full-time",
  //     description: "Ensure customer satisfaction and drive adoption of our IoT solutions.",
  //   },
  // ]

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

      {/* <section className="w-full py-12 md:py-24 lg:py-32 animate-fade-in">
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
      </section> */}

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
                        {/* Use the new handleSubmit */}
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* --- Name --- */}
                            <div className="grid gap-1.5"> {/* Use gap-1.5 for tighter spacing with Label */}
                                <Label htmlFor="intern-name">Full Name *</Label>
                                <Input id="intern-name" name="intern-name" placeholder="Your full name" required />
                            </div>
                            {/* --- Email --- */}
                            <div className="grid gap-1.5">
                                <Label htmlFor="intern-email">Email *</Label>
                                <Input id="intern-email" name="intern-email" type="email" placeholder="Your email address" required />
                            </div>
                             {/* --- Phone --- */}
                             <div className="grid gap-1.5">
                                <Label htmlFor="intern-phone">Phone *</Label>
                                <Input id="intern-phone" name="intern-phone" type="tel" placeholder="Your phone number" required />
                             </div>
                            {/* --- Education --- */}
                            <div className="grid gap-1.5">
                                <Label htmlFor="intern-education">Educational Background *</Label>
                                <Input id="intern-education" name="intern-education" placeholder="University/College and Degree" required />
                            </div>
                            {/* --- Area of Interest (Shadcn Example) --- */}
                             <div className="grid gap-1.5">
                                <Label htmlFor="intern-area">Area of Interest *</Label>
                                 {/* Add name="intern-area" to the Select component */}
                                <Select name="intern-area" required value={selectedArea} onValueChange={setSelectedArea}>
                                    <SelectTrigger id="intern-area">
                                        <SelectValue placeholder="Select an area" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="hardware">Hardware Engineering</SelectItem>
                                        <SelectItem value="software">Software Development</SelectItem>
                                        <SelectItem value="iot">IoT Solutions</SelectItem>
                                        <SelectItem value="marketing">Marketing</SelectItem>
                                        <SelectItem value="sales">Sales</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                             </div>
                            {/* --- Start Date --- */}
                            <div className="grid gap-1.5">
                                <Label htmlFor="intern-start">Preferred Start Date *</Label>
                                <Input id="intern-start" name="intern-start" type="date" required />
                            </div>
                             {/* --- Resume --- */}
                            <div className="grid gap-1.5">
                                 <Label htmlFor="intern-resume">Resume/CV *</Label>
                                 <Input id="intern-resume" name="intern-resume" type="file" accept=".pdf,.doc,.docx" required />
                                 <p className="text-xs text-muted-foreground">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                            </div>
                            {/* --- Message --- */}
                            <div className="grid gap-1.5">
                                <Label htmlFor="intern-message">Why do you want to intern at SenseLive? *</Label>
                                <Textarea
                                    id="intern-message"
                                    name="intern-message"
                                    className="min-h-[120px]"
                                    placeholder="Tell us why you're interested in interning with us and what you hope to learn"
                                    required
                                />
                            </div>
                            {/* --- Terms (Shadcn Example) --- */}
                             <div className="flex items-center space-x-2">
                                 {/* Add name="intern-terms" */}
                                 <Checkbox id="intern-terms" name="intern-terms" required />
                                 <Label htmlFor="intern-terms" className="text-sm font-normal"> {/* Use font-normal for label */}
                                     I agree to the processing of my personal data according to the{" "}
                                     <Link href="/privacy" className="text-primary hover:underline">
                                         Privacy Policy
                                     </Link>
                                     .
                                 </Label>
                             </div>

                             {/* --- Status Messages --- */}
                            {status === 'success' && (
                                <p className="text-sm text-green-600">Thank you for your application! We will review your information and contact you soon.</p>
                            )}
                            {status === 'error' && (
                                <p className="text-sm text-red-600">{errorMessage}</p>
                            )}

                            {/* --- Submit Button --- */}
                            <Button type="submit" className="w-full" disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
                            </Button>
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


import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Phone, Clock, FileText, HelpCircle, MessageSquare, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Support | SenseLive",
  description:
    "Get help with SenseLive products and solutions. Access documentation, FAQs, and contact our support team.",
}

export default function SupportPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-24 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Support Center</h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Get help with SenseLive products and solutions. Our support team is ready to assist you with any questions or
          issues.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <Card className="hover-lift">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              Phone Support
            </CardTitle>
            <CardDescription>Talk to our technical experts</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Sales:</p>
            <p className="font-medium mb-4">+91 9604070622</p>
            <p className="text-sm text-muted-foreground mb-2">Technical Support:</p>
            <p className="font-medium">+91 8408058531</p>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">Available Monday to Friday, 9:00 AM to 6:00 PM IST</p>
          </CardFooter>
        </Card>

        <Card className="hover-lift">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Email Support
            </CardTitle>
            <CardDescription>Get help via email</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Sales:</p>
            <p className="font-medium mb-4">info@senselive.io</p>
            <p className="text-sm text-muted-foreground mb-2">Technical Support:</p>
            <p className="font-medium">support@senselive.io</p>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">We typically respond within 24 business hours</p>
          </CardFooter>
        </Card>

        <Card className="hover-lift">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Support Hours
            </CardTitle>
            <CardDescription>When we're available</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Regular Hours:</p>
            <p className="font-medium mb-4">Monday to Friday, 9:00 AM to 6:00 PM IST</p>
            <p className="text-sm text-muted-foreground mb-2">Emergency Support:</p>
            <p className="font-medium">24/7 for premium support customers</p>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">Closed on Indian national holidays</p>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Documentation & Resources</h2>
          <div className="space-y-4">
            <Link href="/downloads" className="block">
              <Card className="hover-lift transition-all">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Product Documentation</h3>
                    <p className="text-sm text-muted-foreground">
                      Access user manuals, datasheets, and technical specifications
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/downloads?category=firmware" className="block">
              <Card className="hover-lift transition-all">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Firmware & Software</h3>
                    <p className="text-sm text-muted-foreground">
                      Download the latest firmware updates and software tools
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/support/knowledge-base" className="block">
              <Card className="hover-lift transition-all">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <HelpCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Knowledge Base</h3>
                    <p className="text-sm text-muted-foreground">
                      Browse articles, tutorials, and troubleshooting guides
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I register my product for warranty?</AccordionTrigger>
              <AccordionContent>
                To register your product for warranty, please visit our warranty registration page and fill out the form
                with your product serial number and purchase information. Alternatively, you can email the purchase
                details to support@senselive.io.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What is the standard warranty period for SenseLive products?</AccordionTrigger>
              <AccordionContent>
                All SenseLive hardware products come with a standard 2-year warranty against manufacturing defects.
                Extended warranty options are available for purchase. Software products include 1 year of updates and
                support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I update the firmware on my device?</AccordionTrigger>
              <AccordionContent>
                Firmware updates can be performed through our SenseLive Configuration Tool. Download the latest version
                from our downloads section, connect your device, and follow the update wizard. Detailed instructions are
                available in the product manual.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What communication protocols do your devices support?</AccordionTrigger>
              <AccordionContent>
                Our devices support various protocols including Modbus RTU/TCP, MQTT, HTTP/HTTPS, SNMP, and proprietary
                protocols. The specific protocols supported depend on the device model. Please refer to the product
                datasheet for detailed specifications.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How can I request a custom solution?</AccordionTrigger>
              <AccordionContent>
                For custom solutions, please contact our team at info@senselive.io with your requirements. Our
                engineering team can develop customized hardware and software solutions tailored to your specific needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="bg-muted/30 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need Additional Help?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Our support team is ready to assist you with any questions or issues you may have with SenseLive products and
          solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-senselive text-white">
              <MessageSquare className="mr-2 h-5 w-5" />
              Contact Support
            </Button>
          </Link>
          <Link href="/support/ticket">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Submit Support Ticket
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}


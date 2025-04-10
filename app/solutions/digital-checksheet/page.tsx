import type { Metadata } from "next"
import { SolutionPageTemplate } from "@/components/solution-page-template"
import { ListChecks, ShieldCheck, Users, Download } from "lucide-react"
import { SolutionStructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Digital Checksheet Solution | SenseLive",
  description:
    "Streamline inspections and quality control with SenseLive's Digital Checksheet solution. Improve efficiency, ensure compliance, and reduce paper waste.",
}

export default function DigitalChecksheetPage() {
  return (
    <>
      <SolutionStructuredData
        name="Digital Checksheet Solution"
        description="Streamline inspections and quality control with SenseLive's Digital Checksheet solution. Improve efficiency, ensure compliance, and reduce paper waste."
        image="/images/digital-checksheet-og.jpg"
        provider="SenseLive"
        url="https://senselive.com/solutions/digital-checksheet"
      />
      <SolutionPageTemplate
        title="Digital Checksheet Solution"
        description="Streamline inspections and quality control with SenseLive's Digital Checksheet solution. Improve efficiency, ensure compliance, and reduce paper waste."
        badge="Digital Transformation"
        heroImage="/placeholder.svg?height=500&width=700"
        features={[
          {
            icon: <ListChecks className="h-6 w-6 text-primary" />,
            title: "Customizable Checklists",
            description: "Create and manage digital checklists tailored to your specific inspection requirements.",
          },
          {
            icon: <ShieldCheck className="h-6 w-6 text-primary" />,
            title: "Real-time Validation",
            description: "Ensure data accuracy with real-time validation and automated data capture.",
          },
          {
            icon: <Users className="h-6 w-6 text-primary" />,
            title: "User Management",
            description: "Manage user access and permissions to ensure data security and compliance.",
          },
        ]}
        architectureImage="/placeholder.svg?height=500&width=700"
        architectureSteps={[
          {
            title: "Checklist Creation",
            description: "Create digital checklists with customizable fields and validation rules.",
          },
          {
            title: "Data Collection",
            description: "Field workers use mobile devices to complete checklists and capture data.",
          },
          {
            title: "Data Analysis",
            description: "Our cloud platform analyzes the data and generates reports for insights and compliance.",
          },
          {
            title: "Action & Improvement",
            description: "Take action based on the insights to improve processes and reduce errors.",
          },
        ]}
        benefitTabs={[
          {
            id: "efficiency",
            label: "Efficiency",
            title: "Improve Operational Efficiency",
            description:
              "Our Digital Checksheet solution streamlines inspection processes, reducing time and effort while improving data accuracy.",
            bulletPoints: [
              "Reduce inspection time by up to 50%",
              "Eliminate paper waste and manual data entry",
              "Improve data accuracy and consistency",
              "Streamline audit processes",
            ],
            image: "/placeholder.svg?height=400&width=600",
          },
          {
            id: "compliance",
            label: "Compliance",
            title: "Ensure Regulatory Compliance",
            description:
              "Our solution helps organizations meet regulatory requirements by providing a complete audit trail and ensuring data integrity.",
            bulletPoints: [
              "Automated audit trails",
              "Real-time data validation",
              "Secure data storage",
              "Compliance with industry standards",
            ],
            image: "/placeholder.svg?height=400&width=600",
          },
          {
            id: "cost",
            label: "Cost Savings",
            title: "Reduce Operational Costs",
            description:
              "By eliminating paper waste, reducing manual data entry, and improving efficiency, our Digital Checksheet solution helps organizations reduce operational costs.",
            bulletPoints: [
              "Reduce paper and printing costs",
              "Eliminate manual data entry errors",
              "Improve resource utilization",
              "Lower operational expenses",
            ],
            image: "/placeholder.svg?height=400&width=600",
          },
        ]}
        caseStudies={[
          {
            company: "Acme Manufacturing",
            industry: "Manufacturing",
            result: "40% reduction in inspection time",
            description:
              "Implemented our Digital Checksheet solution across their manufacturing facilities, resulting in a 40% reduction in inspection time and improved data accuracy.",
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            company: "Greenville Hospital",
            industry: "Healthcare",
            result: "Improved compliance with safety regulations",
            description:
              "Used our solution to streamline safety inspections, improving compliance with regulatory requirements and reducing the risk of incidents.",
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            company: "Global Logistics",
            industry: "Logistics",
            result: "25% reduction in audit costs",
            description:
              "Deployed our solution across their logistics network, reducing audit costs by 25% and improving data visibility.",
            image: "/placeholder.svg?height=200&width=300",
          },
        ]}
        resources={[
          {
            title: "Digital Checksheet Brochure",
            description:
              "Detailed overview of our Digital Checksheet solution features, benefits, and technical specifications.",
            type: "PDF",
            icon: <Download className="h-5 w-5 text-primary" />,
            link: "/downloads/digital-checksheet-brochure.pdf",
          },
          {
            title: "Digital Checksheet Best Practices",
            description:
              "Comprehensive guide to implementing digital checklists for various industries and applications.",
            type: "Whitepaper",
            icon: <Download className="h-5 w-5 text-primary" />,
            link: "/downloads/digital-checksheet-best-practices.pdf",
          },
        ]}
      />
    </>
  )
}

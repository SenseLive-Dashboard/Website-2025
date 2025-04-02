import type { Metadata } from "next"
import { SolutionPageTemplate } from "@/components/solution-page-template"
import { BarChart3, Zap, LineChart, Settings, Download } from "lucide-react"
import { SolutionStructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Energy Management System | SenseLive",
  description:
    "Comprehensive energy monitoring and management solution that helps businesses reduce energy consumption, optimize operations, and meet sustainability goals.",
  keywords: ["Energy Management", "Energy Monitoring", "Energy Optimization", "Sustainability", "IoT", "SenseLive"],
  openGraph: {
    title: "Energy Management System | SenseLive",
    description:
      "Comprehensive energy monitoring and management solution that helps businesses reduce energy consumption, optimize operations, and meet sustainability goals.",
    images: [{ url: "/images/ems-og.jpg", width: 1200, height: 630, alt: "SenseLive Energy Management System" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Energy Management System | SenseLive",
    description:
      "Comprehensive energy monitoring and management solution that helps businesses reduce energy consumption, optimize operations, and meet sustainability goals.",
    images: ["/images/ems-og.jpg"],
  },
}

export default function EMSPage() {
  return (
    <>
      <SolutionStructuredData
        name="Energy Management System"
        description="Comprehensive energy monitoring and management solution that helps businesses reduce energy consumption, optimize operations, and meet sustainability goals."
        image="/images/ems-og.jpg"
        provider="SenseLive"
        url="https://senselive.com/solutions/ems"
      />
      <SolutionPageTemplate
        title="Energy Management System"
        description="Comprehensive energy monitoring and management solution that helps businesses reduce energy consumption, optimize operations, and meet sustainability goals."
        badge="Energy Management"
        heroImage="/placeholder.svg?height=500&width=700"
        features={[
          {
            icon: <BarChart3 className="h-6 w-6 text-primary" />,
            title: "Real-time Monitoring",
            description:
              "Track energy consumption across your facilities in real-time with detailed dashboards and visualizations.",
          },
          {
            icon: <Zap className="h-6 w-6 text-primary" />,
            title: "Automated Alerts",
            description:
              "Receive instant notifications when consumption patterns deviate from normal or when issues are detected.",
          },
          {
            icon: <LineChart className="h-6 w-6 text-primary" />,
            title: "Advanced Analytics",
            description:
              "Identify energy-saving opportunities with AI-powered analytics and comprehensive reporting tools.",
          },
          {
            icon: <Settings className="h-6 w-6 text-primary" />,
            title: "System Integration",
            description:
              "Seamlessly integrate with existing BMS, SCADA, and other enterprise systems for a unified approach.",
          },
        ]}
        architectureImage="/placeholder.svg?height=500&width=700"
        architectureSteps={[
          {
            title: "Data Collection",
            description:
              "Energy meters and sensors collect data from various sources and transmit it to the cloud platform.",
          },
          {
            title: "Data Processing",
            description: "Our cloud platform processes and analyzes the data, identifying patterns and anomalies.",
          },
          {
            title: "Visualization & Reporting",
            description: "Intuitive dashboards and reports provide actionable insights for energy optimization.",
          },
          {
            title: "Automation & Control",
            description:
              "Automate energy-consuming systems based on usage patterns and predefined rules to maximize efficiency.",
          },
        ]}
        benefitTabs={[
          {
            id: "cost",
            label: "Cost Savings",
            title: "Reduce Energy Costs",
            description:
              "Our customers typically see a 15-30% reduction in energy costs within the first year of implementation. The system helps identify energy waste, optimize consumption patterns, and reduce peak demand charges.",
            bulletPoints: [
              "Average 20% reduction in energy bills",
              "Identify and eliminate energy waste",
              "Reduce peak demand charges",
              "Typical ROI within 12-18 months",
            ],
            image: "/placeholder.svg?height=400&width=600",
          },
          {
            id: "sustainability",
            label: "Sustainability",
            title: "Achieve Sustainability Goals",
            description:
              "Our Energy Management System helps organizations meet their sustainability targets by reducing energy consumption and associated carbon emissions. The system provides detailed reporting for ESG initiatives and sustainability programs.",
            bulletPoints: [
              "Reduce carbon footprint",
              "Track and report on sustainability metrics",
              "Support ESG reporting requirements",
              "Demonstrate commitment to environmental stewardship",
            ],
            image: "/placeholder.svg?height=400&width=600",
          },
          {
            id: "compliance",
            label: "Compliance",
            title: "Ensure Regulatory Compliance",
            description:
              "Stay compliant with energy regulations and reporting requirements. Our system automates data collection and reporting for various regulatory frameworks and standards.",
            bulletPoints: [
              "Automated compliance reporting",
              "Support for ISO 50001 energy management standard",
              "Meet local and international energy regulations",
              "Audit-ready data and documentation",
            ],
            image: "/placeholder.svg?height=400&width=600",
          },
          {
            id: "operations",
            label: "Operational Efficiency",
            title: "Improve Operational Efficiency",
            description:
              "Beyond energy savings, our system helps improve overall operational efficiency by providing insights into equipment performance, maintenance needs, and process optimization opportunities.",
            bulletPoints: [
              "Identify equipment inefficiencies",
              "Predictive maintenance alerts",
              "Optimize process scheduling",
              "Improve asset utilization",
            ],
            image: "/placeholder.svg?height=400&width=600",
          },
        ]}
        caseStudies={[
          {
            company: "Global Manufacturing Inc.",
            industry: "Manufacturing",
            result: "23% energy cost reduction",
            description:
              "Implemented our EMS across 12 manufacturing facilities, resulting in 23% energy cost reduction and improved sustainability metrics.",
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            company: "City of Greenville",
            industry: "Government",
            result: "30% reduction in municipal energy use",
            description:
              "Deployed our EMS in municipal buildings, achieving 30% energy reduction and meeting sustainability goals ahead of schedule.",
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            company: "TechCorp Data Centers",
            industry: "Technology",
            result: "Improved PUE from 1.8 to 1.4",
            description:
              "Optimized data center operations, improving Power Usage Effectiveness (PUE) from 1.8 to 1.4 and reducing cooling costs by 35%.",
            image: "/placeholder.svg?height=200&width=300",
          },
        ]}
        resources={[
          {
            title: "EMS Product Brochure",
            description:
              "Detailed overview of our Energy Management System features, benefits, and technical specifications.",
            type: "PDF",
            icon: <Download className="h-5 w-5 text-primary" />,
            link: "/downloads/ems-brochure.pdf",
          },
          {
            title: "Energy Management Best Practices",
            description:
              "Comprehensive guide to energy management best practices and strategies for different industries.",
            type: "Whitepaper",
            icon: <Download className="h-5 w-5 text-primary" />,
            link: "/downloads/energy-management-best-practices.pdf",
          },
          {
            title: "ROI Calculator",
            description:
              "Interactive tool to estimate potential savings and return on investment for your organization.",
            type: "Tool",
            icon: <Download className="h-5 w-5 text-primary" />,
            link: "/tools/roi-calculator",
          },
        ]}
      />
    </>
  )
}


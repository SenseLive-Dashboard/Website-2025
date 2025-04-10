import type { Metadata } from "next"
import { Droplets, Zap, LineChart, Settings } from "lucide-react"
import { SolutionPageTemplate } from "@/components/solution-page-template"

export const metadata: Metadata = {
  title: "Water Management System | SenseLive",
  description:
    "Intelligent water monitoring and management solution that helps organizations optimize water usage, detect leaks, and ensure water quality.",
  keywords: ["Water Management", "Water Monitoring", "Leak Detection", "Water Quality", "IoT", "SenseLive"],
  openGraph: {
    title: "Water Management System | SenseLive",
    description:
      "Intelligent water monitoring and management solution that helps organizations optimize water usage, detect leaks, and ensure water quality.",
    images: [
      { url: "/images/water-management-og.jpg", width: 1200, height: 630, alt: "SenseLive Water Management System" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Management System | SenseLive",
    description:
      "Intelligent water monitoring and management solution that helps organizations optimize water usage, detect leaks, and ensure water quality.",
    images: ["/images/water-management-og.jpg"],
  },
}

export default function WaterManagementPage() {
  return (
    <SolutionPageTemplate
      title="Water Management System"
      description="Intelligent water monitoring and management solution that helps organizations optimize water usage, detect leaks, and ensure water quality."
      badge="Water Management"
      heroImage="/solutions/wms/wms1.png"
      features={[
        {
          icon: <Droplets className="h-6 w-6 text-primary" />,
          title: "Quality Monitoring",
          description: "Continuous monitoring of water quality parameters with automated sampling and analysis.",
        },
        {
          icon: <Zap className="h-6 w-6 text-primary" />,
          title: "Leak Detection",
          description: "Advanced algorithms to detect and locate leaks before they cause damage or waste resources.",
        },
        {
          icon: <LineChart className="h-6 w-6 text-primary" />,
          title: "Usage Optimization",
          description: "Identify patterns and opportunities for water conservation and reuse to reduce consumption.",
        },
        {
          icon: <Settings className="h-6 w-6 text-primary" />,
          title: "Compliance Reporting",
          description: "Automated reporting for regulatory compliance and environmental standards with audit trails.",
        },
      ]}
      architectureImage="/solutions/wms/wms2.png"
      architectureSteps={[
        {
          title: "Data Collection",
          description:
            "Water flow meters, pressure sensors, and quality analyzers collect data and transmit it to the cloud platform.",
        },
        {
          title: "Data Processing",
          description:
            "Our cloud platform processes and analyzes the data, identifying patterns, anomalies, and potential leaks.",
        },
        {
          title: "Visualization & Reporting",
          description: "Intuitive dashboards and reports provide actionable insights for water usage optimization.",
        },
        {
          title: "Automation & Control",
          description: "Automate water systems based on usage patterns and predefined rules to maximize efficiency.",
        },
      ]}
      benefitTabs={[
        {
          id: "conservation",
          label: "Water Conservation",
          title: "Reduce Water Consumption",
          description:
            "Our customers typically see a 15-25% reduction in water consumption within the first year of implementation. The system helps identify water waste, optimize usage patterns, and implement conservation measures.",
          bulletPoints: [
            "Average 20% reduction in water consumption",
            "Identify and eliminate water waste",
            "Implement effective conservation measures",
            "Support sustainability initiatives",
          ],
          image: "/solutions/wms/wms3.png",
        },
        {
          id: "cost",
          label: "Cost Savings",
          title: "Reduce Water Costs",
          description:
            "By reducing water consumption and detecting leaks early, our Water Management System helps organizations significantly reduce their water bills and associated costs.",
          bulletPoints: [
            "Lower water utility bills",
            "Reduce wastewater treatment costs",
            "Prevent costly water damage from leaks",
            "Typical ROI within 12-18 months",
          ],
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          id: "quality",
          label: "Water Quality",
          title: "Ensure Water Quality",
          description:
            "Our Water Management System continuously monitors water quality parameters, ensuring that water meets required standards and alerting you to any issues.",
          bulletPoints: [
            "Real-time water quality monitoring",
            "Automated alerts for quality issues",
            "Historical quality data analysis",
            "Quality parameter trend analysis",
          ],
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          id: "compliance",
          label: "Regulatory Compliance",
          title: "Meet Regulatory Requirements",
          description:
            "Our Water Management System helps organizations meet regulatory requirements for water usage, quality, and reporting, ensuring compliance and avoiding penalties.",
          bulletPoints: [
            "Automated compliance reporting",
            "Comprehensive audit trails",
            "Support for water conservation regulations",
            "Detailed documentation for inspections",
          ],
          image: "/placeholder.svg?height=400&width=600",
        },
      ]}
      caseStudies={[
        {
          company: "City of Greenville",
          industry: "Government",
          result: "30% reduction in municipal water use",
          description:
            "Deployed our Water Management System in municipal buildings and parks, achieving 30% water reduction and meeting sustainability goals ahead of schedule.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          company: "Pacific Hotel Group",
          industry: "Hospitality",
          result: "25% water savings across 12 properties",
          description:
            "Implemented our solution across their hotel chain, reducing water consumption by 25% and improving guest experience with better water quality.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          company: "GreenFields Agriculture",
          industry: "Agriculture",
          result: "40% irrigation water reduction",
          description:
            "Used our system to optimize irrigation schedules and detect leaks, resulting in 40% water savings while maintaining crop yields.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ]}
      resources={[
        {
          title: "Water Management Brochure",
          description:
            "Detailed overview of our Water Management System features, benefits, and technical specifications.",
          type: "PDF",
          icon: <Droplets className="h-5 w-5 text-primary" />,
          link: "/downloads/water-management-brochure.pdf",
        },
        {
          title: "Water Conservation Best Practices",
          description:
            "Comprehensive guide to water conservation best practices and strategies for different industries.",
          type: "Whitepaper",
          icon: <Droplets className="h-5 w-5 text-primary" />,
          link: "/downloads/water-conservation-best-practices.pdf",
        },
        {
          title: "Water Savings Calculator",
          description:
            "Interactive tool to estimate potential water savings and return on investment for your organization.",
          type: "Tool",
          icon: <Droplets className="h-5 w-5 text-primary" />,
          link: "/tools/water-savings-calculator",
        },
      ]}
    />
  )
}


import type { Metadata } from "next"
import { SolutionPageTemplate } from "@/components/solution-page-template"
import { Factory, Monitor, Database, Cloud, Download } from "lucide-react"
import { SolutionStructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Production Monitoring System | SenseLive",
  description:
    "End-to-end production monitoring solution that provides real-time visibility, improves efficiency, and optimizes manufacturing processes.",
}

export default function ProductionMonitoringPage() {
  return (
    <>
      <SolutionStructuredData
        name="Production Monitoring System"
        description="End-to-end production monitoring solution that provides real-time visibility, improves efficiency, and optimizes manufacturing processes."
        image="/images/production-monitoring-og.jpg"
        provider="SenseLive"
        url="https://senselive.com/solutions/production-monitoring"
      />
      <SolutionPageTemplate
        title="Production Monitoring System"
        description="End-to-end production monitoring solution that provides real-time visibility, improves efficiency, and optimizes manufacturing processes."
        badge="Manufacturing Excellence"
        heroImage="/placeholder.svg?height=500&width=700"
        features={[
          {
            icon: <Factory className="h-6 w-6 text-primary" />,
            title: "Real-time Data",
            description: "Monitor production metrics in real-time with customizable dashboards and visualizations.",
          },
          {
            icon: <Monitor className="h-6 w-6 text-primary" />,
            title: "Equipment Monitoring",
            description: "Track equipment performance and identify potential issues before they cause downtime.",
          },
          {
            icon: <Database className="h-6 w-6 text-primary" />,
            title: "Data Analytics",
            description: "Analyze production data to identify trends, optimize processes, and improve efficiency.",
          },
          {
            icon: <Cloud className="h-6 w-6 text-primary" />,
            title: "Cloud Connectivity",
            description: "Securely transmit data to the cloud for remote monitoring and analysis.",
          },
        ]}
        architectureImage="/placeholder.svg?height=500&width=700"
        architectureSteps={[
          {
            title: "Data Collection",
            description: "Sensors and devices collect data from production equipment and transmit it to the gateway.",
          },
          {
            title: "Data Processing",
            description: "Our gateway processes and filters the data, preparing it for analysis.",
          },
          {
            title: "Data Transmission",
            description: "The data is securely transmitted to our cloud platform for storage and analysis.",
          },
          {
            title: "Visualization & Reporting",
            description: "Users can access real-time data and reports through our web-based dashboards.",
          },
        ]}
        benefitTabs={[
          {
            id: "efficiency",
            label: "Efficiency",
            title: "Improve Production Efficiency",
            description:
              "Our Production Monitoring System helps organizations improve production efficiency by providing real-time visibility into key metrics and identifying bottlenecks.",
            bulletPoints: [
              "Reduce downtime and improve equipment utilization",
              "Optimize production schedules",
              "Identify and eliminate bottlenecks",
              "Improve overall equipment effectiveness (OEE)",
            ],
            image: "/placeholder.svg?height=400&width=600",
          },
          {
            id: "quality",
            label: "Quality",
            title: "Enhance Product Quality",
            description:
              "Our solution helps organizations improve product quality by monitoring key parameters and identifying potential issues before they impact production.",
            bulletPoints: [
              "Real-time quality monitoring",
              "Early detection of quality issues",
              "Improved process control",
              "Reduced scrap and rework",
            ],
            image: "/placeholder.svg?height=400&width=600",
          },
          {
            id: "cost",
            label: "Cost Savings",
            title: "Reduce Production Costs",
            description:
              "By improving efficiency, reducing downtime, and enhancing product quality, our Production Monitoring System helps organizations reduce production costs.",
            bulletPoints: [
              "Lower labor costs",
              "Reduce material waste",
              "Minimize downtime",
              "Improve overall profitability",
            ],
            image: "/placeholder.svg?height=400&width=600",
          },
        ]}
        caseStudies={[
          {
            company: "Acme Manufacturing",
            industry: "Manufacturing",
            result: "15% increase in production output",
            description:
              "Implemented our Production Monitoring System across their manufacturing facilities, resulting in a 15% increase in production output and improved equipment utilization.",
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            company: "GreenTech Energy",
            industry: "Energy",
            result: "20% reduction in downtime",
            description:
              "Used our solution to monitor their wind turbine fleet, reducing downtime by 20% and improving energy production.",
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            company: "Food Processing Co.",
            industry: "Food Processing",
            result: "10% reduction in material waste",
            description:
              "Deployed our system to monitor their food processing lines, reducing material waste by 10% and improving product quality.",
            image: "/placeholder.svg?height=200&width=300",
          },
        ]}
        resources={[
          {
            title: "Production Monitoring Brochure",
            description:
              "Detailed overview of our Production Monitoring System features, benefits, and technical specifications.",
            type: "PDF",
            icon: <Download className="h-5 w-5 text-primary" />,
            link: "/downloads/production-monitoring-brochure.pdf",
          },
          {
            title: "Production Monitoring Best Practices",
            description:
              "Comprehensive guide to implementing production monitoring systems for various industries and applications.",
            type: "Whitepaper",
            icon: <Download className="h-5 w-5 text-primary" />,
            link: "/downloads/production-monitoring-best-practices.pdf",
          },
        ]}
      />
    </>
  )
}

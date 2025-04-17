"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageHeader } from "@/components/page-header"
import { DownloadCard } from "@/components/download-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import { DownloadIcon } from "lucide-react"

interface DownloadCardProps {
  title: string
  description: string
  type: "datasheet" | "manual" | "firmware" | "software" | "whitepaper"
  version?: string
  date: string
  fileSize?: string
  downloadUrl: string
  category?: string
  relatedProducts?: string[]
}

// Helper function to get product name by ID
function getProductName(productId: string): string {
  const productNames: Record<string, string> = {
    edge8000: "SenseLive Edge8000",
    "sensebt-222": "SenseBT-222",
    "sensect-222": "SenseCT-222",
    x5050: "X5050",
    e7000: "SenseLive E7000",
    e7500: "SenseLive E7500",
    x7700: "SenseLive X7700",
    x7800d: "SenseLive X7800D",
    x7900: "SenseLive X7900",
    x9000: "X9000",
    x7400d: "X7400D",
    x7400: "X7400",
  }

  return productNames[productId] || productId
}

// Helper function to get category for product
function getCategoryForProduct(productId: string): string {
  const productCategories: Record<string, string> = {
    edge8000: "wireless-bus-bar",
    "sensebt-222": "wireless-bus-bar",
    "sensect-222": "wireless-bus-bar",
    x5050: "gateways",
    e7000: "controllers",
    e7500: "controllers",
    x7700: "wireless",
    x7800d: "wireless",
    x7900: "wireless",
    x9000: "connectivity",
    x7400d: "connectivity",
    x7400: "connectivity",
  }

  return productCategories[productId] || ""
}

export default function DownloadsPageClient() {
  // Mock data for downloads
  const downloads = {
    datasheets: [
      {
        title: "SenseLive Edge8000 Datasheet",
        description: "Wireless Bus Bar Monitoring System with Integrated Energy Metering",
        type: "datasheet",
        // // version: "2.3",
        date: "2025-01-15",
        // filesize:"3.2 MB",
        downloadUrl: "https://senselive.in/downloads/documents/datasheets/datasheet_senselive_edge8000.pdf",
        category: "Wireless Bus Bar Solutions",
        relatedProducts: ["edge8000", "sensebt-222", "sensect-222"],
      },
      {
        title: "SenseLive SenseBT222 Datasheet",
        description: "Battery-Powered Wireless Temperature Sensor",
        type: "datasheet",
        // // version: "1.5",
        date: "2025-01-15",
        // filesize:"2.1 MB",
        downloadUrl: "https://senselive.in/downloads/documents/datasheets/datasheet_senselive_sensebt222.pdf",
        category: "Wireless Bus Bar Solutions",
        relatedProducts: ["edge8000", "sensebt-222"],
      },
      {
        title: "SenseLive SenseCT222 Datasheet",
        description: "CT-Powered Wireless Temperature Sensor",
        type: "datasheet",
        // // version: "1.4",
        date: "2025-01-15",
        // filesize:"2.3 MB",
        downloadUrl: "https://senselive.in/downloads/documents/datasheets/datasheet_senselive_sensect222.pdf",
        category: "Wireless Bus Bar Solutions",
        relatedProducts: ["edge8000", "sensect-222"],
      },
      {
        title: "SenseLive E7000 Datasheet",
        description: "Ethernet-based Remote IO Controller",
        type: "datasheet",
        // // version: "1.5",
        date: "2025-01-15",
        // filesize:"2.1 MB",
        downloadUrl: "https://senselive.in/downloads/documents/datasheets/datasheet_senselive_e7000.pdf",
        category: "Remote IO Controller",
        relatedProducts: ["SenseLive E7500"],
      },
      {
        title: "SenseLive E7500 Datasheet",
        description: "RS485-based Remote IO Controller",
        type: "datasheet",
        // // version: "1.5",
        date: "2025-01-15",
        // filesize:"2.1 MB",
        downloadUrl: "https://senselive.in/downloads/documents/datasheets/datasheet_senselive_e7500.pdf",
        category: "Remote IO Controller",
        relatedProducts: ["SenseLive E7000"],
      },

      {
        title: "SenseLive X5050 Datasheet",
        description: "RS485 to TCP/IP Modbus Server",
        type: "datasheet",
        // version: "2.0",
        date: "2025-01-15",
        // filesize:"1.8 MB",
        downloadUrl: "https://senselive.in/downloads/documents/datasheets/datasheet_senselive_x5050.pdf",
        category: "Modbus Gateways",
        relatedProducts: ["x5050"],
      },
      
      {
        title: "SenseLive X7700 Datasheet",
        description: "DIN-Rail LoRa Device",
        type: "datasheet",
        // version: "2.1",
        date: "2025-01-15",
        // filesize:"2.4 MB",
        downloadUrl: "https://senselive.in/downloads/documents/datasheets/datasheet_senselive_x7700.pdf",
        category: "LoRa/ZigBee Devices",
        relatedProducts: ["x7700", "x7800d", "x7900"],
      },
      {
        title: "SenseLive X7800 Datasheet",
        description: "Wall-Mounted LoRa Device with RS232 Features",
        type: "datasheet",
        // version: "1.9",
        date: "2025-01-15",
        // filesize:"2.2 MB",
        downloadUrl: "https://senselive.in/downloads/documents/datasheets/datasheet_senselive_x7800.pdf",
        category: "LoRa/ZigBee Devices",
        relatedProducts: ["x7700", "x7800d", "x7900"],
      },
      {
        title: "SenseLive X7900 Datasheet",
        description: "LoRa Gateway with TCP Output",
        type: "datasheet",
        // version: "1.7",
        date: "2025-01-15",
        // filesize:"2.5 MB",
        downloadUrl: "https://senselive.in/downloads/documents/datasheets/datasheet_senselive_x7900.pdf",
        category: "LoRa/ZigBee Devices",
        relatedProducts: ["x7700", "x7800d", "x7900"],
      },
      {
        title: "X9000 Datasheet",
        description: "4G IoT Gateway with Edge Intelligence",
        type: "datasheet",
        // version: "2.2",
        date: "2025-01-15",
        // filesize:"2.7 MB",
        downloadUrl: "https://senselive.in/downloads/documents/datasheets/datasheet_senselive_x9000.pdf",
        category: "4G/5G Products",
        relatedProducts: ["x9000", "x7400d", "x7400"],
      },
      {
        title: "SenseLive X7400D",
        description: "DIN-rail 4G CAT1 DTU with RS485 Interface",
        type: "datasheet",
        // // version: "1.5",
        date: "2025-01-20",
        // filesize:"2.1 MB",
        downloadUrl: "https://senselive.in/downloads/documents/datasheets/datasheet_senselive_x7400d.pdf",
        category: "Remote IO Controller",
        relatedProducts: ["SenseLive X7400"],
      },
      {
        title: "SenseLive X7400D",
        description: "DIN-rail 4G CAT1 DTU with RS485 Interface",
        type: "datasheet",
        // // version: "1.5",
        date: "2025-01-20",
        // filesize:"2.1 MB",
        downloadUrl: "https://senselive.in/downloads/documents/datasheets/datasheet_senselive_x7400d.pdf",
        category: "4G/5G Products",
        relatedProducts: ["SenseLive X7400", "SenseLive X9000"],
      },
      {
        title: "SenseLive X7400",
        description: "Compact 4G Router",
        type: "datasheet",
        // // version: "1.5",
        date: "2025-01-20",
        // filesize:"2.1 MB",
        downloadUrl: "https://senselive.in/downloads/documents/datasheets/datasheet_senselive_x7400.pdf",
        category: "4G/5G Products",
        relatedProducts: ["SenseLive X7400D", "SeneseLive X9000"],
      },
      {
        title: "SenseLive X7050",
        description: "RS485 to TCP/IP Modbus Server",
        type: "datasheet",
        // // version: "1.5",
        date: "2025-01-20",
        // filesize:"2.1 MB",
        downloadUrl: "https://senselive.in/downloads/documents/datasheets/datasheet_senselive_x7050.pdf",
        category: "WiFi Products",
        relatedProducts: ["SenseLive X7050"],
      },
      {
        title: "SenseLive X8555",
        description: "SenseLive x8555",
        type: "datasheet",
        // // version: "1.5",
        date: "2025-01-20",
        // filesize:"2.1 MB",
        downloadUrl: "https://senselive.in/downloads/documents/datasheets/datasheet_senselive_x8555.pdf",
        category: "Fiber Optic Converter",
        relatedProducts: ["SenseLive X8555"],
      },

    ],
    manuals: [
      {
        title: "SenseLive Edge8000 User Manual",
        description: "Complete guide for Wireless Bus Bar Monitoring System",
        type: "manual",
        // version: "2.0",
        date: "2025-09-20",
        // filesize:"5.8 MB",
        downloadUrl: "https://senselive.in/downloads/documents/datasheets/",
        category: "Wireless Bus Bar Solutions",
        relatedProducts: ["edge8000"],
      },
      {
        title: "SenseBT-222 Installation Guide",
        description: "Installation and configuration guide for battery-powered sensors",
        type: "manual",
        // version: "1.3",
        date: "2025-08-25",
        // filesize:"3.2 MB",
        downloadUrl: "/downloads/manuals/sensebt-222.pdf",
        category: "Wireless Bus Bar Solutions",
        relatedProducts: ["sensebt-222", "edge8000"],
      },
      {
        title: "SenseCT-222 Installation Guide",
        description: "Installation and configuration guide for CT-powered sensors",
        type: "manual",
        // version: "1.2",
        date: "2025-08-28",
        // filesize:"3.4 MB",
        downloadUrl: "/downloads/manuals/sensect-222.pdf",
        category: "Wireless Bus Bar Solutions",
        relatedProducts: ["sensect-222", "edge8000"],
      },
      {
        title: "X5050 User Manual",
        description: "Complete guide for RS485 to TCP/IP Modbus Server",
        type: "manual",
        // version: "1.5",
        date: "2025-07-15",
        // filesize:"4.2 MB",
        downloadUrl: "/downloads/manuals/x5050.pdf",
        category: "Modbus Gateways",
        relatedProducts: ["x5050"],
      },
      {
        title: "E5212 User Manual",
        description: "Complete guide for Remote IO Controller",
        type: "manual",
        // version: "2.1",
        date: "2025-05-22",
        // filesize:"5.2 MB",
        downloadUrl: "/downloads/manuals/e5212.pdf",
        category: "Remote IO Controllers",
        relatedProducts: ["e7000", "e7500"],
      },
      {
        title: "X7700 User Manual",
        description: "Complete guide for DIN-Rail LoRa Device",
        type: "manual",
        // version: "1.8",
        date: "2025-07-25",
        // filesize:"4.5 MB",
        downloadUrl: "/downloads/manuals/x7700.pdf",
        category: "LoRa/ZigBee Devices",
        relatedProducts: ["x7700"],
      },
      {
        title: "X7800D User Manual",
        description: "Complete guide for Wall-Mounted LoRa Device",
        type: "manual",
        // version: "1.6",
        date: "2025-07-28",
        // filesize:"4.3 MB",
        downloadUrl: "/downloads/manuals/x7800d.pdf",
        category: "LoRa/ZigBee Devices",
        relatedProducts: ["x7800d"],
      },
      {
        title: "X7900 User Manual",
        description: "Complete guide for LoRa Gateway with TCP Output",
        type: "manual",
        // version: "1.5",
        date: "2025-07-30",
        // filesize:"4.7 MB",
        downloadUrl: "/downloads/manuals/x7900.pdf",
        category: "LoRa/ZigBee Devices",
        relatedProducts: ["x7900"],
      },
      {
        title: "X9000 User Manual",
        description: "Complete guide for 4G IoT Gateway",
        type: "manual",
        // version: "2.0",
        date: "2025-08-10",
        // filesize:"5.5 MB",
        downloadUrl: "/downloads/manuals/x9000.pdf",
        category: "4G/5G Products",
        relatedProducts: ["x9000"],
      },
      {
        title: "EMS Solution Manual",
        description: "Energy Management System implementation guide",
        type: "manual",
        // version: "3.5",
        date: "2025-07-15",
        // filesize:"8.7 MB",
        downloadUrl: "/downloads/manuals/ems-solution.pdf",
        category: "Solutions",
        relatedProducts: [],
      },
      {
        title: "Water Management System Manual",
        description: "Complete guide for water monitoring solution",
        type: "manual",
        // version: "2.8",
        date: "2025-06-30",
        // filesize:"7.4 MB",
        downloadUrl: "/downloads/manuals/water-management.pdf",
        category: "Solutions",
        relatedProducts: [],
      },
    ],
    firmware: [
      {
        title: "SenseLive Edge8000 Firmware",
        description: "Latest firmware with enhanced wireless performance",
        type: "firmware",
        // version: "3.5.2",
        date: "2025-10-05",
        // filesize:"9.2 MB",
        downloadUrl: "/downloads/firmware/edge8000_v3.5.2.bin",
        category: "Wireless Bus Bar Solutions",
        relatedProducts: ["edge8000"],
      },
      {
        title: "SenseBT-222 Firmware",
        description: "Updated firmware with improved battery life",
        type: "firmware",
        // version: "2.1.3",
        date: "2025-09-12",
        // filesize:"4.5 MB",
        downloadUrl: "/downloads/firmware/sensebt-222_v2.1.3.bin",
        category: "Wireless Bus Bar Solutions",
        relatedProducts: ["sensebt-222"],
      },
      {
        title: "SenseCT-222 Firmware",
        description: "Updated firmware with improved power harvesting",
        type: "firmware",
        // version: "2.0.5",
        date: "2025-09-15",
        // filesize:"4.3 MB",
        downloadUrl: "/downloads/firmware/sensect-222_v2.0.5.bin",
        category: "Wireless Bus Bar Solutions",
        relatedProducts: ["sensect-222"],
      },
      {
        title: "X5050 Firmware",
        description: "Updated firmware with improved Modbus performance",
        type: "firmware",
        // version: "2.8.3",
        date: "2025-08-10",
        // filesize:"7.2 MB",
        downloadUrl: "/downloads/firmware/x5050_v2.8.3.bin",
        category: "Modbus Gateways",
        relatedProducts: ["x5050"],
      },
      {
        title: "E5212 Firmware",
        description: "Updated firmware with improved Modbus performance",
        type: "firmware",
        // version: "2.4.5",
        date: "2025-06-18",
        // filesize:"6.2 MB",
        downloadUrl: "/downloads/firmware/e5212_v2.4.5.bin",
        category: "Remote IO Controllers",
        relatedProducts: ["e7000", "e7500"],
      },
      {
        title: "X7700 Firmware",
        description: "Latest firmware with enhanced LoRa performance",
        type: "firmware",
        // version: "2.3.1",
        date: "2025-07-28",
        // filesize:"8.3 MB",
        downloadUrl: "/downloads/firmware/x7700_v2.3.1.bin",
        category: "LoRa/ZigBee Devices",
        relatedProducts: ["x7700"],
      },
      {
        title: "X7800D Firmware",
        description: "Latest firmware with improved RS232 functionality",
        type: "firmware",
        // version: "2.2.4",
        date: "2025-07-30",
        // filesize:"8.1 MB",
        downloadUrl: "/downloads/firmware/x7800d_v2.2.4.bin",
        category: "LoRa/ZigBee Devices",
        relatedProducts: ["x7800d"],
      },
      {
        title: "X7900 Firmware",
        description: "Updated LoRaWAN stack and gateway improvements",
        type: "firmware",
        // version: "2.8.3",
        date: "2025-07-10",
        // filesize:"9.1 MB",
        downloadUrl: "/downloads/firmware/x7900_v2.8.3.bin",
        category: "LoRa/ZigBee Devices",
        relatedProducts: ["x7900"],
      },
      {
        title: "X9000 Firmware",
        description: "Latest firmware with 4G optimization",
        type: "firmware",
        // version: "4.1.2",
        date: "2025-08-05",
        // filesize:"12.4 MB",
        downloadUrl: "/downloads/firmware/x9000_v4.1.2.bin",
        category: "4G/5G Products",
        relatedProducts: ["x9000"],
      },
    ],
    software: [
      {
        title: "SenseLive Configuration Tool",
        description: "Software for configuring and managing SenseLive devices",
        type: "software",
        // version: "2.5.0",
        date: "2025-08-10",
        // filesize:"45.8 MB",
        downloadUrl: "/downloads/software/senselive-config-tool.exe",
        category: "Tools",
        relatedProducts: [],
      },
      {
        title: "SenseLive Data Analyzer",
        description: "Tool for analyzing data from SenseLive devices and solutions",
        type: "software",
        // version: "1.8.2",
        date: "2025-07-25",
        // filesize:"38.2 MB",
        downloadUrl: "/downloads/software/senselive-data-analyzer.exe",
        category: "Tools",
        relatedProducts: [],
      },
      {
        title: "EMS Dashboard Software",
        description: "Energy Management System dashboard application",
        type: "software",
        // version: "3.2.1",
        date: "2025-08-15",
        // filesize:"62.4 MB",
        downloadUrl: "/downloads/software/ems-dashboard.exe",
        category: "Solutions",
        relatedProducts: [],
      },
      {
        title: "Wireless Bus Bar Monitoring Software",
        description: "Dashboard for monitoring wireless temperature sensors",
        type: "software",
        // version: "2.1.0",
        date: "2025-09-20",
        // filesize:"58.6 MB",
        downloadUrl: "/downloads/software/wireless-busbar-dashboard.exe",
        category: "Solutions",
        relatedProducts: ["edge8000", "sensebt-222", "sensect-222"],
      },
    ],
    whitepapers: [
      {
        title: "Wireless Bus Bar Monitoring: Best Practices",
        description: "Implementation guide for wireless temperature monitoring in electrical systems",
        type: "whitepaper",
        date: "2025-09-05",
        // filesize:"4.2 MB",
        downloadUrl: "/downloads/whitepapers/wireless-busbar-monitoring.pdf",
        category: "Wireless Bus Bar Solutions",
        relatedProducts: ["edge8000", "sensebt-222", "sensect-222"],
      },
      {
        title: "IoT in Manufacturing: A Practical Guide",
        description: "Best practices for implementing IoT in manufacturing environments",
        type: "whitepaper",
        date: "2025-06-15",
        // filesize:"3.8 MB",
        downloadUrl: "/downloads/whitepapers/iot-in-manufacturing.pdf",
        category: "Industry",
        relatedProducts: [],
      },
      {
        title: "Energy Efficiency Through IoT",
        description: "How IoT solutions can reduce energy consumption and costs",
        type: "whitepaper",
        date: "2025-05-20",
        // filesize:"4.2 MB",
        downloadUrl: "/downloads/whitepapers/energy-efficiency-iot.pdf",
        category: "Solutions",
        relatedProducts: [],
      },
      {
        title: "Water Management Optimization",
        description: "Strategies for optimizing water usage with IoT technology",
        type: "whitepaper",
        date: "2025-07-10",
        // filesize:"3.5 MB",
        downloadUrl: "/downloads/whitepapers/water-management-optimization.pdf",
        category: "Solutions",
        relatedProducts: [],
      },
      {
        title: "Digital Transformation in Quality Control",
        description: "How digital checksheets are transforming quality processes",
        type: "whitepaper",
        date: "2025-04-25",
        // filesize:"2.9 MB",
        downloadUrl: "/downloads/whitepapers/digital-transformation-quality.pdf",
        category: "Solutions",
        relatedProducts: [],
      },
      {
        title: "Cellular IoT Connectivity Solutions",
        description: "Guide to implementing 4G/5G connectivity in industrial IoT applications",
        type: "whitepaper",
        date: "2025-08-12",
        // filesize:"3.7 MB",
        downloadUrl: "/downloads/whitepapers/cellular-iot-connectivity.pdf",
        category: "4G/5G Products",
        relatedProducts: ["x9000", "x7400d", "x7400"],
      },
    ],
    images: [
      {
        title: "E6002 Product Images",
        description: "High-resolution product images of the E6002 Remote I/O Controller",
        type: "Images",
        // version: "1.0",
        date: "2025-08-15",
        // filesize:"5.2 MB",
        downloadUrl: "/downloads/images/e6002_images.zip",
        category: "Remote IO Controllers",
        relatedProducts: ["e7000", "e7500"],
      },
      {
        title: "X9000 Product Images",
        description: "High-resolution product images of the X9000 4G IoT Gateway",
        type: "Images",
        // version: "1.0",
        date: "2025-08-15",
        // filesize:"5.2 MB",
        downloadUrl: "/downloads/images/x9000_images.zip",
        category: "4G/5G Products",
        relatedProducts: ["x9000", "x7400d", "x7400"],
      },
    ],
  }

  // Client-side search and filter functionality
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Extract unique categories
  const getUniqueCategories = () => {
    const categories = new Set<string>()

    // Add "All" as the first option
    categories.add("All")

    // Add categories from all document types
    Object.values(downloads).forEach((docType) => {
      docType.forEach((doc: any) => {
        if (doc.category) {
          categories.add(doc.category)
        }
      })
    })

    return Array.from(categories)
  }

  const uniqueCategories = getUniqueCategories()

  // Filter function for documents
  const filterDocuments = (documents: any[]) => {
    return documents.filter((doc) => {
      const matchesSearch =
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }

  return (
    <div className="flex flex-col">
      <section className="w-full py-10 bg-muted/30">
        <div className="container px-4 md:px-6">
          <PageHeader
            title="Download Center"
            description="Access product datasheets, user manuals, firmware updates, software, and white papers for SenseLive products and solutions."
          />

          {/* Search and filter section */}
          <div className="mt-8 mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search documents..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select
                  className="bg-background border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {uniqueCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
              >
                Reset Filters
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              {searchTerm || selectedCategory !== "All" ? (
                <p>
                  Showing filtered results for
                  {searchTerm ? <span className="font-medium"> "{searchTerm}" </span> : ""}
                  {searchTerm && selectedCategory !== "All" ? "in " : ""}
                  {selectedCategory !== "All" ? <span className="font-medium">{selectedCategory}</span> : ""}
                </p>
              ) : (
                <p>Browse all documents or use the search and filter options above</p>
              )}
            </div>
          </div>

          <Tabs defaultValue="datasheets" className="mt-6">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent overflow-x-auto flex-nowrap">
              <TabsTrigger
                value="datasheets"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3 text-muted-foreground data-[state=active]:text-foreground"
              >
                Datasheets
              </TabsTrigger>
              <TabsTrigger
                value="manuals"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3 text-muted-foreground data-[state=active]:text-foreground"
              >
                User Manuals
              </TabsTrigger>
              <TabsTrigger
                value="firmware"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3 text-muted-foreground data-[state=active]:text-foreground"
              >
                Firmware
              </TabsTrigger>
              <TabsTrigger
                value="software"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3 text-muted-foreground data-[state=active]:text-foreground"
              >
                Software
              </TabsTrigger>
              <TabsTrigger
                value="whitepapers"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3 text-muted-foreground data-[state=active]:text-foreground"
              >
                White Papers
              </TabsTrigger>
            </TabsList>

            <TabsContent value="datasheets" className="pt-6">
              {filterDocuments(downloads.datasheets).length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterDocuments(downloads.datasheets).map((download, index) => (
                    <DownloadCard
                      key={index}
                      title={download.title}
                      description={download.description}
                      type="datasheet"
                      version={download.version}
                      date={download.date}
                      fileSize={download.fileSize}
                      downloadUrl={download.downloadUrl}
                      category={download.category}
                      relatedProducts={download.relatedProducts}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <DownloadIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No datasheets found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="manuals" className="pt-6">
              {filterDocuments(downloads.manuals).length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterDocuments(downloads.manuals).map((download, index) => (
                    <DownloadCard
                      key={index}
                      title={download.title}
                      description={download.description}
                      type="manual"
                      version={download.version}
                      date={download.date}
                      fileSize={download.fileSize}
                      downloadUrl={download.downloadUrl}
                      category={download.category}
                      relatedProducts={download.relatedProducts}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <DownloadIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No manuals found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="firmware" className="pt-6">
              {filterDocuments(downloads.firmware).length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterDocuments(downloads.firmware).map((download, index) => (
                    <DownloadCard
                      key={index}
                      title={download.title}
                      description={download.description}
                      type="firmware"
                      version={download.version}
                      date={download.date}
                      fileSize={download.fileSize}
                      downloadUrl={download.downloadUrl}
                      category={download.category}
                      relatedProducts={download.relatedProducts}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <DownloadIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No firmware found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="software" className="pt-6">
              {filterDocuments(downloads.software).length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterDocuments(downloads.software).map((download, index) => (
                    <DownloadCard
                      key={index}
                      title={download.title}
                      description={download.description}
                      type="software"
                      version={download.version}
                      date={download.date}
                      fileSize={download.fileSize}
                      downloadUrl={download.downloadUrl}
                      category={download.category}
                      relatedProducts={download.relatedProducts}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <DownloadIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No software found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="whitepapers" className="pt-6">
              {filterDocuments(downloads.whitepapers).length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterDocuments(downloads.whitepapers).map((download, index) => (
                    <DownloadCard
                      key={index}
                      title={download.title}
                      description={download.description}
                      type="whitepaper"
                      date={download.date}
                      fileSize={download.fileSize}
                      downloadUrl={download.downloadUrl}
                      category={download.category}
                      relatedProducts={download.relatedProducts}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <DownloadIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No white papers found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}


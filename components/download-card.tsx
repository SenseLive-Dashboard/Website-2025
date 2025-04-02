import Link from "next/link"
import { Download, FileText, BookOpen, Cpu, Package } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

export function DownloadCard({
  title,
  description,
  type,
  version,
  date,
  fileSize,
  downloadUrl,
  category,
  relatedProducts,
}: DownloadCardProps) {
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

  return (
    <Card className="h-full hover:shadow-md transition-shadow border-muted hover:border-primary/50">
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <div className="flex items-start gap-3">
            <div className="mt-1">
              {type === "datasheet" && <FileText className="h-6 w-6 text-primary" />}
              {type === "manual" && <BookOpen className="h-6 w-6 text-primary" />}
              {type === "firmware" && <Cpu className="h-6 w-6 text-primary" />}
              {type === "software" && <Package className="h-6 w-6 text-primary" />}
              {type === "whitepaper" && <FileText className="h-6 w-6 text-primary" />}
            </div>
            <div>
              <CardTitle className="text-base">{title}</CardTitle>
              <CardDescription className="text-sm mt-1">{description}</CardDescription>
              {category && <span className="text-xs text-muted-foreground mt-1 block">{category}</span>}
            </div>
          </div>
          <Badge variant="outline" className="text-xs font-normal">
            {type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-3">
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2">
          {version && <span>Version: {version}</span>}
          <span>Released: {date}</span>
          {fileSize && <span>Size: {fileSize}</span>}
        </div>
      </CardContent>
      <CardContent className="p-4 pt-0">
        <Link href={downloadUrl}>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Download
          </Button>
        </Link>

        {relatedProducts && relatedProducts.length > 0 && (
          <div className="mt-4">
            <p className="text-xs font-medium text-muted-foreground mb-2">Related Products:</p>
            <div className="flex flex-wrap gap-2">
              {relatedProducts.map((productId) => (
                <Link
                  key={productId}
                  href={`/products/${getCategoryForProduct(productId)}/${productId}`}
                  className="text-xs px-2 py-1 bg-muted rounded-md hover:bg-muted/80 transition-colors"
                >
                  {getProductName(productId)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}


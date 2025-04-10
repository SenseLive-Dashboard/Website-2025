import type { Metadata } from "next"
import DownloadsPageClient from "./downloads-page-client"

export const metadata: Metadata = {
  title: "Downloads",
  description: "Access SenseLive product datasheets, manuals, firmware updates, software, and white papers.",
}

export default function DownloadsPage() {
  return <DownloadsPageClient />
}


import type { Metadata } from "next"
import CareersPageClient from "./CareersPageClient"

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the SenseLive team and help shape the future of IoT technology. Explore current job openings and opportunities.",
}

export default function CareersPage() {
  return <CareersPageClient />
}


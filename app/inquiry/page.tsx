import type { Metadata } from "next"
import InquiryClientPage from "./InquiryClientPage"

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Request a quote for SenseLive products and solutions tailored to your specific requirements.",
}

export default function InquiryPage() {
  return <InquiryClientPage />
}


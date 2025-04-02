import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SenseLive. Contact our sales, support, or general inquiries team.",
}

export default function ContactPage() {
  return <ContactPageClient />
}


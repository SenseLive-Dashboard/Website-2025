import type { Metadata } from "next"
import AdminHeader from "@/components/admin-header"
import { DownloadForm } from "@/components/download-form"

export const metadata: Metadata = {
  title: "Add New Document | SenseLive Admin",
  description: "Add a new document to the SenseLive download center",
}

export default function NewDownloadPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <AdminHeader />

      <main className="container px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Add New Document</h1>

        <DownloadForm />
      </main>
    </div>
  )
}


import type { Metadata } from "next"
import AdminHeader from "@/components/admin-header"
import { DownloadForm } from "@/components/download-form"
import { getDownloadById } from "@/lib/download-service"

export const metadata: Metadata = {
  title: "Edit Document | SenseLive Admin",
  description: "Edit a document in the SenseLive download center",
}

export default async function EditDownloadPage({
  params,
}: {
  params: { id: string }
}) {
  const download = await getDownloadById(params.id)

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminHeader />

      <main className="container px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Edit Document</h1>

        <DownloadForm initialData={download} />
      </main>
    </div>
  )
}


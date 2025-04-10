import type { Metadata } from "next"
import MediaPageClient from "./media-page-client"

export const metadata: Metadata = {
  title: "Media Library | SenseLive Admin",
  description: "Manage your media files in the SenseLive admin dashboard",
}

export default async function MediaPage({
  searchParams,
}: {
  searchParams: {
    page?: string
    search?: string
    type?: string
  }
}) {
  return <MediaPageClient searchParams={searchParams} />
}


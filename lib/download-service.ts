// Types for downloads
export interface Download {
  id: string
  title: string
  description: string
  type: "datasheet" | "manual" | "firmware" | "software" | "whitepaper"
  fileUrl: string
  downloadUrl: string
  fileSize: string
  version?: string
  date: string
  relatedProducts?: string[]
}

// Mock data for downloads
const mockDownloads: Download[] = [
  {
    id: "1",
    title: "X7700 Datasheet",
    description: "Technical specifications for the X7700 wireless sensor",
    type: "datasheet",
    fileUrl: "/downloads/X7700-datasheet.pdf",
    downloadUrl: "/downloads/X7700-datasheet.pdf",
    fileSize: "1.2 MB",
    version: "2.1",
    date: "2023-10-15",
    relatedProducts: ["X7700"],
  },
  {
    id: "2",
    title: "X7800D User Manual",
    description: "User guide for the X7800D wireless sensor",
    type: "manual",
    fileUrl: "/downloads/X7800D-manual.pdf",
    downloadUrl: "/downloads/X7800D-manual.pdf",
    fileSize: "3.5 MB",
    version: "1.0",
    date: "2023-09-20",
    relatedProducts: ["X7800D"],
  },
  {
    id: "3",
    title: "X5050 Gateway Firmware",
    description: "Latest firmware for the X5050 gateway",
    type: "firmware",
    fileUrl: "/downloads/X5050-firmware-v2.1.zip",
    downloadUrl: "/downloads/X5050-firmware-v2.1.zip",
    fileSize: "8.7 MB",
    version: "2.1.3",
    date: "2023-11-05",
    relatedProducts: ["X5050"],
  },
  {
    id: "4",
    title: "SenseLive Configuration Software",
    description: "Software for configuring SenseLive devices",
    type: "software",
    fileUrl: "/downloads/senselive-config-v3.2.exe",
    downloadUrl: "/downloads/senselive-config-v3.2.exe",
    fileSize: "24.6 MB",
    version: "3.2.0",
    date: "2023-10-30",
    relatedProducts: ["X7700", "X7800D", "X5050"],
  },
  {
    id: "5",
    title: "Energy Management Solutions Whitepaper",
    description: "Best practices for energy management using SenseLive products",
    type: "whitepaper",
    fileUrl: "/downloads/energy-management-whitepaper.pdf",
    downloadUrl: "/downloads/energy-management-whitepaper.pdf",
    fileSize: "2.8 MB",
    date: "2023-08-15",
    relatedProducts: [],
  },
]

// Function to get all downloads with pagination and filtering
export async function getAllDownloads({
  page = 1,
  limit = 10,
  search = "",
  type = "",
}: {
  page?: number
  limit?: number
  search?: string
  type?: string
}) {
  // Filter downloads based on search and type
  let filteredDownloads = [...mockDownloads]

  if (search) {
    const searchLower = search.toLowerCase()
    filteredDownloads = filteredDownloads.filter(
      (download) =>
        download.title.toLowerCase().includes(searchLower) || download.description.toLowerCase().includes(searchLower),
    )
  }

  if (type && type !== "all") {
    filteredDownloads = filteredDownloads.filter((download) => download.type === type)
  }

  // Calculate pagination
  const totalDownloads = filteredDownloads.length
  const totalPages = Math.ceil(totalDownloads / limit)
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedDownloads = filteredDownloads.slice(startIndex, endIndex)

  return {
    downloads: paginatedDownloads,
    totalDownloads,
    totalPages,
    currentPage: page,
  }
}

// Function to get a single download by ID
export async function getDownloadById(id: string) {
  const download = mockDownloads.find((download) => download.id === id)
  return download
}

// Function to create a new download
export async function createDownload(downloadData: Omit<Download, "id" | "date">) {
  const newDownload: Download = {
    id: (mockDownloads.length + 1).toString(),
    ...downloadData,
    date: new Date().toISOString(),
  }

  mockDownloads.push(newDownload)
  return newDownload
}

// Function to update an existing download
export async function updateDownload(id: string, downloadData: Partial<Omit<Download, "id">>) {
  const downloadIndex = mockDownloads.findIndex((download) => download.id === id)

  if (downloadIndex === -1) {
    throw new Error(`Download with ID ${id} not found`)
  }

  mockDownloads[downloadIndex] = {
    ...mockDownloads[downloadIndex],
    ...downloadData,
  }

  return mockDownloads[downloadIndex]
}

// Function to delete a download
export async function deleteDownload(id: string) {
  const downloadIndex = mockDownloads.findIndex((download) => download.id === id)

  if (downloadIndex === -1) {
    throw new Error(`Download with ID ${id} not found`)
  }

  const deletedDownload = mockDownloads.splice(downloadIndex, 1)[0]
  return deletedDownload
}

// Function to get downloads by product
export async function getDownloadsByProduct(productId: string) {
  const downloads = mockDownloads.filter((download) => download.relatedProducts?.includes(productId))

  return downloads
}

// Function to calculate file size (would be used with real file uploads)
export function calculateFileSize(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} B`
  } else if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`
  } else if (bytes < 1024 * 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  } else {
    return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`
  }
}


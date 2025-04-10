"use server"

import { revalidatePath } from "next/cache"

// Types
export interface Product {
  id: string
  name: string
  shortDescription: string
  content: string
  image: string
  galleryImages: string[]
  category: string
  categories: string[]
  status: "draft" | "published"
  featured: boolean
  keyFeatures: string[]
  specifications: Record<string, Record<string, string>>
  datasheetUrl: string
  metaTitle?: string
  metaDescription?: string
  metaKeywords?: string
  createdAt: string
  updatedAt: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image?: string
  showInNavigation: boolean
  showInFooter: boolean
  sortOrder: number
  metaTitle?: string
  metaDescription?: string
  productCount: number
  createdAt: string
  updatedAt: string
}

export interface MediaItem {
  id: string
  name: string
  url: string
  type: string
  size: number
  createdAt: string
}

// Update the products array to ensure consistent naming and filter out SL products

// Mock data for demonstration
let products: Product[] = [
  {
    id: "x7700",
    name: "SenseLive X7700",
    shortDescription: "DIN-Rail LoRa Device",
    content: "<p>The X7700 is a DIN-Rail mounted LoRa device designed for industrial applications.</p>",
    image: "/placeholder.svg?height=300&width=300&text=X7700",
    galleryImages: [
      "/placeholder.svg?height=300&width=300&text=X7700-1",
      "/placeholder.svg?height=300&width=300&text=X7700-2",
    ],
    category: "wireless",
    categories: ["wireless", "connectivity"],
    status: "published",
    featured: true,
    keyFeatures: [
      "DIN-Rail Mounting",
      "RS485 & Modbus RTU support",
      "Long-Range LoRa Transmission",
      "Secure & Encrypted Communication",
    ],
    specifications: {
      Communication: {
        "Wireless Protocol": "LoRa",
        Frequency: "868/915 MHz",
        Range: "Up to 10km line of sight",
      },
      Hardware: {
        Processor: "ARM Cortex-M4",
        Memory: "128KB RAM",
        "Power Supply": "12-24V DC",
      },
    },
    datasheetUrl: "/downloads/datasheets/x7700.pdf",
    createdAt: "2023-01-15T10:00:00Z",
    updatedAt: "2023-06-20T14:30:00Z",
  },
  {
    id: "x5050",
    name: "SenseLive X5050",
    shortDescription: "RS485 to TCP/IP Modbus Server",
    content: "<p>The X5050 is a Modbus gateway that converts between Modbus RTU and Modbus TCP.</p>",
    image: "/placeholder.svg?height=300&width=300&text=X5050",
    galleryImages: [
      "/placeholder.svg?height=300&width=300&text=X5050-1",
      "/placeholder.svg?height=300&width=300&text=X5050-2",
    ],
    category: "gateways",
    categories: ["gateways", "connectivity"],
    status: "published",
    featured: false,
    keyFeatures: ["MQTT Support", "Web Configuration", "Multiple Hosts", "Industrial Grade"],
    specifications: {
      Communication: {
        Ethernet: "10/100 Mbps",
        Serial: "RS485/RS232",
        Protocols: "Modbus RTU/TCP, MQTT",
      },
      Hardware: {
        Processor: "ARM Cortex-A7",
        Memory: "256MB RAM",
        "Power Supply": "9-36V DC",
      },
    },
    datasheetUrl: "/downloads/datasheets/x5050.pdf",
    createdAt: "2023-02-10T09:15:00Z",
    updatedAt: "2023-07-05T11:45:00Z",
  },
  {
    id: "x7400d",
    name: "SenseLive X7400D",
    shortDescription: "DIN-rail 4G CAT1 DTU with RS485 Interface",
    content:
      "<p>SenseLive X7400D is a DIN-rail mountable 4G CAT1 Data Transmission Unit (DTU) developed for industrial environments. It provides secure and real-time RS485-to-4G data communication, with 2G fallback, MQTT and JSON support, and seamless remote management using SenseLive Vircom software.</p>",
    image: "/placeholder.svg?height=300&width=300",
    galleryImages: [
      "/placeholder.svg?height=300&width=300&text=X7400D-Front",
      "/placeholder.svg?height=300&width=300&text=X7400D-Side",
      "/placeholder.svg?height=300&width=300&text=X7400D-Ports",
    ],
    category: "connectivity",
    categories: ["connectivity", "gateways"],
    status: "published",
    featured: true,
    keyFeatures: [
      "4G CAT1 DTU with RS485 interface and fallback to 2G/GPRS",
      "High-speed transmission: 5Mbps uplink / 10Mbps downlink",
      "Compact DIN-Rail mount design, with fire-retardant housing",
      "Cloud-ready: Supports MQTT, Modbus RTU to JSON, HTTP GET/POST",
      "Edge computing: Includes local caching, scaling, threshold alarms",
      "Remote configuration & updates via SenseLive Vircom",
      "Supports P2P and M2M networking without custom servers",
      "Wide voltage support (9–24V DC)",
      "-40°C to +85°C operating range with industrial EMC standards compliance",
    ],
    specifications: {
      Communication: {
        "Wireless Connectivity": "4G CAT1 (TD-LTE, FDD-LTE), GSM fallback",
        "Data Transmission Rate": "5 Mbps (uplink), 10 Mbps (downlink)",
        "Serial Interface": "RS485",
        "Protocols Supported": "Modbus RTU, MQTT, HTTP POST/GET, JSON",
        "SIM Card Type": "Standard SIM (1.8V/3V)",
      },
      Hardware: {
        "Operating Voltage": "9–24V DC",
        "Operating Temperature": "-40°C to +85°C",
        Structure: "Compact, DIN-rail mount, flame-retardant",
        "Software Support": "Fully managed by SenseLive Vircom",
        "Additional Features": "P2P, M2M, offline storage, edge computing",
      },
    },
    datasheetUrl: "/downloads/datasheets/x7400d.pdf",
    createdAt: "2023-03-15T08:30:00Z",
    updatedAt: "2023-08-10T14:45:00Z",
  },
]

let categories: Category[] = [
  {
    id: "wireless",
    name: "LoRa/ZigBee Devices",
    slug: "wireless",
    description: "Wireless communication devices using LoRa and ZigBee protocols",
    image: "/placeholder.svg?height=300&width=600&text=Wireless+Devices",
    showInNavigation: true,
    showInFooter: true,
    sortOrder: 1,
    metaTitle: "LoRa & ZigBee Wireless Devices | SenseLive",
    metaDescription: "Explore our range of LoRa and ZigBee wireless devices for IoT applications",
    productCount: 3,
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
  },
  {
    id: "gateways",
    name: "Modbus Gateways",
    slug: "gateways",
    description: "Protocol conversion gateways for Modbus RTU and TCP",
    image: "/placeholder.svg?height=300&width=600&text=Modbus+Gateways",
    showInNavigation: true,
    showInFooter: true,
    sortOrder: 2,
    metaTitle: "Modbus Gateways | SenseLive",
    metaDescription: "Industrial Modbus gateways for protocol conversion and data acquisition",
    productCount: 1,
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
  },
  {
    id: "controllers",
    name: "Remote IO Controllers",
    slug: "controllers",
    description: "Remote IO controllers for industrial automation",
    image: "/placeholder.svg?height=300&width=600&text=IO+Controllers",
    showInNavigation: true,
    showInFooter: true,
    sortOrder: 3,
    metaTitle: "Remote IO Controllers | SenseLive",
    metaDescription: "Industrial remote IO controllers for automation and monitoring",
    productCount: 2,
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
  },
  {
    id: "connectivity",
    name: "4G/5G Solutions",
    slug: "connectivity",
    description: "Cellular connectivity solutions for IoT applications",
    image: "/placeholder.svg?height=300&width=600&text=Cellular+Connectivity",
    showInNavigation: true,
    showInFooter: true,
    sortOrder: 4,
    metaTitle: "4G/5G Connectivity Solutions | SenseLive",
    metaDescription: "Cellular connectivity solutions for remote IoT applications",
    productCount: 3,
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
  },
]

let mediaItems: MediaItem[] = [
  {
    id: "media1",
    name: "x7700-product.jpg",
    url: "/placeholder.svg?height=300&width=300&text=X7700",
    type: "image/jpeg",
    size: 245000,
    createdAt: "2023-05-15T10:30:00Z",
  },
  {
    id: "media2",
    name: "x5050-product.jpg",
    url: "/placeholder.svg?height=300&width=300&text=X5050",
    type: "image/jpeg",
    size: 320000,
    createdAt: "2023-05-14T14:20:00Z",
  },
  {
    id: "media3",
    name: "wireless-category.jpg",
    url: "/placeholder.svg?height=300&width=600&text=Wireless+Devices",
    type: "image/jpeg",
    size: 180000,
    createdAt: "2023-05-13T09:15:00Z",
  },
  {
    id: "media4",
    name: "x7700-datasheet.pdf",
    url: "/downloads/datasheets/x7700.pdf",
    type: "application/pdf",
    size: 1250000,
    createdAt: "2023-05-12T16:45:00Z",
  },
  {
    id: "media5",
    name: "x7400d-product.jpg",
    url: "/placeholder.svg?height=300&width=300&text=X7400D",
    type: "image/jpeg",
    size: 280000,
    createdAt: "2023-06-18T11:25:00Z",
  },
]

// Product functions
export async function getProductCount(): Promise<number> {
  return products.length
}

export async function getFeaturedProductCount(): Promise<number> {
  return products.filter((product) => product.featured).length
}

export async function getAllProducts({
  page = 1,
  search = "",
  category = "",
  status = "",
}: {
  page?: number
  search?: string
  category?: string
  status?: string
}): Promise<{ products: Product[]; totalPages: number }> {
  const pageSize = 10

  // Filter products based on search, category, and status
  let filteredProducts = [...products]

  if (search) {
    const searchLower = search.toLowerCase()
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchLower) ||
        product.shortDescription.toLowerCase().includes(searchLower) ||
        product.id.toLowerCase().includes(searchLower),
    )
  }

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category || product.categories.includes(category),
    )
  }

  if (status) {
    filteredProducts = filteredProducts.filter((product) => product.status === status)
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / pageSize)
  const startIndex = (page - 1) * pageSize
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + pageSize)

  return {
    products: paginatedProducts,
    totalPages,
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  return products.find((product) => product.id === id) || null
}

export async function createProduct(productData: Omit<Product, "createdAt" | "updatedAt">): Promise<Product> {
  const now = new Date().toISOString()

  const newProduct: Product = {
    ...productData,
    createdAt: now,
    updatedAt: now,
  }

  products.unshift(newProduct)

  revalidatePath("/admin/products")
  revalidatePath("/products")
  revalidatePath(`/products/${newProduct.category}`)

  return newProduct
}

export async function updateProduct(id: string, productData: Partial<Product>): Promise<Product | null> {
  const productIndex = products.findIndex((product) => product.id === id)

  if (productIndex === -1) {
    return null
  }

  const updatedProduct: Product = {
    ...products[productIndex],
    ...productData,
    updatedAt: new Date().toISOString(),
  }

  products[productIndex] = updatedProduct

  revalidatePath("/admin/products")
  revalidatePath(`/admin/products/${id}/edit`)
  revalidatePath("/products")
  revalidatePath(`/products/${updatedProduct.category}`)
  revalidatePath(`/products/${updatedProduct.category}/${id}`)

  return updatedProduct
}

export async function deleteProduct(id: string): Promise<boolean> {
  const initialLength = products.length
  const product = products.find((p) => p.id === id)

  products = products.filter((product) => product.id !== id)

  if (products.length < initialLength) {
    revalidatePath("/admin/products")
    revalidatePath("/products")

    if (product) {
      revalidatePath(`/products/${product.category}`)
    }

    return true
  }

  return false
}

// Category functions
export async function getCategoryCount(): Promise<number> {
  return categories.length
}

export async function getAllCategories({
  page = 1,
  search = "",
}: {
  page?: number
  search?: string
}): Promise<{ categories: Category[]; totalPages: number }> {
  const pageSize = 10

  // Filter categories based on search
  let filteredCategories = [...categories]

  if (search) {
    const searchLower = search.toLowerCase()
    filteredCategories = filteredCategories.filter(
      (category) =>
        category.name.toLowerCase().includes(searchLower) || category.slug.toLowerCase().includes(searchLower),
    )
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredCategories.length / pageSize)
  const startIndex = (page - 1) * pageSize
  const paginatedCategories = filteredCategories.slice(startIndex, startIndex + pageSize)

  return {
    categories: paginatedCategories,
    totalPages,
  }
}

export async function getCategoryById(id: string): Promise<Category | null> {
  return categories.find((category) => category.id === id) || null
}

export async function createCategory(
  categoryData: Omit<Category, "createdAt" | "updatedAt" | "productCount">,
): Promise<Category> {
  const now = new Date().toISOString()

  const newCategory: Category = {
    ...categoryData,
    productCount: 0,
    createdAt: now,
    updatedAt: now,
  }

  categories.push(newCategory)

  revalidatePath("/admin/categories")
  revalidatePath("/products")

  return newCategory
}

export async function updateCategory(id: string, categoryData: Partial<Category>): Promise<Category | null> {
  const categoryIndex = categories.findIndex((category) => category.id === id)

  if (categoryIndex === -1) {
    return null
  }

  const updatedCategory: Category = {
    ...categories[categoryIndex],
    ...categoryData,
    updatedAt: new Date().toISOString(),
  }

  categories[categoryIndex] = updatedCategory

  revalidatePath("/admin/categories")
  revalidatePath(`/admin/categories/${id}/edit`)
  revalidatePath("/products")
  revalidatePath(`/products/${updatedCategory.slug}`)

  return updatedCategory
}

export async function deleteCategory(id: string): Promise<boolean> {
  const initialLength = categories.length
  const category = categories.find((c) => c.id === id)

  categories = categories.filter((category) => category.id !== id)

  if (categories.length < initialLength) {
    revalidatePath("/admin/categories")
    revalidatePath("/products")

    if (category) {
      revalidatePath(`/products/${category.slug}`)
    }

    return true
  }

  return false
}

// Media functions
export async function getAllMedia({
  page = 1,
  search = "",
  type = "",
}: {
  page?: number
  search?: string
  type?: string
}): Promise<{ media: MediaItem[]; totalPages: number }> {
  const pageSize = 24

  // Filter media based on search and type
  let filteredMedia = [...mediaItems]

  if (search) {
    const searchLower = search.toLowerCase()
    filteredMedia = filteredMedia.filter((media) => media.name.toLowerCase().includes(searchLower))
  }

  if (type) {
    filteredMedia = filteredMedia.filter((media) => media.type.startsWith(type))
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredMedia.length / pageSize)
  const startIndex = (page - 1) * pageSize
  const paginatedMedia = filteredMedia.slice(startIndex, startIndex + pageSize)

  return {
    media: paginatedMedia,
    totalPages,
  }
}

export async function uploadMedia(
  file: File,
  onProgress?: (event: { loaded: number; total: number }) => void,
): Promise<MediaItem> {
  // In a real implementation, this would upload to a storage service
  // For now, we'll simulate the upload

  // Simulate upload progress
  if (onProgress) {
    let loaded = 0
    const total = file.size
    const interval = setInterval(() => {
      loaded += total / 10
      if (loaded >= total) {
        clearInterval(interval)
        loaded = total
      }
      onProgress({ loaded, total })
    }, 200)
  }

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Create a new media item
  const id = `media${Date.now()}`
  const url = URL.createObjectURL(file)

  const newMedia: MediaItem = {
    id,
    name: file.name,
    url,
    type: file.type,
    size: file.size,
    createdAt: new Date().toISOString(),
  }

  mediaItems.unshift(newMedia)

  revalidatePath("/admin/media")

  return newMedia
}

export async function deleteMedia(id: string): Promise<boolean> {
  const initialLength = mediaItems.length

  mediaItems = mediaItems.filter((media) => media.id !== id)

  if (mediaItems.length < initialLength) {
    revalidatePath("/admin/media")
    return true
  }

  return false
}


// Helper functions for product image management

export function getProductImagePath(productId: string, view = "main"): string {
  // Map product IDs to their image paths
  const productImageMap: Record<string, Record<string, string>> = {
    sl6002a: {
      main: "/products/controllers/sl6002a/main.png",
      front: "/products/controllers/sl6002a/front.png",
      back: "/products/controllers/sl6002a/back.png",
      side: "/products/controllers/sl6002a/side.png",
      angle: "/products/controllers/sl6002a/angle.png",
      thumbnail: "/products/controllers/sl6002a/thumbnail.png",
    },
    e7500: {
      main: "/products/controllers/e7500/main.png",
      front: "/products/controllers/e7500/front.png",
      back: "/products/controllers/e7500/back.png",
      side: "/products/controllers/e7500/side.png",
      angle: "/products/controllers/e7500/angle.png",
      thumbnail: "/products/controllers/e7500/thumbnail.png",
    },
    // Add other products as needed
  }

  // Return the requested image path or a placeholder if not found
  return productImageMap[productId]?.[view] || `/placeholder.svg?height=300&width=300&text=${productId.toUpperCase()}`
}

export function getProductGalleryImages(productId: string): string[] {
  // For SL6002A, return all the different views we have
  if (productId === "sl6002a") {
    return [
      "/products/controllers/sl6002a/front.png",
      "/products/controllers/sl6002a/back.png",
      "/products/controllers/sl6002a/side.png",
      "/products/controllers/sl6002a/angle.png",
    ]
  }

  // For E7500, return all the different views we have
  if (productId === "e7500") {
    return [
      "/products/controllers/e7500/front.png",
      "/products/controllers/e7500/back.png",
      "/products/controllers/e7500/side.png",
      "/products/controllers/e7500/angle.png",
    ]
  }

  // Default placeholder images for other products
  return [
    `/placeholder.svg?height=300&width=300&text=${productId.toUpperCase()}_VIEW_1`,
    `/placeholder.svg?height=300&width=300&text=${productId.toUpperCase()}_VIEW_2`,
    `/placeholder.svg?height=300&width=300&text=${productId.toUpperCase()}_VIEW_3`,
  ]
}

export function getProductAltText(productId: string, view = "main"): string {
  const productNames: Record<string, string> = {
    sl6002a: "SenseLive SL6002A Remote I/O Controller",
    e7500: "SenseLive E7500 RS485-based Remote IO Controller",
    // Add other products as needed
  }

  const viewDescriptions: Record<string, string> = {
    main: "main view",
    front: "front view",
    back: "back view",
    side: "side view",
    angle: "angle view",
    thumbnail: "thumbnail",
  }

  const productName = productNames[productId] || productId.toUpperCase()
  const viewDescription = viewDescriptions[view] || view

  return `${productName} - ${viewDescription}`
}


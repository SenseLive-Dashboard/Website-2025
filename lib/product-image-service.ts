// Helper functions for product image management

export function getProductImagePath(productId: string, view = "main"): string {
  // Map product IDs to their image paths
  const productImageMap: Record<string, Record<string, string>> = {
    x7900: {
      main: "/products/wireless/x7900/main.png",
      front: "/products/wireless/x7900/main.png",
      back: "/products/wireless/x7900/rear-ports.png",
      side: "/products/wireless/x7900/side-connections.png",
      angle: "/products/wireless/x7900/angle-view.png",
      withAntenna: "/products/wireless/x7900/with-antenna.png",
      thumbnail: "/products/wireless/x7900/thumbnail.png",
    },
    x5050: {
      main: "/products/gateways/x5050/main.png",
      front: "/products/gateways/x5050/front.png",
      back: "/products/gateways/x5050/main.png", // Using main as fallback until we have a back view
      side: "/products/gateways/x5050/main.png", // Using main as fallback until we have a side view
      angle: "/products/gateways/x5050/main.png", // Using main as fallback until we have an angle view
      thumbnail: "/products/gateways/x5050/thumbnail.png",
    },
    x6002a: {
      main: "/products/controllers/x6002a/main.png",
      front: "/products/controllers/x6002a/front.png",
      back: "/products/controllers/x6002a/back.png",
      side: "/products/controllers/x6002a/side.png",
      angle: "/products/controllers/x6002a/angle.png",
      thumbnail: "/products/controllers/x6002a/thumbnail.png",
    },
    e7500: {
      main: "/products/controllers/e7500/main.png",
      front: "/products/controllers/e7500/front.png",
      back: "/products/controllers/e7500/back.png",
      side: "/products/controllers/e7500/side.png",
      angle: "/products/controllers/e7500/angle.png",
      thumbnail: "/products/controllers/e7500/thumbnail.png",
    },
    e7000: {
      main: "/products/controllers/e7000/main.png",
      front: "/products/controllers/e7000/front.png",
      back: "/products/controllers/e7000/back.png",
      side: "/products/controllers/e7000/side.png",
      angle: "/products/controllers/e7000/angle.png",
      thumbnail: "/products/controllers/e7000/thumbnail.png",
    },
    x9000: {
      main: "/products/connectivity/x9000/main.png",
      front: "/products/connectivity/x9000/front.png",
      back: "/products/connectivity/x9000/back.png",
      side: "/products/connectivity/x9000/side.png",
      angle: "/products/connectivity/x9000/angle.png",
      thumbnail: "/products/connectivity/x9000/thumbnail.png",
    },
    edge8000: {
      main: "/products/wireless-bus-bar/edge8000/complete.png",
      front: "/products/wireless-bus-bar/edge8000/front.png",
      back: "/products/wireless-bus-bar/edge8000/back.png",
      side: "/products/wireless-bus-bar/edge8000/side.png",
      angle: "/products/wireless-bus-bar/edge8000/angle.png",
      thumbnail: "/products/wireless-bus-bar/edge8000/thumbnail.png",
    },
  }

  // Return the requested image path or a placeholder if not found
  return productImageMap[productId]?.[view] || `/placeholder.svg?height=300&width=300&text=${productId.toUpperCase()}`
}

export function getProductGalleryImages(productId: string): string[] {
  // For X7900, return all the different views we have
  if (productId === "x7900") {
    return [
      "/products/wireless/x7900/main.png",
      "/products/wireless/x7900/with-antenna.png",
      "/products/wireless/x7900/angle-view.png",
      "/products/wireless/x7900/rear-ports.png",
      "/products/wireless/x7900/side-connections.png",
    ]
  }

  // For other products, return their respective gallery images
  if (productId === "x6002a") {
    return [
      "/products/controllers/x6002a/front.png",
      "/products/controllers/x6002a/back.png",
      "/products/controllers/x6002a/side.png",
      "/products/controllers/x6002a/angle.png",
    ]
  }

  if (productId === "e7500") {
    return [
      "/products/controllers/e7500/front.png",
      "/products/controllers/e7500/back.png",
      "/products/controllers/e7500/side.png",
      "/products/controllers/e7500/angle.png",
    ]
  }

  if (productId === "e7000") {
    return [
      "/products/controllers/e7000/front.png",
      "/products/controllers/e7000/back.png",
      "/products/controllers/e7000/side.png",
      "/products/controllers/e7000/angle.png",
    ]
  }

  if (productId === "x9000") {
    return [
      "/products/connectivity/x9000/front.png",
      "/products/connectivity/x9000/back.png",
      "/products/connectivity/x9000/side.png",
      "/products/connectivity/x9000/angle.png",
    ]
  }

  // For X5050, return the available views
  if (productId === "x5050") {
    return ["/products/gateways/x5050/main.png", "/products/gateways/x5050/front.png"]
  }

  if (productId === "edge8000") {
    return [
      "/products/wireless-bus-bar/edge8000/front.png",
      "/products/wireless-bus-bar/edge8000/front-right.png",
      "/products/wireless-bus-bar/edge8000/top-view.png",
      "/products/wireless-bus-bar/edge8000/complete-product.png",
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
    x7900: "SenseLive X7900 LoRa Gateway with TCP Output",
    x5050: "SenseLive X5050 Modbus Gateway RS485 to TCP/IP",
    x6002a: "SenseLive X6002A Remote I/O Controller",
    e7500: "SenseLive E7500 RS485-based Remote IO Controller",
    e7000: "SenseLive E7000 Ethernet-based Remote IO Controller",
    x9000: "SenseLive X9000 4G IoT Gateway with Edge Intelligence",
    edge8000: "SenseLive Edge8000 Wireless Bus Bar Monitoring System",
  }

  const viewDescriptions: Record<string, string> = {
    main: "main view",
    front: "front view",
    back: "back view",
    side: "side view",
    angle: "angle view",
    withAntenna: "with antenna",
    rearPorts: "rear ports view",
    sideConnections: "side connections view",
    thumbnail: "thumbnail",
  }

  const productName = productNames[productId] || productId.toUpperCase()
  const viewDescription = viewDescriptions[view] || view

  return `${productName} - ${viewDescription}`
}


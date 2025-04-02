const { createServer } = require("http")
const { parse } = require("url")
const next = require("next")
const path = require("path")
const fs = require("fs")

// Define environment
const dev = process.env.NODE_ENV !== "production"
const hostname = "localhost"
const port = process.env.PORT || 3000

// Initialize Next.js app
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

// Initialize the server
app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      const { pathname } = parsedUrl

      // Handle static files directly to improve performance
      if (pathname.startsWith("/_next/") || pathname.startsWith("/static/") || pathname.includes(".")) {
        const filePath = path.join(__dirname, "public", pathname)
        // Check if file exists in public folder
        if (fs.existsSync(filePath) && !pathname.startsWith("/_next/")) {
          const stats = fs.statSync(filePath)
          if (stats.isFile()) {
            // Serve static file
            const ext = path.extname(filePath).substring(1).toLowerCase()
            const contentTypeMap = {
              jpg: "image/jpeg",
              jpeg: "image/jpeg",
              png: "image/png",
              gif: "image/gif",
              webp: "image/webp",
              svg: "image/svg+xml",
              css: "text/css",
              js: "application/javascript",
              json: "application/json",
              txt: "text/plain",
              pdf: "application/pdf",
              ico: "image/x-icon",
            }

            const contentType = contentTypeMap[ext] || "application/octet-stream"
            res.writeHead(200, { "Content-Type": contentType })
            fs.createReadStream(filePath).pipe(res)
            return
          }
        }
      }

      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error("Error occurred handling", req.url, err)
      res.statusCode = 500
      res.end("Internal Server Error")
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})


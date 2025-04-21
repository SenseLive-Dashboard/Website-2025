import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20ICON-pWeUYdnNZxYhdOSdEF6Cg6JU2Ak7uX.png"
                alt="SenseLive Logo"
                width={46}
                height={46}
                className="h-[46px] w-[46px]"
              />
              <span className="font-bold text-xl tracking-tight">SenseLive</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Leading provider of IoT hardware and solutions for industrial automation, energy management, and smart
              infrastructure.
            </p>
            <div className="flex space-x-4">
            <Link
              href="https://www.instagram.com/senselive.io?igsh=NjI1b3diaHZ0cTBr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>

              <Link
                href="https://www.linkedin.com/company/senselive/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61574814987925"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/wireless-bus-bar"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Wireless Bus Bar Solutions
                </Link>
              </li>
              <li>
                <Link href="/products/gateways" className="text-muted-foreground hover:text-primary transition-colors">
                  Modbus Gateways
                </Link>
              </li>
              <li>
                <Link
                  href="/products/controllers"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Remote IO Controllers
                </Link>
              </li>
              <li>
                <Link
                  href="/products/connectivity"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  4G/5G Solutions
                </Link>
              </li>
              <li>
                <Link href="/products/wifi" className="text-muted-foreground hover:text-primary transition-colors">
                  WiFi Solutions
                </Link>
              </li>
              <li>
                <Link href="/products/wireless" className="text-muted-foreground hover:text-primary transition-colors">
                  LoRa/ZigBee Devices
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/ems" className="text-muted-foreground hover:text-primary transition-colors">
                  Energy Management
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/water-management"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Water Management
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/digital-checksheet"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Digital Checksheet
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/production-monitoring"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Production Monitoring
                </Link>
              </li>
            </ul>
            <h3 className="font-medium text-lg mt-6 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/downloads" className="text-muted-foreground hover:text-primary transition-colors">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  268, BHAMTEE COLONEY, NAGPUR, NAGPUR, Maharashtra, India - 440022
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+91 9604070622</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+91 8408058531</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:info@senselive.io"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@senselive.io
                </a>
                <p className="text-xs text-muted-foreground mt-1">(For general inquiries)</p>
              </li>
              <li className="flex items-center space-x-2 mt-2">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:support@senselive.io"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  support@senselive.io
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SenseLive Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
            <Link href="/admin/login" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


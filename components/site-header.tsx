"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Laptop,
  Server,
  Wifi,
  Radio,
  Network,
  Zap,
  BarChart3,
  Droplets,
  ClipboardCheck,
  Factory,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

// Product categories with icons
const productCategories = [
  { name: "Wireless Bus Bar Solutions", path: "/products/wireless-bus-bar", icon: Radio },
  { name: "Modbus Gateways", path: "/products/gateways", icon: Server },
  { name: "Remote IO Controllers", path: "/products/controllers", icon: Zap },
  { name: "4G/5G Solutions", path: "/products/connectivity", icon: Network },
  { name: "WiFi Solutions", path: "/products/wifi", icon: Wifi },
  { name: "Optical Fiber", path: "/products/fiber", icon: Server },
  { name: "LoRa/ZigBee Devices", path: "/products/wireless", icon: Radio },
]

// Solution categories with icons
const solutionCategories = [
  { name: "Energy Management", path: "/solutions/ems", icon: BarChart3 },
  { name: "Water Management", path: "/solutions/water-management", icon: Droplets },
  { name: "Digital Checksheet", path: "/solutions/digital-checksheet", icon: ClipboardCheck },
  { name: "Production Monitoring", path: "/solutions/production-monitoring", icon: Factory },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    

    window.addEventListener("scroll", handleScroll)
    setMounted(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);


  useEffect(() => {
    const handleThemeChange = () => {
      // This will trigger a re-render
    };
    window.addEventListener("theme-change", handleThemeChange);
    return () => window.removeEventListener("theme-change", handleThemeChange);
  }, []);

  // Updated routes array - removed "Support"
  const routes = [
    { name: "Home", path: "/" },
    {
      name: "Products",
      path: "/products",
      dropdown: true,
      dropdownContent: "products",
    },
    {
      name: "Solutions",
      path: "/solutions",
      dropdown: true,
      dropdownContent: "solutions",
    },
    { name: "Downloads", path: "/downloads" },
    {
      name: "About",
      path: "/about",
      dropdown: true,
      dropdownContent: "about",
    },
    { name: "Contact", path: "/contact" },
  ]

  const handleDropdownToggle = (dropdownName: string) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdownName)
    }
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !event.target) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeDropdown])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-subtle dark:shadow-subtle-dark border-b"
          : "bg-background/0",
      )}
    >
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-6 md:gap-8 flex-1 justify-center">
          <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-90 absolute left-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20ICON-pWeUYdnNZxYhdOSdEF6Cg6JU2Ak7uX.png"
              alt="SenseLive Logo"
              width={39}
              height={39}
              className="h-[39px] w-[39px] sm:h-[43px] sm:w-[43px]"
              priority
            />
            <span className="font-bold text-xl tracking-tight">SenseLive</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {routes.map((route) => (
              <div key={route.path} className="relative">
                {route.dropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(route.dropdownContent)}
                    onMouseEnter={() => setActiveDropdown(route.dropdownContent)}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1",
                      pathname === route.path || pathname?.startsWith(route.path + "/")
                        ? "text-primary"
                        : "hover:text-primary hover:bg-muted/50",
                    )}
                  >
                    {route.name}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        activeDropdown === route.dropdownContent ? "rotate-180" : "",
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={route.path}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      pathname === route.path || pathname?.startsWith(route.path + "/")
                        ? "text-primary"
                        : "hover:text-primary hover:bg-muted/50",
                    )}
                    onClick={closeDropdowns}
                  >
                    {route.name}
                  </Link>
                )}

                {/* Dropdown menus */}
                {route.dropdown && activeDropdown === route.dropdownContent && (
                  <div
                    className="absolute left-0 mt-1 w-64 origin-top-left rounded-lg bg-card shadow-premium dark:shadow-premium-hover border border-border z-50 transition-all duration-300 opacity-100 animate-fade-up"
                    onMouseLeave={closeDropdowns}
                  >
                    {route.dropdownContent === "products" && (
                      <div className="p-2 grid grid-cols-1 gap-1">
                        {productCategories.map((category) => (
                          <Link
                            key={category.path}
                            href={category.path}
                            className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                            onClick={() => {
                              closeDropdowns()
                              setMobileMenuOpen(false)
                            }}
                          >
                            <category.icon className="h-5 w-5 text-primary" />
                            <span>{category.name}</span>
                          </Link>
                        ))}
                        <div className="border-t my-1"></div>
                        <Link
                          href="/products"
                          className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
                          onClick={() => {
                            closeDropdowns()
                            setMobileMenuOpen(false)
                          }}
                        >
                          <span className="font-medium">View All Products</span>
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </div>
                    )}

                    {route.dropdownContent === "solutions" && (
                      <div className="p-2 grid grid-cols-1 gap-1">
                        {solutionCategories.map((category) => (
                          <Link
                            key={category.path}
                            href={category.path}
                            className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                            onClick={closeDropdowns}
                          >
                            <category.icon className="h-5 w-5 text-primary" />
                            <span>{category.name}</span>
                          </Link>
                        ))}
                        <div className="border-t my-1"></div>
                        <Link
                          href="/solutions"
                          className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
                          onClick={closeDropdowns}
                        >
                          <span className="font-medium">View All Solutions</span>
                          <ChevronDown className="h-4 w-4 rotate-270" />
                        </Link>
                      </div>
                    )}

                    {route.dropdownContent === "about" && (
                      <div className="p-2 grid grid-cols-1 gap-1">
                        <Link
                          href="/about#our-story"
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                          onClick={closeDropdowns}
                        >
                          <span>Our Story</span>
                        </Link>
                        <Link
                          href="/about#leadership"
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                          onClick={closeDropdowns}
                        >
                          <span>Leadership Team</span>
                        </Link>
                        <Link
                          href="/careers"
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                          onClick={closeDropdowns}
                        >
                          <span>Join Our Team</span>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4 absolute right-4">
          {mounted && (
            <div className="hidden md:flex border rounded-full p-1">
              <button
                onClick={() => {
                  document.documentElement.classList.remove("dark");
                  localStorage.setItem("theme", "light");
                  window.dispatchEvent(new Event("theme-change"));
                }}
                className={cn(
                  "p-1.5 rounded-full transition-colors",
                  !document.documentElement.classList.contains("dark")
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted",
                )}
                aria-label="Light mode"
              >
                <Sun className="h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  document.documentElement.classList.add("dark");
                  localStorage.setItem("theme", "dark");
                  window.dispatchEvent(new Event("theme-change"));
                }}
                className={cn(
                  "p-1.5 rounded-full transition-colors",
                  document.documentElement.classList.contains("dark")
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted",
                )}
                aria-label="Dark mode"
              >
                <Moon className="h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                    document.documentElement.classList.add("dark")
                  } else {
                    document.documentElement.classList.remove("dark")
                  }
                  localStorage.removeItem("theme");
                  window.dispatchEvent(new Event("theme-change"));
                }}
                className={cn(
                  "p-1.5 rounded full transition-colors",
                  !localStorage.getItem("theme") && (
                    window.matchMedia("(prefers-color-scheme: dark)").matches ? document.documentElement.classList.contains("dark") : !document.documentElement.classList.contains("dark")
                  )
                )}
                aria-label="System preference"
              >
                <Laptop className="h-4 w-4" />
              </button>
            </div>
          )}
          <Link href="/inquiry" className="hidden md:block">
            <Button className="font-medium transition-all hover:shadow-premium bg-gradient-senselive hover:bg-gradient-premium-hover text-white">
              Get a Quote
            </Button> 
          </Link>
          
          <button
            className="md:hidden rounded-md p-2 hover:bg-muted/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-b transition-all duration-300">
          <div className="flex items-center justify-between py-2 px-4">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20ICON-pWeUYdnNZxYhdOSdEF6Cg6JU2Ak7uX.png"
                alt="SenseLive Logo"
                width={39}
                height={39}
                className="h-[39px] w-[39px]"
              />
              <span className="font-bold text-xl tracking-tight">SenseLive</span>
            </Link>
          </div>
          <div className="container py-4 space-y-1">
            {routes.map((route) => (
              <div key={route.path}>
                {route.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(route.dropdownContent)}
                      className={cn(
                        "flex w-full items-center justify-between py-2 px-3 text-base font-medium rounded-md transition-colors",
                        pathname === route.path || pathname?.startsWith(route.path + "/")
                          ? "text-primary bg-muted/50"
                          : "hover:bg-muted hover:text-primary",
                      )}
                    >
                      <span>{route.name}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          activeDropdown === route.dropdownContent ? "rotate-180" : "",
                        )}
                      />
                    </button>

                    {activeDropdown === route.dropdownContent && (
                      <div className="pl-4 space-y-1 mt-1 overflow-hidden transition-all duration-200">
                        {route.dropdownContent === "products" &&
                          productCategories.map((category) => (
                            <Link
                              key={category.path}
                              href={category.path}
                              className="flex items-center gap-2 py-2 px-3 text-sm font-medium rounded-md transition-colors hover:bg-muted hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <category.icon className="h-4 w-4 text-primary" />
                              <span>{category.name}</span>
                            </Link>
                          ))}

                        {route.dropdownContent === "solutions" &&
                          solutionCategories.map((category) => (
                            <Link
                              key={category.path}
                              href={category.path}
                              className="flex items-center gap-2 py-2 px-3 text-sm font-medium rounded-md transition-colors hover:bg-muted hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <category.icon className="h-4 w-4 text-primary" />
                              <span>{category.name}</span>
                            </Link>
                          ))}

                        {route.dropdownContent === "about" && (
                          <>
                            <Link
                              href="/about#our-story"
                              className="flex items-center gap-2 py-2 px-3 text-sm font-medium rounded-md transition-colors hover:bg-muted hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span>Our Story</span>
                            </Link>
                            <Link
                              href="/about#leadership"
                              className="flex items-center gap-2 py-2 px-3 text-sm font-medium rounded-md transition-colors hover:bg-muted hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span>Leadership Team</span>
                            </Link>
                            <Link
                              href="/careers"
                              className="flex items-center gap-2 py-2 px-3 text-sm font-medium rounded-md transition-colors hover:bg-muted hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span>Join Our Team</span>
                            </Link>
                          </>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={route.path}
                    className={cn(
                      "block py-2 px-3 text-base font-medium rounded-md transition-colors",
                      pathname === route.path || pathname?.startsWith(route.path + "/")
                        ? "text-primary bg-muted/50"
                        : "hover:bg-muted hover:text-primary",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {route.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-2 mt-2 border-t">
              <Link href="/inquiry" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full mt-2 font-medium bg-gradient-premium hover:bg-gradient-premium-hover">
                  Get a Quote
                </Button>
              </Link>
              {mounted && (
                <div className="flex justify-center mt-4 border rounded-full p-1 w-fit mx-auto">
                  <button
                    onClick={() => {
                      document.documentElement.classList.remove("dark")
                      localStorage.setItem("theme", "light")
                      setMobileMenuOpen(false)
                    }}
                    className={cn(
                      "p-1.5 rounded-full transition-colors",
                      !document.documentElement.classList.contains("dark")
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted",
                    )}
                    aria-label="Light mode"
                  >
                    <Sun className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => {
                      document.documentElement.classList.add("dark")
                      localStorage.setItem("theme", "dark")
                      setMobileMenuOpen(false)
                    }}
                    className={cn(
                      "p-1.5 rounded-full transition-colors",
                      document.documentElement.classList.contains("dark")
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted",
                    )}
                    aria-label="Dark mode"
                  >
                    <Moon className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                        document.documentElement.classList.add("dark")
                      } else {
                        document.documentElement.classList.remove("dark")
                      }
                      localStorage.removeItem("theme")
                      setMobileMenuOpen(false)
                    }}
                    className="p-1.5 rounded-full transition-colors hover:bg-muted"
                    aria-label="System preference"
                  >
                    <Laptop className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}


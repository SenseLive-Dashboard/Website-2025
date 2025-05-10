import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { ConditionalHeader } from "@/components/conditional-header"; // New component
import { SiteFooter } from "@/components/site-footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ChatWidget } from "@/components/chat-widget";
import { CookieConsent } from "@/components/cookie-consent";
import { OrganizationStructuredData } from "@/components/structured-data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "SenseLive | Advanced IoT Solutions for Industrial Automation",
    template: "%s | SenseLive IoT Solutions",
  },
  description:
    "Leading provider of IoT hardware and solutions for industrial automation, energy management, and smart infrastructure. Trusted by global enterprises for reliable IoT technology.",
  keywords: [
    "IoT",
    "Industrial IoT",
    "Modbus",
    "Gateway",
    "Remote IO",
    "4G",
    "5G",
    "WiFi",
    "LoRa",
    "ZigBee",
    "Energy Management",
    "Water Management",
    "Digital Transformation",
    "Production Monitoring",
    "Industrial Automation",
    "Smart Infrastructure",
  ],
  authors: [{ name: "SenseLive Technologies" }],
  creator: "SenseLive Technologies",
  publisher: "SenseLive Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://senselive.io",
    title: "SenseLive | Advanced IoT Solutions for Industrial Automation",
    description:
      "Leading provider of IoT hardware and solutions for industrial automation, energy management, and smart infrastructure.",
    siteName: "SenseLive",
  },
  twitter: {
    card: "summary_large_image",
    title: "SenseLive | Advanced IoT Solutions for Industrial Automation",
    description:
      "Leading provider of IoT hardware and solutions for industrial automation, energy management, and smart infrastructure.",
  },
  generator: "v0.dev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20ICON-pWeUYdnNZxYhdOSdEF6Cg6JU2Ak7uX.png"
          type="image/png"
          sizes="46x46"
        />
        <link
          rel="apple-touch-icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20ICON-pWeUYdnNZxYhdOSdEF6Cg6JU2Ak7uX.png"
          sizes="46x46"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <OrganizationStructuredData
          name="SenseLive"
          description="Leading provider of IoT hardware and solutions for industrial automation, energy management, and smart infrastructure."
          logo="https://senselive.com/logo.png"
          url="https://senselive.com"
          sameAs={[
            "https://linkedin.com/company/senselive",
            "https://twitter.com/senselive",
            "https://facebook.com/senselive",
          ]}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <ConditionalHeader /> {/* Use the new Client Component */}
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <ScrollToTop />
            <ChatWidget />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
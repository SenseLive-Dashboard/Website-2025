import Script from "next/script"

interface ProductStructuredDataProps {
  name: string
  description: string
  image: string
  sku: string
  brand: string
  category: string
  url: string
}

export function ProductStructuredData({
  name,
  description,
  image,
  sku,
  brand,
  category,
  url,
}: ProductStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    sku,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    category,
    url,
  }

  return (
    <Script
      id={`product-structured-data-${sku}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface SolutionStructuredDataProps {
  name: string
  description: string
  image: string
  provider: string
  url: string
}

export function SolutionStructuredData({ name, description, image, provider, url }: SolutionStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    image,
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "Organization",
      name: provider,
    },
    url,
  }

  return (
    <Script
      id={`solution-structured-data-${name.replace(/\s+/g, "-").toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface OrganizationStructuredDataProps {
  name: string
  description: string
  logo: string
  url: string
  sameAs: string[]
}

export function OrganizationStructuredData({ name, description, logo, url, sameAs }: OrganizationStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    description,
    logo,
    url,
    sameAs,
  }

  return (
    <Script
      id="organization-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}


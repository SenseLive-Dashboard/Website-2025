import Script from "next/script"

interface ProductStructuredDataProps {
  name: string
  description: string
  image: string
  sku: string
  brand: string
  category: string
  url: string
  price?: number
  currency?: string
  availability?: "InStock" | "OutOfStock" | "PreOrder"
  ratingValue?: number
  reviewCount?: number
}

export function ProductStructuredData({
  name,
  description,
  image,
  sku,
  brand,
  category,
  url,
  price,
  currency = "USD",
  availability = "InStock",
  ratingValue,
  reviewCount,
}: ProductStructuredDataProps) {
  // Ensure image is an absolute URL
  const absoluteImageUrl = image.startsWith("http")
    ? image
    : `${process.env.NEXT_PUBLIC_SITE_URL || "https://senselive.com"}${image}`

  // Ensure URL is an absolute URL
  const absoluteUrl = url.startsWith("http")
    ? url
    : `${process.env.NEXT_PUBLIC_SITE_URL || "https://senselive.com"}${url}`

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name,
    description,
    image: absoluteImageUrl,
    sku,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    category,
    offers: {
      "@type": "Offer",
      url: absoluteUrl,
      priceCurrency: currency,
      price: price || undefined,
      availability: `https://schema.org/${availability}`,
    },
    ...(ratingValue && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue,
        reviewCount,
      },
    }),
  }

  return (
    <Script
      id={`structured-data-${sku}`}
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
    name: name,
    description: description,
    url: url,
    logo: logo,
    sameAs: sameAs,
  }

  return (
    <Script
      id="structured-data-organization"
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
    name: name,
    description: description,
    image: image,
    provider: {
      "@type": "Organization",
      name: provider,
    },
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: url,
  }

  return (
    <Script
      id={`structured-data-solution-${name}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}


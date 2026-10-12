import BlogsContainer from "../../../src/components/Blog/BlogsContainer";

export const metadata = {
  title: "Why Doddaballapur Is Emerging as a Residential Destination in North Bangalore | Defence Housing Society",
  description: "North Bangalore has steadily evolved from an overlooked peripheral zone into one of the city's most closely watched residential corridors. Discover why Doddaballapur is gaining attention for plotted developments.",
  keywords: [
    "Plots for sale in Doddaballapur",
    "Plots for sale in North Bangalore",
    "Residential plots for sale in Doddaballapur",
    "Gated community plots for sale in Doddaballapur",
    "Budget plots for sale in North Bangalore",
    "Residential Plots for sale in North Bangalore",
  ],
  alternates: {
    canonical: "https://defencehousingsociety.co.in/blogs/why-doddaballapur-is-emerging-as-a-residential-destination-in-north-bangalore",
  },
  openGraph: {
    title: "Why Doddaballapur Is Emerging as a Residential Destination in North Bangalore",
    description: "North Bangalore has steadily evolved from an overlooked peripheral zone into one of the city's most closely watched residential corridors.",
    url: "https://defencehousingsociety.co.in/blogs/why-doddaballapur-is-emerging-as-a-residential-destination-in-north-bangalore",
    siteName: "Defence Housing Society",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Why Doddaballapur Is Emerging as a Residential Destination in North Bangalore",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Doddaballapur Is Emerging as a Residential Destination in North Bangalore",
    description: "North Bangalore has steadily evolved into one of the city's most closely watched residential corridors.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://defencehousingsociety.co.in/blogs/why-doddaballapur-is-emerging-as-a-residential-destination-in-north-bangalore",
  },
  headline: "Why Doddaballapur Is Emerging as a Residential Destination in North Bangalore",
  description: "North Bangalore has steadily evolved into one of the city's most closely watched residential corridors.",
  image: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200"],
  author: {
    "@type": "Organization",
    name: "MRCL Editorial Team",
    url: "https://defencehousingsociety.co.in",
  },
  publisher: {
    "@type": "Organization",
    name: "Defence Habitat Housing Co-Operative Society Ltd.",
    logo: {
      "@type": "ImageObject",
      url: "https://defencehousingsociety.co.in/logo.png",
    },
  },
  datePublished: "2026-09-21",
  dateModified: "2026-09-21",
  articleSection: "Real Estate",
  keywords: "Plots for sale in Doddaballapur, Plots for sale in North Bangalore, Residential plots for sale in Doddaballapur, Gated community plots for sale in Doddaballapur, Budget plots for sale in North Bangalore, Residential Plots for sale in North Bangalore",
};

export default function BlogDetailPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogsContainer initialPostSlug="why-doddaballapur-is-emerging-as-a-residential-destination-in-north-bangalore" />
    </>
  );
}

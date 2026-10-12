import AboutUs from "../../src/components/AboutUs";

export const metadata = {
  title: "About Us | Defence Habitat Society – Premium Gated Community Plots in North Bangalore",
  description: "Learn more about Defence Habitat Society, offering premium residential open villa plots in gated communities across North Bangalore. Built for trust, quality, and modern living.",
  alternates: {
    canonical: "https://defencehousingsociety.co.in/about-us",
  },
  openGraph: {
    title: "About Us | Defence Habitat Society – Premium Gated Community Plots in North Bangalore",
    description: "Learn more about Defence Habitat Society, offering premium residential open villa plots in gated communities across North Bangalore. Built for trust, quality, and modern living.",
    url: "https://defencehousingsociety.co.in/about-us",
    siteName: "Defence Habitat Housing Co-Operative Society Ltd.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://defencehousingsociety.co.in/about-us",
  },
  name: "About Defence Habitat Housing Co-Operative Society Ltd.",
  description:
    "Defence Habitat Housing Co-Operative Society Ltd. is a registered housing society operating under the Karnataka Co-Operative Society Act, 1959 & 1960.",
  publisher: {
    "@type": "Organization",
    name: "Defence Habitat Housing Co-Operative Society Ltd.",
    url: "https://defencehousingsociety.co.in/",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutUs />
    </>
  );
}

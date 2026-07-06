import DoddaballapurPlotsPage from "../src/components/PlotsSaleInDoddaballapur/DoddaballapurPlotsPage";

export const metadata = {
  title: "Residential Plots for Sale in Doddaballapur | Gated Community | A Khata Plots in North Bangalore – Defence Housing Society",
  description: "Explore residential plots for sale in Doddaballapur with premium gated community living in North Bangalore. Discover A Khata plots with excellent connectivity, modern amenities, and investment potential at Defence Housing Society.",
  alternates: {
    canonical: "https://defencehousingsociety.co.in/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://defencehousingsociety.co.in/",
  },
  headline: "Plots for Sale in Doddaballapur",
  image: ["https://defencehousingsociety.co.in/logo.png"],
  author: {
    "@type": "Organization",
    name: "Defence Housing Society",
  },
  publisher: {
    "@type": "Organization",
    name: "Defence Housing Society",
    logo: {
      "@type": "ImageObject",
      url: "https://defencehousingsociety.co.in/logo.png",
    },
  },
  datePublished: "2026-06-17",
  dateModified: "2026-06-17",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DoddaballapurPlotsPage />
    </>
  );
}

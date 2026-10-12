import BlogsContainer from "../../src/components/Blog/BlogsContainer";

export const metadata = {
  title: "Insights for a Better Tomorrow | Real Estate & Plotted Development Blogs | Defence Housing Society",
  description: "Explore expert insights, market trends and valuable tips on land investment, lifestyle and real estate in North Bangalore.",
  keywords: [
    "Plots for sale in Doddaballapur",
    "Plots for sale in North Bangalore",
    "Residential plots for sale in Doddaballapur",
    "Gated community plots for sale in Doddaballapur",
    "Budget plots for sale in North Bangalore",
    "Residential Plots for sale in North Bangalore",
    "North Bangalore real estate blogs",
  ],
  alternates: {
    canonical: "https://defencehousingsociety.co.in/blogs",
  },
  openGraph: {
    title: "Insights for a Better Tomorrow | Real Estate Blogs",
    description: "Explore expert insights, market trends and valuable tips on land investment, lifestyle and real estate in North Bangalore.",
    url: "https://defencehousingsociety.co.in/blogs",
    siteName: "Defence Housing Society",
    images: [
      {
        url: "https://defencehousingsociety.co.in/logo.png",
        width: 800,
        height: 600,
        alt: "Defence Housing Society",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function BlogsRoute() {
  return <BlogsContainer />;
}

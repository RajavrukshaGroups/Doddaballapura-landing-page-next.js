import GalleryPage from "../../src/components/Gallery/Gallery";

export const metadata = {
  title: "Gallery - Plot Allotment & Construction Progress | Defence Housing Society",
  description: "Explore plot allotment views, layout developments, and ongoing construction progress at Defence Habitat projects in North Bangalore.",
  alternates: {
    canonical: "https://defencehousingsociety.co.in/gallery",
  },
  openGraph: {
    title: "Gallery - Plot Allotment & Construction Progress | Defence Housing Society",
    description: "Explore plot allotment views, layout developments, and ongoing construction progress at Defence Habitat projects in North Bangalore.",
    url: "https://defencehousingsociety.co.in/gallery",
    type: "website",
  },
};

export default function Page() {
  return <GalleryPage />;
}

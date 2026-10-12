import GalleryPage from "../../src/components/Gallery/Gallery";

export const metadata = {
  title: "Gallery - Plot Allotment & Construction Progress | Defence Housing Society",
  description: "Explore plot allotment views, layout developments, and ongoing construction progress at Defence Habitat projects in North Bangalore.",
  alternates: {
    canonical: "https://defencehousingsociety.com/gallery",
  },
  openGraph: {
    title: "Gallery - Plot Allotment & Construction Progress | Defence Housing Society",
    description: "Explore plot allotment views, layout developments, and ongoing construction progress at Defence Habitat projects in North Bangalore.",
    url: "https://defencehousingsociety.com/gallery",
    type: "website",
  },
};

export default function Page() {
  return <GalleryPage />;
}

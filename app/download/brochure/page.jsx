import DownloadBrochure from "../../../src/components/DownloadBrochure";

export const metadata = {
  title: "Download Brochure | Defence Habitat Housing Co-Operative Society Ltd",
  description:
    "Download the official project brochure of Defence Habitat Housing Co-Operative Society Ltd to learn more about layout plans, amenities, and location advantages.",
  alternates: {
    canonical: "https://defencehousingsociety.com/download/brochure",
  },
  openGraph: {
    title: "Download Brochure | Defence Habitat Housing Co-Operative Society Ltd",
    description:
      "Download the official project brochure of Defence Habitat Housing Co-Operative Society Ltd to learn more about layout plans, amenities, and location advantages.",
    url: "https://defencehousingsociety.com/download/brochure",
    type: "website",
  },
};

export default function Page() {
  return <DownloadBrochure />;
}

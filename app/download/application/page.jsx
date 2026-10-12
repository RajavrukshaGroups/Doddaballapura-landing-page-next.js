import DownloadApplication from "../../../src/components/DownloadApplication";

export const metadata = {
  title: "Download Application | Defence Habitat Housing Co-Operative Society Ltd",
  description:
    "Download the official membership application form for Defence Habitat Housing Co-Operative Society Ltd to apply for residential plots and site bookings.",
  alternates: {
    canonical: "https://defencehousingsociety.com/download/application",
  },
  openGraph: {
    title: "Download Application | Defence Habitat Housing Co-Operative Society Ltd",
    description:
      "Download the official membership application form for Defence Habitat Housing Co-Operative Society Ltd to apply for residential plots and site bookings.",
    url: "https://defencehousingsociety.com/download/application",
    type: "website",
  },
};

export default function Page() {
  return <DownloadApplication />;
}

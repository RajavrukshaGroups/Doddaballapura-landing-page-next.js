import LatestNews from "../../src/components/LatestNews";

export const metadata = {
  title: "Defence Housing Society Latest News & Updates | Announcements & Developments",
  description: "Stay updated with the latest Defence Housing Society news, project developments, member announcements, infrastructure updates, events, and important community information.",
  alternates: {
    canonical: "https://defencehousingsociety.com/latest-news",
  },
  openGraph: {
    title: "Defence Housing Society Latest News & Updates | Announcements & Developments",
    description: "Stay updated with the latest Defence Housing Society news, project developments, member announcements, infrastructure updates, events, and important community information.",
    url: "https://defencehousingsociety.com/latest-news",
    type: "website",
  },
};

export default function LatestNewsPage() {
  return <LatestNews />;
}

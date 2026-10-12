import PrivacyPolicy from "../../src/components/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy | Defence Habitat Housing Co-Operative Society Ltd",
  description: "Read the Privacy Policy of Defence Habitat Housing Co-Operative Society Ltd to understand how we collect, protect, and use your personal information.",
  alternates: {
    canonical: "https://defencehousingsociety.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Defence Habitat Housing Co-Operative Society Ltd",
    description: "Read the Privacy Policy of Defence Habitat Housing Co-Operative Society Ltd to understand how we collect, protect, and use your personal information.",
    url: "https://defencehousingsociety.com/privacy-policy",
    type: "website",
  },
};

export default function Page() {
  return <PrivacyPolicy />;
}

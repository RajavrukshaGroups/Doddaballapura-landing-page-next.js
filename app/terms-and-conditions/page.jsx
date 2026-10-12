import TermsAndConditions from "../../src/components/TermsAndConditions";

export const metadata = {
  title: "Terms and Conditions | Defence Habitat Housing Co-Operative Society Ltd",
  description: "Read the Terms and Conditions of Defence Habitat Housing Co-Operative Society Ltd regarding site booking, payments, property allotment, and membership rules.",
  alternates: {
    canonical: "https://defencehousingsociety.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | Defence Habitat Housing Co-Operative Society Ltd",
    description: "Read the Terms and Conditions of Defence Habitat Housing Co-Operative Society Ltd regarding site booking, payments, property allotment, and membership rules.",
    url: "https://defencehousingsociety.com/terms-and-conditions",
    type: "website",
  },
};

export default function Page() {
  return <TermsAndConditions />;
}

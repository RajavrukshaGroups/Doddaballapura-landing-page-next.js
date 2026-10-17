import ContactUs from "../../src/components/ContactUs";

export const metadata = {
  title: "Contact Us | Defence Housing Society",
  description:
    "Get in touch with Defence Housing Society for inquiries, support, membership information. Contact our team today.",
  alternates: {
    canonical: "https://defencehousingsociety.co.in/contact-us",
  },
  openGraph: {
    title: "Contact Us | Defence Housing Society",
    description:
      "Get in touch with Defence Housing Society for inquiries, support, membership information. Contact our team today.",
    url: "https://defencehousingsociety.co.in/contact-us",
    type: "website",
  },
};

export default function Page() {
  return <ContactUs />;
}

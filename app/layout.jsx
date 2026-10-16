import "./globals.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import ScrollToTopButton from "../src/components/ScrollToTopButton";
import FloatingWhatsApp from "../src/components/FloatingWhatsApp";
import BottomLeftVideoPlayer from "../src/components/FloatingVideo/BottomLeftVideoPlayer";

export const metadata = {
  title: "Plots For sale In Doddaballapur",
  description: "Plots For sale In Doddaballapur",
  icons: {
    icon: [
      { url: "/fevicons/favicon.ico" },
      { url: "/fevicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/fevicons/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/fevicons/apple-touch-icon.png", sizes: "180x180" }
    ],
    other: [
      { rel: "icon", url: "/fevicons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/fevicons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ]
  },
  manifest: "/fevicons/site.webmanifest",
};

const breadcrumbSchema = {
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Residential Plots in Doddaballapur",
    "item": "https://defencehousingsociety.co.in/"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "Gallery",
    "item": "https://defencehousingsociety.co.in/gallery"  
  },{
    "@type": "ListItem", 
    "position": 3, 
    "name": "Latest News",
    "item": "https://defencehousingsociety.co.in/latest-news"  
  },{
    "@type": "ListItem", 
    "position": 4, 
    "name": "New updates",
    "item": "https://defencehousingsociety.co.in/blogs"  
  }]
};

const websiteSchema = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "Defence Habitat Housing Society",
  "alternateName": [
    "Defence Housing Society",
    "Defence Habitat"
  ],
  "url": "https://defencehousingsociety.co.in/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://defencehousingsociety.co.in/blogs/top-reasons-to-buy-residential-plots-in-doddaballapur{search_term_string}Residential Plots in North Bangalore",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XHJY1T4MDY"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-XHJY1T4MDY');
            `
          }}
        />
        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTopButton />
        <FloatingWhatsApp />
        <BottomLeftVideoPlayer />
      </body>
    </html>
  );
}

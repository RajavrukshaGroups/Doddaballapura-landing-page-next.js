import "./globals.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

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
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

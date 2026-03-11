import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Aster Homes PG Ahmedabad",
    template: "%s | Aster Homes PG"
  },
  description:
    "Premium PG accommodation in Gota, Ahmedabad with secure stay, meals, WiFi, and easy SG Highway access.",
  openGraph: {
    title: "Aster Homes PG Ahmedabad",
    description:
      "Premium PG accommodation in Gota, Ahmedabad with secure stay, meals, WiFi, and easy SG Highway access.",
    type: "website",
    locale: "en_IN"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${outfit.variable} font-sans`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

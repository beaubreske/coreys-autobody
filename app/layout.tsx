import type { Metadata } from "next";
import { Days_One, Syne } from "next/font/google";
import { localBusinessSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const daysOne = Days_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-days-one",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Collision Repair & Restoration in Marinette, WI",
    template: "%s | Corey's Auto Body",
  },
  description:
    "Marinette, WI auto body shop specializing in collision repair, rust repair, auto painting, and full restorations. 7-day availability. Free estimates. (715) 716-6217",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    title: "Corey's Auto Body | Collision Repair & Restoration in Marinette, WI",
    description:
      "Marinette, WI auto body shop specializing in collision repair, rust repair, auto painting, and full restorations. 7-day availability. Free estimates.",
  },
  alternates: {
    canonical: BUSINESS.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${daysOne.variable} ${syne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <div className="site-bg" aria-hidden="true" />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

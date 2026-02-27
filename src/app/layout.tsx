import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Watts Up Solar Eswatini | Sustainable Energy Solutions",
  description:
    "Eswatini's trusted partner for residential and commercial solar installations. Expert design, 100+ successful projects, and energy independence.",
  keywords: [
    "Solar Eswatini",
    "Solar Swaziland",
    "Solar Panels Mbabane",
    "Solar Panels Manzini",
    "Watts Up Solar",
    "Renewable Energy Eswatini",
  ],
  verification: {
    google: "YOUR_VERIFICATION_STRING_HERE",
  },
  openGraph: {
    title: "Watts Up Solar Eswatini",
    description: "Expert solar installations for home and business.",
    url: "https://www.wattsupsolar.co.sz",
    siteName: "Watts Up Solar",
    locale: "en_SZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

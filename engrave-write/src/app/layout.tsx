import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import "@fontsource/rubik"; // Fontsource Rubik import
import Header from "@/components/MainHeader/MainHeader";
import Footer from "@/components/MainFooter/Footer";
import LayoutWithConditionalSections from "@/components/LayoutWithConditionalSections";

// Load fonts as a server-side operation
const rubik = localFont({
  src: "./fonts/Rubik-Regular.woff",
  variable: "--font-rubik",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "EngraveWrite",
  description: "Signage, Printing and IT Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased`}>
        <Header />
        {/* Render children and footer here */}
        <LayoutWithConditionalSections>
          {children}
        </LayoutWithConditionalSections>
        <Footer />
      </body>
    </html>
  );
}

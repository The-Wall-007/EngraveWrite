import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import "@fontsource/rubik"; // Defaults to weight 400
import "@fontsource/rubik/400.css"; // Specify weight
import "@fontsource/rubik/400-italic.css"; // Specify weight and style
import Header from "@/components/MainHeader/MainHeader";
import QuestionsSection from "@/components/Home/QuestionsSection";
import ClientReview from "@/components/Home/ClientReview";
import Footer from "@/components/MainFooter/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
// Import Rubik font
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased`}>
        {/* Move Header inside the body */}
        <Header />
        {children}
        {/* Move QuestionsSection inside the body */}
        <ClientReview />
        <QuestionsSection />
        <Footer />
      </body>
    </html>
  );
}

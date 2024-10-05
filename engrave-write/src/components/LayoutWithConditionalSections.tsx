"use client"; // This file is client-side

import { usePathname } from "next/navigation";
import ClientReview from "@/components/Home/ClientReview";
import QuestionsSection from "@/components/Home/QuestionsSection";

const LayoutWithConditionalSections = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname(); // Client-side logic
  const isContactPage = pathname === "/Contact";

  return (
    <>
      {children}
      {/* Conditionally render components based on pathname */}
      {!isContactPage && (
        <>
          <ClientReview />
          <QuestionsSection />
        </>
      )}
    </>
  );
};

export default LayoutWithConditionalSections;

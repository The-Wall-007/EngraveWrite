import React from "react";

import Header from "@/components/Header";
import BrandSection from "@/components/Home/BrandSection";
import NumberSection from "@/components/Home/NumberSection";
import IntroductionSection from "@/components/Home/IntroductionSection";
import ServicesSection from "@/components/Home/ServicesSection";
import WelcomeSection from "@/components/Home/WelcomeSection";
import PromiseSection from "@/components/Home/PromiseSection";
import ProcessSection from "@/components/Home/ProcessSection";
import CaseStudy from "@/components/Home/CaseStudy";
import ClientReview from "@/components/Home/ClientReview";
import QuestionsSection from "@/components/Home/QuestionsSection";

const Home = () => {
  return (
    <React.Fragment>
      {/* <Header /> */}

      <IntroductionSection />

      <NumberSection />

      <BrandSection />

      <WelcomeSection />

      <ServicesSection />

      <PromiseSection />

      <ProcessSection />

      <CaseStudy />

      <ClientReview />
    </React.Fragment>
  );
};

export default Home;

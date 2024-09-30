import React from "react";

import Header from "@/components/Header";
import BrandSection from "@/components/Home/BrandSection";
import NumberSection from "@/components/Home/NumberSection";
import IntroductionSection from "@/components/Home/IntroductionSection";
import ServicesSection from "@/components/Home/ServicesSection";

const Home = () => {
  return (
    <React.Fragment>
      <Header />

      <IntroductionSection />

      <NumberSection />

      <BrandSection />

      <ServicesSection />
    </React.Fragment>
  );
};

export default Home;

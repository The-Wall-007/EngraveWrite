import React from "react";

import Header from "@/components/Header";
import BrandSection from "@/components/Home/BrandSection";
import NumberSection from "@/components/Home/NumberSection";
import IntroductionSection from "@/components/Home/IntroductionSection";

const Home = () => {
  return (
    <React.Fragment>
      <Header />

      <IntroductionSection />

      <NumberSection />

      <BrandSection />
    </React.Fragment>
  );
};

export default Home;

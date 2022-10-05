import React from "react";
import Header from "../reusableComponents/Header";
import SimpleAccordion from "../home/Accordion";
import Footer from "../reusableComponents/Footer";

const Faqs = () => {
  return (
    <div>
      <Header />
      <div className="pt-20 md:pt-30 lg:pt-40 xl:pt-45 mx-auto flex flex-col">
        <h1 className=" font-bold text-[30] md:text-[28px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px] text-center">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <div className="flex justify-center">
          <div className="pt-20 md:pt-30 lg:pt-40 xl:pt-45 flex flex-col">
            <SimpleAccordion />
          </div>
        </div>
      </div>
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Faqs;

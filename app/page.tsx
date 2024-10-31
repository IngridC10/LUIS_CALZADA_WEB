import React from "react";
import NavBar from "./components/NavBar";
// import LogoSection from "./about/components/Logo-Section/LogoSection";
import AboutUs from "./about/components/Section-2/AboutUs";
import Footer from "./components/Footer";
import ContactUs from "./about/components/Section-3/ContactUs";
import GalleryImagesSlider from "./about/components/Section-1/GalleryImagesSlider";
import Testimonials from "./about/components/Testimonials/Testimonials";

const page = () => {
  return (
    <div>
      <NavBar />
      {/* <LogoSection /> */}
      <GalleryImagesSlider />
      <AboutUs />
      <ContactUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default page;

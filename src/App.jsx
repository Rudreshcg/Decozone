import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WhyPartnerWithUs from "./components/WhyPartnerWithUs/WhyPartnerWithUs";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Testimonial from "./components/Testimonial/Testimonial";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import FloatingWhatsAppButton from "./components/WhatsAppIcon/WhatsAppIcon";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import HowItWorks from "./components/HowItWorks/HowItWorks"

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyPartnerWithUs />
      <HowItWorks />
      <Banner />
      <Banner2 />
      <ImageGallery />
      <Testimonial />
      {/* <Newsletter /> */}
      <Footer />
      <FloatingWhatsAppButton />
    </main>
  );
};

export default App;

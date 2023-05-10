import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/carousel/Carousel";
import Page from "./components/card/Page";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Refer from "./components/Refer";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Page />
      <Refer />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import "./Layout.css";
import Navbar from "../Nav/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Testimonials from "../Testimonials/Testimonials";

function Layout() {
  return (
    <>
      <div className="container">
        <a href="/#" className="scroll-float"><i class="fa-solid fa-arrow-up arrow-up"></i></a>
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Testimonials />
      </div>
    </>
  );
}

export default Layout;

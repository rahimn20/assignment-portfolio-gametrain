import React from "react";
import "./Layout.css";
import Navbar from "../Nav/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";

function Layout() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
      </div>
    </>
  );
}

export default Layout;

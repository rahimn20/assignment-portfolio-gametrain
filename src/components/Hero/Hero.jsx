import React from "react";
import "./Hero.css";
import PersonImg from "../../assets/Person.png";

function Hero() {
  return (
    <>
      <div className="home-wrapper" id="hero">
        <div className="hero-content">
          {/*Hero Text*/}
          <div className="herotext">
            <h2 className="h2-1">
              I'm <span>John</span> Smith
            </h2>
          </div>

          {/*Sub Heading*/}
          <div className="sub-head">
            <p>Freelance UI/UX Designer</p>
          </div>

          {/*Social Icons*/}
          <div className="socials">
            <div className="facebook">
              <i class="fa-brands fa-facebook-f icon icons"></i>
            </div>
            <div className="linkedin">
              <i class="fa-brands fa-linkedin-in icons icon2"></i>
            </div>
            <div className="instagram">
              <i class="fa-brands fa-instagram icons icon3"></i>
            </div>
          </div>
        </div>

        <div className="hero-img">
          {/*Head Image*/}
          <div className="head-img">
            <img src={PersonImg} className="img-2" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

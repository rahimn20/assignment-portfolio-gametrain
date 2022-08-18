import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/img1.jpg";
import IMG2 from "../../assets/img2.jpg";
import IMG3 from "../../assets/img3.jpg";
import IMG4 from "../../assets/img4.jpg";
import ImgCard from "./ImgCard";

function Portfolio() {
  return (
    <>
      <div className="portfolio-wrapper" id="portfolio">
        {/*Portfolio Text*/}
        <h2 className="portfolio-heading">Portfolio</h2>

        <div className="images-wrap">
          {/*Left Images Section*/}
          <div className="left-imgs">
            <div className="imgSection-left">
              <ImgCard
                img={IMG1}
                title="Minimalism"
                desc="Illustration . Art Direction"
              />
              <ImgCard
                img={IMG2}
                title="Abstract Art"
                desc="Illustration . Art Direction"
              />

              {/* <div
              style={{ backgroundImage: `url(${IMG1})` }}
              className="img-1-port"
            ></div> */}
              {/* <img src={IMG2} className="about-img" alt="" /> */}
            </div>
          </div>

          {/*Right Images Section*/}
          <div className="right-imgs">
            <ImgCard
              img={IMG3}
              title="3D Project"
              desc="Illustration . Art Direction"
            />
            <ImgCard
              img={IMG4}
              title="Modern BG"
              desc="Illustration . Art Direction"
            />
          </div>
        </div>
        {/*See More Work*/}
        <a href="/#" value="See More" className="see-more">
          See more work...
        </a>
      </div>
    </>
  );
}

export default Portfolio;

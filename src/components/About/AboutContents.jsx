import React from "react";
import Button from "@mui/material/Button";
// import AboutIllustration from "../../assets/AboutIllustration.PNG";

function AboutContents({ title, para, img }) {
  return (
    <>
      <div className="about-container">
        {/* About-Image */}
        <div className="aboutImg">
          <img src={img} className="about-img" alt="" />
        </div>

        {/* About-Content */}
        <div className="aboutContent">
          <div className="content-wrapper">
            <h3 className="about-title">{title}</h3>
            <p className="about-para">{para}</p>
            <Button
              variant="contained"
              sx={{
                marginTop: "30px",
                fontSize: "12px",
                height: "40px",
                width: "120px",
                background: "#0F0B69",

                "&:hover": {
                  backgroundColor: "#FE3E57",
                  color: "#fff",
                },
              }}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutContents;

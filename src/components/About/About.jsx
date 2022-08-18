import React from "react";
import "./About.css";
import AboutIllustration from "../../assets/AboutIllustration.PNG";
import Maintenance from "../../assets/maintenance.png";
// import Button from "@mui/material/Button";
import AboutContents from "./AboutContents";

function About() {
  const [currentTab, setCurrentTab] = React.useState(0);

  const about = (
    <AboutContents
      title="I Create products not just art"
      para="My name is John Smith, I am a web designer and a developer.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
  alias consectetur, quaerat perferendis, repellendus illum
  totam esse blanditiis neque doloribus quod tempora fuga ullam.
  Voluptas nemo laborum quas eveniet hic?"
      img={AboutIllustration}
    />
  );

  const skills = (
    <AboutContents
      title="This Tab is under Maintenance"
      para="
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
  alias consectetur, quaerat perferendis, repellendus illum
  totam esse blanditiis neque doloribus quod tempora fuga ullam.
  Voluptas nemo laborum quas eveniet hic?"
      img={Maintenance}
    />
  );

  const tabs = [
    "About",
    "Skills",
    "Services",
    "Services",
    "Social Media",
    "Awards",
  ];

  const tabContents = [about, skills, skills, skills, skills, skills];

  return (
    <>
      <section className="about-wrapper" id="about">
        <div className="container">
          {/*About Me Text*/}
          <h2 className="about-heading">About Me</h2>

          {/*Nav items*/}
          <div class="navItems">
            <ul className="navList">
              {tabs.map((tab, index) => {
                const isCurrentTab = index === currentTab;
                const classes = `li-2 ${isCurrentTab && "active"}`;
                return (
                  <li className={classes} onClick={() => setCurrentTab(index)}>
                    {tab}
                  </li>
                );

                // return <li className="li-2">{tab}</li>;
              })}

              {/* <li className="li-2 active">About</li>
              <li className="li-2">Skill</li>
              <li className="li-2">Services</li>
              <li className="li-2">Social Media</li>
              <li className="li-2">Award</li> */}
            </ul>
          </div>

          {tabContents[currentTab]}

          {/* <div className="about-container">

            <div className="aboutImg">
              <img src={AboutIllustration} className="about-img" alt="" />
            </div>


            <div className="aboutContent">
              <div className="content-wrapper">
                <h3 className="about-title">I Create products not just art</h3>
                <p className="about-para">
                  My name is John Smith, I am a web designer and a developer.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  alias consectetur, quaerat perferendis, repellendus illum
                  totam esse blanditiis neque doloribus quod tempora fuga ullam.
                  Voluptas nemo laborum quas eveniet hic?
                </p>
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
          </div> */}
        </div>
      </section>
    </>
  );
}

export default About;

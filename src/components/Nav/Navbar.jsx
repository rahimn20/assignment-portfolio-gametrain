import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.svg";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <>
      <div className="navbar-wrapper">
        {/*Logo container*/}
        <img src={Logo} className="logo" alt={Logo} />

        {/*Nav items*/}
        <div class="nav-items">
          <ul className="nav-list">
            <a href="#hero" className="li">
              Home
            </a>
            <a href="#about" className="li">
              About
            </a>
            <a href="#portfolio" className="li">
              Portfolio
            </a>
            <a href="/#" className="li">
              Pages
            </a>
            <a href="/#" className="li">
              Blogs
            </a>
            <a href="/#" className="li">
              Contact
            </a>
          </ul>

          {/* <a href="/" class="items">
            Home
          </a>
          <a href="/" class="items">
            About
          </a>
          <a href="/" class="items">
            Portfolio
          </a>
          <a href="/" class="items">
            Pages
          </a>
          <a href="/" class="items">
            Blogs
          </a>
          <a href="/" class="items">
            Contact
          </a> */}
        </div>

        {/*Nav button*/}
        <div className="cta">
          <Button
            variant="contained"
            sx={{
              marginTop: "5px",
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
    </>
  );
}

export default Navbar;

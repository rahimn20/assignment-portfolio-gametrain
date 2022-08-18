import React from "react";
import "./ImgCard.css";

function ImgCard({ img, title, desc }) {
  return (
    <>
      <div style={{ backgroundImage: `url(${img})` }} className="img-port">
        <div className="img-wrapper">
          <h3 className="img-title">{title}</h3>
          <div className="img-desc">{desc}</div>
          <button className="img-cta">View Work</button>
        </div>
      </div>
    </>
  );
}

export default ImgCard;

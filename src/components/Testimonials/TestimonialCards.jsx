import React from "react";

function TestimonialCards({ img, name, title, desc }) {
  return (
    <>
      <div className="card-wrapper">
        <p className="test-desc">{desc}</p>
        <div className="person-wrapper">
          <div className="testPerson-img">
            <img src={img} className="test-img" alt="" />
          </div>
          <h3 className="test-person-name">{name}</h3>
          <h2 className="test-person-title">{title}</h2>
        </div>
      </div>
    </>
  );
}

export default TestimonialCards;

import React from "react";
import "./Testimonials.css";
// import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
// import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import TestimonialCards from "./TestimonialCards";
import TEST1 from "../../assets/test1.jpg";

function Testimonials() {
  // const arrows = [
  //   { ArrowCircleLeftRoundedIcon },
  //   { ArrowCircleRightRoundedIcon },
  // ];

  return (
    <>
      <div className="testimonial-wrapper">
        {/*Testimonials Heading*/}
        <h2 className="testimonial-heading">Testimonials</h2>

        {/*Testimonials Card*/}
        <TestimonialCards
          img={TEST1}
          name="John Harry"
          title="CEO of Moderntern"
          desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptatibus iusto deserunt dolore aperiam error exercitationem esse, consequatur voluptatem voluptates sequi, libero quia quam totam minima, aut impedit. Commodi, nobis?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptatibus iusto deserunt dolore aperiam error exercitationem esse, consequatur voluptatem voluptates sequi, libero quia quam totam minima, aut impedit. Commodi, nobis?"
        />
      </div>
    </>
  );
}

export default Testimonials;

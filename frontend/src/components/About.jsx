import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to our premium dining reservation platform, where
              unforgettable culinary experiences await you! Our user-friendly
              interface allows you to explore a diverse selection of exquisite
              restaurants, each offering a unique ambiance and exceptional menu.
              Whether you're planning an intimate dinner for two, a gathering
              with friends, or a special celebration, our platform simplifies
              the booking process, ensuring you secure your table effortlessly.
              Discover the finest dining options, read reviews from fellow food
              enthusiasts, and enjoy seamless reservations at your fingertips.
              Indulge in delectable dishes and create cherished memories with us
              today
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

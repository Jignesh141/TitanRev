import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - IGNITION ALLEY"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/about.jpeg"
            alt="about"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">Welcome to IGNITION ALLEY</h2>
          <p className="text-justify">
            At IGNITION ALLEY, we are passionate about cars and providing
            exceptional automotive solutions to our customers. Whether you're
            looking for a new ride or need expert services for your vehicle,
            we've got you covered.
          </p>
          <p className="text-justify">
            Our team consists of dedicated professionals who strive to deliver
            top-notch products and services tailored to your needs. We offer a
            wide range of vehicles, from sleek sedans to rugged trucks and
            everything in between, ensuring there's something for every driving
            enthusiast.
          </p>
          <p className="text-justify">
            Beyond vehicles, IGNITION ALLEY is committed to fostering a
            community centered around automotive excellence. Join us on this
            journey and experience the thrill of the road with IGNITION ALLEY.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactUs.svg"
            alt="contact"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <div className="p-2 text-black">
            <h1>CONTACT US</h1>
          </div>
          <p className="text-justify mt-3">
            Have any queries or need information about our products? Feel free
            to contact us anytime. We're available 24/7 to assist you.
          </p>
          <p className="mt-3">
            <BiMailSend /> Email: Ignition-Alley@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> Phone: 9569463257
          </p>
          <p className="mt-3">
            <BiSupport /> Toll-Free: 1800-0000-0000
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

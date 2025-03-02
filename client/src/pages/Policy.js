import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row mt-10" > 
        <div className="col-md-6">
          <img
            src="/images/privacy.svg"
            alt="privacy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">Privacy Policy</h2>
          <p>
            At TITAN REV, we are committed to protecting the privacy and
            security of your personal information. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you use our website or services.
          </p>
          <h4 className="mt-4">Information We Collect</h4>
          <p>
            We may collect personal information that you provide to us directly
            when you interact with our website or services. This may include,
            but is not limited to:
          </p>
          <h4 className="mt-4">How We Use Your Information</h4>
          <p>
            We use the collected information for various purposes, including:
          </p>
          <ul>
            <li>Providing and improving our services</li>
            <li>Communicating with you and responding to inquiries</li>
            <li>Processing transactions and orders</li>
            <li>Analyzing website usage and trends</li>
            <li>Ensuring the security and integrity of our systems</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;

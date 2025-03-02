import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">All Right Reserved &copy; Titan Rev</h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
      <p className="text-center mt-3"> Mike Ross  |
        +1 2356985120</p>
      <p className="text-center mt-3">
        <a href="mailto:chatwithus@titanrev.com">chatwithus@titanrev.com</a>
      </p>
    </div>
  );
};

export default Footer;
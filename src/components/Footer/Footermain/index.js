import React from "react";

import { Row, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const Footer1 = (props) => {
  const navigate = useNavigate();

  function handleNavigate61() {
    navigate("/propertycategorypage");
  }

  return (
    <>
   <footer className="bg-green-800 text-white text-center w-full md:w-[700px] mx-auto">
      <div className="contact">
        <h3>Contact Us</h3>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@example.com</p>
        <p>Address: 123 Main Street, City, State</p>
      </div>
      <div className="rights">
        <p>All Rights Reserved &copy; 2023</p>
      </div>
      <div className="privacy">
        <p>Privacy Policy</p>
      </div>
    </footer>
    </>
  );
};

export default Footer1;

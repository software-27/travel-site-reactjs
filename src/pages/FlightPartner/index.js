import React from "react";
import { useState } from "react";
import { Text, Img, Line, Button } from "components";
import { useNavigate } from "react-router-dom";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";
import SidebarFlight from "components/SidebarFlight/index";
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";

const FlightPartnerPage = () => {
  const navigate = useNavigate();

  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [isPopup2Open, setIsPopup2Open] = useState(false);

  const openPopup1 = () => {
    setIsPopup1Open(true);
  };

  const openPopup2 = () => {
    setIsPopup2Open(true);
  };

  const closePopup1 = () => {
    setIsPopup1Open(false);
  };

  const closePopup2 = () => {
    setIsPopup2Open(false);
  };

  return (
    <>
      <div className="w-full font-montserrat">
      <HeaderOTAAdmin openPopup1={openPopup1} className="fixed invisible lg:visible" />
        <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
        <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />        <div className="">
        <div className="flex flex-row">
          <div className="">
            <SidebarFlight/>
          </div>
          <div className="px-2 w-full mt-[0px] mx-auto lg:px-[14px] 2xl:px-[100px]">
            <text className="font-bold text-[40px]">
              Flight
            </text>

          </div>
</div>
        </div>

      </div>
    </>
  );
};

export default FlightPartnerPage;

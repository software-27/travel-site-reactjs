import React from "react";

import { Text, Img, Line, Button, Row, Column } from "components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";
import { useAuth } from "AuthContext";
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";


import SidebarProperty from "components/SidebarProperty/index";

const PropertyPartnerPage = () => {
  const navigate = useNavigate();
  const [openTab, setOpenTab] = React.useState(1);
  const { setIsLoggedIn } = useAuth(); 

  setIsLoggedIn(true);

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

<div className="flex flex-row ">
  <div className="">
    <SidebarProperty/>
  </div>
  <div className="px-2 w-full mt-[0px] mx-auto lg:px-[14px] 2xl:px-[100px]">
    <text className="font-bold text-[40px]">
      Dashboard
    </text>

  </div>
</div>

</div>
        {/* <div className="py-5 pl-[50px]">

          <div className="flex mt-5 ">
            <div className="grid mt-5 w-[200px]">
              <button className="text-left p-2 bg-white border-l border-t border-b border-black">
                Dashboard
              </button>
              <button className="text-left mt-1 p-2 bg-[#e0e0e0] hover:bg-[#F8F8F8] border-l border-t border-b border-black">
                Bookings
              </button>
              <button className="text-left mt-1 p-2 bg-[#e0e0e0] hover:bg-[#F8F8F8] border-l border-t border-b border-black">
                Property Details
              </button>
              <button className="text-left mt-1 p-2 bg-[#e0e0e0] hover:bg-[#F8F8F8] border-l border-t border-b border-black"
                onClick={() => navigate("/add-new-property")}>

                Add New Property
              </button>
              <button className="text-left mt-1 p-2 bg-[#e0e0e0] hover:bg-[#F8F8F8] border-l border-t border-b border-black">
                TBD
              </button>
            </div>
            <div className="border border-black px-2 w-full">
              <text className="font-bold text-[40px]">
                Dashboard
              </text>
            </div>
          </div>

        </div> */}

      </div>
    </>
  );
};

export default PropertyPartnerPage;

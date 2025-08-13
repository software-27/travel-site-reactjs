import React from "react";
import { useState } from "react";
import { Text, Img, Line, Button } from "components";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { useNavigate } from "react-router-dom";
import { BiBuildingHouse } from "react-icons/bi"
import { RiHotelLine } from "react-icons/ri"
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";
import SidebarProperty from "components/SidebarProperty/index";
import { useAuth } from "AuthContext";
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";

const AddNewPropertyPage = () => {
  const navigate = useNavigate();
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

  function handleNavigate68() {
    navigate("/howmuchapartmenttolist");
  }
  function handleNavigate69() {
    navigate("/howmuchpropertytolist");
  }

  return (
    <>
      <div className="w-full font-montserrat">
      <HeaderOTAAdmin openPopup1={openPopup1} className="fixed invisible lg:visible" />
        <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
        <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />        <div className="">

          <div className="flex flex-row">
            <div className="">
              <SidebarProperty />
            </div>
            <div className="w-full mt-[0px] mx-auto lg:px-[14px] 2xl:px-[100px]">
              <text className="font-bold text-[40px] ">
                Add New Property
              </text>
              <div className=" gap-2 pb-5 pt-2 pl-2 flex">
              <Column className="font-ptsans bg-white_A700 items-center xl:h-[270px] 2xl:h-[300px] justify-start sm:mt-[6px] md:mt-[14px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] sm:p-[4px] md:p-[6px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-lg border w-[20%] 2xl:w-[35%]">
                <Button
                  className="sm:-mt-3 md:-mt-4 lg:-mt-6 xl:-mt-6 2xl:-mt-6 3xl:-mt-6 rounded-sm absolute items-center justify-center p-1 text-center w-fit "
                  shape="RoundedBorder3"
                  size="sm"
                  variant="FillGreen900"
                >
                  <Row className="items-center gap-1">
                    <Img
                      src="images/img_menu.svg"
                      className="sm:w-[9px] md:w-[12px] lg:w-[15px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[22px] sm:h-[9px] md:h-[12px] lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[22px]"
                      alt="menu"
                    />
                    <div className="items-center justify-center bg-transparent sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      Quick start
                    </div>
                  </Row>
                </Button>
                <BiBuildingHouse className="xl:h-10 xl:w-10 2xl:h-12 2xl:h-12 text-[#013580] mt-5" />
                {/* <Img
                  src="images/img_volume.svg"
                  className="mt-6 sm:h-[14px] md:h-[40px] lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] sm:w-[14px] md:w-[40px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                  alt="user One"
                /> */}
                <div className="font-semibold text-md sm:mt-[8px] md:mt-[9px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[18px] Whattypeofbr">
                  Apartment
                </div>
                <div className="font-light sm:text-[8px] md:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[10px] font-ptsans leading-[normal] sm:mt-[6px] md:mt-[7px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[13px] 2xl:mt-[9px] not-italic text-black_900 text-center w-[90%]">
                  Furnished and self-catering accomodation, where guests rent
                  the entire place.
                </div>
                <Button
                  className="mb-2 common-pointer rounded-sm font-bold font-inter sm:text-[6px] md:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] sm:mt-[22px] md:mt-[38px] lg:mt-[50px] xl:mt-[70px] 2xl:mt-[65px] 3xl:mt-[40px] text-center w-[95%]"
                  onClick={handleNavigate68}
                  size="md"
                  variant="FillLightblue800"
                >
                  List your property
                </Button>
              </Column>
              <Column className="font-ptsans bg-white_A700 items-center xl:h-[270px] 2xl:h-[300px] justify-start sm:mt-[6px] md:mt-[14px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] sm:p-[4px] md:p-[6px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-lg border w-[20%] 2xl:w-[35%]">
                <RiHotelLine className="xl:h-10 xl:w-10 2xl:h-12 2xl:h-12 text-[#013580] mt-5" />
                {/* <Img
                  src="images/img_user_45X45.svg"
                  className="mt-6 sm:h-[14px] md:h-[40px] lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] sm:w-[14px] md:w-[40px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                  alt="user One"
                /> */}
                <div className="font-semibold text-md sm:mt-[8px] md:mt-[9px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[18px] Whattypeofbr">
                  Hotel
                </div>
                <div className="font-light sm:text-[8px] md:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[10px] font-ptsans leading-[normal] sm:mt-[6px] md:mt-[7px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[13px] 2xl:mt-[9px] not-italic text-black_900 text-center w-[90%]">
                  Accommodations for travelers often with restaurants, meeting
                  rooms and other guest services
                </div>
                <Button
                  className="mb-2 common-pointer rounded-sm font-bold font-inter sm:text-[6px] md:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] sm:mt-[22px] md:mt-[24px] lg:mt-[38px] xl:mt-[70px] 2xl:mt-[65px] 3xl:mt-[28px] text-center w-[95%]"
                  onClick={handleNavigate69}
                  size="md"
                  variant="FillLightblue800"
                >
                  List your property
                </Button>
              </Column>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default AddNewPropertyPage;

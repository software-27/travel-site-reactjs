// import React from "react";
// import { Column, Text, Row, Img, Button } from "components";
// import Header from "components/Header/Header";
// import { useNavigate } from "react-router-dom";
// import Icon from '@mdi/react'
// import { mdiPlusThick, mdiShoppingOutline, mdiAccountTie } from '@mdi/js';

// const PropertycategorypagePage = () => {
//   const navigate = useNavigate();

//   function handleNavigate68() {
//     navigate("/howmuchapartmenttolist");
//   }
//   function handleNavigate69() {
//     navigate("/howmuchpropertytolist");
//   }
//   function handleNavigate70() {
//     navigate("/t17");
//   }
//   function handleNavigate71() {
//     navigate("/mr");
//   }
//   function handleNavigate72() {
//     navigate("/mu");
//   }


//   return (
//     <>
//       <Column className="bg-gray_50 font-ptsans items-center justify-start lg:pb-[364px] xl:pb-[455px] 2xl:pb-[512px] 3xl:pb-[614px] w-[100%]">
//         <Column className="justify-start w-[100%]">
//           <Header className="w-[100%]" />
//           <Column className="font-ptsans justify-start sm:ml-[46px] md:ml-[65px] lg:ml-[84px] xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] sm:mt-[36px] md:mt-[44px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[80%] 2xl:w-[90%]">
//             <Text className="Box1 font-medium sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[26px]" variant="h5">
//               List your property and tour on HalalHoliday.com and start welcoming guests in no time!
//             </Text>
//             <Text
//               className="sm:mt-[18px] md:mt-[14px] lg:mt-[21px] xl:mt-[27px] 2xl:mt-[33px] 3xl:mt-[39px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[22px] 3xl:text-[24px] text-black_900 w-[auto]"
//               variant="body3"
//             >
//               To get started, choose the type of property or tour you want to list
//             </Text>
//             <Row className="gap-2 font-ptsans items-start justify-start lg:ml-[12px] xl:ml-[1px] 2xl:ml-[21px] 3xl:ml-[25px] sm:mt-[13px] md:mt-[15px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
//               <Column className="font-ptsans bg-white_A700 items-center h-[280px] justify-start sm:mt-[6px] md:mt-[14px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] sm:p-[4px] md:p-[6px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-lg border w-[30%]">
//               <Button
//                   className="sm:-mt-3 md:-mt-4 lg:-mt-6 xl:-mt-6 2xl:-mt-6 3xl:-mt-6 rounded-sm absolute items-center justify-center p-1 text-center w-fit "
//                   shape="RoundedBorder3"
//                   size="sm"
//                   variant="FillGreen900"
//                 >
//                   <Row className="items-center gap-1">
//                   <Img
//                     src="images/img_menu.svg"
//                     className="sm:w-[9px] md:w-[12px] lg:w-[15px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[22px] sm:h-[9px] md:h-[12px] lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[22px]"
//                     alt="menu"
//                   />
//                   <div className="items-center justify-center bg-transparent sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
//                     Quick start
//                   </div>
//                   </Row>
//                 </Button>
//                 <Img
//                   src="images/img_volume.svg"
//                   className="mt-6 sm:h-[14px] md:h-[40px] lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] sm:w-[14px] md:w-[40px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
//                   alt="user One"
//                 />
//                 <div className="font-semibold text-md sm:mt-[8px] md:mt-[9px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[18px] Whattypeofbr">
//                   Apartment
//                 </div>
//                 <div className="font-light sm:text-[8px] md:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[10px] font-ptsans leading-[normal] sm:mt-[6px] md:mt-[7px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[13px] 2xl:mt-[9px] not-italic text-black_900 text-center w-[90%]">
//                   Furnished and self-catering accomodation, where guests rent the entire place.
//                 </div>
//                 <Button
//                   className="mb-2 common-pointer rounded-sm font-bold font-inter sm:text-[6px] md:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] sm:mt-[22px] md:mt-[38px] lg:mt-[50px] xl:mt-[45px] 2xl:mt-[48px] 3xl:mt-[40px] text-center w-[95%]"
//                   onClick={handleNavigate68}
//                   size="md"
//                   variant="FillLightblue800"
//                 >
//                   List your property
//                 </Button>
//               </Column>
//               <Column className="font-ptsans bg-white_A700 items-center h-[280px] justify-start sm:mt-[6px] md:mt-[14px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] sm:p-[4px] md:p-[6px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-lg border w-[30%]">
//                 <Img
//                   src="images/img_user_45X45.svg"
//                   className="mt-6 sm:h-[14px] md:h-[40px] lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] sm:w-[14px] md:w-[40px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
//                   alt="user One"
//                 />
//                 <div className="font-semibold text-md sm:mt-[8px] md:mt-[9px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] Whattypeofbr">
//                   Hotel
//                 </div>
//                 <div className="font-light sm:text-[8px] md:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[10px] font-ptsans leading-[normal] sm:mt-[6px] md:mt-[7px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[13px] 2xl:mt-[9px] not-italic text-black_900 text-center w-[90%]">
//                   Accommodations for travelers often with restaurants, meeting rooms and other guest services
//                 </div>
//                 <Button
//                   className="mb-2 common-pointer rounded-sm font-bold font-inter sm:text-[6px] md:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] sm:mt-[22px] md:mt-[24px] lg:mt-[38px] xl:mt-[45px] 2xl:mt-[48px] 3xl:mt-[28px] text-center w-[95%]"
//                   onClick={handleNavigate69}
//                   size="md"
//                   variant="FillLightblue800"
//                 >
//                   List your property
//                 </Button>
//               </Column>
//               <Column className="font-ptsans bg-white_A700 items-center h-[280px] justify-start sm:mt-[6px] md:mt-[14px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] sm:p-[4px] md:p-[6px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-lg border w-[30%]">
//                 <Img
//                   src="images/tour.svg"
//                   className="mt-6 sm:h-[14px] md:h-[40px] lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] sm:w-[16px] md:w-[40px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
//                   alt="user One"
//                 />
//                 <div className="font-semibold text-md sm:mt-[8px] md:mt-[9px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] Whattypeofbr">
//                   Tour
//                 </div>
//                 <div className="font-light sm:text-[8px] md:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[10px] font-ptsans leading-[normal] sm:mt-[6px] md:mt-[7px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[13px] 2xl:mt-[9px] not-italic text-black_900 text-center w-[90%]">
//                   Planned itinerary for travelers, where they can choose type of activity to do
//                 </div>
//                 <Button
//                   className="mb-2 common-pointer rounded-sm font-bold font-inter sm:text-[6px] md:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] sm:mt-[22px] md:mt-[38px] lg:mt-[50px] xl:mt-[45px] 2xl:mt-[48px] 3xl:mt-[28px] text-center w-[95%]"
//                   onClick={handleNavigate70}
//                   size="md"
//                   variant="FillLightblue800"
//                 >
//                   List your tour package
//                 </Button>
//               </Column>
//               <Column className="font-ptsans bg-white_A700 items-center h-[280px] justify-start sm:mt-[6px] md:mt-[14px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] sm:p-[4px] md:p-[6px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-lg border w-[30%]">
//               <Icon path={mdiShoppingOutline}
//                           title="Bag"
//                           size={2.5}
//                           color="#013580"
//                           className="mt-6"
//                         />
//                 <div className="font-semibold text-md sm:mt-[8px] md:mt-[9px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] Whattypeofbr">
//                   B2B Marketplace
//                 </div>
//                 <div className="font-light sm:text-[8px] md:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[10px] font-ptsans leading-[normal] sm:mt-[6px] md:mt-[7px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[13px] 2xl:mt-[9px] not-italic text-black_900 text-center w-[90%]">
//                   Planned itinerary for travelers, where they can choose type of activity to do
//                 </div>
//                 <Button
//                   className="justify-end mb-2 common-pointer rounded-sm font-bold font-inter sm:text-[6px] md:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] sm:mt-[22px] md:mt-[38px] lg:mt-[38px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[28px] text-center w-[95%]"
//                   // onClick={handleNavigate70}
//                   size="md"
//                   variant="FillLightblue800"
//                 >
//                   List of Channel Manager
//                 </Button>
//               </Column>
//               <Column className="font-ptsans bg-white_A700 items-center h-[280px] justify-start sm:mt-[6px] md:mt-[14px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] sm:p-[4px] md:p-[6px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-lg border w-[30%]">
//               <Icon path={mdiAccountTie}
//                           title="Bag"
//                           size={2.5}
//                           color="#013580"
//                           className="mt-6 w-5 h-5 2xl:w-8 2xl:h-8"
//                                        />
//                 <div className="font-semibold text-md sm:mt-[8px] md:mt-[9px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] Whattypeofbr">
//                   Admin
//                 </div>
//                 <div className="font-light sm:text-[8px] md:text-[10px] xl:text-[10px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[10px] font-ptsans leading-[normal] sm:mt-[6px] md:mt-[7px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[13px] 2xl:mt-[12px] not-italic text-black_900 text-center w-[90%] 2xl:w-[90%]">
//                   Planned itinerary for travelers, where they can choose type of activity to do
//                 </div>
//                 <Button
//                   className="mb-2 common-pointer rounded-sm font-bold font-inter sm:text-[6px] md:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] sm:mt-[22px] md:mt-[38px] lg:mt-[38px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[28px] text-center w-[95%]"
//                   onClick={handleNavigate72}
//                   size="md"
//                   variant="FillLightblue800"
//                 >
//                   Manage User
//                 </Button>
//                 <Button
//                   className="mb-2 common-pointer rounded-sm font-bold font-inter sm:text-[6px] md:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] sm:mt-[22px] md:mt-[8px] lg:mt-[4px] xl:mt-[2px] 2xl:mt-[4px] 3xl:mt-[6px] text-center w-[95%]"
//                   onClick={handleNavigate71}
//                   size="md"
//                   variant="FillLightblue800"
//                 >
//                   Manage Role
//                 </Button>
//               </Column>

//             </Row>
//           </Column>
//         </Column>
//       </Column>
//     </>
//   );
// };

// export default PropertycategorypagePage;

import React, { useEffect } from "react";
import { Column, Text, Row, Img, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiPlusThick, mdiShoppingOutline, mdiAccountTie } from "@mdi/js";
import { RiHotelLine, RiShoppingBagFill } from "react-icons/ri";
import { BiBuildingHouse, BiShoppingBag } from "react-icons/bi";
import { TfiMapAlt, TfiUser } from "react-icons/tfi";
import { IoBagHandleSharp } from "react-icons/io";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";



const PropertycategorypagePage = () => {
  const navigate = useNavigate();

  // Reset the localStorage
  useEffect(() => {
    localStorage.clear();
  }, []);

  function handleNavigate68() {
    navigate("/howmuchapartmenttolist");
  }
  function handleNavigate69() {
    navigate("/howmuchpropertytolist");
  }
  function handleNavigate70() {
    navigate("/t17");
  }
  function handleNavigate71() {
    navigate("/mr");
  }
  function handleNavigate72() {
    navigate("/mu");
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start lg:pb-[364px] xl:pb-[455px] 2xl:pb-[512px] 3xl:pb-[614px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <HeaderOTAAdmin className="w-[100%]" />
          <Column className="font-ptsans justify-center sm:ml-[46px] md:ml-[65px] lg:ml-[84px] xl:ml-[105px] 2xl:ml-[140px] 3xl:ml-[142px] sm:mt-[36px] md:mt-[44px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[80%] 2xl:w-[80%]">
            <Text
              className="Box1 font-medium sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[26px]"
              variant="h5"
            >
              List your property and tour on HalalHoliday.com and start
              welcoming guests in no time!
            </Text>
            <Text
              className="sm:mt-[18px] md:mt-[14px] lg:mt-[21px] xl:mt-[27px] 2xl:mt-[33px] 3xl:mt-[39px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[22px] 3xl:text-[24px] text-black_900 w-[auto]"
              variant="body3"
            >
              To get started, choose the type of property or tour you want to
              list
            </Text>
            <Row className="gap-2 font-ptsans items-center justify-start lg:ml-[12px] xl:ml-[1px] 2xl:ml-[1px] 3xl:ml-[1px] sm:mt-[13px] md:mt-[15px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
              <Column className="font-ptsans bg-white_A700 items-center xl:h-[270px] 2xl:h-[300px] justify-start sm:mt-[6px] md:mt-[14px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] sm:p-[4px] md:p-[6px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-lg border w-[30%] 2xl:w-[35%]">
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
                  src="images/img_volume.svg"className="mt-6 sm:h-[14px] md:h-[40px] lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] sm:w-[14px] md:w-[40px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
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
              <Column className="font-ptsans bg-white_A700 items-center xl:h-[270px] 2xl:h-[300px] justify-start sm:mt-[6px] md:mt-[14px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] sm:p-[4px] md:p-[6px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-lg border w-[30%] 2xl:w-[35%]">
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
              <Column className="font-ptsans bg-white_A700 items-center xl:h-[270px] 2xl:h-[300px] justify-start sm:mt-[6px] md:mt-[14px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] sm:p-[4px] md:p-[6px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-lg border w-[30%] 2xl:w-[35%]">
                <TfiMapAlt className="xl:h-10 xl:w-10 2xl:h-12 2xl:h-12 text-[#013580] mt-5" />
                {/* <Img
                  src="images/tour.svg"
                  className="mt-6 sm:h-[14px] md:h-[40px] lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] sm:w-[16px] md:w-[40px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
alt="user One"
                /> */}
                <div className="font-semibold text-md sm:mt-[8px] md:mt-[9px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[18px] Whattypeofbr">
                  Tour
                </div>
                <div className="font-light sm:text-[8px] md:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[10px] font-ptsans leading-[normal] sm:mt-[6px] md:mt-[7px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[13px] 2xl:mt-[9px] not-italic text-black_900 text-center w-[90%]">
                  Planned itinerary for travelers, where they can choose type of
                  activity to do
                </div>
                <Button
                  className="mb-2 common-pointer rounded-sm font-bold font-inter sm:text-[6px] md:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] sm:mt-[22px] md:mt-[38px] lg:mt-[50px] xl:mt-[70px] 2xl:mt-[65px] 3xl:mt-[28px] text-center w-[95%]"
                  onClick={handleNavigate70}
                  size="md"
                  variant="FillLightblue800"
                >
                  List your tour package
                </Button>
              </Column>
              <Column className="font-ptsans bg-white_A700 items-center xl:h-[270px] 2xl:h-[300px] justify-start sm:mt-[6px] md:mt-[14px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] sm:p-[4px] md:p-[6px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-lg border w-[30%] 2xl:w-[35%]">
                {/* <Img
                  src="images/shopping-outline.svg"
                  className="mt-6 sm:h-[14px] md:h-[40px] lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] sm:w-[14px] md:w-[40px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                  alt="user One"
                /> */}
                <BiShoppingBag className="xl:h-10 xl:w-10 2xl:h-12 2xl:h-12 text-[#013580] mt-5" />
                <div className="font-semibold text-md sm:mt-[8px] md:mt-[9px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[18px] Whattypeofbr">
                  B2B Marketplace
                </div>
                <div className="font-light sm:text-[8px] md:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[10px] font-ptsans leading-[normal] sm:mt-[6px] md:mt-[7px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[13px] 2xl:mt-[9px] not-italic text-black_900 text-center w-[90%]">
                  Planned itinerary for travelers, where they can choose type of
                  activity to do
                </div>
                <Button
                  className="justify-end mb-2 common-pointer rounded-sm font-bold font-inter sm:text-[6px] md:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] sm:mt-[22px] md:mt-[38px] lg:mt-[38px] xl:mt-[70px] 2xl:mt-[65px] 3xl:mt-[28px] text-center w-[95%]"
                  // onClick={handleNavigate70}
                  size="md"
                  variant="FillLightblue800"
                >
                  List of Channel Manager
                </Button>
              </Column>
              <Column className="font-ptsans bg-white_A700 items-center xl:h-[270px] 2xl:h-[300px] justify-start sm:mt-[6px] md:mt-[14px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] sm:p-[4px] md:p-[6px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-lg border w-[30%] 2xl:w-[35%]">
                {/* <Img
                  src="images/account-tie.svg"
                  className="items-[#013580] mt-6 sm:h-[14px] md:h-[40px] lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] sm:w-[14px] md:w-[40px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                  alt="user One"
                  fill="#013580"
                /> */}
                <TfiUser className="xl:h-10 xl:w-10 2xl:h-12 2xl:h-12 text-[#013580] mt-5" />

<div className="font-semibold text-md sm:mt-[8px] md:mt-[9px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[18px] Whattypeofbr">
                  Admin
                </div>
                <div className="font-light sm:text-[8px] md:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[10px] font-ptsans leading-[normal] sm:mt-[6px] md:mt-[7px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[13px] 2xl:mt-[12px] not-italic text-black_900 text-center w-[90%] 2xl:w-[90%]">
                  Planned itinerary for travelers, where they can choose type of
                  activity to do
                </div>
                <Button
                  className="mb-2 common-pointer rounded-sm font-bold font-inter sm:text-[6px] md:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] sm:mt-[22px] md:mt-[38px] lg:mt-[38px] xl:mt-[30px] 2xl:mt-[15px] 3xl:mt-[28px] text-center w-[95%]"
                  onClick={handleNavigate72}
                  size="md"
                  variant="FillLightblue800"
                >
                  Manage User
                </Button>
                <Button
                  className="mb- common-pointer rounded-sm font-bold font-inter sm:text-[6px] md:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] sm:mt-[22px] md:mt-[8px] lg:mt-[4px] xl:mt-[2px] 2xl:mt-[1px] 3xl:mt-[6px] text-center w-[95%]"
                  onClick={handleNavigate71}
                  size="md"
                  variant="FillLightblue800"
                >
                  Manage Role
                </Button>
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default PropertycategorypagePage;

import React from "react";

import { Text, Img, Line, Button, Row, Column } from "components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "components/Sidebar/index";
import { FaShoppingCart, FaThumbtack } from "react-icons/fa";
import { RxDoubleArrowRight } from "react-icons/rx";
import Icon from '@mdi/react'
import { mdiBagChecked, mdiTicketConfirmation, mdiStar, mdiBell  } from '@mdi/js';
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";
import SidebarEX from "components/SidebarEX/index";
import App from "pages/Influencer/App/index";
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";

const TourPartnerPage = () => {
  const navigate = useNavigate();
  const [openTab, setOpenTab] = React.useState(1);

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
        <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />
        <div className="py-5">
          <div className="flex">
            <div className="grid w-[200px]">
              <Sidebar />
            </div>
            <div className=" px-2 w-full">
              {/* <text className="font-bold text-[40px]">
                Dashboard
              </text> */}
              <Column className="bg-white w-[100%]">
        <Row className="bg-gray_100 h-fit justify-start items-start w-[100%]">
          <Column>
            <Row className="bg-[#F5F5F5] items-start w-[100%]">
              <Button class="bg-[#87B87F] hover:bg-[#629B58] items-center h-9 px-2 ml-[10px] mt-2.5 mb-2.5">
                <Row>
                  <FaShoppingCart className="h-5 w-5 text-white" />
                  <Text
                    className="px-1 text-white cursor-pointer"
                    variant="body7"
                  >
                    Point of Sale
                  </Text>
                </Row>
              </Button>

              <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-9 px-2 ml-[10px] mt-2.5 mb-2.5">
                <Row>
                <FaThumbtack className="h-5 w-5 text-white" />
                </Row>
              </Button>
            </Row>
          </Column>
        </Row>

        <Row className="w-[100%] mt-[8px]">
          {/* <Sidebar /> */}
          <Column className="p-4 h-fit w-[100%]">
            <Row className="items-center">
              <Column className="w-[65%] m-1 inline">
                <Row classname="inline items-center">
                  <Text className="text-light_blue_600 text-[25px] m-1 font-light"> 
                    Dashboard 
                  </Text>
                  <RxDoubleArrowRight className="items-center ml-2 mt-6 h-5 w-5 text-[#4C8FBD]" />
                  <Text className="text-lg ml-1 mt-5 font-light">2022-12-07</Text>
                </Row>
                {/* Dashboard */}
              </Column>
              <Column className="w-[38%] text-white m-1 ">
                <Row className="justify-end">
                  <Text className="text-[#4C8FBD] font-light text-[20px]">Syawalni</Text>
                  <Text className="text-black font-light text-[20px]">.HalalHoliday.com</Text>

                </Row>
              </Column>
            </Row>
            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
            <Row>

              <div className="w-full">
                <ul
                  className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                  role="tablist"
                >
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "px-5 py-3 rounded block leading-normal bg-[#FAFAFA] border border-[#ADB5BD] hover:border-[#4C8FBD] hover:bg-white cursor-pointer" +
                        (openTab === 1
                          ? "text-white bg-" + + "-600"
                          : "text-" + + "-600 bg-white")
                      }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      <Text className="text-lg font-medium">Today</Text><br></br>
                      <Text className="text-xl font-medium text-[#4C8FBD]">0 Bookings</Text>
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "px-5 py-3 rounded block leading-normal bg-[#FAFAFA] border border-[#ADB5BD] hover:border-[#4C8FBD] hover:bg-white cursor-pointer" +
                        (openTab === 2
                          ? "text-white bg-" + + "-600"
                          : "text-" + + "-600 bg-white")
                      }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      <Text className="text-lg font-medium">Past 14 Days</Text><br></br>
                      <Text className="text-xl font-medium text-[#4C8FBD]">0 Bookings</Text>
                    </a>

                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "px-5 py-3 rounded block leading-normal bg-[#FAFAFA] border border-[#ADB5BD] hover:border-[#4C8FBD] hover:bg-white cursor-pointer" +
                        (openTab === 3
                          ? "text-white bg-" + + "-600"
                          : "text-" + "-600 bg-white")
                      }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      <Text className="text-lg font-medium">Past 30 Days</Text><br></br>
                      <Text className="text-xl font-medium text-[#4C8FBD]">0 Bookings</Text>
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "px-5 py-3 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD] hover:border-[#4C8FBD] hover:bg-white cursor-pointer" +
                        (openTab === 4
                          ? "text-white bg-" + + "-600"
                          : "text-" + "-600 bg-white")
                      }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(4);
                      }}
                      data-toggle="tab"
                      href="#link4"
                      role="tablist"
                    >
                      <Text className="text-lg font-medium">Past 90 Days</Text><br></br>
                      <Text className="text-xl font-medium text-[#4C8FBD]">0 Bookings</Text>
                    </a>
                  </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-transparent w-full mb-6 rounded">
                  <div className="px-4 py-5 flex-auto">
                    <div className="tab-content tab-space">
                      <div className={openTab === 1 ? "block" : "hidden"} id="link1">

                        <Row className="">
                          <Column className="w-[24%] ">

                            <Text className="text-lg text-[#4C8FBD] font-light">
                              Visitors
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                            <Row className="mt-3">
                              <Column>
                                <Text className="text-xl text-[#4C8FBD]">New Visitors</Text>
                                <Text className="text-xl">0</Text>
                              </Column>
                            </Row>
                            <Row className="mt-3">
                              <Column>
                                <Text className="text-xl text-[#4C8FBD]">Bounce Rate</Text>
                                <Text className="text-xl">0</Text>
                              </Column>
                            </Row>
                            <Row className="mt-3">
                              <Column>
                                <Text className="text-xl text-[#4C8FBD]">Conversions</Text>
                                <Text className="text-xl">0</Text>
                              </Column>
                            </Row>
                          </Column>
                          <Column className="ml-4 w-[77%] ">
                            <Text className="text-xl text-[#4C8FBD] font-light">
                              Bookings
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                          </Column>
                        </Row>
                        <br></br>
                        <br></br>
                        <Row>
                          <Column className="w-[75%]">
                            <Text className="text-lg text-[#4C8FBD] font-light">
                              Traffic
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                          </Column>
                          <Column className="ml-4 w-[25%]">
                            <Text className="text-lg text-[#4C8FBD] font-light">
                              Devices
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                          </Column>
                        </Row>
                        <br></br>
                        <br></br>
                        <Row>
                          <Column className="w-[50%]">
                            <Text className="text-lg text-[#4C8FBD] font-light">
                              Top Regions
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                            <Row>
                              <Column className="mt-4 w-[8%] px-4 py-4 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                                <Icon path={mdiBagChecked}
                                  title="Bag"
                                  size={1}
                                  color="#4C8FBD"
                                  className="items-center"
                                />
                              </Column>
                              <Column className="mt-4 w-full px-4 py-4 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                                <Text >Malaysia</Text>
                              </Column>
                            </Row>
                          </Column>
                          <Column className="ml-4 w-[50%]">
                            <Text className="text-lg text-[#4C8FBD] font-light">
                              Top Inventory
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                            <Column className="mt-4 w-full px-2 py-4 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                              <Row>
                                <Icon path={mdiBagChecked}
                                  title="Bag"
                                  size={1}
                                  color="#4C8FBD"
                                />
                                <Text className="ml-1 text-[#4C8FBD]">Walking Tour of Vancouver</Text>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <br></br>
                        <br></br>
                        <Row>
                          <Column className="w-[100%]">
                            <Text className="text-lg text-[#4C8FBD] font-light">
                              Feed
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />

                            <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-column justify-center grid-rows-3">
                              <li className="mt-4 w-[15%] h-16 p-2 block leading-normal bg-[#FAFAFA] border border-slate-300">
                                <Row className="items-center">
                                  <Column className="">
                                    <div class=" w-10 h-10 bg-[#a7c957] items-center rounded-full">
                                      <Icon path={mdiTicketConfirmation}
                                        title="Ticket"
                                        size={1.3}
                                        color="white"
                                        rotate={135}
                                        className="ml-1 mt-1 absolute "
                                      />
                                    </div>
                                  </Column>
                                  <Column className="ml-2">
                                    <Text className="font-medium text-2xl text-[#a7c957] hover:text-[#4C8FBD]">0</Text>
                                    <Text className="text-sm mb-1">new bookings</Text>
                                  </Column>
                                </Row>
                              </li>
                              <li className="mt-4 w-[15%] h-16 p-2 block leading-normal bg-[#FAFAFA] border-y border-slate-300">
                                <Row className="items-center">
                                  <Column>
                                    <div class=" w-10 h-10 bg-[#e2711d] items-center rounded-full">
                                      <Icon path={mdiStar}
                                        title="Star"
                                        size={1.3}
                                        color="white"
                                        className="ml-1 mt-1 absolute "
                                      />
                                    </div>
                                  </Column>
                                  <Column className="ml-2">
                                    <Text className="font-medium text-2xl text-[#e2711d] hover:text-[#4C8FBD]">0</Text>
                                    <Text className="text-sm mb-1">unread reviews</Text>
                                  </Column>
                                </Row>
                              </li>
                              <li className="mt-4 w-[15%] h-16 p-2 block leading-normal bg-[#FAFAFA] border border-slate-300">
                                <Row className="items-center">
                                  <Column>
                                    <div class=" w-10 h-10 bg-[#ef233c] items-center rounded-full">
                                      <Icon path={mdiBell}
                                        title="Bell"
                                        size={1.3}
                                        color="white"
                                        className="ml-1 mt-1 absolute "
                                      />
                                    </div>
                                  </Column>
                                  <Column className="ml-2">
                                    <Text className="font-medium text-2xl text-[#ef233c] hover:text-[#4C8FBD]">0</Text>
                                    <Text className="text-sm mb-1">notification alerts</Text>
                                  </Column>
                                </Row>
                              </li>
                            </ul>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                          </Column>
                        </Row>
                        <br></br>
                        <br></br>
                      </div>
                      <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                        <Row className="">
                          <Column className="w-[24%] ">

                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Visitors
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                            <Row className="mt-3">
                              <Column>
                                <Text className="text-2xl text-[#4C8FBD]">New Visitors</Text>
                                <Text className="text-xl">0</Text>
                              </Column>
                            </Row>
                            <Row className="mt-3">
                              <Column>
                                <Text className="text-2xl text-[#4C8FBD]">Bounce Rate</Text>
                                <Text className="text-xl">0</Text>
                              </Column>
                            </Row>
                            <Row className="mt-3">
                              <Column>
                                <Text className="text-2xl text-[#4C8FBD]">Conversions</Text>
                                <Text className="text-xl">0</Text>
                              </Column>
                            </Row>
                          </Column>
                          <Column className="ml-4 w-[77%] ">
                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Bookings
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                          </Column>
                        </Row>
                        <br></br>
                        <br></br>
                        <Row>
                          <Column className="w-[75%]">
                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Traffic
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                          </Column>
                          <Column className="ml-4 w-[25%]">
                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Devices
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                          </Column>
                        </Row>
                        <br></br>
                        <br></br>
                        <Row>
                          <Column className="w-[50%]">
                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Top Regions
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                            <Row>
                              <Column className="mt-4 w-[8%] px-4 py-4 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                                <Icon path={mdiBagChecked}
                                  title="Bag"
                                  size={1}
                                  color="#4C8FBD"
                                  className="items-center"
                                />
                              </Column>
                              <Column className="mt-4 w-full px-4 py-4 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                                <Text >Malaysia</Text>
                              </Column>
                            </Row>
                          </Column>
                          <Column className="ml-4 w-[50%]">
                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Top Inventory
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                            <Column className="mt-4 w-full px-2 py-4 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                              <Row>
                                <Icon path={mdiBagChecked}
                                  title="Bag"
                                  size={1}
                                  color="#4C8FBD"
                                />
                                <Text className="ml-1 text-[#4C8FBD]">Walking Tour of Vancouver</Text>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <br></br>
                        <br></br>
                        <Row>
                          <Column className="w-[100%]">
                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Feed
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                            {/* <Row className=" justify-center bg-indigo-900"> */}

                            <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-column justify-center grid-rows-3">
                              <li className="mt-4 w-[15%] h-20 px-2 py-5 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                                <Row className="inline-flex">
                                  <Column className="">
                                    <div class=" w-10 h-10 bg-[#a7c957] items-center rounded-full">
                                      <Icon path={mdiTicketConfirmation}
                                        title="Ticket"
                                        size={1.3}
                                        color="white"
                                        rotate={135}
                                        className="ml-1 mt-1 absolute "
                                      />
                                    </div>
                                  </Column>
                                  <Column className="ml-2">
                                    <Text className="font-medium text-2xl text-[#a7c957] hover:text-[#4C8FBD]">0</Text>
                                    <Text>new bookings</Text>
                                  </Column>
                                </Row>
                              </li>
                              <li className="mt-4 w-[15%] h-20 px-5 py-5 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                                <Row className="inline-flex">
                                  <Column className="">
                                    <div class=" w-10 h-10 bg-[#e2711d] items-center rounded-full">
                                      <Icon path={mdiStar}
                                        title="Star"
                                        size={1.3}
                                        color="white"
                                        className="ml-1 mt-1 absolute "
                                      />
                                    </div>
                                  </Column>
                                  <Column className="ml-2">
                                    <Text className="font-medium text-2xl text-[#e2711d] hover:text-[#4C8FBD]">0</Text>
                                    <Text>unread reviews</Text>
                                  </Column>
                                </Row>
                              </li>
                              <li className="mt-4 w-[15%] h-20 px-2 py-5 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                                <Row className="inline-flex">
                                  <Column className="">
                                    <div class=" w-10 h-10 bg-[#ef233c] items-center rounded-full">
                                      <Icon path={mdiBell}
                                        title="Bell"
                                        size={1.3}
                                        color="white"
                                        className="ml-1 mt-1 absolute "
                                      />
                                    </div>
                                  </Column>
                                  <Column className="ml-2">
                                    <Text className="font-medium text-2xl text-[#ef233c] hover:text-[#4C8FBD]">0</Text>
                                    <Text>notification alerts</Text>
                                  </Column>
                                </Row>
                              </li>
                            </ul>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                          </Column>
                        </Row>
                      </div>
                      <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                        <Row className="">
                          <Column className="w-[24%] ">

                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Visitors
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                            <Row className="mt-3">
                              <Column>
                                <Text className="text-2xl text-[#4C8FBD]">New Visitors</Text>
                                <Text className="text-xl">0</Text>
                              </Column>
                            </Row>
                            <Row className="mt-3">
                              <Column>
                                <Text className="text-2xl text-[#4C8FBD]">Bounce Rate</Text>
                                <Text className="text-xl">0</Text>
                              </Column>
                            </Row>
                            <Row className="mt-3">
                              <Column>
                                <Text className="text-2xl text-[#4C8FBD]">Conversions</Text>
                                <Text className="text-xl">0</Text>
                              </Column>
                            </Row>
                          </Column>
                          <Column className="ml-4 w-[77%] ">
                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Bookings
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                          </Column>
                        </Row>

                        <br></br>
                        <br></br>
                        <Row>
                          <Column className="w-[75%]">
                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Traffic
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                          </Column>
                          <Column className="ml-4 w-[25%]">
                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Devices
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                          </Column>
                        </Row>
                        <br></br>
                        <br></br>

                        <Row>
                          <Column className="w-[50%]">
                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Top Regions
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                            <Row>
                              <Column className="mt-4 w-[8%] px-4 py-4 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                                <Icon path={mdiBagChecked}
                                  title="Bag"
                                  size={1}
                                  color="#4C8FBD"
                                  className="items-center"
                                />
                              </Column>
                              <Column className="mt-4 w-full px-4 py-4 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                                <Text >Malaysia</Text>
                              </Column>
                            </Row>
                          </Column>
                          <Column className="ml-4 w-[50%]">
                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Top Inventory
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                            <Column className="mt-4 w-full px-2 py-4 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                              <Row>
                                <Icon path={mdiBagChecked}
                                  title="Bag"
                                  size={1}
                                  color="#4C8FBD"
                                />
                                <Text className="ml-1 text-[#4C8FBD]">Walking Tour of Vancouver</Text>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <br></br>
                        <br></br>

                        <Row>
                          <Column className="w-[100%]">
                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Feed
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />

                            <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-column justify-center grid-rows-3">
                              <li className="mt-4 w-[15%] h-20 px-2 py-5 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                                <Row className="inline-flex">
                                  <Column className="">
                                    <div class=" w-10 h-10 bg-[#a7c957] items-center rounded-full">
                                      <Icon path={mdiTicketConfirmation}
                                        title="Ticket"
                                        size={1.3}
                                        color="white"
                                        rotate={135}
                                        className="ml-1 mt-1 absolute "
                                      />
                                    </div>
                                  </Column>
                                  <Column className="ml-2">
                                    <Text className="font-medium text-2xl text-[#a7c957] hover:text-[#4C8FBD]">0</Text>
                                    <Text>new bookings</Text>
                                  </Column>
                                </Row>
                              </li>
                              <li className="mt-4 w-[15%] h-20 px-5 py-5 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                                <Row className="inline-flex">
                                  <Column className="">
                                    <div class=" w-10 h-10 bg-[#e2711d] items-center rounded-full">
                                      <Icon path={mdiStar}
                                        title="Star"
                                        size={1.3}
                                        color="white"
                                        className="ml-1 mt-1 absolute "
                                      />
                                    </div>
                                  </Column>
                                  <Column className="ml-2">
                                    <Text className="font-medium text-2xl text-[#e2711d] hover:text-[#4C8FBD]">0</Text>
                                    <Text>unread reviews</Text>
                                  </Column>
                                </Row>
                              </li>
                              <li className="mt-4 w-[15%] h-20 px-2 py-5 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                                <Row className="inline-flex">
                                  <Column className="">
                                    <div class=" w-10 h-10 bg-[#ef233c] items-center rounded-full">
                                      <Icon path={mdiBell}
                                        title="Bell"
                                        size={1.3}
                                        color="white"
                                        className="ml-1 mt-1 absolute "
                                      />
                                    </div>
                                  </Column>
                                  <Column className="ml-2">
                                    <Text className="font-medium text-2xl text-[#ef233c] hover:text-[#4C8FBD]">0</Text>
                                    <Text>notification alerts</Text>
                                  </Column>
                                </Row>
                              </li>
                            </ul>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                          </Column>
                        </Row>
                      </div>
                      <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                        <Row className="">
                          <Column className="w-[24%] ">

                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Visitors
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                            <Row className="mt-3">
                              <Column>
                                <Text className="text-2xl text-[#4C8FBD]">New Visitors</Text>
                                <Text className="text-xl">0</Text>
                              </Column>
                            </Row>
                            <Row className="mt-3">
                              <Column>
                                <Text className="text-2xl text-[#4C8FBD]">Bounce Rate</Text>
                                <Text className="text-xl">0</Text>
                              </Column>
                            </Row>
                            <Row className="mt-3">
                              <Column>
                                <Text className="text-2xl text-[#4C8FBD]">Conversions</Text>
                                <Text className="text-xl">0</Text>
                              </Column>
                            </Row>
                          </Column>
                          <Column className="ml-4 w-[77%] ">
                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Bookings
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                          </Column>
                        </Row>
                        <br></br>
                        <br></br>
                        <Row>
                          <Column className="w-[75%]">
                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Traffic
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                          </Column>
                          <Column className="ml-4 w-[25%]">
                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Devices
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                          </Column>
                        </Row>
                        <br></br>
                        <br></br>
                        <Row>
                          <Column className="w-[50%]">
                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Top Regions
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                            <Row>
                              <Column className="mt-4 w-[8%] px-4 py-4 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                                <Icon path={mdiBagChecked}
                                  title="Bag"
                                  size={1}
                                  color="#4C8FBD"
                                  className="items-center"
                                />
                              </Column>
                              <Column className="mt-4 w-full px-4 py-4 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                                <Text >Malaysia</Text>
                              </Column>
                            </Row>
                          </Column>
                          <Column className="ml-4 w-[50%]">
                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Top Inventory
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                            <Column className="mt-4 w-full px-2 py-4 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                              <Row>
                                <Icon path={mdiBagChecked}
                                  title="Bag"
                                  size={1}
                                  color="#4C8FBD"
                                />
                                <Text className="ml-1 text-[#4C8FBD]">Walking Tour of Vancouver</Text>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <br></br>
                        <br></br>
                        <Row>
                          <Column className="w-[100%]">
                            <Text className="text-2xl text-[#4C8FBD] font-light">
                              Feed
                            </Text>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />


                            <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-column justify-center grid-rows-3">
                              <li className="mt-4 w-[15%] h-20 px-2 py-5 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                                <Row className="inline-flex">
                                  <Column className="">
                                    <div class=" w-10 h-10 bg-[#a7c957] items-center rounded-full">
                                      <Icon path={mdiTicketConfirmation}
                                        title="Ticket"
                                        size={1.3}
                                        color="white"
                                        rotate={135}
                                        className="ml-1 mt-1 absolute "
                                      />
                                    </div>
                                  </Column>
                                  <Column className="ml-2">
                                    <Text className="font-medium text-2xl text-[#a7c957] hover:text-[#4C8FBD]">0</Text>
                                    <Text>new bookings</Text>
                                  </Column>
                                </Row>
                              </li>
                              <li className="mt-4 w-[15%] h-20 px-5 py-5 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                                <Row className="inline-flex">
                                  <Column className="">
                                    <div class=" w-10 h-10 bg-[#e2711d] items-center rounded-full">
                                      <Icon path={mdiStar}
                                        title="Star"
                                        size={1.3}
                                        color="white"
                                        className="ml-1 mt-1 absolute "
                                      />
                                    </div>
                                  </Column>
                                  <Column className="ml-2">
                                    <Text className="font-medium text-2xl text-[#e2711d] hover:text-[#4C8FBD]">0</Text>
                                    <Text>unread reviews</Text>
                                  </Column>
                                </Row>
                              </li>
                              <li className="mt-4 w-[15%] h-20 px-2 py-5 block leading-normal bg-[#FAFAFA] border border-[#ADB5BD]">
                                <Row className="inline-flex">
                                  <Column className="">
                                    <div class=" w-10 h-10 bg-[#ef233c] items-center rounded-full">
                                      <Icon path={mdiBell}
                                        title="Bell"
                                        size={1.3}
                                        color="white"
                                        className="ml-1 mt-1 absolute "
                                      />
                                    </div>
                                  </Column>
                                  <Column className="ml-2">
                                    <Text className="font-medium text-2xl text-[#ef233c] hover:text-[#4C8FBD]">0</Text>
                                    <Text>notification alerts</Text>
                                  </Column>
                                </Row>
                              </li>
                            </ul>
                            <Line className="bg-[#ADB5BD] h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                          </Column>
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Column>
        </Row>
      </Column>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default TourPartnerPage;

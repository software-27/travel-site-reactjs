import React from "react";
import { Column, Row, Text, Img, Line } from "components";
import { SelectFlag } from "components/SelectFlag";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";
import { SelectBook } from "components/SelectBook";
import FlagStatus from "components/Flag&Status/index";
import Sidebar from "components/Sidebar/index";
import Topbtns from "components/Topbutton/index";
import SaveSearch from "components/SaveSearchBtn/index";
import Search from "components/Searchbtn/index";
import Bookinglabel from "components/Label/index";
import Col from "../../../../node_modules/react-bootstrap/esm/Col";
import Inventory from "components/Inventory/index";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";

const Bookings = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const navigate = useNavigate();

  function handleNavigate73() {
    navigate("/t5");
  }

  return (
    <>
    {/* <Column className="bg-white font-ptsans items-center justify-start w-[100%]">
    <Column className="items-center justify-start w-[100%]"> */}
      <div className="w-full font-montserrat"></div>
      <HeaderOTAAdmin />
      <div className="">
        <div className="flex flex-row">
          <div className="">
            <Sidebar />
          </div>
          <Column className="justify-start w-[100%]">
          <Row className="h-fit justify-start items-start w-[100%]">
            <Topbtns/>
            {/* <Column className="my-2.5 self-align absolute right-10">
              <Row className="gap-2 items-center">
                <Img
                  src="images/Hticket.png"
                  className="Hticket h-6 w-6"
                  alt="Hticket"
                />
                <Text className="text-[#4C8FBD]" variant="body4"> 
                  Bookings 
                </Text>
              </Row>
            </Column> */}
          <Column className="mt-[20px] pl-[40px] text-light_blue_600 font-regular">
            
          </Column>
        </Row>
        <Row>
          {/* <Sidebar/> */}
          <Row className="w-[100%]">
            <Column className="gap-4 p-2 w-[100%]">
                <Row>
                  <Row className="items-start">
                    <Text className="text-[#4C8FBD] text-[30px]" > 
                      Bookings 
                    </Text>
                  </Row>
                  <Row className="self-align absolute right-10">
                    <button 
                      className="p-3.5 bg-[#A0A0A0] hover:bg-[#888888] items-start justify-start font-bold"
                      type="button"
                      onClick={() => setShowModal2(true)}
                    >
                      <Row>
                        <Text className="text-white text-[13px] cursor-pointer ">
                          Manage
                        </Text>
                        <Img
                          src="images/downarrow.png"
                          className="downarrow h-2 w-2 ml-2 mt-1.5 text-white"
                          alt="downarrow"
                        />
                      </Row>
                    </button>

                    {showModal2 ? (
                    <>
                      <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                      >
                        
                        <div className="relative my-6 mx-auto max-w-3xl w-[600px] ">
                          {/*content*/}
                          <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 bg-[#428BCA]">
                              <h3 className="text-2xl font-semibold text-white">
                                Manage Labels
                              </h3>
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal2(false)}
                              >
                                <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                              <textarea className="resize-none border-[#E7E7E7] w-full" rows={1} placeholder="Filter Labels...">

                              </textarea>

                              <div class="border border-[#E7E7E7] ">
                                <Column className="items-center">
                                  <Text className="mb-5 text-gray-800 2xl:py-[200px]">
                                    You don't have any labels
                                  </Text>
                                </Column>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}

                    <button className="bg-[#87B87F] hover:bg-[#629B58] ml-2 items-start justify-start font-bold px-3 py-3.5">
                      <Row>
                        <Img
                          src="images/plus.png"
                          className="plus h-4 w-4 mr-2 mt-0.5 text-white"
                          alt="plus"
                        />
                        <Text className="text-white text-[13px] cursor-pointer ">
                          Create Booking
                        </Text>
                      </Row>
                    </button>
                  </Row>
                </Row>
                <Line className=" bg-gray_700_33 h-[0.5px] mt-4 w-[100%]" />
                <Row className="items-center h-fit">
              <Column className="w-[100%] text-light_blue_600 text-[20px] font-regular">
                <Row className="h-9">
                <input type="text" id="booked" class="bg-white border placeholder-bluegray_400 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" 
                placeholder="Search names, email or transaction numbers"
                />
                  <Search/>
                </Row>
              </Column>
              <SaveSearch/>
            </Row>
                <Row className="h-9">
                  <div class="flex w-[32%]">
                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray_100 border border-r-0 border-gray-300  dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <Img
                        src="images/calendar.png"
                        className="calendar h-4 w-4 mt-0.5 text-white"
                        alt="calendar"
                      />
                    </span>
                    <input type="date" id="booked" class="bg-white border text-gray-900 focus:ring-[#ed8709] focus:border-[#ed8709] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  " 
                    />
                    <input type="date" id="booked" class="bg-white border text-gray-900 focus:ring-[#ed8709] focus:border-[#ed8709] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  " 
                    />
                  </div>
                  <div class="flex ml-5 w-[32%]">
                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray_100 border border-r-0 border-gray-300  dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <Img
                        src="images/time.png"
                        className="time h-4 w-4 mt-0.5 text-white"
                        alt="time"
                      />
                    </span>
                    <input type="date" id="booked" class="bg-white border text-gray-900 focus:ring-[#ed8709] focus:border-[#ed8709] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  " 
                    />
                    <input type="date" id="booked" class="bg-white border text-gray-900 focus:ring-[#ed8709] focus:border-[#ed8709] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  " 
                    />
                  </div>
                </Row>
                <Row className="items-center gap-4 h-9 w-[65.2%]">
                  <Column className="h-fit w-[50%]">
                    <FlagStatus/>
                  </Column>
                  <Column className="h-fit w-[50%]">
                    <Bookinglabel/>
                  </Column>
                </Row>
                <Inventory/>

                <Row className="2xl:mt-20 2xl:w-[1000px]">
                  <Column className="items-center 2xl:ml-[100px] 2xl:mt-[70px]">
                    <text className="text-[25px] mb-3">
                      You don't have any bookings
                    </text>
                    <text>
                      Add bookings through the Point of Sale, or receive them 
                    </text>
                    <text>
                      through your booking website. They can be viewed and 
                    </text>
                    <text className="mb-5">
                      managed here.
                    </text>
                    <button className="bg-[#87B87F] hover:bg-[#629B58] ml-2 items-start justify-start font-bold px-3 py-3.5"
                      onClick={handleNavigate73}>
                      <Row>
                        <Img
                          src="images/plus.png"
                          className="plus h-4 w-4 mr-2 mt-0.5 text-white"
                          alt="plus"
                        />
                        <Text className="text-white text-[13px] cursor-pointer ">
                          Create Booking
                        </Text>
                      </Row>
                    </button>
                  </Column>
                  <Img
                    src="images/bookings.svg"
                    className="bookingspic 2xl:h-[350px] 2xl:w-[380px] 2xl:ml-[80px]"
                    alt="bookingspic"
                  />
                
                </Row>


              </Column>
            </Row>

            </Row>
            
                    

          </Column>
        </div>
      </div>

        {/* </Column>
      </Column> */}
    </>
  );
};

export default Bookings;
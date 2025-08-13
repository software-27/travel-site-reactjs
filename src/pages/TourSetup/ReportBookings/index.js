
import React from "react";
import { Column, Row, Text,Line, Button,Img,} from "components";
import Header from "components/Header/Header/index";
import Sidebar from "components/Sidebar/index";
import DropdownRender from "components/Dropdown";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaThumbtack } from "react-icons/fa";
import { RxDoubleArrowRight, RxChevronLeft } from "react-icons/rx";
import Icon from '@mdi/react'
import { mdiPlusThick, mdiChartBar, mdiFolderOpen } from '@mdi/js';
import {useState} from 'react';
import Topbtns from "components/Topbutton/index";
import FlagStatus4 from "components/Flag&Status4/index";
import SearchDate from "components/SearchDate/index";
import BookingLabel from "components/BookingLabel/index";
import Inventory from "components/Inventory/index";
import PromoCode from "components/PromoCode/index";
import UserOwned from "components/UserOwned/index";

 
const ReportBookings = ()=> {
 /* const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };*/

  const navigate = useNavigate();
    //button navigate to report
    function handleNavigate() {
      navigate("/t34")
  }
  //button navigate to generate report booking
  function handleNavigate1() {
    navigate("/t59");
  }

   //for switch 
    const [enabled, setEnabled] = useState(false);
    //popup funct.
    const [showModal, setShowModal] = React.useState(false);


  return (
    <>
      <Header className="w-[100%]" />
      <Column className="bg-white w-[100%]">
        <Row className="bg-gray_100 h-fit justify-start items-start w-[100%]">
          <Column>
            <Topbtns/>
          </Column>
         
        </Row>
        <Row className="w-[100%] mt-[8px]">
          <Sidebar/>
          <Column className="p-2 bg-white h-auto w-[100%]">
                <Row className="mb-4">
                <Row onClick={handleNavigate} className="cursor-pointer w-[65%] text-light_blue_600 text-[25px] m-1 font-light items-center">
                Reports
                <RxDoubleArrowRight className="items-start ml-2 mt-4 h-5 w-5 text-[#667E99] items-center" />
                <Text className="text-[15px] ml-2 mt-2 text-[#667E99]">Bookings</Text>
              </Row>
                </Row>
                <Line className="bg-gray_700_33 mb-5 h-[1.5px] w-[100%]" />
                <Row>
                  <Column className="w-[70%] font-regular gap-2 ">
                  <Row className="items-center gap-4 h-9 w-[100%]">
                    <div class="flex w-[50%]">
                      <span class="inline-flex items-center h-9  px-3 text-sm text-gray-900 bg-gray_100 border border-r-0 border-gray-300  dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                          <Img
                              src="images/calendar.png"
                              className="calendar h-4 w-4 mt-0.5 text-white"
                              alt="calendar"
                          />
                      </span>
                      <input type="date" id="booked" class="h-9 bg-white border text-gray-900 focus:ring-[#ed8709] focus:border-[#ed8709] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                      />
                      <input type="date" id="booked" class="h-9 bg-white border text-gray-900 focus:ring-[#ed8709] focus:border-[#ed8709] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                      />
                    </div>
                    <SearchDate className="w-[50%]" />
                  </Row>

                  <Row className="items-center gap-4 h-9 w-[100%]">
                      <FlagStatus4 className="w-[50%]" />
                      <UserOwned className="w-[50%]" />
                  </Row>

                  <Row className="items-center gap-4 h-9 w-[98%]">
                      <BookingLabel className="w-[50%]" />
                  </Row>

                  <Row className="items-center gap-4 h-9 w-[98%]">
                      <PromoCode className="w-[50%]" />
                  </Row>

                  <Row className="items-center gap-4 h-9 w-[100%]">
                      <Inventory class />
                  </Row>

                  <Row className="h-9 gap-4 mt-4">
                    <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset"
                        size="xs"
                        type="submit"
                        onClick={handleNavigate1}>
                        <Row className="gap-2 items-center">
                            <Icon path={mdiChartBar}
                                title="Bag"
                                size={1.0}
                                color="white"
                            />
                            <Text className="text-lg">Generate Report</Text>
                        </Row>
                    </Button>
                    </Row>

                  </Column>
 
                  <Column className="w-[30%] items-end gap-10">
                    <Button className="items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white bg-[#f9c74f] hover:bg-[#dea54b] ring-4 ring-[#f9c74f] ring-inset"
                      size="xs"
                      type="submit"
                      onClick={() => setShowModal(true)}>
                      <Row className="gap-2 items-center">
                        <Icon path={mdiFolderOpen}
                          title="Bag"
                          size={1.0}
                          color="white"
                        />
                        <Text className="text-lg">Saved Searches</Text>
                      </Row>
                    </Button>
                    {showModal ? (
                    <>
                      <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                      >
                        
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 bg-[#428BCA]">
                              <h3 className="text-2xl font-semibold text-white">
                                Saved Searches
                              </h3>
                              <Img
                      src="images/img_close_36X33.svg"
                      className=" w-5 h-5 mr-50 mt-1 xl:ml-[350px]"
                      onClick={() => setShowModal(false)}
                      alt="close One"
                    />
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                              <div class="border border-[#E7E7E7] p-[200px]">
                                <Column className="items-center">
                                  <Text className="mb-5 text-gray-400">
                                    No searches saved for Bookings
                                  </Text>
                                  <Text className="text-gray-400">
                                    You can save a search from the results view
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

                  </Column>
                </Row>
                
              </Column>
            </Row>
      </Column>
    </>
  );
};

export default ReportBookings;

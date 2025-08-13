import React from "react";
import { Switch, Column, Row, Text, Img, Line} from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";
import Topbtns from "components/Topbutton/index";
import Sidebar from "components/Sidebar/index";
import Search from "components/Searchbtn/index";
import SaveSearch from "components/SaveSearchBtn/index";
import FlagStatus2 from "components/Flag&status2/index";
import Inventory from "components/Inventory/index";
import Bookinglabel from "components/Label/index";
import Customize2 from "components/Customize2/index";

const DailyManifest = () => {
  const [showModal2, setShowModal2] = React.useState(false);
  const navigate = useNavigate();

  function handleNavigate73() {
    navigate("/");
  }
  function handleNavigate74() {
    navigate("/Parkingfree");
  }

  function handleNavigate75() {
    navigate("/Parkingpaid");
  }

  function handleNavigate76() {
    navigate("/PropertySetupBreakfastDetails");
  }
  function handleNavigate77() {
    navigate("/Language");
  }

  return (
    <>
    <Column className="bg-white font-ptsans items-center justify-start 2xl:mb-[100px] mx-[auto] xl:pb-[102px] 2xl:pb-[115px] 3xl:pb-[138px] lg:pb-[81px] w-[100%]">
    <Column className="items-center justify-start w-[100%]">
      <Header className="w-[100%]" />
        <Column className="justify-start w-[100%]">
          <Row className="bg-[#F5F5F5] items-center pt-1 pb-1 2xl:mt-[-13px] w-[100%]">
            <Column className="justify-start">
              <Topbtns/>
            </Column>
                       
          </Row>
          <Row className>
            
          </Row>
            
          <Row>
            <Sidebar/>
            <Row className="p-2 w-[100%]">
              <Column className=" w-[100%]">
                <Row className="items-center w-[100%]">
                  <Row className="items-start w-[100%]">
                    <Text className="text-[#4C8FBD] text-[30px]" > 
                      Daily Manifest
                    </Text>
                  </Row>
                   <Column className="w-[38%] text-white ">
                    <Row className="justify-end">
                      <Customize2/>
                    </Row>
                  </Column>
                </Row>

                <Line className=" bg-gray_700_33 h-[0.5px] mt-4 w-[100%]" />

                <Row className="mt-5">
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

                <Row className="items-center gap-4 mt-2 h-9 w-[100%]">
                  <Column class="flex w-[31.45%]">
                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray_100 border border-r-0 border-gray-300  dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <Img
                        src="images/calendar.png"
                        className="calendar h-4 w-4 mt-0.5 text-white"
                        alt="calendar"
                      />
                    </span>
                    <input type="date" id="booked" class="border text-gray-900 focus:ring-[#ed8709] focus:border-[#ed8709] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    />
                  </Column>
                  <Column class="w-[33%] ">
                    <FlagStatus2/>
                  </Column>
                </Row>

                <Row className="bg-indigo_900 mt-2 w-[65.5%]">
                  <Inventory/>
                </Row>
                <Row class="flex w-[65.5%]">
                  <Bookinglabel/>
                </Row>

                <Row className="bg-[#D9EDF7] items-start pt-3 pb-3 2xl:mt-[30px] w-[90%]">
                  <Row>
                    <Text className="ml-5 mt-2 text-[#3A87AD] text-[20px]">
                      Found 0 bookings for 2022-12-14
                    </Text>
                  </Row>

                  <Row className="items-center 2xl:ml-[760px]">
                    <button className="py-2 px-3 bg-[#6FB3E0] hover:bg-[#4F99C6] ml-2 items-start justify-start font-bold"
                    type="button"
                    onClick={() => setShowModal2(true)}
                    >
                      <Row>
                        <Img
                          src="images/plus.png"
                          className="plus h-4 w-4 mr-2 mt-0.5 text-white"
                          alt="plus"
                        />
                        <Text className="text-white text-[13px] cursor-pointer ">
                          Save this search
                        </Text>
                      </Row>
                    </button>

                    {showModal2 ? (
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
                                Save this search
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
                            <div className="relative p-10 w-[1000px]">
                              <Column>
                                <Row >
                                  <Text className="mr-2">
                                    Name
                                  </Text>
                                  <textarea id="message" 
                                    rows="1" 
                                    class="2xl:ml-[42px] block placeholder-gray-500 p-2.5 w-full resize-none text-sm text-gray-900 bg-white border border-gray-300 focus:ring-[#ed8709] focus:border-[#ed8709] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[60%]" 
                                    placeholder="Enter a name for this saved search" >
                                  </textarea>
                                </Row>
                                <Row className="mt-3" >
                                  <Text className="mr-2 w-[10%]" >
                                    Add For
                                  </Text>
                                  <select
                                    class="2xl:ml-[-10px] block placeholder-gray-500 p-2.5 w-full resize-none text-sm text-gray-900 bg-white border border-gray-300 focus:ring-[#ed8709] focus:border-[#ed8709] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[60%]" 
                                    >
                                      <option selected> Myself</option>
                                      <option value="AFE"> Everyone</option>
                                      <option selected> Site Administrator</option>
                                      <option selected> Administrator</option>
                                      <option selected> Product Manager</option>
                                      <option selected> Product Agent</option>
                                      <option selected> Booking Manager</option>
                                      <option selected> Booking Agent</option>
                                  </select>
                                </Row>
                                <Row className="mt-3 w-[100%]">
                                  <Text className="mr-2">
                                    Pin Search
                                  </Text>
                                  <Switch
                                    value={false}
                                    className="h-1 w-1 2xl:ml-[12px]"
                                  />
                                </Row>
                              </Column>
                            </div>
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 bg-[#EFF3F8]">
                              <button
                                className="text-white bg-[#ABBAC3] hover:bg-[#8B9AA3] font-bold  px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal2(false)}
                              >
                                Cancel
                              </button>
                              <button
                                className="bg-[#428BCA] hover:bg-[#1B6AAA] text-white active:bg-emerald-600 font-bold  text-sm px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal2(false)}
                              >
                                OK
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                  </Row>
                </Row>
                

              </Column>
            </Row>

          </Row>

        </Column>
      </Column>
    </Column>
  </>
);
};

export default DailyManifest;
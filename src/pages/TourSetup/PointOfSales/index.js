import { Column, Row, Text, Input, Line, Button, Switch} from "components";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaThumbtack, FaTimes, FaSuitcase, FaCheck } from "react-icons/fa";
import { AiFillTags, AiOutlineUserAdd } from "react-icons/ai";
import { mdiMagnify, mdiFolderOpen } from "@mdi/js";
import Icon from "@mdi/react";
import { VscFolderOpened } from "react-icons/vsc";
import { GiTicket } from "react-icons/gi";
import { BiTime, BiSearchAlt2 } from "react-icons/bi";
import DropdownRender from "components/DropdownPoS/index";
import React from 'react';
import { GoPlus } from "react-icons/go";
import {useState} from 'react';
import Topbtns from "components/Topbutton/index";

 
const PointOfSales = ()=> {
 /* const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };*/

  const navigate = useNavigate();

  /*function handleNavigate20() {
    navigate("/photos");
  }*/

  //for popup
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);
  const [showModal4, setShowModal4] = React.useState(false);

  //for switch 
  const [enabled, setEnabled] = useState(false);

  //for dropdown list
  const [isVisible, setIsVisible] = useState("");
  const changeHandler = (e) => {
  const getshow= e.target.value;
  setIsVisible(getshow);
}


  //button cancel navigate to ticket pools
  function handleNavigate1() {
    navigate("/pointofsales");
  }




  return (
    <>
      <Header className="w-[100%]" />
      <Column className="bg-white w-[100%]">
        <Row className="bg-gray_100 h-fit justify-start items-start w-[100%]">
          <Topbtns/>
         
        </Row>
        <Row className="w-[100%] mt-[8px]">
          <Sidebar/>
          <Column className="bg-white h-auto w-[100%]">
                <Row>
                  <Column className="w-[65%] text-light_blue_600 text-[25px] font-regular">
                    Point of Sale
                  </Column>
                  <Column className="w-[38%] text-white ">
                    <Row className="justify-end">
                    <DropdownRender/> 
                          <Button class=" bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-8 w-[fit] mx-2 px-2"
                           type="submit"
                           onClick={() => setShowModal1(true)}>
                              <Row>
                              <GiTicket className="h-5 w-5 text-white" />
                                <Text
                                    className="pl-2 text-white cursor-pointer"
                                    variant="body4"
                                  >
                                    Latest Bookings
                                </Text>
                                </Row>
                          </Button>

                          {showModal1 ? (
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
                                  Latest Bookings
                                  </h3>
                                  <FaTimes className="w-5 h-5 mr-50 mt-1 xl:ml-[350px] common-pointer"
                                    onClick={() => setShowModal1(false)} />


                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                  <div class="border border-[#E7E7E7] p-[200px]">
                                    <Column className="items-center">
                                      <Text className="mb-5 text-gray-400">
                                       You have no bookings
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


                    </Row>
                  </Column>
                </Row>
                <Line className="bg-gray_700_33 my-[10px] h-[1.5px] w-[100%] " />
                <div class="ml-3">
                        <Row>
                        <Button class="pl-2 justify-center h-8 w-[10%]  mt-5 border focus:bg-white bg-gray_100 hover:bg-gray_100">
                                <Row>
                                  <Text
                                      className="pl-6 text-[#6FB3E0] cursor-pointer"
                                      variant="body4"
                                    >
                                      Order
                                  </Text>
                                  </Row>
                            </Button>

                            <Button class="items-center h-8 w-[10%]  mt-5 border focus:bg-white bg-gray_100 hover:bg-gray_100">
                                <Row>
                                <GoPlus className="h-5 w-5 text-[#87B87F] bold pl-2 " />
                                  <Text
                                      className="pl-1 text-[#6FB3E0] cursor-pointer"
                                      variant="body4"
                                    >
                                      New Order
                                  </Text>
                                  </Row>
                            </Button>
                      </Row>
                <div className="mr-3">
                    <Column className="bg-white w-[100%] border-[1.5px] border-gray_700_33  ">
                        <Row>
                          <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-8 w-[15%] mx-2 px-2 mt-5"
                          onClick={() => setShowModal2(true)}>
                                <Row>
                                <AiOutlineUserAdd className="h-5 w-5 text-white" />
                                  <Text
                                      className="pl-1 text-white cursor-pointer"
                                      variant="body4"
                                    >
                                      Attach Contact
                                  </Text>
                                  </Row>
                            </Button>

                            {showModal2 ? (
                    <>
                      <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                      >
                        
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 bg-[#428BCA]">
                              <h3 className="text-xl text-white">
                                Attach Contact
                              </h3>
                              <FaTimes className="h-5 w-5 text-white common-pointer" 
                              onClick={() => setShowModal2(false)}/>
                            </div>
                            
                            {/*body*/}
                            <div className="relative p-4 flex w-[100%]">
                                <Column className="items-right">
                                  <Row>
                                       <div class="container flex mx-auto  ">
                                                <div class="flex border-2 w-[100%] h-9">
                                                    <button class="text-[14px] flex items-center justify-center px-4 border-r bg-gray_100 ">
                                                   @
                                                    </button>
                                                    <input type="text" class="px-4 w-[100%] text-[12px] w-[100%]" placeholder="Search for a content to attach"/>
                                                </div>
                                            </div>
                                    </Row>
                                    
                                    <Row >
                                      <Text className="text-center mt-2 px-[200px]">Or</Text>
                                    </Row>
                                    
                                    <Button class="bg-[#87B87F] hover:bg-[#629B58] items-center h-8 w-[100%] px-2 mt-2 px-[130px] ">
                                      <Row>
                                      <GoPlus className="pr-2 h-5 w-5 text-white" />
                                          <Text
                                              className="text-white cursor-pointer pl-2"
                                              variant="body4"
                                          >
                                              Create a new Contact
                                          </Text>
                                      </Row>
                                    </Button>
                                </Column>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                            
                            <Text className="mt-6 text-end">
                              RM0.00
                            </Text>
                            <Column className="w-[100%]">
                              <Row className="justify-end flex">
                                <Button type="button" class=" py-6 item-end w-[30%] h-[fit] text-white bg-gray_400 focus:outline-none disabled:opacity-100 justify-end" disabled
                                  >Complete Order
                                </Button>
                              </Row>
                            </Column>
                               

                        </Row>
                    </Column>
                    </div>
                   
                  
                    
                      <Row className="mt-6">
                        <div className="bg-[#6FB3E0] ">
                        <Input type="date" className="py-11 pb-12 px-8 w-[100%] bg-[#6FB3E0] hover:bg-[#4F99C6] text-[15px] text-white">
                          Dec 2018

                        </Input>
                        </div>

                        <Column className="w-[60%]">
                          <div className="space-y-1">
                          <Row className="ml-2 mr-4">
                            <div class="container flex mx-auto  ">
                                  <div class="flex border-[1.5px] border-gray_700_33 w-[100%] h-9">
                                      <button class="flex items-center border-[#ccc] justify-center px-4 border-r bg-[#eee]">
                                      <BiSearchAlt2/>
                                      </button>
                                      <input type="text" class="px-4 w-[100%] text-[12px]" placeholder="Search Items, Options, Location..."/>
                                  </div>
                              </div>
                          </Row>
                          <Row className="ml-2 mr-4">
                            <div class="container flex mx-auto  ">
                                  <div class="flex border-[1.5px] border-gray_700_33 w-[100%] h-9">
                                      <button class="flex items-center border-gray-400 justify-center px-4 border-r bg-gray_100">
                                      <FaSuitcase/>
                                      </button>
                                      <input type="text" class="px-4 w-[100%] text-[12px]" placeholder="Inventory..."/>
                                  </div>
                              </div>
                          </Row>
                          <Row className="ml-2 mr-4">
                            <div class="container flex mx-auto  ">
                                  <div class="flex border-[1.5px] border-gray_700_33 w-[100%] h-9">
                                      <button class="flex border-gray-400 items-center justify-center px-4 border-r bg-gray_100">
                                      <BiTime/>
                                      </button>
                                      <input type="text" class="px-4 w-[100%] text-[12px]" placeholder="Min Availability..."/>
                                  </div>
                              </div>
                          </Row>
                          </div>
                        </Column>
                    
                        
                      </Row>
                      
                      <Row className="mt-2 space-x-3">
                      <Row className="w-[31%] justify-end">
                            <Button class="bg-[#428bca] hover:bg-[#0671CD] items-center h-8 w-[fit] px-2 mr-4">
                              <Row>
                                <Text
                                    className="text-white cursor-pointer"
                                    variant="body4"
                                  >
                                    Fetch Result
                                </Text>
                                <Icon
                                  path={mdiMagnify}
                                  title="Search"
                                  className="w-2 h-2 ml-2 text-bold items-center text-white"
                                  size={0.8}
                                  horizontal-180
                                />
                                </Row>
                            </Button>
                            </Row>
                            <Row className="w-[45%] justify-end ">
                                <Button class="bg-[#ffb752] hover:bg-[#D49844] items-center h-8 px-2 mr-2"
                                onClick={() => setShowModal3(true)}>
                                  <Row>
                                    <VscFolderOpened className="h-5 w-5 text-white" />
                                    <Text
                                        className="px-1 text-white cursor-pointer"
                                        variant="body4"
                                      >
                                        Saved Searches
                                    </Text>
                                    </Row>
                                </Button>
                            </Row>
                            {showModal3 ? (
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
                                  <FaTimes className="w-5 h-5 mr-50 mt-1 xl:ml-[350px] common-pointer text-white"
                                    onClick={() => setShowModal3(false)} />


                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                  <div class="border border-[#E7E7E7] p-[200px]">
                                    <Column className="items-center">
                                      <Text className="mb-5 text-gray-400">
                                        No searches saved for Point of Sale
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
                      </Row>

                      <Row className="mt-6 bg-[#F5F5F5] h-fit justify-start items-start w-[100%] mr-6 mb-10">
                        <Text className="py-2 px-2 w-[30%] pt-6">
                        Found 0 results across 1 day
                        </Text>

                        <Row className="justify-end w-[100%] pb-5">
                        <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-8 w-[20%] mx-2 px-2 mt-5"
                        onClick={() => setShowModal4(true)}>
                                <Row>
                                <AiOutlineUserAdd className="h-5 w-5 text-white" />
                                  <Text
                                      className="pl-1 text-white cursor-pointer"
                                      variant="body4"
                                    >
                                      Save This Search
                                  </Text>
                                  </Row>
                            </Button>

                            {showModal4 ? (
                            <>
                            <div
                                className="justify-center items-center mx-[400px] my-[150px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                              >
                                {/*Header*/}
                                <Column classname="w-[100%]">
                                  <Row className= "bg-[#428BCA] w-[100%] items-start justify-between">
                                    <Text className="pl-3 py-5 text-xl text-white">
                                      Save This Search
                                    </Text>
                                    <FaTimes className=" mr-4 mt-6 h-5 w-5 text-white common-pointer" 
                                      onClick={() => setShowModal4(false)}/>
                                    </Row>
                                </Column>
              

                         {/*Body*/}
                         
                            <Column className= "bg-white w-[100%]">
                            <Row className="mt-2">
                                  <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[15%] text-right ">
                                    Name
                                  </Text>
                                  <input
                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                    type="text"
                                    size="smSrc"
                                    required
                                    placeholder="Enter a name for this saved search"
                                  ></input>
                                </Row>

                                <Row className="mt-2">
                                  <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[15%] text-right ">
                                    Add for
                                  </Text>
                                  <select
                                    class="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2" 
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

                                <Row className="mt-2 mb-5">
                                  <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[15%] text-right ">
                                    Pin Search
                                  </Text>

                                  <Switch
                                    value={false}
                                    className="mx-2  text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 "
                                  />

                                </Row>

                                
                                  <Row className="flex items-center justify-end p-3 border-t border-solid border-slate-200 bg-[#EFF3F8]"> 
                                  
                                    <button
                                      className="text-white bg-[#ABBAC3] hover:bg-[#8B9AA3] font-bold  px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      type="button"
                                      onClick={() => setShowModal4(false)}
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      className="bg-[#428BCA] hover:bg-[#1B6AAA] text-white active:bg-emerald-600 font-bold  text-sm px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      type="button"
                                      onClick={() => setShowModal4(false)}
                                    >
                                      OK
                                    </button>
                                  
                                </Row>
                            </Column>
                         
                            </div>

                            <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
                              
                    </>
                  ) : null}
                            </Row>

                      </Row>

                    
              

                
		
				
                      </div>
              </Column>
            </Row>
      </Column>
      
    </>
  );
};

export default PointOfSales;


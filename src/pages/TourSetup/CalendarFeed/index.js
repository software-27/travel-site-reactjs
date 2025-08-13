import { Column, Row, Text, Input, Line, Button,Img} from "components";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaThumbtack, FaCheck, FaTimes } from "react-icons/fa";
import {useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import React from 'react';
import { GoPlus } from "react-icons/go";
import Topbtns from "components/Topbutton/index";
 
const CalendarFeed = ()=> {
 /* const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };*/

  const navigate = useNavigate();

  /*function handleNavigate20() {
    navigate("/photos");
  }*/

 //for calendar
 const [date, setDate] = useState(new Date())

//for popup
const [showModal1, setShowModal1] = React.useState(false);



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
                    Calendar  Feeds
                  </Column>
                  <Column className="w-[38%] text-white ">
                    <Row className="justify-end">
                    
                          

                          <Button class=" bg-[#87B87F] hover:bg-[#629B58] items-center h-8 w-[fit] mx-2 px-2"
                          onClick={() => setShowModal1(true)}>
                              <Row>
                              <GoPlus className=" pr-2 h-5 w-5 text-white" />
                                <Text
                                    className="text-white cursor-pointer"
                                    variant="body4"
                                  >
                                    Create Feed
                                </Text>
                                </Row>
                          </Button>

                          {showModal1 ? (
                            <>
                            <div
                                className="justify-center items-center mx-[400px] my-[150px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                              >
                                {/*Header*/}
                                <Column classname="w-[100%]">
                                  <Row className= "bg-[#428BCA] w-[100%] items-start justify-between">
                                    <Text className="pl-3 py-5 text-xl">
                                    Create a New Feed
                                    </Text>
                                    <FaTimes className=" mr-4 mt-6 h-5 w-5 text-white common-pointer" 
                                      onClick={() => setShowModal1(false)}/>
                                    </Row>
                                </Column>
              

                         {/*Body*/}
                         
                            <Column className= "border border-[#E7E7E7] bg-white w-[100%] mr-3">
                            <Row className="space-x-3 mt-5 mr-3">
                                <Text className="text-[#667E99] w-[17.5%] text-right">
                                    Name
                                </Text>
                                <input
                                    className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                                    type="text"
                                    size="smSrc"
                                    required
                                ></input>
                            </Row>

                            <Row className="mt-5">
                                <Text className="text-[#667E99] text-left ml-6">
                                    Inventory
                                </Text>
                                <Text className="text-[#667E99] text-left ml-4 ">
                                     all | none
                                </Text>
                                
                            </Row>
                            

                                <div className="mx-3">
                                  <Row className="mt-6 bg-gray_100 h-fit justify-end w-[100%] mr-6 mb-4 pb-5 mr-3"> 
                                          <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-10 w-[25%] mx-2 px-2 mt-5 ml-4 ">
                                            <Row>
                                                <FaCheck className="h-5 w-5 text-white" />
                                                <Text
                                                    className="text-white cursor-pointer pl-2"
                                                    variant="body4"
                                                >
                                                    Create Feed
                                                </Text>
                                            </Row>
                                          </Button>
                                  </Row>
                                </div>
                            </Column>
                         
                            </div>

                            <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
                           </>
                          ):null}
                         
                    </Row>
                  </Column>
                </Row>
                <Line className="bg-gray_700_33 my-[10px] h-[1.5px] w-[100%]" />
                <Row>
                    <Text class=" m-3 text-sm">
                        Calendar Feeds let you export your bookings to other calendar applications.
                    </Text>
                </Row>


               
              

                    
                
                
              </Column>
            </Row>
      </Column>
    </>
  );
};

export default CalendarFeed;
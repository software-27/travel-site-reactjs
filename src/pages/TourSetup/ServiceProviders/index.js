import { Column, Row, Text, Input, Line, Button,Img} from "components";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaThumbtack, FaCubes, FaCheck, FaTimes } from "react-icons/fa";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import { AiFillTags} from "react-icons/ai";
import { VscFolderOpened } from "react-icons/vsc";
import { GoPlus } from "react-icons/go";
import { MdConnectWithoutContact } from "react-icons/md";
import React from 'react';
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar";
import DropdownSprovider from"components/DropdownSprovider";
import Topbtns from "components/Topbutton/index";


 
const ServiceProviders = ()=> {
 /* const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };*/

  const navigate = useNavigate();

    //navigate to createserviceprovider
  function handleNavigate1() {
    navigate("/t14");
  }
   //for popup
   const [showModal1, setShowModal1] = React.useState(false);
   const [showModal2, setShowModal2] = React.useState(false);
   const [showModal3, setShowModal3] = React.useState(false);



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
                  <Column className="w-[65%] text-light_blue_600 text-[25px] m-1 font-regular">
                    Service Providers
                  </Column>
                  <Column className="w-[45%] text-white ">
                    <Row className="justify-end">
                    <DropdownSprovider/>
                          
                          <Button class=" bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-8 w-[fit] mx-2 px-2 ring-4 ring-[#6FB3E0] ring-inset"
                                  onClick={() => setShowModal2(true)}>
                              <Row>
                              <MdConnectWithoutContact className="h-5 w-5 text-white" />
                                <Text
                                    className="pl-1 text-white cursor-pointer"
                                    variant="body4"
                                  >
                                    Connect Reseller
                                </Text>
                                </Row>
                          </Button>

                          {showModal2 ? (
                            <>
                            <div
                                className="justify-center items-center mx-[300px] my-[150px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                              >
                                {/*Header*/}
                                <Column classname="w-[100%]">
                                  <Row className= "bg-[#428BCA] w-[100%] items-start justify-between">
                                    <Text className="pl-3 py-5 text-xl">
                                      Connect Resellers
                                    </Text>
                                    <FaTimes className=" mr-4 mt-6 h-5 w-5 text-white common-pointer" 
                                      onClick={() => setShowModal2(false)}/>
                                    </Row>
                                </Column>
              

                         {/*Body*/}
                         
                            <Column className= "bg-white w-[100%]">
                                <Text className="pl-3 py-5 text-[12px] text-black">
                                  Attach a Rezgo account that can resell your products. 
                                  You will be able to attach a price sheet to allow access to chosen products at your provided rates.
                                </Text>
                                <Text className="pl-3 text-[12px] text-[#428BCA]">
                                  A service provider and reseller desk will be created automatically.
                                </Text>

                                <Row className="mt-2">
                                  <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                    Reseller Code
                                  </Text>
                                  <input
                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                    type="text"
                                    size="smSrc"
                                    required
                                    placeholder="Located on the Setting Page"
                                  ></input>
                                </Row>

                                <div className="mx-3">
                                  <Row className="mt-6 bg-gray_100 h-fit justify-end w-[100%] mr-6 mb-4 pb-5 mr-3"> 
                                          <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-10 w-[20%] mx-2 px-2 mt-5 ml-4 ">
                                            <Row>
                                                <FaCheck className="h-5 w-5 text-white" />
                                                <Text
                                                    className="text-white cursor-pointer pl-2"
                                                    variant="body4"
                                                >
                                                    Add Reseller
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




                          <Button class=" bg-[#87B87F] hover:bg-[#629B58] items-center h-8 w-[fit] mx-2 px-2"
                          onClick={handleNavigate1} >
                              <Row>
                              <GoPlus className="pr-2 h-5 w-5 text-white" />
                                <Text
                                    className="text-white cursor-pointer"
                                    variant="body4"
                                  >
                                    Create Providers
                                </Text>
                                </Row>
                          </Button>
                          
                    </Row>
                  </Column>
                </Row>
                <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
                <Row>
                  <Column className="w-[100%] text-light_blue_600 text-[20px] m-2 font-regular">
                    <Row className="space-x-3">
                      <input
                        className="bg-gray-50 border border-gray-300 rounded-sm text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required
                        placeholder="Search tprovider names,email, phones, notes..."
                      ></input>
                      <Button class="bg-[#428bca] hover:bg-[#0671CD] items-center h-8 w-[fit] mx-2 px-2">
                              <Row>
                                <Text
                                    className="text-white cursor-pointer"
                                    variant="body4"
                                  >
                                    Search
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
                  </Column>

                  <Column className="w-[38%] justify-end items-end text-white m-2">
                    <Row>
                    <Button class="bg-[#ffb752] hover:bg-[#D49844] items-center h-8 px-2"
                                onClick={() => setShowModal1(true)}>
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
                              Saved Searches
                            </h3>
                            <FaTimes className="w-5 h-5 mr-50 mt-1 xl:ml-[350px] common-pointer"
                              onClick={() => setShowModal1(false)} />


                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <div class="border border-[#E7E7E7] p-[200px]">
                              <Column className="items-center">
                                <Text className="mb-5 text-gray-400">
                                  No searches saved for Service Providers
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


                <Column className="w-[63%] text-[20px] font-regular">
                <Row className="ml-2 mt-1 mr-2 space-x-3">
                
                          <div class="container flex mx-auto  ">
                                <div class="flex border-2 w-[100%] h-9">
                                    <button class="flex items-center justify-center px-4 border-r">
                                    <FaCubes/>
                                    </button>
                                    <input type="text" class="px-4 w-[100%] text-[12px]" placeholder="Provider Type..."/>
                                </div>
                            </div>
                            <div class="container flex mx-auto  ">
                                <div class="flex border-2 w-[100%] h-9">
                                    <button class="flex items-center justify-center px-4 border-r">
                                    <AiFillTags/>
                                    </button>
                                    <input type="text" class="px-4 w-[100%] text-[12px]" placeholder="Provider Tags..."/>
                                </div>
                            </div>
                   
                    </Row>
                    </Column>
                
                <Column className="w-[100%] text-black">
                  <Row>
                      <Column className="justify-center mt-10 items-center w-[45%]">
                          <Row className="justify-center items-center text-[25px] my-2">
                            You don't have any service providers
                          </Row>
                          <Row className="items-center text-center text-[12px] my-2">
                            Add service providers whose inventory is sold through your Rezgo account or resellers who sell your inventory. 
                            You can track and reconcile bookings of inventory you assign to them.
                          </Row>
                          <Row className="justify-center items-center my-5">
                            <Button class="bg-[#87B87F] hover:bg-[#629B58] items-center h-8 w-[fit] px-2"
                            onClick={handleNavigate1} >
                              <Row>
                                <GoPlus className="pr-2 h-5 w-5 text-white" />
                                <Text
                                    className="text-white cursor-pointer"
                                    variant="body4"
                                  >
                                    Create Service Providers
                                </Text>
                                </Row>
                          </Button>
                          </Row>
                      </Column>
                      <Column className="justify-center w-[70%] ">
                        <Img
                          src="images/providers.svg"
                          className="h-[60%] w-[60%]"
                        />

                      </Column>
                  </Row>
                </Column>
              </Column>
            </Row>
      </Column>
    </>
  );
};

export default ServiceProviders;
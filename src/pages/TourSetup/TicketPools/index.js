import { Column, Row, Text, Input, Line, Button, Img } from "components";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaThumbtack, FaTimes } from "react-icons/fa";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import { VscFolderOpened } from "react-icons/vsc";
import { GoPlus } from "react-icons/go";
import React from 'react';
import DropdownTPools from "components/DropdownTPools";
import Topbtns from "components/Topbutton/index";


const TicketPools = () => {
  /* const handleshow = (e) => {
     const getshow = e.target.value;
     setShowhide(getshow);
   };*/

  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/t18");
  }

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
          <Sidebar />
          <Column className="bg-white h-auto w-[100%]">
            <Row>
              <Column className="w-[65%] text-light_blue_600 text-[25px] m-1 font-regular">
                Ticket Pools
              </Column>
              <Column className="w-[38%] text-white ">
                <Row className="justify-end">
                  <DropdownTPools />
                  <Button class=" bg-[#87B87F] hover:bg-[#629B58] items-center h-8 w-[fit] mx-2 px-2"
                    onClick={handleNavigate1}>
                    <Row>
                      <GoPlus className="pr-2 h-5 w-5 text-white" />
                      <Text
                        className="text-white cursor-pointer"
                        variant="body4"
                      >
                        Create Ticket Pools
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
                    placeholder="Search ticket pool name, description"
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
                                  No searches saved for Ticket Pools
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
            <Row>

            </Row>
            <Column className="w-[100%] text-black">
              <Row>
                <Column className="justify-center mt-10 items-center w-[35%]">
                  <Row className="justify-center items-center text-[25px] my-2">
                    You don't have any ticket pools
                  </Row>
                  <Row className="items-center text-center text-[12px] my-2">
                    Create ticket pools if you have collections of ticket IDs
                    that need to be assigned to bookings of specific inventory options.
                  </Row>
                  <Row className="justify-center items-center my-5">
                    <Button class="bg-[#87B87F] hover:bg-[#629B58] items-center h-8 w-[fit] px-2"
                      onClick={handleNavigate1}>
                      <Row>
                        <GoPlus className="pr-2 h-5 w-5 text-white" />
                        <Text
                          className="text-white cursor-pointer"
                          variant="body4"
                        >
                          Create Ticket Pool
                        </Text>
                      </Row>
                    </Button>
                  </Row>
                </Column>
                <Column className="justify-center w-[70%] ">
                  <Img
                    src="images/pools.svg"
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

export default TicketPools;

import React from "react";
import { Column, Row, Text,Line, Button,Img,} from "components";
import Header from "components/Header/Header/index";
import Sidebar from "components/Sidebar/index";
import Inventory from "components/Inventory/index";
import DropdownRender from "components/Dropdown";
import DropdownGiftCard from "components/DropdownGiftCard"
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaThumbtack } from "react-icons/fa";
import Icon from '@mdi/react'
import { mdiPlusThick, mdiMagnify, mdiFolderOpen } from '@mdi/js';
import {useState} from 'react';
import Topbtns from "components/Topbutton/index";

 
const GiftCard = ()=> {
 /* const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };*/

  const navigate = useNavigate();

  //button cancel navigate to ticket pools
  function handleNavigate1() {
    navigate("/t32");
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
                <Row className="mb-6">
                  <Column className="w-[65%] text-light_blue_600 text-[25px] m-1 font-light">
                    Gift Cards
                  </Column>
                  <Column className="w-[38%] text-white">
                    <Row className="justify-end gap-2">
                    <DropdownGiftCard />
                      <Button onClick={handleNavigate1} className="items-center h-fit mr-2 py-2.5 px-3 font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                      size="xs"
                      type="submit">
                      <Row className="gap-2 items-center">
                        <Icon path={mdiPlusThick}
                          title="Bag"
                          size={1.0}
                          color="white"
                        />
                        <Text className="text-lg">Create Gift Card</Text>
                      </Row>
                      </Button>
                      
                          
                    </Row>
                  </Column>
                </Row>
                <Line className="bg-gray_700_33 mb-10 h-[1.5px] w-[100%]" />
                <Row>
                  <Column className="w-[70%]  font-regular">
                  <div class="mb-3 pt-0 space-y-2">
                      <input
                        type="text"
                        placeholder="Search contact names, email, phone, notes..."
                        class="px-3 py-2 placeholder-[#A3A89F]  bg-white text-lg border border-[#B7BBB4] focus:border-[#e2711d] w-[100%]"
                       />
                       <Inventory className="" />
                    </div>
                  </Column>
                  <Column className="w-[10%] justify-start items-center">
                    <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset"
                       size="xs"
                      type="submit">
                      <Row className="gap-2 items-center">
                        <Text className="text-lg">Search</Text>
                        <Icon path={mdiMagnify}
                          title="Bag"
                          size={1.0}
                          color="white"
                        />
                      </Row>
                    </Button>
                  </Column>
                  <Column className="w-[20%] items-end">
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
                                    No searches saved for Gift Cards
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

                <Row className="w-full">
                <Column className="w-[100%] pl-10 pr-10 pt-20 pb-20  text-black">
              <Row>
                <Column className="justify-center items-center m-10 w-[45%]">
                  <Row className="justify-center items-center text-[30px] my-2">
                  You don't have any gift cards
                  </Row>
                  <Row className="items-center text-center text-[14px] my-2">
                  Create gift cards for your customers for pre-paid activities or
                  general use. Gift cards can be used for payments on your
                  booking website or through the Point of Sale.
                  </Row>
                  <Row className="justify-center items-center my-5">
                  <Button onClick={handleNavigate1} className="items-center h-fit py-2.5 px-3 text-sm font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                      size="xs"
                      type="submit"
                      >
                      <Row className="gap-2 items-center">
                        <Icon path={mdiPlusThick}
                          title="Bag"
                          size={1.0}
                          color="white"
                        />
                        <Text className="text-lg">Create Gift Card</Text>
                      </Row>
                    </Button>
                  </Row>
                </Column>
                <Column className="justify-center w-[70%]">
                  <Img src="images/cards.svg" className="h-[70%] w-[70%]" />
                </Column>
              </Row>
            </Column>
                </Row>
                
              </Column>
            </Row>
      </Column>
    </>
  );
};

export default GiftCard;

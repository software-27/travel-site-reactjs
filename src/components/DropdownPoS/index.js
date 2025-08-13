import React from "react";
import { Row, Text, Column, Button} from "components";
import { createPopper } from "@popperjs/core";
import Icon from '@mdi/react'
import { mdiMenuDown, mdiReply, mdiArrowULeftTop, } from '@mdi/js';
import { FaBan, FaTimes, FaCheck } from "react-icons/fa";



const DropdownPoS = ({ color }) => {
  // dropdown props (
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-[#A6A2A2]")
    : (bgColor = "bg-" + color + "-500");
// ) dropdown for manage

//popup
const [showModal1, setShowModal1] = React.useState(false);
    
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "items-center h-8 w-15 px-3 pt-1 font-medium text-sm text-white hover:bg-[#837A75] ring-4 ring-[#A6A2A2] ring-inset ease-linear transition-all duration-150 " +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            ><Row>
              {color === "white" ? "Manage" : color + " Dropdown"}
              <Icon  class="pb-1" path={mdiMenuDown}
                            title="Bag"
                            size={1.0}
                            color="white"
                          />
            </Row>
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
             
                    
              <Button
                className={
                  "text-sm common-pointer px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-[#837A75] hover:text-white " +
                  (color === "white" ? " text-black" : "text-white")
                }
                //onClick={e => e.preventDefault() }
                //onClick={() => setShowModal2(true)}
                onClick={() => setShowModal1(true)}
              >
                <Row classname="items-center">
                <FaBan/>
                <Text className="pl-2">Clear All Orders </Text>
                
                </Row>
              </Button>
              
            </div>

              {showModal1 ? (
                <>
                <Row>
                <div
                    className="justify-center items-center mx-[350px] my-[90px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                  >
                    {/*Header*/}
                    <Column classname="w-[100%]  shadow-md">
                      <Row className= "bg-white w-[100%] items-start justify-between shadow-md shadow-[#e4e9ee]">
                        <Text className="pl-3  py-3 text-sm text-black">
                        Are you sure you want to close all open orders?
                        </Text>
                        <FaTimes className=" mr-4 mt-6 h-5 w-5 text-white common-pointer" 
                          onClick={() => setShowModal1(false)}/>
                        </Row>
                    </Column>

             {/*Body*/}
                <Column className= "py-2 items-center bg-gray_100 w-[100%]">
                   
                                  <Row className="bg-gray_100 justify-end w-[100%] mr-6 mr-3 ml-3"> 
                                          <Button class=" items-center h-8 w-[10%] mx-2 px-2 ml-4 hover:bg-[#837A75] ring-4 ring-[#A6A2A2] bg-[#A6A2A2] my-2"
                                          onClick={() => setShowModal1(false)}>
                                            <Row>
                                                <Text
                                                    className="text-white cursor-pointer"
                                                    variant="body4"
                                                >
                                                    Cancel
                                                </Text>
                                            </Row>
                                          </Button>

                                          <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] ring-4 ring-[#6FB3E0] items-center h-8 w-[8%] mx-2 px-2 ml-4 my-2 "
                                          onClick={() => setShowModal1(false)}>
                                            <Row>
                                               
                                                <Text
                                                    className="text-white cursor-pointer pl-2"
                                                    variant="body4"
                                                >
                                                    OK
                                                </Text>
                                            </Row>
                                          </Button>
                                  </Row>
                </Column>
                </div>
                </Row>
                

                <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
               </>
              ):null}
              
              
             
            </div>
          </div>
        </div>
    </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <DropdownPoS color="white" />
    </>
  );
}


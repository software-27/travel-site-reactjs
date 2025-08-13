import React from "react";
import { Row, Text, Button, Line} from "components";
import { createPopper } from "@popperjs/core";
import Icon from '@mdi/react'
import { mdiDotsVertical, mdiGavel, mdiBagChecked, mdiTicketConfirmation } from '@mdi/js';
import { FaBan } from "react-icons/fa";



const DropdownOption = ({ color }) => {
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
    ? (bgColor = "bg-")
    : (bgColor = "bg-" + color + "-500");
// ) dropdown for manage

const [showModal2, setShowModal2] = React.useState(false);
    
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "items-center ease-linear transition-all duration-150 " +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            ><Row className=" rounded-full bg-white hover:bg-[#A0A0A0] w-6 h-6 cursor-pointer ">
              {color === "white" ? "" : color + " Dropdown"}
              <Icon path={mdiDotsVertical}
                            title="Bag"
                            size={1.0}
                            color="#393939"
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
                  "text-sm common-pointer h-fit py-2.5 px-3 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-[#837A75] hover:text-white " +
                  (color === "white" ? " text-black" : "text-white")
                }
                size="xs"
                type="submit"
              >
                <Row classname="items-center">
                <Icon path={mdiGavel}
                                                title="Bag"
                                                size={1.0}
                                                color="#393939"
                                            />
                <Text className="pl-2">Find Rules for Option </Text>
                
                </Row>
              </Button>

              <Button
                className={
                  "text-sm common-pointer h-fit py-2.5 px-3 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-[#837A75] hover:text-white " +
                  (color === "white" ? " text-black" : "text-white")
                }
                size="xs"
                type="submit"
              >
                <Row classname="items-center">
                <Icon path={mdiTicketConfirmation}
                                                title="Bag"
                                                size={1.0}
                                                color="#393939"
                                            />
                <Text className="pl-2">Find Bookings for Option</Text>
                
                </Row>
              </Button>
              {/* <Line className="bg-gray_700_33 mb-[10px] h-[0.2px] w-[100%]" /> */}

              <Button
                className={
                  "text-sm common-pointer h-fit py-2.5 px-3 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-[#837A75] hover:text-white " +
                  (color === "white" ? " text-black" : "text-white")
                }
                size="xs"
                type="submit"
              >
                <Row classname="items-center">
                <Icon path={mdiBagChecked}
                                                title="Bag"
                                                size={1.0}
                                                color="#393939"
                                            />
                <Text className="pl-2">Create Booking</Text>
                
                </Row>
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <DropdownOption color="white" />
    </>
  );
}
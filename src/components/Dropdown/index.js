import React from "react";
import { Row, Text, Button} from "components";
import { createPopper } from "@popperjs/core";
import Icon from '@mdi/react'
import { mdiMenuDown } from '@mdi/js';
import { FaBan } from "react-icons/fa";



const Dropdown = ({ color }) => {
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

const [showModal2, setShowModal2] = React.useState(false);
    
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
            ><Row className="items-center">
              {color === "white" ? "Manage" : color + " Dropdown"}
              <Icon path={mdiMenuDown}
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
              >
                <Row classname="items-center">
                <FaBan/>
                <Text className="pl-2">Clear All Orders </Text>
                
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
      <Dropdown color="white" />
    </>
  );
}
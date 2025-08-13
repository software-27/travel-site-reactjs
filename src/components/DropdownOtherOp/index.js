import React from "react";
import { Row, Text, Button} from "components";
import { createPopper } from "@popperjs/core";
import { useNavigate } from "react-router-dom";
import Icon from '@mdi/react'
import { mdiMenuDown, mdiPlusCircle, mdiChevronRight } from '@mdi/js';
import { FaBan } from "react-icons/fa";



const DropdownOtherOp = ({ color }) => {
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

const navigate = useNavigate();
    //button navigate 
    function handleNavigate31() {
      navigate("/t23");
  }
    
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "mt-3 items-center h-fit py-2.0 w-[100%] px-3 text-sm font-medium text-white bg-[#4C8FBD] hover:bg-[#006BB8] ring-4 ring-[#4C8FBD] ring-inset ease-linear transition-all duration-150 " +
                bgColor
              }
              size="xs"
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            ><Row className="items-center gap-2">
              <Text className="text-[12px] cursor-pointer">Other Options</Text>
              <Icon path={mdiMenuDown}
                            title="Bag"
                            size={1.5}
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
                  "text-sm common-pointer h-fit py-2.5 px-3 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-[#837A75] hover:text-white " +
                  (color === "white" ? " text-black" : "text-white")
                }
                size="xs"
                type="submit"
                onClick={handleNavigate31}
              >
                <Row className="items-center">
                <Icon path={mdiPlusCircle}
                                                title="Bag"
                                                size={1.0}
                                                color="#393939"
                                            />
                <Text className="pl-2">Create Option</Text>
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
                <Row className="items-center">
                <span className="rounded-full w-4 h-4 bg-[#87B87F]"></span>
                <Text className="pl-2">Option 1 - 3D1N (2A)</Text>
                
                </Row>
              </Button>

              <Button
                className={
                  "text-sm common-pointer h-fit py-2.5 px-3 font-normal cursor-not-allowed block w-full whitespace-nowrap bg-transparent hover:bg-[#837A75] hover:text-white " +
                  (color === "white" ? " text-black" : "text-white")
                }
                size="xs"
                type="submit"
              >
                <Row className="items-center">
                <Icon path={mdiChevronRight}
                                                title="Bag"
                                                size={1.0}
                                                color="#a0a0a0"
                                            />
                <Text className="text-[#a0a0a0]">Option 2 - 3D1N (2A1C)</Text>
                
                </Row>
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender1() {
  return (
    <>
      <DropdownOtherOp color="white" />
    </>
  );
}
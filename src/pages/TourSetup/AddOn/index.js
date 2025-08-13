import React, { useState } from "react";
import { Column, Row, Text, Input, Line, Button, Img } from "components";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/index";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaThumbtack } from "react-icons/fa";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import Topbtns from "components/Topbutton/index";
import Search from "components/Searchbtn/index";
import SaveSearch from "components/SaveSearchBtn/index";
import Triggers from "components/Triggers/index";
import Inventory from "components/Inventory/index";

const AddOn = () => {
  const [show, setShow] = useState();
  const [showhide, setShowhide] = useState("no");

  const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };

  const navigate = useNavigate();

  function handleNavigateCR() {
    navigate("/t12");
  }

  function handleNavigate21() {
    navigate("/packages");
  }

  function handleNavigate22() {
    navigate("/rulestour");
  }

  return (
    <>
      <Header className="w-[100%]" />
      <Column className="bg-white h-fit w-[100%]">
        <Row className="bg-gray_100 h-fit justify-start items-start w-[100%]">
          <Topbtns/>
        </Row>
        <Row className="w-[100%] mt-[8px]">
          <Sidebar />
          <Column className="p-2 bg-white h-screen w-[100%]">
            <Row>
              <Column className="w-[65%] text-light_blue_600 text-[25px] m-2 font-regular">
                Add On
              </Column>
              <Column className="items-end w-[38%] mr-6 text-white">
                <Row>
                  <Button className="bg-[#a0a0a0] hover:bg-[#767676] m-[3px] font-bold h-[fit] w-[fit]">
                    <Row className="items-center">
                      <Text
                        className="mr-2 text-white text-bold cursor-pointer "
                        variant="body6"
                      >
                        Manage
                      </Text>
                      <FaShoppingCart className="h-4 w-4 text-white" />
                    </Row>
                  </Button>
                  <Button onClick={handleNavigateCR} className="bg-[#87B87F] hover:bg-[#629B58] items-center m-[3px] font-bold h-[fit] w-[fit]">
                    <Row className="items-center">
                      <FaThumbtack className="h-4 w-4 mr-2 text-white" />
                      <Text
                        className="text-white text-bold cursor-pointer "
                        variant="body6"
                      >
                        Create Rule
                      </Text>
                    </Row>
                  </Button>
                </Row>
              </Column>
            </Row>
            <Line className="bg-gray_700_33 my-[10px] h-[1.5px] w-[100%]" />
            <Row>
              <Column className="w-[100%] text-light_blue_600 text-[20px] font-regular">
                <Row className="items-center mt-4">
                  <input
                    className="bg-gray-50 border border-gray-300 rounded-sm text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[100%] "
                    type="text"
                    size="smSrc"
                    required
                  ></input>
                  <Search/>
                </Row>
              </Column>
              <Column className="w-[38%] justify-end items-end mr-6 text-white">
                <SaveSearch/>
              </Column>
            </Row>
            <Row>
              <Column className="bg-white w-[71.5%]">
                <Row className="mt-5 gap-4 ">
                  <Triggers/>
                  <Inventory/>
                </Row>
              </Column>
            </Row>
            <Column className="w-[100%] pl-10 pr-10 pt-20 pb-20  text-black">
              <Row>
                <Column className="justify-center items-center m-10 w-[45%]">
                  <Row className="justify-center items-center text-[30px] my-2">
                    You don't have any rules
                  </Row>
                  <Row className="items-center text-center text-[14px] my-2">
                    Create rules to set pricing and availability based on
                    specific conditions like date windows, days of the week or
                    promo codes.
                  </Row>
                  <Row className="justify-center items-center my-5">
                    <Button onClick={handleNavigateCR} className="bg-[#87B87F] hover:bg-[#629B58] items-center m-[3px] font-bold h-[fit] w-[fit]">
                      <Row className="items-center">
                        <FaThumbtack className="h-5 w-5 mr-2 text-white" />
                        <Text
                          className="text-white text-bold cursor-pointer "
                          variant="body5"
                        >
                          Create Rule
                        </Text>
                      </Row>
                    </Button>
                  </Row>
                </Column>
                <Column className="justify-center w-[70%]">
                  <Img src="images/packages.svg" className="h-[70%] w-[70%]" />
                </Column>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default AddOn;

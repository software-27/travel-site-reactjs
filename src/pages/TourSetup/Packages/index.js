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
import Inventory from "components/Inventory/index";
import PackageTags from "components/PackageTags/index";

const PackagesPage = () => {
  const [show, setShow] = useState();
  const [showhide, setShowhide] = useState("no");

  const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };

  const navigate = useNavigate();

  function handleNavigateCP() {
    navigate("/t10");
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
      <Column className=" bg-white h-fit w-[100%]">
        <Row className="bg-gray_100 h-fit justify-start items-start w-[100%]">
          <Topbtns/>
        </Row>
        <Row className="w-[100%] mt-[8px]">
          <Sidebar />
          <Column className="p-2 bg-white h-screen w-[100%]">
            <Row>
              <Column className="w-[65%] text-light_blue_600 text-[25px] m-2 font-regular">
                Packages
              </Column>
              <Column className="items-end w-[38%] mr-6 text-white">
                <Row>
                  <Button className="bg-[#a0a0a0] hover:bg-[#767676] m-[3px] font-bold h-fit w-fit">
                    <Row>
                      <Text
                        className="mr-2 text-white text-bold cursor-pointer "
                        variant="body6"
                      >
                        Manage
                      </Text>
                      <FaShoppingCart className="h-4 w-4 text-white" />
                    </Row>
                  </Button>
                  <Button onClick={handleNavigateCP} className="bg-[#87B87F] hover:bg-[#629B58] items-center m-[3px] font-bold h-[fit] w-[fit]">
                    <Row className="items-center">
                      <FaThumbtack className="h-4 w-4 mr-2 text-white" />
                      <Text
                        className="text-white text-bold cursor-pointer "
                        variant="body6"
                      >
                        Create Package
                      </Text>
                    </Row>
                  </Button>
                </Row>
              </Column>
            </Row>
            <Line className="bg-gray_700_33 my-[10px] h-[1.5px] w-[100%]" />
            <Row className="items-center h-fit">
              <Column className="w-[100%] text-light_blue_600 text-[20px] m-2 font-regular">
                <Row className="items-center">
                  <input
                    className="bg-gray-50 border border-gray-300 rounded-sm text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[100%] 2xl:mt-1 mb-1 "
                    type="text"
                    size="smSrc"
                    required
                  ></input>
                  <Search/>
                </Row>
              </Column>
              <Column className="w-[38%] justify-end items-end text-white">
                  <SaveSearch/>
              </Column>
            </Row>
            <Column className="bg-white w-[72%]">
              <Row className="mt-5 ml-2 gap-4">
                <Inventory/>
                <PackageTags/>
              </Row>
            </Column>
            <Column className="w-[100%] pl-10 pr-10 pt-20 pb-20  text-black">
              <Row>
                <Column className="justify-center items-center m-10 w-[45%]">
                  <Row className="justify-center items-center text-[30px] my-2">
                    You don't have any packages
                  </Row>
                  <Row className="items-center text-center text-[14px] my-2">
                    Create packages of inventory items and options that are
                    bundled together for your customers.
                  </Row>
                  <Row className="justify-center items-center my-5">
                    <Button onClick={handleNavigateCP} className="bg-[#87B87F] hover:bg-[#629B58] items-center m-[3px] font-bold h-[fit] w-[fit]">
                      <Row>
                        <FaThumbtack className="h-5 w-5 mr-2 text-white" />
                        <Text
                          className="text-white text-bold cursor-pointer "
                          variant="body4"
                        >
                          Create Package
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

export default PackagesPage;

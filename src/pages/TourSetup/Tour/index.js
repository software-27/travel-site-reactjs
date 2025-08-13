import React, { useState } from "react";

import { Column, Row, Text, Line, Button,Img} from "components";
import Header from "components/Header/Header/index";
import Sidebar from "components/Sidebar/index";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { SelectFlagIn } from "components/SelectFlagIn";
import Dropdown from "components/Dropdown/index";
import { SelectManage } from "components/SelectManage";
import {
  mdiPlusThick,
  mdiCloudArrowDown,
} from "@mdi/js";
import Topbtns from "components/Topbutton/index";
import Search from "components/Searchbtn/index";
import SaveSearch from "components/SaveSearchBtn/index";
import FlagStatus3 from "components/Flag&status3/index";

const TourPage = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [show, setShow] = useState();
  const [showhide, setShowhide] = useState("no");

  const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };

  const navigate = useNavigate();

  function handleNavigate20() {
    navigate("/inventory");
  }

  function handleNavigate21() {
    navigate("/packages");
  }

  function handleNavigate22() {
    navigate("/rulestour");
    
  }

  function handleNavigate70() {
    navigate("/t7");
    
  }

  function handleNavigate71() {
    navigate("/t8");
    
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
              <Column className="w-[65%] text-light_blue_600 text-[25px] font-regular">
                Tour
              </Column>
              <Column className="w-[38%] text-white">
                <Row className="h-[50px] mt-[10px]">
                  
                 {/* <SelectManage
                    className="bg-[#a0a0a0] hover:bg-[#767676] mr-2 font-bold h-[fit] w-[fit] border border-transparent text-white"
                    placeholderClassName="text-white"
                    name="GroupSixtyThree"
                    placeholder="Manage"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_6X10.svg"
                        className="lg:w-[7px] lg:h-[5px] lg:mr-[8px] xl:w-[8px] xl:h-[6px] xl:mr-[10px] 2xl:w-[10px] 2xl:h-[7px] 2xl:mr-[12px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[14px]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder2"
                    size="md"
                    variant="OutlineGray700"
                    >
                  </SelectManage>*/}
                  <Button className="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center mr-2 font-bold h-[fit] w-[fit]"
                    onClick={handleNavigate70}>
                    <Row className="gap-2 items-center">
                      <Icon
                        path={mdiCloudArrowDown}
                        title="Search"
                        className=" text-bold items-center text-white"
                        size={0.8}
                        horizontal-180
                      />
                      <Text
                        className="text-white text-bold cursor-pointer "
                        variant="body7"
                      >
                        Import Tour
                      </Text>
                    </Row>
                  </Button>
                  <Button className="bg-[#87B87F] hover:bg-[#629B58] items-center font-bold h-[fit] w-[fit]"
                    onClick={handleNavigate71}>
                    <Row className="items-center gap-1">
                      <Icon
                        path={mdiPlusThick}
                        title="Add"
                        className="text-bold items-center text-white"
                        size={0.8}
                        horizontal-180
                      />
                      <Text
                        className="text-white text-bold cursor-pointer "
                        variant="body7"
                      >
                        Create Tour
                      </Text>
                    </Row>
                  </Button>
                </Row>
              </Column>
            </Row>
            <Line className="bg-gray_700_33 my-[10px] h-[1.5px] w-[100%]" />
            <Column>
              <Row className="gap-14 items-center">
                <Column className="h-fit w-[100%] text-light_blue_600 text-[20px] font-regular">
                  <Row className="items-center">
                    <input
                      className="mb-1 bg-white border border-gray-300 rounded-sm text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block mt-[3px] h-10 w-[100%]"
                      placeholder="Search items, options, descriptions..."
                      type="text"
                      size="smSrc"
                      required
                    ></input>
                    <Search/>
                  </Row>
                </Column>
                <Column className="w-[40%] text-white">
                  <Row className="w-[100%] justify-end">
                    <SaveSearch/>
                  </Row>
                </Column>
              </Row>
              <Row className="w-[100%]">
                <Column className="bg-white w-[100%]">
                  <FlagStatus3/>
                </Column>
              </Row>
            </Column>
            <Column className="w-[100%] pl-10 pr-10 pt-20 pb-20  text-black">
              <Row>
                <Column className="justify-center items-center m-10 w-[45%]">
                  <Row className="justify-center items-center text-[30px] my-2">
                    You don't have any tour
                  </Row>
                  <Row className="items-center text-center text-[14px] my-2">
                    Add your tours, events and activities to let
                    them be booked, and to manage their details, display,
                    pricing and availability.
                  </Row>
                  <Row className="justify-center items-center my-5">
                    <Button className="bg-[#87B87F] hover:bg-[#629B58] items-center m-[3px] font-bold h-[fit] w-[fit]"
                    onClick={handleNavigate71}>
                      <Row className="items-center gap-1">
                        <Icon
                          path={mdiPlusThick}
                          title="Add"
                          className=" items-center text-white"
                          size={0.8}
                          horizontal-180
                        />
                        <Text
                          className="text-white cursor-pointer "
                          variant="body7"
                        >
                          Create Tour
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

export default TourPage;

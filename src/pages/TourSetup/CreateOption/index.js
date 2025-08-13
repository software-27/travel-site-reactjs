
import React from "react";
import { Column, Row, Text, Line, Button, Img, Switch, } from "components";
import { SelectDuration } from "components/SelectDuration/index";
import { SelectDeposit } from "components/SelectDeposit/index";
import { SelectSetStatus } from "components/SelectSetStatus/index";
import { SelectCutoff } from "components/SelectCutoff/index";
import Header from "components/Header/Header/index";
import Sidebar from "components/Sidebar/index";
import { useNavigate } from "react-router-dom";
import { RxDoubleArrowRight, RxChevronLeft } from "react-icons/rx";
import { FaShoppingCart, FaThumbtack, FaTimes, FaCheck } from "react-icons/fa";
import {
  mdiCheck, mdiCloseThick, mdiMenuDown, mdiChevronRight, mdiHelpCircle, mdiPlusBox,
  mdiFormatIndentIncrease, mdiArchiveOutline, mdiEye, mdiArrowAll, mdiAccountGroup
} from '@mdi/js';
import Icon from "@mdi/react";
import { useState } from 'react';
import { SelectCancel } from "components/SelectCancel/index";
import { SelectAvailableDt } from "components/SelectAvailableDt/index";
import { SelectBookingExpire } from "components/SelectBookingExpire/index";
import { SelectPricingType } from "components/SelectPricingType/index";
import { Tabs } from "components/TabAvailability/index";
import { SelectTicketPool } from "components/SelectTicketPool/index";
import { SelectUser } from "components/SelectUser/index";
import { SelectGroup } from "components/SelectGroup/index";





const CreateOption = () => {
  const navigate = useNavigate();
  const [openTab, setOpenTab] = React.useState(1);

  // const changeSelectOptionHandler = (event) => {
  //     setSelected(event.target.value);
  //   }

  //button cancel navigate to ticket pools
  function handleNavigate1() {
    navigate("/ticketpools");
  }

  //button cancel navigate to tic
  function handleNavigate24() {
    navigate("/ticketpools");
  }

  function handleNavigate33() {
    navigate("/t24");
  }

  function handleNavigate34() {
    navigate("/t24");
  }

  //for switch 
  const [enabled, setEnabled] = useState(false);
  const [enabled2, setEnabled2] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);
  const [showModal4, setShowModal4] = React.useState(false);
  const [showModal5, setShowModal5] = React.useState(false);
  const [showModal6, setShowModal6] = React.useState(false);
  const [showModal7, setShowModal7] = React.useState(false);

  // for radio button
  const [showhide, setShowhide] = useState("");

  const handleshow = e => {
    const getshow = e.target.value;
    setShowhide(getshow);
  }

  //for dropdown list
  const [isVisible, setIsVisible] = useState("");

  const changeHandler = e => {
    const getshow = e.target.value;
    setIsVisible(getshow);
  }

  //for add dynamically button
  const [serviceList, setServiceList] = useState([{ service: "" }]);

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  return (
    <>
      <Header className="w-[100%]" />
      <Column className="bg-white w-[100%]">
        <Row className="bg-gray_100 h-fit justify-start items-start w-[100%]">
          <Column>
            <Row className="bg-[#F5F5F5] items-start w-[100%]">
              <Button class="bg-[#87B87F] hover:bg-[#629B58] items-center h-9 px-2 ml-[10px] mt-2.5 mb-2.5">
                <Row>
                  <FaShoppingCart className="h-5 w-5 text-white" />
                  <Text
                    className="px-1 text-white cursor-pointer"
                    variant="body4"
                  >
                    Point of Sale
                  </Text>
                </Row>
              </Button>

              <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-9 px-2 ml-[10px] mt-2.5 mb-2.5">
                <Row>
                  <FaThumbtack className="h-5 w-5 text-white" />
                </Row>
              </Button>
            </Row>
          </Column>
        </Row>

        <Row className="w-[100%] mt-[8px]">
          <Sidebar />
          <Column className="bg-white h-auto w-[100%]">
            <Row className="mb-4">
              <Row className="w-[65%] text-light_blue_600 text-[25px] m-1 font-light items-center">
                Tour
                <RxDoubleArrowRight className="items-start ml-2 mt-4 h-5 w-5 text-[#667E99] items-center" />
                <Text className="text-[15px] ml-2 mt-2 text-[#667E99]">Penang Hotel ABC</Text>
              </Row>
            </Row>
            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />

            <Row className="mb-4">
              <Column className="w-[65%] text-light_blue_600 text-[25px] m-1 font-light">
                Create New Option
              </Column>
              <Column className="w-[38%] text-white ">
                <Row className="justify-end">
                  <Button class="bg-[#a0a0a0] hover:bg-[#767676] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#a0a0a0] ring-inset"

                    size="xs"
                    type="submit"
                    onClick={handleNavigate34}>
                    <Row className="gap-2 items-center">
                      <Text className="text-lg cursor-pointer">Cancel</Text>
                      <Icon path={mdiCloseThick}
                        title="Bag"
                        size={1.0}
                        color="white"
                      />
                    </Row>
                  </Button>

                  <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset"
                    size="xs"
                    type="submit"
                    onClick={handleNavigate33}>
                    <Row className="gap-2 items-center">
                      <Icon path={mdiCheck}
                        title="Bag"
                        size={1.0}
                        color="white"
                      />
                      <Text className="text-lg cursor-pointer">Create Option</Text>
                    </Row>
                  </Button>

                </Row>
              </Column>
            </Row>

            <Row className="mt-4">
              <Column className="w-[60%] m-2 font-regular">
                <div className="space-y-3">
                  <Row className="space-x-3">
                    <Text className="text-[#667E99] w-[30%] text-right">
                      Name
                    </Text>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                      type="text"
                      size="smSrc"
                      required
                      placeholder="Option name "
                    ></input>
                  </Row>

                  <Row className="space-x-3">
                    <Text className="text-[#667E99] w-[30%] text-right">
                      Duration
                    </Text>
                    <Row className="gap-4 justify-start w-[100%]">
                      <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[20%]"

                        type="text"
                        size="smSrc"
                        required
                        placeholder="Duration"
                      ></input>
                      <SelectDuration />
                    </Row>
                  </Row>

                  <Row className="space-x-3">
                    <Text className="text-[#667E99] w-[30%] text-right">
                      Guest
                    </Text>
                    <Row className="gap-4 justify-start w-[100%]">
                      <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[20%]"

                        type="text"
                        size="smSrc"
                        required
                        placeholder="Min"
                      ></input>
                      <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[20%]  "
                        type="text"
                        size="smSrc"
                        required
                        placeholder="Max"
                      ></input>
                    </Row>
                  </Row>



                  <Row className="space-x-3">
                    <div class="mb-5 w-[100%] ml-[24%]">
                      <input type="checkbox" name="advanced1" id="checkbox-1" class="hidden peer bg-transparent" />
                      <Row className="items-center">
                        <Icon path={mdiChevronRight}
                          title="Bag"
                          size={1.5}
                          color="#428BCA"
                          className="advanced"
                        />
                        <label for="checkbox-1" class="ml-3 text-lg text-[#428BCA] w-[100%] cursor-pointer">Advanced Option
                        </label></Row>

                      <div class="pt-4 space-y-3 mt-2 hidden peer-checked:block">
                        <Row className="space-x-3">
                          <label for="deposit" class="block mb-2 text-sm font-medium text-[#667E99]  w-[10%]">Deposit</label>
                          <Row className="gap-4 justify-start w-[100%]">
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[20%]"

                              type="text"
                              size="smSrc"
                              required
                              placeholder="Deposit"
                            ></input>
                            <SelectDeposit />
                          </Row>
                        </Row>

                        <Row className="space-x-3">
                          <label for="deposit" class="block mb-2 text-sm font-medium text-[#667E99] w-[10%]">Block Size</label>
                          <Row className="gap-4 justify-start w-[100%]">
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[20%]"

                              type="text"
                              size="smSrc"
                              required
                              placeholder="Spaces"
                            ></input>
                            <span className="inline px-1 py-1">
                              <Row className="items-center gap-2">
                                <Icon path={mdiHelpCircle}
                                  title="Bag"
                                  size={1.0}
                                  color="#428BCA"
                                  className=""
                                />
                                <Text className="text-[#428BCA]">More Info</Text>
                              </Row>
                            </span>
                          </Row>
                        </Row>

                        <Row className="space-x-3">
                          <label for="deposit" class="block mb-2 text-sm font-medium text-[#667E99]  w-[10%]">Set Status</label>
                          <Row className="gap-4 justify-start w-[100%]">

                            <SelectSetStatus />
                          </Row>
                        </Row>
                      </div>
                    </div>
                  </Row>

                </div>
              </Column>
            </Row>



            <Row className="pt-6 ">
              <Text className="text-[19px] m-1 font-regular">
                Availability
              </Text>
            </Row>
            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
            <Column className="w-[60%] m-2 font-regular">
              <div className="space-y-3">
                <Row className="space-x-3">
                  <Text className="text-[#667E99] w-[30%] text-right">
                    Availability Type
                  </Text>
                  <div className="w-full">
                    <ul
                      className="flex mb-0 list-none flex-wrap pb-4 flex-row"
                      role="tablist"
                    >
                      <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a
                          className={
                            "px-5 py-3 shadow-lg rounded block leading-normal cursor-pointer" +
                            (openTab === 1
                              ? "text-white bg-[#4C8FBD]"
                              : "text-[#4C8FBD] bg-white")
                          }
                          onClick={e => {
                            e.preventDefault();
                            setOpenTab(1);
                          }}
                          data-toggle="tab"
                          href="#link1"
                          role="tablist"
                        >
                          <Text className="text-lg font-medium text-black ">Daily Availability</Text><br></br>
                          <Text className="text-xl font-medium text-[#ADB5BD]">Date-Based Bookings</Text>
                        </a>
                      </li>
                      <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a
                          className={
                            "px-5 py-3 shadow-lg rounded block leading-normal  cursor-pointer" +
                            (openTab === 2
                              ? "text-white bg-[#4C8FBD]"
                              : "text-[#4C8FBD] bg-white")
                          }
                          onClick={e => {
                            e.preventDefault();
                            setOpenTab(2);
                          }}
                          data-toggle="tab"
                          href="#link2"
                          role="tablist"
                        >
                          <Text className="text-lg font-medium text-black ">Open Availability</Text><br></br>
                          <Text className="text-xl font-medium text-[#ADB5BD]">Freesale Bookings</Text>
                        </a>
                      </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-transparent w-full rounded">
                      <div className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                          <div className={openTab === 1 ? "block" : "hidden"} id="link1">

                            <Row className="mt-4">
                              <Column className="w-[100%] m-2 font-regular ">
                                <div className="space-y-3">
                                  <Row className="space-x-3">
                                    <Text className="text-[#667E99] w-[30%]">
                                      Daily Availability
                                    </Text>
                                    <Row className="gap-4 justify-between w-[100%]">
                                      <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[40%] 2xl:mt-2 "
                                        type="text"
                                        size="smSrc"
                                        required
                                        placeholder="Unlimited"
                                      ></input>
                                      <div className="relative flex flex-col-reverse overflow-hidden w-[60%]">
                                        <div className="flex">
                                          <label class="inline-flex relative items-center cursor-pointer">
                                            <input
                                              type="checkbox"
                                              className="sr-only peer"
                                              //    placeholder="Private"
                                              checked={enabled}
                                              readOnly
                                            />

                                            <div
                                              onClick={() => {
                                                setEnabled(!enabled);
                                              }}
                                              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"
                                            ></div>

                                            <span className="ml-2 text-sm font-medium text-gray-900">
                                              show to customer
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                    </Row>
                                  </Row>

                                  <Row className="space-x-3">
                                    <Text className="text-[#667E99] w-[30%] text-left ">
                                      Start Time
                                    </Text>
                                    <Row className="w-[100%]">
                                      <input
                                        className="justify-right bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[40%] 2xl:mt-2 "
                                        type="text"
                                        size="smSrc"
                                        required
                                        placeholder="Time"
                                      ></input>
                                    </Row>


                                  </Row>

                                  <Row className="space-x-3">
                                    <Text className="text-[#667E99] w-[30%] text-left">
                                      Check-In time
                                    </Text>
                                    <Row className="w-[100%]">
                                      <input
                                        className="justify-right bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[20%] 2xl:mt-2 "
                                        type="text"
                                        size="smSrc"
                                        required
                                        placeholder="Time"
                                      ></input>
                                    </Row>
                                  </Row>

                                  <Row className="space-x-3">
                                    <Text className="text-[#667E99] w-[30%] text-left">
                                      Booking Cutoff
                                    </Text>
                                    <Row className="gap-4 justify-between w-[100%]">
                                      <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[20%] 2xl:mt-2 "
                                        type="text"
                                        size="smSrc"
                                        required
                                        placeholder="Cutoff"
                                      ></input>
                                      <SelectCutoff className="w-[70%]" />
                                    </Row>
                                  </Row>

                                  <Row className="space-x-3">
                                    <Text className="text-[#667E99] w-[30%] text-left">
                                      Cancellation
                                    </Text>
                                    <Row className="gap-4 justify-between w-[100%]">
                                      <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[20%] 2xl:mt-2 "
                                        type="text"
                                        size="smSrc"
                                        required
                                        placeholder="Cancel"
                                      ></input>
                                      <SelectCancel className="w-[70%]" />
                                    </Row>
                                  </Row>

                                  <Row className="space-x-3">
                                    <Text className="text-[#667E99] w-[30%] text-left ">
                                      Available Dates
                                    </Text>
                                    <SelectAvailableDt className="w-[100%]" />


                                  </Row>

                                </div>
                              </Column>
                            </Row>

                          </div>

                          <div className={openTab === 2 ? "block" : "hidden"} id="link1">

                            <Row className="mt-4">
                              <Column className="w-[100%] m-2 font-regular ">
                                <div className="space-y-3">
                                  <Row className="space-x-3">
                                    <Text className="text-[#667E99] w-[30%]">
                                      Availability
                                    </Text>
                                    <Row className="gap-4 justify-between w-[100%]">
                                      <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[40%] 2xl:mt-2 "
                                        type="text"
                                        size="smSrc"
                                        required
                                        placeholder="Current"
                                      ></input>
                                      <Text>/</Text>
                                      <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[40%] 2xl:mt-2 "
                                        type="text"
                                        size="smSrc"
                                        required
                                        placeholder="Total"
                                      ></input>
                                      <div className="relative flex flex-col-reverse overflow-hidden w-[60%]">
                                        <div className="flex">
                                          <label class="inline-flex relative items-center cursor-pointer">
                                            <input
                                              type="checkbox"
                                              className="sr-only peer"
                                              //    placeholder="Private"
                                              checked={enabled}
                                              readOnly
                                            />

                                            <div
                                              onClick={() => {
                                                setEnabled(!enabled);
                                              }}
                                              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"
                                            ></div>

                                            <span className="ml-2 text-sm font-medium text-gray-900">
                                              show to customer
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                    </Row>
                                  </Row>

                                  <Row className="space-x-3">
                                    <Text className="text-[#667E99] w-[30%] text-left ">
                                      Start Time
                                    </Text>
                                    <Row className="w-[100%]">
                                      <input
                                        className="justify-right bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[40%] 2xl:mt-2 "
                                        type="text"
                                        size="smSrc"
                                        required
                                        placeholder="Time"
                                      ></input>
                                    </Row>

                                  </Row>

                                  <Row className="space-x-3">
                                    <Text className="text-[#667E99] w-[30%] text-left ">
                                      Booking Expire
                                    </Text>
                                    <SelectBookingExpire className="w-[100%]" />
                                  </Row>

                                </div>
                              </Column>
                            </Row>
                            <br></br>
                            <br></br>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </Row>
              </div>
            </Column>


            <Row className="pt-6">
              <Text className="text-[19px] m-1 font-regular">
                Pricing Tiers
              </Text>
              <Text className="text-[14px] m-1 pt-2 font-light">
                These are your available price points
              </Text>
            </Row>
            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />

            <Column className="w-[60%] m-2 font-regular">
              <div className="space-y-3">
                <Row className="space-x-3">
                  <Text className="text-[#667E99] w-[30%] text-right">
                    Pricing Type
                  </Text>
                  <SelectPricingType className="w-[100%]" />
                </Row>



                {serviceList.map((singleService, index) => (
                  <div key={index}>



                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        Price 1
                      </Text>
                      <Column className="w-[100%] gap-2">
                        <Row className="gap-4 justify-between w-[100%]">
                          <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                            type="text"
                            size="smSrc"
                            required
                            placeholder="Adult"
                          ></input>
                          <div className="relative flex flex-col-reverse overflow-hidden w-[60%]">
                            <div className="flex">
                              <label class="inline-flex relative items-center cursor-pointer">
                                <Tabs />
                              </label>
                            </div>
                          </div>
                        </Row>

                        <Row className="gap-4 w-[100%]">
                          <div class="container flex mx-auto w-[50%]">
                            <div class="flex border-2 w-[100%] h-9">
                              <button class="w-[25%] text-[14px] flex items-center justify-center px-7 border-r bg-gray_100">
                                SKU
                              </button>
                              <input type="text" class="px-4 w-[100%] text-[12px]" placeholder="Starting From" />
                            </div>
                          </div>
                          <div class="container flex mx-auto  w-[50%]">
                            <div class="flex border-2 w-[100%] h-9">
                              <button class="w-[25%] text-[14px] flex items-center px-7 border-r bg-gray_100">
                                Retail
                              </button>
                              <input type="text" class="px-4 w-[100%] text-[12px]" placeholder="RM" />
                            </div>
                          </div>
                        </Row>

                        <Row className="gap-4 w-[100%]">
                          <div class="container flex mx-auto w-[50%]">
                            <div class="flex border-2 w-[100%] h-9">
                              <button class="w-[25%] text-[14px] flex items-center justify-center px-7 border-r bg-gray_100">
                                Ages
                              </button>
                              <input type="text" class="px-4 w-[100%] text-[12px]" placeholder="Min" />
                              <input type="text" class="px-4 w-[100%] text-[12px]" placeholder="Max" />
                            </div>
                          </div>
                          <div class="container flex mx-auto  w-[50%]">
                            <div class="flex border-2 w-[100%] h-9">
                              <button class="w-[25%] text-[14px] flex items-center px-7 border-r bg-gray_100">
                                Cost
                              </button>
                              <input type="text" class="px-4 w-[100%] text-[12px]" placeholder="Cost" />
                            </div>
                          </div>
                        </Row>

                        <Row className="space-x-3">
                          <div class="mb-5 w-[100%] ">
                            <input type="checkbox" name="advanced2" id="checkbox-2" class="hidden peer bg-transparent" />
                            <Row className="items-center">
                              <Icon path={mdiChevronRight}
                                title="Bag"
                                size={1.5}
                                color="#428BCA"
                                className="advanced"
                              />
                              <label for="checkbox-2" class="ml-1 text-lg text-[#428BCA] w-[100%] cursor-pointer">Advanced
                              </label></Row>

                            <div class="space-y-3 mt-2 hidden peer-checked:block">
                              <Row for="option">
                                <Column className="w-[100%] m-2 font-regular items-end">
                                  <div className="space-y-3">
                                    <Row className="space-x-3">
                                      <Text className="text-[#667E99] w-[50%] text-right">
                                        Use Tickets From Pool
                                      </Text>
                                      <Row className="w-[100%]">
                                        <SelectTicketPool className="w-[100%]" />
                                      </Row>
                                    </Row>

                                    <Row className="space-x-3">
                                      <Text className="text-[#667E99] w-[50%] text-right ">
                                        Display a Strikethrough Price
                                      </Text>
                                      <Row className="w-[100%]">
                                        <div class="container w-[100%] items-end">
                                          <div class="flex border-2 w-[100%] h-9">
                                            <button class="w-[%] text-[14px] flex items-center px-7 border-r bg-gray_100">
                                              Strike
                                            </button>
                                            <input type="text" class="px-4 w-[100%] text-[12px]" placeholder="Price or Expression" />
                                          </div>
                                        </div>
                                      </Row>
                                    </Row>

                                  </div>
                                </Column>
                              </Row>
                            </div>

                          </div>
                        </Row>
                      </Column>




                    </Row>
                    {serviceList.length - 1 === index && serviceList.length < 10 && (
                      <Row className="w-[100%] pl-40">
                        <Button className="m-1 w-fit items-right h-fit mr-2 py-2.5 px-3 font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                          size="xs"
                          type="submit"
                          onClick={handleServiceAdd}
                        >
                          <Row className="gap-2 items-center">
                            <Icon path={mdiPlusBox}
                              title="Bag"
                              size={1.0}
                              color="white"
                            />
                            <Text className="text-lg">Add New Price Tier</Text>
                          </Row>
                        </Button>

                      </Row>



                    )}
                  </div>
                ))}

                <Row className="space-x-3 pl-40">
                  <Row className="gap-4 w-[100%]">
                    <Button className="m-1 w-fit items-center h-fit mr-2 py-2.5 px-3 font-medium text-[#373737] text:hover-white bg-[#E7E7E7] hover:bg-[#888888] ring-4 ring-[#E7E7E7] ring-inset"
                      size="xs"
                      type="submit"
                      onClick={() => setShowModal(true)}>
                      <Row className="gap-2 items-center">
                        <Icon path={mdiPlusBox}
                          title="Bag"
                          size={1.0}
                          color="#373737"
                        />
                        <Text className="text-lg">Add Pricing Bundle</Text>
                      </Row>
                    </Button>
                    {showModal ? (
                      <>
                        <div
                          className="justify-center items-center mx-[150px] my-[150px] flex  fixed inset-0 z-50 outline-none focus:outline-none"
                        >

                          <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              {/*header*/}
                              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 bg-[#428BCA]">
                                <h3 className="text-2xl font-semibold text-white">
                                  Add Pricing Bundle
                                </h3>
                                <Img
                                  src="images/img_close_36X33.svg"
                                  className=" w-5 h-5 ml-20 mr-50 mt-1 xl:ml-[220px] items-center"
                                  onClick={() => setShowModal(false)}
                                  alt="close One"
                                />
                              </div>
                              {/*body*/}
                              <Column className="relative p-6 flex-auto">
                                <div className="space-y-3">
                                  <Row className="space-x-3">
                                    <Text className="text-[#667E99] w-[30%]">
                                      Bundle Name
                                    </Text>
                                    <Row className="gap-4 justify-between w-[100%]">
                                      <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[40%] 2xl:mt-2 "
                                        type="text"
                                        size="smSrc"
                                        required
                                        placeholder="Bundle Name"
                                      ></input>
                                    </Row>
                                  </Row>

                                  <Row className="space-x-3">
                                    <Text className="text-[#667E99] w-[30%]">
                                      Show on List
                                    </Text>

                                    <Row className="justify-between w-[100%]">
                                      <Row className="items-center gap-2">
                                        <Switch />
                                        <Text>Show this bundle to customers</Text>
                                      </Row>
                                    </Row>
                                  </Row>

                                  <Row className="space-x-3">
                                    <Text>Enter the number of each price point you want to have in this bundle</Text>
                                  </Row>

                                  <table class="m-2 table-fixed w-[100%] text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead class="text-base font-light text-black bg-bluegray_100_6c dark:bg-gray-700 dark:text-gray-400">
                                      <tr>
                                        <th>Num</th>
                                        <th>Label</th>
                                        <th>Retail</th>
                                        <th class="items-right">Count</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td>Price 1</td>
                                        <td>Adult</td>
                                        <td>RM 0.00</td>
                                        <td>
                                          <input
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                            type="text"
                                            size="smSrc"
                                            required
                                            placeholder="Num"
                                          ></input>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <Column className="w-[100%] ">

                                    <Row className="space-x-3 w-[100%] justify-end">
                                      <Text className="text-[14px] text-[#667E99] w-fit text-right">
                                        Total Retail Value
                                      </Text>
                                      <Text className="text-black w-[40%]">
                                        RM0.00
                                      </Text>
                                    </Row>

                                    <Row className="space-x-3 w-[100%] justify-end">
                                      <Text className="text-[14px] text-[#667E99] w-fit text-right">
                                        Bundle Price
                                      </Text>
                                      <Text className="text-black w-[40%]">
                                        RM0.00
                                      </Text>
                                    </Row>

                                    <Row className="space-x-3 w-[100%] justify-end">
                                      <Text className="text-[14px] text-[#667E99] w-fit text-right">
                                        Savings
                                      </Text>
                                      <Text className="text-black w-[40%]">
                                        RM0.00
                                      </Text>
                                    </Row>


                                  </Column>




                                  <div className="mt-2">
                                    <Row className="mt-6 bg-gray_100 h-fit justify-start items-center w-[100%] mr-6 pb-5 mr-3">
                                      <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset ml-3 mt-3"
                                        size="xs"
                                        type="submit">
                                        <Row className="gap-2 items-center">
                                          <Icon path={mdiCheck}
                                            title="Bag"
                                            size={1.0}
                                            color="white"
                                          />
                                          <Text className="text-lg cursor-pointer">Add These Options</Text>
                                        </Row>
                                      </Button>
                                    </Row>
                                  </div>

                                </div>
                              </Column>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                      </>
                    ) : null}
                  </Row>
                </Row>
                {/* </Column> */}

                {/* </Row> */}

              </div>
            </Column>

            <Row className="pt-6">
              <Text className="text-[19px] m-1 font-regular">
                Line Items
              </Text>
              <Text className="text-[14px] m-1 pt-2 font-light">
                Line items that should be added to bookings for this option
              </Text>
            </Row>
            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />

            <Column className="w-[60%] m-2 font-regular">
              <div className="space-y-3">
                <Row className="">
                  <Text className="text-[#667E99] w-[23%] text-right">

                  </Text>
                  <Button className="m-1 w-fit items-center h-fit mr-2 py-2.5 px-3 font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                    size="xs"
                    type="submit"
                    onClick={() => setShowModal2(true)}>
                    <Row className="gap-2 items-center">
                      <Icon path={mdiPlusBox}
                        title="Bag"
                        size={1.0}
                        color="white"
                      />
                      <Text className="text-lg">Add Line Items</Text>
                    </Row>
                  </Button>
                  {showModal2 ? (
                    <>
                      <div
                        className="justify-center items-center mx-[150px] my-[100px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                      >

                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 bg-[#428BCA]">
                              <h3 className="text-2xl font-semibold text-white">
                                Add Line Items
                              </h3>
                              <Img
                                src="images/img_close_36X33.svg"
                                className=" w-5 h-5 ml-20 mr-50 mt-1 xl:ml-[220px] items-center"
                                onClick={() => setShowModal2(false)}
                                alt="close One"
                              />
                            </div>
                            {/*body*/}
                            <Column className="m-2 w-[100%]">


                              <div className=" w-[100%]">
                                <Row className="pt-2 items-center">
                                  <Icon path={mdiArchiveOutline}
                                    title="Bag"
                                    size={1.0}
                                    color="orange"
                                  />
                                  <Text className="text-[14px] m-1 font-light">
                                    Used a saved bundle
                                  </Text>
                                </Row>

                                <Row className="justify-center items-center mt-2 border border-gray-300 h-150">
                                  <Text className="m-20 text-[14px] text-gray-900 text-center">
                                    You don't have any bundle
                                  </Text>
                                </Row>

                                <Row className="pt-2 items-center">
                                  <Icon path={mdiArchiveOutline}
                                    title="Bag"
                                    size={1.0}
                                    color="orange"
                                  />
                                  <Text className="text-[14px] m-1 font-light">
                                    Or add a new line item
                                  </Text>
                                </Row>

                                <Row className="w-[100%]">
                                  <Column className="w-[90%]">
                                    <Row className="gap-2">

                                      <Row className="mt-2 w-[100%]">
                                        <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[40%] text-right ">
                                          Label
                                        </Text>
                                        <input
                                          className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                                          type="text"
                                          size="smSrc"
                                          required
                                          placeholder=""
                                        ></input>
                                      </Row>

                                      <Row className="mt-2 w-[100%]">
                                        <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                          Amount
                                        </Text>
                                        <SelectDeposit className="w-[30%]" />
                                        <input
                                          className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[40%] 2xl:mt-2 "
                                          type="text"
                                          size="smSrc"
                                          required
                                          placeholder=""
                                        ></input>
                                      </Row>
                                    </Row>

                                    <Row className="mt-2 items-center">
                                      <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[40%] text-right ">
                                        Amount
                                      </Text>
                                      <Row className="w-full gap-2 ">
                                        <input type="checkbox" name="agree" id="agree-1" class=" mx-2 peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <Text> Taxes don't add to each other</Text>
                                      </Row>

                                    </Row>

                                    <div className="mx-3 w-[100%]">
                                      <Row className="mt-6 bg-gray_100 h-fit justify-end w-[100%] mr-6 mb-4 pb-5 mr-3">
                                        <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-10 w-fit mx-2 px-2 mt-5 ml-4 ">
                                          <Row>
                                            <FaCheck className="h-5 w-5 text-white" />
                                            <Text
                                              className="text-white cursor-pointer pl-2"
                                              variant="body4"
                                            >
                                              Add This Line
                                            </Text>
                                          </Row>
                                        </Button>
                                      </Row>
                                    </div>
                                  </Column>
                                </Row>

                              </div>
                            </Column>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}

                    <Button className="mt-2 w-fit items-center h-fit py-2.5 px-1 font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                      size="xs"
                      type="submit"
                      onClick={() => setShowModal7(true)}
                    >

                      <Icon path={mdiMenuDown}
                        title="Bag"
                        size={1.0}
                        color="white"
                      />

                    </Button>

                </Row>
              </div>
            </Column>

            <Row className="pt-6">
              <Text className="text-[19px] m-1 font-regular">
                Booking Fields
              </Text>
              <Text className="text-[14px] m-1 pt-2 font-light">
                Additional information to collect from people booking this option
              </Text>
            </Row>
            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
            <Text>Fields for each guest in the booking</Text>

            <Column className="mt-6 w-[60%] font-regular">
              <div className="space-y-3">
                <Row className="space-x-3">
                  <Text className="text-[#667E99] w-[30%] text-right">
                    Information
                  </Text>
                  <Row className="w-[100%]">
                    <Column className="w-[100%]">
                      <div class="container flex mx-auto  ">
                        <div class="flex border-[1.5px] border-gray-300 w-[100%] m-4 h-9">
                          <button class="flex border-gray-300 items-center justify-center px-4 border-r bg-[#E7E7E7]">
                            <Icon path={mdiPlusBox}
                              title="Tag"
                              size={1.0}
                              color="white"
                            />
                          </button>
                          <Column className="w-[100%]">
                            <select
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-9 w-[100%] 2xl:mt-2"
                            >
                              <option value="" disabled selected hidden>Ask for name only</option>
                              <option className="text-[#428bca]" disabled>Optional Guest Info</option>
                              <option class="items-center">Ask for name only</option>
                              <option >Ask for name and contact info</option>
                              <option className="text-[#428bca]" disabled>Require Guest Info</option>
                              <option class="items-center">Require name only</option>
                              <option >Require name and contact info</option>
                              <option className="text-[#428bca]" disabled>Don't Collect Guest Info</option>
                              <option class="items-center">Don't ask for any info or form data</option>
                            </select>

                          </Column>

                        </div>
                      </div>
                      <Row>
                        <Button className="ml-3 m-1 w-fit items-center h-fit py-2.5 px-3 font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                          size="xs"
                          type="submit"
                          onClick={() => setShowModal3(true)}>
                          <Row className="gap-2 items-center">
                            <Icon path={mdiAccountGroup}
                              title="Bag"
                              size={1.0}
                              color="white"
                            />
                            <Text className="text-lg">Add Guest Forms</Text>
                          </Row>
                        </Button>
                        {showModal3 ? (
                          <>
                            <div
                              className="justify-center items-center mx-[150px] my-[100px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                              {/*Header*/}
                              <Column classname="w-[100%]">
                                <Row className="bg-[#428BCA] w-[100%] items-start justify-between">
                                  <Text className="pl-3 py-5 text-xl text-white">
                                    Add New Guest Form
                                  </Text>
                                  <FaTimes className=" mr-4 mt-6 h-5 w-5 text-white common-pointer"
                                    onClick={() => setShowModal3(false)} />
                                </Row>
                              </Column>


                              {/*Body*/}

                              <Column className="bg-white w-[100%]">
                                <Row className="m-2 gap-4">
                                  <Column className="w-[50%]">

                                    <Row className="pt-2 items-center">
                                      <Icon path={mdiFormatIndentIncrease}
                                        title="Bag"
                                        size={1.0}
                                        color="orange"
                                      />
                                      <Text className="text-[14px] m-1 font-light">
                                        Add a new form
                                      </Text>
                                    </Row>
                                    <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />

                                    <Row className="mt-2">
                                      <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                        Copy Form
                                      </Text>
                                      <select
                                        class="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-10 w-[50%] 2xl:mt-2"
                                      >
                                        <option value="" disabled selected hidden>Select an existing form..</option>
                                        <option className="text-[#428bca]" disabled>Checkbox</option>
                                        <option class="items-center">Do you have any medical conditions?</option>
                                        <option >Have you verified your guests information?</option>
                                      </select>
                                      <Button class="bg-[#6FB3E0] hover:bg-[#006BB8] items-center h-10 py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#6FB3E0] ring-inset"
                                        size="xs"
                                        type="submit"
                                      //   onClick={handleNavigate25}
                                      >
                                        <Row className="gap-2 items-center">

                                          <Text className="text-lg cursor-pointer">Load</Text>
                                        </Row>
                                      </Button>
                                    </Row>

                                    <Row className="mt-2">
                                      <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                        Show Field
                                      </Text>
                                      <select
                                        class="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-10 w-[60%] 2xl:mt-2"
                                        onChange={changeHandler}>
                                        <option value="" disabled selected hidden>Everywhere</option>
                                        <option class="items-center">Everywhere</option>
                                        <option >On Back-End Only (internal use)</option>
                                      </select>
                                    </Row>

                                    <Column className="mt-2">
                                      <Row className="w-[100%] gap-2">

                                        <Text className="pt-1 text-[14px] ml-3 text-right text-[#667E99] w-[20%]">
                                          Field Type
                                        </Text>


                                        <div className="w-[80%] mx-2">
                                          <select className="common-pointer w-[80%] bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500" onChange={changeHandler}>
                                            <option value="" disabled selected hidden>Short Text</option>
                                            <option className="text-[#428bca]" disabled>Normal Fields</option>
                                            <option class="items-center" value="st">Short Text</option>
                                            <option value="cb">Checkbox</option>
                                            <option value="dd">Dropdown</option>
                                            <option value="mc">Multiple Choices</option>
                                            <option value="lta">Large Text Area</option>
                                            <option className="text-[#428bca]" disabled >Price Adjustmest Fields</option>
                                            <option value="pc">Price Checkbox</option>


                                          </select>
                                        </div>

                                      </Row>


                                      {isVisible === 'st' && (

                                        <Column>

                                          <div className="items-left justify-start mt-4 w-[100%]">

                                            <Row className="mt-2 w-full">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Title
                                              </Text>
                                              <input
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder="Field Name"
                                              ></input>
                                            </Row>

                                            <Row className="mt-2">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Instructions
                                              </Text>
                                              <input
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder="Field Instructions"
                                              ></input>
                                            </Row>

                                            <Row className="mt-2">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Required
                                              </Text>
                                              <Switch className="mx-2" />
                                            </Row>

                                            <div className="mx-3 w-[100%]">
                                              <Row className="mt-6 bg-gray_100 h-fit justify-end w-[80%] mr-6 mb-4 pb-5 mr-3">
                                                <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-10 w-[30%] mx-2 px-2 mt-5 ml-4 ">
                                                  <Row>
                                                    <FaCheck className="h-5 w-5 text-white" />
                                                    <Text
                                                      className="text-white cursor-pointer pl-2"
                                                      variant="body4"
                                                    >
                                                      Add This Field
                                                    </Text>
                                                  </Row>
                                                </Button>
                                              </Row>
                                            </div>
                                          </div>

                                        </Column>

                                      )

                                      }
                                      {isVisible === 'cb' && (
                                        <Column>

                                          <div className="items-left justify-start mt-4 w-[100%]">

                                            <Row className="mt-2 w-full">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Title
                                              </Text>
                                              <input
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder="Field Name"
                                              ></input>
                                            </Row>

                                            <Row className="mt-2">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Instructions
                                              </Text>
                                              <input
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder="Field Instructions"
                                              ></input>
                                            </Row>

                                            <Row className="mt-2">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Required
                                              </Text>
                                              <Switch className="mx-2" />
                                            </Row>

                                            <div className="mx-3 w-[100%]">
                                              <Row className="mt-6 bg-gray_100 h-fit justify-end w-[80%] mr-6 mb-4 pb-5 mr-3">
                                                <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-10 w-[30%] mx-2 py-2 px-2 mt-5 ml-4 ">
                                                  <Row>
                                                    <FaCheck className="h-5 w-5 text-white" />
                                                    <Text
                                                      className="text-white cursor-pointer pl-2"
                                                      variant="body4"
                                                    >
                                                      Add This Field
                                                    </Text>
                                                  </Row>
                                                </Button>
                                              </Row>
                                            </div>
                                          </div>



                                        </Column>
                                      )

                                      }
                                      {isVisible === 'dd' && (
                                        <Column>

                                          <div className="items-left justify-start mt-4 w-[100%]">

                                            <Row className="mt-2 w-full">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Title
                                              </Text>
                                              <input
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder="Field Name"
                                              ></input>
                                            </Row>

                                            <Row className="mt-2">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Instructions
                                              </Text>
                                              <input
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder="Field Instructions"
                                              ></input>
                                            </Row>

                                            <Row className="mt-2">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Required
                                              </Text>
                                              <Switch className="mx-2" />
                                            </Row>

                                            <Row className="mt-2">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Options
                                              </Text>
                                              <div
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-50 w-[60%] 2xl:mt-2 ">
                                                <Row className="m-2 ">
                                                  <Icon path={mdiArrowAll}
                                                    title="Bag"
                                                    size={1.0}
                                                    color="orange"
                                                    className="cursor-move"
                                                  />
                                                  <input
                                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                    type="text"
                                                    size="smSrc"
                                                    required
                                                    placeholder="Option"
                                                  ></input>
                                                </Row>
                                                <Row className="m-2 ">
                                                  <Icon path={mdiArrowAll}
                                                    title="Bag"
                                                    size={1.0}
                                                    color="orange"
                                                    className="cursor-move"
                                                  />
                                                  <input
                                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                    type="text"
                                                    size="smSrc"
                                                    required
                                                    placeholder="Option"
                                                  ></input>
                                                </Row>

                                                <Row className="m-2 ">
                                                  <Icon path={mdiArrowAll}
                                                    title="Bag"
                                                    size={1.0}
                                                    color="orange"
                                                    className="cursor-move"
                                                  />
                                                  <input
                                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                    type="text"
                                                    size="smSrc"
                                                    required
                                                    placeholder="Option"
                                                  ></input>
                                                </Row>

                                              </div>
                                            </Row>

                                            <Row className="w-[100%] ml-[20%]">
                                              <Button class="bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset items-center h-fit mx-2 py-2.5 px-2.5 mt-5 ml-4 ">
                                                <Row>
                                                  <Icon path={mdiPlusBox}
                                                    title="Bag"
                                                    size={1.0}
                                                    color="white"
                                                  />
                                                  <Text
                                                    className="text-white cursor-pointer pl-2"
                                                    variant="body4"
                                                  >
                                                    Add More Options
                                                  </Text>
                                                </Row>
                                              </Button>
                                            </Row>

                                            <div className="mx-3 w-[100%]">
                                              <Row className="mt-6 bg-gray_100 h-fit justify-end w-[80%] mr-6 mb-4 pb-5 mr-3">
                                                <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-10 w-fit mx-2 px-2 mt-5">
                                                  <Row className="items-center">
                                                    <FaCheck className="h-5 w-5 text-white" />
                                                    <Text
                                                      className="text-white cursor-pointer pl-2"
                                                      variant="body4"
                                                    >
                                                      Add This Field
                                                    </Text>
                                                  </Row>
                                                </Button>
                                              </Row>
                                            </div>
                                          </div>



                                        </Column>
                                      )

                                      }
                                      {isVisible === 'mc' && (
                                        <Column>

                                          <div className="items-left justify-start mt-4 w-[100%]">

                                            <Row className="mt-2 w-full">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Title
                                              </Text>
                                              <input
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder="Field Name"
                                              ></input>
                                            </Row>

                                            <Row className="mt-2">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Instructions
                                              </Text>
                                              <input
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder="Field Instructions"
                                              ></input>
                                            </Row>

                                            <Row className="mt-2">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Required
                                              </Text>
                                              <Switch className="mx-2" />
                                            </Row>

                                            <Row className="mt-2">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Options
                                              </Text>
                                              <div
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-50 w-[60%] 2xl:mt-2 ">
                                                <Row className="m-2 ">
                                                  <Icon path={mdiArrowAll}
                                                    title="Bag"
                                                    size={1.0}
                                                    color="orange"
                                                    className="cursor-move"
                                                  />
                                                  <input
                                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                    type="text"
                                                    size="smSrc"
                                                    required
                                                    placeholder="Option"
                                                  ></input>
                                                </Row>
                                                <Row className="m-2 ">
                                                  <Icon path={mdiArrowAll}
                                                    title="Bag"
                                                    size={1.0}
                                                    color="orange"
                                                    className="cursor-move"
                                                  />
                                                  <input
                                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                    type="text"
                                                    size="smSrc"
                                                    required
                                                    placeholder="Option"
                                                  ></input>
                                                </Row>

                                                <Row className="m-2 ">
                                                  <Icon path={mdiArrowAll}
                                                    title="Bag"
                                                    size={1.0}
                                                    color="orange"
                                                    className="cursor-move"
                                                  />
                                                  <input
                                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                    type="text"
                                                    size="smSrc"
                                                    required
                                                    placeholder="Option"
                                                  ></input>
                                                </Row>

                                              </div>
                                            </Row>

                                            <Row className="w-[100%] ml-[20%]">
                                              <Button class="bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset items-center h-fit mx-2 py-2.5 px-2.5 mt-5 ml-4 ">
                                                <Row>
                                                  <Icon path={mdiPlusBox}
                                                    title="Bag"
                                                    size={1.0}
                                                    color="white"
                                                  />
                                                  <Text
                                                    className="text-white cursor-pointer pl-2"
                                                    variant="body4"
                                                  >
                                                    Add More Options
                                                  </Text>
                                                </Row>
                                              </Button>
                                            </Row>

                                            <div className="mx-3 w-[100%]">
                                              <Row className="mt-6 bg-gray_100 h-fit justify-end w-[80%] mr-6 mb-4 pb-5 mr-3">
                                                <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-10 w-fit mx-2 px-2 mt-5">
                                                  <Row className="items-center">
                                                    <FaCheck className="h-5 w-5 text-white" />
                                                    <Text
                                                      className="text-white cursor-pointer pl-2"
                                                      variant="body4"
                                                    >
                                                      Add This Field
                                                    </Text>
                                                  </Row>
                                                </Button>
                                              </Row>
                                            </div>
                                          </div>



                                        </Column>
                                      )

                                      }
                                      {isVisible === 'lta' && (

                                        <Column>

                                          <div className="items-left justify-start mt-4 w-[100%]">

                                            <Row className="mt-2 w-full">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Title
                                              </Text>
                                              <input
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder="Field Name"
                                              ></input>
                                            </Row>

                                            <Row className="mt-2">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Instructions
                                              </Text>
                                              <input
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder="Field Instructions"
                                              ></input>
                                            </Row>

                                            <Row className="mt-2">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Required
                                              </Text>
                                              <Switch className="mx-2" />
                                            </Row>

                                            <div className="mx-3 w-[100%]">
                                              <Row className="mt-6 bg-gray_100 h-fit justify-end w-[80%] mr-6 mb-4 pb-5 mr-3">
                                                <Button class="bg-[#428BCA] hover:bg-[#4F99C6] items-center h-10 w-[30%] mx-2 px-2 mt-5 ml-4 ">
                                                  <Row>
                                                    <FaCheck className="h-5 w-5 text-white" />
                                                    <Text
                                                      className="text-white cursor-pointer pl-2"
                                                      variant="body4"
                                                    >
                                                      Add This Field
                                                    </Text>
                                                  </Row>
                                                </Button>
                                              </Row>
                                            </div>
                                          </div>

                                        </Column>

                                      )

                                      }
                                      {isVisible === 'pc' && (
                                        <Column>

                                          <div className="items-left justify-start mt-4 w-[100%]">

                                            <Row className="mt-2 w-full">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Title
                                              </Text>
                                              <input
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder="Field Name"
                                              ></input>
                                            </Row>

                                            <Row className="mt-2">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Instructions
                                              </Text>
                                              <input
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder="Field Instructions"
                                              ></input>
                                            </Row>

                                            <Row className="mt-2">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Required
                                              </Text>
                                              <Switch className="mx-2" />
                                            </Row>

                                            <Row className="mt-2">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Price
                                              </Text>
                                              <div
                                                className="mx-2 h-50 w-[60%] 2xl:mt-2 ">
                                                <Row className="m-2 items-center">
                                                  <select
                                                    class="items-center mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[20%] 2xl:mt-2"
                                                  >
                                                    <option class="items-center">+</option>
                                                    <option >-</option>
                                                  </select>
                                                  <input
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[40%] 2xl:mt-2 "
                                                    type="text"
                                                    size="smSrc"
                                                    required
                                                    placeholder="Option"
                                                  ></input>
                                                  <Text className="pt-1 text-[12px] ml-3 text-[#667E99] w-[40%]">
                                                    (hidden on waivers)
                                                  </Text>
                                                </Row>

                                              </div>
                                            </Row>


                                            <div className="mx-3 w-[100%]">
                                              <Row className="mt-6 bg-gray_100 h-fit justify-end w-[80%] mb-4 pb-5">
                                                <Button class="bg-[#428BCA] hover:bg-[#4F99C6] items-center h-10 w-fit mx-2 px-2 mt-5">
                                                  <Row className="items-center gap-2">
                                                    <FaCheck className="h-5 w-5 text-white" />
                                                    <Text
                                                      className="text-white cursor-pointer pl-2"
                                                      variant="body4"
                                                    >
                                                      Add This Field
                                                    </Text>
                                                  </Row>
                                                </Button>
                                              </Row>
                                            </div>
                                          </div>



                                        </Column>
                                      )

                                      }

                                    </Column>
                                  </Column>

                                  <Column className="w-[50%]">


                                    <div className="justify-right w-[100%]">
                                      <Row className="pt-2 items-center">
                                        <Icon path={mdiArchiveOutline}
                                          title="Bag"
                                          size={1.0}
                                          color="orange"
                                        />
                                        <Text className="text-[14px] m-1 font-light">
                                          Or used saved bundle
                                        </Text>
                                      </Row>
                                    </div>


                                    {isVisible === 'st' && (
                                      <Column>

                                        <div className="justify-start w-[100%]">

                                          <Row className="justify-center items-center mt-2 w-full border border-gray-300 h-150">
                                            <Text className="m-20 text-[14px] text-gray-900 text-center">
                                              You don't have any bundle
                                            </Text>
                                          </Row>

                                          <Row className="pt-2 items-center">
                                            <Icon path={mdiEye}
                                              title="Bag"
                                              size={1.0}
                                              color="orange"
                                            />
                                            <Text className="text-[14px] m-1 font-light">
                                              Form preview (text)
                                            </Text>
                                          </Row>

                                          <div className="items-center mt-2 w-full border border-gray-300 h-150">
                                            <Row className="m-20 mt-2 w-[100%]">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Unlabeled
                                              </Text>
                                              <input
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[40%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder=""
                                              ></input>
                                            </Row>
                                          </div>

                                        </div>



                                      </Column>
                                    )

                                    }

                                    {isVisible === 'cb' && (
                                      <Column>

                                        <div className="justify-start w-[100%]">

                                          <Row className="justify-center items-center mt-2 w-full border border-gray-300 h-150">
                                            <Text className="m-20 text-[14px] text-gray-900 text-center">
                                              You don't have any bundle
                                            </Text>
                                          </Row>

                                          <Row className="pt-2 items-center">
                                            <Icon path={mdiEye}
                                              title="Bag"
                                              size={1.0}
                                              color="orange"
                                            />
                                            <Text className="text-[14px] m-1 font-light">
                                              Form preview (checkbox)
                                            </Text>
                                          </Row>

                                          <div className="items-center mt-2 w-full border border-gray-300 h-150">
                                            <Row className="m-20 mt-2 w-[100%] items-center gap-2">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Unlabeled
                                              </Text>
                                              <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            </Row>
                                          </div>

                                        </div>



                                      </Column>
                                    )

                                    }
                                    {isVisible === 'dd' && (
                                      <Column>

                                        <div className="justify-start w-[100%]">

                                          <Row className="justify-center items-center mt-2 w-full border border-gray-300 h-150">
                                            <Text className="m-20 text-[14px] text-gray-900 text-center">
                                              You don't have any bundle
                                            </Text>
                                          </Row>

                                          <Row className="pt-2 items-center">
                                            <Icon path={mdiEye}
                                              title="Bag"
                                              size={1.0}
                                              color="orange"
                                            />
                                            <Text className="text-[14px] m-1 font-light">
                                              Form preview (select)
                                            </Text>
                                          </Row>

                                          <div className="items-center mt-2 w-full border border-gray-300 h-150">
                                            <Row className="m-20 mt-2 w-[100%] items-center gap-2">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Unlabeled
                                              </Text>
                                              <input
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[40%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder=""
                                              ></input>
                                            </Row>
                                          </div>

                                        </div>



                                      </Column>
                                    )

                                    }
                                    {isVisible === 'mc' && (
                                      <Column>

                                        <div className="justify-start w-[100%]">

                                          <Row className="justify-center items-center mt-2 w-full border border-gray-300 h-150">
                                            <Text className="m-20 text-[14px] text-gray-900 text-center">
                                              You don't have any bundle
                                            </Text>
                                          </Row>

                                          <Row className="pt-2 items-center">
                                            <Icon path={mdiEye}
                                              title="Bag"
                                              size={1.0}
                                              color="orange"
                                            />
                                            <Text className="text-[14px] m-1 font-light">
                                              Form preview (multiselect)
                                            </Text>
                                          </Row>

                                          <div className="items-center mt-2 w-full border border-gray-300 h-150">
                                            <Row className="m-20 mt-2 w-[100%] items-center gap-2">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Unlabeled
                                              </Text>
                                              <textarea />
                                            </Row>
                                          </div>

                                        </div>



                                      </Column>
                                    )

                                    }
                                    {isVisible === 'lta' && (
                                      <Column>

                                        <div className="justify-start w-[100%]">

                                          <Row className="justify-center items-center mt-2 w-full border border-gray-300 h-150">
                                            <Text className="m-20 text-[14px] text-gray-900 text-center">
                                              You don't have any bundle
                                            </Text>
                                          </Row>

                                          <Row className="pt-2 items-center">
                                            <Icon path={mdiEye}
                                              title="Bag"
                                              size={1.0}
                                              color="orange"
                                            />
                                            <Text className="text-[14px] m-1 font-light">
                                              Form preview (textarea)
                                            </Text>
                                          </Row>

                                          <div className="items-center mt-2 w-full border border-gray-300 h-150">
                                            <Row className="m-20 mt-2 w-[100%]">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Unlabeled
                                              </Text>
                                              <textarea />
                                            </Row>
                                          </div>

                                        </div>



                                      </Column>
                                    )

                                    }
                                    {isVisible === 'pc' && (
                                      <Column>

                                        <div className="justify-start w-[100%]">

                                          <Row className="justify-center items-center mt-2 w-full border border-gray-300 h-150">
                                            <Text className="m-20 text-[14px] text-gray-900 text-center">
                                              You don't have any bundle
                                            </Text>
                                          </Row>

                                          <Row className="pt-2 items-center">
                                            <Icon path={mdiEye}
                                              title="Bag"
                                              size={1.0}
                                              color="orange"
                                            />
                                            <Text className="text-[14px] m-1 font-light">
                                              Form preview (checkbox price)
                                            </Text>
                                          </Row>

                                          <div className="items-center mt-2 w-full border border-gray-300 h-150">
                                            <Row className="m-20 mt-2 w-[100%] items-center gap-2">
                                              <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                Unlabeled
                                              </Text>
                                              <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            </Row>
                                          </div>

                                        </div>



                                      </Column>
                                    )

                                    }

                                  </Column>

                                </Row>
                              </Column>
                            </div>

                            <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
                          </>
                        ) : null}
                        <Button className="mt-2 w-fit items-center h-fit py-2.5 px-1 font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                          size="xs"
                          type="submit"
                          onClick={() => setShowModal7(true)}
                        >

                          <Icon path={mdiMenuDown}
                            title="Bag"
                            size={1.0}
                            color="white"
                          />

                        </Button>
                      </Row>
                    </Column>

                  </Row>




                </Row>
                <Text className="mt-6">Additional fields for booking</Text>
                <Row className="space-x-3">
                  <Text className="text-[#667E99] w-[23%] text-right">

                  </Text>
                  <Row className="items-center justify-start">
                    <Button className="m-1 w-fit items-center h-fit mr-2 py-2.5 px-3 font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                      size="xs"
                      type="submit"
                      onClick={() => setShowModal4(true)}>
                      <Row className="gap-2 items-center">
                        <Icon path={mdiPlusBox}
                          title="Bag"
                          size={1.0}
                          color="white"
                        />
                        <Text className="text-lg">Add Primary Forms</Text>
                      </Row>
                    </Button>
                    {showModal4 ? (
                      <>
                        <div
                          className="justify-center items-center mx-[150px] my-[100px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                          {/*Header*/}
                          <Column classname="w-[100%]">
                            <Row className="bg-[#428BCA] w-[100%] items-start justify-between">
                              <Text className="pl-3 py-5 text-xl text-white">
                                Add New Primary Form
                              </Text>
                              <FaTimes className=" mr-4 mt-6 h-5 w-5 text-white common-pointer"
                                onClick={() => setShowModal4(false)} />
                            </Row>
                          </Column>


                          {/*Body*/}

                          <Column className="bg-white w-[100%]">
                            <Row className="m-2 gap-4">
                              <Column className="w-[50%]">

                                <Row className="pt-2 items-center">
                                  <Icon path={mdiFormatIndentIncrease}
                                    title="Bag"
                                    size={1.0}
                                    color="orange"
                                  />
                                  <Text className="text-[14px] m-1 font-light">
                                    Add a new form
                                  </Text>
                                </Row>
                                <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />

                                <Row className="mt-2">
                                  <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                    Copy Form
                                  </Text>
                                  <select
                                    class="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-10 w-[50%] 2xl:mt-2"
                                  >
                                    <option value="" disabled selected hidden>Select an existing form..</option>
                                    <option className="text-[#428bca]" disabled>Checkbox</option>
                                    <option class="items-center">Do you have any medical conditions?</option>
                                    <option >Have you verified your guests information?</option>
                                  </select>
                                  <Button class="bg-[#6FB3E0] hover:bg-[#006BB8] items-center h-10 py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#6FB3E0] ring-inset"
                                    size="xs"
                                    type="submit"
                                  //   onClick={handleNavigate25}
                                  >
                                    <Row className="gap-2 items-center">

                                      <Text className="text-lg cursor-pointer">Load</Text>
                                    </Row>
                                  </Button>
                                </Row>

                                <Row className="mt-2">
                                  <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                    Show Field
                                  </Text>
                                  <select
                                    class="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-10 w-[60%] 2xl:mt-2"
                                    onChange={changeHandler}>
                                    <option value="" disabled selected hidden>Everywhere</option>
                                    <option class="items-center">Everywhere</option>
                                    <option >On Back-End Only (internal use)</option>
                                  </select>
                                </Row>

                                <Column className="mt-2">
                                  <Row className="w-[100%] gap-2">

                                    <Text className="pt-1 text-[14px] ml-3 text-right text-[#667E99] w-[20%]">
                                      Field Type
                                    </Text>


                                    <div className="w-[80%] mx-2">
                                      <select className="common-pointer w-[80%] bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500" onChange={changeHandler}>
                                        <option value="" disabled selected hidden>Short Text</option>
                                        <option className="text-[#428bca]" disabled>Normal Fields</option>
                                        <option class="items-center" value="st">Short Text</option>
                                        <option value="cb">Checkbox</option>
                                        <option value="dd">Dropdown</option>
                                        <option value="mc">Multiple Choices</option>
                                        <option value="lta">Large Text Area</option>
                                        <option className="text-[#428bca]" disabled >Price Adjustmest Fields</option>
                                        <option value="pc">Price Checkbox</option>


                                      </select>
                                    </div>

                                  </Row>


                                  {isVisible === 'st' && (

                                    <Column>

                                      <div className="items-left justify-start mt-4 w-[100%]">

                                        <Row className="mt-2 w-full">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Title
                                          </Text>
                                          <input
                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                            type="text"
                                            size="smSrc"
                                            required
                                            placeholder="Field Name"
                                          ></input>
                                        </Row>

                                        <Row className="mt-2">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Instructions
                                          </Text>
                                          <input
                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                            type="text"
                                            size="smSrc"
                                            required
                                            placeholder="Field Instructions"
                                          ></input>
                                        </Row>

                                        <Row className="mt-2">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Required
                                          </Text>
                                          <Switch className="mx-2" />
                                        </Row>

                                        <div className="mx-3 w-[100%]">
                                          <Row className="mt-6 bg-gray_100 h-fit justify-end w-[80%] mr-6 mb-4 pb-5 mr-3">
                                            <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-10 w-[30%] mx-2 px-2 mt-5 ml-4 ">
                                              <Row>
                                                <FaCheck className="h-5 w-5 text-white" />
                                                <Text
                                                  className="text-white cursor-pointer pl-2"
                                                  variant="body4"
                                                >
                                                  Add This Field
                                                </Text>
                                              </Row>
                                            </Button>
                                          </Row>
                                        </div>
                                      </div>

                                    </Column>

                                  )

                                  }
                                  {isVisible === 'cb' && (
                                    <Column>

                                      <div className="items-left justify-start mt-4 w-[100%]">

                                        <Row className="mt-2 w-full">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Title
                                          </Text>
                                          <input
                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                            type="text"
                                            size="smSrc"
                                            required
                                            placeholder="Field Name"
                                          ></input>
                                        </Row>

                                        <Row className="mt-2">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Instructions
                                          </Text>
                                          <input
                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                            type="text"
                                            size="smSrc"
                                            required
                                            placeholder="Field Instructions"
                                          ></input>
                                        </Row>

                                        <Row className="mt-2">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Required
                                          </Text>
                                          <Switch className="mx-2" />
                                        </Row>

                                        <div className="mx-3 w-[100%]">
                                          <Row className="mt-6 bg-gray_100 h-fit justify-end w-[80%] mr-6 mb-4 pb-5 mr-3">
                                            <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-10 w-[30%] mx-2 py-2 px-2 mt-5 ml-4 ">
                                              <Row>
                                                <FaCheck className="h-5 w-5 text-white" />
                                                <Text
                                                  className="text-white cursor-pointer pl-2"
                                                  variant="body4"
                                                >
                                                  Add This Field
                                                </Text>
                                              </Row>
                                            </Button>
                                          </Row>
                                        </div>
                                      </div>



                                    </Column>
                                  )

                                  }
                                  {isVisible === 'dd' && (
                                    <Column>

                                      <div className="items-left justify-start mt-4 w-[100%]">

                                        <Row className="mt-2 w-full">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Title
                                          </Text>
                                          <input
                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                            type="text"
                                            size="smSrc"
                                            required
                                            placeholder="Field Name"
                                          ></input>
                                        </Row>

                                        <Row className="mt-2">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Instructions
                                          </Text>
                                          <input
                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                            type="text"
                                            size="smSrc"
                                            required
                                            placeholder="Field Instructions"
                                          ></input>
                                        </Row>

                                        <Row className="mt-2">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Required
                                          </Text>
                                          <Switch className="mx-2" />
                                        </Row>

                                        <Row className="mt-2">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Options
                                          </Text>
                                          <div
                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-50 w-[60%] 2xl:mt-2 ">
                                            <Row className="m-2 ">
                                              <Icon path={mdiArrowAll}
                                                title="Bag"
                                                size={1.0}
                                                color="orange"
                                                className="cursor-move"
                                              />
                                              <input
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder="Option"
                                              ></input>
                                            </Row>
                                            <Row className="m-2 ">
                                              <Icon path={mdiArrowAll}
                                                title="Bag"
                                                size={1.0}
                                                color="orange"
                                                className="cursor-move"
                                              />
                                              <input
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder="Option"
                                              ></input>
                                            </Row>

                                            <Row className="m-2 ">
                                              <Icon path={mdiArrowAll}
                                                title="Bag"
                                                size={1.0}
                                                color="orange"
                                                className="cursor-move"
                                              />
                                              <input
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder="Option"
                                              ></input>
                                            </Row>

                                          </div>
                                        </Row>

                                        <Row className="w-[100%] ml-[20%]">
                                          <Button class="bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset items-center h-fit mx-2 py-2.5 px-2.5 mt-5 ml-4 ">
                                            <Row>
                                              <Icon path={mdiPlusBox}
                                                title="Bag"
                                                size={1.0}
                                                color="white"
                                              />
                                              <Text
                                                className="text-white cursor-pointer pl-2"
                                                variant="body4"
                                              >
                                                Add More Options
                                              </Text>
                                            </Row>
                                          </Button>
                                        </Row>

                                        <div className="mx-3 w-[100%]">
                                          <Row className="mt-6 bg-gray_100 h-fit justify-end w-[80%] mr-6 mb-4 pb-5 mr-3">
                                            <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-10 w-fit mx-2 px-2 mt-5">
                                              <Row className="items-center">
                                                <FaCheck className="h-5 w-5 text-white" />
                                                <Text
                                                  className="text-white cursor-pointer pl-2"
                                                  variant="body4"
                                                >
                                                  Add This Field
                                                </Text>
                                              </Row>
                                            </Button>
                                          </Row>
                                        </div>
                                      </div>



                                    </Column>
                                  )

                                  }
                                  {isVisible === 'mc' && (
                                    <Column>

                                      <div className="items-left justify-start mt-4 w-[100%]">

                                        <Row className="mt-2 w-full">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Title
                                          </Text>
                                          <input
                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                            type="text"
                                            size="smSrc"
                                            required
                                            placeholder="Field Name"
                                          ></input>
                                        </Row>

                                        <Row className="mt-2">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Instructions
                                          </Text>
                                          <input
                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                            type="text"
                                            size="smSrc"
                                            required
                                            placeholder="Field Instructions"
                                          ></input>
                                        </Row>

                                        <Row className="mt-2">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Required
                                          </Text>
                                          <Switch className="mx-2" />
                                        </Row>

                                        <Row className="mt-2">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Options
                                          </Text>
                                          <div
                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-50 w-[60%] 2xl:mt-2 ">
                                            <Row className="m-2 ">
                                              <Icon path={mdiArrowAll}
                                                title="Bag"
                                                size={1.0}
                                                color="orange"
                                                className="cursor-move"
                                              />
                                              <input
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder="Option"
                                              ></input>
                                            </Row>
                                            <Row className="m-2 ">
                                              <Icon path={mdiArrowAll}
                                                title="Bag"
                                                size={1.0}
                                                color="orange"
                                                className="cursor-move"
                                              />
                                              <input
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder="Option"
                                              ></input>
                                            </Row>

                                            <Row className="m-2 ">
                                              <Icon path={mdiArrowAll}
                                                title="Bag"
                                                size={1.0}
                                                color="orange"
                                                className="cursor-move"
                                              />
                                              <input
                                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder="Option"
                                              ></input>
                                            </Row>

                                          </div>
                                        </Row>

                                        <Row className="w-[100%] ml-[20%]">
                                          <Button class="bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset items-center h-fit mx-2 py-2.5 px-2.5 mt-5 ml-4 ">
                                            <Row>
                                              <Icon path={mdiPlusBox}
                                                title="Bag"
                                                size={1.0}
                                                color="white"
                                              />
                                              <Text
                                                className="text-white cursor-pointer pl-2"
                                                variant="body4"
                                              >
                                                Add More Options
                                              </Text>
                                            </Row>
                                          </Button>
                                        </Row>

                                        <div className="mx-3 w-[100%]">
                                          <Row className="mt-6 bg-gray_100 h-fit justify-end w-[80%] mr-6 mb-4 pb-5 mr-3">
                                            <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-10 w-fit mx-2 px-2 mt-5">
                                              <Row className="items-center">
                                                <FaCheck className="h-5 w-5 text-white" />
                                                <Text
                                                  className="text-white cursor-pointer pl-2"
                                                  variant="body4"
                                                >
                                                  Add This Field
                                                </Text>
                                              </Row>
                                            </Button>
                                          </Row>
                                        </div>
                                      </div>



                                    </Column>
                                  )

                                  }
                                  {isVisible === 'lta' && (

                                    <Column>

                                      <div className="items-left justify-start mt-4 w-[100%]">

                                        <Row className="mt-2 w-full">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Title
                                          </Text>
                                          <input
                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                            type="text"
                                            size="smSrc"
                                            required
                                            placeholder="Field Name"
                                          ></input>
                                        </Row>

                                        <Row className="mt-2">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Instructions
                                          </Text>
                                          <input
                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                            type="text"
                                            size="smSrc"
                                            required
                                            placeholder="Field Instructions"
                                          ></input>
                                        </Row>

                                        <Row className="mt-2">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Required
                                          </Text>
                                          <Switch className="mx-2" />
                                        </Row>

                                        <div className="mx-3 w-[100%]">
                                          <Row className="mt-6 bg-gray_100 h-fit justify-end w-[80%] mr-6 mb-4 pb-5 mr-3">
                                            <Button class="bg-[#428BCA] hover:bg-[#4F99C6] items-center h-10 w-[30%] mx-2 px-2 mt-5 ml-4 ">
                                              <Row>
                                                <FaCheck className="h-5 w-5 text-white" />
                                                <Text
                                                  className="text-white cursor-pointer pl-2"
                                                  variant="body4"
                                                >
                                                  Add This Field
                                                </Text>
                                              </Row>
                                            </Button>
                                          </Row>
                                        </div>
                                      </div>

                                    </Column>

                                  )

                                  }
                                  {isVisible === 'pc' && (
                                    <Column>

                                      <div className="items-left justify-start mt-4 w-[100%]">

                                        <Row className="mt-2 w-full">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Title
                                          </Text>
                                          <input
                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                            type="text"
                                            size="smSrc"
                                            required
                                            placeholder="Field Name"
                                          ></input>
                                        </Row>

                                        <Row className="mt-2">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Instructions
                                          </Text>
                                          <input
                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                            type="text"
                                            size="smSrc"
                                            required
                                            placeholder="Field Instructions"
                                          ></input>
                                        </Row>

                                        <Row className="mt-2">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Required
                                          </Text>
                                          <Switch className="mx-2" />
                                        </Row>

                                        <Row className="mt-2">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Price
                                          </Text>
                                          <div
                                            className="mx-2 h-50 w-[60%] 2xl:mt-2 ">
                                            <Row className="m-2 items-center">
                                              <select
                                                class="items-center mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[20%] 2xl:mt-2"
                                              >
                                                <option class="items-center">+</option>
                                                <option >-</option>
                                              </select>
                                              <input
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[40%] 2xl:mt-2 "
                                                type="text"
                                                size="smSrc"
                                                required
                                                placeholder="Option"
                                              ></input>
                                              <Text className="pt-1 text-[12px] ml-3 text-[#667E99] w-[40%]">
                                                (hidden on waivers)
                                              </Text>
                                            </Row>

                                          </div>
                                        </Row>


                                        <div className="mx-3 w-[100%]">
                                          <Row className="mt-6 bg-gray_100 h-fit justify-end w-[80%] mb-4 pb-5">
                                            <Button class="bg-[#428BCA] hover:bg-[#4F99C6] items-center h-10 w-fit mx-2 px-2 mt-5">
                                              <Row className="items-center gap-2">
                                                <FaCheck className="h-5 w-5 text-white" />
                                                <Text
                                                  className="text-white cursor-pointer pl-2"
                                                  variant="body4"
                                                >
                                                  Add This Field
                                                </Text>
                                              </Row>
                                            </Button>
                                          </Row>
                                        </div>
                                      </div>

                                    </Column>
                                  )

                                  }

                                </Column>

                             </Column>

                              <Column className="w-[50%]">


                                <div className="justify-right w-[100%]">
                                  <Row className="pt-2 items-center">
                                    <Icon path={mdiArchiveOutline}
                                      title="Bag"
                                      size={1.0}
                                      color="orange"
                                    />
                                    <Text className="text-[14px] m-1 font-light">
                                      Or used saved bundle
                                    </Text>
                                  </Row>
                                </div>


                                {isVisible === 'st' && (
                                  <Column>

                                    <div className="justify-start w-[100%]">

                                      <Row className="justify-center items-center mt-2 w-full border border-gray-300 h-150">
                                        <Text className="m-20 text-[14px] text-gray-900 text-center">
                                          You don't have any bundle
                                        </Text>
                                      </Row>

                                      <Row className="pt-2 items-center">
                                        <Icon path={mdiEye}
                                          title="Bag"
                                          size={1.0}
                                          color="orange"
                                        />
                                        <Text className="text-[14px] m-1 font-light">
                                          Form preview (text)
                                        </Text>
                                      </Row>

                                      <div className="items-center mt-2 w-full border border-gray-300 h-150">
                                        <Row className="m-20 mt-2 w-[100%]">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Unlabeled
                                          </Text>
                                          <input
                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[40%] 2xl:mt-2 "
                                            type="text"
                                            size="smSrc"
                                            required
                                            placeholder=""
                                          ></input>
                                        </Row>
                                      </div>

                                    </div>



                                  </Column>
                                )

                                }

                                {isVisible === 'cb' && (
                                  <Column>

                                    <div className="justify-start w-[100%]">

                                      <Row className="justify-center items-center mt-2 w-full border border-gray-300 h-150">
                                        <Text className="m-20 text-[14px] text-gray-900 text-center">
                                          You don't have any bundle
                                        </Text>
                                      </Row>

                                      <Row className="pt-2 items-center">
                                        <Icon path={mdiEye}
                                          title="Bag"
                                          size={1.0}
                                          color="orange"
                                        />
                                        <Text className="text-[14px] m-1 font-light">
                                          Form preview (checkbox)
                                        </Text>
                                      </Row>

                                      <div className="items-center mt-2 w-full border border-gray-300 h-150">
                                        <Row className="m-20 mt-2 w-[100%] items-center gap-2">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Unlabeled
                                          </Text>
                                          <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        </Row>
                                      </div>

                                    </div>



                                  </Column>
                                )

                                }
                                {isVisible === 'dd' && (
                                  <Column>

                                    <div className="justify-start w-[100%]">

                                      <Row className="justify-center items-center mt-2 w-full border border-gray-300 h-150">
                                        <Text className="m-20 text-[14px] text-gray-900 text-center">
                                          You don't have any bundle
                                        </Text>
                                      </Row>

                                      <Row className="pt-2 items-center">
                                        <Icon path={mdiEye}
                                          title="Bag"
                                          size={1.0}
                                          color="orange"
                                        />
                                        <Text className="text-[14px] m-1 font-light">
                                          Form preview (select)
                                        </Text>
                                      </Row>

                                      <div className="items-center mt-2 w-full border border-gray-300 h-150">
                                        <Row className="m-20 mt-2 w-[100%] items-center gap-2">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Unlabeled
                                          </Text>
                                          <input
                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[40%] 2xl:mt-2 "
                                            type="text"
                                            size="smSrc"
                                            required
                                            placeholder=""
                                          ></input>
                                        </Row>
                                      </div>

                                    </div>



                                  </Column>
                                )

                                }
                                {isVisible === 'mc' && (
                                  <Column>

                                    <div className="justify-start w-[100%]">

                                      <Row className="justify-center items-center mt-2 w-full border border-gray-300 h-150">
                                        <Text className="m-20 text-[14px] text-gray-900 text-center">
                                          You don't have any bundle
                                        </Text>
                                      </Row>

                                      <Row className="pt-2 items-center">
                                        <Icon path={mdiEye}
                                          title="Bag"
                                          size={1.0}
                                          color="orange"
                                        />
                                        <Text className="text-[14px] m-1 font-light">
                                          Form preview (multiselect)
                                        </Text>
                                      </Row>

                                      <div className="items-center mt-2 w-full border border-gray-300 h-150">
                                        <Row className="m-20 mt-2 w-[100%] items-center gap-2">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Unlabeled
                                          </Text>
                                          <textarea />
                                        </Row>
                                      </div>

                                    </div>



                                  </Column>
                                )

                                }
                                {isVisible === 'lta' && (
                                  <Column>

                                    <div className="justify-start w-[100%]">

                                      <Row className="justify-center items-center mt-2 w-full border border-gray-300 h-150">
                                        <Text className="m-20 text-[14px] text-gray-900 text-center">
                                          You don't have any bundle
                                        </Text>
                                      </Row>

                                      <Row className="pt-2 items-center">
                                        <Icon path={mdiEye}
                                          title="Bag"
                                          size={1.0}
                                          color="orange"
                                        />
                                        <Text className="text-[14px] m-1 font-light">
                                          Form preview (textarea)
                                        </Text>
                                      </Row>

                                      <div className="items-center mt-2 w-full border border-gray-300 h-150">
                                        <Row className="m-20 mt-2 w-[100%]">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Unlabeled
                                          </Text>
                                          <textarea />
                                        </Row>
                                      </div>

                                    </div>



                                  </Column>
                                )

                                }
                                {isVisible === 'pc' && (
                                  <Column>

                                    <div className="justify-start w-[100%]">

                                      <Row className="justify-center items-center mt-2 w-full border border-gray-300 h-150">
                                        <Text className="m-20 text-[14px] text-gray-900 text-center">
                                          You don't have any bundle
                                        </Text>
                                      </Row>

                                      <Row className="pt-2 items-center">
                                        <Icon path={mdiEye}
                                          title="Bag"
                                          size={1.0}
                                          color="orange"
                                        />
                                        <Text className="text-[14px] m-1 font-light">
                                          Form preview (checkbox price)
                                        </Text>
                                      </Row>

                                      <div className="items-center mt-2 w-full border border-gray-300 h-150">
                                        <Row className="m-20 mt-2 w-[100%] items-center gap-2">
                                          <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                            Unlabeled
                                          </Text>
                                          <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        </Row>
                                      </div>

                                    </div>



                                  </Column>
                                )

                                }

                              </Column>

                            </Row>
                          </Column>
                        </div>

                        <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
                      </>
                    ) : null}

                    <Button className="w-fit items-center h-fit py-2.5 px-1 font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                      size="xs"
                      type="submit"
                      onClick={() => setShowModal7(true)}
                    >

                      <Icon path={mdiMenuDown}
                        title="Bag"
                        size={1.0}
                        color="white"
                      />

                    </Button>
                    {showModal7 ? (
                      <>
                        <div
                          className="justify-center items-center mx-[400px] my-[150px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                          {/*Header*/}
                          <Column classname="w-[100%]">
                            <Row className="bg-[#428BCA] w-[100%] items-start justify-between">
                              <Text className="pl-3 py-5 text-xl text-white">
                                Create New Label
                              </Text>
                              <FaTimes className=" mr-4 mt-6 h-5 w-5 text-white common-pointer"
                                onClick={() => setShowModal7(false)} />
                            </Row>
                          </Column>


                          {/*Body*/}

                          <Column className="bg-white w-[100%]">
                            <Row className="mt-2">
                              <input
                                className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                                type="text"
                                size="smSrc"
                                required
                                placeholder=""
                              ></input>
                            </Row>


                            <Row className="mt-2 flex items-center justify-end p-3 border-t border-solid border-slate-200 bg-[#EFF3F8]">

                              <button
                                className="text-white bg-[#ABBAC3] hover:bg-[#8B9AA3] font-bold  px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal7(false)}
                              >
                                Cancel
                              </button>
                              <button
                                className="bg-[#428BCA] hover:bg-[#1B6AAA] text-white active:bg-emerald-600 font-bold  text-sm px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal7(false)}
                              >
                                OK
                              </button>

                            </Row>
                          </Column>

                        </div>

                        <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>

                      </>
                    ) : null}

                  </Row>
                </Row>

              </div>
            </Column>

            <Row className="pt-6">
              <Text className="text-[19px] m-1 font-regular">
                Option Settings
              </Text>
              <Text className="text-[14px] m-1 pt-2 font-light">
                Set up booking assignments and notifications
              </Text>
            </Row>
            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />

            <Row className="mt-4">
              <Column className="w-[60%] m-2 font-regular">
                <div className="space-y-3">
                  <Row className="space-x-3">
                    <Text className="text-[#667E99] w-[30%] text-right">
                      Email Alerts
                    </Text>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                      type="text"
                      size="smSrc"
                      required
                      placeholder="Comma Separated Addresses" />
                  </Row>

                  <Row className="space-x-3">
                    <Text className="text-[#667E99] w-[30%] text-right">
                      Booking Labels
                    </Text>
                    <Row className="gap-4 justify-between w-[100%]">
                      <Column className="w-[80%]">
                        <input
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                          type="text"
                          size="smSrc"
                          required
                          placeholder="Select Booking Labels" />
                      </Column>
                      <Column className="w-[25%] items-end">
                        <Button className="m-1 w-fit items-center h-fit mr-2 py-2.0 px-3 font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                          size="xs"
                          type="submit"
                          onClick={() => setShowModal5(true)}>
                          <Row className="gap-2 items-center">
                            <Icon path={mdiPlusBox}
                              title="Bag"
                              size={1.0}
                              color="white"
                            />
                            <Text className="text-lg">Create New</Text>
                          </Row>
                        </Button>
                      </Column>
                      {showModal5 ? (
                        <>
                          <div
                            className="justify-center items-center mx-[400px] my-[150px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                          >
                            {/*Header*/}
                            <Column classname="w-[100%]">
                              <Row className="bg-[#428BCA] w-[100%] items-start justify-between">
                                <Text className="pl-3 py-5 text-xl text-white">
                                  Create New Label
                                </Text>
                                <FaTimes className=" mr-4 mt-6 h-5 w-5 text-white common-pointer"
                                  onClick={() => setShowModal5(false)} />
                              </Row>
                            </Column>


                            {/*Body*/}

                            <Column className="bg-white w-[100%]">
                              <Row className="mt-2">
                                <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[15%] text-right ">
                                  Name
                                </Text>
                                <input
                                  className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                  type="text"
                                  size="smSrc"
                                  required
                                  placeholder="Enter new label name"
                                ></input>
                              </Row>

                              <Row className="mt-2">
                                <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[15%] text-right ">
                                  Group
                                </Text>
                                <select
                                  class="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-10 w-[40%] 2xl:mt-2"
                                >
                                  {/* <option selected> Booking Manager</option> */}
                                  <option selected> General</option>
                                </select>


                              </Row>


                              <Row className="mt-2 flex items-center justify-end p-3 border-t border-solid border-slate-200 bg-[#EFF3F8]">

                                <button
                                  className="text-white bg-[#ABBAC3] hover:bg-[#8B9AA3] font-bold  px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setShowModal5(false)}
                                >
                                  Cancel
                                </button>
                                <button
                                  className="bg-[#428BCA] hover:bg-[#1B6AAA] text-white active:bg-emerald-600 font-bold  text-sm px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setShowModal5(false)}
                                >
                                  OK
                                </button>

                              </Row>
                            </Column>

                          </div>

                          <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>

                        </>
                      ) : null}
                    </Row>
                  </Row>

                  <Row className="space-x-3">
                    <Text className="text-[#667E99] w-[23%] text-right">
                      External Code
                    </Text>



                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[40%] 2xl:mt-2 "
                      type="text"
                      size="smSrc"
                      required
                      placeholder="External Code or ID" />
                  </Row>

                  <Row className="space-x-3">
                    <Text className="text-[#667E99] w-[30%] text-right">
                      Assign Bookings
                    </Text>
                    <Column className="w-[100%]">
                      <div class="mb-5 w-[100%]">
                        <input type="checkbox" name="agree" id="agree-1" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                        <div class="mt-2 hidden peer-checked:block">

                          <Column className="w-[100%] m-2 font-regular">
                            <div className="space-y-3">
                              <Row className="space-x-3">
                                <Text className="text-[#667E99] w-[30%] text-right ">
                                  To User
                                </Text>
                                <SelectUser className="w-[100%]" />
                              </Row>

                              <Row className="space-x-3">
                                <Text className="text-[#667E99] w-[30%] text-right ">
                                  To Group
                                </Text>
                                <SelectGroup className="w-[100%]" />
                              </Row>

                            </div>
                          </Column>

                        </div>
                      </div>



                    </Column>
                  </Row>

                  <Row className="space-x-3">
                    <Text className="text-[#667E99] w-[30%] text-right">
                      Offer Pickups
                    </Text>
                    <Column className="w-[100%]">
                      <div class="mb-2 w-[100%]">
                        <input type="checkbox" name="agree" id="agree-1" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                        <div class="mt-2 hidden peer-checked:block">

                          <Column className="w-[100%] m-2 font-regular">
                            <div className="space-y-3">
                              <Row className="space-x-3">
                                <Text className="text-[#667E99] w-[30%] text-right ">
                                  Location Tags
                                </Text>
                                <Column className="w-full">
                                  <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                                    type="text"
                                    size="smSrc"
                                    required
                                    placeholder="Select Location Tags"
                                  ></input>
                                  <Text>Only pickup locations with these tags will be offered
                                  </Text>
                                </Column>
                              </Row>

                              <Row className="space-x-3">
                                <Text className="text-[#667E99] w-[30%] text-right">
                                  Adjust All Times
                                </Text>
                                <Row className="gap-2 w-[100%]">
                                  <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[20%] 2xl:mt-2 "
                                    type="text"
                                    size="smSrc"
                                    required
                                    placeholder="Minutes"
                                  ></input>
                                  <Text className="w-[80%] m-1">
                                    Add an offset for all pickup times at once
                                  </Text>
                                </Row>

                              </Row>

                              <Row className="space-x-3">
                                <Text className="text-[#667E99] w-[30%] text-right ">
                                  Locations
                                </Text>
                                <Column className="mt-8 w-full">
                                  <Text className="text-lg">Your tag combination had no results </Text>
                                </Column>
                              </Row>

                            </div>
                          </Column>

                        </div>
                      </div>
                    </Column>
                  </Row>

                </div>
              </Column>
            </Row>

            <div className="mr-3 w-full">
              <Row className="mt-6 bg-gray_100 h-fit justify-start items-start w-[100%] mr-6 mb-10 pb-5 mr-3">
                <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset ml-3 mt-3"
                  size="xs"
                  type="submit"
                //   onClick={handleNavigate25}
                >
                  <Row className="gap-2 items-center">
                    <Icon path={mdiCheck}
                      title="Bag"
                      size={1.0}
                      color="white"
                    />
                    <Text className="text-lg cursor-pointer">Create Option</Text>
                  </Row>
                </Button>
              </Row>
            </div>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default CreateOption;

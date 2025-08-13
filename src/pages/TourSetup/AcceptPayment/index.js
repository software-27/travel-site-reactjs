import React, { useState } from "react";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/index";
import Topbtns from "components/Topbutton/index";
import { Column, Row, Text, Img, Line, Button, Switch } from "components";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { FaCheck, FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import Icon from "@mdi/react";
import { mdiOpenInNew } from "@mdi/js";

const AcceptPayment = () => {
  const [showhide, setShowhide] = useState("");
  const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };

  //for popup
  const [showModal, setShowModal] = React.useState(false);
  //for popup
  const [showModal1, setShowModal1] = React.useState(false);
  //for popup
  const [showModal2, setShowModal2] = React.useState(false);

  return (
    <>
      <Header className="w-[100%]" />
      <Column className="bg-white h-fit w-[100%]">
        <Row className="bg-gray_100 h-fit justify-start items-start w-[100%]">
          <Topbtns />
        </Row>
        <Row className="w-[100%]">
          <Sidebar />

          <Row className="p-2 w-[100%]">
            <Column className="mx-3 w-[100%]">
              <Row>
                <Text className="font-light text-[#4C8FBD] text-2xl">
                  Setting
                </Text>
                <AiOutlineDoubleRight class="ml-2 mt-3 text-[#667E99]" />
                <Text className="font-light text-[#667E99] text-base mt-2 pl-1">
                  Accept Payment
                </Text>
              </Row>

              <Line className=" bg-gray_700_33 h-[0.5px] mt-4 w-[100%]" />

              <Column className="w-[100%] h-fit mt-5">
                <Button
                  size="sm"
                  class="w-[100%] common-pointer flex items-center px-2 h-[50px] focus:bg-blue-500 hover:bg-blue-500 bg-gray_50 border border-gray-300 text-gray-900 text-sm rounded-xl"
                >
                  <input
                    id="bordered-radio-1"
                    type="checkbox"
                    value="a"
                    name="bordered-radio1"
                    checked={showhide === "a"}
                    class="w-6 h-6 rounded-full text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onClick={handleshow}
                  />
                  <label
                    for="bordered-radio-1"
                    class="text-[#667E99] p-2 w-full text-xl font-sans font-normal text-left"
                  >
                    Use Stripe
                  </label>
                </Button>

                <Button class="mt-2 w-[100%] flex common-pointer focus:bg-blue-500 hover:bg-blue-500 items-center px-2 h-[50px] bg-gray_50 border border-gray-300 text-gray-900 text-sm rounded-xl">
                  <input
                    id="bordered-radio-2"
                    type="checkbox"
                    value="b"
                    name="bordered-radio2"
                    checked={showhide === "b"}
                    class="w-6 h-6 rounded-full text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onClick={handleshow}
                  />
                  <label
                    for="bordered-radio-2"
                    class="p-2 w-full text-xl font-normal font-sans text-[#667E99] text-left"
                  >
                    {" "}
                    Use a Merchant Gateway
                  </label>
                </Button>

                {showhide === "b" && (
                  <Column className="w-[100%] h-fit">
                    <Row>
                      <Button class="mt-4 mb-2 mr-2 bg-[#87b87f] hover:bg-[#629b58] items-center h-8 w-[23%] px-2 ring-4 ring-[#87b87f] ring-inset">
                        <Row>
                          <FaPlus className="h-4 w-4 text-white font-light " />
                          <Text
                            className="pl-1 font-light text-white cursor-pointer pr-1 "
                            variant="body4"
                          >
                            Attach Merchant Gateway
                          </Text>
                        </Row>
                      </Button>

                      <Text class="mt-3 mb-2">
                        Process payments through your chosen merchant gateway.
                        <br /> HalalHoliday supports a wide variety of popular
                        merchant gateways
                      </Text>
                    </Row>
                  </Column>
                )}

                <Button class="mt-2 w-[100%] flex items-center common-pointer focus:bg-blue-500 hover:bg-blue-500 px-2 h-[50px] bg-gray_50 border border-gray-300 text-gray-900 text-sm rounded-xl">
                  <input
                    id="bordered-radio-3"
                    type="checkbox"
                    value="c"
                    name="bordered-radio3"
                    checked={showhide === "c"}
                    class="w-6 h-6 rounded-full text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onClick={handleshow}
                  />
                  <label
                    for="bordered-radio-3"
                    class="p-2 w-full text-xl font-normal font-sans text-[#667E99] text-left"
                  >
                    Do Not Take Credit Card Payments
                  </label>
                </Button>
              </Column>

              <Row>
                <Text className="font-light text-black text-xl mt-6">
                  Paypal Button
                </Text>
              </Row>

              <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

              <Column>
                <Button
                  class="mt-2 bg-[#87b87f] hover:bg-[#629b58] items-center h-8 w-[17%] px-2 ring-4 ring-[#87b87f] ring-inset"
                  onClick={() => setShowModal(true)}
                >
                  <Row>
                    <FaPlus className="h-4 w-4 text-white font-light " />
                    <Text
                      className="pl-1 font-light text-white cursor-pointer pr-1 "
                      variant="body4"
                    >
                      Attach Paypal Account
                    </Text>
                  </Row>
                </Button>

                {showModal ? (
                  <>
                    <div className="justify-center items-center mx-[350px] my-[120px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      {/*Header*/}
                      <Column classname="w-[100%]">
                        <Row className="bg-[#428BCA] w-[100%] items-start justify-between">
                          <Text className="pl-3 py-5 text-xl text-white font-light">
                            Attach a PayPal Account
                          </Text>
                          <FaTimes
                            className=" mr-4 mt-6 h-5 w-5 text-white common-pointer"
                            onClick={() => setShowModal(false)}
                          />
                        </Row>
                      </Column>

                      {/*Body*/}

                      <Column className="bg-white w-[100%] mr-4">
                        <Row className=" mt-2 my-2 ml-3 flex items-end justify-end p-3   mr-3 ">
                          <Row>
                            <FaExternalLinkAlt className="h-5 w-4 text-[#428bca] font-light common-pointer" />
                            <Text
                              className="pl-1 font-light text-[#428bca] common-pointer pr-1 "
                              variant="body4"
                            >
                              Click here for setup instructions
                            </Text>
                          </Row>
                        </Row>
                        <Row className="mt-1 mr-2">
                          <Text className="pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                            PayPal Email
                          </Text>
                          <input
                            className="placeholder-[#d5d5d5] mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                            type="text"
                            size="smSrc"
                            required
                          ></input>
                        </Row>

                        <Row className=" mt-6 my-3 ml-3 flex items-end justify-end p-3 border-t border-solid border-slate-200 bg-[#EFF3F8] mr-3 ">
                          <button
                            className="bg-[#4C8FBD] hover:bg-[#006BB8] ring ring-[#4C8FBD] ring-inset text-white text-sm px-6 py-3 ring-3"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            <Row>
                              <FaCheck className="h-5 w-4 text-white font-light " />
                              <Text
                                className="pl-1 font-light text-white cursor-pointer pr-1 "
                                variant="body4"
                              >
                                Attach Account
                              </Text>
                            </Row>
                          </button>
                        </Row>
                      </Column>
                    </div>

                    <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}

                <Row>
                  <Text class="text-sm font-light break-after-column mt-2">
                    Accept payments after bookings are completed using your
                    PayPal Account.
                  </Text>
                </Row>

                <Row>
                  <Text class="text-sm font-light break-after-column mb-4">
                    A PayPal "Pay Now" button will be added to the final booking
                    step.
                  </Text>
                </Row>
              </Column>

              <Column>
                <Row>
                  <Text className="font-light text-black text-xl">
                    Manual Payment Methods
                  </Text>
                </Row>

                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />
                <Button
                  class="mt-2 bg-[#87b87f] hover:bg-[#629b58] items-center h-8 w-[24%] px-2 ring-4 ring-[#87b87f] ring-inset"
                  onClick={() => setShowModal1(true)}
                >
                  <Row>
                    <FaPlus className="h-4 w-4 text-white font-light " />
                    <Text
                      className="pl-1 font-light text-white cursor-pointer pr-1 "
                      variant="body4"
                    >
                      Add Manual Payment Method
                    </Text>
                  </Row>
                </Button>

                {showModal1 ? (
                  <>
                    <div className="justify-center items-center mx-[350px] my-[120px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      {/*Header*/}
                      <Column classname="w-[100%]">
                        <Row className="bg-[#428BCA] w-[100%] items-start justify-between">
                          <Text className="pl-3 py-5 text-xl text-white font-light">
                            Add a Payment Method
                          </Text>
                          <FaTimes
                            className=" mr-4 mt-6 h-5 w-5 text-white common-pointer"
                            onClick={() => setShowModal1(false)}
                          />
                        </Row>
                      </Column>

                      {/*Body*/}

                      <Column className="bg-white w-[100%] mr-4">
                        <Row className="mt-3 mr-2">
                          <Text className="pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[25%] text-right ">
                            Method Name
                          </Text>
                          <input
                            className="placeholder-[#d5d5d5] ml-5 mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[75%] 2xl:mt-2 "
                            type="text"
                            size="smSrc"
                            required
                            placeholder="Payment method name"
                          ></input>
                        </Row>

                        <Row className="mt-1 mb-2">
                          <Column class="w-[100%]">
                            <div class="">
                              <Row>
                                <input
                                  type="checkbox"
                                  name="agree"
                                  id="agree"
                                  class="ml-[75px] mt-3.5 peer h-4 w-4 border border-gray_501 focus:border-gray_501 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-gray_501 align-top bg-no-repeat float-left mr-2 cursor-pointer"
                                />

                                <label
                                  for="agree"
                                  className="text-[14px] text-[#667E99] mt-3"
                                >
                                  Get a value
                                </label>

                                <div class="mt-2 hidden peer-checked:block">
                                  <Column className="w-[100%]">
                                    <Row>
                                      <input
                                        className="placeholder-[#d5d5d5] ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                                        type="text"
                                        size="smSrc"
                                        required
                                        placeholder="Label required"
                                      ></input>

                                      <Text className="pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[100%] text-right ">
                                        (Capture a card or ID value)
                                      </Text>
                                    </Row>
                                  </Column>
                                </div>
                              </Row>
                            </div>
                          </Column>
                        </Row>

                        <Row className=" mt-6 my-3 ml-3 flex items-end justify-end p-3 border-t border-solid border-slate-200 bg-[#EFF3F8] mr-3 ">
                          <button
                            className="bg-[#4C8FBD] hover:bg-[#006BB8] ring ring-[#4C8FBD] ring-inset text-white text-sm px-6 py-3 ring-3"
                            type="button"
                            onClick={() => setShowModal1(false)}
                          >
                            <Row>
                              <FaCheck className="h-5 w-4 text-white font-light " />
                              <Text
                                className="pl-1 font-light text-white cursor-pointer pr-1 "
                                variant="body4"
                              >
                                Add Payment Method
                              </Text>
                            </Row>
                          </button>
                        </Row>
                      </Column>
                    </div>

                    <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}

                <Row>
                  <Text class="text-sm font-light break-after-column mt-2">
                    These are manual payment methods that are displayed on the
                    point of sale and the front end.
                  </Text>
                </Row>

                <Row>
                  <Text class="text-sm font-light break-after-column mb-4">
                    Your customers will receive a 'Payment Pending' notice when
                    they book using these methods.
                  </Text>
                </Row>
              </Column>

              <Column>
                <Row>
                  <Text className="font-light text-black text-xl">
                    Point of Sale Payment Methods
                  </Text>
                </Row>

                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />
                <Button class="mt-2 bg-[#87b87f] hover:bg-[#629b58] items-center h-8 w-[24%] px-2 ring-4 ring-[#87b87f] ring-inset"
                onClick={() => setShowModal1(true)}>
                  <Row>
                    <FaPlus className="h-4 w-4 text-white font-light " />
                    <Text
                      className="pl-1 font-light text-white cursor-pointer pr-1 "
                      variant="body4"
                    >
                      Add Point of Sale Payment Method
                    </Text>
                  </Row>
                </Button>

                {showModal2 ? (
                  <>
                    <div className="justify-center items-center mx-[350px] my-[120px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      {/*Header*/}
                      <Column classname="w-[100%]">
                        <Row className="bg-[#428BCA] w-[100%] items-start justify-between">
                          <Text className="pl-3 py-5 text-xl text-white font-light">
                            Add a Payment Method
                          </Text>
                          <FaTimes
                            className=" mr-4 mt-6 h-5 w-5 text-white common-pointer"
                            onClick={() => setShowModal2(false)}
                          />
                        </Row>
                      </Column>

                      {/*Body*/}

                      <Column className="bg-white w-[100%] mr-4">
                        <Row className="mt-3 mr-2">
                          <Text className="pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[25%] text-right ">
                            Method Name
                          </Text>
                          <input
                            className="placeholder-[#d5d5d5] ml-5 mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[75%] 2xl:mt-2 "
                            type="text"
                            size="smSrc"
                            required
                            placeholder="Payment method name"
                          ></input>
                        </Row>

                        <Row className="mt-1 mb-2">
                          <Column class="w-[100%]">
                            <div class="">
                              <Row>
                                <input
                                  type="checkbox"
                                  name="agree"
                                  id="agree"
                                  class="ml-[75px] mt-3.5 peer h-4 w-4 border border-gray_501 focus:border-gray_501 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-gray_501 align-top bg-no-repeat float-left mr-2 cursor-pointer"
                                />

                                <label
                                  for="agree"
                                  className="text-[14px] text-[#667E99] mt-3"
                                >
                                  Get a value
                                </label>

                                <div class="mt-2 hidden peer-checked:block">
                                  <Column className="w-[100%]">
                                    <Row>
                                      <input
                                        className="placeholder-[#d5d5d5] ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                                        type="text"
                                        size="smSrc"
                                        required
                                        placeholder="Label required"
                                      ></input>

                                      <Text className="pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[100%] text-right ">
                                        (Capture a card or ID value)
                                      </Text>
                                    </Row>
                                  </Column>
                                </div>
                              </Row>
                            </div>
                          </Column>
                        </Row>

                        <Row className=" mt-6 my-3 ml-3 flex items-end justify-end p-3 border-t border-solid border-slate-200 bg-[#EFF3F8] mr-3 ">
                          <button
                            className="bg-[#4C8FBD] hover:bg-[#006BB8] ring ring-[#4C8FBD] ring-inset text-white text-sm px-6 py-3 ring-3"
                            type="button"
                            onClick={() => setShowModal2(false)}
                          >
                            <Row>
                              <FaCheck className="h-5 w-4 text-white font-light " />
                              <Text
                                className="pl-1 font-light text-white cursor-pointer pr-1 "
                                variant="body4"
                              >
                                Add Payment Method
                              </Text>
                            </Row>
                          </button>
                        </Row>
                      </Column>
                    </div>

                    <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}

                <Row>
                  <Text class="text-sm font-light break-after-column mt-2">
                    These are manual payment methods that are only visible on
                    the point of sale.
                  </Text>
                </Row>
              </Column>
            </Column>
          </Row>
        </Row>
      </Column>
    </>
  );
};

export default AcceptPayment;

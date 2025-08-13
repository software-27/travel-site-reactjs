import React from "react";
import Icon from '@mdi/react'
import { mdiArrowAll,  mdiTable } from '@mdi/js'
import { Column, Row, Text, Button, Switch, } from "components";
import {  FaTimes, FaCheck } from "react-icons/fa";


  const FieldsPayoutsBtn= ()=> {

//popup funct.
const [showModal, setShowModal] = React.useState(false);
 
 
     return(
         <> 
            <Button class="bg-[#a0a0a0] hover:bg-[#767676] items-center h-fit py-1.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#a0a0a0] ring-inset"
                size="xs"
                type="submit"
                onClick={() => setShowModal(true)}>
                <Row className="gap-2 items-center">
                    <Icon path={mdiTable}
                        title="Bag"
                        size={1.0}
                        color="white"
                    />
                    <Text className="text-lg">Fields</Text>
                </Row>
            </Button>

            {showModal ? (
                        <>
                        <div
                            className="justify-center items-center mx-[450px] my-[150px] flex-nowrap  fixed inset-0 z-50 outline-none focus:outline-none"
                          >
                            {/*Header*/}
                            <Column classname="w-[100%]">
                              <Row className="bg-[#428BCA] w-[100%] items-start justify-between">
                                <Text className="pl-3 py-5 text-xl text-white">
                                  Manage Fields
                                </Text>
                                <FaTimes className=" mr-4 mt-6 h-5 w-5 text-white common-pointer"
                                  onClick={() => setShowModal(false)} />
                              </Row>
                            </Column>


                            {/*Body*/} 
                            <div className="bg-white w-[100%]">
                            <Row className="pt-2 items-center ml-8">
                                <Text className="mx-6 text-[14px] m-1 font-light">
                                    all  |  none
                                </Text>
                            </Row>

                            <div
                                className="ml-8 overflow-y-scroll mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-80 w-[80%] 2xl:mt-2 ">
                            <Row className="m-2 ">
                                <div
                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                    type="text"
                                    size="smSrc"
                                >
                                    <Row className="gap-2 items-center">
                                        <Icon path={mdiArrowAll}
                                            title="Bag"
                                            size={1.0}
                                            color="#3A87AD"
                                            className="cursor-move"
                                        />
                                            <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <Text>Created On</Text>
                                    </Row>
                                </div>
                            </Row>
                            
                            <Row className="m-2 ">
                            <div
                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                    type="text"
                                    size="smSrc"
                                >
                                    <Row className="gap-2 items-center">
                                        <Icon path={mdiArrowAll}
                                            title="Bag"
                                            size={1.0}
                                            color="#3A87AD"
                                            className="cursor-move"
                                        />
                                        <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <Text>Created By</Text>
                                    </Row>
                                </div>
                            </Row>

                            <Row className="m-2 ">
                            <div
                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                    type="text"
                                    size="smSrc"
                                >
                                    <Row className="gap-2 items-center">
                                        <Icon path={mdiArrowAll}
                                            title="Bag"
                                            size={1.0}
                                            color="#3A87AD"
                                            className="cursor-move"
                                        />
                                        <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <Text>Provider</Text>
                                    </Row>
                                </div>
                            </Row>

                            <Row className="m-2 ">
                            <div
                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                    type="text"
                                    size="smSrc"
                                >
                                    <Row className="gap-2 items-center">
                                        <Icon path={mdiArrowAll}
                                            title="Bag"
                                            size={1.0}
                                            color="#3A87AD"
                                            className="cursor-move"
                                        />
                                        <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <Text>Payout Num</Text>
                                    </Row>
                                </div>
                            </Row>

                            <Row className="m-2 ">
                            <div
                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                    type="text"
                                    size="smSrc"
                                >
                                    <Row className="gap-2 items-center">
                                        <Icon path={mdiArrowAll}
                                            title="Bag"
                                            size={1.0}
                                            color="#3A87AD"
                                            className="cursor-move"
                                        />
                                        <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <Text>Status</Text>
                                    </Row>
                                </div>
                            </Row>

                            <Row className="m-2 ">
                            <div
                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                    type="text"
                                    size="smSrc"
                                >
                                    <Row className="gap-2 items-center">
                                        <Icon path={mdiArrowAll}
                                            title="Bag"
                                            size={1.0}
                                            color="#3A87AD"
                                            className="cursor-move"
                                        />
                                        <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <Text>Payout Start</Text>
                                    </Row>
                                </div>
                            </Row>

                            <Row className="m-2 ">
                            <div
                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                    type="text"
                                    size="smSrc"
                                >
                                    <Row className="gap-2 items-center">
                                        <Icon path={mdiArrowAll}
                                            title="Bag"
                                            size={1.0}
                                            color="#3A87AD"
                                            className="cursor-move"
                                        />
                                        <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <Text>Payout End</Text>
                                    </Row>
                                </div>
                            </Row>

                            <Row className="m-2 ">
                            <div
                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                    type="text"
                                    size="smSrc"
                                >
                                    <Row className="gap-2 items-center">
                                        <Icon path={mdiArrowAll}
                                            title="Bag"
                                            size={1.0}
                                            color="#3A87AD"
                                            className="cursor-move"
                                        />
                                        <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <Text>Currency</Text>
                                    </Row>
                                </div>
                            </Row>

                            <Row className="m-2 ">
                            <div
                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                    type="text"
                                    size="smSrc"
                                >
                                    <Row className="gap-2 items-center">
                                        <Icon path={mdiArrowAll}
                                            title="Bag"
                                            size={1.0}
                                            color="#3A87AD"
                                            className="cursor-move"
                                        />
                                        <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <Text>Conversion</Text>
                                    </Row>
                                </div>
                            </Row>

                            <Row className="m-2 ">
                            <div
                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                    type="text"
                                    size="smSrc"
                                >
                                    <Row className="gap-2 items-center">
                                        <Icon path={mdiArrowAll}
                                            title="Bag"
                                            size={1.0}
                                            color="#3A87AD"
                                            className="cursor-move"
                                        />
                                        <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <Text>Notes</Text>
                                    </Row>
                                </div>
                            </Row>

                            <Row className="m-2 ">
                            <div
                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                    type="text"
                                    size="smSrc"
                                >
                                    <Row className="gap-2 items-center">
                                        <Icon path={mdiArrowAll}
                                            title="Bag"
                                            size={1.0}
                                            color="#3A87AD"
                                            className="cursor-move"
                                        />
                                        <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <Text>Payout Date</Text>
                                    </Row>
                                </div>
                            </Row>

                            <Row className="m-2 ">
                            <div
                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                    type="text"
                                    size="smSrc"
                                >
                                    <Row className="gap-2 items-center">
                                        <Icon path={mdiArrowAll}
                                            title="Bag"
                                            size={1.0}
                                            color="#3A87AD"
                                            className="cursor-move"
                                        />
                                        <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <Text>Payout Amount</Text>
                                    </Row>
                                </div>
                            </Row>

                            </div>

                            <div className=" pb-5 p-2">
                                    <Row className="mt-6 bg-gray_100 h-fit justify-start items-center w-[100%] mr-6 pb-5 mr-3">
                                      <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset ml-3 mt-3"
                                        size="xs"
                                        type="submit">
                                        <Row className="gap-2 items-center">
                                        <FaCheck className="h-5 w-5 text-white" />
                                          <Text className="text-lg cursor-pointer">Apply Changes</Text>
                                        </Row>
                                      </Button>
                                    </Row>
                                  </div>
                            </div>

                            </div>

                          <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>

                        </>
                      ) : null}

         </>
     )
 }
 
 export default FieldsPayoutsBtn;
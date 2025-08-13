import React from "react";
import Icon from '@mdi/react'
import { mdiPlusCircle } from '@mdi/js'
import { Column, Row, Text, Button, Switch, } from "components";
import {  FaTimes } from "react-icons/fa";
import { useState } from 'react';


  const SaveBtn= ()=> {

//popup funct.
const [showModal, setShowModal] = React.useState(false);

const [isVisible, setIsVisible] = useState("");

const changeHandler = e => {
  const getshow = e.target.value;
  setIsVisible(getshow);
}
 
 
     return(
         <> 
            <Button class="bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-1.5 px-3 mr-1 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset"
                size="xs"
                type="submit"
                onClick={() => setShowModal(true)}>
                <Row className="gap-2 items-center">
                    <Icon path={mdiPlusCircle}
                        title="Bag"
                        size={1.0}
                        color="white"
                    />
                    <Text className="text-lg">Save</Text>
                </Row>
            </Button>

            {showModal ? (
                        <>
                          <div
                            className="justify-center items-center mx-[400px] my-[150px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                          >
                            {/*Header*/}
                            <Column classname="w-[100%]">
                              <Row className="bg-[#428BCA] w-[100%] items-start justify-between">
                                <Text className="pl-3 py-5 text-xl text-white">
                                  Save This Search
                                </Text>
                                <FaTimes className=" mr-4 mt-6 h-5 w-5 text-white common-pointer"
                                  onClick={() => setShowModal(false)} />
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
                                  placeholder="Enter a name for this saved search"
                                ></input>
                              </Row>

                              <Row className="mt-2">
                                <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[15%] text-right ">
                                  Add For
                                </Text>
                                <select
                                  class="mx-2 common-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-10 w-[40%] 2xl:mt-2 "
                                  onChange={changeHandler}>
                                  <option disabled selected hidden>Myself</option>
                                  <option selected class="items-center"> Myself</option>
                                  <option selected> Everyone</option>
                                  <option className="text-gray-900" disabled>Security Group</option>
                                  <option className="mr-4" > Side Administrator</option>
                                  <option className="mr-4" > Administrator</option>
                                  <option className="mr-4" > Product Manager</option>
                                  <option className="mr-4" > Product Agent</option>
                                  <option className="mr-4" > Booking Manager</option>
                                  <option className="mr-4" > Booking Agent</option>
                                </select>
                              </Row>

                              <Row className="mt-2">
                                <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[15%] text-right ">
                                  Pin Search
                                </Text>
                                <Switch className="mx-2" />
                              </Row>

                              <Row className="mt-2 flex items-center justify-end p-3 border-t border-solid border-slate-200 bg-[#EFF3F8]">
                                <button
                                  className="text-white bg-[#ABBAC3] hover:bg-[#8B9AA3] font-bold  px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setShowModal(false)}
                                >
                                  Cancel
                                </button>
                                <button
                                  className="bg-[#428BCA] hover:bg-[#1B6AAA] text-white active:bg-emerald-600 font-bold  text-sm px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setShowModal(false)}
                                >
                                  OK
                                </button>

                              </Row>
                            </Column>

                          </div>

                          <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>

                        </>
                      ) : null}

         </>
     )
 }
 
 export default SaveBtn;
import React from "react";
import { Column, Row, Text, Img, Line, Button } from "components";




const CZmenu = () => {


    return (
        <>
            <Column class="w-[100%] mt-6  mr-2">
                <Row>
                    <Text className="font-light text-black text-xl" >
                        Default Options
                    </Text>

                    <Text className="font-light text-[#777] text-xs mt-2 ml-2" >
                        Set the default home location and the items that appear on the sidebar menu.
                    </Text>
                </Row>

                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                        <Text className="text-[#667E99] text-sm " >
                            Home
                        </Text>
                    </Column>
                    <Column class="w-[50%]">
                        <input placeholder="Dashoard" class="placeholder-[#d5d5d5] text-sm block w-full p-1 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </Column>
                </Row>
                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                        <Text className="text-[#667E99] text-sm " >
                            Menu
                        </Text>

                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                    Dashboard
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>

                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                    Bookings
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                    Calendar
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                    Daily Manifest
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                    Dispatch
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                    Point of Sale
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                Reconciliations
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                Inventory
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                Pakages
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                Rules
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                Price Sheets
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                Services Providers
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                Pickup Location
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                Tickets Pools
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                Gift Cards
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                Resources
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                Schedule
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                Merchandise
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                Stock Orders
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                Contacts
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                Messages
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                Users
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                Sales Desks
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                Locations 
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                <Row className="mb-2">
                    <Column class="w-[20%] text-right mr-3 mt-1">
                    </Column>

                    <Column class="w-[50%]">
                        <Row>
                            <Column class="w-[50%] mt-1">
                                <Text className="">
                                Merchandise
                                </Text>
                            </Column>

                            <Column class="w-[100%]">
                                <div class="text-right ">
                                    <input id="yellow-checkbox" type="checkbox" value="" class="items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>

                

               

            </Column>

        </>
    )
}

export default CZmenu;



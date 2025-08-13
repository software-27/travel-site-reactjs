
import React from "react";
import { Column, Row, Text, Line, Button, Img, } from "components";
import Header from "components/Header/Header/index";
import Sidebar from "components/Sidebar/index";
import DropdownReport from "components/DropdownReport"
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaThumbtack } from "react-icons/fa";
import Icon from '@mdi/react'
import { mdiWalletGiftcard, mdiMagnify, mdiTicketOutline, mdiClockTimeFourOutline, mdiEyeOutline, mdiAccount, mdiAccountGroup, mdiStar,
  mdiFlagCheckered, mdiCalculator, mdiBagChecked, mdiCalendarCheck, mdiRepeatVariant, mdiSend, mdiChartPie, mdiReceiptText,
  mdiEmailOpen, mdiSignal, mdiPlusCircleOutline } from '@mdi/js';
import { useState } from 'react';
import Topbtns from "components/Topbutton/index";


const Reports = () => {
  /* const handleshow = (e) => {
     const getshow = e.target.value;
     setShowhide(getshow);
   };*/

  const navigate = useNavigate();
  //button navigate to report
  function handleNavigate() {
     navigate("/t60")
  }
  //button navigate to report 
  function handleNavigate1() {
    navigate("/t20");
  }
  //button navigate to report bookings
  function handleNavigate2() {
    navigate("/t35");
  }
  //button navigate to report manifest
  function handleNavigate3() {
    navigate("/t36");
  }
  //button navigate to report users
  function handleNavigate4() {
    navigate("/t37");
  }
  //button navigate to report reviews
  function handleNavigate5() {
    navigate("/t38");
  }
  //button navigate to report managers
  function handleNavigate6() {
    navigate("/t39");
  }
  //button navigate to report paymentsummary
  function handleNavigate7() {
    navigate("/t40");
  }
  //button navigate to report  inventory
  function handleNavigate8() {
    navigate("/t49");
  }
  //button navigate to report depositsumary
  function handleNavigate9() {
    navigate("/t50");
  }
  //button navigate to report giftcard
  function handleNavigate10() {
    navigate("/t51");
  }
  //button navigate to report transactions
  function handleNavigate11() {
    navigate("/t52");
  }
  //button navigate to report referall
  function handleNavigate12() {
    navigate("/t53");
  }
  //button navigate to report commision
  function handleNavigate13() {
    navigate("/t54");
  }
  //button navigate to report invoice
  function handleNavigate14() {
    navigate("/t55");
  }
  //button navigate to report payout
  function handleNavigate15() {
    navigate("/t56")
  }
  //button navigate to report pace
  function handleNavigate16() {
    navigate("/t57")
  }

  //for switch 
  const [enabled, setEnabled] = useState(false);
  //popup funct.
  const [showModal, setShowModal] = React.useState(false);


  return (
    <>
      <Header className="w-[100%]" />
      <Column className="bg-white w-[100%]">
        <Row className="bg-gray_100 h-fit justify-start items-start w-[100%]">
          <Column>
            <Topbtns />
          </Column>

        </Row>
        <Row className="w-[100%] mt-[8px]">
          <Sidebar />
          <Column className="p-2 bg-white h-auto w-[100%]">
            <Row className="mb-6">
              <Column className="w-[65%] text-light_blue_600 text-[25px] m-1 font-light">
                Reports
              </Column>
              <Column className="w-[38%] text-white ">
                <Row className="justify-end">
                  <Button onClick={handleNavigate} class="bg-[#a0a0a0] hover:bg-[#767676] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#a0a0a0] ring-inset"
                    size="xs"
                    type="submit">
                    <Row className="gap-2 items-center">
                      <Icon path={mdiClockTimeFourOutline}
                        title="Bag"
                        size={1.0}
                        color="white"
                      />
                      <Text className="text-lg cursor-pointer">0 Scheduled Reports</Text>
                    </Row>
                  </Button>
                  <Button onClick={handleNavigate1} class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset"
                    size="xs"
                    type="submit">
                    <Row className="gap-2 items-center">
                      <Icon path={mdiEyeOutline}
                        title="Bag"
                        size={1.0}
                        color="white"
                      />
                      <Text className="text-lg cursor-pointer">Show Hidden Reports</Text>
                    </Row>
                  </Button>

                </Row>
              </Column>
            </Row>
            <Line className="bg-gray_700_33 mb-5 h-[1.5px] w-[100%]" />
            <Row>
              <Column className="w-[100%]  font-regular">
                <div class="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Filter Reports..."
                    class="px-3 py-2 placeholder-[#A3A89F]  bg-white text-lg border border-[#B7BBB4] focus:border-[#e2711d] w-[100%]"
                  />
                </div>
              </Column>
              <Column className="w-[10%] justify-start items-center">
                <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset"
                  size="xs"
                  type="submit">
                  <Row className="gap-2 items-center">
                    <Text className="text-lg">Search</Text>
                    <Icon path={mdiMagnify}
                      title="Bag"
                      size={1.0}
                      color="white"
                    />
                  </Row>
                </Button>
              </Column>

            </Row>

            <div className="mr-3">
              <Column className="w-[100%]">
                <Row className="pt-8">
                  <Text className="text-[19px] m-1 font-regular">
                    General Reports
                  </Text>
                </Row>

                <div class="relative overflow-x-auto sm:rounded-lg">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    </thead>
                    <tbody>
                      <tr class="cursor-pointer border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray_101"
                       onClick={handleNavigate2}>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[20%]">
                          <Row className="items-center gap-2">
                            <Icon path={mdiTicketOutline}
                              title="Bag"
                              size={1.0}
                              color="#4C8FBD"
                            />
                            <Text className="text-[14px]">Bookings</Text>
                          </Row>
                        </th>
                        <td class="px-6 py-4 w-[68%] text-[13px]">
                        Primary booking reports by date and type.
                        </td>
                        <td class="px-6 py-4 w-[50px]">
                          <DropdownReport />
                        </td>
                      </tr>
                      <tr class="cursor-pointer bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray_101"
                      onClick={handleNavigate3}>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[20%]">
                          <Row className="items-center gap-2">
                            <Icon path={mdiAccount}
                              title="Bag"
                              size={1.0}
                              color="#4C8FBD"
                            />
                            <Text className="text-[14px]">Manifest</Text>
                          </Row>
                        </th>
                        <td class="px-6 py-4 w-[68%] text-[13px]">
                        Daily manifest information by individual PAX.
                        </td>
                        <td class="px-6 py-4 w-[50px]">
                        <DropdownReport />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Column>
            </div>

            <div className="mr-3">
              <Column className="w-[100%]">
                <Row className="pt-8">
                  <Text className="text-[19px] m-1 font-regular">
                    Summary Reports
                  </Text>
                </Row>

                <div class="relative overflow-x-auto sm:rounded-lg">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    </thead>
                    <tbody>
                      <tr class="cursor-pointer border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray_101"
                      onClick={handleNavigate4}>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[20%]">
                          <Row className="items-center gap-2">
                            <Icon path={mdiAccountGroup}
                              title="Bag"
                              size={1.0}
                              color="#4C8FBD"
                            />
                            <Text className="text-[14px]">Users</Text>
                          </Row>
                        </th>
                        <td class="px-6 py-4 w-[68%] text-[13px]">
                          User details and commision information.
                        </td>
                        <td class="px-6 py-4  items-ends w-[50px]">
                          <DropdownReport className="items-ends" />
                        </td>
                      </tr>
                      <tr class="cursor-pointer bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray_101"
                      onClick={handleNavigate5}>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[20%]">
                          <Row className="items-center gap-2">
                            <Icon path={mdiStar}
                              title="Bag"
                              size={1.0}
                              color="#4C8FBD"
                            />
                            <Text className="text-[14px]">Reviews</Text>
                          </Row>
                        </th>
                        <td class="px-6 py-4 w-[685] text-[13px]">
                          Review totals by inventory item.
                        </td>
                        <td class="px-6 py-4 w-[50px]">
                        <DropdownReport />
                        </td>
                      </tr>
                      <tr class="cursor-pointer border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray_101"
                      onClick={handleNavigate6}>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[20%]">
                          <Row className="items-center gap-2">
                            <Icon path={mdiFlagCheckered}
                              title="Bag"
                              size={1.0}
                              color="#4C8FBD"
                            />
                            <Text className="text-[14px]">Managers</Text>
                          </Row>
                        </th>
                        <td class="px-6 py-4 w-[68%] text-[13px]">
                          Manager sales totals and commisions.
                        </td>
                        <td class="px-6 py-4 w-[50px]">
                          <DropdownReport />
                        </td>
                      </tr>
                      <tr class="cursor-pointer bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray_101"
                       onClick={handleNavigate7}>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[20%]">
                          <Row className="items-center gap-2">
                            <Icon path={mdiCalculator}
                              title="Bag"
                              size={1.0}
                              color="#4C8FBD"
                            />
                            <Text className="text-[14px]">Payment Summary</Text>
                          </Row>
                        </th>
                        <td class="px-6 py-4 w-[68%] text-[13px]">
                          Transaction totals by payment type.
                        </td>
                        <td class="px-6 py-4 w-[50px]">
                        <DropdownReport />
                        </td>
                      </tr>
                      <tr class="cursor-pointer border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray_101"
                      onClick={handleNavigate8}>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[20%]">
                          <Row className="items-center gap-2">
                            <Icon path={mdiBagChecked}
                              title="Bag"
                              size={1.0}
                              color="#4C8FBD"
                            />
                            <Text className="text-[14px]">Inventory</Text>
                          </Row>
                        </th>
                        <td class="px-6 py-4 w-[68%] text-[13px]">
                          Sales totals by inventory option.
                        </td>
                        <td class="px-6 py-4 w-[50px]">
                          <DropdownReport />
                        </td>
                      </tr>
                      <tr class="cursor-pointer bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray_101"
                      onClick={handleNavigate9}>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[20%]">
                          <Row className="items-center gap-2">
                            <Icon path={mdiCalendarCheck}
                              title="Bag"
                              size={1.0}
                              color="#4C8FBD"
                            />
                            <Text className="text-[14px]">Deposit Summary</Text>
                          </Row>
                        </th>
                        <td class="px-6 py-4 w-[68%] text-[13px]">
                          Summary of deposits by date.
                        </td>
                        <td class="px-6 py-4 w-[50px]">
                        <DropdownReport />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Column>
            </div>

            <div className="mr-3">
              <Column className="w-[100%]">
                <Row className="pt-8">
                  <Text className="text-[19px] m-1 font-regular">
                    Marketing Reports
                  </Text>
                </Row>

                <div class="relative overflow-x-auto sm:rounded-lg">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <tbody>
                      <tr class="cursor-pointer border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray_101"
                      onClick={handleNavigate10}>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[20%]">
                          <Row className="items-center gap-2">
                            <Icon path={mdiWalletGiftcard}
                              title="Bag"
                              size={1.0}
                              color="#4C8FBD"
                            />
                            <Text className="text-[14px]">Gift Cards</Text>
                          </Row>
                        </th>
                        <td class="px-6 py-4 w-[68%] text-[13px]">
                          Summary of gift cards report.
                        </td>
                        <td class="px-6 py-4 w-[50px]">
                          <DropdownReport />
                        </td>
                      </tr>
                      <tr class="cursor-pointer bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray_101">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[20%]">
                          <Row className="items-center gap-2">
                            <Icon path={mdiPlusCircleOutline}
                              title="Bag"
                              size={1.0}
                              color="#4C8FBD"
                            />
                            <Text className="text-[14px]">Add Ons</Text>
                          </Row>
                        </th>
                        <td class="px-6 py-4 w-[68%] text-[13px]">
                          Summary of sales and conversion.
                        </td>
                        <td class="px-6 py-4 w-[50px]">
                        <DropdownReport />
                        </td>
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
              </Column>
            </div>

            <div className="mr-3">
              <Column className="w-[100%]">
                <Row className="pt-8">
                  <Text className="text-[19px] m-1 font-regular">
                    Accounting Reports
                  </Text>
                </Row>

                <div class="relative overflow-x-auto sm:rounded-lg">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <tbody>
                      <tr class="cursor-pointer border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray_101"
                      onClick={handleNavigate11}>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[20%]">
                          <Row className="items-center gap-2">
                            <Icon path={mdiRepeatVariant}
                              title="Bag"
                              size={1.0}
                              color="#4C8FBD"
                            />
                            <Text className="text-[14px]">Transactions</Text>
                          </Row>
                        </th>
                        <td class="px-6 py-4 w-[68%] text-[13px]">
                          List of transactions by status and response.
                        </td>
                        <td class="px-6 py-4 w-[50px]">
                          <DropdownReport />
                        </td>
                      </tr>
                      <tr class="cursor-pointer bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray_101"
                      onClick={handleNavigate12}>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[20%]">
                          <Row className="items-center gap-2">
                            <Icon path={mdiSend}
                              title="Bag"
                              size={1.0}
                              color="#4C8FBD"
                            />
                            <Text className="text-[14px]">Referrals</Text>
                          </Row>
                        </th>
                        <td class="px-6 py-4 w-[68%] text-[13px]">
                          List of referrals by service provider.
                        </td>
                        <td class="px-6 py-4 w-[50px]">
                        <DropdownReport />
                        </td>
                      </tr>
                      <tr class="cursor-pointer border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
                      onClick={handleNavigate13}>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[20%]">
                          <Row className="items-center gap-2">
                            <Icon path={mdiChartPie}
                              title="Bag"
                              size={1.0}
                              color="#4C8FBD"
                            />
                            <Text className="text-[14px]">Commisions</Text>
                          </Row>
                        </th>
                        <td class="px-6 py-4 w-[68%] text-[13px]">
                          List bookings and cancellations for users.
                        </td>
                        <td class="px-6 py-4 w-[50px]">
                          <DropdownReport />
                        </td>
                      </tr>
                      <tr class="cursor-pointer bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray_101"
                      onClick={handleNavigate14}>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[20%]">
                          <Row className="items-center gap-2">
                            <Icon path={mdiReceiptText}
                              title="Bag"
                              size={1.0}
                              color="#4C8FBD"
                            />
                            <Text className="text-[14px]">Invoice A/R</Text>
                          </Row>
                        </th>
                        <td class="px-6 py-4 w-[68%] text-[13px]">
                          Invoice reconciliation aging and accounts receivable.
                        </td>
                        <td class="px-6 py-4 w-[50px]">
                        <DropdownReport />
                        </td>
                      </tr>
                      <tr class="cursor-pointer border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray_101"
                      onClick={handleNavigate15}>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[20%]">
                          <Row className="items-center gap-2">
                            <Icon path={mdiEmailOpen}
                              title="Bag"
                              size={1.0}
                              color="#4C8FBD"
                            />
                            <Text className="text-[14px]">Payouts</Text>
                          </Row>
                        </th>
                        <td class="px-6 py-4 w-[68%] text-[13px]">
                          Payout reconciliation details.
                        </td>
                        <td class="px-6 py-4 w-[50px]">
                          <DropdownReport />
                        </td>
                      </tr>
                      <tr class="cursor-pointer bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray_101"
                      onClick={handleNavigate16}>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[20%]">
                          <Row className="items-center gap-2">
                            <Icon path={mdiSignal}
                              title="Bag"
                              size={1.0}
                              color="#4C8FBD"
                            />
                            <Text className="text-[14px]">Pace</Text>
                          </Row>
                        </th>
                        <td class="px-6 py-4 w-[68%] text-[13px]">
                          Compare bookings between two time periods.
                        </td>
                        <td class="px-6 py-4 w-[50px]">
                        <DropdownReport />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Column>
            </div>



          </Column>
        </Row>
      </Column>
    </>
  );
};

export default Reports;

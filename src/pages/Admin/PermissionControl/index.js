import React, { useState } from "react";
import { Column, Row, Text, Input, input, Button, Line } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";
import SidebarManageUser from "components/SidebarManageUser/index";
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";

const PermissionControlPage = () => {
  const [show, setShow] = useState();
  const [showhide, setShowhide] = useState("no");

  const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };

  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/manage-role");
  }

  function handleNavigate2() {
    navigate("/manage-role-3");
  }

  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [isPopup2Open, setIsPopup2Open] = useState(false);

  const openPopup1 = () => {
    setIsPopup1Open(true);
  };

  const openPopup2 = () => {
    setIsPopup2Open(true);
  };

  const closePopup1 = () => {
    setIsPopup1Open(false);
  };

  const closePopup2 = () => {
    setIsPopup2Open(false);
  };

  return (
    <>
      <div className="w-full font-montserrat">
      <HeaderOTAAdmin openPopup1={openPopup1} className="fixed invisible lg:visible" />
        <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
        <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />        <div className="py-5">

          <div className="flex">
            <div className="grid w-[200px]">
              <SidebarManageUser />
            </div>
            <div className="px-2 w-full">
              <text className="font-bold text-[40px]">
                Manage Role
              </text>
              <Column className="bg-gray_100 h-fit font-ptsans items-center justify-start mx-[auto] w-[100%]">
        {/* Column untuk title "Edit User" */}
        <Column className="justify-start gap-6 w-[80%]">
          <Text className="font-bold pt-2 mt-[10px]" variant="h3">
            Setup Permission
          </Text>

          {/* First Row */}
          <Row className="w-[100%] h-fit">
            {/* First Column for First Row */}
            <Column className="justify-start rounded-radius4 shadow h-[100px] bg-[#F1F1F1] w-[100%]">
              <Row className="justify-end h-[80px] w-[100%]">
                <Text className="font-bold ml-10 pt-2 text-[16px] w-[30%]">
                  Domain
                </Text>
                <Text className="font-regular ml-10 pt-2 text-[16px] w-[70%]">
                  UNIQUEHOLIDAY
                </Text>
              </Row>
              <Row className="justify-end h-[80px] w-[100%]">
                <Text className="font-bold pt-2 ml-10 text-[16px] w-[30%]">
                  Role Name
                </Text>
                <Text className="font-regular pt-2 ml-10 text-[16px] w-[70%]">
                  Administrator
                </Text>
              </Row>
            </Column>
          </Row>

          <Row className="h-fit w-[100%]">
            {/* Second Row */}
            <Column className="justify-start rounded-radius4 shadow  p-4 h-fit bg-[#F1F1F1] w-[100%]">
              {/* Row for Table*/}
              <Row className="h-fit w-[100%]">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                  <table class="w-[100%] layout-auto text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-[16px] text-gray-700 bg-[#F1F1F1] dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="w-[30%] px-6 py-3">
                          Name
                        </th>
                        <th scope="col" class="w-[35%] px-20 py-3">
                          Description
                        </th>
                        <th scope="col" class="w-[35%] justify-end px-20 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-[#FFFFFF] text-[14px] border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Can Search All Booking Request
                        </th>
                        <td class="px-20 py-4">
                          Can search all booking request
                        </td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div class="flex">
                            <div class="flex items-center mr-4">
                              <input
                                checked
                                id="inline-checked-radio"
                                type="radio"
                                value=""
                                name="inline-radio-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-checked-radio"
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                              >
                                Revoke
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                id="inline-radio"
                                type="radio"
                                value=""
                                name="inline-radio-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-radio"
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                              >
                                Grant
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-[#F1F1F1] text-[14px] border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Can Edit Guest ID
                        </th>
                        <td class="px-20 py-4">Allow user to edit guest ID</td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div class="flex">
                            <div class="flex items-center mr-4">
                              <input
                                checked
                                id="inline-checked-1-radio"
                                type="radio"
                                value=""
                                name="inline-radio-1-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-checked-1-radio"
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                              >
                                Revoke
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                id="inline-1-radio"
                                type="radio"
                                value=""
                                name="inline-radio-1-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-1-radio"
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                              >
                                Grant
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-[#FFFFFF] text-[14px] border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Can Edit Global Domain
                        </th>
                        <td class="px-20 py-4">Allow user to edit global domain</td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div class="flex">
                            <div class="flex items-center mr-4">
                              <input
                                checked
                                id="inline-checked-2-radio"
                                type="radio"
                                value=""
                                name="inline-radio-2-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-checked-2-radio"
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                              >
                                Revoke
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                id="inline-2-radio"
                                type="radio"
                                value=""
                                name="inline-radio-2-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-2-radio"
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                              >
                                Grant
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-[#F1F1F1] text-[14px] border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Can Edit Booking Request
                        </th>
                        <td class="px-20 py-4">Allow user to edit booking request</td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div class="flex">
                            <div class="flex items-center mr-4">
                              <input
                                checked
                                id="inline-checked-3-radio"
                                type="radio"
                                value=""
                                name="inline-radio-3-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-checked-3-radio"
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                              >
                                Revoke
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                id="inline-3-radio"
                                type="radio"
                                value=""
                                name="inline-radio-3-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-3-radio"
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                              >
                                Grant
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-[#FFFFFF] text-[14px] border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Can Edit Property Information
                        </th>
                        <td class="px-20 py-4">Allow user to edit</td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div class="flex">
                            <div class="flex items-center mr-4">
                              <input
                                checked
                                id="inline-checked-4-radio"
                                type="radio"
                                value=""
                                name="inline-radio-4-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-checked-4-radio"
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                              >
                                Revoke
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                id="inline-4-radio"
                                type="radio"
                                value=""
                                name="inline-radio-4-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-4-radio"
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                              >
                                Grant
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-[#F1F1F1] text-[14px] border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Can Generate Pass Code
                        </th>
                        <td class="px-20 py-4">Allow user to generate pass code</td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div class="flex">
                            <div class="flex items-center mr-4">
                              <input
                                checked
                                id="inline-checked-5-radio"
                                type="radio"
                                value=""
                                name="inline-radio-5-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-checked-5-radio"
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                              >
                                Revoke
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                id="inline-5-radio"
                                type="radio"
                                value=""
                                name="inline-radio-5-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-5-radio"
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                              >
                                Grant
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-[#FFFFFF] text-[14px] border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Can Delete Guest Account
                        </th>
                        <td class="px-20 py-4">Allow user to delete guest account</td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div class="flex">
                            <div class="flex items-center mr-4">
                              <input
                                checked
                                id="inline-checked-6-radio"
                                type="radio"
                                value=""
                                name="inline-radio-6-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-checked-6-radio"
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                              >
                                Revoke
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                id="inline-6-radio"
                                type="radio"
                                value=""
                                name="inline-radio-6-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-6-radio"
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                              >
                                Grant
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-[#F1F1F1] text-[14px] border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Can Manage User Role
                        </th>
                        <td class="px-20 py-4">Allow user to manage user role</td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div class="flex">
                            <div class="flex items-center mr-4">
                              <input
                                checked
                                id="inline-checked-7-radio"
                                type="radio"
                                value=""
                                name="inline-radio-7-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-checked-7-radio"
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                              >
                                Revoke
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                id="inline-7-radio"
                                type="radio"
                                value=""
                                name="inline-radio-7-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-7-radio"
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                              >
                                Grant
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-[#FFFFFF] text-[14px] border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Can Generate Report
                        </th>
                        <td class="px-20 py-4">Allow user to generate report</td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div class="flex">
                            <div class="flex items-center mr-4">
                              <input
                                checked
                                id="inline-checked-8-radio"
                                type="radio"
                                value=""
                                name="inline-radio-8-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-checked-8-radio"
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                              >
                                Revoke
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                id="inline-8-radio"
                                type="radio"
                                value=""
                                name="inline-radio-8-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-8-radio"
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                              >
                                Grant
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-[#F1F1F1] text-[14px] border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Can Manage User Information
                        </th>
                        <td class="px-20 py-4">Allow user to manage user information</td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div class="flex">
                            <div class="flex items-center mr-4">
                              <input
                                checked
                                id="inline-checked-9-radio"
                                type="radio"
                                value=""
                                name="inline-radio-9-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-checked-9-radio"
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                              >
                                Revoke
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                id="inline-9-radio"
                                type="radio"
                                value=""
                                name="inline-radio-9-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-9-radio"
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                              >
                                Grant
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Row>

              <Row className="justify-start mt-6">
                <Button
                  className="justify-start mr-2 items-center border-none bg-sky-700 common-pointer font-bold lg:text-[8px] xl:text-[10px] 2xl:text-[16px] 3xl:text-[26px] text-[#FFFFFF] w-fit"
                  onClick={handleNavigate2}
                >
                  SAVE
                </Button>

                <Button
                  className="justify-start items-center border-none bg-sky-700 common-pointer font-bold lg:text-[8px] xl:text-[10px] 2xl:text-[16px] 3xl:text-[26px] text-[#FFFFFF] w-fit"
                  onClick={handleNavigate1}
                >
                  BACK
                </Button>
              </Row>
            </Column>
          </Row>
          <Row></Row>
        </Column>
      </Column>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default PermissionControlPage;

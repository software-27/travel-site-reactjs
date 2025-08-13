import React, { useState } from "react";
import { Column, Row, Text, Input, Button, Line } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";
import SidebarManageUser from "components/SidebarManageUser/index";
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";

const EditRolePage = () => {
  const [show, setShow] = useState();
  const [showhide, setShowhide] = useState("no");

  const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };

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

  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/manage-user");
  }

  function handleNavigate2() {
    navigate("/manage-user-2");
  }

  return (
    <>
      <div className="w-full font-montserrat">
        <HeaderOTAAdmin openPopup1={openPopup1} className="fixed invisible lg:visible" />
        <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
        <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />
        <div className="py-5">

          <div className="flex">
            <div className="grid w-[200px]">
              <SidebarManageUser />
            </div>
            <div className="px-2 w-full">
              <text className="font-bold text-[40px]">
                Manage User
              </text>
              <Column className="bg-gray_100 h-screen font-ptsans items-center justify-start mx-[auto] w-[100%]">
                {/* Column untuk title "Edit User" */}
                <Column className="justify-start gap-6 w-[80%]">
                  <Text className="font-bold pt-2 mt-[10px]" variant="h3">
                    Edit User
                  </Text>

                  {/* First Row */}
                  <Row className="w-[100%] h-fit">
                    {/* Left Column for First Row */}
                    <Column className="justify-start rounded-radius4 shadow h-[450px] bg-[#F1F1F1] w-[25%]">
                      <Row className="form-check pl-4 font-ptsans text-[14px] items-start m-[10px] rounded-radius4 w-[100%]">
                        <Text className="font-regular pt-2 text-[20px]">
                          Profile
                        </Text>
                      </Row>
                      <Row className="form-check pl-4 font-ptsans text-[14px] items-start m-[10px] rounded-radius4 w-[100%]">
                        <Text className="font-regular pt-2 text-[20px]">
                          Work
                        </Text>
                      </Row>
                      <Row className="form-check pl-4 font-ptsans text-[14px] items-start m-[10px] rounded-radius4 w-[100%]">
                        <Text className="font-regular pt-2 text-[20px]">
                          Settings
                        </Text>
                      </Row>
                      <Row className="form-check pl-4 my-4 font-ptsans bg-[#42a5f5] text-[14px] items-start m-[10px] rounded-radius4 w-[95%]">
                        <Text className="font-regular pt-2 text-[20px] text-[#FFFFFF] ">
                          Role
                        </Text>
                      </Row>
                      <Row className="form-check pl-4 font-ptsans text-[14px] items-start m-[10px] rounded-radius4 w-[100%]">
                        <Text className="font-regular pt-2 text-[20px]">
                          User Attachments
                        </Text>
                      </Row>
                    </Column>
                    {/* Right Column for First Row */}
                    <Column className="justify-start rounded-radius4 shadow  ml-4 p-6 h-[450px] bg-[#FFFFFF] w-[75%]">
                      <Column className="justify-start h-[400px] border p-12 rounded-radius4 shadow bg-[#FFFFFF] w-[100%]">
                        {/* Row for Table*/}
                        <Row className="justify-start ml-10 p-4 h-[150px] w-[100%]">
                          <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                              <thead class="text-[16px] text-gray-700 border-b-2 bg-[#FFFFFF] dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                  <th scope="col" class="pl-6 pr-24 py-3">
                                    Role name
                                  </th>
                                  <th scope="col" class="pl-16 pr-20 py-3">
                                    Domain
                                  </th>
                                  <th scope="col" class="pl-24 pr-24 py-3">
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class="bg-[#FFFFFF] text-[14px] border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th
                                    scope="row"
                                    class="pl-6 pr-24 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                  >
                                    Guest
                                  </th>
                                  <td class="pl-16 pr-20 py-4">UNIQUEHOLIDAY *</td>
                                  <td class="pl-24 pr-24 py-4">
                                    <a
                                      href="mu2"
                                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                      Unassign
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </Row>
                        {/* Row for Assign Role Search Input*/}
                        <Row className="justify-end h-[80px] w-[100%]">
                          <Text className="font-bold ml-20 pt-2 text-[20px] w-[60%]">
                            Assign Role
                          </Text>
                          <Input
                            id="role"
                            type="text"
                            className="font-normal not-italic mr-[30px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:required text-slate_700 w-[40%]"
                            wrapClassName="h-fit 2xl:mb-[100px] 2xl:mt-[5px] 3xl:mb-[387px] 3xl:mt-[6px] lg:mb-[229px] lg:mt-[3px] w-[100%] xl:mb-[287px] xl:mt-[4px]"
                            variant="OutlineGray503"
                            shape="RoundedBorder3"
                            size="sm"
                          ></Input>
                        </Row>
                        {/* Row for Add, Update, Back Button*/}
                        <Row className="justify-end w-[100%]">
                          <Button
                            className="justify-end mr-2 items-center border-none bg-sky-700 common-pointer font-bold lg:text-[8px] xl:text-[10px] 2xl:text-[16px] 3xl:text-[26px] text-[#FFFFFF] w-fit"
                            onClick={handleNavigate2}
                          >
                            ADD
                          </Button>
                          <Button
                            className="justify-end mr-2 items-center border-none bg-sky-700 common-pointer font-bold lg:text-[8px] xl:text-[10px] 2xl:text-[16px] 3xl:text-[26px] text-[#FFFFFF] w-fit"
                            onClick={handleNavigate2}
                          >
                            UPDATE
                          </Button>
                          <Button
                            className="justify-end items-center border-none bg-sky-700 common-pointer font-bold lg:text-[8px] xl:text-[10px] 2xl:text-[16px] 3xl:text-[26px] text-[#FFFFFF] w-fit"
                            onClick={handleNavigate1}
                          >
                            BACK
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                  {/* Row for Update & Back Button */}
                  <Row className="justify-end">
                    <Button
                      className="justify-end mr-2 items-center border-none bg-sky-700 common-pointer font-bold lg:text-[8px] xl:text-[10px] 2xl:text-[16px] 3xl:text-[26px] text-[#FFFFFF] w-fit"
                      onClick={handleNavigate2}
                    >
                      UPDATE
                    </Button>

                    <Button
                      className="justify-end items-center border-none bg-sky-700 common-pointer font-bold lg:text-[8px] xl:text-[10px] 2xl:text-[16px] 3xl:text-[26px] text-[#FFFFFF] w-fit"
                      onClick={handleNavigate1}
                    >
                      BACK
                    </Button>
                  </Row>
                </Column>
              </Column>

            </div>
          </div>
        </div>
      </div>

      {/* Column untuk semua component */}

    </>
  );
};

export default EditRolePage;
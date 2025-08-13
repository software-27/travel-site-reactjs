import React from "react";

import { Column, Text, Row, Button, Img, Line, Input, Stack } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const QuestionaboutpropertyPage = () => {
  const navigate = useNavigate();

  function handleNavigate81() {
    navigate("/confirmation");
  }

  function handleNavigate82() {
    navigate("/nl1");
  }
  function handleNavigate104() {
    window.location.href = "https://www.airbnb.com/rooms/xxxxxxxx";
  }
  function handleNavigate105() {
    window.location.href = "https://www.vrbo.com/xxxxxx";
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] 3xl:pb-[102px] lg:pb-[60px] xl:pb-[75px] 2xl:pb-[85px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="justify-start 3xl:ml-[116px] lg:ml-[68px] xl:ml-[86px] 2xl:ml-[97px] sm:ml-[46px] md:ml-[65px] sm:mt-[36px] md:mt-[44px] 3xl:mt-[104px] lg:mt-[61px] xl:mt-[77px] 2xl:mt-[87px] w-[42%]">
            <Text
              className="not-italic text-black_900 sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] 2xl:text-[22px] 3xl:text-[24px] w-[auto]"
              as="h4"
              variant="h4"
            >
              Where else is your property listed?
            </Text>
            <Column className="items-center justify-start lg:ml-[26px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] sm:mt-[8px] md:mt-[10px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] md:w-[94%] w-[94%]">
              <Column className="bg-white_A700 items-center justify-start sm:p-[9px] md:p-[11px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] shadow-bs3 w-[100%]">
                <Column className="justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] w-[97%]">
                  <Text
                    className="font-normal leading-[normal] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] not-italic text-black_900 w-[80%]"
                    variant="body4"
                  >
                    If your property is listed in Airbnb or Vrbo, you can speed
                    up
                    <br />
                    registration by importing it directly to HalalHoliday.com
                  </Text>
                  <br />
                  <ul class="w-50 text-sm font-medium text-gray-900 ">
                    <li class="w-full rounded-t-lg ">
                      <div class="flex items-center pl-3">
                        <input
                          id="airbnb-checkbox"
                          type="checkbox"
                          value=""
                          class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="Airbnb-checkbox"
                          class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Airbnb
                        </label>
                      </div>
                    </li>
                    <li class="w-full rounded-t-lg ">
                      <div class="flex items-center pl-3">
                        <input
                          id="tripadvisor-checkbox"
                          type="checkbox"
                          value=""
                          class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="tripadvisor-checkbox"
                          class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          TripAdvisor
                        </label>
                      </div>
                    </li>
                    <li class="w-full rounded-t-lg ">
                      <div class="flex items-center pl-3">
                        <input
                          id="vrbo-checkbox"
                          type="checkbox"
                          value=""
                          class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="vrbo-checkbox"
                          class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Vrbo
                        </label>
                      </div>
                    </li>
                    <li class="w-full rounded-t-lg ">
                      <div class="flex items-center pl-3">
                        <input
                          id="anotherweb-checkbox"
                          type="checkbox"
                          value=""
                          class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="anotherweb-checkbox"
                          class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Another website
                        </label>
                      </div>
                    </li>
                    <li class="w-full rounded-t-lg ">
                      <div class="flex items-center pl-3">
                        <input
                          id="anotherweb-checkbox"
                          type="checkbox"
                          value=""
                          class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="anotherweb-checkbox"
                          class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          My property isn't listed on any other websites
                        </label>
                      </div>
                    </li>
                  </ul>
                  <Line className="bg-gray_700_33 h-[0.5px] sm:mt-[16px] md:mt-[21px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]" />
                  <Text
                    className="sm:mt-[10px] md:mt-[12px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] Aboutproperty sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px]"
                    variant="body4"
                  >
                    Import property details from Airbnb or Vrbo
                  </Text>
                  <Text className="Pastethelink sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px]" variant="body6">
                    Paste the link to your Airbnb or Vrbo listing
                  </Text>
                  <Row className="items-center ml-[1px] sm:mt-[8px] md:mt-[10px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[83%]">
                    <Input
                      className="placeholder:text-gray_503 GroupSixtyNine"
                      wrapClassName="w-[74%]"
                      name="weburl"
                      placeholder="https://www.airbnb.com/rooms/xxxxxxxx"
                      shape="RoundedBorder3"
                      size="sm"
                      variant="OutlineGray503"
                    ></Input>
                    <Button
                      className="font-bold hover:bg-sky-900 sm:ml-[5px] md:ml-[5px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] items-center w-[26%]"
                      shape="RoundedBorder3"
                      size="md"
                      variant="OutlineBluegray101"
                    >
                      Apply
                    </Button>
                  </Row>
                  <Text
                    className="ml-[1px] sm:mt-[9px] md:mt-[11px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] rownameandlocati1"
                    variant="body6"
                  >
                    Example link:
                  </Text>
                  <Text
                    className="common-pointer ml-[1px] mt-[3px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] rownameandlocati1"
                    variant="body6"
                    onClick={handleNavigate104}
                  >
                    https://www.airbnb.com/rooms/xxxxxxxx
                  </Text>
                  <Text
                    className="common-pointer weburl_Two sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px]"
                    variant="body6"
                    onClick={handleNavigate105}
                  >
                    https://www.vrbo.com/xxxxxx
                  </Text>
                  <a href="https://www.airbnb.com/" target="_blank"
                    className="font-normal hover:underline 
                    3xl:mt-[10px] sm:mt-[4px] md:mt-[5px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[7px] not-italic text-light_blue_800 w-[auto]"
                    variant="body4"> Where I can find this link? 
                  </a>
                </Column>
              </Column>
              <Line className="bg-gray_700_33 h-[0.5px] sm:mt-[17px] md:mt-[21px] lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[100%]" />
              <Row className="gap-2 common-pointer items-center justify-between sm:mt-[18px] md:mt-[20px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[100%]">
                <Stack
                  className="bg-white_A700 border border-light_blue_800 border-solid sm:h-[46px] md:h-[46px] lg:h-[46px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] rounded-radius2 w-[11%]"
                  onClick={handleNavigate81}
                >
                  <Img
                    src="images/img_arrowleft_14X7.svg"
                    className="arrowleft1 md:h-[40px] md:w-[40px]"
                    alt="arrowleft"
                  />
                </Stack>
                <Button
                  className="font-bold hover:bg-sky-900 lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] items-center text-center text-gray_101 w-[87%]"
                  shape="RoundedBorder3"
                  variant="FillLightblue800"
                  onClick={handleNavigate82}
                >
                  Continue
                </Button>
              </Row>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default QuestionaboutpropertyPage;

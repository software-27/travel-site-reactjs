import React from "react";

import { Column, Text, Row, Img, Button, Stack, Line, Input } from "components";
import Header4 from "components/Header/Header4";
import Footer1 from "components/Footer/Footer1";
import { useNavigate } from "react-router-dom";

const GrouphomepagePage = () => {
  const navigate = useNavigate();

  function handleNavigate72() {
    navigate("/propertycategorypage");
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header4 className="w-[100%]" />
          <Column className="justify-start lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] w-[100%]">
            <Text
              className="font-bold lg:ml-[108px] xl:ml-[135px] 2xl:ml-[152px] 3xl:ml-[182px] text-black_900 w-[auto]"
              variant="body1"
            >
              Group homepage
            </Text>
            <Column className="bg-white_A700 items-center justify-start lg:ml-[108px] xl:ml-[135px] 2xl:ml-[152px] 3xl:ml-[182px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] shadow-bs5 w-[78%]">
              <Column className="justify-start lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] w-[99%]">
                <Row className="items-end w-[100%]">
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[2%]"
                    alt="mobile"
                  />
                  <Text className="rowmobile1" variant="body6">
                    Create mobile rates to promotes your properties to guests
                    booking on phones.
                  </Text>
                  <Img
                    src="images/img_close_36X33.svg"
                    className="h-10 lg:h-[15px] xl:h-[15px] 2xl:h-[37px] 3xl:h-[44px] mb-[4px] lg:ml-[398px] xl:ml-[550px] 2xl:ml-[560px] 3xl:ml-[672px] w-[3%]"
                    alt="close"
                  />
                </Row>
                <Column className="justify-start lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] mt-[3px] w-[39%]">
                  <Text className="columneachpropertyw" variant="body8">
                    Each property with a mobile rate can see, on average, a 26%
                    increase in its bookings.
                  </Text>
                  <Button
                    className="font-bold font-inter lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[40%]"
                    shape="RoundedBorder2"
                    size="md"
                    variant="OutlineBlue600"
                  >
                    Select 1 eligible property
                  </Button>
                </Column>
              </Column>
            </Column>
            <Text
              className="font-bold lg:ml-[108px] xl:ml-[135px] 2xl:ml-[152px] 3xl:ml-[182px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] text-black_900 w-[auto]"
              variant="body1"
            >
              Properties in progress (1)
            </Text>
            <Stack className="2xl:h-[111px] 3xl:h-[133px] lg:h-[79px] xl:h-[98px] lg:ml-[107px] xl:ml-[134px] 2xl:ml-[151px] 3xl:ml-[181px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[78%]">
              <Column className="w-[100%] bg-white mt-2 h-fit gap-y-2">
                <div class="overflow-x-auto relative">
                  <table class="w-[100%] text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-base font-bold text-black bg-bluegray_100_6c dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="py-3 px-6">
                          <Row>
                            <Text>Name</Text>
                            <Img
                              src="images/img_arrowdown.svg"
                              className="arrowup w-30 h-15"
                              alt="arrowup"
                            />
                          </Row>
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Location
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Registeration Process
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Action
                        </th>
                        <th scope="col" class="py-3 px-6">
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-base text-black whitespace-nowrap dark:text-white">
                          <Row className="gap-2">
                            <div class="inline-flex overflow-hidden relative justify-center items-center w-8 h-8 bg-indigo_400 rounded-full dark:bg-gray-600">
                              <span class="font-bold text-white dark:text-gray-300">FP</span>
                            </div>
                            <Text class="text-base font-bold">
                              Fairuz Property
                            </Text>
                          </Row>
                        </th>
                        <td class="py-4 px-6 text-black">
                          Malaysia
                        </td>
                        <td class="py-4 px-6 text-black">
                          <Row className="font-ptsans items-start">
                            <Line className="bg-red_801 h-[3px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[10%]" />
                            <Line className="bg-gray_500_4c h-[3px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[60%]" />
                            <Text className="ProgressPercen" variant="body6">
                              10%
                            </Text>
                          </Row>
                        </td>
                        <td class="py-4 px-6 text-black text-base">
                          <Text
                            className="common-pointer font-normal  not-italic text-blue_600 w-[auto]"
                            variant="body6"
                            onClick={handleNavigate72}
                          >
                            Continue registration
                          </Text>
                        </td>
                        <td class="py-4 px-6">
                          <Row className="gap-2">
                            <Img
                              src="images/img_trash.svg"
                              className="delete"
                              alt="trash"
                            />
                            <Text
                              className="font-normal  not-italic text-red_801 w-[auto]"
                              variant="body6"
                            >
                              Delete
                            </Text>
                          </Row>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Column>
            </Stack>
            <Text
              className="font-bold lg:ml-[107px] xl:ml-[134px] 2xl:ml-[151px] 3xl:ml-[181px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] text-black_900 w-[auto]"
              variant="body1"
            >
              Active properties
            </Text>
            <Row className="font-inter items-center lg:ml-[108px] xl:ml-[135px] 2xl:ml-[152px] 3xl:ml-[182px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[78%]">
              <Column className="bg-white_A700 border border-gray_503 border-solid lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius3 w-[44%]">
                <Input className="columnfilterbyprope GroupSixtyNine" variant="body6"
                  placeholder="Filter by property ID, name or location">
                </Input>
              </Column>
              <Row className="font-ptsans items-start justify-center lg:ml-[364px] xl:ml-[455px] 2xl:ml-[512px] 3xl:ml-[614px] w-[8%]">
                <Img
                  src="images/img_download.svg"
                  className="download"
                  alt="download"
                />
                <Text className="Download" variant="body6">
                  Download
                </Text>
              </Row>
              <Img
                src="images/img_overflowmenu.svg"
                className="xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] download"
                alt="overflowmenu"
              />
            </Row>
            <Stack className="font-inter lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:ml-[105px] xl:ml-[131px] 2xl:ml-[148px] 3xl:ml-[177px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[78%]">
              <Column className="w-[100%] bg-white mt-4 h-fit gap-y-2">

                <div class="overflow-x-auto relative">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-base font-bold text-black bg-bluegray_100_6c dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="py-3 px-6">
                          <Row>
                            <Text>ID</Text>
                            <Img
                              src="images/img_arrowup.svg"
                              className="arrowup w-30 h-15"
                              alt="arrowup"
                            />
                          </Row>
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Name
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Location
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Status
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Arrivals/Departures for
                          <br />
                          today & tomorrow
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Guest <br />
                          Messages
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Halalholiday.com
                          <br />
                          messages
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-base text-black whitespace-nowrap dark:text-white">
                          374474
                        </th>
                        <td class="py-4 px-6 text-black">
                          <Row className="gap-2">
                            <div class="inline-flex overflow-hidden relative justify-center items-center w-8 h-8 bg-indigo_400 rounded-full dark:bg-gray-600">
                              <span class="font-bold text-white dark:text-gray-300">DC</span>
                            </div>
                            <Text class="text-base">
                              D’Concept Hotel
                              <br />
                              Kulim     <Button class="py-1 px-1 bg-indigo_903 ml-2 font-bold text-[8px] text-white rounded-md w-fit h-6" variant="body7">Genius</Button>
                            </Text>
                          </Row>
                          <Row className="mt-2">
                            <Line className="bg-light_green_A700_c4 h-[3px] mt-[8px] mb-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] rotate-[0deg] w-[60%]" />
                            <Text className="percentage" variant="body6">
                              100%
                            </Text>
                          </Row>
                        </td>
                        <td class="py-4 px-6 text-black">
                          <Row className="font-ptsans items-start gap-1">
                            <Img
                              src="images/img_television.svg"
                              className="television mt-1"
                              alt="television"
                            />
                            <Text class="text-base" variant="body6">
                              No.4, Jalan KLC Satu (1), Kulim Landmark Central, <br />
                              09000 Kulim, Kedah, Darul Aman, Kulim
                            </Text>
                          </Row>
                        </td>
                        <td class="py-4 px-6 text-black text-base">
                          Open/
                          <br />
                          Bookable
                        </td>
                        <td class="py-4 px-6">
                          <Row className="gap-2">
                            <div class="inline-flex overflow-hidden relative justify-center items-center w-6 h-6 bg-indigo_900_c4 rounded-full dark:bg-gray-600">
                              <span class="font-bold text-white dark:text-gray-300">6</span>
                            </div>
                            <div class="inline-flex overflow-hidden relative justify-center items-center w-6 h-6 bg-indigo_900_c4 rounded-full dark:bg-gray-600">
                              <span class="font-bold text-white dark:text-gray-300">5</span>
                            </div>
                          </Row>
                        </td>
                        <td class="py-4 px-6">
                          <div class="inline-flex overflow-hidden relative justify-center items-center w-6 h-6 bg-indigo_900_c4 rounded-full dark:bg-gray-600">
                            <span class="font-bold text-white dark:text-gray-300">2</span>
                          </div>
                        </td>
                        <td class="py-4 px-6">
                          <div class="inline-flex overflow-hidden relative justify-center items-center w-6 h-6 bg-indigo_900_c4 rounded-full dark:bg-gray-600">
                            <span class="font-bold text-white dark:text-gray-300">0</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Column>
            </Stack>
            <Footer1 className="bg-indigo_900 font-ptsans 2xl:mt-[104px] 3xl:mt-[124px] lg:mt-[73px] xl:mt-[92px] w-[100%]" />
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default GrouphomepagePage;

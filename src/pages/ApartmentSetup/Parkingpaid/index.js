import React from "react";
import { SelectDay } from "components/SelectDay";
import {
  Column,
  Row,
  Text,
  Img,
  Line,
  Stack,
  Button,
} from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";

const ParkingpaidPage = () => {
  const navigate = useNavigate();

  function handleNavigate73() {
    navigate("/nl1");
  }
  function handleNavigate74() {
    navigate("/parking");
  }
  function handleNavigate75() {
    navigate("/parkingfree");
  }
  function handleNavigate76() {
    navigate("/parking");
  }
  function handleNavigate77() {
    navigate("/Language");
  }

  return (
    <>
    <Column className="bg-gray_100 font-ptsans items-center justify-start 2xl:mb-[100px] mx-[auto] xl:pb-[102px] 2xl:pb-[115px] 3xl:pb-[138px] lg:pb-[81px] w-[100%]">
    <Column className="items-center justify-start w-[100%]">
      <HeaderOTAAdmin className="w-[100%]" />
        <Column className="justify-start w-[100%]">
          <Row className="bg-gray_50 items-left justify-evenly pt-6 pb-4 w-[100%]">
            <Row className="bg-gray_50 items-center justify-center w-[19%]">

              <Stack className= "items-center justify center">
                <Row>
                  <Text className="Step1 cursor-pointer mt-1" variant="body4" onClick={handleNavigate73}>
                    Name and location
                  </Text>
                  <Img
                    src="images/img_checkmark.svg"
                    className="checkmark"
                    alt="checkmark"
                  />
                </Row>
                <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[-5px] 3xl:mt-[31px] w-[100%]">
                  <Text className="text-[13px] text-gray_800 underline italic">
                    100% completed
                  </Text>
                </Row>
              </Stack>
            </Row>
            <Column className="bg-gray_50 items-center justify-center w-[19%]">
              <Stack className= "items-center justify center">
                <Text className="Step2 mb-2.5 2xl:mt-[5px]" variant="body4">
                  Property Setup
                </Text>
                <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[1px] 3xl:mt-[31px] w-[100%]">
                    <Text className="text-[13px] text-gray_800 underline italic">
                      40% completed
                    </Text>
                </Row>
              </Stack>
            </Column>
            <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
              <Text className="Step2 mb-2.5 2xl:mt-[10px]" variant="body4">
                Photos
              </Text>
            </Column>
            <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
              <Text className="Step2 mb-2.5 2xl:mt-[10px]" variant="body4">
                Pricing and Calendar
              </Text>
            </Column>
        </Row>
        <Line className="bg-gray_700_33 h-[0.5px] w-[100%]" />
            <Text className="columnrectangleeight xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-black_900 w-[auto]"
            variant="body1">
              Tell us about the parking situation at your apartment
            </Text>
            <Column className="items-center justify-start xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[39%]">
              <Column className="bg-white_A700 justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] shadow-bs4 w-[100%]">
                <Column className="justify-start ml-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[50%]">
                <Text
                  className="font-bold text-black_900 mb-2 w-[100%]"
                  variant="body2"
                >
                  Is parking available to guests?
                </Text>
                <div class="flex items-center mb-4" >
                		<input id="default-radio-1" type="radio" value="" onClick={handleNavigate75} name="default-radio" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                		<label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes, free</label>
              	</div>
              	<div class="flex items-center mb-4">
                		<input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                		<label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes, paid</label>
              	</div>
              	<div class="flex items-center mb-4">
                  	<input id="default-radio-3" type="radio" value="" onClick={handleNavigate74} name="default-radio" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  	<label for="default-radio-3" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
              	</div>
                  <Text
                    className="font-bold text-black_900 mb-2 w-[100%]"
                    variant="body2"
                  >
                    How much does parking cost?
                  </Text>
                  <textarea 
                    id="message" 
                    rows="1" 
                    class="justify-start mb-1.5 block p-1 w-60 text-sm text-gray-900 bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="MYR"/>
                  <SelectDay
                    className="mb-7 border border-bluegray_102 border-solid font-normal lg:ml-[75px] xl:ml-[123px] 2xl:ml-[238px] 3xl:ml-[213px] lg:mt-[38px] xl:mt-[59px] 2xl:mt-[-37px] 3xl:mt-[68px] not-italic xl:text-[12px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[35%]"
                    placeholderClassName="text-slate_700"
                    name="Smalldropdown"
                    placeholder="Select"
                    isSearchable={false}
                    isMulti={false}
                    variant="FillWhiteA700"
                  ></SelectDay>
                </Column>
                <Text
                  className="font-bold text-black_900 mb-2 w-[100%]"
                  variant="body2"
                >
                  Do they need to reserve a parking spot?
                </Text>
                <div class="flex items-center mb-4" >
                		<input id="default-radio-1" type="radio" value="" name="default-radio-2" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
               		<label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Reservation needed</label>
              	</div>
              	<div class="flex items-center mb-6">
                		<input checked id="default-radio-2" type="radio" value="" name="default-radio-2" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                		<label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No reservation needed</label>
              	</div>
                <Text
                  className="font-bold text-black_900 mb-2 w-[100%]"
                  variant="body2"
                >
                  Where is parking located?
                </Text>
                <div class="flex items-center mb-4" >
                		<input checked id="default-radio-1" type="radio" value="" name="default-radio-3" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                		<label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">On site</label>
              	</div>
              	<div class="flex items-center mb-4">
                		<input id="default-radio-2" type="radio" value="" name="default-radio-3" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                		<label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Off site</label>
              	</div>

                <Text
                  className="font-bold text-black_900 mb-2 w-[100%]"
                  variant="body2"
                >
                  What type of parking is it?
                </Text>
                <div class="flex items-center mb-4" >
                  <input checked id="default-radio-1" type="radio" value="" name="default-radio-4" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Private</label>
                </div>
                <div class="flex items-center mb-4">
                  <input id="default-radio-2" type="radio" value="" name="default-radio-4" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Public</label>
                </div>
              </Column>
            </Column>
            <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[39%]" />
            <Row>
              <Row className="mb-14 items-center xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
                <Stack
                  className="common-pointer hover:bg-gray_400 bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                  onClick={handleNavigate76}
                >
                  <Img
                    src="images/img_expandarrow.png"
                    className="ExpandArrow"
                    alt="ExpandArrow"
                    
                  />
                </Stack>
                <Button
                  className=" font-bold bg-sky-700 hover:bg-indigo_901 lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
                  variant="OutlineLightblue8001_2"
                  onClick={handleNavigate77}
                >
                  Continue
                </Button>
              </Row> 
              <Row className="mb-14 items-center xl:ml-[110px] 2xl:ml-[20px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
                <Button
                  className=" font-bold bg-gray_700 hover:bg-gray_900 text-white rounded-full"
                >
                  Save draft
                </Button>
              </Row>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default ParkingpaidPage;
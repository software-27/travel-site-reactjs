import React from "react";
import Header from "components/Header/Header";
import { Input } from "components";
import { useState, useEffect } from "react";
import {
  Column,
  Stack,
  Img,
  Row,
  Text,
  PagerIndicator,
  Button,
  List,
  Line,
} from "components";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";

const PropertyDetailsLivingRoom = () => {
  const navigate = useNavigate();
  const [lrSofaBed, setLrSofaBed] = useState();

  function handleNavigate42() {
    navigate("/nl4");
  }

  function handleNavigateSave() {

    console.log('lrSofaBed', lrSofaBed)
    localStorage.setItem('lrSofaBed', lrSofaBed)

    navigate("");
  }
  
  const [show, setShow] = useState();
  const [showhide, setShowhide] = useState("no");

  const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };  

  useEffect(() => {
    // Retrieve values from localStorage on page load
    const storedLrSofaBed = localStorage.getItem("lrSofaBed");

    // Update state with stored values if they exist

    if (storedLrSofaBed) {
      setLrSofaBed(Number(storedLrSofaBed));
    }

    console.log('storedLrSofaBed: ', storedLrSofaBed)

  }, []);


  return (
    <>
    <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] xl:pb-[102px] 2xl:pb-[115px] 3xl:pb-[138px] lg:pb-[81px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <HeaderOTAAdmin className="w-[100%]" />
          <Column className="justify-start w-[100%]">
            <Row className="bg-gray_50 items-left justify-evenly  w-[100%]">
              <Row className="bg-gray_50 items-center justify-center w-[19%]">
                <Text className="Step1" variant="body4">
                  Name and location
                </Text>
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark"
                />
              </Row>
              <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
                <Text className="Step2 mb-2.5" variant="body4">
                  Property Setup
                </Text>
                <PagerIndicator
                  className="mb-3 h-[5px] w-[max-content]"
                  count={7}
                  activeCss="inline-block cursor-pointer w-[35px] h-[5px] bg-blue_300"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer w-[35px] h-[5px] bg-gray_502"
                  selectedWrapperCss="inline-block mx-[1px]"
                  unselectedWrapperCss="inline-block mx-[1px]"
                />
              </Column>
              <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
                <Text className="Step2 mb-2.5" variant="body4">
                  Photos
                </Text>
              </Column>
              <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
                <Text className="Step2 mb-2.5" variant="body4">
                  Pricing and Calendar
                </Text>
              </Column>
            </Row>
            <Line className="bg-gray_700_33 h-[0.5px] w-[100%]" />
            <Column className="justify-start xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[159px] lg:ml-[94px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] pr-[3px] py-[3px] w-[40%]">
              <Text
                className="ml-[4px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic text-black_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Living Room
              </Text>
              <Column className="bg-white_A700 items-center justify-start ml-[4px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] shadow-bs4 w-[99%]">
                <Column className="justify-start mb-[3px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                  <Column className="items-left justify-start w-[100%]">
                  </Column>
                  
                  <List
                    className="gap-y-0 min-h-fit w-[100%]"
                    orientation="vertical"
                    >
                    
                    <Row className="listcar items-start w-[100%]">
                      <Img 
                        src="images/img_notification.svg" 
                        className="mx-5 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] mt-[1px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]" 
                        alt="notification" 
                      />
                      <Column className="justify-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] mt-[2px] pt-[3px] w-[60%]">
                        <Column className="items-center justify-start w-[71%]">
                          <Text
                            className="font-normal text-black_900 w-[auto]"
                            variant="body4"
                          >
                            Sofa bed
                          </Text>
                          <Text className="columndoublebed" variant="body6">
                            Variable size
                          </Text>
                        </Column>                      
                        </Column>
                        <Input
                          id="number"
                          className="text-center font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:required text-slate_700 w-[100px]"
                          name="GroupFiftyEight"
                          placeholder="0"
                          size="sm"
                          type="number"
                          value={lrSofaBed}
                          onInput={e=> setLrSofaBed(e.target.value)}
                        />
                      </Row>
                      
                    </List>

              </Column>
            </Column>
          </Column>
          <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[130px] 2xl:ml-[140px] 3xl:ml-[168px] lg:ml-[108px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[39%]" />
          <Row className="items-center justify-start xl:ml-[130px] 2xl:ml-[140px] 3xl:ml-[168px] lg:ml-[108px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
          <Stack
            className="common-pointer hover:bg-gray_400 bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
            onClick={handleNavigate42}
          >
          <Img
            src="images/img_arrowleft.svg"
            className="arrowleft1"
            alt="arrowleft"
            />
        </Stack>
        <Button
          className="font-bold bg-sky-700 hover:bg-indigo_901 lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
          variant="OutlineLightblue8001_2"
          onClick={handleNavigateSave}
        >
          Save
        </Button>
      </Row>
    </Column>
  </Column>
</Column>
</>
  );
};

export default PropertyDetailsLivingRoom;

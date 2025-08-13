import React, { useState, useEffect } from "react";

import { Column, Stack, Text, Row, Line, Input, Img, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";
// import PropertyAPI from "api/propertyApi";
import axios from 'axios';
import GlobalConstant from "constant/global";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";

const NameLocation1stPagePage = () => {

  const [name, setName] = useState();

  const navigate = useNavigate();

  // const propertyApi = new PropertyAPI();

  function handleNavigate24() {
    navigate("/questionaboutproperty");
  }
  
  function handleNavigate25() {
    console.log('name: ', name)

    localStorage.setItem('name', name)

    const postData = {
      "name": name,
    }

    postProperty(postData);

    navigate("/nl2");
  }

  async function postProperty(postData){
    try {
      // Retrieve the property owner ID from local storage
      const propertyOwnerId = localStorage.getItem('property_owner_id');
      console.log('Property Owner Id:', propertyOwnerId);
      
      // const response = await axios.post(`http://localhost:8080/api/property/createProperty/${propertyOwnerId}`, postData);
      let check = GlobalConstant.BASE_API + `/api/property/createProperty/${propertyOwnerId}`;
      console.log('check: ',check, ' test: ', GlobalConstant.TEST)
      const response = await axios.post(GlobalConstant.BASE_API + `/api/property/createProperty/${propertyOwnerId}`,
      postData
      );
      
      console.log('response: ', response)

      // navigate("/nl2");

      let data = response.data;
      localStorage.setItem('property_owner_id', data.property_owner_id)
      localStorage.setItem('property_id',data.property_id)
    }
    catch(error){
      console.log(error)
    }
  }

  // useEffect(() => {
  //   // Retrieve values from localStorage on page load
  //   const storedName = localStorage.getItem("name");

  //   // Update state with stored values if they exist
  //   if (storedName) {
  //     setName(String(storedName));
  //   }

  //   console.log('storedName: ', storedName)

  // }, []);

  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <HeaderOTAAdmin className="w-[100%]" />
          <Column className="justify-start w-[100%]">
           
              <Column className="justify-center pt-[2px] w-[100%]">
                <Row className="bg-gray_50 items-center justify-evenly py-4 w-[100%]">
                  <Row className="bg-gray_50 items-center justify-center h-full w-[19%]">
                    <Column className="w-[100%] justify-center items-center">
                      <Text className="cursor-pointer xl:mt-[4px]" variant="body4">
                        Name and location
                      </Text>
                      <Text className="text-[13px] text-gray_800 underline italic">
                        0% completed
                      </Text>
                    </Column>
                  </Row>
                  <Column className="bg-gray_50 items-center justify-center w-[19%]">
                    <Stack className="items-center justify center">
                      <Text className="Step2 mb-2.5 xl:mt-[4px] 2xl:mt-[5px]" variant="body4">
                        Property Setup
                      </Text>

                    </Stack>
                  </Column>
                  <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
                    <Text className="Step2 mb-2.5 xl:mt-[4px] 2xl:mt-[10px]" variant="body4">
                      Photos
                    </Text>
                  </Column>
                  <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
                    <Text className="Step2 mb-2.5 xl:mt-[4px] 2xl:mt-[10px]" variant="body4">
                      Pricing and Calendar
                    </Text>
                  </Column>
                </Row>
                <Line className="bg-gray_700_33 h-[0.5px] w-[100%]" />
              </Column>
           
              <Text
                  className="mt-[40px] xl:ml-[110px] not-italic text-black_900 sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] 3xl:text-[32px] w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  What’s the name of your place?
                </Text>
            <Row className="mt-[20px] w-[100%]">
           
            <Column className=" xl:ml-[110px] w-[40%]">
               
                <Column className="items-center justify-start w-[100%]">
                  <Column className="bg-white shadow-bs3 justify-center lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] w-[100%]">
                    <label className="block">
                      <Text className="Maincard" variant="body2">
                        Property name
                      </Text>
                      <Input
                        id="propertyname"
                        className="font-normal not-italic p-[0] sm:text-[8px] md:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:required text-slate_700 w-[100%]"
                        wrapClassName="sm:mb-[113px] md:mb-[171px] lg:mb-[229px] xl:mb-[287px] 2xl:mb-[323px] 3xl:mb-[387px] sm:mt-[] md:mt-[] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%] "
                        variant="OutlineGray503"
                        placeholder="Enter property name"
                        shape="RoundedBorder3"
                        size="sm"
                        value={name}
                        onInput={e=> setName(e.target.value)}
                      />
                      
                    </label>
                  </Column>
                </Column>
                <Line className="bg-gray_700_33 h-[0.5px] sm:mt-[8px] md:mt-[12px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]" />
                <Row className="mb-[300px] gap-2 items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                  <Stack onClick={handleNavigate24} className="bg-white_A700 hover:bg-gray_400 sm:h-[35px] md:h-[40px] lg:h-[45px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]">
                    {/* <Img
                          src="images/img_expandarrow.png"
                          className="ExpandArrow items-center sm:h-[14px] md:h-[16px] lg:h-[18px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[24px] sm:w-[14px] md:w-[16px] lg:w-[18px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[24px] "
                          alt="ExpandArrow"
                          /> */}
                    <Img
                      src="images/img_arrowleft_14X7.svg"
                      className="arrowleft1 md:h-[16px] md:w-[16px]"
                      alt="arrowleft"
                    />
                  </Stack>
                  <Button
                    className="common-pointer bg-sky-700 hover:bg-indigo_901 font-bold md:p-2 sm:h-[35px] md:h-[40px] lg:h-[45px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] sm:text-[12px] md:text-[13px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] justify-center items-center text-center text-white_A700 w-[85%]"
                    onClick={handleNavigate25}
                    variant="OutlineLightblue8001_2"
                    position="center"
                  >
                    Continue
                  </Button>
                  <Button
                    className="text-sm font-bold bg-gray_700 hover:bg-gray_900 w-[25%] text-white rounded-full"
                  >
                    Save draft
                  </Button>
                </Row>
                </Column>





                <Column className="bg-white shadow-bs3 items-center justify-start ml-3 sm:p-[7px] md:p-[9px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] h-fit w-[20%]">
                <Column className="justify-start mb-4 w-[100%]">
                  <Row className="items-start w-[100%]">
                    <Img
                      src="images/img_thumbsup.svg"
                      className="Idea"
                      alt="thumbsup"
                    />
                    <Text
                      className="font-bold leading-[normal] md:ml-[12px] lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-black_900 w-[100%]"
                      variant="body2"
                    >
                      What should I consider when choosing a name?
                    </Text>
                    <Img
                      src="images/img_close_23X23.svg"
                      className="lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] close_One1"
                      alt="close"
                    />
                  </Row>
                  <Stack className=" lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[36px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
                    <Row className=" w-[100%] space-x-4 h-fit justify-start items-center">
                      <Img
                        src="images/img_akariconscirc.svg"
                        className="absolute lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:w-[4px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[8px]"
                        alt="akariconscirc"
                      />
                      <Text
                        className="font-normal leading-[normal] not-italic text-black_900 w-[90%]"
                        variant="body5"
                      >
                        Keep it short and catchy
                      </Text>
                    </Row>
                    <Row className="w-[100%] space-x-4 h-fit justify-start items-center">
                      <Img
                        src="images/img_akariconscirc.svg"
                        className="absolute lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:w-[4px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[8px]"
                        alt="akariconscirc"
                      />
                      <Text
                        className="font-normal leading-[normal] not-italic text-black_900 w-[90%]"
                        variant="body5"
                      >
                        Avoid abbreviations
                      </Text>
                    </Row>
                    <Row className="w-[100%] space-x-4 h-fit justify-start items-center">
                      <Img
                        src="images/img_akariconscirc.svg"
                        className="absolute lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:w-[4px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[8px]"
                        alt="akariconscirc"
                      />
                      <Text
                        className="font-normal leading-[normal] not-italic text-black_900 w-[90%]"
                        variant="body5"
                      >
                        Stick to the facts
                      </Text>
                    </Row>
                  </Stack>
                </Column>
                <Column className="items-center justify-start l 2xl:mb-[27px] 3xl:mb-[32px] w-[100%]">
                  <Row className="items-start w-[100%]">
                    <Img
                      src="images/img_lightbulb.svg"
                      className="lightbulb"
                      alt="lightbulb"
                    />
                    <Text
                      className="font-bold leading-[normal] lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-black_900 w-[60%]"
                      variant="body2"
                    >
                      Why do I need to name my property?
                    </Text>
                  </Row>
                  <Text
                    className="xl:ml-[18px] font-normal leading-[normal] ml-2 xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] not-italic text-black_900 w-[75%]"
                    variant="body5"
                  >
                    This is the name that will appear as the title of your listing on our site. It should tell guests something specific about your place, where it is or what you offer. This will be visible to anyone visiting our site, so don’t include your address in the name{" "}
                  </Text>
                </Column>
              </Column>

              
            </Row>


          
            
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default NameLocation1stPagePage;

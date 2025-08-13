import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectBoxcopy, selectOptions } from "components/SelectBox copy";
import {
  Column,
  Row,
  Text,
  Img,
  Line,
  Stack,
  Switch,
  List,
  SelectBox,
  Button,
} from "components";
import Header from "components/Header/Header";
// import PropertyAPI from "api/propertyApi";
import axios from 'axios';
import GlobalConstant from "constant/global";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";


const RulesOnePage = () => {
  //declare
  const [smoking, setSmoking] = useState(false);
  const [pets, setPets] = useState(false);
  const [children, setChildren] = useState(false);
  const [parties, setParties] = useState(false);
  const [selectedCheckInFrom, setSelectedCheckInFrom] = useState('15:00');
  const [selectedCheckInUntil, setSelectedCheckInUntil] = useState('15:00');
  const [selectedCheckOutFrom, setSelectedCheckOutFrom] = useState('15:00');
  const [selectedCheckOutUntil, setSelectedCheckOutUntil] = useState('15:00');

  const navigate = useNavigate();

  // const propertyApi = new PropertyAPI();

  // handle switch Smoking 
  const handleSwitch1Toggle = (isChecked) => {
    setSmoking(isChecked);
  };

  // handle switch Pets
  const handleSwitch2Toggle = (isChecked) => {
    setPets(isChecked);
  };

  // handle switch Children
  const handleSwitch3Toggle = (isChecked) => {
    setChildren(isChecked);
  };

  // handle switch Parties 
  const handleSwitch4Toggle = (isChecked) => {
    setParties(isChecked);
  };

  const handleOptionChangeCIF = (option) => {
    setSelectedCheckInFrom(option);
    console.log('optionCIF: ', option)
  };

  const handleOptionChangeCIU = (option) => {
    setSelectedCheckInUntil(option);
    console.log('optionCIU: ', option)
  };

  const handleOptionChangeCOF = (option) => {
    setSelectedCheckOutFrom(option);
    console.log('optionCOF: ', option)
  };

  const handleOptionChangeCOU = (option) => {
    setSelectedCheckOutUntil(option);
    console.log('optionCOU: ', option)
  };

  function handleNavigate73() {
    navigate("/nl1");
  }

  // continue button
  function handleNavigate77() {
    console.log('Smoking: ', smoking, ' Pets: ', pets, ' Children: ', children, 'Parties: ', parties)

    // localStorage.setItem('inputProperties',inputProperties)
    // localStorage.setItem('propertyUnit',propertyUnit)
    // localStorage.setItem('sameAddress',sameAddress)

    localStorage.setItem('selectedCheckInFrom', selectedCheckInFrom)
    localStorage.setItem('selectedCheckInUntil', selectedCheckInUntil)
    localStorage.setItem('selectedCheckOutFrom', selectedCheckOutFrom)
    localStorage.setItem('selectedCheckOutUntil', selectedCheckOutUntil)

    const postData = {
      "h_smoking_allowed": smoking,
      "h_pet_allowed": pets,
      "h_children_allowed": children,
      "h_parties_events_all": parties,
      "checkin_start": `${selectedCheckInFrom}:00`,
      "checkin_end": `${selectedCheckInUntil}:00`,
      "checkout_start": `${selectedCheckOutFrom}:00`,
      "checkout_end": `${selectedCheckOutUntil}:00`
    }
    postPropertyRules(postData);
    console.log('post address: ', postData)

    navigate("/hostprofile");
  }

  function postPropertyRules(postData) {
    console.log('post1: ', postData)
  }

  async function postPropertyRules(postData) {
    // const response = await propertyApi.postPropertyOwner(postData);
    try {
      // Retrieve the property ID from local storage
      const propertyId = localStorage.getItem('property_id');
      console.log('Property Id:', propertyId);

      // const response = await axios.post(`http://localhost:8080/api/property/addRulesProperty/${propertyId}`, postData);
      let check = GlobalConstant.BASE_API + `/api/property/addRulesProperty/${propertyId}`;
      console.log('check: ',check, ' test: ', GlobalConstant.TEST)
      const response = await axios.post(GlobalConstant.BASE_API + `/api/property/addRulesProperty/${propertyId}`,
      postData
      );
      
      console.log('response: ', response)

      let data = response.data;

      localStorage.setItem('property_id', data.property_id)
    }
    catch (error) {
      console.log(error)
    }
  }

  function handleNavigate76() {
    navigate("/language");
  }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start 2xl:mb-[100px] mx-[auto] xl:pb-[102px] 2xl:pb-[115px] 3xl:pb-[138px] lg:pb-[81px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <HeaderOTAAdmin className="w-[100%]" />
          <Column className="justify-start w-[100%]">
            <Row className="bg-gray_50 items-left justify-evenly pt-6 pb-4 w-[100%]">
              <Row className="bg-gray_50 items-center justify-center w-[19%]">

                <Stack className="items-center justify center">
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
                <Stack className="items-center justify center">
                  <Text className="Step2 mb-2.5 2xl:mt-[5px]" variant="body4">
                    Property Setup
                  </Text>
                  <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[1px] 3xl:mt-[31px] w-[100%]">
                    <Text className="text-[13px] text-gray_800 underline italic">
                      70% completed
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

            <Text
              className="columnrectangleeight xl:ml-[112px] 2xl:ml-[124px] 3xl:ml-[150px] lg:ml-[90px] lg:mt-[36px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-black_900 w-[auto]"
              variant="body1"
            >
              House rules
            </Text>
            <Column className="items-center justify-start xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[39%]">
              <Row className="items-end lg:ml-[0px] xl:ml-[8px] 2xl:ml-[13px] 3xl:ml-[21px] w-[100%]">
                <Column className="bg-white_A700 justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] shadow-bs4 w-[100%]">
                  <Row className="items-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]">
                    <Text className="Smoking">
                      Smoking allowed
                    </Text>
                    <Switch
                      checked={smoking}
                      onChange={handleSwitch1Toggle}
                      // value={false}
                      className="mb-[2px] lg:ml-[236px] xl:ml-[295px] 2xl:ml-[332px] 3xl:ml-[398px] w-[7%]"
                    />
                  </Row>
                  <Row className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                    <Text className="Pets">
                      Pets allowed
                    </Text>
                    <Switch
                      checked={pets}
                      onChange={handleSwitch2Toggle}
                      // value={false}
                      className="mb-[1px] lg:ml-[257px] xl:ml-[323px] 2xl:ml-[364px] 3xl:ml-[437px] w-[7%]"
                    />
                  </Row>
                  <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                    <Text className="Children">
                      Children allowed
                    </Text>
                    <Switch
                      checked={children}
                      onChange={handleSwitch3Toggle}
                      // value={false}
                      className="mb-[1px] lg:ml-[237px] xl:ml-[297px] 2xl:ml-[334px] 3xl:ml-[401px] w-[7%]"
                    />
                  </Row>
                  <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                    <Text className="Parties">
                      Parties/events allowed
                    </Text>
                    <Switch
                      checked={parties}
                      onChange={handleSwitch4Toggle}
                      // value={false}
                      className="mb-[1px] lg:ml-[211px] xl:ml-[262px] 2xl:ml-[295px] 3xl:ml-[353px] w-[7%]"
                    />
                  </Row>
                  <List
                    className="gap-[0] xl:mb-[110px] 2xl:mb-[124px] 3xl:mb-[148px] lg:mb-[88px] min-h-[auto] lg:mt-[47px] xl:mt-[59px] 2xl:mt-[67px] 3xl:mt-[80px] w-[100%]"
                    orientation="vertical"
                  >
                    <Column className="rules_one">
                      <Column className="justify-start w-[100%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Check in
                        </Text>
                        <Row className="flex items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px]">
                          {/* <Text className="Pets" variant="body4">
                          From
                        </Text>
                        <Text className="Until" variant="body4">
                          Until
                        </Text> */}
                          <div className="column">
                            <Text className="Pets" variant="body4">
                              From
                            </Text>
                          </div>
                          <div className="column ml-[30px]">
                            <Text className="Until" variant="body4">
                              Until
                            </Text>
                          </div>
                        </Row>
                        <Row className="items-center justify-between lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                          <SelectBoxcopy
                            className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[47%]"
                            placeholderClassName="text-black_900"
                            name="time"
                            // placeholder="15:00"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_5X9.svg"
                                className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                                alt="arrow_down"
                              />
                            }
                            value={selectedCheckInFrom}
                            onChange={handleOptionChangeCIF}
                            // options={selectOptions}
                            shape="RoundedBorder2"
                          ></SelectBoxcopy>
                          <SelectBoxcopy
                            className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[47%]"
                            placeholderClassName="text-black_900"
                            name="time One"
                            // placeholder="15:00"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_5X9.svg"
                                className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                                alt="arrow_down"
                              />
                            }
                            value={selectedCheckInUntil}
                            onChange={handleOptionChangeCIU}
                            shape="RoundedBorder2"
                          ></SelectBoxcopy>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="rules_one">
                      <Column className="justify-start w-[100%]">
                        <Text
                          className="mt-2 font-bold text-black_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Check out
                        </Text>
                        <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px]">
                          {/* <Text className="Pets" variant="body4">
                            From
                          </Text>
                          <Text className="Until" variant="body4">
                            Until
                          </Text> */}
                          <div className="column">
                            <Text className="Pets" variant="body4">
                              From
                            </Text>
                          </div>
                          <div className="column ml-[30px]">
                            <Text className="Until" variant="body4">
                              Until
                            </Text>
                          </div>
                        </Row>
                        <Row className="items-center justify-between lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                          <SelectBoxcopy
                            className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[47%]"
                            placeholderClassName="text-black_900"
                            name="time One"
                            // placeholder="15:00"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_5X9.svg"
                                className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                                alt="arrow_down"
                              />
                            }
                            value={selectedCheckOutFrom}
                            onChange={handleOptionChangeCOF}
                            shape="RoundedBorder2"
                          ></SelectBoxcopy>
                          <SelectBoxcopy
                            className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[47%]"
                            placeholderClassName="text-black_900"
                            name="time One One"
                            // placeholder="15:00"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_5X9.svg"
                                className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                                alt="arrow_down"
                              />
                            }
                            value={selectedCheckOutUntil}
                            onChange={handleOptionChangeCOU}
                            shape="RoundedBorder2"
                          ></SelectBoxcopy>
                        </Row>
                      </Column>
                    </Column>
                  </List>
                </Column>
              </Row>

            </Column>


            <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[108px] 2xl:ml-[132px] 3xl:ml-[156px] lg:ml-[96px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[39%]" />
            <Row>
              <Row className="mb-14 items-center xl:ml-[108px] 2xl:ml-[132px] 3xl:ml-[156px] lg:ml-[96px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
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

export default RulesOnePage;
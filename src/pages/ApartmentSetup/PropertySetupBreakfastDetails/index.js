import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Column, Row, Text, Img, Button, Line, Stack, Input } from "components";
import axios from "axios";
import Header from "components/Header/Header";
import GlobalConstant from "constant/global";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";

const PropertySetupBreakfastDetailsPage = () => {
  const navigate = useNavigate();
  const [isBooleanButtonClicked, setIsBooleanButtonClicked] = useState(false);
  const [isBooleanPriceIncluded, setIsBooleanPriceIncluded] = useState(false);
  const [price_per_person, setPricePerPerson] = useState('');
  const [list_breakfastIds, setListBreakfast] = useState([]);
  // const [selectedBreakfastIds, setSelectedBreakfastIds] = useState([]);
  // const [selectedBreakfastData, setSelectedBreakfastData] = useState(null);

  // useEffect(() => {
  //   fetchBreakfastData();
  // }, []);

  async function postPropertyBreakfast(postData) {

    try {
      // Retrieve the property  ID from local storage
      const propertyId = localStorage.getItem('property_id');
      //const propertyOwnerId = localStorage.getItem('property_owner_id');
      console.log('Property Id:', propertyId);
      //console.log('Property Owner Id:', propertyOwnerId);

      // Fetch breakfast data from the other table

      // const response = await axios.post(`http://localhost:8080/api/property/addBreakfastProperty/${propertyId}`, postData);
      let check = GlobalConstant.BASE_API + `/api/property/addBreakfastProperty/${propertyId}`;
      console.log('check: ',check, ' test: ', GlobalConstant.TEST)
      const response = await axios.post(GlobalConstant.BASE_API + `/api/property/addBreakfastProperty/${propertyId}`,
      postData
      );
      
      console.log('Response: ', response)
      // navigate("/nl1");
      let data = response.data;
      // localStorage.setItem('property_owner_id', data.property_owner_id)
      localStorage.setItem('property_id', data.property_id);
      localStorage.setItem('breakfastId',data.breakfastId);
      // console.log("List:" , data.breakfastId);
    }
    catch (error) {
      console.log('Error:', error)
    }
  }

  // async function fetchBreakfastData() {
  //   try {
  //     const breakfastId = localStorage.getItem('breakfast_id');
  //     const response = await axios.get(`http://localhost:8080/api/property/breakfast/${breakfastId}`);
  //     const data = response.data;
  //     const breakfastIds = data.map(item => item.id); // Assuming the breakfast data contains an "id" field
  //     setListBreakfast(breakfastIds);
  //     localStorage.setItem('breakfastId',data.breakfastId);
  //     console.log("List:" , data.breakfastId);
  //     // return data; // Assuming the response is an array of breakfast items
  //   } catch (error) {
  //     console.log('Error:', error);
  //     // return []; // Return an empty array if an error occurs
  //     setListBreakfast([]);
  //   }
  // }

  //continue button
  function handleNavigate51() {
    console.log('breakfast:', isBooleanButtonClicked, 'price_included: ', isBooleanPriceIncluded, 'price_per_person', price_per_person, 'list_breakfast', list_breakfastIds)
    localStorage.setItem('breakfast', isBooleanButtonClicked)
    localStorage.setItem('price_included', isBooleanPriceIncluded)
    localStorage.setItem('price_per_person', price_per_person)
    localStorage.setItem('list_breakfast', JSON.stringify(list_breakfastIds));
    // localStorage.setItem('list_breakfast', list_breakfast);
    // console.log('Breakfastlist: ', list_breakfast)

    const postData = {
      "breakfast": isBooleanButtonClicked,
      "price_included": isBooleanPriceIncluded,
      "price_per_person": price_per_person,
      "list_breakfast": list_breakfastIds,
      // "list_breakfast": list_breakfast.map(Number)
    }
    console.log('Property Breakfast: ', postData)
    postPropertyBreakfast(postData);

    navigate("/parking");
  }
  //back button
  function handleNavigate52() {
    navigate("/psa5");
  }
  function handleNavigate53() {
    navigate("/pbdy");
  }
  function handleNavigate73() {
    navigate("/nl1");
  }
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);

  const changeHandler = (e) => {
    const getshow = e.target.value;
    setIsVisible(getshow);
  };

  const handleBooleanButtonClick = (e) => {
    setIsBooleanButtonClicked(!isBooleanButtonClicked);
    const getshow = e.target.value;
    setIsVisible(getshow);
  };

  const changeHandler1 = (e) => {
    setIsBooleanPriceIncluded(!isBooleanPriceIncluded);
    const getshow = e.target.value;
    setIsVisible1(getshow);
  };

  const [changeColor, setChangeColor] = useState(false);
  const [changeColor1, setChangeColor1] = useState(false);
  const [changeColor2, setChangeColor2] = useState(false);
  const [changeColor3, setChangeColor3] = useState(false);
  const [changeColor4, setChangeColor4] = useState(false);
  const [changeColor5, setChangeColor5] = useState(false);
  const [changeColor6, setChangeColor6] = useState(false);
  const [changeColor7, setChangeColor7] = useState(false);
  const [changeColor8, setChangeColor8] = useState(false);
  const [changeColor9, setChangeColor9] = useState(false);
  const [changeColor10, setChangeColor10] = useState(false);
  const [changeColor11, setChangeColor11] = useState(false);
  const [changeColor12, setChangeColor12] = useState(false);
  const [changeColor13, setChangeColor13] = useState(false);
  const [changeColor14, setChangeColor14] = useState(false);
  const [changeColor15, setChangeColor15] = useState(false);
  const [changeColor16, setChangeColor16] = useState(false);
  const [changeColor17, setChangeColor17] = useState(false);
  const [changeColor18, setChangeColor18] = useState(false);

  const handleClick = async (breakfastId) => {
    setChangeColor(!changeColor);
    if (list_breakfastIds.includes(breakfastId)) {
      setListBreakfast((prevState) => prevState.filter((id) => id !== breakfastId));
      // setSelectedBreakfastIds((prevState) => prevState.filter((id) => id !== buttonId));

    } else {
      setListBreakfast((prevState) => [...prevState, breakfastId]);
      // setSelectedBreakfastIds((prevState) => [...prevState, buttonId]);
    }
    // console.log('Updated list_breakfast:', list_breakfast);
  
  };
  const handleClick1 = () => {
    setChangeColor1(!changeColor1);
  };
  const handleClick2 = (breakfastId) => {
    setChangeColor2(!changeColor2);
    if (list_breakfastIds.includes(breakfastId)) {
      setListBreakfast(prevState => prevState.filter(item => item !== breakfastId));
    } else {
      setListBreakfast(prevState => [...prevState, breakfastId]);
    }
    // console.log('Updated list_breakfast:', list_breakfast);
  };
  const handleClick3 = (breakfastId) => {
    setChangeColor3(!changeColor3);
    if (list_breakfastIds.includes(breakfastId)) {
      setListBreakfast(prevState => prevState.filter(item => item !== breakfastId));
    } else {
      setListBreakfast(prevState => [...prevState, breakfastId]);
    }
    console.log('Updated list_breakfast:', list_breakfastIds);
  };
  const handleClick4 = (breakfastId) => {
    setChangeColor4(!changeColor4);
    if (list_breakfastIds.includes(breakfastId)) {
      setListBreakfast(prevState => prevState.filter(item => item !== breakfastId));
    } else {
      setListBreakfast(prevState => [...prevState, breakfastId]);
    }
    console.log('Updated list_breakfast:', list_breakfastIds);
  };
  const handleClick5 = (breakfastId) => {
    setChangeColor5(!changeColor5);
    if (list_breakfastIds.includes(breakfastId)) {
      setListBreakfast(prevState => prevState.filter(item => item !== breakfastId));
    } else {
      setListBreakfast(prevState => [...prevState, breakfastId]);
    }
    console.log('Updated list_breakfast:', list_breakfastIds);
  };
  const handleClick6 = (breakfastId) => {
    setChangeColor6(!changeColor6);
    if (list_breakfastIds.includes(breakfastId)) {
      setListBreakfast(prevState => prevState.filter(item => item !== breakfastId));
    } else {
      setListBreakfast(prevState => [...prevState, breakfastId]);
    }
    console.log('Updated list_breakfast:', list_breakfastIds);
  };
  const handleClick7 = (breakfastId) => {
    setChangeColor7(!changeColor7);
    if (list_breakfastIds.includes(breakfastId)) {
      setListBreakfast(prevState => prevState.filter(item => item !== breakfastId));
    } else {
      setListBreakfast(prevState => [...prevState, breakfastId]);
    }
    console.log('Updated list_breakfast:', list_breakfastIds);
  };
  const handleClick8 = (breakfastId) => {
    setChangeColor8(!changeColor8);
    if (list_breakfastIds.includes(breakfastId)) {
      setListBreakfast(prevState => prevState.filter(item => item !== breakfastId));
    } else {
      setListBreakfast(prevState => [...prevState, breakfastId]);
    }
    console.log('Updated list_breakfast:', list_breakfastIds);
  };
  const handleClick9 = (breakfastId) => {
    setChangeColor9(!changeColor9);
    if (list_breakfastIds.includes(breakfastId)) {
      setListBreakfast(prevState => prevState.filter(item => item !== breakfastId));
    } else {
      setListBreakfast(prevState => [...prevState, breakfastId]);
    }
    console.log('Updated list_breakfast:', list_breakfastIds);
  };
  const handleClick10 = (breakfastId) => {
    setChangeColor10(!changeColor10);
    if (list_breakfastIds.includes(breakfastId)) {
      setListBreakfast(prevState => prevState.filter(item => item !== breakfastId));
    } else {
      setListBreakfast(prevState => [...prevState, breakfastId]);
    }
    console.log('Updated list_breakfast:', list_breakfastIds);
  };
  const handleClick11 = (breakfastId) => {
    setChangeColor11(!changeColor11);
    if (list_breakfastIds.includes(breakfastId)) {
      setListBreakfast(prevState => prevState.filter(item => item !== breakfastId));
    } else {
      setListBreakfast(prevState => [...prevState, breakfastId]);
    }
    console.log('Updated list_breakfast:', list_breakfastIds);
  };
  const handleClick12 = (breakfastId) => {
    setChangeColor12(!changeColor12);
    if (list_breakfastIds.includes(breakfastId)) {
      setListBreakfast(prevState => prevState.filter(item => item !== breakfastId));
    } else {
      setListBreakfast(prevState => [...prevState, breakfastId]);
    }
    console.log('Updated list_breakfast:', list_breakfastIds);
  };
  const handleClick13 = (breakfastId) => {
    setChangeColor13(!changeColor13);
    if (list_breakfastIds.includes(breakfastId)) {
      setListBreakfast(prevState => prevState.filter(item => item !== breakfastId));
    } else {
      setListBreakfast(prevState => [...prevState, breakfastId]);
    }
    console.log('Updated list_breakfast:', list_breakfastIds);
  };
  const handleClick14 = (breakfastId) => {
    setChangeColor14(!changeColor14);
    if (list_breakfastIds.includes(breakfastId)) {
      setListBreakfast(prevState => prevState.filter(item => item !== breakfastId));
    } else {
      setListBreakfast(prevState => [...prevState, breakfastId]);
    }
    console.log('Updated list_breakfast:', list_breakfastIds);
  };
  const handleClick15 = (breakfastId) => {
    setChangeColor15(!changeColor15);
    if (list_breakfastIds.includes(breakfastId)) {
      setListBreakfast(prevState => prevState.filter(item => item !== breakfastId));
    } else {
      setListBreakfast(prevState => [...prevState, breakfastId]);
    }
    console.log('Updated list_breakfast:', list_breakfastIds);
  };
  const handleClick16 = (breakfastId) => {
    setChangeColor16(!changeColor16);
    if (list_breakfastIds.includes(breakfastId)) {
      setListBreakfast(prevState => prevState.filter(item => item !== breakfastId));
    } else {
      setListBreakfast(prevState => [...prevState, breakfastId]);
    }
    console.log('Updated list_breakfast:', list_breakfastIds);
  };
  const handleClick17 = (breakfastId) => {
    setChangeColor17(!changeColor17);
    if (list_breakfastIds.includes(breakfastId)) {
      setListBreakfast(prevState => prevState.filter(item => item !== breakfastId));
    } else {
      setListBreakfast(prevState => [...prevState, breakfastId]);
    }
    console.log('Updated list_breakfast:', list_breakfastIds);
  };
  const handleClick18 = (breakfastId) => {
    setChangeColor18(!changeColor18);
    if (list_breakfastIds.includes(breakfastId)) {
      setListBreakfast(prevState => prevState.filter(item => item !== breakfastId));
    } else {
      setListBreakfast(prevState => [...prevState, breakfastId]);
    }
    console.log('Updated list_breakfast:', list_breakfastIds);
  };

  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] xl:pb-[102px] 2xl:pb-[115px] 3xl:pb-[138px] lg:pb-[81px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <HeaderOTAAdmin className="w-[100%]" />
          <Column className="justify-start w-[100%]">
            <Row className="bg-gray_50 items-left justify-evenly pt-6 pb-4 w-[100%]">
              <Row className="bg-gray_50 items-center justify-center w-[19%]">
                <Stack className="items-center justify center">
                  <Row>
                    <Text
                      className="Step1 cursor-pointer mt-1"
                      variant="body4"
                      onClick={handleNavigate73}
                    >
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
                      30% completed
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
              className="font-normal font-ptsanscaption xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-black_900 w-[auto]"
              variant="body1"
            >
              Breakfast details
            </Text>
            <Column className="bg-white_A700 justify-start xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] shadow-bs4 w-[39%]">
              <Column className="justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[35%]">
                <Text
                  className="mb-4 font-bold text-black_900 w-[auto]"
                  variant="body2"
                >
                  Do you serve breakfast?
                </Text>
                <Row class="form-check" className="mb-1">
                  <input
                    class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="yes"
                    // onChange={changeHandler}
                    onChange={handleBooleanButtonClick}
                  //checked={isBooleanButtonClicked}
                  //  onChange={() => handleBooleanButtonClick(true)}
                  />
                  <label
                    class="form-check-label inline-block text-gray-800"
                    for="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </Row>
                <Row class="form-check">
                  <input
                    class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="no"
                    // onChange={changeHandler}
                    onChange={handleBooleanButtonClick}
                  //checked={!isBooleanButtonClicked}
                  // onChange={() => handleBooleanButtonClick(false)}
                  />
                  <label
                    class="form-check-label inline-block text-gray-800"
                    for="flexRadioDefault2"
                  >
                    No
                  </label>
                </Row>
              </Column>

              {isVisible === "yes" && (
                <Column>
                  <Text
                    className="font-bold mb-2 ml-[1px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] text-black_900 w-[auto]"
                    variant="body2"
                  >
                    Is breakfast included in the price guests pay?
                  </Text>
                  <Row class="radio" className="mb-1">
                    <input
                      class="radio-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="flexRadioDefault1"
                      id="flexRadioDefault3"
                      value="yes"
                      onChange={changeHandler1}
                    //checked={isBooleanPriceIncluded}

                    />
                    <label
                      className="xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] mt-0.5"
                      class="radio-label inline-block text-gray-800"
                      for="flexRadioDefault3"
                    >
                      Yes, it's included
                    </label>
                  </Row>
                  <Row class="radio" className="mb-1">
                    <input
                      class="radio-input appearance-none rounded-full h-4 w-4 border border-gray-200 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="flexRadioDefault1"
                      id="flexRadioDefault4"
                      value="no"
                      onChange={changeHandler1}
                    //checked={!isBooleanPriceIncluded}
                    />
                    <label
                      className="xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] mt-0.5"
                      class="radio-label inline-block text-gray-800"
                      for="flexRadioDefault4"
                    >
                      No, it cost exra
                    </label>
                  </Row>
                  {isVisible1 === "no" && (
                    <Column>
                      <Text
                        className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] Firstlastname"
                        variant="body4"
                      >
                        Breakfast price per person, per day
                      </Text>
                      <Column className="font-ptsanscaption justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[97%]">
                        <Input
                          className="font-normal p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[7px] placeholder:text-slate_700 w-[100%]"
                          wrapClassName="w-[100%]"
                          name="price"
                          placeholder="RM"
                          size="sm"
                          variant="OutlineGray502"
                          type="number"
                          value={price_per_person}
                          onInput={e => setPricePerPerson(e.target.value)}
                        ></Input>
                        <Text
                          className="font-normal mt-[4px] text-black_900 w-[auto]"
                          variant="body6"
                        >
                          Including all fees and taxes
                        </Text>
                      </Column>
                    </Column>
                  )}
                  <Line className="bg-gray_700_33 h-[1.5px] ml-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[97%]" />
                  <Column className="justify-start ml-[1px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[55%]">
                    <Text className="Whattypeofbr" variant="body2">
                      What type of breakfasts do you offer?
                    </Text>
                    <Text className="Selectallthat" variant="body6">
                      Select all that apply
                    </Text>
                  </Column>
                  <Row className="items-center ml-[1px] mr-[auto] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[87%]">
                    <Button
                      className={`font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[16%] ${changeColor === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      onClick={() => handleClick(1)}

                    >
                      A la carte
                    </Button>
                    <Button
                      className={`font-bold xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[18%] ${changeColor2 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // onClick={handleClick2}
                      onClick={() => handleClick2(2)}
                    // onClick={()=>setListBreakfast(true)}
                    // onClick={() => {
                    //   handleClick2();
                    //   setListBreakfast(true);
                    // }}
                    >
                      American
                    </Button>
                    <Button
                      className={`font-bold xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%] ${changeColor3 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // onClick={handleClick3}
                      onClick={() => handleClick3(3)}

                    >
                      Asian
                    </Button>
                    <Button
                      className={`font-bold xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[25%] ${changeColor4 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // onClick={handleClick4}
                      onClick={() => handleClick4(4)}
                    >
                      Breakfast to go
                    </Button>
                    <Button
                      className={`font-bold xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[14%] ${changeColor5 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // onClick={handleClick5}
                      onClick={() => handleClick5(5)}
                    >
                      Buffet
                    </Button>
                  </Row>
                  <Row className="items-center ml-[1px] mr-[auto] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[93%]">
                    <Button
                      className={`font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[19%] ${changeColor6 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // onClick={handleClick6}
                      onClick={() => handleClick6(6)}
                    >
                      Continental
                    </Button>
                    <Button
                      className={`font-bold xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[26%] ${changeColor7 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // onClick={handleClick7}
                      onClick={() => handleClick7(7)}
                    >
                      Full English/Irish
                    </Button>
                    <Button
                      className={`font-bold xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[12%] ${changeColor8 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // onClick={handleClick8}
                      onClick={() => handleClick8(8)}
                    >
                      Halal
                    </Button>
                    <Button
                      className={`font-bold xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%] ${changeColor9 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // onClick={handleClick9}
                      onClick={() => handleClick9(9)}
                    >
                      Italian
                    </Button>
                    <Button
                      className={`font-bold xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[19%] ${changeColor10 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // onClick={handleClick10}
                      onClick={() => handleClick10(10)}
                    >
                      Gluten-free
                    </Button>
                  </Row>
                  <Row className="items-center ml-[1px] mr-[auto] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[90%]">
                    <Button
                      className={`font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[24%] ${changeColor11 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // onClick={handleClick11}
                      onClick={() => handleClick11(11)}
                    >
                      Kosher
                    </Button>
                    <Button
                      className={`font-bold lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[24%] ${changeColor12 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        } `}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // onClick={handleClick12}
                      onClick={() => handleClick12(12)}
                    >
                      Vegan
                    </Button>
                    <Button
                      className={`font-bold lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[31%] ${changeColor13 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // onClick={handleClick13}
                      onClick={() => handleClick13(13)}
                    >
                      Vegetarian
                    </Button>
                    <Button
                      className={`font-bold lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[30%] ${changeColor14 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // onClick={handleClick14}
                      onClick={() => handleClick14(14)}
                    >
                      No Liqour
                    </Button>
                    <Button
                      className={`font-bold lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[31%] ${changeColor15 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // onClick={handleClick15}
                      onClick={() => handleClick15(15)}
                    >
                      Non-halal
                    </Button>
                  </Row>
                  <Row className="items-center ml-[-30px] mr-[auto] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[90%]">
                    <Button
                      className={`font-bold lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[51%] ${changeColor16 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // onClick={handleClick16}
                      onClick={() => handleClick16(16)}
                    >
                      No Pork/No Lard
                    </Button>
                    <Button
                      className={`font-bold lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[51%] ${changeColor17 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // onClick={handleClick17}
                      onClick={() => handleClick17(17)}
                    >
                      Buffet Breakfast
                    </Button>
                    <Button
                      className={`font-bold lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[51%] ${changeColor18 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // onClick={handleClick18}
                      onClick={() => handleClick18(18)}
                    >
                      Set Menu Breakfast
                    </Button>
                  </Row>
                </Column>
              )}
            </Column>
            <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[39%]" />
            <Row>
              <Row className="mb-14 items-center xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
                <Stack
                  className="common-pointer hover:bg-gray_400 bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                  onClick={handleNavigate52}
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
                  onClick={handleNavigate51}
                >
                  Continue
                </Button>
              </Row>
              <Row className="mb-14 items-center xl:ml-[110px] 2xl:ml-[20px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
                <Button className=" font-bold bg-gray_700 hover:bg-gray_900 text-white rounded-full">
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

export default PropertySetupBreakfastDetailsPage;

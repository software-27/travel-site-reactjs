import React from "react";
import { Column, Row, Text, Img, Line, Input, Stack, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";
import { SelectDay } from "components/SelectDay";
import { useState } from "react";
import axios from "axios";
import GlobalConstant from "constant/global";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";

const ParkingPage = () => {
  const navigate = useNavigate();
  //const [isBooleanButtonClicked, setIsBooleanButtonClicked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState('');
  const [isBooleanReservationClicked, setIsBooleanReservationClicked] = useState(false);
  const [isBooleanLocationClicked, setIsBooleanLocationClicked] = useState(false);
  const [isBooleanTypeClicked, setIsBooleanTypeClicked] = useState(false);
  const selectedOption = [
    { value: "Per hour", label: "Per hour" },
    { value: "Per day", label: "Per day" },
    { value: "Per stay", label: "Per stay" },
  ];
  const handlePriceChange = value => {
    if (value === 'no') {
      setPrice(''); // Set price to an empty string when the user selects "No"
    } else {
      setPrice(value); // Set price to the selected value for other cases
    }
  };

  
  function handleNavigate73() {
    navigate("/nl1");
  }
  function handleNavigate74() {
    navigate("/Parkingfree");
  }

  function handleNavigate75() {
    navigate("/Parkingpaid");
  }

  function handleNavigate76() {
    navigate("/pbd");
  }

  async function postPropertyParking(postData) {
    try {
      // Retrieve the property  ID from local storage
      const propertyId = localStorage.getItem('property_id');
      //const propertyOwnerId = localStorage.getItem('property_owner_id');
      console.log('Property Id:', propertyId);
      //console.log('Property Owner Id:', propertyOwnerId)

    // Prepare the data payload

      // Fetch breakfast data from the other table

      // const response = await axios.post(`http://localhost:8080/api/property/parking/${propertyId}`, postData);
      let check = GlobalConstant.BASE_API + `/api/property/parking/${propertyId}`;
      console.log('check: ',check, ' test: ', GlobalConstant.TEST)
      const response = await axios.post(GlobalConstant.BASE_API + `/api/property/parking/${propertyId}`,
      postData
      );

      console.log('Response: ', response)
      // navigate("/nl1");
      let data = response.data;
      // localStorage.setItem('property_owner_id', data.property_owner_id)
      localStorage.setItem('property_id', data.property_id);
      localStorage.setItem('parkingId', data.parkingId);
      // console.log("List:" , data.breakfastId);
    }
    catch (error) {
      console.log('Error:', error)
    }
  }

  //continue button
  function handleNavigate77() {
    console.log('[ available:', selectedCategory, 'price: ', price, 'duration:', selectedDuration, 'reservation:', isBooleanReservationClicked,
      'location:', isBooleanLocationClicked, 'type:', isBooleanTypeClicked, ']')
    localStorage.setItem('available', selectedCategory)
    localStorage.setItem('price', price)
    localStorage.setItem('duration', JSON.stringify(selectedDuration))
    localStorage.setItem('reservation', isBooleanReservationClicked)
    localStorage.setItem('location', isBooleanLocationClicked)
    localStorage.setItem('type', isBooleanTypeClicked);
    
    const postData = {
      "available": selectedCategory,
      "price": price,
      // price === 'no' ? '' : price,
      "duration": selectedDuration,
      "reservation": isBooleanReservationClicked,
      "location": isBooleanLocationClicked,
      "type": isBooleanTypeClicked,
    }

    console.log('Property Parking: ', postData)
    postPropertyParking(postData);

    navigate("/Language");
  }

  const [isVisible, setIsVisible] = useState(false);

  // const changeHandler = e => {
  //   console.log(selectedCategory)
  //   const getshow = e.target.value;
  //   setIsVisible(getshow)
  //   setSelectedCategory(e .target.value);
  // };
 //true
  const handleBooleanButtonClick1 = (e) => {
    setIsBooleanReservationClicked(!isBooleanReservationClicked);
  };
 //false
  const handleBooleanButtonClick2 = (e) => {
    setIsBooleanReservationClicked(false);
  };
  
  const handleBooleanButtonClick3 = (e) => {
    setIsBooleanLocationClicked(!isBooleanLocationClicked);
  };

  const handleBooleanButtonClick4 = (e) => {
    setIsBooleanLocationClicked(false);
  };

  const handleBooleanButtonClick5 = (e) => {
    setIsBooleanTypeClicked(!isBooleanTypeClicked);
  };

  const handleBooleanButtonClick6 = (e) => {
    setIsBooleanTypeClicked(false);
  };

  const changeHandler = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
    setIsVisible(selectedValue);
  };

  const handleDropdownChange = (selectedDuration) => {  
    setSelectedDuration(selectedDuration);   
  };


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
                  <div class="flex items-start mb-2" >
                    <input id="default-radio-1" type="radio" value="free" onChange={changeHandler} name="default-radio" checked={selectedCategory === 'free'} class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="default-radio-1" value="free" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes, free</label>
                  </div>
                  <div class="flex items-center mb-2">
                    <input id="default-radio-2" type="radio" value="paid" onChange={changeHandler} name="default-radio" checked={selectedCategory === 'paid'} class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="default-radio-2" value="paid" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes, paid</label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input id="default-radio-3" type="radio" value="no" onChange={changeHandler} name="default-radio" checked={selectedCategory === 'no'} class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="default-radio-3" value="no" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                  </div>
                </Column>

                {isVisible === 'free' && (

                  <div className="items-left justify-start w-[150%]">
                    <Text
                      className="font-bold text-black_900 mb-2 w-[100%]"
                      variant="body2"
                    >
                      Do they need to reserve a parking spot?
                    </Text>
                    <div class="flex items-center mb-2" >
                      <input id="default-radio-1" type="radio" value="" onChange={handleBooleanButtonClick1} name="default-radio-2" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Reservation needed</label>
                    </div>
                    <div class="flex items-center mb-6">
                      <input id="default-radio-2" type="radio" value="" onChange={handleBooleanButtonClick2} name="default-radio-2" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No reservation needed</label>
                    </div>
                    <Text
                      className="font-bold text-black_900 mb-2 w-[100%]"
                      variant="body2"
                    >
                      Where is parking located?
                    </Text>
                    <div class="flex items-center mb-2" >
                      <input id="default-radio-1" type="radio" value="" onChange={handleBooleanButtonClick3} name="default-radio-3" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">On site</label>
                    </div>
                    <div class="flex items-center mb-4">
                      <input id="default-radio-2" type="radio" value="" onChange={handleBooleanButtonClick4} name="default-radio-3" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Off site</label>
                    </div>

                    <Text
                      className="font-bold text-black_900 mb-2 w-[100%]"
                      variant="body2"
                    >
                      What type of parking is it?
                    </Text>
                    <div class="flex items-center mb-2" >
                      <input id="default-radio-1" type="radio" value="" onChange={handleBooleanButtonClick5} name="default-radio-4" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Private</label>
                    </div>
                    <div class="flex items-center mb-4">
                      <input id="default-radio-2" type="radio" value="" onChange={handleBooleanButtonClick6} name="default-radio-4" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Public</label>
                    </div>
                  </div>
                )}

                {isVisible === 'paid' && (

                  <div className="items-left justify-start w-[150%]">

                    <Text
                      className="font-bold text-black_900 mb-3 w-[100%]"
                      variant="body2"
                    >
                      How much does parking cost?
                    </Text>
                    <Row className="mt-2 mb-1">
                      
                    <textarea
                      id="message"
                      rows="1"
                      class="w-[50%] justify-start block p-1 w-60 text-sm text-gray-900 bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="MYR"
                      value={price}
                      onInput={e => handlePriceChange(e.target.value)}
                    />
                    <SelectDay
                    isSearchable={false}
                    isMulti={false}
                    options={selectedOption}
                    onChange={handleDropdownChange}>
                    
                    </SelectDay>
                    {/* <SelectDay
                      className=" border border-bluegray_102 border-solid font-normal lg:ml-[75px] xl:ml-[123px] 2xl:ml-[238px] 3xl:ml-[213px] lg:mt-[38px] xl:mt-[px] 2xl:mt-[-37px] 3xl:mt-[68px] not-italic xl:text-[12px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[50%]"
                      placeholderClassName="text-slate_700"
                      name="Smalldropdown"
                      placeholder="Select"
                      
                    >
                      
                    </SelectDay> */}
                    
                    </Row>

                    <p className="mb-6">Selected Duration: {selectedDuration}</p>

                    <Text
                      className=" font-bold text-black_900 mb-2 w-[100%]"
                      variant="body2"
                    >
                      Do they need to reserve a parking spot?
                    </Text>
                    <div class="flex items-center mb-2" >
                      <input id="default-radio-1" type="radio" value="" name="default-radio-2" onChange={handleBooleanButtonClick1} class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Reservation needed</label>
                    </div>
                    <div class="flex items-center mb-6">
                      <input id="default-radio-2" type="radio" value="" name="default-radio-2" onChange={handleBooleanButtonClick2} class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No reservation needed</label>
                    </div>
                    <Text
                      className="font-bold text-black_900 mb-2 w-[100%]"
                      variant="body2"
                    >
                      Where is parking located?
                    </Text>
                    <div class="flex items-center mb-2" >
                      <input id="default-radio-1" type="radio" value="" onChange={handleBooleanButtonClick3} name="default-radio-3" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">On site</label>
                    </div>
                    <div class="flex items-center mb-4">
                      <input id="default-radio-2" type="radio" value="" onChange={handleBooleanButtonClick4} name="default-radio-3" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Off site</label>
                    </div>

                    <Text
                      className="font-bold text-black_900 mb-2 w-[100%]"
                      variant="body2"
                    >
                      What type of parking is it?
                    </Text>
                    <div class="flex items-center mb-2" >
                      <input id="default-radio-1" type="radio" value="" onChange={handleBooleanButtonClick5} name="default-radio-4" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Private</label>
                    </div>
                    <div class="flex items-center mb-4">
                      <input id="default-radio-2" type="radio" value="" onChange={handleBooleanButtonClick6} name="default-radio-4" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Public</label>
                    </div>
                  </div>
                )}

                {isVisible === 'no' && (

                  <div className="items-left justify-start w-[150%]">

                  </div>
                )}

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

export default ParkingPage;
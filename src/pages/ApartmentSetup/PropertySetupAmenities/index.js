import React from "react";
import { useNavigate } from "react-router-dom";
import { Column, Row, Text, Img, Button, List, Line, Stack } from "components";
import Header from "components/Header/Header";
import { useState } from "react";
// import PropertyAPI from "api/propertyApi";
import axios from "axios";
import GlobalConstant from "constant/global";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";

const PropertySetupAmenitiesPage = () => {
  //
  const navigate = useNavigate();
  //general
  const [checkedAirConditioning, setCheckedAirConditioning] = useState(false);
  const [checkedHeating, setCheckedHeating] = useState(false);
  const [checkedFreeWifi, setCheckedFreeWifi] = useState(false);
  const [checkedElectricVehicle, setCheckedElectricVehicle] = useState(false);
  //cooking
  const [checkedKitchen, setCheckedKitchen] = useState(false);
  const [checkedKitchenette, setCheckedKitchenette] = useState(false);
  const [checkedWashingMachine, setCheckedWashingMachine] = useState(false);
  //entertaiment
  const [checkedFlatScreen, setCheckedFlatScreen] = useState(false);
  const [checkedSwimmingPool, setCheckedSwimmingPool] = useState(false);
  const [checkedHotTub, setCheckedHotTub] = useState(false);
  const [ checkedMinibar, setCheckedMinibar] = useState(false);
  const [ checkedSauna, setCheckedSauna] = useState(false);
  // outside and view
  const [checkedBalcony, setCheckedBalcony] = useState(false);
  const [checkedGardenView, setCheckedGardenView] = useState(false);
  const [ checkedTerrace, setCheckedTerrace] = useState(false);
  const [ checkedView, setCheckedView] = useState(false);
  // const propertyApi = new PropertyAPI(); 

  // continue
  function handleNavigate51() {
    //general
    console.log(
      "AirConditioning:",
      checkedAirConditioning,
       "heating: ",
      checkedHeating,
      "Free wifi:",
      checkedFreeWifi,
      "Electric vehicle charging station: ",
      checkedElectricVehicle
    );
    
    //cooking
    console.log(
      "Washing Machine:",
      checkedWashingMachine,
      "Kitchenette:",
      checkedKitchenette,
      "Kitchen:",
      checkedKitchen,
    );

    //entertaiment
    //outsideandview


  
    //general 
    let general = [];
    if (checkedAirConditioning) 
    general.push(1);
    if (checkedHeating) 
    general.push(2);
    if (checkedFreeWifi) 
    general.push(3);
    if (checkedElectricVehicle) 
    general.push(4);
    console.log("list general: ", general);

    const postDataGeneral = {
      general_ids: general,
    };

    //cooking

    let cooking = [];
    if (checkedKitchen) 
    cooking.push(1);
    if (checkedKitchenette) 
    cooking.push(2);
    if (checkedWashingMachine) 
    cooking.push(3);
    console.log("list cooking: ", cooking);

    const postDataCooking = {
      cooking_ids: cooking,
    }

    //enertaiment

    let entertaiment = [];
    if (checkedFlatScreen) 
    entertaiment.push(1);
    if (checkedSwimmingPool) 
    entertaiment.push(2);
    if (checkedHotTub) 
    entertaiment.push(3);
    if (checkedMinibar) 
    entertaiment.push(4);
    if (checkedSauna) 
    entertaiment.push(5);

    const postDataEntertaiment = {
      entertainment_ids: entertaiment,
    }
    
    //outside and view
    let outside= [];
    if (checkedBalcony) 
    outside.push(1);
    if (checkedGardenView) 
    outside.push(2);
    if (checkedTerrace) 
    outside.push(3);
    if (checkedView) 
    outside.push(4);
    const postDataOutside = {
      outside_view_ids: outside,
    }

    postPropertyGeneral(postDataGeneral);
    postPropertyCooking(postDataCooking);
    postPropertyEntertaiment(postDataEntertaiment);
    postPropertyOutside(postDataOutside);

    navigate("/pbd");
  }
//post data general
  async function postPropertyGeneral(postDataGeneral) {
    // const response = await propertyApi.postPropertyOwner(postData);
    try {
      // Retrieve the property owner ID from local storage
      const propertyId = localStorage.getItem("property_id");
      console.log("Property Id:", propertyId);

      // const response = await axios.post(`http://localhost:8080/api/property/generals/${propertyId}`, postDataGeneral);
      let check = GlobalConstant.BASE_API + `/api/property/generals/${propertyId}`;
      console.log('check: ',check, ' test: ', GlobalConstant.TEST)
      const response = await axios.post(GlobalConstant.BASE_API + `/api/property/generals/${propertyId}`,
      postDataGeneral
      );

      console.log("response: ", response);
      let data = response.data;
      localStorage.setItem("property_id", data.property_id);
    } catch (error) {
      console.log(error);
    }
  }
//post data cooking
  async function postPropertyCooking(postDataCooking) {
    // const response = await propertyApi.postPropertyOwner(postData);
    try {
      // Retrieve the property owner ID from local storage
      const propertyId = localStorage.getItem("property_id");
      //console.log("Property Id2:", propertyId);

      // const response = await axios.post(`http://localhost:8080/api/property/cooking/${propertyId}`, postDataCooking);
      let check = GlobalConstant.BASE_API + `/api/property/cooking/${propertyId}`;
      console.log('check: ',check, ' test: ', GlobalConstant.TEST)
      const response = await axios.post(GlobalConstant.BASE_API + `/api/property/cooking/${propertyId}`,
      postDataCooking
      );
      
      console.log("response: ", response);
      let data = response.data;
      localStorage.setItem("property_id", data.property_id);
    } catch (error) {
      console.log(error);
    }
  }

  async function postPropertyEntertaiment(postDataEntertaiment) {
    // const response = await propertyApi.postPropertyOwner(postData);
    try {
      // Retrieve the property owner ID from local storage
      const propertyId = localStorage.getItem("property_id");
      //console.log("Property Id2:", propertyId);

      // const response = await axios.post(`http://localhost:8080/api/property/entertainments/${propertyId}`, postDataEntertaiment);
      let check = GlobalConstant.BASE_API + `/api/property/entertainments/${propertyId}`;
      console.log('check: ',check, ' test: ', GlobalConstant.TEST)
      const response = await axios.post(GlobalConstant.BASE_API + `/api/property/entertainments/${propertyId}`,
      postDataEntertaiment
      );
      
      console.log("response: ", response);
      let data = response.data;
      localStorage.setItem("property_id", data.property_id);
    } catch (error) {
      console.log(error);
    }
  }

  async function postPropertyOutside(postDataOutside) {
    // const response = await propertyApi.postPropertyOwner(postData);
    try {
      // Retrieve the property owner ID from local storage
      const propertyId = localStorage.getItem("property_id");
      //console.log("Property Id2:", propertyId);

      // const response = await axios.post(`http://localhost:8080/api/property/outsideViews/${propertyId}`, postDataOutside);
      let check = GlobalConstant.BASE_API + `/api/property/outsideViews/${propertyId}`;
      console.log('check: ',check, ' test: ', GlobalConstant.TEST)
      const response = await axios.post(GlobalConstant.BASE_API + `/api/property/outsideViews/${propertyId}`,
      postDataOutside
      );
      
      console.log("response: ", response);
      let data = response.data;
      localStorage.setItem("property_id", data.property_id);
    } catch (error) {
      console.log(error);
    }
  }
  //back
  function handleNavigate52() {
    navigate("/nl4");
  }
  function handleNavigate73() {
    navigate("/nl1");
  }

  

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
                      10% completed
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
              What can guests use at your place?
            </Text>
            <Row className="font-ptsanscaption items-start xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[64%]">
              <List
                className="bg-white_A700 gap-[0] min-h-[auto] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs4 w-[61%]"
                orientation="vertical"
              >
                <Column className="justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mr-[189px] xl:mr-[237px] 2xl:mr-[267px] 3xl:mr-[320px] lg:my-[12px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[21px] rounded-radius4 w-[47%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body2"
                  >
                    General
                  </Text>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      id="flexCheckDefault"
                      defaultChecked={checkedAirConditioning}
                      onChange={() => setCheckedAirConditioning(!checkedAirConditioning)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                      htmlFor="flexCheckDefault"
                    >
                      Air conditioning
                    </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      id="flexCheckDefault"
                      defaultChecked={checkedHeating}
                      onChange={() => setCheckedHeating(!checkedHeating)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                      htmlFor="flexCheckDefault"
                    >
                      Heating
                    </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-radius4 w-[100%]">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      id="flexCheckDefault"
                      defaultChecked={checkedFreeWifi}
                          onChange={() => setCheckedFreeWifi(!checkedFreeWifi)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                      htmlFor="flexCheckDefault"
                    >
                      Free wifi
                    </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-radius4 w-[100%]">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      id="flexCheckDefault"
                      defaultChecked={checkedElectricVehicle}
                          onChange={() => setCheckedElectricVehicle(!checkedElectricVehicle)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                      htmlFor="flexCheckDefault"
                    >
                      Electric vehicle charging station
                    </label>
                  </Row>
                </Column>
                <Line className="self-center w-[99%] h-[1.5px] bg-gray_700_33" />
                <Column className="justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mr-[189px] xl:mr-[237px] 2xl:mr-[267px] 3xl:mr-[320px] lg:my-[12px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[21px] rounded-radius4 w-[47%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body2"
                  >
                    Cooking and cleaning
                  </Text>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      id="flexCheckDefault"
                      defaultChecked={checkedKitchen}
                      onChange={() => setCheckedKitchen(!checkedKitchen)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                      htmlFor="flexCheckDefault"
                    >
                      Kitchen
                    </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      id="flexCheckDefault"
                      defaultChecked={checkedKitchenette}
                      onChange={() => setCheckedKitchenette(!checkedKitchenette)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                      htmlFor="flexCheckDefault"
                    >
                      Kitchenette
                    </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      id="flexCheckDefault"
                      defaultChecked={checkedWashingMachine}
                      onChange={() => setCheckedWashingMachine(!checkedWashingMachine)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                      htmlFor="flexCheckDefault"
                    >
                      Washing machine
                    </label>
                  </Row>
                </Column>
                <Line className="self-center w-[99%] h-[1.5px] bg-gray_700_33" />
                <Column className="justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mr-[189px] xl:mr-[237px] 2xl:mr-[267px] 3xl:mr-[320px] lg:my-[12px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[21px] rounded-radius4 w-[47%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body2"
                  >
                    Entertainment
                  </Text>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      defaultChecked={checkedFlatScreen}
                      onChange={() => setCheckedFlatScreen(!checkedFlatScreen)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                      htmlFor="flexCheckDefault"
                    >
                      Flat-screen TV
                    </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      defaultChecked={checkedSwimmingPool}
                      onChange={() => setCheckedSwimmingPool(!checkedSwimmingPool)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                      htmlFor="flexCheckDefault"
                    >
                      Swimming pool
                    </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      defaultChecked={checkedHotTub}
                      onChange={() => setCheckedHotTub(!checkedHotTub)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                      htmlFor="flexCheckDefault"
                    >
                      Hot tub
                    </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      defaultChecked={checkedMinibar}
                      onChange={() => setCheckedMinibar(!checkedMinibar)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                      htmlFor="flexCheckDefault"
                    >
                      Minibar
                    </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      defaultChecked={checkedSauna}
                      onChange={() => setCheckedSauna(!checkedSauna)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                      htmlFor="flexCheckDefault"
                    >
                      Sauna
                    </label>
                  </Row>
                </Column>
                <Line className="self-center w-[99%] h-[1.5px] bg-gray_700_33" />
                <Column className="justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mr-[189px] xl:mr-[237px] 2xl:mr-[267px] 3xl:mr-[320px] lg:my-[12px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[21px] rounded-radius4 w-[47%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body2"
                  >
                    Outside and view
                  </Text>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      defaultChecked={checkedBalcony}
                      onChange={() => setCheckedBalcony(!checkedBalcony)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                      htmlFor="flexCheckDefault"
                    >
                      Balcony
                    </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      defaultChecked={checkedGardenView}
                      onChange={() => setCheckedGardenView(!checkedGardenView)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                      htmlFor="flexCheckDefault"
                    >
                      Garden view
                    </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      defaultChecked={checkedTerrace}
                      onChange={() => setCheckedTerrace(!checkedTerrace)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                      htmlFor="flexCheckDefault"
                    >
                      Terrace
                    </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      defaultChecked={checkedView}
                      onChange={() => setCheckedView(!checkedView)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                      htmlFor="flexCheckDefault"
                    >
                      View
                    </label>
                  </Row>
                </Column>
              </List>
              <Column className="bg-white_A700 font-ptsans items-center justify-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-bs4 w-[37%]">
                <Column className="justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[99%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Img
                      src="images/img_lightbulb.svg"
                      className="lightbulb"
                      alt="lightbulb"
                    />
                    <Text className="rowlightbulb" variant="body2">
                      What if i don’t see a facility I offer?
                    </Text>
                    <Img
                      src="images/img_close_23X23.svg"
                      className="close_One1"
                      alt="close"
                    />
                  </Row>
                  <Text
                    className="font-normal leading-[normal] lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-black_900 w-[77%]"
                    variant="body5"
                  >
                    The facilities listed here are the ones most searched for by
                    guests. After you complete your registeration, you can add
                    more facilities from a larger list in the extranet, the
                    platform you’ll use to manage your property
                  </Text>
                </Column>
              </Column>
            </Row>
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

export default PropertySetupAmenitiesPage;

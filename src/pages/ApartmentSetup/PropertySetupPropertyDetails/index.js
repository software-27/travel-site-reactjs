import React, { useEffect, useRef } from "react";
import { Psize } from "components/Psize";
import { Column, Row, Text, Img, Button, Stack, Line, Input } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import GlobalConstant from "constant/global";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";

const PropertySetupPropertyDetailsPage = () => {
  const navigate = useNavigate();

  const [changeColor, setChangeColor] = useState(false);
  const [changeColor1, setChangeColor1] = useState(false);
  const [changeColor2, setChangeColor2] = useState(false);
  const [changeColor3, setChangeColor3] = useState(false);
  const [changeColor4, setChangeColor4] = useState(false);

  const [guest, setGuest] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [apartmentSize, setApartmentSize] = useState('');
  const [roomTypeList, setRoomTypeList] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const selectedOption = [
    { value: "Square Meter", label: "Square Meter" },
    { value: "Square Foot", label: "Square Foot" },
  ];
  
  const [lrSofaBed, setLrSofaBed] = useState();
  const [osSingleBed, setOsSingleBed] = useState();
  const [osDoubleBed, setOsDoubleBed] = useState('');
  const [osLargeBed, setOsLargeBed] = useState('');
  const [osXlBed, setOsXlBed] = useState('');
  const [osBunkBed, setOsBunkBed] = useState('');
  const [osSofaBed, setOsSofaBed] = useState('');
  const [osFutonMat, setOsFutonMat] = useState('');

  const [bedroomData, setBedroomData] = useState([]);

  const labelRef1= useRef(null);
  const labelRef2 = useRef(null);
  const labelRef3= useRef(null);
  const labelRef4 = useRef(null);

  useEffect(() => {
    // callback
    setLrSofaBed(localStorage.getItem('lrSofaBed'))
    setOsSingleBed(localStorage.getItem('osSingleBed'))
    setOsDoubleBed(localStorage.getItem('osDoubleBed'))
    setOsLargeBed(localStorage.getItem('osLargeBed'))
    setOsXlBed(localStorage.getItem('osXlBed'))
    setOsBunkBed(localStorage.getItem('osBunkBed'))
    setOsSofaBed(localStorage.getItem('osSofaBed'))
    setOsFutonMat(localStorage.getItem('osFutonMat'))

  }, []);

  useEffect(() => {
    // Retrieve values from localStorage on page load
    const storedGuest = localStorage.getItem("guest");
    const storedBathrooms = localStorage.getItem("bathrooms");
    const storedApartmentSize = localStorage.getItem("apartmentSize");
    const storedApartmentSizeType = JSON.parse(localStorage.getItem("apartmentSizeType"));
    // const storedRoomTypeList = JSON.parse(localStorage.getItem("roomTypeList"));
  
    // Update state with stored values if they exist
    if (storedGuest) {
      setGuest(storedGuest);
    }
  
    if (storedBathrooms) {
      setBathrooms(storedBathrooms);
    }
  
    if (storedApartmentSize) {
      setApartmentSize(storedApartmentSize);
    }
  
    if (storedApartmentSizeType) {
      setSelectedSize(storedApartmentSizeType);
    }
  
    // if (storedRoomTypeList) {
    //   setRoomTypeList(storedRoomTypeList);
    // }

    console.log('storedGuest: ', storedGuest)
    console.log('storedBathrooms: ', storedBathrooms)
    console.log('storedApartmentSize: ', storedApartmentSize)
    console.log('storedApartmentSizeType: ', storedApartmentSizeType)
    // console.log('storedRoomTypeList: ', storedRoomTypeList)

    // if (storedRoomTypeList === 'true' && labelRef1.current) {
    //   labelRef1.current.click();
    // }

    // if (storedRoomTypeList === 'true' && labelRef2.current) {
    //   labelRef2.current.click();
    // }

    // if (storedRoomTypeList === 'true' && labelRef3.current) {
    //   labelRef3.current.click();
    // }

    // if (storedRoomTypeList === 'true' && labelRef4.current) {
    //   labelRef4.current.click();
    // }
  
  }, []);
  

  // useEffect(() => {
  //   // Retrieve values from localStorage on page load
  //   const storedGuest = localStorage.getItem("guest");
  //   const storedBathrooms = localStorage.getItem("bathrooms");
  //   const storedApartmentSize = localStorage.getItem("apartmentSize");
  //   const storedApartmentSizeType = localStorage.getItem("apartmentSizeType");
  //   const storedRoomTypeList = JSON.parse(localStorage.getItem("roomTypeList"));

  //   console.log("stored: ", storedRoomTypeList);

  //   // Update state with stored values if they exist
  //   if (storedGuest) {
  //     setGuest(storedGuest);
  //   }

  //   if (storedBathrooms) {
  //     setBathrooms(storedBathrooms);
  //   }

  //   if (storedApartmentSize) {
  //     setApartmenSize(storedApartmentSize);
  //   }

  //   // if (storedApartmentSizeType) {
  //   //   setSelectedSize(String(storedApartmentSizeType));
  //   // }

  //   // if (storedApartmentSizeType) {
  //   //   const storedSizeLabel = selectedOption.find((options) => {
  //   //     console.log("options.value:", options.value);
  //   //     console.log("storedApartmentSizeType:", storedApartmentSizeType);
  //   //     return options.value === storedApartmentSizeType;
  //   //   });

  //   //   console.log("storedSizeLabel:", storedSizeLabel);

  //   //   if (storedSizeLabel) {
  //   //     setSelectedSize(storedSizeLabel.label);
  //   //   } else {
  //   //     setSelectedSize(undefined);
  //   //   }
  //   // }

  //   if (storedRoomTypeList) {
  //     setRoomTypeList(storedRoomTypeList);
  //   }

  //   console.log('storedGuest: ', storedGuest)
  //   console.log('storedBathrooms: ', storedBathrooms)
  //   console.log('storedApartmentSize: ', storedApartmentSize)
  //   console.log('storedApartmentSizeType: ', storedApartmentSizeType)
  //   console.log('storedRoomTypeList: ', storedRoomTypeList)

  //   // if (storedPropertyUnit === 'true' && labelRef1.current) {
  //   //   labelRef1.current.click();
  //   // }

  // }, []);
  
  async function postPropertyRooms(postData) {
    // const response = await propertyApi.postPropertyOwner(postData);
    try {
      // Retrieve the property owner ID from local storage
      const propertyId = localStorage.getItem("property_id");

      //const propertyOwnerId = localStorage.getItem('property_owner_id');
      console.log("Property Id:", propertyId);

      // const response = await axios.post(`http://localhost:8080/api/property/addRoomProperty/${propertyId}`, postData);
      let check = GlobalConstant.BASE_API + `/api/property/addRoomProperty/${propertyId}`;
      console.log('check: ',check, ' test: ', GlobalConstant.TEST)
      const response = await axios.post(GlobalConstant.BASE_API + `/api/property/addRoomProperty/${propertyId}`,
      postData
      );

      console.log("response: ", response);
      let data = response.data;

      localStorage.setItem("property_id", data.property_id);
      localStorage.setItem("roomTypeId", data.roomTypeId);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNavigate48 = (index) => {
    storeInLocalStorage();
    const nextIndex = index + 1;
    // Navigate to the next page passing the nextIndex as a query parameter
    navigate(`/bedroom?index=${nextIndex}`);
  };

  function handleNavigate50() {
    storeInLocalStorage();
    navigate("/propertydetailslivingroom");
  }

  function handleNavigate49() {
    storeInLocalStorage();
    navigate("/pds");
  }
  
  const handleDropdownChange = (selectedSize) => {
    setSelectedSize(selectedSize);
  };

  function storeInLocalStorage() {
    localStorage.setItem("guest", guest);
    localStorage.setItem("bathrooms", bathrooms);
    localStorage.setItem("apartmentSize", apartmentSize);
    localStorage.setItem("apartmentSizeType", JSON.stringify(selectedSize));
    localStorage.setItem("roomTypeList", JSON.stringify(roomTypeList));
    console.log(
      "guest: ",
      guest,
      "bathrooms: ",
      bathrooms,
      "apartment size: ",
      apartmentSize,
      "roomTypeList",
      roomTypeList
    );
  }

  //continue
  function handleNavigate51() {
    // storeInLocalStorage();

    const postData = {
      "bedRoom": [],
      "livingRoom": {
        "sofaBed": lrSofaBed
      },
      "otherSpaces": {
        "singleBed": osSingleBed,
        "doubleBed": osDoubleBed,
        "largeBed": osLargeBed,
        "xlBed": osXlBed,
        "bunkBed": osBunkBed,
        "sofaBed": osSofaBed,
        "futonMat": osFutonMat
      },
      "guest": guest,
      "bathrooms": bathrooms,
      "apartmentSize": apartmentSize,
      "apartmentSizeType": selectedSize,
      "roomTypeList": roomTypeList,
    };

    // Retrieve the bedroom data from local storage
    for (let i = 1; i <= 10; i++) {
      const bedroomData = JSON.parse(localStorage.getItem(`bedroom_${i}`));
      // postData.bedRoom.push(bedroomData);
      if (bedroomData !== null) {
        postData.bedRoom.push(bedroomData);
      }
    }

    console.log("post rooms: ", postData);
    postPropertyRooms(postData);
    navigate("/psa5");
  }

  //back
  function handleNavigate52() {
    navigate("/nl3");
  }
  function handleNavigate73() {
    navigate("/nl1");
  }

  const handleClick = async (roomTypeId) => {
    setChangeColor(!changeColor);
    if (roomTypeList.includes(roomTypeId)) {
      setRoomTypeList((prevState) =>
        prevState.filter((item) => item !== roomTypeId)
      );
    } else {
      setRoomTypeList((prevState) => [...prevState, roomTypeId]);
    }
  };

  const handleClick1 = (roomTypeId) => {
    setChangeColor1(!changeColor1);
    if (roomTypeList.includes(roomTypeId)) {
      setRoomTypeList((prevState) =>
        prevState.filter((item) => item !== roomTypeId)
      );
    } else {
      setRoomTypeList((prevState) => [...prevState, roomTypeId]);
    }
  };

  const handleClick2 = (roomTypeId) => {
    setChangeColor2(!changeColor2);
    if (roomTypeList.includes(roomTypeId)) {
      setRoomTypeList((prevState) =>
        prevState.filter((item) => item !== roomTypeId)
      );
    } else {
      setRoomTypeList((prevState) => [...prevState, roomTypeId]);
    }
  };

  const handleClick3 = (roomTypeId) => {
    setChangeColor3(!changeColor3);
    if (roomTypeList.includes(roomTypeId)) {
      setRoomTypeList((prevState) =>
        prevState.filter((item) => item !== roomTypeId)
      );
    } else {
      setRoomTypeList((prevState) => [...prevState, roomTypeId]);
    }
  };

  const handleClick4 = (roomTypeId) => {
    setChangeColor4(!changeColor4);
    if (roomTypeList.includes(roomTypeId)) {
      setRoomTypeList((prevState) =>
        prevState.filter((item) => item !== roomTypeId)
      );
    } else {
      setRoomTypeList((prevState) => [...prevState, roomTypeId]);
    }
  };

  const [serviceList, setServiceList] = useState([{ service: "" }]);

  const addBedroom = () => {
    // setServiceList([...serviceList, { id: serviceList.length + 1 }]);
    const newId = serviceList.length + 1;
    setServiceList([...serviceList, { id: newId }]);

    // setBedroomData(prevData => [...prevData, `singleBed_${newId}`]);
    // Retrieve the singleBed value based on the newId
    // const singleBed = localStorage.getItem(`singleBed_${newId}`);

    // Update the bedroomData array with the new singleBed value
    // setBedroomData(prevData => [...prevData, singleBed]);
  };

  // console.log("BedroomData:", bedroomData);

  // const handleServiceRemove = (index) => {
  //   const list = [...serviceList];
  //   list.splice(index, 1);
  //   setServiceList(list);

  //   console.log("removed index: ", index + 1);
  //   localStorage.removeItem(`bedroom_${index + 1}`)
  // };
  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  
    // Update the index of the corresponding bedrooms in localStorage
    for (let i = index + 2; i <= serviceList.length + 1; i++) {
      const bedroomData = localStorage.getItem(`bedroom_${i}`);
      if (bedroomData) {
        localStorage.removeItem(`bedroom_${i}`);
        localStorage.setItem(`bedroom_${i - 1}`, bedroomData);
      }
    }
  };

  useEffect(() => {
    const storedServiceList = localStorage.getItem("serviceList");

    if (storedServiceList) {
      setServiceList(JSON.parse(storedServiceList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("serviceList", JSON.stringify(serviceList));
  }, [serviceList]);


  function formatBedroom(bedroomString) {
    const bedroom = JSON.parse(bedroomString);
    let formattedString = '';
  
    for (const key in bedroom) {
      if (bedroom.hasOwnProperty(key) && bedroom[key]) {
        formattedString += `${bedroom[key]} ${key}, `;
      }
    }
  
    formattedString = formattedString.replace(/,\s*$/, ''); // Remove trailing comma and whitespace
  
    return formattedString;
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
                      0% completed
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
            <Column className="justify-start xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[159px] lg:ml-[94px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] pr-[3px] py-[3px] w-[40%]">
              <Text
                className="ml-[4px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic text-black_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Property Details
              </Text>
              <Column className="bg-white_A700 items-center justify-start ml-[4px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] shadow-bs4 w-[99%]">
                <Column className="justify-start mb-[3px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                  <Column className="items-left justify-start w-[37%]">
                    <Text className="Firstlastname" variant="body2">
                      Where can people sleep?
                    </Text>
                  </Column>

                  <Column className="items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                    {serviceList.map((singleService, index) => (
                      <div key={index}>
                        <Column className="w-[100%]">
                          <Row className="justify-center lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
                            <Column
                              // onClick={handleNavigate48}
                              onClick={() => handleNavigate48(index)}
                              className="bg-white_A700 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-bs5 lg:w-[360px] xl:w-[440px] 2xl:w-[490px] 2xl:mr-2 common-pointer"
                            >
                              <Column className="justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                                <Text
                                  className="columneachpropertyw"
                                  variant="body4"
                                >
                                  Bedroom {index + 1}

                                </Text>
                                <Text
                                  className="font-normal font-ptsanscaption lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_500 w-[100%]"
                                  variant="body6"
                                >
                                  {formatBedroom(localStorage.getItem(`bedroom_${index + 1}`))}
                                </Text>
                              </Column>
                            </Column>

                            {/* {serviceList.length <= 1 && (
                            <Button class=" items-center h-8 px-2 ">
                              < Row>
                                <Img
                                  src="images/img_antdesignminu.svg"
                                  className="lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] lg:w-[32px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                                  alt="antdesignminu"
                                />
                              </Row>
                           </Button>)} */}

                            {serviceList.length >= 1 && (
                              <Button
                                className="items-center px-2 shadow-none"
                                onClick={() => handleServiceRemove(index)}
                              >
                                <Row>
                                  <Img
                                    src="images/img_antdesignminu.svg"
                                    className="lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] lg:w-[32px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                                    alt="antdesignminu"
                                  />
                                </Row>
                              </Button>
                            )}
                          </Row>
                        </Column>
                      </div>
                    ))}
                  </Column>

                  <Column
                    className="bg-white_A700 justify-end lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] shadow-bs5 w-[87%] common-pointer"
                    onClick={handleNavigate50}
                  >
                    <Column className="justify-start ml-[2px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[19%] ">
                      <Text className="Firstlastname" variant="body4">
                        Living Room
                      </Text>
                      <Text className="weburl_Two" variant="body6">
                        {lrSofaBed || 0} sofa bed(s)
                      </Text>
                    </Column>
                  </Column>
                  <Column
                    className="common-pointer bg-white_A700 justify-end lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] shadow-bs5 w-[87%]"
                    onClick={handleNavigate49}
                  >
                    <Column className="justify-start ml-[2px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                      <Text className="Firstlastname" variant="body4">
                        Other spaces
                      </Text>
                      <Text className="weburl_Two" variant="body6">
                        {osSingleBed > 0 && <p>{osSingleBed} single bed(s)</p>}
                        {osDoubleBed > 0 && <p>{osDoubleBed} double bed(s)</p>}
                        {osLargeBed > 0 && <p>{osLargeBed} large bed(s)</p>}
                        {osXlBed > 0 && <p>{osXlBed} XL bed(s)</p>}
                        {osBunkBed > 0 && <p>{osBunkBed} bunk bed(s)</p>}
                        {osSofaBed > 0 && <p>{osSofaBed} sofa bed(s)</p>}
                        {osFutonMat > 0 && <p>{osFutonMat} futon mat(s)</p>}
                      </Text>
                    </Column>
                  </Column>
                  <Row className="common-pointer items-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[50%]">
                    <button
                      className="w-[100%] common pointer"
                      onClick={addBedroom}
                    >
                      <Row>
                        <Img
                          src="images/img_plus.svg"
                          className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                          alt="plus"
                        />
                        <Text
                          className="lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[2px] not-italic text-light_blue_800 w-[auto]"
                          variant="body4"
                        >
                          Add Bedroom
                        </Text>
                      </Row>
                    </button>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 justify-end ml-[4px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] shadow-bs4 w-[99%]">
                <Column className="justify-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:mt-[8px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[6px] w-[41%]">
                  <Text
                    className="lg:mt-[5px] xl:mt-[8px] 2xl:mt-[10px] 3xl:mt-[13px] mb-2 Firstlastname"
                    variant="body4"
                  >
                    How many guests can stay?
                  </Text>
                  <Input
                    id="number"
                    className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:required text-slate_700 w-[100%]"
                    variant="OutlineGray503"
                    placeholder="0"
                    shape="RoundedBorder3"
                    size="sm"
                    type="number"
                    value={guest}
                    onInput={(e) => setGuest(e.target.value)}
                  />
                  <Text
                    className="lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mb-2 Firstlastname"
                    variant="body4"
                  >
                    How many bathrooms are there?
                  </Text>
                  <Input
                    id="number"
                    className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:required text-slate_700 w-[100%]"
                    variant="OutlineGray503"
                    placeholder="0"
                    shape="RoundedBorder3"
                    size="sm"
                    type="number"
                    value={bathrooms}
                    onInput={(e) => setBathrooms(e.target.value)}
                  />
                </Column>
              </Column>
              <Column className="bg-white_A700 justify-start ml-[4px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs4 w-[99%]">
                <Column className="justify-start lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] mt-[1px] w-[68%]">
                  <Column className="justify-start w-[49%]">
                    <Text className="Firstlastname" variant="body4">
                      How big is this property?
                    </Text>
                    <Text
                      className="font-bold lg:mt-[10px] xl:mt-[12px] 2xl:mt-[15px] 3xl:mt-[20px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      Apartment size - optional
                    </Text>
                  </Column>
                  <Row className="items-left justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                    <Input
                      id="number"
                      className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:required text-slate_700 w-[100%]"
                      variant="OutlineGray503"
                      placeholder=""
                      shape="RoundedBorder3"
                      size="sm"
                      type="number"
                      value={apartmentSize}
                      onInput={(e) => setApartmentSize(e.target.value)}
                    />
                    <Psize
                      className="h-[40px] font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[40%]"
                      placeholder="Unit area"
                      size="sm"
                      options={selectedOption}
                      onChange={handleDropdownChange}
                    ></Psize>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 justify-start ml-[4px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] mb-16 shadow-bs4 w-[99%]">
                <Column className="justify-start xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] w-[100%]">
                  <Text className="columneachpropertyw" variant="body2">
                    What type of room do you offer?
                  </Text>
                  <Text className="Selectallthat" variant="body6">
                    Select all that apply
                  </Text>
                  <Row className="font-ptsans items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                    <Button
                      className={`font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[16%] ${changeColor === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // ref={labelRef1}
                      onClick={() => handleClick(1)}
                    >
                      Universal
                    </Button>
                    <Button
                      className={`font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[23%] ${changeColor1 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // ref={labelRef2}
                      onClick={() => handleClick1(2)}
                    >
                      Muslim friendly
                    </Button>
                    <Button
                      className={`font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[22%] ${changeColor2 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // ref={labelRef3}
                      onClick={() => handleClick2(3)}
                    >
                      Muslim owned
                    </Button>
                    <Button
                      className={`font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[11%] ${changeColor3 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      // ref={labelRef4}
                      onClick={() => handleClick3(4)}
                    >
                      Halal
                    </Button>
                    <Button
                      className={`font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[18%] ${changeColor4 === true
                        ? "bg-indigo_901 text-white"
                        : "bg-white_A700 text-black"
                        }`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      onClick={() => handleClick4(5)}
                    >
                      Pet-friendly
                    </Button>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[116px] 2xl:ml-[140px] 3xl:ml-[164px] lg:ml-[104px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[-51px] 3xl:mt-[25px] w-[39%]" />
            <Row className="ml-4">
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

export default PropertySetupPropertyDetailsPage;

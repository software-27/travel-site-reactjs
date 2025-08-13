import React, { useEffect, useState } from "react";
import { Column, Row, Text, Img, Stack, Line, Button } from "components";
import { useNavigate } from "react-router-dom";
import Header from "components/Header/Header";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import axios from "axios";
import GlobalConstant from "constant/global";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";

const NameLocation3rdPagePage = () => {
  // declare
  const [addressText, setAddressText] = useState('');
  const [postcode, setPostcode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [selectedLat, setSelectedLat] = useState('');
  const [selectedLng, setSelecetdLng] = useState('');

  useEffect(() => {
    //call back
    setAddressText(localStorage.getItem('addressText'))
    setPostcode(localStorage.getItem('postcode'))
    setCity(localStorage.getItem('city'))
    setCountry(localStorage.getItem('country'))
    setSelectedLat(localStorage.getItem('selectedLat'))
    setSelecetdLng(localStorage.getItem('selectedLng'))
    console.log('addressText: ', addressText,
    ' postcode: ', postcode, 
    ' city: ', city,
    ' country: ', country,
    ' latitude: ', selectedLat,
    ' longitudee: ', selectedLng,
    )
  
  }, [addressText, postcode, city, country, selectedLat, setSelecetdLng])

  // eslint-disable-next-line
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB40jqFnXxo_4ZX7WezdrlR4NicJsseyu8"
  });

  const navigate = useNavigate();
  const [center, setCenter] = useState({ lat: 3.140853, lng: 101.693207 });
  const [markerPosition, setMarkerPosition] = useState({
    lat: 3.140853,
    lng: 101.693207,
  });

  const [hoveredMarkerPosition, setHoveredMarkerPosition] = useState(null);
  
  // const center = useMemo(() => ({ lat: 3.140853, lng: 101.693207 }), []);
  // const center = {
  //   lat: 3.140853,
  //   lng: 101.693207,
  // };
  // // const markers = [
  // //   { lat: 18.5204, lng: 73.8567 },
  // //   { lat: 18.5314, lng: 73.8446 },
  // //   { lat: 18.5642, lng: 73.7769 },
  // // ];
  // const markerPosition = {
  //   lat: 3.140853,
  //   lng: 101.693207,
  // };

  const handleMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    console.log('Marker position:', lat, lng);
    setMarkerPosition({ lat, lng });
    localStorage.setItem('selectedLat', lat);
    localStorage.setItem('selectedLng', lng);
  };

  const handleMarkerMouseOver = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setHoveredMarkerPosition({ lat, lng });
  };
  
  const handleMarkerMouseOut = () => {
    setHoveredMarkerPosition(null);
  };

  // const onLoad = (map) => {
  //   const bounds = new google.maps.LatLngBounds();
  //   Marker?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
  //   map.fitBounds(bounds);
  // };

  useEffect(() => {
    const storedLatitude = localStorage.getItem('selectedLat');
    const storedLongitude = localStorage.getItem('selectedLng');

    if (storedLatitude && storedLongitude) {
      const lat = parseFloat(storedLatitude);
      const lng = parseFloat(storedLongitude);
      setCenter({ lat, lng });
      setMarkerPosition({ lat, lng });
    }
  }, []);


  async function postPropertyAddress(postData) {
    try {
      // Retrieve the property owner ID from local storage
      const propertyId = localStorage.getItem('property_id');
      console.log('Property Id:', propertyId);

      // const response = await axios.post(`http://localhost:8080/api/property/address/${propertyId}`, postData);
      let check = GlobalConstant.BASE_API + `/api/property/address/${propertyId}`;
      console.log('check: ',check, ' test: ', GlobalConstant.TEST)
      const response = await axios.post(GlobalConstant.BASE_API + `/api/property/address/${propertyId}`,
      postData
      );

      console.log('response: ', response)

      let data = response.data;
      // localStorage.setItem('property_owner_id', data.property_owner_id)
      localStorage.setItem('property_id', data.property_id)
    }
    catch (error) {
      console.log(error)
    }
  }

  //back
  function handleNavigate23() {
    navigate("/nl2");
  }
  //continue
  function handleNavigate24() {

    const postData = {
      "address": addressText,
      "post_code": postcode,
      "city": city,
      "latitude": selectedLat,
      "longitude": selectedLng,
      "country": {
        "country_id": parseInt(country)
      }
    }
    console.log('post address: ', postData)
    postPropertyAddress(postData);

    navigate("/nl4");
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
                    <Text className="Step1 cursor-pointer mt-1 mb-1 2xl:mr-[40px]" variant="body4">
                      Name and location
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[-5px] 3xl:mt-[31px] w-[100%]">
                    <Text className="text-[13px] text-gray_800 underline italic">
                      70% completed
                    </Text>
                  </Row>
                </Stack>
              </Row>
              <Column className="bg-gray_50 items-center justify-center w-[19%]">
                <Stack className="items-center justify center">
                  <Text className="Step2 mb-2.5 2xl:mt-[5px]" variant="body4">
                    Property Setup
                  </Text>

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
              className="mt-[40px] xl:ml-[110px] not-italic text-black_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              Pin the location of your property
            </Text>
            <Column className="bg-white_A700 items-center justify-end xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs4 w-[40%]">
              <Text
                className="font-normal leading-[normal] mt-[3px] not-italic text-black_900 w-[97%]"
                variant="body2"
              >
                This is the location we’ll show to your guests on our site. Drag
                the map so the pin matches the exact location of your place.
              </Text>
              <Stack
                className="bg-cover bg-repeat lg:h-[296px] xl:h-[370px] 2xl:h-[416px] 3xl:h-[499px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:px-[133px] xl:px-[167px] 2xl:px-[188px] 3xl:px-[225px] w-[160%]"
              // style={{ backgroundImage: "url('images/img_map.png')" }}
              >
                {!isLoaded ? (
                  <h1>Loading...</h1>

                ) : (
                  <GoogleMap
                    mapContainerClassName="map-container"
                    //onLoad={onLoad}>
                    // {markers.map(({ lat, lng }) => (
                    //   <Marker position={{ lat, lng }} />
                    // ))}
                    //{
                    center={center}
                    zoom={10}
                  >
                    <Marker
                      // position={{ lat: 3.140853, lng: 101.693207 }} 
                      position={markerPosition}
                      draggable={true}
                      onDragEnd={handleMarkerDragEnd}
                      onMouseOver={handleMarkerMouseOver}
                      onMouseOut={handleMarkerMouseOut}
                      
                    />
                  </GoogleMap>
                )}

                {hoveredMarkerPosition && (
                    <Text>
                      Latitude: {hoveredMarkerPosition.lat}, Longitude: {hoveredMarkerPosition.lng}
                    </Text>
                )}
                
                {/* <Img
                  src="images/img_location.svg"
                  className="absolute lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[4%] my-[auto] w-[5%]"
                  alt="location"
                /> */}
              </Stack>
            </Column>
            <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[39%]" />
            <Row className="gap-2 mb-14 items-center xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
              <Stack
                className="common-pointer hover:bg-gray_400 bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                onClick={handleNavigate23}
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
                onClick={handleNavigate24}
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
        </Column>
      </Column>
    </>
  );
};

export default NameLocation3rdPagePage;


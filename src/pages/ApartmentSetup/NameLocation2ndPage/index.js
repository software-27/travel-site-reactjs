import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
// import PropertyAPI from "api/propertyApi";
import axios from "axios";
import {
  Column,
  Text,
  Row,
  Line,
  Stack,
  //SelectBox,
  Img,
  Input,
  Button,
} from "components";
import Header from "components/Header/Header";
import Search from "components/SearchAddress/index";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";

const NameLocation2ndPagePage = () => {
  //declare
  const navigate = useNavigate();
  const [dataCountry, setDataCountry] = useState([]);
  const [streetNameHouseNum, setStreetNameHouseNum] = useState('');
  const [postcode, setPostcode] = useState('');
  const [city, setCity] = useState('');
  const [selectedCountryId, setSelectedCountryId] = useState('');
  // const propertyApi = new PropertyAPI();

  const handleSelectionChange = event => {
    setSelectedCountryId(event.target.value);
    // console.log('event.target.value: ', event.target.value);
  };

  //back
  function handleNavigate18() {
    navigate("/nl1");
  }

  //continue
  function handleNavigate19() {
    navigate("/nl3");
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/property/countryList');
      setDataCountry(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start 2xl:mb-[100px] mx-[auto] xl:pb-[102px] 2xl:pb-[115px] 3xl:pb-[138px] lg:pb-[81px] w-[100%]">
        <Column className="justify-start w-[100%]">
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
                      40% completed
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
          </Column>

          
          <Text
                  className="mt-[40px] xl:ml-[110px] not-italic text-black_900 sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] 3xl:text-[32px] w-[auto]"
                  as="h4"
                  variant="h4"
                >
                   Where is the property you’re listing?
                </Text>
                <Row className="mt-[20px] w-[100%]">
           
           <Column className=" xl:ml-[110px] w-[40%]">

           <Column className="items-center justify-start w-[100%]">
                      <Column className="bg-white_A700 justify-start lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] shadow-bs3 w-[100%]">
                        <Text
                          className="font-normal leading-[normal] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-black_900 w-[96%]"
                          variant="body4"
                        >
                          We may send a letter to confirm the location of your
                          property, so make sure that the address is correct -
                          it’s difficult to make changes to it later.
                        </Text>
                        <Search/>
                        
                      </Column>
                      <Line className="bg-gray_700_33 h-[0.5px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]" />
                      <Row className="gap-2 items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                        <Stack onClick={handleNavigate18} className="bg-white_A700 hover:bg-gray_400 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]">
                          <Img
                            src="images/img_expandarrow.png"
                            className="ExpandArrow"
                            alt="ExpandArrow"
                          />
                        </Stack>
                        <Button
                          className="common-pointer bg-sky-700 hover:bg-indigo_901 font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
                          onClick={handleNavigate19}
                          variant="OutlineLightblue8001_2"
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
                      What needs to be included in my address?
                    </Text>
                    <Img
                      src="images/img_close_23X23.svg"
                      className="lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] close_One1"
                      alt="close"
                    />
                  </Row>
                  <Column className="xl:m-[30px] xl:mt-[27px]  w-[100%]">
                    <Row className=" w-[100%] space-x-4 h-fit justify-start">
                      <Img
                        src="images/img_akariconscirc.svg"
                        className="absolute mt-1 lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:w-[4px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[8px]"
                        alt="akariconscirc"
                      />
                      <Text
                        className="font-normal leading-[normal] not-italic text-black_900 w-[90%]"
                        variant="body5"
                      >
                       Include both your street name <br/> and house number
                      </Text>
                    </Row>
                    <Row className="w-[100%] space-x-4 h-fit justify-start ">
                      <Img
                        src="images/img_akariconscirc.svg"
                        className="absolute mt-1 lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:w-[4px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[8px]"
                        alt="akariconscirc"
                      />
                      <Text
                        className="pr-5 font-normal leading-[normal] not-italic text-black_900 w-[90%]"
                        variant="body5"
                      >
                       Provide an apartment or floor number if you have one
                      </Text>
                    </Row>
                    <Row className="w-[100%] space-x-4 h-fit justify-start ">
                      <Img
                        src="images/img_akariconscirc.svg"
                        className="absolute mt-1 lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:w-[4px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[8px]"
                        alt="akariconscirc"
                      />
                      <Text
                        className="font-normal leading-[normal] not-italic text-black_900 w-[90%]"
                        variant="body5"
                      >
                       Provide the post/zip code
                      </Text>
                    </Row>
                    <Row className="w-[100%] space-x-4 h-fit justify-start">
                      <Img
                        src="images/img_akariconscirc.svg"
                        className="absolute mt-1 lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:w-[4px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[8px]"
                        alt="akariconscirc"
                      />
                      <Text
                        className="font-normal leading-[normal] not-italic text-black_900 w-[90%]"
                        variant="body5"
                      >
                       Correctly spell the street name
                      </Text>
                    </Row>
                    <Row className="w-[100%] space-x-4 h-fit justify-start">
                      <Img
                        src="images/img_akariconscirc.svg"
                        className="absolute mt-1 lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:w-[4px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[8px]"
                        alt="akariconscirc"
                      />
                      <Text
                        className="font-normal leading-[normal] not-italic text-black_900 w-[90%]"
                        variant="body5"
                      >
                       Use the physical address of the <br/> property, not your office or home <br/>address
                      </Text>
                    </Row>
                  </Column>
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
                      Why do I need to add my address?
                    </Text>
                  </Row>
                  <Text
                    className="font-normal leading-[normal] ml-5 xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] not-italic text-black_900 w-[75%]"
                    variant="body5"
                  >
                   Once a guest books your property, this is the address that will be shared with them. It's important that it is correct so that guests can easily find your property.{" "}
                  </Text>
                </Column>
              </Column>

          </Row>


        </Column>
      </Column>
    </>
  );
};

export default NameLocation2ndPagePage;



// import React from "react";
// import {
//   GoogleMap,
//   useLoadScript,
//   Marker,
//   InfoWindow,
// } from "@react-google-maps/api";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";
// import { formatRelative } from "date-fns";

// import "@reach/combobox/styles.css";
// import mapStyles from "./mapStyles";

// const libraries = ["places"];
// const mapContainerStyle = {
//   height: "100vh",
//   width: "100vw",
// };
// const options = {
//   styles: mapStyles,
//   disableDefaultUI: true,
//   zoomControl: true,
// };
// const center = {
//   lat: 43.6532,
//   lng: -79.3832,
// };

// export default function App() {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey:"AIzaSyB40jqFnXxo_4ZX7WezdrlR4NicJsseyu8",
//     libraries,
//   });
//   const [markers, setMarkers] = React.useState([]);
//   const [selected, setSelected] = React.useState(null);

//   const onMapClick = React.useCallback((e) => {
//     setMarkers((current) => [
//       ...current,
//       {
//         lat: e.latLng.lat(),
//         lng: e.latLng.lng(),
//         time: new Date(),
//       },
//     ]);
//   }, []);

//   const mapRef = React.useRef();
//   const onMapLoad = React.useCallback((map) => {
//     mapRef.current = map;
//   }, []);

//   const panTo = React.useCallback(({ lat, lng }) => {
//     mapRef.current.panTo({ lat, lng });
//     mapRef.current.setZoom(14);
//   }, []);

//   if (loadError) return "Error";
//   if (!isLoaded) return "Loading...";

//   return (
//     <div>
//       <h1>
//         Bears{" "}
//         <span role="img" aria-label="tent">
//           ⛺️
//         </span>
//       </h1>

//       <Locate panTo={panTo} />
//       <Search panTo={panTo} />

//       <GoogleMap
//         id="map"
//         mapContainerStyle={mapContainerStyle}
//         zoom={8}
//         center={center}
//         options={options}
//         onClick={onMapClick}
//         onLoad={onMapLoad}
//       >
//         {markers.map((marker) => (
//           <Marker
//             key={`${marker.lat}-${marker.lng}`}
//             position={{ lat: marker.lat, lng: marker.lng }}
//             onClick={() => {
//               setSelected(marker);
//             }}
//             icon={{
//               url: `/bear.svg`,
//               origin: new window.google.maps.Point(0, 0),
//               anchor: new window.google.maps.Point(15, 15),
//               scaledSize: new window.google.maps.Size(30, 30),
//             }}
//           />
//         ))}

//         {selected ? (
//           <InfoWindow
//             position={{ lat: selected.lat, lng: selected.lng }}
//             onCloseClick={() => {
//               setSelected(null);
//             }}
//           >
//             <div>
//               <h2>
//                 <span role="img" aria-label="bear">
//                   🐻
//                 </span>{" "}
//                 Alert
//               </h2>
//               <p>Spotted {formatRelative(selected.time, new Date())}</p>
//             </div>
//           </InfoWindow>
//         ) : null}
//       </GoogleMap>
//     </div>
//   );
// }

// function Locate({ panTo }) {
//   return (
//     <button
//       className="locate"
//       onClick={() => {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             panTo({
//               lat: position.coords.latitude,
//               lng: position.coords.longitude,
//             });
//           },
//           () => null
//         );
//       }}
//     >
//       <img src="/compass.svg" alt="compass" />
//     </button>
//   );
// }

// function Search({ panTo }) {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       location: { lat: () => 43.6532, lng: () => -79.3832 },
//       radius: 100 * 1000,
//     },
//   });

//   // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

//   const handleInput = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSelect = async (address) => {
//     setValue(address, false);
//     clearSuggestions();

//     try {
//       const results = await getGeocode({ address });
//       const { lat, lng } = await getLatLng(results[0]);

//       // Store the lat and lng values in local storage
//       localStorage.setItem("selectedLat", lat);
//       localStorage.setItem("selectedLng", lng);

//       panTo({ lat, lng });
//     } catch (error) {
//       console.log("😱 Error: ", error);
//     }
//   };

//   return (
//     <div className="search">
//       <Combobox onSelect={handleSelect}>
//         <ComboboxInput
//           value={value}
//           onChange={handleInput}
//           disabled={!ready}
//           placeholder="Search your location"
//         />
//         <ComboboxPopover>
//           <ComboboxList>
//             {status === "OK" &&
//               data.map(({ id, description }) => (
//                 <ComboboxOption key={id} value={description} />
//               ))}
//           </ComboboxList>
//         </ComboboxPopover>
//       </Combobox>
//     </div>
//   );
// }


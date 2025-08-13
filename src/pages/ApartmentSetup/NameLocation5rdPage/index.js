import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sidebar2 from "components/Sidebar2/index";
import SidebarTest from "components/SidebarTest/index";
import { Column, Stack, Text, Row, Line, Input, Img, Button } from "components";
import Header from "components/Header/Header";
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
// import Dashboard from './pages/Dashboard.jsx';
// import About from './pages/About.jsx';
// import Analytics from './pages/Analytics.jsx';
// import Comment from './pages/Comment.jsx';
// import Product from './pages/Product.jsx';
// import ProductList from './pages/ProductList.jsx';

const App = () => {
  const[isOpen ,setIsOpen] = useState(false);
  return (
    <>
      <Column className="bg-white w-[100%]">

          <Row className="bg-gray_100 h-fit justify-start items-start w-[100%]">
            <HeaderOTAAdmin className="w-[100%]" />
          </Row>

          <Row className="w-[100%] mt-[8px]">
            <SidebarTest />
            
            {/* <Sidebar2 /> */}

            <Column className="mt-[100px] ml-[25px] bg-white h-auto w-[100%]">
              <Row>

                <Column className="w-[100%] text-black">
                  {/* Content */}
                  {/* <Text className="font-regular pt-15 text-[20px] justify-center w-[40%]">
                    Welcome, Daniel
                  </Text>
                  <Text className="font-bold text-[25px] justify-center w-[40%]">
                    Dashboard
                  </Text> */}

                  <Text
                    className="mt-[40px] xl:ml-[110px] not-italic text-black_900 sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] 3xl:text-[32px] w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    What’s the name of your place?
                  </Text>
                
                  <Row className="mt-[20px] w-[100%]">  
                    {/* <Text>aaaaafffffhhhhhhhhhhhhhhhhhh</Text>  */}
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
                            />
                          </label>
                        </Column>
                      </Column>
                      <Line className="bg-gray_700_33 h-[0.5px] sm:mt-[8px] md:mt-[12px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]" />
                      <Row className="mb-[300px] gap-2 items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                        <Stack className="bg-white_A700 hover:bg-gray_400 sm:h-[35px] md:h-[40px] lg:h-[45px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]">
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
                  </Row>
                </Column>

              </Row>
            </Column>
          </Row>
      </Column>
    </>
  );
};

export default App;

// import React from 'react';
// import SidebarTest from "components/SidebarTest/index";

// const App = () => {
//   return (
//     <div>
//       <SidebarTest />
//       <main className="content">
//         {/* Main content goes here */}
//         LA LA LA LA LA LA LA LA LA LA LA 
//         A HOPLESSS ROMANTIC OF MY LIFE - CUPID
//       </main>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import SidebarTest from "components/SidebarTest/index";
// import { Column, Row, Text, Img, Stack, Line, Button } from "components";

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div
//         className={`bg-gray-800 text-white h-screen w-64 flex-shrink-0 transition-all duration-300 transform ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <SidebarTest/>
//         {/* Sidebar content */}
//         {/* Add your sidebar content here */}
//       </div>

//       {/* Main Content */}
//       <div 
//         className={`flex flex-col flex-1 ${
//           isSidebarOpen ? 'ml-64' : ''
//         } transition-all duration-300`}
//       >
//         {/* Header */}
//         <header className="bg-gray-200 p-4 flex items-center justify-between">
//           <button onClick={toggleSidebar} className="p-2 bg-blue-500 text-white">
//             Toggle Sidebar
//           </button>
//           <Text>HELLO, WELCOME TO MY PAGE!</Text>
//           {/* Add your header content here */}
//         </header>

//         {/* Main content */}
//         <main 
//           className={`p-4 ${
//           isSidebarOpen ? '' : 'w-flex-1'
//         }`}
//         >
//           <Text>AAAAAAAAA</Text>
//           {/* Add your main content here */}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
// import React from "react";
// import { Column, Row, Text, Img, Stack, Line, Button } from "components";
// import { useNavigate } from "react-router-dom";
// import Header from "components/Header/Header";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import { useMemo, useState } from "react";
// import SidebarTest from "components/SidebarTest/index";

// const NameLocation5rdPagePage = () => {

//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };


//    // eslint-disable-next-line
//    const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
//   });
//   // const center = useMemo(() => ({ lat: 3.140853, lng: 101.693207 }), []);
//   const center = {
//     lat: 3.140853,
//     lng: 101.693207,
//   };
//   // const markers = [
//   //   { lat: 18.5204, lng: 73.8567 },
//   //   { lat: 18.5314, lng: 73.8446 },
//   //   { lat: 18.5642, lng: 73.7769 },
//   // ];
//   const markerPosition = {
//     lat: 3.140853,
//     lng: 101.693207,
//   };

//   const handleMarkerDragEnd = (e) => {
//     const lat = e.latLng.lat();
//     const lng = e.latLng.lng();
//     console.log('Marker position:', lat, lng);
//     localStorage.setItem('Marker position [Latitude]:', lat);
//     localStorage.setItem('Marker position [Longitude]:', lng);
//   };

//   // const onLoad = (map) => {
//   //   const bounds = new google.maps.LatLngBounds();
//   //   Marker?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
//   //   map.fitBounds(bounds);
//   // };


//   const navigate = useNavigate();
// //back
//   function handleNavigate23() {
//     navigate("/nl2");
//   }
//   //continue
//   function handleNavigate24() {
//     navigate("/nl4");
//   }
//   return (
//     <>
//       <Column className="bg-gray_100 font-ptsans items-center justify-start 2xl:mb-[100px] mx-[auto] xl:pb-[102px] 2xl:pb-[115px] 3xl:pb-[138px] lg:pb-[81px] w-[100%]">
//         <Column className="items-center justify-start w-[100%]">
//           <Header className="w-[100%]" />
//             <Column className="justify-start w-[100%]">
           
//               <Row className="bg-gray_50 items-left justify-evenly pt-6 pb-4 w-[100%]">
//                 <Row className="bg-gray_50 items-center justify-center w-[19%]">
//                   <Stack className= "items-center justify center">
//                     <Row>
//                       <Text className="Step1 cursor-pointer mt-1 mb-1 2xl:mr-[40px]" variant="body4">
//                         Name and location
//                       </Text>
//                     </Row>
//                     <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[-5px] 3xl:mt-[31px] w-[100%]">
//                       <Text className="text-[13px] text-gray_800 underline italic">
//                         70% completed
//                       </Text>
//                     </Row>
//                   </Stack>
//                 </Row>
//                 <Column className="bg-gray_50 items-center justify-center w-[19%]">
//                   <Stack className= "items-center justify center">
//                     <Text className="Step2 mb-2.5 2xl:mt-[5px]" variant="body4">
//                       Property Setup
//                     </Text>
                    
//                   </Stack>
//                 </Column>
//                 <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
//                   <Text className="Step2 mb-2.5 2xl:mt-[10px]" variant="body4">
//                     Photos
//                   </Text>
//                 </Column>
//                 <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
//                   <Text className="Step2 mb-2.5 2xl:mt-[10px]" variant="body4">
//                     Pricing and Calendar
//                   </Text>
//                 </Column>
//               </Row>
//               <Line className="bg-gray_700_33 h-[0.5px] w-[100%]" />

//               <div className="relative">
//                 <button 
//                   onClick={toggleSidebar} 
//                   className="p-2 bg-blue-500 text-white"
//                 >
//                   Toggle Sidebar
//                 </button>

//                 {/* <SidebarTest/> */}
              
//               <div className="flex">
//                 {isSidebarOpen && 
//                   <SidebarTest />
//                 }
//               <div className="flex-1 bg-gray-100">
//                 <Text
//                   className="xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] 2xl:mt-[109px] 3xl:mt-[130px] lg:mt-[77px] xl:mt-[96px] not-italic text-black_900 w-[auto]"
//                   as="h4"
//                   variant="h4"
//                 >
//                   Pin the location of your property
//                 </Text>

//                 <Column className="bg-white_A700 items-center justify-end xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs4 w-[39%]">
//                   <Text
//                     className="font-normal leading-[normal] mt-[3px] not-italic text-black_900 w-[97%]"
//                     variant="body2"
//                   >
//                     This is the location we’ll show to your guests on our site. Drag
//                     the map so the pin matches the exact location of your place.
//                   </Text>
//                   <Stack
//                     className="bg-cover bg-repeat lg:h-[296px] xl:h-[370px] 2xl:h-[416px] 3xl:h-[499px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:px-[133px] xl:px-[167px] 2xl:px-[188px] 3xl:px-[225px] w-[160%]"
//                     // style={{ backgroundImage: "url('images/img_map.png')" }}
//                   >
//                     {!isLoaded ? (
//                       <h1>Loading...</h1>

//                     ) : (
//                       <GoogleMap
//                         mapContainerClassName="map-container"
//                         //onLoad={onLoad}>
//                         // {markers.map(({ lat, lng }) => (
//                         //   <Marker position={{ lat, lng }} />
//                         // ))}
//                         //{
//                         center={center}
//                         zoom={10}
//                       >
//                         <Marker
//                           // position={{ lat: 3.140853, lng: 101.693207 }} 
//                           position={markerPosition}
//                           draggable={true}
//                           onDragEnd={handleMarkerDragEnd}
//                         />
//                       </GoogleMap>
//                     )}

//                     {/* <Img
//                       src="images/img_location.svg"
//                       className="absolute lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[4%] my-[auto] w-[5%]"
//                       alt="location"
//                     /> */}
//                   </Stack>
//                 </Column>
//                 <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[39%]" />
//                 <Row className="gap-2 mb-14 items-center xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
//                   <Stack
//                     className="common-pointer hover:bg-gray_400 bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
//                     onClick={handleNavigate23}
//                   >
//                     <Img
//                       src="images/img_expandarrow.png"
//                       className="ExpandArrow"
//                       alt="ExpandArrow"
                      
//                     />
//                   </Stack>
//                   <Button
//                     className=" font-bold bg-sky-700 hover:bg-indigo_901 lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
//                     variant="OutlineLightblue8001_2"
//                     onClick={handleNavigate24}
//                   >
//                     Continue
//                   </Button>
//                   <Button
//                       className="text-sm font-bold bg-gray_700 hover:bg-gray_900 w-[25%] text-white rounded-full"  
//                     >
//                       Save draft
//                   </Button>
//                 </Row>
//               </div>
//               </div>
//               </div>
//             </Column>

//         </Column>
//       </Column>
//     </>
//   );
// };

// export default NameLocation5rdPagePage;


// // import React from "react";
// // import {
// //   GoogleMap,
// //   useLoadScript,
// //   Marker,
// //   InfoWindow,
// // } from "@react-google-maps/api";
// // import usePlacesAutocomplete, {
// //   getGeocode,
// //   getLatLng,
// // } from "use-places-autocomplete";
// // import {
// //   Combobox,
// //   ComboboxInput,
// //   ComboboxPopover,
// //   ComboboxList,
// //   ComboboxOption,
// // } from "@reach/combobox";
// // import { formatRelative } from "date-fns";

// // import "@reach/combobox/styles.css";
// // import mapStyles from "./mapStyles";

// // const libraries = ["places"];
// // const mapContainerStyle = {
// //   height: "100vh",
// //   width: "100vw",
// // };
// // const options = {
// //   styles: mapStyles,
// //   disableDefaultUI: true,
// //   zoomControl: true,
// // };
// // const center = {
// //   lat: 43.6532,
// //   lng: -79.3832,
// // };

// // export default function App() {
// //   const { isLoaded, loadError } = useLoadScript({
// //     googleMapsApiKey: "AIzaSyB40jqFnXxo_4ZX7WezdrlR4NicJsseyu8",
// //     libraries,
// //   });
// //   const [markers, setMarkers] = React.useState([]);
// //   const [selected, setSelected] = React.useState(null);

// //   const onMapClick = React.useCallback((e) => {
// //     setMarkers((current) => [
// //       ...current,
// //       {
// //         lat: e.latLng.lat(),
// //         lng: e.latLng.lng(),
// //         time: new Date(),
// //       },
// //     ]);
// //   }, []);
   
  
// //   const mapRef = React.useRef();
// //   const onMapLoad = React.useCallback((map) => {
// //     mapRef.current = map;
// //   }, []);

// //   const panTo = React.useCallback(({ lat, lng }) => {
// //     mapRef.current.panTo({ lat, lng });
// //     mapRef.current.setZoom(14);
// //   }, []);

// //   if (loadError) return "Error";
// //   if (!isLoaded) return "Loading...";

// //   return (
// //     <div>
// //       <h1>
// //         Bears{" "}
// //         <span role="img" aria-label="tent">
// //           ⛺️
// //         </span>
// //       </h1>

// //       <Locate panTo={panTo} />
// //       <Search panTo={panTo} />

// //       <GoogleMap
// //         id="map"
// //         mapContainerStyle={mapContainerStyle}
// //         zoom={8}
// //         center={center}
// //         options={options}
// //         onClick={onMapClick}
// //         onLoad={onMapLoad}
// //       >
// //         {markers.map((marker) => (
// //           <Marker
// //             key={`${marker.lat}-${marker.lng}`}
// //             position={{ lat: marker.lat, lng: marker.lng }}
// //             onClick={() => {
// //               setSelected(marker);
// //             }}
// //             icon={{
// //               url: `/bear.svg`,
// //               origin: new window.google.maps.Point(0, 0),
// //               anchor: new window.google.maps.Point(15, 15),
// //               scaledSize: new window.google.maps.Size(30, 30),
// //             }}
// //           />
// //         ))}

// //         {selected ? (
// //           <InfoWindow
// //             position={{ lat: selected.lat, lng: selected.lng }}
// //             onCloseClick={() => {
// //               setSelected(null);
// //             }}
// //           >
// //             <div>
// //               <h2>
// //                 <span role="img" aria-label="bear">
// //                   🐻
// //                 </span>{" "}
// //                 Alert
// //               </h2>
// //               <p>Spotted {formatRelative(selected.time, new Date())}</p>
// //             </div>
// //           </InfoWindow>
// //         ) : null}
// //       </GoogleMap>
// //     </div>
// //   );
// // }

// // function Locate({ panTo }) {
// //   return (
// //     <button
// //       className="locate"
// //       onClick={() => {
// //         navigator.geolocation.getCurrentPosition(
// //           (position) => {
// //             panTo({
// //               lat: position.coords.latitude,
// //               lng: position.coords.longitude,
// //             });
// //           },
// //           () => null
// //         );
// //       }}
// //     >
// //       <img src="/compass.svg" alt="compass" />
// //     </button>
// //   );
// // }

// // function Search({ panTo }) {
// //   const {
// //     ready,
// //     value,
// //     suggestions: { status, data },
// //     setValue,
// //     clearSuggestions,
// //   } = usePlacesAutocomplete({
// //     requestOptions: {
// //       location: { lat: () => 43.6532, lng: () => -79.3832 },
// //       radius: 100 * 1000,
// //     },
// //   });

// //   // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

// //   const handleInput = (e) => {
// //     setValue(e.target.value);
// //   };

// //   const handleSelect = async (address) => {
// //     setValue(address, false);
// //     clearSuggestions();

// //     try {
// //       const results = await getGeocode({ address });
// //       const { lat, lng } = await getLatLng(results[0]);

// //       // Store the lat and lng values in local storage
// //       localStorage.setItem("selectedLat", lat);
// //       localStorage.setItem("selectedLng", lng);

// //       let addressText = "";
// //       let city = "";
// //       let state = "";
// //       let postcode = "";
// //       let country = "";

// //       results[0].address_components.forEach((component) => {
// //       const componentTypes = component.types;

// //       if (componentTypes.includes("locality")) {
// //         city = component.long_name;
// //       }

// //       if (componentTypes.includes("administrative_area_level_1")) {
// //         state = component.long_name;
// //       }

// //       if (componentTypes.includes("postal_code")) {
// //         postcode = component.long_name;
// //       }

// //       if (componentTypes.includes("country")) {
// //         country = component.long_name;
// //       }

// //       if (!city && !state && !postcode && !country) {
// //         // Concatenate address components if city, state, postcode, and country are not yet found
// //         addressText += component.long_name + " ";
// //       }
// //     });

// //       panTo({ lat, lng });
// //       console.log("address:", address);
// //       console.log("addressText:", addressText.trim());
// //       console.log("latitude:", lat);
// //       console.log("longitude:", lng);
// //       console.log("city:", city);
// //       console.log("state:", state);
// //       console.log("postcode:", postcode);
// //       console.log("country:", country);
// //     } catch (error) {
// //       console.log("😱 Error: ", error);
// //     }
// //   };

// //   return (
// //     <div className="search">
// //       <Combobox onSelect={handleSelect}>
// //         <ComboboxInput
// //           value={value}
// //           onChange={handleInput}
// //           disabled={!ready}
// //           placeholder="Search your location"
// //         />
// //         <ComboboxPopover>
// //           <ComboboxList>
// //             {status === "OK" &&
// //               data.map(({ id, description }) => (
// //                 <ComboboxOption key={id} value={description} />
// //               ))}
// //           </ComboboxList>
// //         </ComboboxPopover>
// //       </Combobox>
// //     </div>
// //   );
// // }


// import React from "react";
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

// import "@reach/combobox/styles.css";

// export default function Search({ panTo }) {
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
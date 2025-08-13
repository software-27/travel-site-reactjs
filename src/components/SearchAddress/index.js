// import React from "react";
// import { Column, Row, Text, Img, Stack, Line, Button } from "components";
// import { useNavigate } from "react-router-dom";
// import Header from "components/Header/Header";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import { useMemo } from "react";

// const NameLocation3rdPagePage = () => {

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
//        <Column className="items-center justify-start w-[100%]">
//          <Header className="w-[100%]" />
//            <Column className="justify-start w-[100%]">
//               <Row className="bg-gray_50 items-left justify-evenly pt-6 pb-4 w-[100%]">
//                       <Row className="bg-gray_50 items-center justify-center w-[19%]">

//                         <Stack className= "items-center justify center">
//                           <Row>
//                             <Text className="Step1 cursor-pointer mt-1 mb-1 2xl:mr-[40px]" variant="body4">
//                               Name and location
//                             </Text>
//                           </Row>
//                           <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[-5px] 3xl:mt-[31px] w-[100%]">
//                             <Text className="text-[13px] text-gray_800 underline italic">
//                               70% completed
//                             </Text>
//                           </Row>
//                         </Stack>
//                       </Row>
//                       <Column className="bg-gray_50 items-center justify-center w-[19%]">
//                         <Stack className= "items-center justify center">
//                           <Text className="Step2 mb-2.5 2xl:mt-[5px]" variant="body4">
//                             Property Setup
//                           </Text>

//                         </Stack>
//                       </Column>
//                       <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
//                         <Text className="Step2 mb-2.5 2xl:mt-[10px]" variant="body4">
//                           Photos
//                         </Text>
//                       </Column>
//                       <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
//                         <Text className="Step2 mb-2.5 2xl:mt-[10px]" variant="body4">
//                           Pricing and Calendar
//                         </Text>
//                       </Column>
//                   </Row>
//                 <Line className="bg-gray_700_33 h-[0.5px] w-[100%]" />
//             <Text
//               className="xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] 2xl:mt-[109px] 3xl:mt-[130px] lg:mt-[77px] xl:mt-[96px] not-italic text-black_900 w-[auto]"
//               as="h4"
//               variant="h4"
//             >
//               Pin the location of your property
//             </Text>
//             <Column className="bg-white_A700 items-center justify-end xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs4 w-[39%]">
//               <Text
//                 className="font-normal leading-[normal] mt-[3px] not-italic text-black_900 w-[97%]"
//                 variant="body2"
//               >
//                 This is the location we’ll show to your guests on our site. Drag
//                 the map so the pin matches the exact location of your place.
//               </Text>
//               <Stack
//                 className="bg-cover bg-repeat lg:h-[296px] xl:h-[370px] 2xl:h-[416px] 3xl:h-[499px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:px-[133px] xl:px-[167px] 2xl:px-[188px] 3xl:px-[225px] w-[160%]"
//                 // style={{ backgroundImage: "url('images/img_map.png')" }}
//               >
//                  {!isLoaded ? (
//                   <h1>Loading...</h1>

//                 ) : (
//                   <GoogleMap
//                     mapContainerClassName="map-container"
//                     //onLoad={onLoad}>
//                     // {markers.map(({ lat, lng }) => (
//                     //   <Marker position={{ lat, lng }} />
//                     // ))}
//                     //{
//                     center={center}
//                     zoom={10}
//                   >
//                     <Marker
//                       // position={{ lat: 3.140853, lng: 101.693207 }} 
//                       position={markerPosition}
//                       draggable={true}
//                       onDragEnd={handleMarkerDragEnd}
//                     />
//                   </GoogleMap>
//                 )}

//                 {/* <Img
//                   src="images/img_location.svg"
//                   className="absolute lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[4%] my-[auto] w-[5%]"
//                   alt="location"
//                 /> */}
//               </Stack>
//             </Column>
//             <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[39%]" />
//             <Row className="gap-2 mb-14 items-center xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
//                 <Stack
//                   className="common-pointer hover:bg-gray_400 bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
//                   onClick={handleNavigate23}
//                 >
//                   <Img
//                     src="images/img_expandarrow.png"
//                     className="ExpandArrow"
//                     alt="ExpandArrow"

//                   />
//                 </Stack>
//                 <Button
//                   className=" font-bold bg-sky-700 hover:bg-indigo_901 lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
//                   variant="OutlineLightblue8001_2"
//                   onClick={handleNavigate24}
//                 >
//                   Continue
//                 </Button>
//                 <Button
//                     className="text-sm font-bold bg-gray_700 hover:bg-gray_900 w-[25%] text-white rounded-full"  
//                   >
//                     Save draft
//                   </Button>
//               </Row>
//           </Column>
//         </Column>
//       </Column>
//     </>
//   );
// };

// export default NameLocation3rdPagePage;


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
//     googleMapsApiKey: "AIzaSyB40jqFnXxo_4ZX7WezdrlR4NicJsseyu8",
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

//       let addressText = "";
//       let city = "";
//       let state = "";
//       let postcode = "";
//       let country = "";

//       results[0].address_components.forEach((component) => {
//       const componentTypes = component.types;

//       if (componentTypes.includes("locality")) {
//         city = component.long_name;
//       }

//       if (componentTypes.includes("administrative_area_level_1")) {
//         state = component.long_name;
//       }

//       if (componentTypes.includes("postal_code")) {
//         postcode = component.long_name;
//       }

//       if (componentTypes.includes("country")) {
//         country = component.long_name;
//       }

//       if (!city && !state && !postcode && !country) {
//         // Concatenate address components if city, state, postcode, and country are not yet found
//         addressText += component.long_name + " ";
//       }
//     });

//       panTo({ lat, lng });
//       console.log("address:", address);
//       console.log("addressText:", addressText.trim());
//       console.log("latitude:", lat);
//       console.log("longitude:", lng);
//       console.log("city:", city);
//       console.log("state:", state);
//       console.log("postcode:", postcode);
//       console.log("country:", country);
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

// export default function Search() {
//   // export default function Search({ panTo }) {
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

//       let addressText = "";
//       let city = "";
//       let state = "";
//       let postcode = "";
//       let country = "";

//       results[0].address_components.forEach((component) => {
//       const componentTypes = component.types;

//       if (componentTypes.includes("locality")) {
//         city = component.long_name;
//       }

//       if (componentTypes.includes("administrative_area_level_1")) {
//         state = component.long_name;
//       }

//       if (componentTypes.includes("postal_code")) {
//         postcode = component.long_name;
//       }

//       if (componentTypes.includes("country")) {
//         country = component.long_name;
//       }

//       if (!city && !state && !postcode && !country) {
//         // Concatenate address components if city, state, postcode, and country are not yet found
//         addressText += component.long_name + " ";
//       }
//     });

//       // panTo({ lat, lng });
//       console.log("address:", address);
//       console.log("addressText:", addressText.trim());
//       console.log("latitude:", lat);
//       console.log("longitude:", lng);
//       console.log("city:", city);
//       console.log("state:", state);
//       console.log("postcode:", postcode);
//       console.log("country:", country);
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
import React, { useEffect, useState } from "react";
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
import GlobalConstant from "constant/global";

const Search = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });

  //
  const [dataCountry, setDataCountry] = useState([]);
  const [streetNameHouseNum, setStreetNameHouseNum] = useState();
  const [postcode, setPostcode] = useState();
  const [city, setCity] = useState();
  const [selectedCountryId, setSelectedCountryId] = useState('');

  const handleSelectionChange = event => {
    setSelectedCountryId(event.target.value);
    // console.log('event.target.value: ', event.target.value);
  };

  const [selectedAddress, setSelectedAddress] = useState({
    addressText: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
  });


  const handleInput = (e) => {
    // setValue(e.target.value);

    const inputValue = e.target.value;
    setSelectedAddress({ ...selectedAddress, addressText: inputValue });

    // Fetch new suggestions based on the input value
    setValue(inputValue);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);

      // Store the lat and lng values in local storage
      localStorage.setItem("selectedLat", lat);
      localStorage.setItem("selectedLng", lng);

      let addressText = "";
      let city = "";
      let state = "";
      let postcode = "";
      let country = "";

      results[0].address_components.forEach((component) => {
        const componentTypes = component.types;

        if (componentTypes.includes("locality")) {
          city = component.long_name;
        }

        if (componentTypes.includes("administrative_area_level_1")) {
          state = component.long_name;
        }

        if (componentTypes.includes("postal_code")) {
          postcode = component.long_name;
        }

        if (componentTypes.includes("country")) {
          country = component.long_name;
        }

        if (!city && !state && !postcode && !country) {
          // Concatenate address components if city, state, postcode, and country are not yet found
          addressText += component.long_name + " ";
        }
      });

      setSelectedAddress({
        addressText: addressText.trim(),
        city,
        state,
        postcode,
        country,
      });

      // Store values in local storage
      localStorage.setItem("addressText", addressText.trim());
      localStorage.setItem("city", city);
      localStorage.setItem("postcode", postcode);

      // Find the country ID based on the selected country name
      const selectedCountry = dataCountry.find((data) => data.name === country);
      if (selectedCountry) {
        setSelectedCountryId(selectedCountry.country_id);
        localStorage.setItem("country", selectedCountry.country_id); // Store the updated selectedCountryId in local storage
      } else {
        setSelectedCountryId(''); // If country ID is not found, set it to an empty string or handle the error accordingly
        // localStorage.removeItem("country"); // Remove the country from local storage if it is not found
      }

      console.log("address:", address);
      console.log("addressText:", addressText.trim());
      console.log("latitude:", lat);
      console.log("longitude:", lng);
      console.log("city:", city);
      console.log("state:", state);
      console.log("postcode:", postcode);
      console.log("country:", country);
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // const response = await axios.get('http://localhost:8080/api/property/countryList');
      let check = GlobalConstant.BASE_API + `/api/property/countryList`;
      console.log('check: ',check, ' test: ', GlobalConstant.TEST)
      const response = await fetch(GlobalConstant.BASE_API + `/api/property/countryList`);

      const data = await response.json();
      setDataCountry(data);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   // Retrieve values from localStorage on page load
  //   const storedAddressText = localStorage.getItem("addressText");
  //   const storedCity = localStorage.getItem("city");
  //   const storedPostcode = localStorage.getItem("postcode");
  //   const storedCountry = localStorage.getItem("country");
    

  //   // Update state with stored values if they exist
  //   if (storedAddressText) {
  //     setSelectedAddress((prevAddress) => ({
  //       ...prevAddress,
  //       addressText: storedAddressText,
  //     }))
  //   }

  //   if (storedCity) {
  //     setSelectedAddress((prevAddress) => ({
  //       ...prevAddress,
  //       city: storedCity,
  //     }))
  //   }

  //   if (storedPostcode) {
  //     setSelectedAddress((prevAddress) => ({
  //       ...prevAddress,
  //       postcode: storedPostcode,
  //     }))
  //   }

  //   if (storedCountry) {
  //     setSelectedCountryId(Number(storedCountry));
  //   }

  //   console.log('storedAddressText: ', storedAddressText)
  //   console.log('storedCity: ', storedCity)
  //   console.log('storedPostcode: ', storedPostcode)
  //   console.log('storedCountry: ', storedCountry)

  // }, []);

  return (
    <div className="search">
      {/* <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={selectedAddress.addressText}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox> */}
      
      {/* <div>

        <p>Address: {selectedAddress.addressText}</p>
        <p>City: {selectedAddress.city}</p>
        <p>State: {selectedAddress.state}</p>
        <p>Postcode: {selectedAddress.postcode}</p>
        <p>Country: {selectedAddress.country}</p>
      </div> */}

      <Column className="justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[99%]">
        <Text className="Firstlastname" variant="body2">
          Country/region
        </Text>
        <select className="font-normal lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[100%]"
          // placeholderClassName="text-bluegray_400"
          // value={selectedOption} 
          value={selectedCountryId}
          // value = {selectedAddress.country}
          onChange={handleSelectionChange}
        >
          {dataCountry.map(dataCountry => (
            <option key={dataCountry.country_id} value={dataCountry.country_id}>
              {dataCountry.name}
            </option>
          ))}
        </select>
      </Column>
      <Column className="items-center justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] 3xl:pb-[10px] lg:pb-[6px] xl:pb-[8px] 2xl:pb-[9px] w-[99%]">
        <Column className="justify-start pt-[2px] rounded-radius2 w-[100%]">
          <Text className="Firstlastname" variant="body2">
            Street name and house number
          </Text>
          <Combobox onSelect={handleSelect}>
            <ComboboxInput
              // className="my-custom-input"
              className="placeholder:required text-slate_700 font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 p-[10px] rounded-sm w-[100%]"
              // wrapclassname="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[5px] w-[100%] xl:mt-[7px]"
              // variant="OutlineGray503"
              placeholder="Start typing your address"
              // shape="RoundedBorder3"
              size="md"
              // value={streetNameHouseNum}
              value = {selectedAddress.addressText}
              disabled={!ready}
              // onInput={e => setStreetNameHouseNum(e.target.value)}
              onInput={handleInput}
            ></ComboboxInput>
            <ComboboxPopover className="my-custom-popover">
              <ComboboxList className="my-custom-list">
                {status === "OK" &&
                  data.map(({ id, description }) => (
                    <ComboboxOption key={id} value={description} />
                  ))}
              </ComboboxList>
            </ComboboxPopover>
          </Combobox>
        </Column>
      </Column>
      <Text
        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic text-light_blue_800 w-[auto]"
        variant="body6"
      >
        Add apartment or floor number (optional)
      </Text>
      <Column className="justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rounded-radius2 w-[43%]">
        <Text className="Firstlastname" variant="body2">
          Post Code
        </Text>
        <Input
          className="placeholder:required text-slate_700 font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900"
          // wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
          placeholder="Post code"
          variant="OutlineGray503"
          shape="RoundedBorder3"
          size="md"
          // value={postcode}
          value = {selectedAddress.postcode}
          onInput={e => setPostcode(e.target.value)}
        ></Input>
      </Column>
      <Column className="justify-start lg:mb-[30px] xl:mb-[38px] 2xl:mb-[43px] 3xl:mb-[51px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] rounded-radius2 w-[99%]">
        <Text className="Firstlastname" variant="body2">
          City
        </Text>
        <Input
          className="placeholder:text-slate_700 font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900"
          // wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
          placeholder=" City"
          variant="OutlineGray503"
          shape="RoundedBorder3"
          size="md"
          // value={city}
          value = {selectedAddress.city}
          onInput={e => setCity(e.target.value)}
        ></Input>
      </Column>
    </div >

  );
};

export default Search;
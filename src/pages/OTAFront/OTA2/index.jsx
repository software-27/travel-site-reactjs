import Header from "components/Header/Header";
import DatePicker from "react-datepicker";
import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState, useEffect, useRef, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { RatingBar } from "components/RatingBar/index";
import { Img, Text, Button, Input, Column } from "components";
import Footerepic from "components/Footer/Footerepic/index";
import HeaderOTA from "components/Header/HeaderOTA/index";
import { Row } from "components/Row/index";
import { IoIosSearch } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { TbBeach } from "react-icons/tb";
import {
  mdiUfoOutline,
  mdiBookmarkOutline,
  mdiSaleOutline,
  mdiCalendarCheck,
  mdiBookmark,
  mdiMenuRight,
  mdiMenuLeft,
} from "@mdi/js";
import Icon from "@mdi/react";
import { FiCalendar, FiThumbsUp, FiMapPin } from "react-icons/fi";
import { ImStarEmpty } from "react-icons/im";
import { FaUmbrellaBeach } from "react-icons/fa";
import { BsCardChecklist, BsUmbrella } from "react-icons/bs";
import { SelectTheme } from "components/SelectTheme/index";
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";
//import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import loadGoogleMapsApi from "load-google-maps-api";
import PlacesAutocomplete from "react-places-autocomplete";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "redux/actions";
import { el } from "date-fns/locale";
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";
import { useAuth } from "AuthContext";
import { featuredData, AsData, foodData } from "data/landing";
import HeaderOTAMobile from "components/Header/HeaderOTAMobile/index";
import axios from "axios";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePickerr from "react-modern-calendar-datepicker";
import ForgotPassword from "components/ForgotPass/index";
import { useLocation } from "react-router-dom";

const OTA2 = () => {
  const [startDate, setStartDate] = useState(new Date());
  var th = 1;
  const [isFocused, setIsFocused] = useState(false);

  const [isApiLoaded, setApiLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const baseURL = window.location.origin;
  console.log("baseUrl: ", baseURL);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    if (selectedOption == "Umrah") {
      th = 2;
    } else {
      th = 1;
    }
    // alert(th)
    setSelectedOption(event.target.value);
  };

  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomClick = () => {
    try {
      if (window.visualViewport && window.visualViewport.scale !== 1) {
        window.visualViewport.scale = 1;
      }
      document.body.style.transform = "scale(1)";
      document.documentElement.style.zoom = "1";
      window.scrollTo(0, 0);
      alert("Zoom reset");
    } catch (error) {
      console.log("Error occurred while resetting zoom:", error);
      alert(`Error occurred while resetting zoom: ${error.message}`);
    }
  };

  const inputRef = useRef(null);
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const [cursorColor, setCursorColor] = useState("black");
  useEffect(() => {
    loadGoogleMapsApi({
      key: "AIzaSyB40jqFnXxo_4ZX7WezdrlR4NicJsseyu8",
      libraries: ["places"], // this line ensures the Places library is loaded
    }).then(() => {
      setApiLoaded(true);
    });

    const interval = setInterval(() => {
      setCursorColor((prevColor) =>
        prevColor === "black" ? "transparent" : "black"
      );
    }, 500); // Toggle cursor color every 500ms

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [selectedooc, setselectedooc] = useState("");

  const [address, setAddress] = useState("");
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  var upateaddresss = "";

  const handleChange = async (address) => {
    upateaddresss = address;
    await setAddress(address);
    await setselectedooc("");

  };

  //destination lama
  // const handleSelect = async (address) => {
  //   //alert(address)
  //   const rows = address.split(",");

  //   if (rows.length > 0) {
  //     setAddress(rows[0]);
  //     setm(rows[0]);
  //     upateaddresss = rows[0];
  //   } else {
  //     setAddress(address);
  //     setm(address);
  //     upateaddresss = address;
  //   }

  //   await setselectedooc(address);
  //   geocodeByAddress(address)
  //     .then((results) => {
  //       let city;
  //       let country;
  //       console.log("Results:", results);
  //       for (let i = 0; i < results[0].address_components.length; i++) {
  //         if (results[0].address_components[i].types.includes("locality")) {
  //           city = results[0].address_components[i].long_name;
  //         }
  //         if (results[0].address_components[i].types.includes("country")) {
  //           country = results[0].address_components[i].long_name;
  //         }
  //       }

  //       if (typeof city === "undefined") {
  //         //  alert(results[0])
  //         // setAddress(country);
  //         // setm(country)
  //         // upateaddresss = country
  //       } else {
  //         // setAddress(city);
  //         // setm(city)
  //         // upateaddresss = city
  //       }

  //       return getLatLng(city + ", " + country);
  //     })
  //     .then((latLng) => console.log("Success", latLng))
  //     .catch((error) => console.error("Errorrrrr", error));
  //   setNav(!nav);
  //   setDisabled(!isDisabled);
  // };

  const handleSelect = async (selectedDestination) => {
    // Split the selected destination into parts
    const rows = selectedDestination.split(",");

    let selectedCity = "";
    let selectedState = "";

    if (rows.length > 0) {
      selectedCity = rows[0].trim();
      setAddress(selectedCity);
      upateaddresss = selectedCity;
    } else {
      setAddress(selectedDestination);
      upateaddresss = selectedDestination;
    }

    await setselectedooc(selectedDestination)

    // Use react-places-autocomplete getLatLng to get latitude and longitude
    geocodeByAddress(selectedDestination)
      .then((results) => {
        console.log("Results:", results);
        for (let i = 0; i < results[0].address_components.length; i++) {
          if (results[0].address_components[i].types.includes("locality")) {
            selectedCity = results[0].address_components[i].long_name;
          }
          if (results[0].address_components[i].types.includes("administrative_area_level_1")) {
            setState(results[0].address_components[i].long_name);
          }
          if (results[0].address_components[i].types.includes("country")) {
            setCountry(results[0].address_components[i].long_name);
          }
        }
        const url = `${selectedCity}/${selectedState}/${country}`;
        return getLatLng(url);

        // const stateParam = selectedState ? `/${selectedState}` : '';

        // return getLatLng(selectedCity + ", " + country);
      })
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Errorrrrr", error));

    setNav(!nav);
    setDisabled(!isDisabled);
  };

  //top destination
  const [topDestination, setTopDestination] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchTopDestination = async () => {
      try {
        // Replace 'your-api-endpoint' with the actual API endpoint URL
        const response = await fetch(
          "https://halaltravel.ai/hv/api/chatgpt/user/itinerary/topstate"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setTopDestination(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchTopDestination();
  }, []);

  // Calculate the range of items to display based on activeIndex
  const slideLeft = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft - 500;
    // if (currentPageProd > 1) {
    //   setCurrentPageProd(currentPageProd - 1);
    // }
  };
  const slideRight = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft + 500;
    // setCurrentPageProd(currentPageProd + 1);
  };

  function handleTopDestination(address, state, country) {
    if (state) {
      navigate(`/list-travelplan/${address}/${state}/${country}`);
    } else {
      navigate(`/list-travelplan/${address}/${country}`);
    }
  }


  const [isClicked, setIsClicked] = useState(false);
  const wrapperRef = useRef(null);
  const [m, setm] = useState("");
  const [day, setday] = useState("");

  const [nav, setNav] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  const location = useLocation();
  const { showLoginPopup } = location.state || {};
  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [isPopup2Open, setIsPopup2Open] = useState(false);
  const [isPopup3Open, setIsPopup3Open] = useState(false);
  // const { setIsLoggedIn } = useAuth();

  // setIsLoggedIn(true);
  const openPopup1 = () => {
    setIsPopup1Open(true);
    setIsPopup2Open(false); // Close Popup2 when Popup1 is opened
  };

  const openPopup2 = () => {
    setIsPopup2Open(true);
    setIsPopup1Open(false); // Close Popup1 when Popup2 is opened
  };
  const openPopup3 = () => {
    setIsPopup3Open(true);
    setIsPopup1Open(false); // Close Popup1 when Popup3 is opened
  };

  const closePopup1 = () => {
    setIsPopup1Open(false);
  };

  const closePopup2 = () => {
    setIsPopup2Open(false);
  };
  const closePopup3 = () => {
    setIsPopup3Open(false);
  };

  useEffect(() => {
    // Show the login popup and alert if specified in the state
    if (showLoginPopup) {
      setIsPopup1Open(true);
    }
    location.state = {};
  }, [showLoginPopup, setIsPopup1Open, location.state]);

  const { setIsLoggedIn } = useAuth();
  // setIsLoggedIn(true);

  const dataToPass = { message: m, days: day, theme: th };

  function handleClick() {
    setIsClicked(true);
  }

  const receivedData = {
    destination: address,
    state: state,
    country: country
  };

  function handleNavigate689() {
    // alert(address, selectedooc)

    if (selectedooc.trim() !== "") {
      try {
        // handleZoomClick()
        // window.document.body.style.zoom = 1;
        // wrapperRef.current.style.zoom = "1%";
        dispatch(fetchData(receivedData));
      } catch (error) {
        console.error("An error occurred:", error);
      }
      // Navigation logic
      if (state) {
        navigate(`/list-travelplan/${address}/${state}/${country}`);
      } else {
        navigate(`/list-travelplan/${address}/${country}`);
      }

      // navigate(`/list-travelplan/${address}/${state}/${country}`, { state: receivedData });
    } else {
      alert("Please select proper location from dropdown");
    }
  }

  function navigateOTA(data) {
    console.log("navigateOTA");

    try {
      dispatch(fetchData(data));
    } catch (error) {
      console.error("An error occurred:", error);
    }

    navigate("/ota1", { state: data });
  }

  function handleNavigateCameron(data) {
    try {
      dispatch(fetchData(data));
    } catch (error) {
      console.error("Error", error);
    }

    console.log("tryyy", data);
    navigate("/och", { state: data });
  }

  function handleNavigateBatuCaves(data) {
    try {
      dispatch(fetchData(data));
    } catch (error) {
      console.error("Error", error);
    }

    console.log("tryyy", data);
    navigate("/obc", { state: data });
  }

  function handleNavigateKSelangor(data) {
    try {
      dispatch(fetchData(data));
    } catch (error) {
      console.error("Error", error);
    }

    console.log("tryyy", data);
    navigate("/oks", { state: data });
  }

  function handleNavigate12() {
    navigate("/about-us");
  }

  function handleNavigate13() {
    navigate("/epic-creator-central");
  }

  function handleNavigatekl() {
    navigate("/ota-kl");
  }

  function handleNavigate1() {
    navigate("/seemore");
  }

  const userIds = [9, 3, 2];
  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const profiles = [];

      for (const userId of userIds) {
        try {
          const response = await axios.get(
            `https://halaltravel.ai/ht/api/profile/${userId}`
          );
          const data = response.data;
          profiles.push({
            userId,
            profileImage: data.profileImage,
            userName: data.userName,
            email: data.email,
            bio: data.bio,
            link: baseURL + "/influencer-user/" + userId,
          });
        } catch (error) {
          console.error(
            "Error fetching profile data for user ID",
            userId,
            ":",
            error
          );
        }
      }

      setUserProfiles(profiles);
    };

    fetchData();
  }, []);

  const CustomInput = ({ value, onClick, readOnly }) => (
    <input
      value={value}
      onClick={onClick}
      readOnly={readOnly}
      style={{ cursor: "pointer" }}
    />
  );

  const StyledInput = () => {
    return (
      <input className="font-normal font-montserrat not-italic p-[0] sm:text-[25px] md:text-[25px] lg:text-[9px] text-black placeholder:required text-slate_700 w-[100%]" />
    );
  };
  const CalendarContainer = ({ className, children }) => (
    <div
      className={className}
      style={{ border: "1px solid #ccc", padding: "10px" }}
    >
      {children}
    </div>
  );

  const MyContainer = ({ className, children, customButton }) => {
    return (
      <div
        style={{
          padding: "16px",
          background: "#216ba5",
          color: "#fff",
          width: "400px",
        }}
      >
        <CalendarContainer className={className}>
          <div style={{ background: "#f0f0f0" }}>
            What is your favorite day?
          </div>
          <div style={{ position: "relative" }}>
            {customButton}
            {children}
          </div>
        </CalendarContainer>
      </div>
    );
  };
  const CustomDatePickerButton = forwardRef(({ value, onClick }, ref) => (
    <button
      style={{
        // Add the styles you want for the button
        padding: "10px",
        fontSize: "30px",
        backgroundColor: "#fff",
        borderRadius: "5px",

        cursor: "pointer", // Add a pointer cursor to indicate it's clickable
      }}
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));

  useEffect(() => {
    const receivedData = {
      theme: th,
      message: address,
      days: day === "" ? 1 : day,
      date: startDate,
      //: startDate.toLocaleString('default', { month: 'long' })
    };
    console.log(address, receivedData);
  }, [address]);

  // function handleInputChange(event) {
  //   setm(event.target.value);
  // }
  function handleInputChange1(event) {
    setday(event.target.value);
  }

  function handleKeyPress(event) {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);

    // Allow only numbers
    const isNumber = /^[1-5]+$/.test(keyValue);
    if (!isNumber) {
      event.preventDefault();
    }
  }

  if (!isApiLoaded) {
    return null; // or return a loading spinner
  }

  return (
    <>
      <div
        style={{ touchAction: "manipulation" }}
        ref={wrapperRef}
        className="bg-white_A700 flex flex-col font-montserrat mx-auto w-full"
      >
        {/* <HeaderOTA className="fixed invisible lg:visible" />
        <HeaderOTAMobile className="visible fixed overflow-hidden lg:invisible lg:hidden"></HeaderOTAMobile>
        <div className="w-full">
          <Img
            src="images/img_rectangle120.png"
            className="h-screen object-cover w-full"
            alt="rectangle120"
          />
          <div className="absolute flex flex-col md:gap-10 inset-x-[0] items-center justify-start mx-auto md:top-[20%] md:p-2 xl:top-[25%] lg:w-[68%] sm:w-[80%]">
            <Text
              className="font-normal xs:text-5xl lg:text-[42px] font-montserrat absolute inset-x-[0] sm:leading-relaxed lg:leading-loose mx-auto not-italic text-black_900 text-left tracking-wide"
            >
            <>
            Hello, <br/>
            Personalize Your Travel Plans With AI
            </>
           
             </Text>
          </div> */}

        <div className="fixed w-full" style={{ zIndex: 2 }}>
          <HeaderOTA
            openPopup1={openPopup1}
            className="fixed invisible lg:visible"
          />
          <LoginPage
            isOpen={isPopup1Open}
            openPopup2={openPopup2}
            openPopup3={openPopup3}
            closePopup1={closePopup1}
          />
          <SignupPage
            isOpen={isPopup2Open}
            closePopup2={closePopup2}
            openPopup1={openPopup1}
          />
          <ForgotPassword isOpen={isPopup3Open} closePopup3={closePopup3} />
          <HeaderOTAMobileEpic
            openPopup1={openPopup1}
            className="visible fixed overflow-hidden lg:invisible lg:hidden"
          />
        </div>
        <div
          className="w-full xs:pt-[160px] lg:pt-[92px]"
          style={{ zIndex: 1 }}
        >
          <Img
            src="images/img_rectangle120.png"
            className="h-screen object-cover w-full"
            alt="rectangle120"
          />
          <div id="planholiday" className="absolute md:gap-10 inset-x-[0] text-center items-center justify-start mx-auto md:top-[30%] md:p-2 xl:top-[25%] lg:w-[68%] sm:w-[80%]">
            <Text
              className="text-center font-bold xs:text-5xl lg:text-[42px] font-montserrat absolute inset-x-[0] sm:leading-relaxed lg:leading-loose mx-auto not-italic text-black_900 text-left tracking-wide"
            >
              <>
                Discover Malaysia: <div><text className="font-normal lg:text-[35px] p-0">Tailored Travels Powered by AI</text> </div>
              </>
            </Text>
          </div>
          {/*Mobile View */}
          <div className="absolute visible lg:invisible shadow bg-white 2xl:bottom-[25%] sm:bottom-[30%] left-[5%] flex gap-[7px] items-center justify-center outline outline-[1px] outline-bluegray_100 px-5 py-10 rounded-[50px] w-[90%] h-fit">
            <div className="grid grid-cols-2 gap-6 w-[90%]">
              {/*Destination input */}
              <div className="col-span-2 inline-flex items-center text-center p-6 gap-4 justify-start outline outline-[1px] outline-[#00a19a] rounded-[20px] hover:outline-blue-500/75">
                <CiSearch size={55} className="ml-4 text-gray_700 " />

                <input
                  placeholder="Key in your destination"
                  className="font-medium font-montserrat items-center justify-start not-italic p-[0] sm:text-[30px] md:text-[30px] lg:text-[9px] placeholder:required text-slate_700 w-[160%] outline-none border-none"
                  // onClick={() => setNav(!nav) & setDisabled(!isDisabled)}
                  onClick={() => {
                    setNav(!nav);
                    setDisabled(!isDisabled);
                    focusInput();
                  }}
                  disabled={isDisabled}
                  value={address}
                />
                {nav ? (
                  <div className="bg-black/80 fixed w-screen h-screen z-10 bottom-0 left-0"></div>
                ) : (
                  ""
                )}
                <div
                  className={
                    nav
                      ? "fixed bottom-0 rounded-t-[90px] left-0 w-screen h-[110em] p-4 bg-white z-10 duration-300"
                      : "fixed bottom-[-200%] left-0 w-screen h-[110em] p-4 bg-white z-10 duration-300"
                  }
                >
                  <text className="font-montserrat absolute top-40 left-11 text-[40px] font-medium">
                    Enter Destination
                  </text>

                  <AiOutlineClose
                    onClick={() => setNav(!nav) & setDisabled(!isDisabled)}
                    size={60}
                    className="absolute right-10 top-14 cursor-pointer"
                  />

                  <nav className="h-fit m-8 snap-y">
                    <div className="snap-end grid mt-60 grid-cols-2 w-[100%]">
                      <div className="col-span-2 w-[100%] inline-flex h-[10em] items-center rounded-[20px] text-center bg-white/80 p-6 gap-4 justify-start outline outline-[0.5px] outline-blue-500/75">
                        <CiSearch size={50} className="ml-2 text-gray_700 " />
                        <PlacesAutocomplete
                          apiKey="AIzaSyB40jqFnXxo_4ZX7WezdrlR4NicJsseyu8"
                          value={address}
                          onChange={handleChange}
                          onSelect={handleSelect}
                        >
                          {({
                            getInputProps,
                            suggestions,
                            getSuggestionItemProps,
                            loading,
                          }) => {
                            //to disable suggestion for epictravel

                            // const suggestionsToDisable = [
                            //   "Kuala Lumpur, Malaysia",
                            //   "Pulau Pinang, Malaysia"
                            // ];
                            // const filteredSuggestions = suggestions.filter(
                            //   (suggestion) => {
                            //     // Check if the suggestion is a big city or a country
                            //     // return suggestions;
                            //     const isDisabled = suggestionsToDisable.includes(suggestion.description);
                            //     return !isDisabled;
                            //   }
                            // );

                            //for vm
                            const suggestionsToDisable = [
                              "Kuala Lumpur, Malaysia",
                              "Pulau Pinang, Malaysia"
                            ];

                            const filteredSuggestions = suggestions.filter((suggestion) => {

                              // Check if the suggestion description includes "Malaysia" and is not in the disabled list
                              const words = suggestion.description.split(',').map((word) => word.trim().toLowerCase());
                              const includesMalaysia = words.includes("malaysia") && words[words.length - 1] === "malaysia";
                              // const includesMalaysia = suggestion.description.toLowerCase().includes("malaysia");
                              const isDisabled = suggestionsToDisable.includes(suggestion.description);

                              return includesMalaysia && !isDisabled;
                            });


                            return (
                              <div>
                                <input
                                  ref={inputRef}
                                  {...getInputProps({
                                    placeholder: "Key in your destination",
                                    className:
                                      "custom-input font-medium font-montserrat items-center justify-start not-italic p-[0] sm:text-[35px] md:text-[35px] placeholder:required placeholder-gray-300 text-gray-400 w-[160%] outline-none border-none",
                                    style: {},
                                  })}
                                />

                                <div
                                  className="autocomplete-dropdown-container"
                                  style={{
                                    position: "absolute",
                                    zIndex: 1000,
                                    padding: 10,
                                    marginLeft: -130,
                                    marginTop: 80,
                                    width: "96%",
                                    height: "100%",
                                  }}
                                >
                                  {loading
                                    ? null
                                    : filteredSuggestions.map((suggestion) => {
                                      const className = suggestion.active
                                        ? "suggestion-item--active"
                                        : "suggestion-item";
                                      const style = suggestion.active
                                        ? {
                                          backgroundColor: "#bee3e2",
                                          font: "Montserrat",
                                          cursor: "pointer",
                                          color: "#000",
                                          paddingTop: "40px",
                                          fontSize: "32px",
                                          paddingRight: "20px",
                                          height: "4em",
                                          width: "600px",
                                          fontWeight: "normal",
                                          textAlign: "left",
                                        }
                                        : {
                                          backgroundColor: "#ffffff",
                                          paddingLeft: "30px",
                                          font: "Montserrat",
                                          cursor: "pointer",
                                          color: "#000",
                                          fontSize: "35px",
                                          paddingTop: "40px",
                                          height: "5em",
                                          fontWeight: "normal",
                                          textAlign: "left",
                                        };
                                      return (
                                        <div
                                          {...getSuggestionItemProps(
                                            suggestion,
                                            {
                                              className,
                                              style,
                                            }
                                          )}
                                        >
                                          <span
                                            style={{
                                              display: "flex",
                                              flexDirection: "column",
                                            }}
                                          >
                                            <span
                                              style={{
                                                display: "flex",
                                                alignItems: "center",
                                              }}
                                            >
                                              <FaMapMarkerAlt
                                                style={{
                                                  marginRight: "4",
                                                  fontSize: "50px",
                                                  marginTop: "30px",
                                                }}
                                              />
                                              <strong
                                                style={{
                                                  marginLeft: "30px",
                                                  marginTop: "-20px",
                                                }}
                                              >
                                                {
                                                  suggestion.description.split(
                                                    ","
                                                  )[0]
                                                }
                                              </strong>
                                            </span>
                                            <line className="w-full h-2 color-[#f5f5f5]"></line>
                                            <span
                                              style={{
                                                display: "block",
                                                fontStyle: "oblique",
                                                marginLeft: "95px",
                                                marginTop: "-20px",
                                              }}
                                            >
                                              {/* {suggestion.description
                                                  .split(",")
                                                  .slice(-2)} */}
                                              {suggestion.description.split(',').slice(-2).join(', ')}

                                            </span>
                                          </span>
                                        </div>
                                      );
                                    })}
                                </div>
                              </div>
                            );
                          }}
                        </PlacesAutocomplete>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>

              {/*Date input-calendar */}

              {/* <div className="items-center inline-flex justify-center p-4 gap-4 outline outline-[1px] outline-[#00a19a] rounded-[20px] hover:outline-blue-500/75">
                <FiCalendar size={40} className="ml-0 text-[#00a19a]" /> */}
              {/* <DatePicker


className="font-normal font-montserrat not-italic p-[0]   text-black placeholder:required text-slate_700 w-[100%]"
                  wrapClassName="w-[100%]"
                  shape="RoundedBorder3"
                  size="xl"
                  type="date"
                
                  // className="custom-datepicker"
                  selected={startDate} onChange={(date) => setStartDate(date)} /> */}

              {/* <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  withPortal
                  relativeSize={true}
                  customInput={<CustomDatePickerButton />}
                />
              </div> */}

              {/* <div className="inline-flex items-center justify-center p-4 gap-3 outline outline-[1px] outline-[#00a19a] rounded-[20px] hover:outline-blue-500/75">
                <FiCalendar size={40} className="ml-4 text-[#00a19a]" />
                <select
                  className="font-normal font-montserrat not-italic p-[0] sm:text-[25px] md:text-[25px] lg:text-[9px] text-black placeholder:required text-slate_700 w-[100%]"
                  onChange={handleInputChange1}
                  value={day}
                  name="name"
                  style={{ touchAction: "manipulation", border: "none" }} // Remove the border from here
                >
                  <option value="1"> 1 Day</option>
                  <option value="2"> 2 Days</option>
                  <option value="3"> 3 Days</option>
                  <option value="4"> 4 Days</option>
                  <option value="5"> 5 Days</option>
                </select>
              </div> */}

              {/*theme input dropdown */}
              {/* <div className="inline-flex col-span-2 items-center justify-center p-4 gap-6 outline outline-[1px] outline-[#00a19a] rounded-[20px] hover:outline-blue-500/75">

                <TbBeach size={45} className="ml-4 text-[#00a19a] " />

                <select
                  className="font-normal font-montserrat not-italic p-[0] sm:text-[25px] md:text-[25px] lg:text-[9px] text-black placeholder:required text-slate_700 w-[100%]"
                  onChange={handleOptionChange}
                  id="dropdown"
                  value={selectedOption}

                  style={{ touchAction: 'manipulation', border: 'none' }} // Remove the border from here
                >
                  <option value=""> Theme</option>
                  <option value="Umrah"> Umrah</option>
                  <option value="Balik Kampung"> Balik Kampung</option>

                </select>
              </div>  */}
              <div className="items-center col-span-2 justify-center mt-1">
                <Button
                  className="flex h-[85px] items-center bg-[#00a19a] justify-center rounded-[20px] w-full px-3 py-2"
                  size="smIcn"
                  onClick={handleNavigate689}
                >
                  <text className=" font-montserrat text-[25px] text-white  text-center">
                    Search
                  </text>
                </Button>
              </div>
            </div>
          </div>
          {/*Web View*/}
          <div className="absolute invisible lg:visible bg-white_A700/75 xl:top-[60%] 2xl:top-[55%] bottom-[20%] left-[16%] flex gap-[7px] items-center justify-start p-0.5 rounded-[5px] w-[68%] md:h-[15%] xl:h-[25%]">
            <div className="bg-black">
              <Text
                className="w-[100%] p-4 absolute top-[10%] font-montserrat left-[0] not-italic text-black_900 text-center justify-center tracking-[-0.30px]"
                as="h5"
                variant="h5"
              >
                Enter your destination and start planning for your awesome
                adventure !
              </Text>
            </div>

            <div class=" mt-4 py-4 mx-[100px] w-[100%] h-[30%]">
              <div className="bg-white_A700 shadow h-10 flex flex-row items-center outline outline-[1px] outline-[#00a19a] rounded-full w-[100%]">
                <IoIosSearch size={30} fill="#00a19a" className="ml-2 " />
                <PlacesAutocomplete
                  apiKey="AIzaSyB40jqFnXxo_4ZX7WezdrlR4NicJsseyu8"
                  value={address}
                  onChange={handleChange}
                  onSelect={handleSelect}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => {
                    //to disable suggestion
                    // const suggestionsToDisable = [
                    //   "Kuala Lumpur, Malaysia",
                    //   "Pulau Pinang, Malaysia"
                    // ];
                    // const filteredSuggestions = suggestions.filter(
                    //   (suggestion) => {
                    //     // Check if the suggestion is a big city or a country
                    //     // return suggestions;
                    //     const isDisabled = suggestionsToDisable.includes(suggestion.description);
                    //     return !isDisabled;
                    //   }
                    // );
                    const suggestionsToDisable = [
                      "Kuala Lumpur, Malaysia",
                      "Pulau Pinang, Malaysia"
                    ];
                    
                    const filteredSuggestions = suggestions.filter((suggestion) => {
                      // Check if the suggestion description includes "Malaysia" and is not in the disabled list
                      const words = suggestion.description.split(',').map((word) => word.trim().toLowerCase());
                      const includesMalaysia = words.includes("malaysia") && words[words.length - 1] === "malaysia";
                      const isDisabled = suggestionsToDisable.includes(suggestion.description);
                    
                      // Include suggestions with "Malaysia" by default and exclude disabled suggestions
                      return (includesMalaysia || suggestion.description.toLowerCase().includes("malaysia")) && !isDisabled;
                    });
                    

                    return (
                      <div className="w-[100%]">
                        <input
                          {...getInputProps({
                            placeholder: "Destination",
                            className:
                              " ml-1 font-normal not-italic font-montserrat p-[0] sm:text-[8px] md:text-[10px] xl:text-[15px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black placeholder:required text-slate_700 w-[100%] outline-none  border-none", // your custom class
                          })}
                        />

                        <div
                          className="autocomplete-dropdown-container"
                          style={{
                            position: "absolute",
                            zIndex: 1000,
                            marginTop: 10,
                            marginLeft: -0,
                            border: isLoading ? "none" : "none",
                            boxShadow: isLoading
                              ? "0 0px 0px 0 rgba(0, 0, 0, 0.2)"
                              : "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                            width: "18%",
                            // maxHeight: "200px", 
                            // overflowY: "auto",
                          }}
                        >
                          {isLoading ? (
                            <div>
                              <strong>Loading...</strong>
                              <CircularProgress
                                size={12}
                                style={{ color: "black" }}
                              />
                            </div>
                          ) : (
                            filteredSuggestions.map((suggestion) => {
                              const className = suggestion.active
                                ? "suggestion-item--active"
                                : "suggestion-item";
                              const style = suggestion.active
                                ? {
                                  font: "Montserrat",
                                  backgroundColor: "#bee3e2",
                                  paddingLeft: "5px",
                                  paddingTop: "15px",
                                  paddingBottom: "10px",
                                  cursor: "pointer",
                                  color: "black",
                                  fontSize: "12px",
                                  fontWeight: "normal",
                                  outlineColor: "#00a19a",
                                  height: "5em",
                                  width: "300px",
                                  borderOutlineColor: "#00a19a",
                                  borderColor: "#00a19a",
                                }
                                : {
                                  font: "Montserrat",
                                  backgroundColor: "#fafafa",
                                  cursor: "pointer",
                                  color: "black",
                                  fontSize: "12px",
                                  fontWeight: "normal",
                                  outlineColor: "#00a19a",
                                  height: "5em",
                                  width: "300px",
                                  borderOutlineColor: "#00a19a",
                                  paddingLeft: "5px",
                                  paddingTop: "15px",
                                  paddingBottom: "10px",
                                  borderColor: "#00a19a",
                                };
                              return (
                                <div
                                  {...getSuggestionItemProps(suggestion, {
                                    className,
                                    style,
                                  })}
                                >
                                  <span
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                    }}
                                  >
                                    <span
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <FaMapMarkerAlt
                                        style={{
                                          marginRight: "2px",
                                          fontSize: "20px",
                                        }}
                                      />
                                      <strong
                                        style={{
                                          marginLeft: "5px",
                                          marginTop: "-10px",
                                        }}
                                      >
                                        {suggestion.description.split(",")[0]}
                                      </strong>
                                    </span>
                                    <span
                                      style={{
                                        display: "block",
                                        marginLeft: "25px",
                                        marginTop: "-5px",
                                      }}
                                    >
                                      {/* {suggestion.description
                                        .split(",")
                                        .slice(-2)} */}
                                      {suggestion.description.split(',').slice(-2).join(', ')}

                                    </span>
                                  </span>
                                </div>
                              );
                            })
                          )}
                        </div>
                      </div>
                    );
                  }}
                </PlacesAutocomplete>
                <div className="flex flex-col items-end justify-end ">

                  <button
                    className="mr-1 flex bg-[#00A19A] md:text-[30px]  h-9 lg:text-[14px] justify-end items-end text-center text-white font-medium px-4 py-2 rounded-full "
                    onClick={handleNavigate689}
                  >
                    Search
                  </button>
                </div>
              </div>
              {/* <div className="bg-white_A700 flex flex-row gap-[5px] items-center outline outline-[1px] outline-[#00a19a] rounded-[5px] w-[100%]">
                <FiCalendar size={30} className="ml-2 text-[#00a19a]" />
                <DatePicker
                  className="font-normal font-montserrat not-italic p-[0] sm:text-[8px] md:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black placeholder:required text-slate_700 w-[100%]"
                  wrapClassName="w-[100%] "
                  placeholder="Date"
                  shape="RoundedBorder3"
                  size="sm"
                  type="date"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                /> */}
              {/* </Input> */}
              {/* </div> */}

              {/* <div className="bg-white_A700 mr-10 flex flex-row gap-[5px] items-center outline outline-[1px] outline-[#00a19a] rounded-[5px] w-[100%]">
                <FiCalendar size={30} className="ml-2 text-[#00a19a]" />
                <select
                  className="font-normal not-italic font-montserrat p-[0] sm:text-[8px] md:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black placeholder:required text-slate_700 w-[100%] outline-none border-none"
                  onChange={handleInputChange1}
                  value={day}
                  name="name"
                >
                  <option value="1"> 1 Day</option>
                  <option value="2"> 2 Days</option>
                  <option value="3"> 3 Days</option>
                  <option value="4"> 4 Days</option>
                  <option value="5"> 5 Days</option>
                </select>
              </div> */}

              {/* <div className="font-montserrat md:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] bg-white_A700 mr-10 flex flex-row gap-[2px] items-center outline outline-[1px] outline-[#00a19a] rounded-[5px] w-[100%]">

                <FaUmbrellaBeach size={40} className="ml-2 text-[#00a19a]" />
                <select
                  className="font-montserrat  md:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] w-fit no-border"
                  id="dropdown" value={selectedOption} onChange={handleOptionChange}>
                  <option value="">Theme</option>
                  <option value="Umrah">Umrah</option>
                  <option value="Balik Kampung">Balik Kampung</option>
                </select>

              </div> */}

            </div>
          </div>
        </div>
      </div>
      {/*footer */}
      <div className="w-[100%] sm:bg-[#00A19A] xl:bg-gradient-to-b 2xl:bg-gradient-to-b from-[#00A19A] to-[#027731] pb-10">
        <div className="lg:mb-[20px] md:mb-[32px] text-white font-normal md:text-[40px] lg:text-[30px] font-montserrat w-[100%] text-center md:pt-[20px] lg:pt-[30px]">
          <Text className=" ">Top Destinations in Malaysia</Text>
        </div>
        <Row className="justify-center">
          <button className="  lg:ml-2 md:ml-0">
            <Icon
              path={mdiMenuLeft}
              size="50px"
              className="text-white"
              onClick={slideLeft}
            />
          </button>
          <Row
            className=" sm:w-[100%] sm:h-[fit] lg:w-[70%] lg:h-[fit] justify-start lg:gap-8 md:gap-6 inline-flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
            id="slider2"
          >
            {topDestination &&
              topDestination.map((item) => (
                <div className=" justify-center "
                  onClick={() => handleTopDestination(item.state, item.state, item.country)}
                >
                  <Img
                    src={`https://halaltravel.ai${item.image}`}
                    alt=""
                    className="common-pointer md:w-[220px] md:h-[220px] lg:w-[120px] lg:h-[120px] mx-auto rounded-full dark:bg-gray-500 aspect-square shadow"

                  />
                  <div className="common-pointer items-center text-center justify-center lg:mt-[7px] md:mt-[7px] lg:w-[130px] md:w-[250px]">
                    <text
                      className="text-white font-semibold md:text-[28px] lg:text-[16px] font-montserrat w-[100%] text-center "
                      title={item.state}
                    >
                      {item.state.length > 18
                        ? `${item.state.substring(0, 18)}...`
                        : item.state}
                    </text>
                    <br></br>
                    <text className="text-white font-normal md:text-[24px] lg:text-[14px] font-montserrat w-[100%] text-center lg:mt-[5px] md:mt-[5px]">
                      {item.counter}
                    </text>
                    <br></br>
                    <text className="text-white font-normal md:text-[24px] lg:text-[14px] font-montserrat w-[100%] text-center">
                      Travel Plans
                    </text>
                  </div>
                </div>
              ))}
          </Row>
          <button className="  lg:ml-2 md:ml-0">
            <Icon
              path={mdiMenuRight}
              size="50px"
              className="text-white"
              onClick={slideRight}
            />
          </button>
        </Row>
      </div>

      <div>
        <div className="p-[50px] w-full">
          <div id="travelideas" className="sm:w-[100%] xl:w-[60%] 2xl:w-[56%]">
            <text className="text-black sm:text-[40px] 2xl:text-[30px] font-montserrat">
              Discover More: Inspirational Ideas Co-Created by Fellow Travellers
              and Professionals
            </text>
          </div>

          <div className="pt-[50px] w-full flex justify-between">
            <div>
              <text className="sm:text-[35px] xl:text-[18px] 2xl:text-[18px] font-montserrat text-black">
                Featured
              </text>
            </div>
            <div className="items-end">
              <text className="sm:text-[35px] xl:text-[18px] 2xl:text-[18px] font-montserrat hover:underline common-pointer text-[#00A19A]">
                See more...
              </text>
            </div>
          </div>

          <div className="pb-[11px] md:flex md:overflow-x-scroll md:w-full scrollbar-hide md:scroll 2xl:overflow-x-hidden 2xl:grid xl:grid-cols-4 2xl:grid-cols-4 md:gap-[30px] xl:gap-[30px] 2xl:gap-[85px] mt-5 font-montserrat">
            {featuredData.map((data, index) => (
              <div className="relative" key={index}>
                <div className="bg-[#FFFFFF] rounded-[25px] sm:w-[600px] sm:h-[750px] xl:w-[280px] lg:w-[290px] lg:h-[420px] shadow-lg">
                  <Icon
                    path={mdiBookmarkOutline}
                    size="30px"
                    className="md:hidden xl:block 2xl:block absolute sm:ml-[570px] xl:ml-[230px] 2xl:ml-[240px] mt-[15px] text-[#00A19A] bg-[#FFFFFF] w-fit h-fit p-1 hover:bg-[#00A19A] hover:text-[#FFFFFF] rounded-full common-pointer"
                  />
                  <Icon
                    path={mdiBookmarkOutline}
                    size="60px"
                    className="md:block xl:hidden 2xl:hidden absolute ml-[510px] mt-[25px] text-[#00A19A] bg-[#FFFFFF] w-fit h-fit p-1 hover:bg-[#00A19A] hover:text-[#FFFFFF] rounded-full common-pointer"
                  />
                  <div
                    className="common-pointer"
                    onClick={() =>
                      navigateOTA({
                        theme: data.theme,
                        message: data.message,
                        days: data.days,
                        date: new Date(),
                      })
                    }
                  >
                    <div>
                      <Img
                        src={data.image}
                        className="sm:w-[650px] w-[800px] sm:h-[500px] xl:h-[270px] 2xl:h-[270px] object-cover rounded-t-[25px]"
                        alt={data.alt}
                      />
                    </div>
                    <div className="sm:p-[30px] lg:p-[20px] h-[160px]">
                      <text className="font-bold sm:text-[28px] xl:text-[15px] 2xl:text-[15px] text-[#000000]">
                        {data.title}
                      </text>
                      <div className="h-[25%] sm:h-[70px] lg:h-[40px] ">
                        <text className="sm:text-[24px] xl:text-[12px] 2xl:text-[12px] text-[#000000]">
                          {data.description}
                        </text>
                      </div>
                      <div className="tags sm:h-[40px] lg:h-[40px]">
                        {data.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="tag sm:text-[22px] xl:text-[11px] 2xl:text-[11px]"
                          >
                            {tagIndex > 0 && (
                              <span className="dot text-[15px] mx-2">•</span>
                            )}
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between w-full lg:mt-0 sm:mt-[20px]">
                        <div className="flex items-center">
                          <Icon
                            path={mdiBookmark}
                            size="18px"
                            className="text-[#00A19A]"
                          />
                          <text className="sm:text-[22px] xl:text-[11px] 2xl:text-[11px] text-[#00A19A] ml-1">
                            {data.saves} saves
                          </text>
                        </div>

                        <text className="sm:text-[22px] xl:text-[11px] 2xl:text-[11px] italic text-[#00A19A]">
                          {data.author}
                        </text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-[50px] w-[full] flex justify-between">
            <div>
              <text className="sm:text-[35px] xl:text-[18px] 2xl:text-[18px] font-montserrat text-black">
                Adventures and Sports
              </text>
            </div>
            <div className="items-end">
              <text className="sm:text-[35px] xl:text-[18px] 2xl:text-[18px] font-montserrat hover:underline common-pointer text-[#00A19A]">
                See more...
              </text>
            </div>
          </div>

          <div className="pb-[11px] md:flex md:overflow-x-scroll md:w-full scrollbar-hide md:scroll 2xl:overflow-x-hidden 2xl:grid xl:grid-cols-4 2xl:grid-cols-4 md:gap-[30px] xl:gap-[30px] 2xl:gap-[85px] mt-5 font-montserrat">
            {AsData.map((data, index) => (
              <div className="relative" key={index}>
                <div className="bg-[#FFFFFF] rounded-[25px] sm:w-[600px] sm:h-[750px] xl:w-[280px] lg:w-[290px] lg:h-[420px] shadow-lg">
                  <Icon
                    path={mdiBookmarkOutline}
                    size="30px"
                    className="md:hidden xl:block 2xl:block absolute sm:ml-[570px] xl:ml-[230px] 2xl:ml-[240px] mt-[15px] text-[#00A19A] bg-[#FFFFFF] w-fit h-fit p-1 hover:bg-[#00A19A] hover:text-[#FFFFFF] rounded-full common-pointer"
                  />
                  <Icon
                    path={mdiBookmarkOutline}
                    size="60px"
                    className="md:block xl:hidden 2xl:hidden absolute ml-[510px] mt-[25px] text-[#00A19A] bg-[#FFFFFF] w-fit h-fit p-1 hover:bg-[#00A19A] hover:text-[#FFFFFF] rounded-full common-pointer"
                  />
                  <div
                    className="common-pointer"
                    onClick={() =>
                      navigateOTA({
                        theme: data.theme,
                        message: data.message,
                        days: data.days,
                        id: data.id,
                        date: new Date(),
                      })
                    }
                  >
                    <div>
                      <Img
                        src={data.image}
                        className="sm:w-[650px] w-[800px] sm:h-[500px] xl:h-[270px] 2xl:h-[270px] object-cover rounded-t-[25px]"
                        alt={data.alt}
                      />
                    </div>
                    <div className="sm:p-[30px] lg:p-[20px] h-[160px]">
                      <text className="font-bold sm:text-[28px] xl:text-[15px] 2xl:text-[15px] text-[#000000]">
                        {data.title}
                      </text>
                      <div className="h-[25%] sm:h-[70px] lg:h-[40px]">
                        <text className="sm:text-[24px] xl:text-[12px] 2xl:text-[12px] text-[#000000]">
                          {data.description}
                        </text>
                      </div>
                      <div className="tags sm:h-[40px] lg:h-[40px]">
                        {data.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="tag sm:text-[22px] xl:text-[11px] 2xl:text-[11px]"
                          >
                            {tagIndex > 0 && (
                              <span className="dot text-[15px] mx-2">•</span>
                            )}
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between w-full lg:mt-0 sm:mt-[20px]">
                        <div className="flex items-center">
                          <Icon
                            path={mdiBookmark}
                            size="18px"
                            className="text-[#00A19A]"
                          />
                          <text className="sm:text-[22px] xl:text-[11px] 2xl:text-[11px] text-[#00A19A] ml-1">
                            {data.saves} saves
                          </text>
                        </div>

                        <text className="sm:text-[22px] xl:text-[11px] 2xl:text-[11px] italic text-[#00A19A]">
                          {data.author}
                        </text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <section id="food">
            <div className="pt-[50px] w-full flex justify-between">
              <div>
                <text className="sm:text-[35px] xl:text-[18px] 2xl:text-[18px] font-montserrat text-black">
                  Food Discovery
                </text>
              </div>
              <div className="items-end">
                <text className="sm:text-[35px] xl:text-[18px] 2xl:text-[18px] font-montserrat hover:underline common-pointer text-[#00A19A]">
                  See more...
                </text>
              </div>
            </div>
          </section>

          <div className="pb-[11px] md:flex md:overflow-x-scroll md:w-full scrollbar-hide md:scroll 2xl:overflow-x-hidden 2xl:grid xl:grid-cols-4 2xl:grid-cols-4 md:gap-[30px] xl:gap-[30px] 2xl:gap-[85px] mt-5 font-montserrat">
            {foodData.map((data, index) => (
              <div className="relative" key={index}>
                <div className="bg-[#FFFFFF] rounded-[25px] sm:w-[600px] sm:h-[750px] xl:w-[280px] lg:w-[290px] lg:h-[420px] shadow-lg">
                  <Icon
                    path={mdiBookmarkOutline}
                    size="30px"
                    className="md:hidden xl:block 2xl:block absolute sm:ml-[570px] xl:ml-[230px] 2xl:ml-[240px] mt-[15px] text-[#00A19A] bg-[#FFFFFF] w-fit h-fit p-1 hover:bg-[#00A19A] hover:text-[#FFFFFF] rounded-full common-pointer"
                  />
                  <Icon
                    path={mdiBookmarkOutline}
                    size="60px"
                    className="md:block xl:hidden 2xl:hidden absolute ml-[510px] mt-[25px] text-[#00A19A] bg-[#FFFFFF] w-fit h-fit p-1 hover:bg-[#00A19A] hover:text-[#FFFFFF] rounded-full common-pointer"
                  />
                  <div
                    className="common-pointer"
                    onClick={() =>
                      navigateOTA({
                        theme: data.theme,
                        message: data.message,
                        days: data.days,
                        id: data.id,
                        date: new Date(),
                      })
                    }
                  >
                    <div>
                      <Img
                        src={data.image}
                        className="sm:w-[650px] w-[800px] sm:h-[500px] xl:h-[270px] 2xl:h-[270px] object-cover rounded-t-[25px]"
                        alt={data.alt}
                      />
                    </div>
                    <div className="sm:p-[30px] lg:p-[20px] h-[160px]">
                      <text className="font-bold sm:text-[28px] xl:text-[15px] 2xl:text-[15px] text-[#000000]">
                        {data.title}
                      </text>
                      <div className="h-[25%] sm:h-[70px] lg:h-[40px]">
                        <text className="sm:text-[24px] xl:text-[12px] 2xl:text-[12px] text-[#000000]">
                          {data.description}
                        </text>
                      </div>
                      <div className="tags sm:h-[40px] lg:h-[40px]">
                        {data.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="tag sm:text-[22px] xl:text-[11px] 2xl:text-[11px]"
                          >
                            {tagIndex > 0 && (
                              <span className="dot text-[15px] mx-2">•</span>
                            )}
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between w-full lg:mt-0 sm:mt-[20px]">
                        <div className="flex items-center">
                          <Icon
                            path={mdiBookmark}
                            size="18px"
                            className="text-[#00A19A]"
                          />
                          <text className="sm:text-[22px] xl:text-[11px] 2xl:text-[11px] text-[#00A19A] ml-1">
                            {data.saves} saves
                          </text>
                        </div>

                        <text className="sm:text-[22px] xl:text-[11px] 2xl:text-[11px] italic text-[#00A19A]">
                          {data.author}
                        </text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t w-full bg-black border-dotted mt-[50px]"></div>

          <div className="w-full items-center sm:my-8 2xl:mt-2 grid">
            <text className="font-montserrat sm:text-[28px] xl:text-[15px] 2xl:text-[15px] text-[#012E40]">
              Continue exploring ideas
            </text>
          </div>

          <div className="w-full items-center mt-2 grid">
            <button className="font-montserrat sm:text-[25px] xl:text-[12px] 2xl:text-[12px] text-[#012E40] border border-black bg-transparent hover:bg-[#d4d4d4] rounded-xl py-2 px-4">
              Show more
            </button>
          </div>
        </div>

        {/* mobile view */}
        <div className="p-[50px] w-full font-montserrat">
          {/* <div>
            <text className="text-[#F24949] text-[15px] font-bold">
              Ending in 
              <text className="pl-1 text-[22px]">
                16:35
              </text>
            </text>
          </div> */}

          <div className="w-full flex justify-between mt-2">
            <div>
              <text className="text-[#F24949] sm:text-[40px] lg:text-[30px] font-bold">
                FEATURED CREATORS
              </text>
              <div className="mt-2 sm:text-[32px] lg:text-[23px] text-[#00A19A] font-bold">
                <text>
                  Meet our creators and discover their way or travelling!
                </text>
              </div>
            </div>
          </div>

          <div className="pb-[11px] md:flex md:w-full overflow-x-auto overflow-y-hidden scroll lg:scrollbar scroll-smooth  lg:grid lg:grid-cols-3 md:gap-[30px] xl:gap-[30px] 2xl:gap-[85px] sm:mt-8 2xl:mt-5 font-montserrat">
            {userProfiles.map((user, index) => (
              <div>
                <div key={index} className="lg:w-full sm:w-[650px]">
                  <div className="items-center">
                    <div className="w-fit h-full">
                      <div className="border-[7px] border-white rounded-full h-fit w-fit">
                        <a className="hover:no-underline" href={user.link}>
                          <Img
                            src={user.profileImage}
                            className="sm:h-[300px] lg:h-[130px] object-cover sm:w-[300px] lg:w-[130px] rounded-full"
                          // alt={person${`index + 1`}}
                          />
                        </a>

                      </div>
                    </div>
                    <div className="mt-4">
                      <a className="hover:no-underline" href={user.link}>
                        <text className="sm:text-[35px] lg:text-[24px] text-[#00A19A] font-bold">
                          {user.userName}
                        </text>
                      </a>
                    </div>
                  </div>
                  <div className="w-[100%] sm:my-8 lg:mt-2 sm:text-[24px] lg:text-[14px] sm:h-[120] lg:h-[60px]">
                    <a className="hover:no-underline" href={user.link}>
                      <text>{user.bio.substring(120, 0)}...</text>
                    </a>
                  </div>
                  <a
                    className="flex items-center mt-2 hover:no-underline"
                    href={user.link}
                  >
                    <text className="font-bold text-[#00A19A] sm:text-[24px] lg:text-[14px] mr-2">
                      VIEW STOREFRONT
                    </text>
                    <button className="">
                      <Icon
                        path={mdiMenuRight}
                        size="30px"
                        className="text-[#00A19A]"
                      />
                    </button>
                  </a>
                </div>
              </div>
            ))}

            {/* <div>
              <div className="lg:w-full sm:w-[650px]">
                <div className="items-center">
                  <div className="w-fit h-full">
                    <div className="border-[7px] border-[#F24949] rounded-full h-fit w-fit">
                      <div className="border-[7px] border-white rounded-full h-fit w-fit">
                        <Img
                          src="images/balqis.jpg"
                          className="sm:h-[300px] lg:h-[130px] object-cover sm:w-[300px] lg:w-[130px] rounded-full"
                          alt="person1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <text className="sm:text-[35px] lg:text-[24px] text-[#00A19A] font-bold">
                    محمدمحمدمحمدمحمدمحمد
                    </text>
                  </div>
                </div>
                <div className="w-[100%] sm:my-8 lg:mt-2 sm:text-[24px] lg:text-[14px]">
                  <text>
                    Hello there, I'm Balqis Khai, and if there's one thing I'm truly passionate about, it's traveling.
                    Embarking on new adventures, discovering...
                  </text>
                </div>
                <a className="flex items-center mt-2 hover:no-underline" href={baseURL + "/influencer-user/3"}>
                  <text className="font-bold text-[#00A19A] sm:text-[24px] lg:text-[14px] mr-2">
                    VIEW STOREFRONT
                  </text>
                  <button className="">
                    <Icon path={mdiMenuRight} size="30px" className="text-[#00A19A] " />
                  </button>
                </a>
              </div>
            </div> */}
          </div>
        </div>

        <div className="md:hidden xl:block 2xl:block p-[50px] w-full font-montserrat bg-[#49B9B4]">
          <div className="grid grid-cols-2 h-full w-[100%] pt-5">
            <div className="w-[90%]">
              <div>
                <text className="text-white font-bold ">Community Stories</text>
              </div>
              <div>
                <text className="text-white text-[35px]">
                  Manukan Island : Beauty beyond words
                </text>
              </div>
              <div className="pt-[40px]">
                <text className="text-black text-[25px]">
                  Farah has been dreaming to go to Manukan Island. So when Ahmed
                  suprised her with this birthday trip, she didn't think...
                </text>
              </div>
              <div className="grid grid-cols-3 gap-2 w-[100%] pt-[40px]">
                <div>
                  <Img
                    src="images/manukan.jpg"
                    className="object-cover w-[190px] h-[120px]"
                    alt=""
                  />
                  <Img
                    src="images/manukan2.jpg"
                    className="object-cover w-[190px] h-[120px] mt-[20px]"
                    alt=""
                  />
                </div>
                <div>
                  <Img
                    src="images/manukan3.jpg"
                    className="object-cover w-[190px] h-[120px]"
                    alt=""
                  />
                  <Img
                    src="images/manukan4.jpg"
                    className="object-cover w-[190px] h-[120px] mt-[20px]"
                    alt=""
                  />
                </div>
                <div>
                  <Img
                    src="images/manukan5.jpg"
                    className="object-cover w-[190px] h-[120px]"
                    alt=""
                  />
                  <Img
                    src="images/manukan6.jpeg"
                    className="object-cover w-[190px] h-[120px] mt-[20px]"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <a
                  class="mt-[50px] inline-block w-[97.5%] border border-white rounded py-2 px-4 bg-[#49B9B4] text-center hover:bg-[#00A19A] hover:text-white text-white"
                  href="https://www.viator.com/tours/Kota-Kinabalu/Manukan-Island-Day-Trip-from-Kota-Kinabalu/d4171-11036P30"
                >
                  More Details On Trip
                </a>
              </div>
            </div>
            <div className="">
              <div>
                <Img
                  src="images/manukan7.jpg"
                  className="object-cover w-full h-[380px] mt-[20px] brightness-50"
                  alt=""
                />
              </div>
              <div className="bg-white p-[50px]">
                <text className="text-black font-bold">
                  The best trip at Manukan Island
                </text>
                <div className="mt-[50px]">
                  <text>
                    Imagine yourself on a beautiful island, feeling the warmth
                    of the sun on your skin as you enjoy a well-deserved
                    vacation. The crystal-clear waters invite you to go
                    snorkeling, where you discover colorful fish and coral
                    reefs, feeling at one with nature. You can't stop smiling as
                    you soak up the happiness that surrounds you. The island
                    atmosphere is contagious, and you find yourself having the
                    time of your life, creating unforgettable memories.
                  </text>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile view */}
        <div className="md:block xl:hidden 2xl:hidden p-[50px] w-full font-montserrat bg-[#49B9B4]">
          <div className="h-full w-full pt-5">
            <div className="w-full">
              <div>
                <text className="text-white font-bold text-[28px]">
                  Community Stories
                </text>
              </div>
              <div>
                <text className="text-white text-[38px]">
                  Manukan Island : Beauty beyond words
                </text>
              </div>
              <div className="flex scrollbar-hide overflow-x-scroll scroll gap-[30px] w-full pt-[40px]">
                <Img
                  src="images/manukan.jpg"
                  className="object-cover w-[300px] h-[200px]"
                  alt=""
                />
                <Img
                  src="images/manukan2.jpg"
                  className="object-cover w-[300px] h-[200px]"
                  alt=""
                />
                <Img
                  src="images/manukan3.jpg"
                  className="object-cover w-[300px] h-[200px]"
                  alt=""
                />
                <Img
                  src="images/manukan4.jpg"
                  className="object-cover w-[300px] h-[200px]"
                  alt=""
                />
                <Img
                  src="images/manukan5.jpg"
                  className="object-cover w-[300px] h-[200px]"
                  alt=""
                />
                <Img
                  src="images/manukan6.jpeg"
                  className="object-cover w-[300px] h-[200px]"
                  alt=""
                />
              </div>
              <div>
                <a
                  class="mt-[50px] inline-block w-[97.5%] border border-white rounded py-2 px-4 bg-[#49B9B4] text-center hover:bg-[#00A19A] hover:text-white text-white text-[28px]"
                  href="https://www.viator.com/tours/Kota-Kinabalu/Manukan-Island-Day-Trip-from-Kota-Kinabalu/d4171-11036P30"
                >
                  More Details On Trip
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden xl:block 2xl:block p-[50px] w-full font-montserrat">
          <div className="grid grid-cols-2 h-full w-[100%] pt-5">
            <div>
              <div>
                <text className="text-black text-[35px]">Domestic Outings</text>
              </div>
              <div>
                <text className="text-black text-[23px]">
                  Suggested for you:
                </text>
              </div>
              <div className="mt-[10px]">
                <text className="text-black text-[23px]">
                  Fancy homemade fresh and halal TangZhong bread? Join Rosli's
                  bakery class 24/5 and 28/5 and master the secret in creating
                  these pillow soft bread roll...
                </text>
              </div>
              <a
                className="mt-[30px] flex items-center hover:no-underline"
                href="https://www.viator.com/tours/Kuala-Lumpur/Spa-Body-Relaxing-Massage-with-Mani-and-Pedi/d335-38355P627"
              >
                <a className="">
                  <Icon
                    path={mdiMenuRight}
                    size="30px"
                    className="text-[#00A19A] "
                  />
                </a>
                <text className="text-[20px] text-black ml-2">
                  I'm interested. Find out more
                </text>
              </a>
              <a className="mt-3 flex items-center no-underline" href="#food">
                <button className="">
                  <Icon
                    path={mdiMenuRight}
                    size="30px"
                    className="text-[#00A19A] "
                  />
                </button>
                <text className="text-[15px] text-black ml-2">
                  Show me other ideas around me
                </text>
              </a>
            </div>
            <div>
              <Img
                src="images/tangzhong.jpg"
                className="object-cover w-full h-[380px] object-top brightness-50"
                alt="rectangle120"
              />
            </div>
          </div>

          {/* <div className="border-t w-full bg-black border-dotted mt-[80px]">

          </div> */}
        </div>

        {/* mobile view */}

        <div className="md:block xl:hidden 2xl:hidden p-[50px] w-full font-montserrat">
          <div className="h-full w-[100%] pt-5">
            <div>
              <div>
                <text className="text-black text-[28px]">
                  Suggested Domestic Outings
                </text>
              </div>
              <div className="my-8">
                <text className="text-black text-[35px]">
                  Fancy homemade fresh and halal TangZhong bread? Join Rosli's
                  bakery class 24/5 and 28/5 and master the secret in creating
                  these pillow soft bread roll...
                </text>
              </div>
              <div>
                <a
                  class="mt-[20px] inline-block w-[97.5%] border border-[#49B9B4] rounded py-2 px-4 bg-white text-center hover:bg-[#00A19A] hover:text-white text-[#49B9B4] text-[28px]"
                  href="https://www.viator.com/tours/Kuala-Lumpur/Spa-Body-Relaxing-Massage-with-Mani-and-Pedi/d335-38355P627"
                >
                  I'm interested. Find out more
                </a>
              </div>
              <div>
                <a
                  class="mt-[20px] inline-block w-[97.5%] border border-[#49B9B4] rounded py-2 px-4 bg-white text-center hover:bg-[#00A19A] hover:text-white text-[#49B9B4] text-[28px]"
                  href="#food"
                >
                  Show me other ideas around me
                </a>
              </div>
            </div>
            <div className="mt-[50px]">
              <Img
                src="images/tangzhong.jpg"
                className="object-cover w-full h-[380px] object-top brightness-50"
                alt="rectangle120"
              />
            </div>
          </div>

          {/* <div className="border-t w-full bg-black border-dotted mt-[80px]">

          </div> */}
        </div>

        {/* Review section */}
        {/* <div className="p-[50px] w-full font-montserrat">
          <div>
            <text className="text-black text-[35px]">
              Customer Reviews :
            </text>
          </div>
          <div className="grid grid-cols-2 h-full w-[100%] pt-5">
            <div>
              <div className="border border-[#00A19A] p-[20px] w-[90%]">
                <div className="w-[100%]">
                  <div className="w-[80%]">
                    <text className="text-black text-[20px]">
                      "Great tool. VIP made it simple and managed to tie a full 5 day itinerary. Everything is great.
                      Back for a day and I'm planning now our next!"
                    </text>
                  </div>
                  <div className="flex justify-between w-[100%]">
                    <div></div>
                    <div className="justify-items-end grid">
                      <RatingBar
                        className="flex justify-between w-[80px]"
                        value={5}
                        starCount={5}
                        size={20}
                      />
                      <text className="text-[12px]">
                        Ousman T, Medan.
                      </text>
                    </div>
                  </div> 
                </div>
                
              </div>
              <div className="pt-[50px]">
                <div className="w-[90%]">
                  <text className="text-black font-black text-[22px]">
                    Private Tour Kuala Lumpur with Petronas Twin Towers Observation Deck & Batu Cave
                  </text>
                 </div>
                 <div className="pt-[20px] w-[90%]">
                    <text className="text-[18px] text-black">
                      Highly suggested excursion. Our tour guide, was incredibly knowledgable, understanding, and helpful. At our own pace, 
                      we took in many of Kuala Lumpur's attractions. Despite the heat, we relaxed and had a good time.
                    </text>
                 </div>
                 <div className="pt-[20px]">
                  <button className="text-[#00A19A] border border-[#00A19A] text-[15px] p-3 rounded-lg hover:bg-[#00A19A] hover:text-white">
                    Learn More
                  </button>
                 </div>
              </div>

              <div className="pt-[50px]">
                <div className="w-[90%]">
                  <text className="text-black font-black text-[22px]">
                    3-Hour Heritage on a Plate Dinner Hop in George Town Penang
                  </text>
                 </div>
                 <div className="pt-[20px] w-[90%]">
                    <text className="text-[18px] text-black">
                      Amazing fusion of food, culture, and history! The tour of Penang's many neighbourhoods was incredibly 
                      eye-opening, with commentary on everything from architecture to the usage of charcoal in cooking. After 
                      learning so much, I felt extremely satisfied!
                    </text>
                 </div>
                 <div className="pt-[20px]">
                  <button className="text-[#00A19A] border border-[#00A19A] text-[15px] p-3 rounded-lg hover:bg-[#00A19A] hover:text-white">
                    Learn More
                  </button>
                 </div>
              </div>
            </div>
            <div>
              <div>
                <div className="flex">
                  <text className="text-black font-black text-[22px]">
                    Reviews
                  </text>
                  <Icon path={mdiStar} size={1} className="text-[#00A19A] mt-1 ml-1"/>
                  <text className="text-black font-black text-[22px] ml-1">
                    4.3
                  </text>
                </div>
                <div>
                  <text className="text-black text-[16px]">
                    123,456 total
                  </text>
                </div>
                <div className="mt-[20px]">
                  <div className="flex">
                    <div>
                      <text className="text-black text-[16px]">
                        5-star 
                      </text>
                    </div>
                    <div class="xl:w-[500px] 2xl:w-[615px] align-center items-center align-middle content-center flex ml-2">
                      <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1 h-2">
                        <div class="bg-[#00A19A] rounded leading-none py-1 text-center dark:bg-blue-500 w-[73%] h-2"></div>
                     </div>
                    </div>
                    <div className="ml-1">
                      <text className="text-black text-[16px]">
                        73%
                      </text>
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <text className="text-black text-[16px]">
                        4-star 
                      </text>
                    </div>
                    <div class="xl:w-[500px] 2xl:w-[615px] align-center items-center align-middle content-center flex ml-[6px]">
                      <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1 h-2">
                        <div class="bg-[#00A19A] rounded leading-none py-1 text-center dark:bg-blue-500 w-[20%] h-2"></div>
                     </div>
                    </div>
                    <div className="ml-1">
                      <text className="text-black text-[16px]">
                        20%
                      </text>
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <text className="text-black text-[16px]">
                        3-star 
                      </text>
                    </div>
                    <div class="xl:w-[500px] 2xl:w-[615px] align-center items-center align-middle content-center flex ml-2">
                      <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1 h-2">
                        <div class="bg-[#00A19A] rounded leading-none py-1 text-center dark:bg-blue-500 w-[10%] h-2"></div>
                     </div>
                    </div>
                    <div className="ml-1">
                      <text className="text-black text-[16px]">
                        10%
                      </text>
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <text className="text-black text-[16px]">
                        2-star 
                      </text>
                    </div>
                    <div class="xl:w-[500px] 2xl:w-[615px] align-center items-center align-middle content-center flex ml-2">
                      <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1 h-2">
                        <div class="bg-[#00A19A] rounded leading-none py-1 text-center dark:bg-blue-500 w-[5%] h-2"></div>
                     </div>
                    </div>
                    <div className="ml-1">
                      <text className="text-black text-[16px]">
                        5%
                      </text>
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <text className="text-black text-[16px]">
                        1-star 
                      </text>
                    </div>
                    <div class="xl:w-[500px] 2xl:w-[615px] align-center items-center align-middle content-center flex ml-[10px]">
                      <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1 h-2">
                        <div class="bg-[#00A19A] rounded leading-none py-1 text-center dark:bg-blue-500 w-[11%] h-2"></div>
                     </div>
                    </div>
                    <div className="ml-1">
                      <text className="text-black text-[16px]">
                        11%
                      </text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-[35px]">
                <div className="w-[100%] xl:mt-[30px] 2xl:mt-[0px]">
                  <text className="text-black font-black text-[22px]">
                    Guided Snorkeling Day Trip, Kota Kinabalu, Sabah, Malaysia
                  </text>
                 </div>
                 <div className="pt-[20px] w-[100%]">
                    <text className="text-[18px] text-black">
                      Really well-planned vacation for a small group. Sharks were spotted in three different snorkelling areas. 
                      Highly recommended!
                    </text>
                 </div>
                 <div className="pt-[20px]">
                  <button className="text-[#00A19A] border border-[#00A19A] text-[15px] p-3 rounded-lg hover:bg-[#00A19A] hover:text-white">
                    Learn More
                  </button>
                 </div>
              </div>
              <div className="xl:pt-[10px] 2xl:pt-[135px]">
                <div className="w-[100%] xl:mt-[65px] 2xl:mt-[0px]">
                  <text className="text-black font-black text-[22px]">
                    Scuba Try Dive - PADI Discover Scuba Diving DSD in Kota Kinabalu, Malaysia
                  </text>
                 </div>
                 <div className="pt-[20px] w-[100%]">
                    <text className="text-[18px] text-black">
                      The crew never showed any signs of being impatient or dissatisfied, and the 
                      attitude was really lighthearted and laid back even though this was only my second 
                      dive in my life. Also, I spotted 5 enormous sea turtles!
                    </text>
                 </div>
                 <div className="pt-[20px]">
                  <button className="text-[#00A19A] border border-[#00A19A] text-[15px] p-3 rounded-lg hover:bg-[#00A19A] hover:text-white">
                    Learn More
                  </button>
                 </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* <div className="bg-[#F5F5F5] p-[50px] w-full font-montserrat sm:hidden xl:block 2xl:block">
        <div>
          <div>
            <text className="text-[14px] font-bold text-black">
              Popular Countries to visit
            </text>
          </div>
          <div className="mt-[10px] flex items-center">
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] common-pointer">
              <Img
                src="images/france-flag-icon.svg"
                className="h-[15px] object-cover w-[20px]"
                alt="france"
              />
              <text className="text-[15px] font-bold text-black ml-2">
                France
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <Img
                src="images/greece-flag-icon.svg"
                className="h-[15px] object-cover w-[20px]"
                alt="greece"
              />
              <text className="text-[15px] font-bold text-black ml-2">
                Greece
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <Img
                src="images/italy-flag-icon.svg"
                className="h-[15px] object-cover w-[20px]"
                alt="italy"
              />
              <text className="text-[15px] font-bold text-black ml-2">
                Italy
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <Img
                src="images/maldives-flag-icon.svg"
                className="h-[15px] object-cover w-[20px]"
                alt="maldives"
              />
              <text className="text-[15px] font-bold text-black ml-2">
                Maldives
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <Img
                src="images/malta-flag-icon.svg"
                className="h-[15px] object-cover w-[20px]"
                alt="malta"
              />
              <text className="text-[15px] font-bold text-black ml-2">
                Malta
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <Img
                src="images/oman-flag-icon.svg"
                className="h-[15px] object-cover w-[20px]"
                alt="oman"
              />
              <text className="text-[15px] font-bold text-black ml-2">
                Oman
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <Img
                src="images/portugal-flag-icon.svg"
                className="h-[15px] object-cover w-[20px]"
                alt="portugal"
              />
              <text className="text-[15px] font-bold text-black ml-2">
                Portugal
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <Img
                src="images/qatar-flag-icon.svg"
                className="h-[15px] object-cover w-[20px]"
                alt="qatar"
              />
              <text className="text-[15px] font-bold text-black ml-2">
                Qatar
              </text>
            </div>
          </div>
          <div className="mt-[5px] flex items-center">
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4]">
              <Img
                src="images/switzerland-flag-icon.svg"
                className="h-[15px] object-cover w-[20px]"
                alt="switzerland"
              />
              <text className="text-[15px] font-bold text-black ml-2">
                Switzerland
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <Img
                src="images/thailand-flag-icon.svg"
                className="h-[15px] object-cover w-[20px]"
                alt="thailand"
              />
              <text className="text-[15px] font-bold text-black ml-2">
                Thailand
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <Img
                src="images/united-kingdom-flag-icon.svg"
                className="h-[15px] object-cover w-[20px]"
                alt="uk"
              />
              <text className="text-[15px] font-bold text-black ml-2">
                United Kingdom
              </text>
            </div>
          </div>
        </div>

        <div className="mt-[20px]">
          <div>
            <text className="text-[14px] font-bold text-black">
              Popular Cities to explore
            </text>
          </div>
          <div className="mt-[10px] flex items-center">
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4]">
              <text className="text-[15px] font-bold text-black ml-2">
                London
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[15px] font-bold text-black ml-2">
                Paris
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[15px] font-bold text-black ml-2">
                Barcelona
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[15px] font-bold text-black ml-2">
                Hong Kong
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[15px] font-bold text-black ml-2">
                Dubai
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[15px] font-bold text-black ml-2">
                Amsterdam
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[15px] font-bold text-black ml-2">
                Singapore
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[15px] font-bold text-black ml-2">
                New York
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[15px] font-bold text-black ml-2">
                Istanbul
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[15px] font-bold text-black ml-2">
                Bueno Aires
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[15px] font-bold text-black ml-2">
                Rome
              </text>
            </div>
          </div>
          <div className="mt-[5px] flex items-center">
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4]">
              <text className="text-[15px] font-bold text-black ml-2">
                Tokyo
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[15px] font-bold text-black ml-2">
                Bangkok
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[15px] font-bold text-black ml-2">
                Sydney
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[15px] font-bold text-black ml-2">
                Rio De Janeiro
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[15px] font-bold text-black ml-2">
                Seoul
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[15px] font-bold text-black ml-2">
                Budapest
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[15px] font-bold text-black ml-2">
                Madrid
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[15px] font-bold text-black ml-2">
                San Francisco
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[15px] font-bold text-black ml-2 text-[#969696]">
                View all locations
              </text>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[20px]">
            <text className="text-[14px]">Discover all holiday ideas :</text>
          </div>
          <div className="grid grid-cols-4 gap-6 mt-[20px] w-full">
            <div>
              <div>
                <text className="text-[14px] font-bold text-black">
                  Cultural & Heritage Sites
                </text>
              </div>
              <div className="">
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Paris's Historic Treasures
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Tokyo's Ancient Traditions
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    London's Legacy
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    New York's Cultural Tapestry
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Istanbul: Bridging East and West
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Barcelona's Heritage Gems
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Singapore's Chronicles
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Rome's Cultural Canvas
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Dubai: Traditions in a Modern Metropolis
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    LA's Kaleidoscope
                  </text>
                </div>
              </div>
            </div>
            <div className="mr-[20px]">
              <div>
                <text className="text-[14px] font-bold text-black">
                  Romantic Getaways
                </text>
              </div>
              <div className="">
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Venice's Love Canals
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Kyoto's Tranquil Romance
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Vienna's Melodic Love
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Santorini's Sunset Romance
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Buenos Aires' Tango of Love
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Florence's Amorous Escapes
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Prague's Fairytale Romance
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Seoul's Urban Love Stories
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Venice Beach Vibes
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Barcelona Bliss
                  </text>
                </div>
              </div>
            </div>
            <div>
              <div>
                <text className="text-[14px] font-bold text-black">
                  Adventure & Sports
                </text>
              </div>
              <div className="">
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Scuba Diving in the Great Barrier Reef
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Hiking the Inca Trail to Machu Picchu
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Safari in Serengeti National Park
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Bungee Jumping in Queenstown, NZ
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Skydiving over Dubai, UAE
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Rock Climbing in El Capitan, USA
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Whitewater Rafting in the Colorado River
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Paragliding in Interlaken
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Ziplining in Costa Rica's Rainforests
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Snowboarding in Niseko, Japan
                  </text>
                </div>
              </div>
            </div>
            <div>
              <div>
                <text className="text-[14px] font-bold text-black">
                  Culinary Journeys
                </text>
              </div>
              <div className="">
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Rome Coffee Chronicles
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Bangkok Street Food Odyssey
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Tokyo’s Soul of Sushi: Tokyo's Hidden Tastes and Traditions
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Marrakech's Aromatic Gastronomy
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Seville’s Tapas Tales
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Parisian Pastries & Beyond
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Hong Kong's Culinary Kaleidoscope
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Rio’s Samba Flavors
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Wine & Dine in Florence
                  </text>
                </div>
                <div>
                  <text className="text-[14px] text-black hover:underline common-pointer">
                    Melbourne's Food Canvas
                  </text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* mobile view */}
      {/* <div className="bg-[#F5F5F5] p-[50px] w-full font-montserrat sm:block xl:hidden 2xl:hidden">
        <div>
          <div>
            <text className="text-[28px] font-bold text-black">
              Popular Countries to visit
            </text>
          </div>
          <div className="mt-8 flex items-center">
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4]">
              <Img
                src="images/france-flag-icon.svg"
                className="h-[25px] object-cover w-[30px]"
                alt="france"
              />
              <text className="text-[23px] font-bold text-black ml-2">
                France
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <Img
                src="images/greece-flag-icon.svg"
                className="h-[25px] object-cover w-[30px]"
                alt="greece"
              />
              <text className="text-[23px] font-bold text-black ml-2">
                Greece
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <Img
                src="images/italy-flag-icon.svg"
                className="h-[25px] object-cover w-[30px]"
                alt="italy"
              />
              <text className="text-[23px] font-bold text-black ml-2">
                Italy
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <Img
                src="images/maldives-flag-icon.svg"
                className="h-[25px] object-cover w-[30px]"
                alt="maldives"
              />
              <text className="text-[23px] font-bold text-black ml-2">
                Maldives
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <Img
                src="images/malta-flag-icon.svg"
                className="h-[25px] object-cover w-[30px]"
                alt="malta"
              />
              <text className="text-[23px] font-bold text-black ml-2">
                Malta
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <Img
                src="images/oman-flag-icon.svg"
                className="h-[25px] object-cover w-[30px]"
                alt="oman"
              />
              <text className="text-[23px] font-bold text-black ml-2">
                Oman
              </text>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4]">
              <Img
                src="images/portugal-flag-icon.svg"
                className="h-[25px] object-cover w-[30px]"
                alt="portugal"
              />
              <text className="text-[23px] font-bold text-black ml-2">
                Portugal
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <Img
                src="images/qatar-flag-icon.svg"
                className="h-[25px] object-cover w-[30px]"
                alt="qatar"
              />
              <text className="text-[23px] font-bold text-black ml-2">
                Qatar
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <Img
                src="images/switzerland-flag-icon.svg"
                className="h-[25px] object-cover w-[30px]"
                alt="switzerland"
              />
              <text className="text-[23px] font-bold text-black ml-2">
                Switzerland
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <Img
                src="images/thailand-flag-icon.svg"
                className="h-[25px] object-cover w-[30px]"
                alt="thailand"
              />
              <text className="text-[23px] font-bold text-black ml-2">
                Thailand
              </text>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4]">
              <Img
                src="images/united-kingdom-flag-icon.svg"
                className="h-[25px] object-cover w-[30px]"
                alt="uk"
              />
              <text className="text-[23px] font-bold text-black ml-2 w-full">
                United Kingdom
              </text>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div>
            <text className="text-[28px] font-bold text-black">
              Popular Cities to explore
            </text>
          </div>
          <div className="mt-8 flex items-center">
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4]">
              <text className="text-[23px] font-bold text-black ml-2">
                London
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[23px] font-bold text-black ml-2">
                Paris
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[23px] font-bold text-black ml-2">
                Barcelona
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[23px] font-bold text-black ml-2">
                Hong Kong
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[23px] font-bold text-black ml-2">
                Dubai
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[23px] font-bold text-black ml-2">
                Amsterdam
              </text>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4]">
              <text className="text-[23px] font-bold text-black ml-2">
                Singapore
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[23px] font-bold text-black ml-2">
                New York
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[23px] font-bold text-black ml-2">
                Istanbul
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[23px] font-bold text-black ml-2">
                Bueno Aires
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[23px] font-bold text-black ml-2">
                Rome
              </text>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4]">
              <text className="text-[23px] font-bold text-black ml-2">
                Tokyo
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[23px] font-bold text-black ml-2">
                Bangkok
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[23px] font-bold text-black ml-2">
                Sydney
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[23px] font-bold text-black ml-2">
                Rio De Janeiro
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[23px] font-bold text-black ml-2">
                Seoul
              </text>
            </div>
          </div>
          <div className="mt-[5px] flex items-center">
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4]">
              <text className="text-[23px] font-bold text-black ml-2">
                Budapest
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[23px] font-bold text-black ml-2">
                Madrid
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[23px] font-bold text-black ml-2">
                San Francisco
              </text>
            </div>
            <div className="flex h-fit w-fit p-2 bg-white rounded-3xl items-center hover:bg-[#d4d4d4] ml-3">
              <text className="text-[23px] font-bold text-black ml-2 text-[#969696]">
                View all locations
              </text>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-9">
            <text className="text-[28px]">Discover all holiday ideas :</text>
          </div>
          <div className="mt-9 w-full">
            <div>
              <div>
                <text className="text-[28px] font-bold text-black">
                  Cultural & Heritage Sites
                </text>
              </div>
              <div className="">
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Paris's Historic Treasures
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Tokyo's Ancient Traditions
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    London's Legacy
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    New York's Cultural Tapestry
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Istanbul: Bridging East and West
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Barcelona's Heritage Gems
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Singapore's Chronicles
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Rome's Cultural Canvas
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Dubai: Traditions in a Modern Metropolis
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    LA's Kaleidoscope
                  </text>
                </div>
              </div>
            </div>
            <div className="mt-9">
              <div>
                <text className="text-[28px] font-bold text-black">
                  Romantic Getaways
                </text>
              </div>
              <div className="">
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Venice's Love Canals
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Kyoto's Tranquil Romance
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Vienna's Melodic Love
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Santorini's Sunset Romance
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Buenos Aires' Tango of Love
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Florence's Amorous Escapes
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Prague's Fairytale Romance
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Seoul's Urban Love Stories
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Venice Beach Vibes
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Barcelona Bliss
                  </text>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div>
                <text className="text-[28px] font-bold text-black">
                  Adventure & Sports
                </text>
              </div>
              <div className="">
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Scuba Diving in the Great Barrier Reef
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Hiking the Inca Trail to Machu Picchu
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Safari in Serengeti National Park
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Bungee Jumping in Queenstown, NZ
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Skydiving over Dubai, UAE
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Rock Climbing in El Capitan, USA
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Whitewater Rafting in the Colorado River
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Paragliding in Interlaken
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Ziplining in Costa Rica's Rainforests
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Snowboarding in Niseko, Japan
                  </text>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div>
                <text className="text-[28px] font-bold text-black">
                  Culinary Journeys
                </text>
              </div>
              <div className="">
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Rome Coffee Chronicles
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Bangkok Street Food Odyssey
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Tokyo’s Soul of Sushi: Tokyo's Hidden Tastes and Traditions
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Marrakech's Aromatic Gastronomy
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Seville’s Tapas Tales
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Parisian Pastries & Beyond
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Hong Kong's Culinary Kaleidoscope
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Rio’s Samba Flavors
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Wine & Dine in Florence
                  </text>
                </div>
                <div>
                  <text className="text-[25px] text-black hover:underline common-pointer">
                    Melbourne's Food Canvas
                  </text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Footerepic />
    </>
  );
};
export default OTA2;

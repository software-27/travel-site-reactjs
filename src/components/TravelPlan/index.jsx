
import Header from "components/Header/Header";
import DatePicker from "react-datepicker";
import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePickerr from 'react-modern-calendar-datepicker';
import { AiOutlineClose } from "react-icons/ai";
import React, { useState, useEffect, useRef, forwardRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { RatingBar } from "components/RatingBar/index";
import { Img, Text, Button, Input, Column } from "components";
import Footerepic from "components/Footer/Footerepic/index";
import HeaderOTA from "components/Header/HeaderOTA/index";
import { Row } from "components/Row/index";
import { BiWorld, BiSearch } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { TbBeach } from "react-icons/tb";
import {
  mdiBook,
  mdiBedKingOutline,
  mdiAirplane,
  mdiTrain,
  mdiBus,
  mdiCar,
} from "@mdi/js";
import Icon from "@mdi/react";
import { FiCalendar, FiThumbsUp, FiMapPin } from "react-icons/fi";
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

const TravelPlan = ({ userId }) => {
  const [startDate, setStartDate] = useState(new Date());
  var th = 1;
  const [isFocused, setIsFocused] = useState(false);

  const [isApiLoaded, setApiLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedButton, setSelectedButton] = useState("Planner"); // Initialize the selected button
 
  const handleButtonClick = (buttonText) => {
    setSelectedButton(buttonText); // Update the selected button when a button is clicked
    
    if(buttonText === "Bus"){
      navigate("/bus-landing-page");
    }
  }

  const isButtonSelected = (buttonText) => {
    return selectedButton === buttonText;
  };
  const buttonStyles = {
    color: isButtonSelected("Planner") ? "#00a19a" : "#9F9C9C",
  };

  const underlineStyles1 = {
    textDecoration: "none",
    borderBottom: isButtonSelected("Planner")
      ? "3px solid #00a19a"
      : "none",
    paddingBottom: "",
  };
  const underlineStyles2 = {
    textDecoration: "none",
    borderBottom: isButtonSelected("Hotel") ? "2px solid #00a19a" : "none",
    paddingBottom: "2px",
  };
  const underlineStyles3 = {
    textDecoration: "none",
    borderBottom: isButtonSelected("Flight") ? "2px solid #00a19a" : "none",
    paddingBottom: "2px",
  };
  const underlineStyles4 = {
    textDecoration: "none",
    borderBottom: isButtonSelected("Train") ? "2px solid #00a19a" : "none",
    paddingBottom: "2px",
  };
  const underlineStyles5 = {
    textDecoration: "none",
    borderBottom: isButtonSelected("Bus") ? "2px solid #00a19a" : "none",
    paddingBottom: "2px",
  };
  const underlineStyles6 = {
    textDecoration: "none",
    borderBottom: isButtonSelected("Car") ? "2px solid #00a19a" : "none",
    paddingBottom: "2px",
  };
  const baseURL = window.location.origin;
  console.log("baseUrl: ", baseURL);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

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

  // const userId = localStorage.getItem("userId");
  // let { id } = useParams();
  const id = userId;
  console.log("userId: ", id);

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
  var upateaddresss = "";
  const handleChange = async (address) => {
    upateaddresss = address;
    await setAddress(address);
    await setselectedooc("");

    // setIsLoading(address.length <= 0);
    // alert(address);
  };
  // const handleChange = (newValue) => {
  //   setAddress(newValue);
  // };

  const handleSelect = async (address) => {
    //alert(address)
    const rows = address.split(",");

    if (rows.length > 0) {
      setAddress(rows[0]);
      setm(rows[0]);
      upateaddresss = rows[0];
    } else {
      setAddress(address);
      setm(address);
      upateaddresss = address;
    }

    await setselectedooc(address);
    geocodeByAddress(address)
      .then((results) => {
        let city;
        let country;
        console.log("Results:", results);
        for (let i = 0; i < results[0].address_components.length; i++) {
          if (results[0].address_components[i].types.includes("locality")) {
            city = results[0].address_components[i].long_name;
          }
          if (results[0].address_components[i].types.includes("country")) {
            country = results[0].address_components[i].long_name;
          }
        }

        if (typeof city === "undefined") {
          //  alert(results[0])
          // setAddress(country);
          // setm(country)
          // upateaddresss = country
        } else {
          // setAddress(city);
          // setm(city)
          // upateaddresss = city
        }

        return getLatLng(city + ", " + country);
      })
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Errorrrrr", error));
    setNav(!nav);
    setDisabled(!isDisabled);
  };
  const [isClicked, setIsClicked] = useState(false);
  const wrapperRef = useRef(null);
  const [m, setm] = useState("");
  const [day, setday] = useState("");

  const [nav, setNav] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [isPopup2Open, setIsPopup2Open] = useState(false);

  const openPopup1 = () => {
    setIsPopup1Open(true);
  };

  const openPopup2 = () => {
    setIsPopup2Open(true);
  };

  const closePopup1 = () => {
    setIsPopup1Open(false);
  };

  const closePopup2 = () => {
    setIsPopup2Open(false);
  };
  const { setIsLoggedIn } = useAuth();
  // setIsLoggedIn(true);

  const dataToPass = { message: m, days: day, theme: th };

  const receivedData = {
    theme: th,
    message: address,
    days: day == "" ? 1 : day,
    date: startDate,
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

      navigate("/ota1", { state: receivedData });
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

  const StyledInput = () => {
    return (
      <input
        className="font-normal font-montserrat not-italic p-[0] sm:text-[25px] md:text-[25px] lg:text-[9px] text-black placeholder:required text-slate_700 w-[100%]"
      />
    );
  };
  const CalendarContainer = ({ className, children }) => (
    <div className={className} style={{ border: "1px solid #ccc", padding: "10px" }}>
      {children}
    </div>
  );

  const MyContainer = ({ className, children, customButton }) => {
    return (
      <div style={{ padding: "16px", background: "#216ba5", color: "#fff", width: "400px" }}>
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
        padding: '10px',
        fontSize: '30px',
        backgroundColor: '#fff',
        borderRadius: '5px',

        cursor: 'pointer', // Add a pointer cursor to indicate it's clickable
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
      <div className="w-full justify-center flex items-center mb-10">
        <div
          className="lg:visible md:visible text-center place-items-center bg-white_A700/75 lg:top-[55%] bottom-[20%] p-0.5 rounded-[5px] w-full md:h-[100%] xl:h-[30%] "
          style={{ gridAutoRows: "minmax(0, auto)" }}
        >
          <Text
            className=" md:text-[40px] lg:text-[22px] lg:font-medium md:font-medium font-montserrat not-italic text-[#262626] text-center tracking-[0.50px] w-[75%]"
          >
            Enter your destination and start planning for your awesome adventure !
          </Text>

          <div className="md:mt-12 lg:mt-10 place-items-center flex flex-col justify-center items-center">
            <div className="border-b-2 flex flex-row bg-[#FFFFFF] lg:gap-8 xl:gap-[3.2rem] mt-2 rounded-t-lg md:justify-center lg:justify-start items-center text-center lg:py-2 md:py-4 lg:w-[87%] 2xl:w-[75%] md:gap-[4.5rem] md:w-[100%]">
              <Column
                className={`flex md:ml-0 lg:ml-10 ${isButtonSelected("Planner") ? "" : ""
                  }`}
                onClick={() => handleButtonClick("Planner")}
              // style={underlineStyles1}
              >
                <div className="md:grid md:grid-col-2 lg:flex md:gap-0.5 lg:gap-2 md:place-items-center">
                  <Icon
                    path={mdiBook}
                    style={{
                      color: isButtonSelected("Planner") ? "#00a19a" : "",
                    }}
                    className="mt-1 flex flex-row md:w-16 lg:w-5"
                  />
                  <Text
                    className={`font-semibold font-montserrat md:text-[26px] lg:text-[15px] lg:mt-1 ${isButtonSelected("Planner") ? "text-[#00a19a]" : ""
                      }`}
                  >
                    Planner
                  </Text>
                </div>
              </Column>
              <a
                href={`http://kayak.com.my/in?a=kan_262812_573418&encoder=27_1&enc_cid=${id}&lc=en&url=%2Fhotels`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex mt-1 ${isButtonSelected("Hotel") ? "" : ""}`}
                onClick={() => handleButtonClick("Hotel")}
                style={underlineStyles2}
              >

                <div className="md:grid md:grid-col-2 lg:flex md:gap-0.5 lg:gap-2 md:place-items-center">
                  <Icon
                    path={mdiBedKingOutline}
                    style={{
                      color: isButtonSelected("Hotel") ? "#00a19a" : "#9F9C9C",
                    }}
                    className="mt-1 flex flex-row md:w-16 lg:w-6"
                  />
                  <Text
                    className={`font-semibold md:text-[26px] lg:text-[15px] lg:mt-1 md:mt-0 ${isButtonSelected("Hotel") ? "text-[#00a19a]" : "text-[#9F9C9C]"
                      }`}
                  >
                    Hotel
                  </Text>
                </div>
              </a>
              <a
                href={`https://kayak.com.my/in?a=kan_262812_573418&encoder=27_1&enc_cid=${id}&lc=en&url=%2Fflights`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex mt-2 ${isButtonSelected("Flight") ? "underline" : ""}`}
                onClick={() => handleButtonClick("Flight")}
                style={underlineStyles3}
              >
                <div className="md:grid md:grid-col-2 lg:flex md:gap-0.5 lg:gap-2 md:place-items-center">
                  <Icon
                    path={mdiAirplane}
                    style={{
                      color: isButtonSelected("Flight") ? "#00a19a" : "#9F9C9C",
                    }}
                    className="mt-0.5 flex flex-row md:w-16 lg:w-6"
                  />
                  <Text
                    className={`font-semibold md:text-[26px] lg:text-[15px] lg:mt-1 ${isButtonSelected("Flight") ? "text-[#00a19a]" : "text-[#9F9C9C]"
                      }`}
                  >
                    Flight
                  </Text>
                </div>
              </a>
              <a
                href="https://online.ktmb.com.my/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex mt-2 ${isButtonSelected("Train") ? "" : ""}`}
                onClick={() => handleButtonClick("Train")}
                style={underlineStyles4}
              >
                <div className="md:grid md:grid-col-2 lg:flex md:gap-0.5 lg:gap-2 md:place-items-center">
                  <Icon
                    path={mdiTrain}
                    style={{
                      color: isButtonSelected("Train") ? "#00a19a" : "#9F9C9C",
                    }}
                    className="mt-0.5 flex flex-row md:w-16 lg:w-6"
                  />
                  <Text
                    className={`font-semibold md:text-[26px] lg:text-[15px] lg:mt-1 ${isButtonSelected("Train") ? "text-[#00a19a]" : "text-[#9F9C9C]"
                      }`}
                  >
                    Train
                  </Text>
                </div>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                className={`flex mt-2 cursor-pointer ${isButtonSelected("Bus") ? "" : ""}`}
                // onClick={() => handleButtonClick("Bus")}
                style={underlineStyles5}
              >
                <div className="md:grid md:grid-col-2 lg:flex md:gap-0.5 lg:gap-2 md:place-items-center">
                  <Icon
                    path={mdiBus}
                    style={{
                      color: isButtonSelected("Bus") ? "#00a19a" : "#9F9C9C",
                    }}
                    className="mt-0.5 flex flex-row md:w-16 lg:w-6"
                  />
                  <Text
                    className={`font-semibold md:text-[26px] lg:text-[15px] lg:mt-1 ${isButtonSelected("Bus") ? "text-[#00a19a]" : "text-[#9F9C9C]"
                      }`}
                  >
                    Bus
                  </Text>
                </div>
              </a>
              <a
                href={`https://kayak.com.my/in?a=kan_262812_573418&encoder=27_1&enc_cid=${id}&lc=en&url=%2Fcars`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex mt-2 ${isButtonSelected("Car") ? "" : ""}`}
                onClick={() => handleButtonClick("Car")}
                style={underlineStyles6}
              >
                <div className="md:grid md:grid-col-2 lg:flex md:gap-0.5 lg:gap-2 md:place-items-center">
                  <Icon
                    path={mdiCar}
                    style={{
                      color: isButtonSelected("Car") ? "#00a19a" : "#9F9C9C",
                    }}
                    className="md:mt-0.5 flex flex-row md:w-16 lg:w-6"
                  />
                  <Text
                    className={`font-semibold md:text-[26px] lg:text-[15px] lg:mt-1 ${isButtonSelected("Car") ? "text-[#00a19a]" : "text-[#9F9C9C]"
                      }`}
                  >
                    Car
                  </Text>
                </div>
              </a>
            </div>

            <div class="sm:hidden xl:block 2xl:block white_A700/80 border-zinc-200 border-x-2 border-b-2 rounded-b-[20px] p-10 lg:w-[87%] 2xl:w-[75%] mb-10 justify-center md:w-[100%] ">
              <Column className=" mt-4 gap-0.5 justify-center items-center w-full">
                {/* web view*/}
                <div className="sm:hidden lg:block xl:block 2xl:block bg-white_A700 border border-1 md:border-neutral-400 lg:border-neutral-200 flex flex-row lg:gap-2 md:gap-8  lg:h-11 sm:h-32 items-center outline outline-[0.5px] outline-[#D8D8D8] lg:rounded-[5px] md:rounded-[20px] w-full">
                  <BiSearch fill="#6E6E6E" className="lg:ml-2 md:ml-6 lg:h-[22px] lg:w-[22px] md:h-[50px] md:w-[50px]" />
                  <PlacesAutocomplete
                    apiKey="AIzaSyB40jqFnXxo_4ZX7WezdrlR4NicJsseyu8"
                    value={address}
                    onChange={handleChange}
                    onSelect={handleSelect}
                  >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
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
                        const includesMalaysia = suggestion.description.toLowerCase().includes("malaysia");
                        const isDisabled = suggestionsToDisable.includes(suggestion.description);

                        return includesMalaysia && !isDisabled;
                      });

                      return (
                        <div>
                          <input
                            {...getInputProps({
                              placeholder: 'Destination',
                              className:
                                'font-normal not-italic font-montserrat p-[0] sm:text-[8px] md:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black placeholder:required text-slate_700 w-[100%] outline-none  border-none',
                            })}
                          />

                          <div
                            className="autocomplete-dropdown-container"
                            style={{
                              position: 'absolute',
                              zIndex: 1000,
                              marginTop: 10,
                              marginLeft: -40,
                              border: isLoading ? 'none' : 'none',
                              boxShadow: isLoading
                                ? '0 0px 0px 0 rgba(0, 0, 0, 0.2)'
                                : '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                              width: '18%',
                            }}
                          >
                            {isLoading ? (
                              <div>
                                <strong>Loading...</strong>
                                <CircularProgress size={12} style={{ color: 'black' }} />
                              </div>
                            ) : (
                              filteredSuggestions.map((suggestion) => {
                                const className = suggestion.active
                                  ? 'suggestion-item--active'
                                  : 'suggestion-item';
                                const style = suggestion.active
                                  ? {
                                    font: 'Montserrat',
                                    backgroundColor: '#bee3e2',
                                    paddingLeft: '5px',
                                    paddingTop: '15px',
                                    paddingBottom: '10px',
                                    cursor: 'pointer',
                                    color: 'black',
                                    fontSize: '12px',
                                    fontWeight: 'normal',
                                    outlineColor: '#00a19a',
                                    height: '5em',
                                    width: '300px',
                                    borderOutlineColor: '#00a19a',
                                    borderColor: '#00a19a',
                                  }
                                  : {
                                    font: 'Montserrat',
                                    backgroundColor: '#fafafa',
                                    cursor: 'pointer',
                                    color: 'black',
                                    fontSize: '12px',
                                    fontWeight: 'normal',
                                    outlineColor: '#00a19a',
                                    height: '5em',
                                    width: '300px',
                                    borderOutlineColor: '#00a19a',
                                    paddingLeft: '5px',
                                    paddingTop: '15px',
                                    paddingBottom: '10px',
                                    borderColor: '#00a19a',
                                  };
                                return (
                                  <div
                                    {...getSuggestionItemProps(suggestion, {
                                      className,
                                      style,
                                    })}
                                  >
                                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                                      <span style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaMapMarkerAlt
                                          style={{ marginRight: '2px', fontSize: '20px' }}
                                        />
                                        <strong style={{ marginLeft: '5px', marginTop: '-10px' }}>
                                          {suggestion.description.split(',')[0]}
                                        </strong>
                                      </span>
                                      <span
                                        style={{
                                          display: 'block',
                                          marginLeft: '25px',
                                          marginTop: '-5px',
                                        }}
                                      >
                                        {suggestion.description.split(',').slice(-1)}
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
                </div>

                <Row className="md:space-x-4 2xl:space-x-12 lg:space-x-8 w-full mt-8 items-center justify-center">
                  <div className="border border-1 md:border-neutral-400 lg:border-neutral-200 lg:ml-0 xl:ml-0 justify-center bg-white_A700 flex flex-row lg:gap-2 md:gap-8  lg:h-10 sm:h-24 items-center outline outline-[0.5px] outline-[#D8D8D8] lg:rounded-[5px] md:rounded-[20px] w-full">
                    <FiCalendar className="ml-2 text-[#6E6E6E] lg:ml-2 md:ml-6 lg:h-[22px] lg:w-[22px] md:h-[70px] md:w-[70px] " />
                    <DatePicker
                      className="font-normal font-montserrat not-italic p-[0] sm:text-[8px] md:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black placeholder:required text-slate_700 w-[100%]"
                      wrapClassName="w-[100%] "
                      placeholder="Date"
                      shape="RoundedBorder3"
                      size="sm"
                      type="date"

                      selected={startDate} onChange={(date) => setStartDate(date)} />

                    {/* </Input> */}
                  </div>
                  <div className="border border-1 md:border-neutral-400 lg:border-neutral-200 justify-center bg-white_A700 flex flex-row lg:gap-4 md:gap-8  lg:h-10 sm:h-24 items-center outline outline-[0.5px] outline-[#D8D8D8] md:rounded-[20px] lg:rounded-[5px] w-full">
                    <FiCalendar className="ml-6 text-[#6E6E6E] lg:ml-2 md:ml-6 lg:h-[22px] lg:w-[22px] md:h-[70px] md:w-[70px]" />
                    <select
                      className="md:my-4 lg:my-1 md:text-[30px] font-normal not-italic font-montserrat p-0 lg:text-[12px] ml-1 text-black placeholder:required text-slate_700 w-[100%] outline-none border-none "
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
                  </div>
                </Row>
              </Column>
              <Column className=" w-full justify-end items-end mt-8 text-right">
                <div className=" w-[100%] justify-end items-end ">
                  <button
                    className="bg-[#00A19A] md:text-[35px] lg:text-[14px] md:justify-center lg:justify-end lg:items-end lg:w-[15%] md:w-[35%] md:h-20 lg:h-fit text-white font-medium lg:px-4 lg:py-2.5 md:rounded-[20px] lg:rounded-lg"
                    onClick={handleNavigate689}
                  >
                    Search
                  </button>
                </div>
              </Column>
            </div>

            {/* mobile */}
            <div class="sm:block lg:hidden white_A700/80 border-zinc-200 border-x-2 border-b-2 rounded-b-[20px] p-10 lg:w-[87%] 2xl:w-[75%] mb-10 justify-center md:w-[100%] ">
              <Column className=" mt-4 gap-0.5 justify-center items-center w-full">
                {/*Destination input */}
                <div className="w-full inline-flex items-center text-center p-6 gap-4 justify-start border border-1 md:border-neutral-400 rounded-[20px] hover:outline-blue-500/75">
                  <CiSearch size={55} className="ml-4 text-gray_700 " />

                  <input
                    placeholder="Key in your destination"
                    className="font-medium font-montserrat items-center justify-start not-italic p-[0] sm:text-[30px] md:text-[30px] lg:text-[9px] placeholder:required text-slate_700 w-[160%] outline-none border-none"
                    onClick={() => {
                      setNav(!nav);
                      setDisabled(!isDisabled);
                      focusInput();
                    }}
                    disabled={isDisabled}
                    value={address}
                  />
                  {nav ? <div className="bg-black/80 fixed w-screen h-screen z-10 bottom-0 left-0"></div> : ''}
                  <div className={nav ? 'fixed bottom-0 rounded-t-[90px] left-0 w-screen h-[110em] p-4 bg-white z-10 duration-300' : 'fixed bottom-[-100%] left-0 w-screen h-[110em] p-4 bg-white z-10 duration-300'}>
                    <text className="font-montserrat absolute top-40 left-11 text-[40px] font-medium">Enter Destination</text>

                    <AiOutlineClose onClick={() => setNav(!nav) & setDisabled(!isDisabled)} size={60} className="absolute right-10 top-14 cursor-pointer" />

                    <nav className="h-fit m-8 snap-y">
                      <div className="snap-end grid mt-60 grid-cols-2 w-[100%]">
                        <div className="col-span-2 w-[100%] inline-flex h-[10em] items-center rounded-[20px] rounded-[20px] text-center bg-white/80 p-6 gap-4 justify-start outline outline-[1px] outline-blue-500/75">
                          <CiSearch size={50} className="ml-2 text-gray_700 " />
                          <PlacesAutocomplete
                            apiKey="AIzaSyB40jqFnXxo_4ZX7WezdrlR4NicJsseyu8"
                            value={address}
                            onChange={handleChange}
                            onSelect={handleSelect}
                          >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {

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
                                const includesMalaysia = suggestion.description.toLowerCase().includes("malaysia");
                                const isDisabled = suggestionsToDisable.includes(suggestion.description);

                                return includesMalaysia && !isDisabled;
                              });

                              return (
                                <div>
                                  <input
                                    ref={inputRef}
                                    {...getInputProps({
                                      placeholder: "Key in your destination",
                                      className: "custom-input font-medium font-montserrat items-center justify-start not-italic p-[0] sm:text-[35px] md:text-[35px] placeholder:required placeholder-gray-300 text-gray-400 w-[160%] outline-none border-none",
                                      style: {

                                      },
                                    })}
                                  />

                                  <div className="autocomplete-dropdown-container" style={{ position: "absolute", zIndex: 1000, padding: 10, marginLeft: -130, marginTop: 80, width: '96%', height: '100%' }}>
                                    {loading ? null : (
                                      filteredSuggestions.map((suggestion) => {
                                        const className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
                                        const style = suggestion.active ? { backgroundColor: "#bee3e2", font: 'Montserrat', cursor: "pointer", color: '#000', paddingTop: '40px', fontSize: '32px', paddingRight: '20px', height: '4em', width: '600px', fontWeight: 'normal', textAlign: 'left' } : { backgroundColor: "#ffffff", paddingLeft: '30px', font: 'Montserrat', cursor: "pointer", color: '#000', fontSize: '35px', paddingTop: '40px', height: '5em', fontWeight: 'normal', textAlign: 'left' };
                                        return (
                                          <div
                                            {...getSuggestionItemProps(suggestion, {
                                              className,
                                              style,
                                            })}
                                          >
                                            <span style={{ display: 'flex', flexDirection: 'column' }}>
                                              <span style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaMapMarkerAlt style={{ marginRight: '4', fontSize: '50px', marginTop: '30px' }} />
                                                <strong style={{ marginLeft: '30px', marginTop: '-20px' }}>{suggestion.description.split(",")[0]}</strong>
                                              </span>
                                              <line className="w-full h-2 color-[#f5f5f5]"></line>
                                              <span style={{ display: 'block', fontStyle: 'oblique', marginLeft: '95px', marginTop: '-20px' }}>
                                                {suggestion.description.split(",").slice(-1)}
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
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
                {/* date input */}
                <Row className="md:space-x-4 2xl:space-x-12 lg:space-x-8 w-full mt-8 items-center justify-center">
                  <div className="border border-1 md:border-neutral-400 lg:border-neutral-200 items-center inline-flex justify-center p-4 gap-4 bg-white_A700 lg:h-10 sm:h-24 outline outline-[0.5px] outline-[#D8D8D8] lg:rounded-[5px] md:rounded-[20px] w-full">
                    <FiCalendar className="text-[#6E6E6E] md:h-[52px] md:w-[52px] " />
                    <input
                      type="date"
                      id="myDate"
                      name="myDate"
                      className="border-none text-black text-[28px] pt-6"
                      defaultValue={startDate.toISOString().split('T')[0]}
                      // onChange={(date) => setStartDate(date)}
                      onChange={(event) => setStartDate(new Date(event.target.value))}
                    >
                    </input>
                  </div>
                  {/* day input */}
                  <div className="border border-1 md:border-neutral-400 lg:border-neutral-200 justify-center bg-white_A700 flex flex-row g:gap-4 md:gap-8  lg:h-10 sm:h-24 items-center outline outline-[0.5px] outline-[#D8D8D8] md:rounded-[20px] lg:rounded-[5px] w-full">
                    <FiCalendar className="ml-6 text-[#6E6E6E] lg:ml-2 md:ml-6 lg:h-[22px] lg:w-[22px] md:h-[70px] md:w-[70px]" />
                    <select
                      className="md:my-4 lg:my-1 md:text-[30px] font-normal not-italic font-montserrat p-0 lg:text-[12px] ml-1 text-black placeholder:required text-slate_700 w-[100%] outline-none border-none "
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
                  </div>
                </Row>
              </Column>
              <Column className=" w-full justify-end items-end mt-8 text-right">
                <div className=" w-[100%] justify-end items-end ">
                  <button
                    className="bg-[#00A19A] md:text-[35px] lg:text-[14px] md:justify-center lg:justify-end lg:items-end lg:w-[15%] md:w-[35%] md:h-20 lg:h-fit text-white font-medium lg:px-4 lg:py-2.5 md:rounded-[20px] lg:rounded-lg"
                    onClick={handleNavigate689}
                  >
                    Search
                  </button>
                </div>
              </Column>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
export default TravelPlan;


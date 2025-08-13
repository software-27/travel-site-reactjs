import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, Input, Img, Button, Line, Row, Column } from "components";
import { useNavigate, Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import './App1.css';
import { IoPartlySunnyOutline } from 'react-icons/io5';
import { BiMoon } from 'react-icons/bi';
import { GiKnifeFork } from 'react-icons/gi';
import { GiBed } from 'react-icons/gi';
import { BsSun } from 'react-icons/bs';
import { GiPathDistance } from 'react-icons/gi';
import { BsAirplane } from 'react-icons/bs';
import { BsTrainFreightFront } from 'react-icons/bs';
import { BiBus } from 'react-icons/bi';
import { FaCar } from "react-icons/fa";
import Icon from "@mdi/react";
import {
  mdiBookmark,
  mdiDotsHorizontal,
  mdiCircleSmall,
  mdiBookmarkOutline,
  mdiPlusCircle,
} from "@mdi/js";
import HeaderOTA from 'components/Header/HeaderOTA/index';
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";
import { useAuth } from "AuthContext";
import ContentSetting from 'components/ContentSetting/index';
import { fetchItineraryDetails, fetchItineraryDestination } from 'data/data';
import { useParams } from 'react-router-dom';
import axios from "axios";
import "./boomarkButton.css";

const OverviewSave = () => {

  const baseURL = window.location.origin;
  console.log("baseUrl: ", baseURL);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const loading = useSelector((state) => state.data.loading);
  const [isLoading, setIsLoading] = useState(false);
  const error = useSelector((state) => state.data.error);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const userId = localStorage.getItem("userId");


  const messages = [
    "Hold up, we're putting together your travel plan...",
    "Figuring out the cities you'll hit...",
    "Sorting out the attractions for you to check out...",
    "Grabbing the travel routes for your journey...",
    "Fine-tuning your itinerary to make it even better...",
    "Hang tight while we make sure your trip is top-notch"
  ];

  const [text, setText] = useState(messages[0]);

  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];


  // *FETCH TRAVEL PLAN DATA BY TRAVEL PLAN ID*
  // Api V2

  const { creatorId, itineraryId, itineraryTitle } = useParams();
  const [itineraryDetails, setItineraryDetails] = useState(''); //{}
  const [userItineraryActivity, setUserItineraryActivity] = useState([]); //[] array 25
  // const [itineraryId, setItineraryId] = useState(itineraryId); //int
  const [day, setDay] = useState(''); //int
  const [title, setTitle] = useState(''); //string
  const [data3, setData3] = useState([]); //locationImage []
  const [itineraryDestination, setItineraryDestination] = useState([]); //follow locationImage
  const [destination, setDestination] = useState([]); //follow locationImage


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {

        const data = await fetchItineraryDetails(itineraryId);
        const data2 = await fetchItineraryDestination(itineraryId);

        // console.log("ZZDATA: ", data);
        // console.log("ZZDATA2: ", data2);

        setItineraryDetails(data);
        setUserItineraryActivity(data.itineraryDetails.userItineraryActivity);
        // setItineraryId(data.itineraryDetails.itineraryId);
        setDay(data.itineraryDetails.day);
        setTitle(data.itineraryDetails.itineraryTitle);
        setData3(data.itineraryDetails.location); //locationImage

        setItineraryDestination(data2);
        setDestination(data2.itineraryDestination.destination);

        const encodedCorrectTitle = encodeURIComponent(data.itineraryDetails.itineraryTitle);

        try {
          // Check if the URL title matches the correct title, if not, update the URL
          if (itineraryTitle !== encodedCorrectTitle) {
            navigate(`/itinerary-save/${creatorId}/${itineraryId}/${encodedCorrectTitle}`, { replace: true });
          }
        } catch (error) {
          console.error('Error fetching itinerary details:', error);
        }

        setIsLoading(false);

      } catch (error) {
        console.error('Error fetching itinerary details:', error);

        setIsLoading(false);
      }
    };

    fetchData();

  }, []);

  console.log("XXItinerary Details (All): ", itineraryDetails)
  console.log("XXUser Itinerary Activity: ", userItineraryActivity)
  console.log("XXItinerary Id: ", itineraryId)
  console.log("XXItinerary Details (Day): ", day)
  console.log("XXUser Itinerary Ttitle: ", title)
  console.log("XXLocation Image: ", data3)
  console.log("XXItineraryDetailsPC: ", itineraryDetails);
  console.log("XXDestination: ", destination);



  // *LOGIN POPUP SETUP*
  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [isPopup2Open, setIsPopup2Open] = useState(false);
  const [isShowContentSetting, setIsShowContentSetting] = React.useState(false);

  const openPopup1 = () => {
    setIsPopup1Open(true);
  };

  const openPopup2 = () => {
    setIsPopup2Open(true);
  };

  const openPopup3 = () => {
    setIsShowContentSetting(true);
  }

  const closePopup1 = () => {
    setIsPopup1Open(false);
  };

  const closePopup2 = () => {
    setIsPopup2Open(false);
  };

  const closePopup3 = () => {
    setIsShowContentSetting(false);
  }

  // Function to show the success message
  const showSuccess = () => {
    setShowSuccessMessage(true);
  };

  // Function to hide the success message
  const hideSuccess = () => {
    setShowSuccessMessage(false);
  };

  //bookmark
  const [bookmarkedItineraries, setBookmarkedItineraries] = useState([]);
  const [successMessageType, setSuccessMessageType] = useState("saved");

  const fetchBookmarkedItineraries = async () => {
    try {
      const response = await axios.get(
        `https://halaltravel.ai/hv/api/chatgpt/user/itinerary-bookmark/${userId}`
      );
      const data = response.data;
      setBookmarkedItineraries(
        data.map((bookmark) => ({
          itineraryId: bookmark.userItineraryId, // Ensure this matches your data structure
          bookmarkId: bookmark.id,
        }))
      );

      const isCurrentlyBookmarked = data.some(
        (bookmark) => Number(bookmark.userItineraryId) === Number(itineraryId)
      );
      setIsBookmarked(isCurrentlyBookmarked);
    } catch (error) {
      console.error("Failed to fetch bookmarked itineraries:", error);
    }
  };

  // Correctly use useEffect to call fetchBookmarkedItineraries
  useEffect(() => {
    fetchBookmarkedItineraries();
  }, [userId, itineraryId]);
  // Re-fetch when userId or itineraryId changes

  const handleBookmarkClick = async () => {
    // console.log("clikkkk", itineraryId);
    try {
      //console.log("clikkkk");
      // Fetch the itinerary details, including userItineraryId
      const data = await fetchItineraryDetails(itineraryId);
      // console.log("xxxdata: ", data);

      if (data) {
        const userItineraryId = itineraryId;

        // Update the requestBody with the obtained userItineraryId
        const requestBody = {
          user_id: userId,
          user_itinerary_id: userItineraryId,
        };

        setTitle(data.itineraryDetails.itineraryTitle);
        //console.log("PRINTT", requestBody);

        const response = await axios.post(
          "https://halaltravel.ai/hv/api/chatgpt/user/itinerary-bookmark",
          requestBody,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          setSuccessMessageType("saved");
          setShowSuccessMessage(true);
          fetchBookmarkedItineraries();
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 5000);
          console.log("success bookmark");
        } else {
          console.error("Error bookmarking itinerary");
        }
      } else {
        // Handle the case where data is null or userItineraryId is not available
        console.error("Error: User bookmark are not available");
      }
    } catch (error) {
      // Handle network errors or other errors here
      console.error("Error:", error);
    }
  };
  console.log("Bookmarked Itineraries:", bookmarkedItineraries);
  // console.log("Current Itinerary ID:", itineraryId);
  const handleUnsaveClick = async () => {
    // Find the bookmark entry for the current itinerary to get its bookmarkId
    const bookmark = bookmarkedItineraries.find(
      (item) => Number(item.itineraryId) === Number(itineraryId)
    );
    if (!bookmark) {
      console.error("Bookmark entry not found");
      return;
    }

    try {
      const response = await axios.delete(
        `https://halaltravel.ai/hv/api/chatgpt/user/itinerary-bookmark/${userId}/${bookmark.bookmarkId}`,
        {
          headers: {
            "Content-Type": "application/json",
            // "Authorization": "Bearer <YourTokenHere>", // Include this if needed
          },
        }
      );
      // console.log("Current bookmark ID:", bookmark.bookmarkId);

      if (response.status === 200 || response.status === 204) {
        console.log("Bookmark successfully deleted");
        // Update state to reflect deletion
        setBookmarkedItineraries((current) =>
          current.filter((item) => item.bookmarkId !== bookmark.bookmarkId)
        );
        setSuccessMessageType("unsaved");
        setShowSuccessMessage(true);
        fetchBookmarkedItineraries();
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      } else {
        console.error(
          "Failed to delete bookmark with status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error while deleting bookmark:", error);
    }
  };

  const loginStatus = (isBookmarked) => {
    if (isLoggedIn) {
      if (isBookmarked) {
        handleUnsaveClick();
      } else {
        handleBookmarkClick();
      }
      // handleBookmarkClick(id);
    } else {
      setIsPopup1Open(true);
      localStorage.setItem("customPath", "my-travelplan");
    }
  };

  // bila dah ada data destination, days, date : tukar 
  const receivedData = {
    message: destination,
    days: day,
    date: new Date(),
    itineraryId: itineraryId,
  }


  // *ARRAGE THE ACTIVITIES INTO AN ITINERARY (userItineraryActivity)*

  // Define custom property names for each period
  const periodPropertyNames = {
    morning: {
      activity: 'morningactivity',
      place: 'morningplace',
      comment: 'mcomment',
      date: 'date',
    },
    lunch: {
      place: 'lunch',
      date: 'date',
    },
    afternoon: {
      activity: 'afternoonactivity',
      place: 'afternoonplace',
      comment: 'acomment',
      date: 'date',
    },
    evening: {
      activity: 'eveningactivity',
      place: 'eveningplace',
      comment: 'ecomment',
      date: 'date',
    },
    dinner: {
      place: 'dinner',
      date: 'date',
    },
  };

  // Group the items by day
  const groupedByDay = userItineraryActivity.reduce((acc, activity) => {

    const day = parseInt(activity.day.replace('Day ', ''), 10);

    // Extract the first word from the activity.period
    const period = activity.period.toLowerCase().split(' ')[0];

    // Check if there's an existing object for the day, if not, create one together with day variable in each array
    acc[day] = acc[day] || { day: day };

    // Add properties to the object for the corresponding day with custom property names
    const customNames = periodPropertyNames[period] || {}; // Get custom names for the current period
    Object.entries(customNames).forEach(([key, customName]) => {
      acc[day][customName] = activity[key];
    });


    return acc;
  }, {});

  // Convert the keys to an array, sort them, and create a new array with sorted keys and data
  const sortedKeys = Object.keys(groupedByDay).map(Number).sort((a, b) => a - b);
  const sortedGroupedByDay = sortedKeys.map((key) => groupedByDay[key]);

  const data = sortedGroupedByDay;
  console.log("Data Overview: ", data);



  // *GAMBAR?????*
  function findThumbnailURLIndex(data3, title) {
    for (let i = 0; i < data3.length; i++) {
      if (data3[i].title === title) {
        return i;
      }
    }

    return -1; // If title is not found
  }

  function findThumbnailURLIndex1(data3, title) {
    for (let i = 0; i < data3.length; i++) {
      if (data3[i].title === title) {
        return i;
      }
    }

    return -1; // If title is not found
  }

  function findThumbnailURLIndex2(data3, title) {
    for (let i = 0; i < data3.length; i++) {
      if (data3[i].title === title) {
        return i;
      }
    }

    return -1; // If title is not found
  }


  // *NAVIGATION ICON BUS*
  const handleButtonClick = (date) => {
    if (isLoggedIn) {
      navigate("/bus-landing-page", { state: { destination, date } });
    } else {
      setIsPopup1Open(true);
    }
  };


  return (
    <>
      {showSuccessMessage && (
        <div className="success-message">
          <div className="message-line">
            Travel plan{" "}
            <strong>
              {successMessageType === "saved" ? "saved to" : "unsaved from"}
            </strong>{" "}
            your bookmark
            <button
              onClick={() => setShowSuccessMessage(false)}
              className="close-button"
            >
              X
            </button>
          </div>
          <div className="message-line">
            {title} has been{" "}
            <strong>
              {successMessageType === "saved" ? "saved to" : "unsaved from"}
            </strong>{" "}
          </div>
          <div className="message-line">
            <a href="/my-travelplan">My Travel Plan</a>.
          </div>
        </div>
      )}

      <div id="myElement" className="bg-[#EAEBEF] flex flex-col font-ptsans items-center justify-start mx-[auto] w-[100%]">

        {/*Mobile View*/}
        <div className="absolute visible lg:invisible lg:hidden w-full ">
          <div className="bg-[#EAEBEF] flex flex-col font-montserrat items-center justify-start mx-auto w-full">
            <HeaderOTAMobileEpic openPopup1={openPopup1} className="visible fixed overflow-hidden lg:invisible lg:hidden" />
            <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
            <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />
            {/* <div className='absolute visible lg:invisible  bg-gray-200'> */}
            <div className="justify-between flex bg-white shadow-lg p-4 w-full">
              <Row className="p-4 grid grsid-row-2 grid-flow-col">
                <text className="font-montserrat ml-2 text-[50px] sm:text-[48px] md:text-[40px] xl:text-[40px]" style={{ color: '#45B9B4' }}>
                  {title}
                </text>
              </Row>
              <div className="btnSave">
                <button
                  className={`bookmark-button ${isBookmarked ? "active" : ""
                    } mr-1 rounded-xl font-bold py-0 px-2 inline-flex items-center`}
                  style={{
                    position: "fixed",
                    bottom: "50px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 1000,
                    padding: "6px 26px",
                  }}
                  onClick={() => loginStatus(isBookmarked)}
                >
                  <Icon
                    path={mdiBookmarkOutline}
                    className={`icon ${isBookmarked
                      ? "text-[#00A19A] bg-[#FFFFFF] not-allowed"
                      : "text-[#00A19A] bg-[#FFFFFF] common-pointer"
                      } sm:w-[60px] sm:h-[60px] lg:w-[28px] lg:h-[28px] w-fit h-fit p-1 rounded-full`}
                  />
                  <span
                    className={`text ${isBookmarked ? "text-[#FFFFFF]" : "text-[#45B9B4]"
                      } font-montserrat mr-0`}
                    style={{ fontSize: isBookmarked ? "32px" : "32px" }}
                  >
                    {isBookmarked ? "Unbookmark" : "Bookmark"}
                  </span>
                </button>
              </div>
            </div>
            <div className="place-items-center grid bg-white shadow-inner p-4 w-full"  >
              <div>
                <text
                  className="font-montserrat common-pointer font-bold border-b border-b-2 border-b-[#6392F9] text-[#6392F9] p-3 md:text-[30px] xl:text-[30px]"
                // onClick={() => {

                //   const dataToPass = {
                //     message: receivedData.message,
                //     days: receivedData.days,
                //     theme: receivedData.theme,
                //     date: receivedData.date
                //   };
                //   navigate('/ota1', { state: dataToPass });
                // }}
                >
                  Overview
                </text>
                {/* <text
                  className={`font-montserrat common-pointer ml-10 sm:ml-4 md:ml-6 lg:ml-10 hover:border-b hover:border-b-2 hover:border-b-[#6392F9] hover:text-[#6392F9] p-3 md:text-[30px] xl:text-[30px] ${data?.length > 0 ? 'cursor-pointer' : ''
                    }`}
                  onClick={() => {
                    if (!data?.length) {



                    } else {
                      const dataToPass = {
                        message: receivedData.message,
                        days: receivedData.days,
                        theme: receivedData.theme,
                        date: receivedData.date
                      };
                      navigate('/ota2', { state: dataToPass });
                    }
                  }}
                >
                  Editable View
                </text> */}
              </div>
            </div>

            <div className='font-montserrat h-[100%] w-[100%]' style={{ backgroundColor: isLoading ? '#fff' : '#fff' }}>
              <div className="flex items-center justify-center mb-[100px]" style={{ backgroundColor: isLoading ? '#fff' : '#fff' }}>

                {!isLoading ? (
                  data && (
                    <div className={`grid grid-cols-1 md:grid-cols-1 gap-2`}>
                      {data.map((item, index) => (
                        <div key={index} className="flex items-center justify-center p-2">
                          <div className="flex items-center justify-center">
                            <div className="w-full">
                              <div
                                className={`p-3 mt-6 rounded-2xl grid grid-row-2 grid-flow-col w-full h-[100px]`}
                              >
                                <div className="text-center">
                                  <span className="font-semibold justify-center font-montserrat sm:text-[8px] md:text-[60px] lg:text-[9px]">
                                    Day {item.day}
                                  </span>

                                  {(() => {
                                    // Get the current date
                                    const currentDate = new Date(receivedData.date);
                                    const updatedDate = new Date(currentDate.getTime());

                                    updatedDate.setDate(updatedDate.getDate() + item.day - 1);
                                    //  updatedDate.setDate(updatedDate.getDate() + item.day-2);

                                    // Define the month names
                                    const monthNames = [
                                      "January", "February", "March",
                                      "April", "May", "June", "July",
                                      "August", "September", "October",
                                      "November", "December"
                                    ];

                                    // Format the date as "DD Month"
                                    const dayOfMonth = updatedDate.getDate();
                                    const startMonthString = monthNames[updatedDate.getMonth()];

                                    const formattedDate = `${dayOfMonth} ${startMonthString}`;

                                    // return (

                                    //   receivedData.days !== null ? (
                                    //     <span style={{ color: '#008009' }} className="font-bold block font-semibold justify-center font-montserrat sm:text-[6px] md:text-[30px] lg:text-[6px]">
                                    //       &nbsp;&nbsp; {formattedDate}
                                    //     </span>
                                    //   ) : null
                                    // );
                                    return (

                                      <span style={{ color: '#008009' }} className="font-bold block font-semibold justify-center font-montserrat sm:text-[6px] md:text-[30px] lg:text-[6px]">
                                        {item.date}
                                      </span>
                                    );
                                  })()}
                                  {/* End of added code */}
                                </div>
                              </div>

                              <div className="mt-20  w-full md:w-[850px] flex flex-col items-start ">
                                <div className="flex items-center mb-2 mt-0">
                                  <GiPathDistance color="#008009" size={50}
                                    className="rounded-lg w-10 h-10" alt="route" />
                                  <text style={{ color: '#008009', marginLeft: 11 }} className="text-[37px] font-bold ml-2 font-montserrat">
                                    Transportation
                                  </text>
                                  <div className="flex" style={{ marginLeft: '30' }}>
                                    <a href={`https://kayak.com.my/in?a=kan_262812_573418&encoder=27_1&enc_cid=${creatorId}&lc=en&url=%2Fflights`} target="_blank" rel="noopener noreferrer">
                                      <BsAirplane color="#008009" size={50} className="rounded-lg w-10 h-10" alt="route" style={{ marginLeft: '20px', marginRight: '20px' }} />
                                    </a>
                                    <a href={`https://kayak.com.my/in?a=kan_262812_573418&encoder=27_1&enc_cid=${creatorId}&lc=en&url=%2Fcars`} target="_blank" rel="noopener noreferrer">
                                      <FaCar color="#008009" size={50} className="rounded-lg w-10 h-10" alt="route" style={{ marginLeft: '0px', marginRight: '20px' }} />
                                    </a>
                                    <a href="https://online.ktmb.com.my" target="_blank" rel="noopener noreferrer">

                                      <BsTrainFreightFront color="#008009" size={50}
                                        className="rounded-lg w-10 h-10" alt="route" style={{ marginLeft: '0px', marginRight: '20px' }} />
                                    </a>
                                    {baseURL === 'https://vm.epictravel.ai' || 'http://localhost:3000' ? (
                                      <a
                                        // onClick={() => {
                                        //   handleButtonClick(item.date);
                                        // }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <BiBus color="#008009" size={50}
                                          className="rounded-lg w-10 h-10" alt="route" />
                                      </a>
                                    ) : (
                                      <a href="https://gohub.com.my" target="_blank" rel="noopener noreferrer">
                                        <BiBus color="#008009" size={50}
                                          className="rounded-lg w-10 h-10" alt="route" />
                                      </a>
                                    )}
                                  </div>
                                </div>

                                <div className="flex items-center mb-2 mt-0 ">
                                  <BsSun
                                    color="#008009"
                                    size={50}
                                    className="rounded-lg w-10 h-10" // Set fixed width and height
                                    alt="route"
                                  />
                                  <text style={{ color: '#008009', marginLeft: 11 }} className="text-[37px] font-bold ml-2 font-montserrat">
                                    Morning
                                  </text>
                                </div>
                                <div className="ml-4 mt-4" style={{ display: 'flex', alignItems: 'center' }}>
                                  <div className="dotted-line1"></div>
                                  <div style={{ marginLeft: '35px', }}>


                                    <text className="text-black font-montserrat">
                                      <span style={{ fontSize: '37px', fontWeight: '450' }}>
                                        {/* <a
                                          href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.morningplace}, ${receivedData.message}`}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        > */}
                                        {item.morningactivity && item.morningactivity.replace(item.morningplace, "")} <text className='text-[#008009] underline'> <a
                                          href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.morningplace}, ${receivedData.message}`}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          {item.morningplace}
                                        </a>

                                        </text>.  {item.mcomment}
                                        {/* </a> */}
                                      </span>
                                      {/* <br /> */}
                                      {/* <span style={{ fontSize: '37px', fontWeight: '400' }}>{item.morningactivity}</span> */}
                                    </text>
                                  </div>

                                </div>
                                {data3 && data3.length > 0 && (
                                  <div>
                                    {(() => {
                                      const thumbnailIndex = findThumbnailURLIndex1(data3, item.morningplace);

                                      if (thumbnailIndex >= 0 && data3[thumbnailIndex]?.thumbnailURL) {
                                        const thumbnailURL = data3[thumbnailIndex].thumbnailURL;
                                        const thumbnailURL1 = data3[thumbnailIndex].webURL;

                                        return (
                                          <div className="ml-2" style={{ display: 'flex', marginTop: 10, marginLeft: 16 }}>
                                            <div style={{ marginLeft: 0, height: 410 }} className="dotted-line1"></div>
                                            <a href={thumbnailURL1} target="_blank" rel="noopener noreferrer">
                                              <img
                                                className="rounded rounded-3xl drop-shadow-2xl"
                                                src={thumbnailURL}
                                                alt="Display"
                                                style={{ marginLeft: 35, width: '460px', height: '360px', marginTop: 5 }}
                                              />
                                            </a>
                                          </div>
                                        );
                                      } else {
                                        return null;
                                      }
                                    })()}
                                  </div>
                                )}
                              </div>


                              {/* <div style={{ marginLeft: 10 }} className=" mt-2   w-full md:w-[700px] flex flex-col items-start">

                                <div className="flex items-center mb-2">

                                  <GiKnifeFork
                                    style={{ marginLeft: -10 }}
                                    color="#008009"
                                    size={50}
                                    className="rounded-lg w-10 h-10" // Set fixed width and height
                                    alt="route"
                                  />

                                  <text style={{ color: '#008009', ontWeight: '600' }} className="text-[37px]  ml-2 font-montserrat">
                                    Lunch-&nbsp;&nbsp;
                                    <text style={{ color: '#008009', ontWeight: '450' }} className=' text-[37px] underline'>
                                      <a
                                        href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.lunch}, ${receivedData.message}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {item.lunch}
                                      </a>
                                    </text>
                                  </text>

                                </div>
                              </div> */}


                              <div style={{ marginLeft: 8, height: 30, marginLeft: 18 }} className="dotted-line1"></div>

                              <div className="mt-0  w-full md:w-[850px] flex flex-col items-start ">
                                <div className="flex items-center mb-2 mt-4">
                                  <IoPartlySunnyOutline
                                    color="#008009"
                                    size={50}
                                    className="rounded-lg w-10 h-10" // Set fixed width and height
                                    alt="route"
                                  />
                                  <text style={{ color: '#008009', marginLeft: 11 }} className="text-[37px] font-bold ml-2 font-montserrat">
                                    Afternoon
                                  </text>
                                </div>
                                <div className="ml-4 mt-4" style={{ display: 'flex', alignItems: 'center' }}>
                                  <div className="dotted-line1"></div>
                                  <div style={{ marginLeft: '35px' }}>
                                    <text className="text-black font-montserrat">
                                      <span style={{ fontSize: '37px', fontWeight: '450' }}>
                                        {/* <a
                                          href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.morningplace}, ${receivedData.message}`}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        > */}
                                        {item.afternoonactivity && item.afternoonactivity.replace(item.afternoonplace, "")} <text className='text-[#008009] underline'> <a
                                          href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.afternoonplace}, ${receivedData.message}`}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          {item.afternoonplace}
                                        </a>


                                        </text>.  {item.acomment}
                                        {/* </a> */}
                                      </span>
                                      {/* <br /> */}
                                      {/* <span style={{ fontSize: '37px', fontWeight: '400' }}>{item.morningactivity}</span> */}
                                    </text>
                                  </div>
                                </div>
                                {data3 && data3.length > 0 && (
                                  <div>
                                    {(() => {
                                      const thumbnailIndex = findThumbnailURLIndex1(data3, item.afternoonplace);

                                      if (thumbnailIndex >= 0 && data3[thumbnailIndex]?.thumbnailURL) {
                                        const thumbnailURL = data3[thumbnailIndex].thumbnailURL;
                                        const thumbnailURL1 = data3[thumbnailIndex].webURL;

                                        return (
                                          <div className="ml-2" style={{ display: 'flex', marginTop: 10, marginLeft: 16 }}>
                                            <div style={{ marginLeft: 0, height: 410 }} className="dotted-line1"></div>
                                            <a href={thumbnailURL1} target="_blank" rel="noopener noreferrer">
                                              <img
                                                className="rounded rounded-3xl drop-shadow-2xl"
                                                src={thumbnailURL}
                                                alt="Display"
                                                style={{ marginLeft: 35, width: '460px', height: '360px', marginTop: 5 }}
                                              />
                                            </a>
                                          </div>
                                        );
                                      } else {
                                        return null;
                                      }
                                    })()}
                                  </div>
                                )}


                              </div>

                              {/* <div style={{ marginLeft: 10 }} className=" mt-2   w-full md:w-[700px] flex flex-col items-start">

                                <div className="flex items-center mb-2">

                                  <GiKnifeFork
                                    style={{ marginLeft: -10 }}
                                    color="#008009"
                                    size={50}
                                    className="rounded-lg w-10 h-10" // Set fixed width and height
                                    alt="route"
                                  />

                                  <text style={{ color: '#008009', ontWeight: '600' }} className="text-[37px]  ml-2 font-montserrat">
                                    Dinner-&nbsp;&nbsp;
                                    <text style={{ color: '#008009', ontWeight: '450' }} className=' text-[37px] underline'>
                                      <a
                                        href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.dinner}, ${receivedData.message}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {item.dinner}
                                      </a>
                                    </text>
                                  </text>

                                </div>
                              </div> */}

                              <div className="mt-0  w-full md:w-[850px] flex flex-col items-start ">
                                <div className="flex items-center mb-2 mt-4">
                                  <BiMoon
                                    color="#008009"
                                    size={50}
                                    className="rounded-lg w-10 h-10" // Set fixed width and height
                                    alt="route"
                                  />
                                  <text style={{ color: '#008009', marginLeft: 11 }} className="text-[37px] font-bold ml-2 font-montserrat">
                                    Evening
                                  </text>
                                </div>
                                <div className="ml-4 mt-4" style={{ display: 'flex', alignItems: 'center' }}>
                                  <div className="dotted-line1"></div>
                                  <div style={{ marginLeft: '35px' }}>
                                    <text className="text-black font-montserrat">
                                      <span style={{ fontSize: '37px', fontWeight: '450' }}>
                                        {/* <a
                                          href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.morningplace}, ${receivedData.message}`}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        > */}

                                        {item.eveningactivity && item.eveningactivity.replace(item.eveningplace, "")}

                                        <text className='text-[#008009] underline'> <a
                                          href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.eveningplace}, ${receivedData.message}`}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          {item.eveningplace}
                                        </a>


                                        </text>. {item.ecomment}
                                        {/* {item.ecomment}{findThumbnailURLIndex2(data3, item.eveningplace)} */}
                                        {/* </a> */}
                                      </span>
                                      {/* <br /> */}
                                      {/* <span style={{ fontSize: '37px', fontWeight: '400' }}>{item.morningactivity}</span> */}
                                    </text>
                                  </div>
                                </div>
                                {data3 && data3.length > 0 && (
                                  <div>
                                    {(() => {
                                      const thumbnailIndex = findThumbnailURLIndex1(data3, item.eveningplace);

                                      if (thumbnailIndex >= 0 && data3[thumbnailIndex]?.thumbnailURL) {
                                        const thumbnailURL = data3[thumbnailIndex].thumbnailURL;
                                        const thumbnailURL1 = data3[thumbnailIndex].webURL;

                                        return (
                                          <div className="ml-2" style={{ display: 'flex', marginTop: 10, marginLeft: 16 }}>
                                            <div style={{ marginLeft: 0, height: 410 }} className="dotted-line1"></div>
                                            <a href={thumbnailURL1} target="_blank" rel="noopener noreferrer">
                                              <img
                                                className="rounded rounded-3xl drop-shadow-2xl"
                                                src={thumbnailURL}
                                                alt="Display"
                                                style={{ marginLeft: 35, width: '460px', height: '360px', marginTop: 5 }}
                                              />
                                            </a>
                                          </div>
                                        );
                                      } else {
                                        return null;
                                      }
                                    })()}
                                  </div>
                                )}
                              </div>


                              <div style={{ marginLeft: 10 }} className=" mt-0   w-full md:w-[700px] flex flex-col items-start">

                                {(() => {
                                  // Get the current date
                                  const currentDate = new Date(receivedData.date);
                                  const updatedDate = new Date(currentDate.getTime());
                                  const updatedDate1 = new Date(currentDate.getTime());
                                  updatedDate.setDate(updatedDate.getDate() + item.day - 1);

                                  // Format the date as "YYYY-MM-DD"
                                  const year = updatedDate1.getFullYear();
                                  const month = String(updatedDate1.getMonth() + 1).padStart(2, '0');
                                  const day = String(updatedDate1.getDate()).padStart(2, '0');

                                  const year1 = updatedDate.getFullYear();
                                  const month1 = String(updatedDate.getMonth() + 1).padStart(2, '0');
                                  const day1 = String(updatedDate.getDate()).padStart(2, '0');

                                  const formattedDate1 = `${year}-${month}-${day}`;
                                  const formattedDate2 = `${year1}-${month1}-${day1}`;

                                  return (
                                    // <span style={{ color: '#008009' }} className="font-bold block font-semibold justify-center font-montserrat sm:text-[6px] md:text-[30px] lg:text-[6px]">
                                    //   &nbsp;&nbsp; {formattedDate}
                                    // </span>

                                    <div className="flex items-center mb-2">

                                      <GiBed
                                        color="#008009"
                                        size={50}
                                        className="rounded-lg w-10 h-10" // Set fixed width and height
                                        alt="route"
                                      />

                                      <text style={{ color: '#008009', ontWeight: '600' }} className="text-[37px]  ml-2 font-montserrat">
                                        Bedtime-&nbsp;&nbsp;

                                        <text style={{ color: '#008009', ontWeight: '300' }} className=' text-[37px] '>
                                          Hotels Deals in&nbsp;
                                        </text>
                                        <text style={{ color: '#008009', ontWeight: '300' }} className=' text-[37px] underline'>
                                          <a

                                            href={`http://kayak.com.my/in?a=kan_262812_573418&enc_cid=${creatorId}&lc=en&url=%2Fhotels/${receivedData.message}/${formattedDate1}/${formattedDate2}?sort=distance_a`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            {receivedData.message}
                                          </a>
                                        </text>
                                      </text>

                                    </div>

                                  );

                                })()}

                              </div>

                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                ) : (
                  <div className="h-[100%] w-[100%] mt-30 flex items-center justify-center flex-col">
                    <span style={{ fontSize: '30px', fontWeight: 'normal' }}>{text}</span>
                    <CircularProgress size={30} sx={{ color: 'black' }} />
                  </div>
                )}
              </div>
              {
                !isLoading || !data?.length && (
                  <div className="h-[100%] w-[100%] flex items-center justify-center flex-col" style={{ backgroundColor: 'white', marginTop: '0px', padding: '20px' }}>
                    {/* <span className="text-center mb-4" style={{ fontSize: '30px', fontWeight: 'bold',marginTop: '300px' }}>
                        Oops, looks like the server is experiencing high demand. Please try again.{loading}
                      </span>
                      <Button
                        className="flex items-center justify-center rounded-[10px] px-3 py-2"
                        style={{ backgroundColor: '#00a19a', width: '460px', height: '80px' }}
                        size="smIcn"
                        onClick={handleNavigate689}
                      >
                        <text style={{ fontSize: '30px', fontWeight: 'bold' }} className="uppercase font-montserrat text-[25px] text-white">Regenerate itinerary</text>
                      </Button> */}
                  </div>
                )
              }

            </div>

            {/* </div> */}
          </div>
        </div>



        {/*Web View*/}

        <div className="absolute invisible lg:visible bg-[#EAEBEF] flex flex-col font-montserrat items-center justify-start mx-[auto] w-[100%]">
          <HeaderOTA openPopup1={openPopup1} className="relative hidden lg:visible" />
          <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
          <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />

          <div
            className="flex bg-white shadow-lg p-4 w-[100%]"
            style={{ backgroundColor: "#F5F5F5" }}
          >
            <Row className="w-[100%] ">
              <div className="text-left w-[50%]">
                <text
                  className="font-montserrat ml-2 text-[20px] sm:text-[18px] md:text-[20px] xl:text-[20px]"
                  style={{ color: "#45B9B4" }}
                >
                  {title}
                  {/* (ID: {receivedData.itineraryId}) */}
                </text>
              </div>
              {/* <Img
                src="images/edit.svg"
                className="common-pointer h-[25px] sm:h-[20px] md:h-[25px] xl:h-[25px] md:ml-[0] sm:ml-[0] xl:ml-[10px] ml-[10px] object-cover md:w-[100%] sm:w-[100%] xl:w-[25px] w-[25px]"
                alt="edit"
              /> */}
              <div className="w-[50%] text-right">

                <button
                  className={`bookmark-button ${isBookmarked ? "active" : ""
                    } mr-1 rounded-xl font-bold py-0 px-2 inline-flex items-center`}
                  onClick={() => loginStatus(isBookmarked)}
                >
                  <Icon
                    path={mdiBookmarkOutline}
                    className={`icon ${isBookmarked
                      ? "text-[#00A19A] bg-[#FFFFFF] not-allowed"
                      : "text-[#00A19A] bg-[#FFFFFF] common-pointer"
                      } sm:w-[60px] sm:h-[60px] lg:w-[28px] lg:h-[28px] w-fit h-fit p-1 rounded-full`}
                  />
                  <span
                    className={`text ${isBookmarked ? "text-[#FFFFFF]" : "text-[#45B9B4]"
                      } font-montserrat mr-0`}
                  >
                    {isBookmarked ? "Unbookmark" : "Bookmark"}
                  </span>
                </button>
              </div>
              <ContentSetting
                showContentSetting={isShowContentSetting}
                closePopup3={closePopup3}
              />
            </Row>
          </div>

          <div className="place-items-center grid bg-white shadow-inner p-4 w-full" style={{ backgroundColor: '#F5F5F5' }}>
            <div>
              <text
                className="font-montserrat common-pointer font-bold border-b border-b-2 border-b-[#6392F9] text-[#6392F9] p-3"
              // onClick={() => setIsPopup1Open(true)}
              // onClick={() => {
              //   const dataToPass = {
              //     message: receivedData.message,
              //     days: receivedData.days,
              //     theme: receivedData.theme,
              //     date: receivedData.date
              //   };
              //   navigate('/ota1', { state: dataToPass });
              // }}
              >
                Overview
              </text>
              {/* <text
                className="font-montserrat common-pointer ml-10 sm:ml-4 md:ml-6 lg:ml-10 hover:border-b hover:border-b-2 hover:border-b-[#6392F9] hover:text-[#6392F9] p-3"

                onClick={() => {
                  setIsPopup1Open(true);
                  if (!data?.length) {
                  }
                  else {
                    const dataToPass = {
                      message: receivedData.message,
                      days: receivedData.days,
                      theme: receivedData.theme,
                      date: receivedData.date
                    };
                    navigate('/ota2', { state: dataToPass });
                  }
                  ;
                }}
              >
                Editable View
              </text> */}
            </div>
          </div>


          {/* start */}
          <div className="w-full" >

            {/* <Img
              src="images/img_rectangle120.png"
              className="h-screen object-cover w-full"
              alt="rectangle120"
            /> */}

            <div className="top-0 left-0 w-full items-center justify-center">

              <div className='font-montserrat  w-[100%]'
                style={{
                  backgroundColor: isLoading ? 'rgba(216, 216, 216, 0.6)' : 'rgba(216, 216, 216, 0.6)',
                  backgroundImage: isLoading
                    ? 'none' // Set background image to img_rectangle when loading
                    : 'url("/images/img_rectangle120.png")', // Remove background image when not loading
                  // backgroundSize: 'cover', // Adjust as needed
                  // backgroundPosition: 'center', // Adjust as needed
                }}
              >
                <div className="items-center justify-center" style={{ backgroundColor: isLoading ? 'rgba(216, 216, 216, 0.6)' : 'rgba(216, 216, 216, 0.6))' }}>

                  {!isLoading ? data && (

                    <div className={`grid-cols-1 gap-2 justify-center`}>

                      {data.map((item) => (
                        <div key={item} className="flex items-center justify-center ">
                          <div style={{ backgroundColor: '#F5F5F5' }} className="flex items-center justify-center">
                            <div className="w-full">

                              <div className={` p-3 rounded-lg grid grid-row-2 grid-flow-col w-full md:w-[700px] mt-5`}>

                                <div className="text-center">
                                  <span className="font-bold block text-[20px]">
                                    Day {item.day}
                                  </span>

                                  {(() => {
                                    // Get the current date
                                    const currentDate = new Date(receivedData.date);
                                    const updatedDate = new Date(currentDate.getTime());

                                    updatedDate.setDate(updatedDate.getDate() + item.day - 1);

                                    // Define the month names
                                    const monthNames = [
                                      "January", "February", "March",
                                      "April", "May", "June", "July",
                                      "August", "September", "October",
                                      "November", "December"
                                    ];

                                    // Format the date as "DD Month"
                                    const dayOfMonth = updatedDate.getDate();
                                    const startMonthString = monthNames[updatedDate.getMonth()];

                                    const formattedDate = `${dayOfMonth} ${startMonthString}`;

                                    return (

                                      <span style={{ color: '#008009' }} className="font-bold block">
                                        {item.date}
                                      </span>
                                    );
                                  })()}
                                </div>

                              </div>

                              <div style={{ marginLeft: 10 }} className="mt-5 #F5F5F5 w-full md:w-[700px] flex flex-col items-start">
                                <div className="flex items-center mb-2">
                                  <GiPathDistance color="#008009" size={25} className="rounded-lg w-5 h-5" alt="route" />
                                  <text style={{ color: '#008009', fontWeight: '800', marginLeft: 8 }} className="text-[22px]  ml-2">
                                    Transportation
                                  </text>
                                  <div className="flex" style={{ marginLeft: '30' }}>
                                    <a href={`https://kayak.com.my/in?a=kan_262812_573418&encoder=27_1&enc_cid=${creatorId}&lc=en&url=%2Fflights`} target="_blank" rel="noopener noreferrer">
                                      <BsAirplane color="#008009" size={25} className="rounded-lg w-5 h-5" alt="route" style={{ marginLeft: '20px', marginRight: '20px' }} />
                                    </a>
                                    <a href={`https://kayak.com.my/in?a=kan_262812_573418&encoder=27_1&enc_cid=${creatorId}&lc=en&url=%2Fcars`} target="_blank" rel="noopener noreferrer">
                                      <FaCar color="#008009" size={25} className="rounded-lg w-5 h-5" alt="route" style={{ marginLeft: '0px', marginRight: '20px' }} />
                                    </a>
                                    <a href="https://online.ktmb.com.my" target="_blank" rel="noopener noreferrer">

                                      <BsTrainFreightFront color="#008009" size={25} className="rounded-lg w-5 h-5" alt="route" style={{ marginLeft: '0px', marginRight: '20px' }} />
                                    </a>
                                    {baseURL === 'https://vm.epictravel.ai' || 'http://localhost:3000' ? (
                                      <a
                                        // onClick={() => {
                                        //   handleButtonClick(item.date);
                                        // }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <BiBus color="#008009" size={25} className="rounded-lg w-5 h-5" alt="route" />
                                      </a>
                                    ) : (
                                      <a href="https://gohub.com.my" target="_blank" rel="noopener noreferrer">
                                        <BiBus color="#008009" size={25} className="rounded-lg w-5 h-5" alt="route" />
                                      </a>
                                    )}
                                  </div>
                                </div>

                                <div className="flex items-center mb-2">
                                  <BsSun color="#008009" size={25} className="rounded-lg w-5 h-5" alt="route" />
                                  <text style={{ color: '#008009', fontWeight: '800', marginLeft: 8 }} className="text-[22px]  ml-2">
                                    Morning
                                  </text>
                                </div>

                                <div className="ml-2" style={{ display: 'flex', alignItems: 'center' }}>
                                  <div className="dotted-line"></div>
                                  <div style={{ marginLeft: '20px' }}>
                                    <text className="text-[10px]">
                                      <span style={{ fontSize: '16px', fontWeight: '450', fontStyle: 'italic', color: 'black' }}>
                                        {item.morningactivity && item.morningactivity.replace(item.morningplace, "")}{' '}
                                        <text className="text-[#008009] underline">
                                          <a
                                            href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.morningplace}, ${receivedData.message}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            {item.morningplace}
                                          </a>
                                        </text>. {item.mcomment}
                                      </span>
                                    </text>
                                  </div>

                                </div>
                                {data3 && data3.length > 0 && (
                                  <div>
                                    {(() => {
                                      const thumbnailIndex = findThumbnailURLIndex(data3, item.morningplace);
                                      const thumbnailURL = thumbnailIndex >= 0 ? data3[thumbnailIndex]?.thumbnailURL : '';
                                      const thumbnailURL1 = thumbnailIndex >= 0 ? data3[thumbnailIndex]?.webURL : '';

                                      if (thumbnailURL) {
                                        return (
                                          <div className="ml-2" style={{ display: 'flex' }}>
                                            <div style={{ marginLeft: 0, height: 180 }} className="dotted-line"></div>
                                            <a href={thumbnailURL1} target="_blank" rel="noopener noreferrer">

                                              <img
                                                className="rounded rounded-3xl drop-shadow-2xl"
                                                src={thumbnailURL}
                                                alt="Display"
                                                style={{ marginLeft: 20, width: '200px', height: '160px', marginTop: 5 }}
                                              />
                                            </a>
                                          </div>
                                        );
                                      } else {
                                        return null;
                                      }
                                    })()}
                                  </div>
                                )}

                              </div>


                              {/* <div style={{ marginLeft: 10 }} className=" mt-2   w-full md:w-[700px] flex flex-col items-start">

                                <div className="flex items-center mb-2">

                                  <GiKnifeFork
                                    color="#008009"
                                    size={25}
                                    className="rounded-lg w-5 h-5" // Set fixed width and height
                                    alt="route"
                                  />

                                  <text style={{ color: '#008009', ontWeight: '600' }} className="text-[22px]  ml-2 font-montserrat">
                                    Lunch-&nbsp;&nbsp;
                                    <text style={{ color: '#008009', ontWeight: '300', fontStyle: 'italic' }} className=' text-[18px] underline'>
                                      <a
                                        href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.lunch}, ${receivedData.message}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {item.lunch}
                                      </a>
                                    </text>
                                  </text>

                                </div>
                              </div> */}

                              <div style={{ marginLeft: 8, height: 20, marginLeft: 18 }} className="dotted-line"></div>

                              <div style={{ marginLeft: 10 }} className="mt-0   rounded-lg w-full md:w-[700px] flex flex-col items-start">
                                <div className="flex items-center mb-2">
                                  <IoPartlySunnyOutline
                                    color="#008009"
                                    size={25}
                                    className="rounded-lg w-5 h-5" // Set fixed width and height
                                    alt="route"
                                  />
                                  <text style={{ color: '#008009', fontWeight: '800', marginLeft: 10 }} className="text-[22px]  ml-2">
                                    Afternoon
                                  </text>
                                </div>
                                <div className="ml-2" style={{ display: 'flex', alignItems: 'center' }}>
                                  <div className="dotted-line"></div>
                                  <div style={{ marginLeft: '20px' }}>
                                    <text className="text-[10px]">
                                      <span style={{ fontSize: '16px', fontWeight: '450', fontStyle: 'italic', color: 'black' }}>
                                        {item.afternoonactivity && item.afternoonactivity.replace(item.afternoonplace, "")}
                                        <text className='text-[#008009] underline'> <a
                                          href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.afternoonplace}, ${receivedData.message}`}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          {item.afternoonplace}
                                        </a>

                                        </text>.  {item.acomment}

                                      </span>


                                    </text>
                                  </div>
                                </div>
                                {data3 && data3.length > 0 && (
                                  <div>
                                    {(() => {
                                      const thumbnailIndex = findThumbnailURLIndex1(data3, item.afternoonplace);
                                      const thumbnailURL = thumbnailIndex >= 0 ? data3[thumbnailIndex]?.thumbnailURL : '';
                                      const thumbnailURL1 = thumbnailIndex >= 0 ? data3[thumbnailIndex]?.webURL : '';

                                      if (thumbnailURL) {
                                        return (
                                          <div className="ml-2" style={{ display: 'flex' }}>
                                            <div style={{ marginLeft: 0, height: 180 }} className="dotted-line"></div>
                                            <a href={thumbnailURL1} target="_blank" rel="noopener noreferrer"></a>
                                            <img
                                              className="rounded rounded-3xl drop-shadow-2xl"
                                              src={thumbnailURL}
                                              alt="Display"
                                              style={{ marginLeft: 20, width: '200px', height: '160px', marginTop: 5 }}
                                            />
                                            <a />
                                          </div>
                                        );
                                      } else {
                                        return null;
                                      }
                                    })()}
                                  </div>
                                )}

                              </div>


                              {/* <div style={{ marginLeft: 10 }} className=" mt-0   w-full md:w-[700px] flex flex-col items-start">

                                <div className="flex items-center mb-2">

                                  <GiKnifeFork
                                    color="#008009"
                                    size={25}
                                    className="rounded-lg w-5 h-5" // Set fixed width and height
                                    alt="route"
                                  />

                                  <text style={{ color: '#008009', ontWeight: '600' }} className="text-[22px]  ml-2 font-montserrat">
                                    Dinner-&nbsp;&nbsp;
                                    <text style={{ color: '#008009', ontWeight: '300', fontStyle: 'italic' }} className=' text-[18px] underline'>
                                      <a
                                        href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.dinner}, ${receivedData.message}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {item.dinner}
                                      </a>
                                    </text>
                                  </text>

                                </div>
                              </div> */}


                              <div style={{ marginLeft: 8, height: 20, marginLeft: 18 }} className="dotted-line"></div>

                              <div style={{ marginLeft: 10 }} className="mt-0   w-full md:w-[700px] flex flex-col items-start">
                                <div className="flex items-center mb-2">
                                  <BiMoon
                                    color="#008009"
                                    size={25}
                                    className="rounded-lg w-5 h-5" // Set fixed width and height
                                    alt="route"
                                  />
                                  <text style={{ color: '#008009', fontWeight: '800', marginLeft: 10 }} className="text-[22px]  ml-2">
                                    Evening
                                  </text>
                                </div>

                                <div className="ml-2" style={{ display: 'flex', alignItems: 'center' }}>
                                  <div className="dotted-line"></div>
                                  <div style={{ marginLeft: '20px' }}>
                                    <text className="text-[10px]">

                                      <span style={{ fontSize: '16px', fontWeight: '450', fontStyle: 'italic', color: 'black' }}>

                                        {item.eveningactivity && item.eveningactivity.replace(item.eveningplace, "")}
                                        <text className='text-[#008009] underline'> <a
                                          href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.eveningplace}, ${receivedData.message}`}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          {item.eveningplace}
                                        </a>

                                        </text>.  {item.ecomment}

                                      </span>

                                    </text>
                                  </div>
                                </div>
                                {data3 && data3.length > 0 && (
                                  <div>
                                    {(() => {
                                      const thumbnailIndex = findThumbnailURLIndex2(data3, item.eveningplace);
                                      const thumbnailURL = thumbnailIndex >= 0 ? data3[thumbnailIndex]?.thumbnailURL : '';
                                      const thumbnailURL1 = thumbnailIndex >= 0 ? data3[thumbnailIndex]?.webURL : '';

                                      if (thumbnailURL) {
                                        return (
                                          <div className="ml-2" style={{ display: 'flex' }}>
                                            <div style={{ marginLeft: 0, height: 180 }} className="dotted-line"></div>
                                            <a href={thumbnailURL1} target="_blank" rel="noopener noreferrer">
                                              <img
                                                className="rounded rounded-3xl drop-shadow-2xl"
                                                src={thumbnailURL}
                                                alt="Display"
                                                style={{ marginLeft: 20, width: '200px', height: '160px', marginTop: 5 }}
                                              />
                                            </a>
                                          </div>
                                        );
                                      } else {
                                        return null;
                                      }
                                    })()}
                                  </div>
                                )}

                              </div>


                              <div style={{ marginLeft: 10 }} className=" mt-0   w-full md:w-[700px] flex flex-col items-start">

                                {(() => {
                                  // Get the current date
                                  const currentDate = new Date(receivedData.date);
                                  const updatedDate = new Date(currentDate.getTime());
                                  const updatedDate1 = new Date(currentDate.getTime());
                                  updatedDate.setDate(updatedDate.getDate() + item.day - 1);

                                  // Format the date as "YYYY-MM-DD"
                                  const year = updatedDate1.getFullYear();
                                  const month = String(updatedDate1.getMonth() + 1).padStart(2, '0');
                                  const day = String(updatedDate1.getDate()).padStart(2, '0');

                                  const year1 = updatedDate.getFullYear();
                                  const month1 = String(updatedDate.getMonth() + 1).padStart(2, '0');
                                  const day1 = String(updatedDate.getDate()).padStart(2, '0');

                                  const formattedDate1 = `${year}-${month}-${day}`;
                                  const formattedDate2 = `${year1}-${month1}-${day1}`;

                                  return (
                                    // <span style={{ color: '#008009' }} className="font-bold block font-semibold justify-center font-montserrat sm:text-[6px] md:text-[30px] lg:text-[6px]">
                                    //   &nbsp;&nbsp; {formattedDate}
                                    // </span>


                                    <div className="flex items-center mb-10">

                                      <GiBed
                                        color="#008009"
                                        size={25}
                                        className="rounded-lg w-5 h-5" // Set fixed width and height
                                        alt="route"
                                      />

                                      <text style={{ color: '#008009', ontWeight: '600' }} className="text-[22px]  ml-2 font-montserrat">
                                        Bedtime-&nbsp;&nbsp;
                                        <text style={{ color: '#008009', ontWeight: '300' }} className=' text-[18px] '>
                                          Hotels Deals in&nbsp;
                                        </text>
                                        <text style={{ color: '#008009', ontWeight: '300' }} className=' text-[18px] underline'>
                                          <a
                                            //http://kayak.com.my/in?a=kan_262812_573418&lc=en&url=%2Fhotels-dateless%2FPenang%2CMalaysia-c19799%2F1rooms%2F2adults
                                            //href={`https://www.kayak.com.my/hotels/${receivedData.message}/${formattedDate1}/${formattedDate2}?sort=distance_a`}

                                            href={`http://kayak.com.my/in?a=kan_262812_573418&enc_cid=${creatorId}&lc=en&url=%2Fhotels/${receivedData.message}/${formattedDate1}/${formattedDate2}?sort=distance_a`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            {receivedData.message}
                                          </a>
                                        </text>
                                      </text>

                                    </div>

                                  );
                                })()}

                              </div>

                            </div>
                          </div>
                        </div>

                      ))}

                      {/* <Footer1 className="bg-indigo_900 font-ptsans 2xl:mt-[104px] 3xl:mt-[124px] lg:mt-[73px] xl:mt-[92px] w-[100%]" /> */}

                    </div>

                  ) : (

                    <div className="h-[100%] w-[100%] mt-30 flex items-center justify-center flex-col"  >
                      <span style={{ fontSize: '20px', fontWeight: 'normal' }}>{text}</span>
                      <CircularProgress size={20} sx={{ color: 'black' }} />
                    </div>

                  )}

                </div>
              </div>
            </div>

            {isLoading && (
              <Img
                src="/images/img_rectangle120.png"
                className="h-screen object-cover w-full"
                alt="rectangle120"
              />
            )}

          </div>

          {/* end */}

        </div>


        {!isLoading || !data?.length && (
          <div className="h-[100%] w-[100%] flex items-center justify-center flex-col" style={{ backgroundColor: 'white', marginTop: '0px', padding: '20px' }}>
            {/* <span className="text-center mb-4" style={{ fontSize: '30px', fontWeight: 'bold',marginTop: '300px' }}>
                Oops, looks like the server is experiencing high demand. Please try again.
              </span>
              <Button
                className="flex items-center justify-center rounded-[10px] px-3 py-2"
                style={{ backgroundColor: '#00a19a', width: '320px', height: '60px' }}
                size="smIcn"
                onClick={handleNavigate689}
              >
                <text style={{ fontSize: '20px', fontWeight: 'bold' }} className="uppercase font-montserrat text-[25px] text-white">Regenerate itinerary</text>
              </Button> */}
          </div>
        )}

      </div>

    </>
  );
};

export default OverviewSave;

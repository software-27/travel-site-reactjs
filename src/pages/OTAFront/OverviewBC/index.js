import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, Input, Img, Button, Line, Row, Column } from "components";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import './App1.css';
import { IoPartlySunnyOutline } from 'react-icons/io5';
import { BiMoon } from 'react-icons/bi';
import { GiKnifeFork } from 'react-icons/gi';
import { GiBed } from 'react-icons/gi';
import Footer1 from "components/Footer/Footermain";
import { BsSun } from 'react-icons/bs';
import { GiPathDistance } from 'react-icons/gi';
import { BsAirplane } from 'react-icons/bs';
import { BsTrainFreightFront } from 'react-icons/bs';
import { BiBus } from 'react-icons/bi';
import HeaderOTA from 'components/Header/HeaderOTA/index';
import HeaderOTAMobile from "components/Header/HeaderOTAMobile/index";
import { FiCalendar, FiThumbsUp, FiMapPin } from 'react-icons/fi';
import { ImStarEmpty } from 'react-icons/im';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { BsCardChecklist, BsUmbrella } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { fetchData } from "redux/actions";
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";
import { useAuth } from "AuthContext";
import Icon from "@mdi/react";
import { mdiBookmarkOutline } from "@mdi/js";
import ManageContent from 'pages/Influencer/ManageContent/index';
import ContentSetting from 'components/ContentSetting/index';


const OverViewBC = () => {
  const items = Array.from({ length: 20 }, (_, index) => index + 1);
  const location = useLocation();
  // const receivedData = location.state;

  const [isPublished, setIsPublished] = useState(false);
  //const userId = localStorage.getItem("userId");

  const { setIsLoggedIn } = useAuth();

  const [myArray1, setMyArray1] = useState([]);
  const [datam, setDatam] = useState([]);

  var myArray = [];

  const isMobileView = window.matchMedia('(max-width: 768px)').matches;

  const messages = [
    "Hold up, we're putting together your travel plan...",
    "Figuring out the cities you'll hit...",
    "Sorting out the attractions for you to check out...",
    "Grabbing the travel routes for your journey...",
    "Fine-tuning your itinerary to make it even better...",
    "Hang tight while we make sure your trip is top-notch"
  ];

  const [text, setText] = useState(messages[0]);
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [grid, setGrid] = useState('grid-cols-1');

  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];


  // useEffect(() => {

  //   handleNavigate689();

  //   const timer = setInterval(() => {
  //     setIndex(prevIndex => {
  //       const newIndex = (prevIndex + 1) % messages.length;
  //       setText(messages[newIndex]);
  //     });
  //   }, 6000);

  //   // Clean up the interval on component unmount

  //   return () => {
  //     clearInterval(timer);

  //   };

  // }, []);


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



  const dispatch = useDispatch();

  // const state = useSelector((state) => state);
  // console.log("Full State: ", state);

  // const data = useSelector((state) => state.data.data);
  // console.log("data Overview: ", data);
  // const data1 = useSelector((state) => state.data.data1);
  // const data3 = useSelector((state) => state.data.data3);


  const loading = useSelector((state) => state.data.loading);

  const error = useSelector((state) => state.data.error);


  // *FETCH TRAVEL PLAN DATA BY TRAVEL PLAN ID (directed using state from previous page)*
  // Api V2
  const itineraryDetails = location.state?.itineraryDetails || null;
  const userItineraryActivity = location.state?.userItineraryActivity || null;
  const itineraryId = location.state?.travelPlanId || null;
  const day = location.state?.day || null;
  const title = location.state?.title || null;
  const userId = location.state?.userId || null;
  const locationImage = location.state?.location || null;
  const data3 = locationImage;
  console.log("Itinerary Details (All): ", itineraryDetails)
  console.log("Itinerary Details (Day): ", day)
  console.log("User Itinerary Activity: ", userItineraryActivity)
  console.log("User Itinerary Ttitle: ", title)
  console.log("USer Id: ", userId)


  // Api V1
  const itineraryDestination = location.state?.itineraryDestination || null;
  const destination = location.state?.destination || null;

  console.log("Destination ", destination)

  // bila dah ada data destination, days, date : tukar 
  const receivedData = {
    message: destination,
    days: day,
    date: new Date(),
    itineraryId: itineraryId,
  }

  // *ARRAGE THE ACTIVITIES INTO AN ITINERARY*

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

  // console.log(sortedGroupedByDay);

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


  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();

  const handleButtonClick = (date) => {
    if (isLoggedIn) {
      navigate("/bus-landing-page", { state: { destination, date } });
    } else {
      setIsPopup1Open(true);
    }
  };

  // function handleNavigate689() {
  //   const receivedData1 = {
  //     theme: receivedData.theme,
  //     message: receivedData.message,
  //     days: receivedData.days,
  //     date: receivedData.date,
  //     attractions: receivedData.attractions,
  //     interests: receivedData.interests,
  //   };

  //   try {

  //     if (loading) {
  //       //  alert("aaa")

  //     }
  //     else {
  //       dispatch(fetchData(receivedData1));
  //       console.log("itineraryId Data: ", itineraryId);

  //     }
  //   } catch (error) {
  //     // alert(error)
  //     console.error('An error occurred:', error);
  //   }

  //   console.log("Received Location: " + receivedData.message);
  //   console.log("Received userId: " + userId);
  //   console.log("Received Itinerary id: ", itineraryId);
  // }


  return (
    <>
      <div id="myElement" className="bg-[#EAEBEF] flex flex-col font-ptsans items-center justify-start mx-[auto] w-[100%]">

        {/* ${receivedData.days} */}

        {/*Mobile View*/}
        <div className="absolute visible lg:invisible lg:hidden">
          <div className="bg-[#EAEBEF] flex flex-col font-ptsans items-center justify-start mx-auto w-full">
            <HeaderOTAMobileEpic openPopup1={openPopup1} className="visible fixed overflow-hidden lg:invisible lg:hidden" />

            {/* <div className='absolute visible lg:invisible  bg-gray-200'> */}
            <div className="justify-between flex bg-white shadow-lg p-4 w-full">
              <Row className="grid grsid-row-2 grid-flow-col">
                <text className="font-montserrat ml-2 text-[50px] sm:text-[48px] md:text-[40px] xl:text-[40px]" style={{ color: '#45B9B4' }}>
                  {day} Days Trip To {receivedData.message}
                </text>
              </Row>
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

            <div className='font-montserrat h-[100%] w-[100%]' style={{ backgroundColor: loading ? '#fff' : '#fff' }}>
              <div className="flex items-center justify-center" style={{ backgroundColor: loading ? '#fff' : '#fff' }}>

                {!loading ? (
                  data && (
                    <div className={`grid grid-cols-1 md:grid-cols-1 gap-2`}>
                      {data.map((item, index) => (
                        <div key={item} className="flex items-center justify-center p-2">
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
                                    <a href={`https://kayak.com.my/in?a=kan_262812_573418&encoder=27_1&enc_cid=${userId}&lc=en&url=%2Fflights`} target="_blank" rel="noopener noreferrer">

                                      <BsAirplane color="#008009" size={50}

                                        className="rounded-lg w-10 h-10" alt="route" style={{ marginLeft: '20px', marginRight: '20px' }} />
                                    </a>
                                    <a href="https://online.ktmb.com.my" target="_blank" rel="noopener noreferrer">

                                      <BsTrainFreightFront color="#008009" size={50}
                                        className="rounded-lg w-10 h-10" alt="route" style={{ marginLeft: '0px', marginRight: '20px' }} />
                                    </a>
                                    {/* <a href="https://gohub.com.my" target="_blank" rel="noopener noreferrer"> */}
                                    <a
                                      onClick={() => {
                                        handleButtonClick();
                                      }}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <BiBus color="#008009" size={50}
                                        className="rounded-lg w-10 h-10" alt="route" />
                                    </a>
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

                                        </text>,  {item.mcomment}
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


                                        </text>,  {item.acomment}
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


                                        </text>,
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
                                            href={`http://kayak.com.my/in?a=kan_262812_573418&enc_cid=${userId}&lc=en&url=%2Fhotels/${receivedData.message}/${formattedDate1}/${formattedDate2}?sort=distance_a`}
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
                !loading || !data?.length && (
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
              <div className=" w-[50%] text-right">
                {/* <button class="mr-1 bg-white  rounded-xl border border-[#45B9B4] font-bold py-1 px-2 inline-flex items-center"
                  onClick={openPopup3}
                >
                  <Icon
                    path={mdiBookmarkOutline}
                    size={0.8}
                    className="mr-1 text-[#45B9B4]"
                  />
                  <span className="text-[#45B9B4] font-montserrat">Save Travel Plan</span>
                </button> */}
              </div>
              <ContentSetting showContentSetting={isShowContentSetting} closePopup3={closePopup3} />

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


          {/* start mobile */}
          <div className="w-full" >

            {/* <Img
              src="images/img_rectangle120.png"
              className="h-screen object-cover w-full"
              alt="rectangle120"
            /> */}

            <div className="top-0 left-0 w-full items-center justify-center">

              <div className='font-montserrat  w-[100%]'
                style={{
                  backgroundColor: loading ? 'rgba(216, 216, 216, 0.6)' : 'rgba(216, 216, 216, 0.6)',
                  backgroundImage: loading
                    ? 'none' // Set background image to img_rectangle when loading
                    : 'url("images/img_rectangle120.png")', // Remove background image when not loading
                  // backgroundSize: 'cover', // Adjust as needed
                  // backgroundPosition: 'center', // Adjust as needed
                }}
              >
                <div className="items-center justify-center" style={{ backgroundColor: loading ? 'rgba(216, 216, 216, 0.6)' : 'rgba(216, 216, 216, 0.6))' }}>

                  {!loading ? data && (

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
                                    <a href={`https://kayak.com.my/in?a=kan_262812_573418&encoder=27_1&enc_cid=${userId}&lc=en&url=%2Fflights`} target="_blank" rel="noopener noreferrer">

                                      <BsAirplane color="#008009" size={25} className="rounded-lg w-5 h-5" alt="route" style={{ marginLeft: '20px', marginRight: '20px' }} />
                                    </a>
                                    <a href="https://online.ktmb.com.my" target="_blank" rel="noopener noreferrer">

                                      <BsTrainFreightFront color="#008009" size={25} className="rounded-lg w-5 h-5" alt="route" style={{ marginLeft: '0px', marginRight: '20px' }} />
                                    </a>
                                    {/* <a href="https://gohub.com.my" target="_blank" rel="noopener noreferrer"> */}
                                    <a
                                      onClick={() => {
                                        handleButtonClick();
                                      }}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <BiBus color="#008009" size={25} className="rounded-lg w-5 h-5" alt="route" />
                                    </a>
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
                                        </text>, {item.mcomment}
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

                                        </text>,  {item.acomment}

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

                                        </text>,  {item.ecomment}

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


                                    <div className="flex items-center mb-2">

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

                                            href={`http://kayak.com.my/in?a=kan_262812_573418&enc_cid=${userId}&lc=en&url=%2Fhotels/${receivedData.message}/${formattedDate1}/${formattedDate2}?sort=distance_a`}
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

            {loading && (
              <Img
                src="images/img_rectangle120.png"
                className="h-screen object-cover w-full"
                alt="rectangle120"
              />
            )}

          </div>

          {/* end */}

        </div>


        {!loading || !data?.length && (
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

export default OverViewBC;

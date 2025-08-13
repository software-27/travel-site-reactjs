import React, { useState, useEffect, } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {Img, Button, Row } from "components";
import { useNavigate,Link  } from "react-router-dom";
import { useLocation} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import './App1.css';
import { IoPartlySunnyOutline } from 'react-icons/io5';
import { BiMoon, BiBus } from 'react-icons/bi';
import { GiKnifeFork,GiPathDistance,GiBed } from 'react-icons/gi';
import { BsSun, BsAirplane, BsTrainFreightFront } from 'react-icons/bs';
import HeaderOTA from 'components/Header/HeaderOTA/index';
import HeaderOTAMobile from "components/Header/HeaderOTAMobile/index";
import { fetchData } from "redux/actions";

const OverViewCH = () => {

  const items = Array.from({ length: 20 }, (_, index) => index + 1);
  const location = useLocation();
  const receivedData = location.state;

  const [ltext, setltext] = useState('Hold on, generating your itenaries');

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
  useEffect(() => {
   
    handleNavigate689();


   
    const timer = setInterval(() => {
      // const newIndex = (prevIndex + 1) % messages.length;
      // setText(messages[newIndex]);
      setIndex(prevIndex => {
       const newIndex = (prevIndex + 1) % messages.length;
         setText(messages[newIndex]);
 

      });
    }, 6000);
  
    // Clean up the interval on component unmount
   
    return () => {
      clearInterval(timer);

    };

  }, []);
 


  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const data1 = useSelector((state) => state.data.data1);
 const data3 = useSelector((state) => state.data.data3);


  const loading = useSelector((state) => state.data.loading);
  
  const error = useSelector((state) => state.data.error);

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
  
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);
  const [showModal4, setShowModal4] = React.useState(false);
  const [showModal5, setShowModal5] = React.useState(false);
  const [showModal6, setShowModal6] = React.useState(false);

  const data22 = [
    { 
      
        day: 'Day 1',date:'4 September', 
        
        morningactivity: 'Visit the' ,
        morningplace:'Butterfly Farm',
        mcomment:', Explore the Butterfly Farm and take pictures of the beautiful butterflies.',
        mimage:require('../../../assets/images/butterfly.jpg'),
        
        lunch:'Restoran Nasi Kandar',
        
        
        afternoonactivity:'Visit the Tea Plantation',
        afternoonplace:'Cameron Bharat Tea Plantation',
        acomment: ', Take a tour of the tea plantation and learn about the tea-making process.',
        aimage:require('../../../assets/images/tea.jpg'),
        
        eveningplace:'Cameron Night Market',
        eveningactivity:'Visit the Night Market',
        ecomment:'Explore the night market and buy some souvenirs and local snacks.',
        eimage:require('../../../assets/images/pm.jpg'),
        
        dinner:'Restoran Nasi Ayam',
      },
  
      { 
        day: 'Day 2',
        date:'5 September', 
        
        morningactivity: 'Visit the Strawberry Farm' ,
        morningplace:'Cameron Bharat Strawberry Farm',
        mcomment:' Take a tour of the Rose Garden and admire the beautiful roses.',
        mimage:require('../../../assets/images/talgi.jpg'),

        lunch:'Restoran Nasi Lemak',
        
        afternoonactivity:'Visit the Rose Garden',  
        afternoonplace:'Cameron Bharat Rose Garden',
        acomment: 'Take a tour of the Rose Garden and admire the beautiful roses',
        aimage:require('../../../assets/images/rose.jpg'),
        
        eveningplace:'Cameron Bharat Cactus Valley',
        eveningactivity:'Visit the Cactus Valley ',
        ecomment:' Explore the Cactus Valley and take pictures with the beautiful cacti.',
        eimage:require('../../../assets/images/cactus.jpg'),

        dinner:'Restoran Nasi Goreng',
      },
  
      { 
        day: 'Day 3',
        date:'6 September', 
        morningactivity:'Visit the', 
        morningplace:'Cameron Bharat Lavender Garden',
        mcomment: 'Explore the Lavender Garden and take picture of the beautiful lavenders.',
        mimage:require('../../../assets/images/lavender.jpg'),

        lunch:'Restoran Nasi Tomato',
        
        afternoonactivity:'Visit the ', 
        afternoonplace:'Cameron Bharat Bee Farm',
        acomment: 'Take a tour of the Bee Farm and learn about the bee-keeping process',
        aimage:require('../../../assets/images/bee.jpg'),
        
        eveningplace:'Visit the BOH Tea Plantation',
        eveningactivity:'Cameron Bharat BOH Tea PLantation ',
        ecomment:' Explore the BOH Tea Plantation and learn about the tea-making process.',
        eimage:require('../../../assets/images/boh.jpg'),

        dinner:'Restoran Nasi Ayam Percik',
      },
      { 
        day: 'Day 4',date:'7 September', 
        morningactivity:'Visit the Orchid Garden', 
        morningplace:'Cameron Bharat Orchid Garden',
        mcomment: 'Explore the Orchid Garden and take pictures of the beautiful orchids.',
        mimage:require('../../../assets/images/orchid.JPG'),

        lunch:'Restoran Nasi Kerabu',
        
        afternoonactivity:'Visit the Sam Poh ', 
        afternoonplace:'Cameron Bharat Sam Poh Temple',
        acomment: 'Take a tour of the Sam Poh Temple and learn about the Buddhist culture.',
        aimage:require('../../../assets/images/sampoh.jpg'),
        
        eveningplace:'Visit the Time Tunnel Museum ',
        eveningactivity:'Cameron Bharat Time Tunnel Museum ',
        ecomment:', Explore the Time Tunnel Museum and learn about the history of Cameron Highland.',
        eimage:require('../../../assets/images/tt.jpg'),
        
        dinner:'Restoran Nasi Dagang',
      },

  ];

  let gridClass = "";




function handleNavigate689() {

 
  const  receivedData1 = {
     theme: receivedData.theme,
     message: receivedData.message,
     days: receivedData.days,
     date: receivedData.date,
   };
  
   try {
    
  if (loading){
  //  alert("aaa")
     
  }
  else{
    dispatch(fetchData(receivedData1));

  }
    } catch (error) {
     // alert(error)
      console.error('An error occurred:', error);
    }
    


  
    }
  return (
    <>
  
      <div id="myElement" className="bg-[#EAEBEF] flex flex-col font-ptsans items-center justify-start mx-[auto] w-[100%]">

 {/*mobile View*/}

 <div className="absolute visible lg:invisible lg:hidden bg-[#EAEBEF] flex flex-col font-ptsans items-center justify-start mx-[auto] w-[100%]">
 <HeaderOTAMobile className="visible lg:invisible lg:hidden"></HeaderOTAMobile> 
{/* <div className='absolute visible lg:invisible  bg-gray-200'> */}
<div className="justify-between flex bg-white shadow-lg p-4 w-full">
  <Row className="grid grid-row-2 grid-flow-col">
    <text className="font-montserrat ml-2 text-[50px] sm:text-[48px] md:text-[40px] xl:text-[40px]" style={{ color: '#45B9B4' }}>
      {receivedData.days} Days Trip To {receivedData.message}
    </text>
    {/* <Img
      src="images/edit.svg"
      className="common-pointer h-[25px] sm:h-[20px] md:h-[25px] xl:h-[25px] md:ml-[0] sm:ml-[0] xl:ml-[10px] ml-[10px] object-cover md:w-[100%] sm:w-[100%] xl:w-[25px] w-[25px]"
      alt="edit"
    /> */}
  </Row>
</div>



<div className="place-items-center grid bg-white shadow-inner p-4 w-full"  >
  <div>
    <text
      className="font-montserrat common-pointer font-bold border-b border-b-2 border-b-[#6392F9] text-[#6392F9] p-3 md:text-[30px] xl:text-[30px]"
      onClick={() => {
        
        const dataToPass = {
          message: receivedData.message,
          days: receivedData.days,
          theme: receivedData.theme,
          date: receivedData.date
        };
        navigate('/ota1', { state: dataToPass });
      }}
    >
      Overview
    </text>
    <text
  className={`font-montserrat common-pointer ml-10 sm:ml-4 md:ml-6 lg:ml-10 hover:border-b hover:border-b-2 hover:border-b-[#6392F9] hover:text-[#6392F9] p-3 md:text-[30px] xl:text-[30px] ${
    data22?.length > 0 ? 'cursor-pointer' : ''
  }`}
  onClick={() => {
    if (!data22?.length) {

      
     
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
</text>

  </div>
</div>

<div className='font-montserrat h-[100%] w-[100%]' style={{ backgroundColor: loading ? '#fff' : '#fff' }}>
  <div className="flex items-center justify-center" style={{ backgroundColor: loading ? '#fff' : '#fff' }}>
   


    
    {!loading ? (
      data22 && (
        <div className={`grid grid-cols-1 md:grid-cols-1 gap-2`}>
          {data22.map((item,index) => (
            <div key={item} className="flex items-center justify-center p-2">
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <div
                    className={`bg-white p-3 mt-6 rounded-2xl grid grid-row-2 grid-flow-col w-full md:w-[750px] h-[70px]`}
                  >
                   



                   <div className="">
  <span className="font-semibold justify-center font-montserrat sm:text-[8px] md:text-[60px] lg:text-[9px]">
    Day {item.day}
  </span>

  {(() => {
    // Get the current date
    const currentDate = new Date(receivedData.date);
    const updatedDate = new Date(currentDate.getTime());
   
    updatedDate.setDate(updatedDate.getDate() + item.day- 1);
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

    return (
      
     receivedData.days !== null ? (
        <span style={{ color: '#008009' }} className="font-bold block font-semibold justify-center font-montserrat sm:text-[6px] md:text-[30px] lg:text-[6px]">
          &nbsp;&nbsp; {formattedDate}
        </span>
      ) : null
    );
  })()}
  {/* End of added code */}
</div>

          
        
                  </div>
                  <div className="flex items-center mb-2 mt-0">
                    <GiPathDistance 
                      color="#008009"  
                      size={50}
                      className="rounded-lg w-10 h-10" 
                      alt="route" 
                    />
                    <text 
                      style={{  color: '#008009',marginLeft:11}} 
                      className="text-[37px] font-bold ml-2 font-montserrat"
                    >
                      Transportation
                    </text>
                    <div 
                      className="flex" 
                      style={{ marginLeft: '30' }}>
                      
                      <a 
                        href="https://kayak.com.my/in?a=kan_262812_573418&lc=en&url=%2Fflights" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >

                        <BsAirplane   
                          color="#008009"  
                          size={50}
                          className="rounded-lg w-10 h-10" 
                          alt="route" 
                          style={{ marginLeft: '20px', marginRight: '20px' }} 
                        />
                      </a>
                      <a href="https://online.ktmb.com.my" target="_blank" rel="noopener noreferrer">
                        <BsTrainFreightFront 
                          color="#008009"  
                          size={50}
                          className="rounded-lg w-10 h-10" 
                          alt="route" 
                          style={{ marginLeft: '0px', marginRight: '20px' }}
                        />
                      </a>
                      <a 
                        href="https://gohub.com.my" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <BiBus 
                          color="#008009"  
                          size={50}
                          className="rounded-lg w-10 h-10" 
                          alt="route" 
                        />
                      </a>
                    </div>
                  </div>
                  <div className="mt-20  w-full md:w-[850px] flex flex-col items-start ">
                    <div className="flex items-center mb-2 mt-0 ">
                      <BsSun
                      color="#008009"
                        size={50}
                        className="rounded-lg w-10 h-10" // Set fixed width and height
                        alt="route"
                      />
                      <text style={{  color: '#008009',marginLeft:11}} className="text-[37px] font-bold ml-2 font-montserrat">
                      Morning
                      </text>
                    </div>
                    <div className="ml-4 mt-4" style={{ display: 'flex', alignItems: 'center' }}>
    <div className="dotted-line1"></div>
    <div style ={{marginLeft: '35px', }}>
    
                   
                        <text className="text-black font-montserrat">
                          <span style={{ fontSize: '37px',  fontWeight: '450' }}>
                            {item.morningactivity && item.morningactivity.replace(item.morningplace, "")} <text className='text-[#008009] underline'>
                               <a>
                              {item.morningplace}
                              </a>
                              
                              </text>, 
                              {item.mcomment}
                            
                          </span>
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

                 
                  <div style={{marginLeft:10 }} className=" mt-2   w-full md:w-[700px] flex flex-col items-start">

<div className="flex items-center mb-2">

  <GiKnifeFork
  style={{marginLeft:-10 }}
    color="#008009"
    size={50}
    className="rounded-lg w-10 h-10" // Set fixed width and height
    alt="route"
  />
 
  <text style={{ color: '#008009', ontWeight: '600' }} className="text-[37px]  ml-2 font-montserrat">
    Lunch-&nbsp;&nbsp;
    <text  style={{ color: '#008009', ontWeight: '450' }}className=' text-[37px] underline'>
      <a
        href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text="${item.lunch}", ${receivedData.message}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.lunch}
      </a>
    </text>
  </text>
  
</div>
</div>




<div style={{marginLeft:8,height:30 ,marginLeft:18}}className="dotted-line1"></div>




<div className="mt-0  w-full md:w-[850px] flex flex-col items-start ">
                    <div className="flex items-center mb-2 mt-4">
                      <IoPartlySunnyOutline
                      color="#008009"
                        size={50}
                        className="rounded-lg w-10 h-10" // Set fixed width and height
                        alt="route"
                      />
                      <text style={{  color: '#008009',marginLeft:11 }} className="text-[37px] font-bold ml-2 font-montserrat">
                      Afternoon
                      </text>
                    </div>
                    <div className="ml-4 mt-4" style={{ display: 'flex', alignItems: 'center' }}>
    <div className="dotted-line1"></div>
    <div style ={{marginLeft: '35px'}}>
                        <text className="text-black font-montserrat">
                          <span style={{ fontSize: '37px',  fontWeight: '450' }}>
                            {/* <a
                              href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.morningplace}, ${receivedData.message}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            > */}
                             {  item.afternoonactivity && item.afternoonactivity.replace(item.afternoonplace, "")} <text className='text-[#008009] underline'> <a
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

                  <div style={{marginLeft:10 }} className=" mt-2   w-full md:w-[700px] flex flex-col items-start">

<div className="flex items-center mb-2">

  <GiKnifeFork
  style={{marginLeft:-10 }}
    color="#008009"
    size={50}
    className="rounded-lg w-10 h-10" // Set fixed width and height
    alt="route"
  />
 
  <text style={{ color: '#008009', ontWeight: '600' }} className="text-[37px]  ml-2 font-montserrat">
    Dinner-&nbsp;&nbsp;
    <text  style={{ color: '#008009', ontWeight: '450' }}className=' text-[37px] underline'>
      <a
        href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.dinner}, ${receivedData.message}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.lunch}
      </a>
    </text>
  </text>
  
</div>
</div>

<div className="mt-0  w-full md:w-[850px] flex flex-col items-start ">
                    <div className="flex items-center mb-2 mt-4">
                      <BiMoon
                      color="#008009"
                        size={50}
                        className="rounded-lg w-10 h-10" // Set fixed width and height
                        alt="route"
                      />
                      <text style={{  color: '#008009' ,marginLeft:11}} className="text-[37px] font-bold ml-2 font-montserrat">
                      Evening
                      </text>
                    </div>
                    <div className="ml-4 mt-4" style={{ display: 'flex', alignItems: 'center' }}>
    <div className="dotted-line1"></div>
    <div style ={{marginLeft: '35px'}}>
                        <text className="text-black font-montserrat">
                          <span style={{ fontSize: '37px',  fontWeight: '450' }}>
                            {/* <a
                              href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.morningplace}, ${receivedData.message}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            > */}
                         
                            { item.eveningactivity && item.eveningactivity.replace(item.eveningplace, "")}
                            
                             <text className='text-[#008009] underline'> <a
                              href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.eveningplace}, ${receivedData.message}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                             {item.eveningplace}
                              </a>
                      
                      
                      </text>,  {item.ecomment}{findThumbnailURLIndex2(data3, item.eveningplace)}
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



                  <div style={{marginLeft:10 }} className=" mt-0   w-full md:w-[700px] flex flex-col items-start">
 

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

<text  style={{ color: '#008009', ontWeight: '300' }}className=' text-[25px] '>
 Hotels Deals in&nbsp;
</text>
  <text  style={{ color: '#008009', ontWeight: '300' }}className=' text-[25px] underline'>
    <a

      href={`https://www.kayak.com.my/hotels/${receivedData.message}/${formattedDate1}/${formattedDate2}?sort=distance_a`}
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
  {/* End of added code */}
</div>


                  {/* <div   style={{marginLeft:10 }} className=" mt-0   w-full md:w-[700px] flex flex-col items-start">

  <div className="flex items-center mb-2">
  
    <GiBed
      color="#008009"
      size={50}
      className="rounded-lg w-10 h-10" // Set fixed width and height
      alt="route"
    />
   
    <text style={{ color: '#008009', ontWeight: '600' }} className="text-[37px]  ml-2 font-montserrat">
    Bedtime-&nbsp;&nbsp;

    <text  style={{ color: '#008009', ontWeight: '300' }}className=' text-[20px] '>
     Hotels Deals in&nbsp;
</text>
      <text  style={{ color: '#008009', ontWeight: '300' }}className=' text-[20px] underline'>
        <a

          href={`https://www.kayak.com.my/hotels/${receivedData.message}/2023-06-27/2023-07-01?sort=distance_a`}
          target="_blank"
          rel="noopener noreferrer"
        >
           {receivedData.message}
        </a>
      </text>
    </text>
    
  </div>
</div> */}
                  
                
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


        </div>

 {/*Web View*/}

 <div className="absolute invisible lg:visible bg-[#EAEBEF] flex flex-col font-ptsans items-center justify-start mx-[auto] w-[100%]">
 <HeaderOTA />

 <div className="justify-between flex bg-white shadow-lg p-4 w-full" style={{ backgroundColor: '#F5F5F5' }}>
  <Row className="grid grid-row-2 grid-flow-col">
    <text className="font-montserrat ml-2 text-[20px] sm:text-[18px] md:text-[20px] xl:text-[20px]" style={{ color: '#45B9B4' }}>
      {receivedData.days} Days Trip To {receivedData.message}
    </text>
  </Row>
</div>

<div className="place-items-center grid bg-white shadow-inner p-4 w-full" style={{ backgroundColor: '#F5F5F5' }}>
  <div>
    <text
      className="font-montserrat common-pointer font-bold border-b border-b-2 border-b-[#6392F9] text-[#6392F9] p-3"
      onClick={() => {
        const dataToPass = {
          message: receivedData.message,
          days: receivedData.days,
          theme: receivedData.theme,
          date: receivedData.date,
        };
        navigate('/och', { state: dataToPass });
      }}
    >
      Overview
    </text>
    <text
      className="disabled font-montserrat cursor-not-allowed ml-10 sm:ml-4 md:ml-6 lg:ml-10 p-3"
      onClick={() => {

        if( !data22?.length ){
          
        }
        else{
          const dataToPass = {
            message: receivedData.message,
            days: receivedData.days,
            theme: receivedData.theme,
            date: receivedData.date,
          };
          navigate('/ota2', { state: dataToPass });
          
        }
       
      }}>
      Editable View
    </text>
  </div>
</div>
<div className="w-full relative">

  <Img
    src="images/img_rectangle120.png"
    className="h-fit object-cover w-full"
  />

  <div className="absolute top-0 left-0 w-full  items-center justify-center">

<div className='font-montserrat  w-[100%]' style={{ backgroundColor:loading? 'rgba(216, 216, 216, 0.6)' : 'rgba(216, 216, 216, 0.6)',}}>
  <div className=" items-center justify-center" style={{ backgroundColor:loading? 'rgba(216, 216, 216, 0.6)' : 'rgba(216, 216, 216, 0.6))'}}>
    {!loading ? data22 &&(
      
<div   className={`grid-cols-1 gap-2 justify-center`}> 
      
        {data22.map((item) => (
          <div  key={item} className="flex items-center justify-center ">
             <div style={{ backgroundColor: '#F5F5F5'}} className="flex items-center justify-center">
            <div className="w-full">
            <div  className={` p-3 mt-4 rounded-lg grid grid-row-2 grid-flow-col w-full md:w-[700px]`}>

              <div className="text-center">
                <span className="font-bold justify-center block text-[20px]">
                  {item.day}
                </span>
                <span style={{ color: '#008009' }} className="font-bold block font-semibold justify-center font-montserrat sm:text-[6px] md:text-[6px] lg:text-[14px]">
                  {item.date}
                </span>
              </div>
            </div>
    <div style={{marginLeft:10 }} className="mt-5 #F5F5F5 w-full md:w-[700px] flex flex-col items-start">
    <div className="flex items-center my-6">
        <GiPathDistance color="#008009" size={25} className="rounded-lg w-5 h-5" alt="route" />
          <text style={{ color: '#008009',fontWeight: '800',marginLeft:8 }} className="text-[22px]  ml-2">
            Transportation
          </text>
          <div className="flex" style={{ marginLeft: '30' }}>
            <a href="https://kayak.com.my/in?a=kan_262812_573418&lc=en&url=%2Fflights" target="_blank" rel="noopener noreferrer">

              <BsAirplane color="#008009" size={25} className="rounded-lg w-5 h-5" alt="route" style={{ marginLeft: '20px', marginRight: '20px' }} />
            </a>
            <a href="https://online.ktmb.com.my" target="_blank" rel="noopener noreferrer">
              <BsTrainFreightFront color="#008009" size={25} className="rounded-lg w-5 h-5" alt="route" style={{ marginLeft: '0px', marginRight: '20px' }}/>
            </a>
            <a href="https://gohub.com.my" target="_blank" rel="noopener noreferrer">
              <BiBus color="#008009" size={25} className="rounded-lg w-5 h-5" alt="route" />
            </a>
          </div>
        </div>
  <div className="flex items-center mb-2">
    <BsSun color="#008009" size={25} className="rounded-lg w-5 h-5" alt="route" />
    <text style={{ color: '#008009',fontWeight: '800',marginLeft:8 }} className="text-[22px]  ml-2">
      Morning
    </text>
  </div>
  <div  className="ml-2" style={{ display: 'flex', alignItems: 'center' }}>
    <div className="dotted-line"></div>
    <div style ={{marginLeft: '20px'}}>
      <text className="text-[10px]">
        <span style={{ fontSize: '16px', fontWeight: '450',fontStyle: 'italic', color: 'black'}}>
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
  <img className="mt-4 ml-6 mb-4 rounded rounded-3xl drop-shadow-2xl w-full" src={item.mimage} alt="Display"style={{ width: '200px', height: '160px' }} />
</div>

<div style={{marginLeft:8,height:20 ,marginLeft:18}} className="dotted-line"></div>

<div style={{marginLeft:10 }} className=" mt-4   w-full md:w-[700px] flex flex-col items-start">

  <div className="flex items-center mb-4">
  
    <GiKnifeFork
      color="#008009"
      size={25}
      className="rounded-lg w-5 h-5" // Set fixed width and height
      alt="route"
    />
   
    <text style={{ color: '#008009', ontWeight: '600' }} className="text-[22px]  ml-2 font-montserrat">
      Lunch-&nbsp;&nbsp;
      <text  style={{ color: '#008009', ontWeight: '300'  ,fontStyle: 'italic' }}className=' text-[18px] underline'>
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
</div>




<div style={{marginLeft:8,height:40 ,marginLeft:18}} className="dotted-line"></div>

<div style={{marginLeft:10 }} className="mt-0   rounded-lg w-full md:w-[700px] flex flex-col items-start">
  <div className="flex items-center mb-2">
    <IoPartlySunnyOutline
    color="#008009"
      size={25}
      className="rounded-lg w-5 h-5" // Set fixed width and height
      alt="route"
    />
    <text style={{  color: '#008009',fontWeight: '800',marginLeft:10 }} className="text-[22px]  ml-2">
      Afternoon
    </text>
  </div>
  <div className="ml-2" style={{ display: 'flex', alignItems: 'center' }}>
    <div className="dotted-line"></div>
    <div style ={{marginLeft: '20px'}}>
      <text className="text-[10px]">
      <span style={{ fontSize: '16px', fontWeight: '450',fontStyle: 'italic', color: 'black' }}>
        {item.afternoonactivity && item.afternoonactivity.replace(item.afternoonplace, "")}
          <text 
            className='text-[#008009] underline'> 
            <a
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
  <img className="mt-4 ml-6 mb-4 rounded rounded-3xl drop-shadow-2xl w-full" src={item.aimage} alt="Display"style={{ width: '200px', height: '160px' }} />
</div>

<div style={{marginLeft:8,height:20,marginLeft:18}}className="dotted-line"></div>

<div style={{marginLeft:10 }} className=" mt-0   w-full md:w-[700px] flex flex-col items-start">

  <div className="flex items-center mb-2">
  
    <GiKnifeFork
      color="#008009"
      size={25}
      className="rounded-lg w-5 h-5" // Set fixed width and height
      alt="route"
    />
   
    <text style={{ color: '#008009', ontWeight: '600' }} className="text-[22px]  ml-2 font-montserrat">
      Dinner-&nbsp;&nbsp;
      <text  style={{ color: '#008009', ontWeight: '300',fontStyle: 'italic' }}className=' text-[18px] underline'>
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
</div>


<div style={{marginLeft:8,height:40,marginLeft:18}}className="dotted-line"></div>

<div style={{marginLeft:10 }} className="mt-0   w-full md:w-[700px] flex flex-col items-start">
  <div className="flex items-center mb-2">
    <BiMoon
    color="#008009"
      size={25}
      className="rounded-lg w-5 h-5" // Set fixed width and height
      alt="route"
    />
    <text style={{  color: '#008009',fontWeight: '800', marginLeft:10 }} className="text-[22px]  ml-2">
    Evening
    </text>
  </div>
  <div className="ml-2" style={{ display: 'flex', alignItems: 'center' }}>
    <div className="dotted-line"></div>
    <div style ={{marginLeft: '20px'}}>
      <text className="text-[10px]">
        

   

      <span style={{ fontSize: '16px', fontWeight: '450',fontStyle: 'italic', color: 'black'  }}>
                            
                            
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
  <img className="mt-4 ml-6 mb-4 rounded rounded-3xl drop-shadow-2xl w-full" src={item.eimage} alt="Display"style={{ width: '200px', height: '160px' }} />
</div>


<div style={{marginLeft:8,height:20,marginLeft:18}}className="dotted-line"></div> 

<div style={{marginLeft:10 }} className=" mt-0 w-full md:w-[700px] flex flex-col items-start">
 

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
     <text  style={{ color: '#008009', ontWeight: '300' }}className=' text-[18px] '>
     Hotels Deals in&nbsp;
 </text>
       <text  style={{ color: '#008009', ontWeight: '300' }}className=' text-[18px] underline'>
       <a

     href={`https://www.kayak.com.my/hotels/${receivedData.message}/${formattedDate1}/${formattedDate2}?sort=distance_a`}
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
 {/* End of added code */}
</div>
              </div>
              </div>
            </div>
          ))}
            </div>
            
            
            
            ) : (
             
              <div className="h-[100%] w-[100%] mt-30 flex items-center justify-center flex-col"  >
                
                <span style={{ fontSize: '20px',fontWeight: 'normal' }}>{text}</span>
                
                
             
                
    <CircularProgress size={20} sx={{ color: 'black' }} /></div>
            )}

          </div>
        </div>
          </div>
          </div>
      </div>
      { !loading || !data?.length && (
    <div className="h-[100%] w-[100%] flex items-center justify-center flex-col" style={{ backgroundColor: 'white', marginTop: '0px', padding: '20px' }}>
      <span className="text-center mb-4" style={{ fontSize: '30px', fontWeight: 'bold',marginTop: '300px' }}>
        Oops, looks like the server is experiencing high demand. Please try again.
      </span>
      <Button
        className="flex items-center justify-center rounded-[10px] px-3 py-2"
        style={{ backgroundColor: '#00a19a', width: '320px', height: '60px' }}
        size="smIcn"
        onClick={handleNavigate689}
      >
        <text style={{ fontSize: '20px', fontWeight: 'bold' }} className="uppercase font-montserrat text-[25px] text-white">Regenerate itinerary</text>
      </Button>
    </div>
  )
}

      </div>


    </>
  );
};

export default OverViewCH;

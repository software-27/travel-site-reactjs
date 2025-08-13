import React, { useState, useEffect,useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Text, Input, Img, Button, Line, Row, Column } from "components";
import { useNavigate,Link  } from "react-router-dom";
import { useLocation} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import './App1.css';
import { IoPartlySunnyOutline } from 'react-icons/io5';
import { BiMoon } from 'react-icons/bi';

import { GiKnifeFork } from 'react-icons/gi';

import { BsSun } from 'react-icons/bs';
import HeaderOTA from 'components/Header/HeaderOTA/index';
import HeaderOTAMobile from "components/Header/HeaderOTAMobile/index";
import {FiCalendar, FiThumbsUp, FiMapPin} from 'react-icons/fi';
import {ImStarEmpty} from 'react-icons/im';
import {FaUmbrellaBeach} from 'react-icons/fa';
import {BsCardChecklist, BsUmbrella} from 'react-icons/bs';
import { fetchData } from "redux/actions";
const DIYOverviewPage = () => {
  const items = Array.from({ length: 20 }, (_, index) => index + 1);
  const location = useLocation();
  const receivedData = location.state;
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

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


  // useEffect(() => {
  //   if (receivedData.days === 1) {
  //     setGrid("grid-cols-1");
  //   } else if (receivedData.days === 2) {
  //     setGrid("grid-cols-2");
  //   } else if (receivedData.days === 3) {
  //     setGrid("grid-cols-3");
  //   } else if (receivedData.days === 4) {
  //     setGrid("grid-cols-4");
  //   } else {
  //     setGrid("grid-cols-5");
  //   }
  //  // alert(grid)
  // }, [receivedData]);


 
  useEffect(() => {
   
   
  // alert(receivedData.message)

   
    const timer = setInterval(() => {
      setIndex(prevIndex => {
        const newIndex = (prevIndex + 1) % messages.length;
        setText(messages[newIndex]);
        if (receivedData.days === '1') {
          setGrid("grid-cols-1");
        } else if (receivedData.days === '2') {
          setGrid("grid-cols-2");
        } else if (receivedData.days === '3') {
          setGrid("grid-cols-3");
        } else if (receivedData.days === '4') {
          setGrid("grid-cols-4");
        } else {
          setGrid("grid-cols-5");
        }
     //   alert(grid)
    // document.body.style.zoom = initialValue;
        return newIndex;

      });
    }, 6000);
  
    // Clean up the interval on component unmount
   
    return () => {
      clearInterval(timer);

    };

  }, []);
  // useEffect(() => {

  //   //alert(isMobileView)
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  
  // const dispatch = useDispatch();
  // const { data, loading, error } = useSelector((state) => state.fetchData);






  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const data1 = useSelector((state) => state.data.data1);


  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  

 


  const navigate = useNavigate();
  
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);
  const [showModal4, setShowModal4] = React.useState(false);
  const [showModal5, setShowModal5] = React.useState(false);
  const [showModal6, setShowModal6] = React.useState(false);

  const data22 = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 2, name: 'Jane' },

  ];

  let gridClass = "";
// switch (receivedData.days) {
//   case 1:
//     gridClass = "grid-cols-1";
//    //setgrid("grid-cols-1")
//     break;
//   case 2:
//     gridClass = "grid-cols-2";
//    //setgrid("grid-cols-2")
//     break;
//     case 3:
//     gridClass = "grid-cols-3";
//    //setgrid("grid-cols-3")
//     break;
//     case 4:
//     gridClass = "grid-cols-4";
//     //setgrid("grid-cols-4")
//     break;
//   default:
//     gridClass = "md:grid-cols-5";
//   // setgrid("grid-cols-5")
//     break;
// }



function handleNavigate689() {

  // alert(receivedData.theme+receivedData.message+receivedData.days)
  const  receivedData1 = {
     theme: receivedData.theme,
     message: receivedData.message,
     days: receivedData.days,
   };
  
   try {
    
  
      dispatch(fetchData(receivedData1));
    } catch (error) {
     // alert(error)
      console.error('An error occurred:', error);
    }
    


  
    }
  return (
    <>
  
      <div id="myElement" className="bg-[#EAEBEF] flex flex-col font-ptsans items-center justify-start mx-[auto] w-[100%]">
     





{/* ${receivedData.days} */}

 {/*mobile View*/}

 <div className="absolute visible lg:invisible bg-[#EAEBEF] flex flex-col font-ptsans items-center justify-start mx-[auto] w-[100%]">
 <HeaderOTAMobile className="visible lg:invisible lg:hidden"></HeaderOTAMobile> 
{/* <div className='absolute visible lg:invisible  bg-gray-200'> */}
<div className="justify-between flex bg-white shadow-lg p-4 w-full">
  <Row className="grid grid-row-2 grid-flow-col">
    <text className="font-montserrat ml-2 text-[50px] sm:text-[48px] md:text-[40px] xl:text-[40px]">
      {receivedData.days} Days Trip To {receivedData.message}
    </text>
    {/* <Img
      src="images/edit.svg"
      className="common-pointer h-[25px] sm:h-[20px] md:h-[25px] xl:h-[25px] md:ml-[0] sm:ml-[0] xl:ml-[10px] ml-[10px] object-cover md:w-[100%] sm:w-[100%] xl:w-[25px] w-[25px]"
      alt="edit"
    /> */}
  </Row>
</div>

{/* <div className="visible bottom-[0] fixed lg:invisible w-full h-[8%] bg-[#00a19a] ">
  <div className="flex p-2 h-full">
    <div className="flex-1">
      <text
        className="font-montserrat common-pointer font-bold border-b border-b-2 border-b-[#6392F9] text-[#6392F9] p-3"
        onClick={() => {
          const dataToPass = {
            message: receivedData.message,
            days: receivedData.days,
            theme: receivedData.theme
          };
          navigate('/ota1', { state: dataToPass });
        }}
      >
        OVERVIEW
      </text>
    </div>
    <div className="flex-1">
      <text
        className="font-montserrat common-pointer ml-10 sm:ml-4 md:ml-6 lg:ml-10 hover:border-b hover:border-b-2 hover:border-b-[#6392F9] hover:text-[#6392F9] p-3"
        onClick={() => {
          const dataToPass = {
            message: receivedData.message,
            days: receivedData.days,
            theme: receivedData.theme
          };
          navigate('/ota2', { state: dataToPass });
        }}
      >
        EDITABLE VIEW
      </text>
    </div>
  </div>
</div> */}

<div className="place-items-center grid bg-white shadow-inner p-4 w-full">
  <div>
    <text
      className="font-montserrat common-pointer font-bold border-b border-b-2 border-b-[#6392F9] text-[#6392F9] p-3 md:text-[30px] xl:text-[30px]"
      onClick={() => {
        const dataToPass = {
          message: receivedData.message,
          days: receivedData.days,
          theme: receivedData.theme
        };
        navigate('/ota1', { state: dataToPass });
      }}
    >
      OVERVIEW
    </text>
    <text
      className="font-montserrat common-pointer ml-10 sm:ml-4 md:ml-6 lg:ml-10 hover:border-b hover:border-b-2 hover:border-b-[#6392F9] hover:text-[#6392F9] p-3 md:text-[30px] xl:text-[30px]"
      onClick={() => {
        const dataToPass = {
          message: receivedData.message,
          days: receivedData.days,
          theme: receivedData.theme
        };
        navigate('/ota2', { state: dataToPass });
      }}
    >
      EDITABLE VIEW
    </text>
  </div>
</div>

<div className='font-montserrat h-[100%] w-[100%]' style={{ backgroundColor: loading ? '#fff' : '#fff' }}>
  <div className="flex items-center justify-center" style={{ backgroundColor: loading ? '#fff' : '#fff' }}>
    {!loading ? (
      data22 && (
        <div className={`grid grid-cols-1 md:grid-cols-1 gap-2`}>
          {data22.map((item) => (
            <div key={item} className="flex items-center justify-center p-2">
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <div
                    className={`bg-white p-3 rounded-2xl grid grid-row-2 grid-flow-col w-full md:w-[750px] h-[70px]`}
                  >
                    <div className="">
                      <text className="font-bold font-montserrat sm:text-[8px] md:text-[32px] lg:text-[9px]">
                        Day {item.day}
                      </text>
                    </div>
                  </div>

                  <div className="mt-5 bg-white p-3 border border-l border-l-[#6aa677] border-l-[3px] rounded-2xl w-full md:w-[750px] flex flex-col items-start ">
                    <div className="flex items-center mb-2">
                      <BsSun
                      color="#008009"
                        size={34}
                        className="rounded-lg w-8 h-8" // Set fixed width and height
                        alt="route"
                      />
                      <text style={{  color: '#008009' }} className="text-[26px] font-bold ml-2 font-montserrat">
                      MORNING
                      </text>
                    </div>
                    <div className="ml-2">
                      <div>
                        <text className="text-[10px] font-montserrat">
                          <span style={{ fontSize: '28px', fontWeight: 'normal' }}>
                            {/* <a
                              href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.morningplace}, ${receivedData.message}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            > */}
                            Start your day with a delicious breakfast at Cafe Zouk, known for its fusion cuisine and modern decor. After breakfast, visit the Lahore Fort, a UNESCO World Heritage Site, and explore the stunning Mughal architecture.
                              {item.morningplace}
                            {/* </a> */}
                          </span>
                          <br />
                          <span style={{ fontSize: '24px', fontWeight: 'normal' }}>{item.morningactivity}</span>
                        </text>
                      </div>
                    </div>
                  </div>

                  {/* <div
                    className="mt-5 p-3 rounded-lg grid grid-row-2 grid-flow-col w-full md:w-[750px] h-[35px] flex items-center"
                    style={{ backgroundColor: 'rgba(130, 130, 130, 0.2)' }}
                  >
                    <div className="mt-[-10px]">
                      <div className="flex items-center mb-2">
                        <GiKnifeFork size={24} className="rounded-lg w-6 h-6" alt="route" style={{ color: '#000' }} />
                        <text
                          className="text-sm ml-5 font-montserrat"
                          style={{ color: '#000', fontSize: '10px', marginLeft: '20px', marginTop: 5 }}
                        >
                          <span style={{ fontSize: '25px', fontWeight: 'bold' }}>Lunch -- </span>
                          <span style={{ fontSize: '25px', fontWeight: 'normal' }}>{item.lunch}</span>
                        </text>
                      </div>
                    </div>
                  </div> */}

                  <div className="mt-5 bg-white p-3 border border-l border-l-[#00A19A] border-l-[3px] rounded-2xl w-full md:w-[750px] flex flex-col items-start">
                    <div className="flex items-center mb-2">
                      <IoPartlySunnyOutline size={24} className="rounded-lg w-7 h-7" alt="route" color="#008009" />
                      <text style={{  color: '#008009' }} className="text-[26px] font-bold ml-2 font-montserrat">
                      AFTERNOON
                      </text>
                    </div>
                    <div className="ml-2">
                      <div>
                        <text className="text-[10px] font-montserrat">
                          <span style={{ fontSize: '28px', fontWeight: 'normal',  }}>
                            {/* <a
                              href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.afternoonplace}, ${receivedData.message}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            > */}
                            End your day with a delicious dinner at Cooco's Den, an iconic restaurant known for its fusion cuisine and rooftop seating with stunning views of the Badshahi Mosque and Lahore Fort.

                              {item.afternoonplace}
                            {/* </a> */}
                          </span>
                          <br />
                          <span style={{ fontSize: '24px', fontWeight: 'normal' }}>{item.afternoonactivity}</span>
                        </text>
                      </div>
                    </div>
                  </div>
                  {/* <div
                    className="mt-5 p-3 rounded-lg grid grid-row-2 grid-flow-col w-full md:w-[750px] h-[35px] flex items-center"
                    style={{ backgroundColor: 'rgba(130, 130, 130, 0.2)' }}
                  >
                    <div className="mt-[-10px]">
                      <div className="flex items-center mb-2">
                        <GiKnifeFork size={24} className="rounded-lg w-6 h-6" style={{ color: '#000' }} alt="route" />
                        <text
                          className="text-sm ml-5"
                          style={{ color: '#000', fontSize: '10px', marginLeft: '20px', marginTop: 5 }}
                        >
                          <span style={{ fontSize: '25px', fontWeight: 'bold' }}>Dinner -- </span>
                          <span style={{ fontSize: '25px', fontWeight: 'normal' }}>{item.dinner}</span>
                        </text>
                      </div>
                    </div>
                  </div> */}

                  <div className="mt-5 bg-white p-3 border border-l border-l-[#00A19A] border-l-[3px] rounded-2xl w-full md:w-[750px] flex flex-col items-start">
                    <div className="flex items-center mb-2">
                      <BiMoon color="#008009" size={24} className="rounded-lg w-7 h-7" alt="route" />
                      <text style={{  color: '#008009' }} className="text-[26px] font-bold ml-2 font-montserrat">
                      EVENING
                      </text>
                    </div>
                    <div className="ml-2">
                      <div>
                        <text className="text-[10px] font-montserrat">
                          <span style={{ fontSize: '28px', fontWeight: 'normal', }}>
                            {/* <a
                              href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.eveningplace}, ${receivedData.message}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            > */}
                            End your day with a delicious dinner at Cooco's Den, an iconic restaurant known for its fusion cuisine and rooftop seating with stunning views of the Badshahi Mosque and Lahore Fort.

                              {item.eveningplace}
                            {/* </a> */}
                          </span>
                          <br />
                          <span style={{ fontSize: '24px', fontWeight: 'normal' }}>{item.eveningactivity}</span>
                        </text>
                      </div>
                    </div>
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
  !loading && !data && (
    <div className="h-[100%] w-[100%] flex items-center justify-center flex-col" style={{ backgroundColor: 'white', marginTop: '0px', padding: '20px' }}>
      <span className="text-center mb-4" style={{ fontSize: '30px', fontWeight: 'bold',marginTop: '300px' }}>
        Oops, looks like the server is experiencing high demand. Please try again.
      </span>
      <Button
        className="flex items-center justify-center rounded-[10px] px-3 py-2"
        style={{ backgroundColor: '#00a19a', width: '460px', height: '80px' }}
        size="smIcn"
        onClick={handleNavigate689}
      >
        <text style={{ fontSize: '30px', fontWeight: 'bold' }} className="uppercase font-montserrat text-[25px] text-white">Regenerate itinerary</text>
      </Button>
    </div>
  )
}


</div>


        </div>

 {/*Web View*/}

 <div className="absolute invisible lg:visible bg-[#EAEBEF] flex flex-col font-ptsans items-center justify-start mx-[auto] w-[100%]">
 <HeaderOTA />

 <div className="justify-between flex bg-white shadow-lg p-4 w-full">
  <Row className="grid grid-row-2 grid-flow-col">
    <text className="font-montserrat ml-2 text-[20px] sm:text-[18px] md:text-[20px] xl:text-[20px]">
      {receivedData.days} Days Trip To {receivedData.message}
    </text>
    <Img
      src="images/edit.svg"
      className="common-pointer h-[25px] sm:h-[20px] md:h-[25px] xl:h-[25px] md:ml-[0] sm:ml-[0] xl:ml-[10px] ml-[10px] object-cover md:w-[100%] sm:w-[100%] xl:w-[25px] w-[25px]"
      alt="edit"
    />
  </Row>
</div>

<div className="place-items-center grid bg-white shadow-inner p-4 w-full">
  <div>
    <text
      className="font-montserrat common-pointer font-bold border-b border-b-2 border-b-[#6392F9] text-[#6392F9] p-3"
      onClick={() => {
        const dataToPass = {
          message: receivedData.message,
          days: receivedData.days,
          theme: receivedData.theme
        };
        navigate('/ota1', { state: dataToPass });
      }}
    >
      OVERVIEW
    </text>
    <text
      className="font-montserrat common-pointer ml-10 sm:ml-4 md:ml-6 lg:ml-10 hover:border-b hover:border-b-2 hover:border-b-[#6392F9] hover:text-[#6392F9] p-3"
      onClick={() => {
        const dataToPass = {
          message: receivedData.message,
          days: receivedData.days,
          theme: receivedData.theme
        };
        navigate('/ota2', { state: dataToPass });
      }}
    >
      EDITABLE VIEW
    </text>
  </div>
</div>

<div className='font-montserrat h-[100%] w-[100%]' style={{ backgroundColor:loading? '#fff':'#EAEBEF' }}>
  <div className="flex items-center justify-center" style={{ backgroundColor:loading? '#fff':'#EAEBEF'}}>
    {!loading ? data &&(
      
     
<div   className={`grid ${grid} gap-2 justify-center`}> 
      
        {data.map((item) => (
          <div  key={item} className="flex items-center justify-center p-2">
             <div className="flex items-center justify-center">
            <div className="w-full">
            <div className={`bg-white p-3 rounded-lg grid grid-row-2 grid-flow-col w-full md:w-[220px]`}>
      <div className="">
        <text className="font-bold">
          Day {item.day}
        </text>
      </div>
    </div>
            

              <div className="mt-5 bg-white p-3 border border-l border-l-[#6aa677] border-l-[3px] rounded-lg w-full md:w-[220px] flex flex-col items-start">
  <div className="flex items-center mb-2">
    <BsSun
      size={18}
      className="rounded-lg w-4 h-4" // Set fixed width and height
      alt="route"
    />
    <text className="text-[14px] font-bold ml-2">
      Activity
    </text>
  </div>
  <div className="ml-2">
    <div>
      <text className="text-[10px] ">
        

   

    <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#008009', textDecoration: 'underline' }}>
        
        <a href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.morningplace}, ${receivedData.message}`} target="_blank" rel="noopener noreferrer"  >
        {item.morningplace}
    </a>
      </span>
    {/* <span style={{ fontSize: '12px',fontWeight: 'normal' }}> {item.morningplace}</span> */}

<br />
<span style={{ fontSize: '10px',fontWeight: 'normal' }}> {item.morningactivity}</span>


      </text>
    </div>
  </div>
</div>




<div className="mt-5 p-3 rounded-lg grid grid-row-2 grid-flow-col w-full md:w-[220px] h-[20px] flex items-center" style={{ backgroundColor: 'rgba(130, 130, 130, 0.2)' }}>
  <div className="mt-[-10px]">
    <div className="flex items-center mb-2">
     <GiKnifeFork
       size={18}
       className="rounded-lg w-3 h-3"
        alt="route"
        style={{ color: '#45B9B4' }}
      />
      <text className="text-sm ml-5" style={{ color: '#45B9B4', fontSize: '10px', marginLeft: '20px' }}>
      <span style={{ fontSize: '10px',fontWeight: 'bold' }}>Lunch -- </span>
      <span style={{ fontSize: '8px',fontWeight: 'normal' }}>{item.lunch}</span>
      </text>
    </div>
  </div>
</div>





<div className="mt-5 bg-white p-3 border border-l border-l-[#00A19A] border-l-[3px] rounded-lg w-full md:w-[220px] flex flex-col items-start">
  <div className="flex items-center mb-2">
  <IoPartlySunnyOutline
   size={18}
   className="rounded-lg w-4 h-4"
      alt="route"
    
    />
    <text className="text-[14px] font-bold ml-2">
      Activity
    </text>
  </div>
  <div className="ml-2">
    <div>
      <text className="text-[10px] ">
      
        <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#008009', textDecoration: 'underline' }}>
        
        <a href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.afternoonplace}, ${receivedData.message}`} target="_blank" rel="noopener noreferrer">
        {item.afternoonplace}
    </a>
      </span>

        <br />
        <span style={{ fontSize: '10px',fontWeight: 'normal' }}> {item.afternoonactivity}</span>

      
      </text>
    </div>
  </div>
</div>
<div className="mt-5 p-3 rounded-lg grid grid-row-2 grid-flow-col w-full md:w-[220px] h-[20px] flex items-center" style={{ backgroundColor: 'rgba(130, 130, 130, 0.2)' }}>
  <div className="mt-[-10px]">
    <div className="flex items-center mb-2">
    <GiKnifeFork
     size={18}
     className="rounded-lg w-3 h-3"
     style={{ color: '#45B9B4' }}
        alt="route"
      />
      <text className="text-sm ml-5" style={{ color: '#45B9B4', fontSize: '10px', marginLeft: '20px' }}>
      <span style={{ fontSize: '10px',fontWeight: 'bold' }}>Dinner -- </span>
      <span style={{ fontSize: '8px',fontWeight: 'normal' }}>{item.dinner}</span>
      </text>
    </div>
  </div>
</div>


<div className="mt-5 bg-white p-3 border border-l border-l-[#00A19A] border-l-[3px] rounded-lg w-full md:w-[220px] flex flex-col items-start">
  <div className="flex items-center mb-2">
  <BiMoon
   size={18}
   className="rounded-lg w-4 h-4"
      alt="route"
    />
    <text className="text-[14px] font-bold ml-2">
      Activity
    </text>
  </div>
  <div className="ml-2">
    <div>
      <text className="text-[10px] ">
      <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#008009', textDecoration: 'underline' }}>
      
      
      <a href={`https://www.viator.com/searchResults/all?pid=P00094549&mcid=42383&medium=link&text=${item.eveningplace}, ${receivedData.message}`} target="_blank" rel="noopener noreferrer">
        {item.eveningplace}
    </a>
    </span>

        <br />
        <span style={{ fontSize: '10px',fontWeight: 'normal' }}> {item.eveningactivity}</span>

      
      </text>
    </div>
  </div>
</div>

                
          
                
              </div>
              </div>
            </div>
            
          ))}
     
  
          
              
            </div>
            
            
            ) : (
             
              <div className="h-[100%] w-[100%] mt-30 flex items-center justify-center flex-col">
                
                <span style={{ fontSize: '20px',fontWeight: 'normal' }}>{text}</span>
                
                
             
                
    <CircularProgress size={20} sx={{ color: 'black' }} /></div>
            )}

          </div>
        </div>
          
      </div>
      {
  !loading && !data && (
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

export default DIYOverviewPage;

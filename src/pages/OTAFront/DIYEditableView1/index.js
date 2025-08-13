
import EventCalendar from "../../AI/Calendar/EventCalendar";
import { Img,Row } from "components/index";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from "redux/actions";

import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

import { useLocation} from "react-router-dom";

const DIYEditableViewPage = () => {

 
  const navigate = useNavigate();
  const items = Array.from({ length: 20 }, (_, index) => index + 1);
  const location = useLocation();
  const receivedData = location.state;


 

  const [myArray1, setMyArray1] = useState([]);
  const [datam, setDatam] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const data1 = useSelector((state) => state.data.data1);


  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  var myArray = [];



  // useEffect(() => {


  //   const receivedData1 = {
  //     theme: receivedData.theme,
  //     message: receivedData.message,
  //     days: receivedData.days,
  //   };
  //   if (!data1) {
  //     try {
  //       dispatch(fetchData(receivedData1));
  //     } catch (error) {
  //       console.error('An error occurred:', error);
  //     }
  //   }
  // }, [data1, dispatch, receivedData]);

  useEffect(() => {
    
    
    
   // fetchData(); 
  
  }, 
    
    
    
    [])
 
//   const fetchData = async () => {
//     setLoading(true);
//     try {

//      // alert("aaaa")
     
//       const url = receivedData.theme == 0 
//       ? `http://desa.celex.com.my/gpt/submit?destination=${receivedData.message}&days=${receivedData.days}&theme=${receivedData.theme}`
//       : `http://desa.celex.com.my/gpt/submit?destination=${receivedData.message}&days=${receivedData.days}&theme=${receivedData.theme}`;
    
//     const response = await fetch(url);

//              if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }



  
//             const data = await response.json();

      

// let data2= JSON.parse(data.result)
// setData(JSON.stringify(data))
// console.log("aaaawww",data2)

// //console.log('data:',data2)
// var time;
// var ii = 0;
// const keys = Object.keys(data2);
// for (const x in data2){
//  // console.log(x,' : ',data2[x])
//   if(x.includes('Day'))
//     time = data2[x] 
//     const index = keys.indexOf(x);
//     console.log("qqqqq",index);
//     if(index == 0){
//       const currentDate = new Date();
//       const year = currentDate.getFullYear().toString();
//       const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
//       const day = currentDate.getDate().toString().padStart(2, '0');
      
//       const formattedDate = `${year}-${month}-${day}`;
//       console.log("date",formattedDate, "6:00");


//       var aam ='Day '+ (Number(x) + 1)
//       myArray.push({
//         title: data2[x][aam].morning.breakfast,
//         start: formattedDate.toString()+ " 06:00",
//         slotDuration: '01:30:00',
//         id: x,
//       });

//       myArray.push({
//         title: data2[x][aam].morning.activity,
//         start: formattedDate.toString()+ " 07:30",
//         slotDuration: '02:00:00',
//         id: x,
//       });

//       myArray.push({
//         title: data2[x][aam].afternoon.lunch,
//         start: formattedDate.toString()+ " 12:00",
//         slotDuration: '01:30:00',
//         id: x,
//       });

//       myArray.push({
//         title: data2[x][aam].afternoon.activity,
//         start: formattedDate.toString()+ " 13:30",
//         slotDuration: '02:30:00',
//         id: x,
//       });
//       myArray.push({
//         title: data2[x][aam].evening.dinner,
//         start: formattedDate.toString()+ " 18:00",
//         slotDuration: '01:30:00',
//         id: x,
//       });
//       myArray.push({
//         title: data2[x][aam].evening.activity,
//         start: formattedDate.toString()+ " 19:30",
//         slotDuration: '02:00:00',
//         id: x,
//       });
//     }
//     else{

//       const currentDate = new Date();
//       currentDate.setDate(currentDate.getDate() + index);
//       const year = currentDate.getFullYear().toString();
//       const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
//       const day = currentDate.getDate().toString().padStart(2, '0');
      
//       const formattedDate = `${year}-${month}-${day}`;
//       console.log("next day", formattedDate);
//       var aam ='Day '+ (Number(x) + 1)
//       myArray.push({
//         title: data2[x][aam].morning.breakfast,
//         start: formattedDate.toString()+ " 06:00",
//         slotDuration: '01:30:00',
//         id: x,
//       });

//       myArray.push({
//         title: data2[x][aam].morning.activity,
//         start: formattedDate.toString()+ " 07:30",
//         slotDuration: '02:00:00',
//         id: x,
//       });

//       myArray.push({
//         title: data2[x][aam].afternoon.lunch,
//         start: formattedDate.toString()+ " 12:00",
//         slotDuration: '01:30:00',
//         id: x,
//       });

//       myArray.push({
//         title: data2[x][aam].afternoon.activity,
//         start: formattedDate.toString()+ " 13:30",
//         slotDuration: '02:30:00',
//         id: x,
//       });
//       myArray.push({
//         title: data2[x][aam].evening.dinner,
//         start: formattedDate.toString()+ " 18:00",
//         slotDuration: '01:30:00',
//         id: x,
//       });
//       myArray.push({
//         title: data2[x][aam].evening.activity,
//         start: formattedDate.toString()+ " 19:30",
//         slotDuration: '02:00:00',
//         id: x,
//       });

//       // myArray.push({
//       //   title: time.morning,
//       //   start: formattedDate.toString()+ " 06:00",
//       //   slotDuration: '06:00:00',
//       //   id: x,
//       // });
//       // myArray.push({
//       //   title: time.afternoon,
//       //   start: formattedDate.toString()+ " 12:00",
//       //   slotDuration: '06:00:00',
//       //   id: x,
//       // });
//       // myArray.push({
//       //   title: time.evening,
//       //   start: formattedDate.toString()+ " 18:00",
//       //   slotDuration: '06:00:00',
//       //   id: x,
//       // });
//     }



 
// }

     
   
// setMyArray1(myArray);
// // setData("hh")
// console.log("aaaaa",myArray)

//       setError(null);
//       setLoading(false);
    
//     } catch (error) {
//   //    setError(error.message);
//       alert(error.message)
//       setLoading(false);
//     } finally {
//       setLoading(false);
//     }


 
//   };

  return (
   
    <div className="h-80">
    
      <Row>
        <Img
          src="images/img_halalholidaylogo.png"
          className="xl:h-[65%] h-[65px] sm:h-[auto] object-cover md:w-[100%] xl:w-[24%] sm:w-[100%] w-[24%] cursor-pointer"
          alt="HalalHolidayLogo"
          onClick={() => navigate("/")}
        />
      </Row>
      <Row className="mt-10 mb-10 grid grid-row-2 grid-flow-col">
        <text className="ml-2 text-[20px]">
        Plan your trip
        </text>
      </Row>
      <div className="place-items-center grid bg-white shadow-inner p-4 w-full">
      
          <div>
            <text className="common-pointer ml-10 hover:border-b hover:border-b-2 hover:border-b-[#6392F9] hover:text-[#6392F9] p-3" onClick={() => {
              
              const dataToPass = { message: receivedData.message,days:receivedData.days,theme:receivedData.theme };
              navigate('/ota1', { state: dataToPass })}}>
              Overview
            </text>
            <text className="common-pointer font-bold border-b border-b-2 border-b-[#6392F9] text-[#6392F9] p-3"
            onClick={() => {
              
              const dataToPass = { message: receivedData.message,days:receivedData.days ,theme:receivedData.theme};
              navigate('/ota2', { state: dataToPass })}}>
              Editable View
            </text>
          </div>
        </div>
      <pagetitle activeMenu="Calerdar" motherMenu="App" />
      <div className="row">
       
      {data1  ? (
        // render component using fetched data
        <div>
          {/* <EventCalendar  ></EventCalendar> */}
        <EventCalendar  calendarEvents1={data1}></EventCalendar>
      </div>
      ) : (
        // render loading message while waiting for data
        <div>Creating Your Itinerary.. <CircularProgress size={12} sx={{ color: 'black' }} /></div>
      )}
    </div>
        
    
    </div>
 );
}
export default DIYEditableViewPage;

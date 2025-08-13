

import { Column, Stack, Img, Row, Text, Line, Input, Button } from "components";
import { useLocation} from "react-router-dom";
import Header from "components/Header/Header";
import React, { useState, useEffect } from 'react';

const ShowResults = () => {

  const location = useLocation();
  const receivedData = location.state;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  


  useEffect(() => { fetchData(); }, [])

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://desa.celex.com.my/chatgpt/submit?destination=${receivedData.message}&days=${receivedData.days}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const responseData = await response.json();
      console.log("dddd",responseData.result)
     
      setData(responseData.result);
      setError(null);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };






  return (
    
    <>
   
      <Column className="bg-gray_50 font-ptsans justify-start mx-[auto] lg:pb-[24px] xl:pb-[30px] 2xl:pb-[34px] 3xl:pb-[40px] w-[100%]">
        <Header/>
        <Column className="justify-start 3xl:ml-[116px] lg:ml-[68px] xl:ml-[86px] 2xl:ml-[97px] sm:ml-[46px] md:ml-[65px] sm:mt-[36px] md:mt-[44px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[39%]">
         
          <div>
         
      {/* <h1 style={{color: 'red'}}>Trip Planner  </h1> */}
      <div>
      {/* <h1>Plan for {receivedData.days} day(s) in {receivedData.message}</h1> */}


      <table>
      <thead>
          <tr>
            <th>Your Trip</th>
           
          </tr>
         
        </thead>
      </table>
      <table>
      <thead>
          <tr>
            <th><h1>Plan for {receivedData.days} day(s) in {receivedData.message}</h1></th>
           
          </tr>
         
        </thead>
      </table>

    {/* <div style={{flex:1 ,alignItems: 'center',}}
      dangerouslySetInnerHTML={{
        __html: data,
      }}
    /> */}
     {data ? (
        <div>
           <pre>{data}</pre>
          {/* Add additional data fields here */}
        </div>
      ) : (
        <p>Processing...</p>
      )}
   

  
     
    </div>
    </div>
         
        </Column>
      </Column>
    </>
  );

    }
export default ShowResults;


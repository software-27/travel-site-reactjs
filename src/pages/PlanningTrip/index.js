
import { Column, Text, Row, Img, Button } from "components";
import Header from "components/Header/Header";

import DatePicker from "react-datepicker";
import './styles.css'; 
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
const PropertycategorypagePage = () => {
  
  const navigate = useNavigate();
  

  const [isClicked, setIsClicked] = useState(false);

  const [m, setm] = useState('');
  const [day, setday] = useState();

  const dataToPass = { message: m,days:day };
  

  function handleClick() {
    setIsClicked(true);
  }

   function handleNavigate689() {
 
  navigate('/ota1', { state: dataToPass });
   
   }
  
   function handleInputChange(event) {
    setm(event.target.value);
  }
  function handleInputChange1(event) {
    setday(event.target.value);
  }

  function handleKeyPress(event) {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);

    // Allow only numbers
    const isNumber = /^[0-9]+$/.test(keyValue);
    if (!isNumber) {
      event.preventDefault();
    }
  }


  const [startDate, setStartDate] = useState(new Date());
  return (
    
    <>

<Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] lg:pb-[364px] xl:pb-[455px] 2xl:pb-[512px] 3xl:pb-[614px] w-[100%]">
  <Column className="justify-center w-[100%]">
    <Header className="w-[100%]" />
    <Column className="font-ptsans justify-center sm:ml-[46px] md:ml-[65px] lg:ml-[84px] xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] sm:mt-[36px] md:mt-[44px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[80%]">
      <Text className="Box2 font-medium sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[26px] w-[100%]  text-center" variant="h1">
Plan your Trip with on HalalHoliday.com
      </Text>
    
      <Row className="gap-1 font-ptsans items-center justify-center w-[100%]">
        
        <Column className="font-ptsans bg-white_A700 items-center h-[280px] justify-center sm:mt-[6px] md:mt-[14px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] sm:p-[4px] md:p-[6px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-lg border w-[30%]">
          <div className="font-semibold text-md sm:mt-[8px] md:mt-[9px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] Whattypeofbr">
            <input  type="text" name="name" placeholder="Destination" value={m} onChange={handleInputChange} />
          </div>
          <div className="rounded-div font-semibold text-md sm:mt-[8px] md:mt-[9px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] Whattypeofbr">
           

              <DatePicker  className="rounded-datepicker" selected={startDate} onChange={(date) => setStartDate(date)} />                </div>
              <div className="font-semibold text-md sm:mt-[8px] md:mt-[9px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] Whattypeofbr">
              <input   className={isClicked ? 'clicked' : ''}
      onClick={handleClick}   value={day} onChange={handleInputChange1}
        type="text" onKeyPress={handleKeyPress} name="name"   placeholder="Number of days" />
              </div>
              
              <Button
                className="mb-2 common-pointer rounded-sm font-bold font-inter sm:text-[6px] md:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] sm:mt-[22px] md:mt-[38px] lg:mt-[38px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[28px] text-center w-[95%]"
                onClick={handleNavigate689}
                size="md"
                variant="FillLightblue800"
              >
                Find Halal Holiday
              </Button>
            </Column>
  </Row>
</Column>
</Column>
</Column>

     </>
  );
};

export default PropertycategorypagePage;

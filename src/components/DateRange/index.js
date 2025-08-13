import React from "react";
import { Img } from "components/index";
import { DateRangePicker } from 'rsuite';
import "styles/date.css";


  const DateRange= ()=> {
 
 
     return(
         <> 
            <div class="flex w-[100%] h-9">
                
            <DateRangePicker placeholder="Date range "/>
                
            </div>
         </>
     )
 }
 
 export default DateRange;
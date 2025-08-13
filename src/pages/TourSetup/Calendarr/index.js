import { Column, Row, Text,Img, Line, Button} from "components";
import Header from "components/Header/Header/index";
import Sidebar from "components/Sidebar/index";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaThumbtack, FaRss, FaStream } from "react-icons/fa";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import Calendar from 'react-calendar';
import {useState} from 'react';
import { BsFillBagFill} from "react-icons/bs";
import SaveSearch from "components/SaveSearchBtn/index";
import Search from "components/Searchbtn/index";
import 'react-calendar/dist/Calendar.css';
import FlagStatus from "components/Flag&Status/index";
import Bookinglabel from "components/Label/index";
import Inventory from "components/Inventory/index";
import Customize from "components/CustomizeBtn/index";
import CalendarFeeds from "components/CalendarFeeds/index";
import Topbtns from "components/Topbutton/index";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";
 
const Calendarr = ()=> {
 /* const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };*/

  const navigate = useNavigate();

  /*function handleNavigate20() {
    navigate("/photos");
  }*/

 //for calendar
 const [date, setDate] = useState(new Date())



  return (
    <>
      <HeaderOTAAdmin className="w-[100%]" />
      <Column className="bg-white w-[100%]">
        <Row className="bg-gray_100 h-fit justify-start items-start w-[100%]">
          <Column>
            <Topbtns/>
          </Column>
         
        </Row>
        <Row className="w-[100%] mt-[8px]">
          <Sidebar/>
          <Column className="bg-white h-auto w-[100%]">
                <Row>
                  <Column className="w-[65%] text-light_blue_600 text-[25px] font-regular">
                    Calendar
                  </Column>
                  <Column className="w-[38%] text-white ">
                    <Row className="justify-end">
                      <Customize/>
                      <CalendarFeeds/>    
                    </Row>
                  </Column>
                </Row>
                <Line className="bg-gray_700_33 my-[10px] h-[1.5px] w-[100%]" />

                <Row className="p-2 w-[100%]">
                  <Column className="w-[100%]">
                    <Row className="items-center">
                      <Inventory/>
                      <Search/>
                      <SaveSearch/>
                    </Row>
                    <Column className="w-[67%]">
                      <FlagStatus/>
                    </Column>
                    <Column className="w-[67%]">
                      <Bookinglabel/>
                    </Column>
                    <Row>
                      <div className="calendar-css w-[96%] justify-left mt-10 ">
                          <Calendar className= "text-[14px]" onChange={setDate} value={date}/>
                      </div>
                    </Row>
                   
                  </Column>
                </Row>

              </Column>
            </Row>
      </Column>
    </>
  );
};

export default Calendarr;
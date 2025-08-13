import React from "react";
import { Row, Text, Button, Img } from "components";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'; 
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';
import {BsFillJournalBookmarkFill, BsPersonFill} from 'react-icons/bs';
import {MdTravelExplore,MdOutlineDiscount} from 'react-icons/md';
import {FiMenu} from 'react-icons/fi';
import {HiUserCircle} from 'react-icons/hi';
import {IoIosNotificationsOutline} from 'react-icons/io';


const HeaderOTACreator = (props) => {
    const navigate = useNavigate();
    const [nav, setNav] = useState(false);
    const [nav1, setNav1] = useState(false);

    const toggleDropdown = () => {
        setNav((prevState) => !prevState); // Toggles the state between true and false
    };

    const toggleDropdown2 = () => {
        setNav1((prevState) => !prevState); // Toggles the state between true and false
    };

  return (
    <>
    <header className="bg-white_A701 font-montserrat flex md:flex-col flex-row p-2 items-center justify-center shadow-bs h-max w-full invisible lg:visible hidden lg:flex ">

  
    <Row className="row-1 w-full mt-2 mb-2 z-0 items-center justify-start p-2 gap-4">
        {/* logo  */}
        <div className="justify-start items-center">
        <Img
            src="/images/logoHALALTRAVEL.svg"
            className="place-self-center justify-start md:mt-0 w-auto"
            alt="frame"
            onClick={() => navigate("/")}
        />
        </div>
        {/* navbar */}
        <div class="flex justify-items-end text-center items-center justify-start-end gap-2 w-[90%] ">
            <div className="cursor-pointer text-center  w-fit m-4 ml-5">
                <Text
                    className="font-montserrat text-[15px] text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
                    as="h7"
                    variant="h7"
                    onClick={() => navigate("/home")}
                >
                Home
                </Text>
            </div>
            <div className="cursor-pointer text-center w-fit m-4">
            <button 
                id="dropdownNavbarLink" 
                data-dropdown-toggle="dropdownNavbar" 
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-montserrat text-[15px] text-[#008D36] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                onClick={toggleDropdown}>
                Listing
                <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
            {/* <!-- Dropdown menu --> */}
            <div 
                id="dropdownNavbar" 
                className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${
                    nav ? "" : "hidden"
                  } fixed left-30 top-18`}
                >
                <ul class="py-2 text-sm text-left text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="/property" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Acommodation</a>
                  </li>
                  <li>
                    <a href="/flight" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Flight</a>
                  </li>
                  <li>
                    <a href="/tour" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tour</a>
                  </li>
                </ul>
            </div>
        
            </div>
            <div className="cursor-pointer text-center w-fit m-4">
                <Text
                    className="font-montserrat text-[15px] text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
                    as="h7"
                    variant="h7"
                    onClick={() => navigate("/flight")}
                >
                    Planner Pro
                </Text>
            </div>
            {/* <div className="cursor-pointer text-center w-fit m-4">
                <Text
                    className="font-montserrat text-[15px] text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
                    as="h7"
                    variant="h7"
                    onClick={() => navigate("/tour")}
                >
                Tour
                </Text>
            </div> */}
            {/* <div className="cursor-pointer text-center w-fit m-4">
                <Text
                    className="font-montserrat text-[15px] text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
                    as="h7"
                    variant="h7"
                    onClick={() => navigate("/tour-marketplace")}
                >
                Marketplace
                </Text>  
            </div> */}
            <div className="cursor-pointer text-center w-fit m-4">
                <Text
                    className="font-montserrat text-[15px] text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
                    as="h7"
                    variant="h7"
                    onClick={() => navigate("/tour-marketplace")}
                >
                Tourmarkeplace
                </Text>  
            </div>
            <div className="cursor-pointer text-center w-fit m-4">
                <Text
                    className="font-montserrat text-[15px] text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
                    as="h7"
                    variant="h7"
                    onClick={() => navigate("/")}
                >
                FAQ
                </Text>  
            </div>
            <div className="cursor-pointer text-center w-fit m-4">
                <Text
                    className="font-montserrat text-[15px] text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
                    as="h7"
                    variant="h7"
                    onClick={() => navigate("/")}
                >
                Contact Us
                </Text>  
            </div>
            {/* <div className="cursor-pointer text-center w-fit m-4">
                <Text
                    className="font-montserrat text-[15px] text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
                    as="h7"
                    variant="h7"
                    onClick={() => navigate("/manage-user")}
                >
                Manage User
                </Text>  
            </div> */}
          
        </div>
        <div>
            <button className="inline-flex border border-black mx-2 p-2 gap-2 text-[#008D36] rounded-full items-center"
            id="dropdownNavbarLink" 
            data-dropdown-toggle="dropdownNavbar2"
            onClick={toggleDropdown2}>
                <FiMenu className=""/>
                Username
            </button>

            <div 
                id="dropdownNavbar2" 
                className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${
                    nav1 ? "" : "hidden"
                  } fixed right-2 top-18`}
                >
                <ul class="py-2 text-sm text-left text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="/edit-creator" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit Profile</a>
                  </li>
                  <li>
                    <a href="/influencer-creator" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Storefront</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Content</a>
                  </li>
                </ul>
        </div>
    </div>
        
          
    </Row>
</header>
    </>
    
)}

export default HeaderOTACreator;
import React, { useState } from 'react';
import './app.css';
import {
    FaBars,
    FaHotel,
    FaKaaba,
}from "react-icons/fa";
import { GiCruiser } from 'react-icons/gi';
import {AiFillSetting } from 'react-icons/ai';
import { MdIntegrationInstructions, MdTour } from 'react-icons/md';
import { NavLink } from 'react-router-dom';


const SidebarMarketplace = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/tour-marketplace",
            name:"Tour",
            icon:<MdTour/>
        },
        {
            path:"/home",
            name:"Hotel",
            icon:<FaHotel/>
        },
        {
            path:"/property",
            name:"Cruise",
            icon:<GiCruiser/>
        },
        {
            path:"/tour-umrah",
            name:"Umrah",
            icon:<FaKaaba/>
        },
        {
            path:"/tour",
            name:"Settings",
            icon:<AiFillSetting/>
        },
        {
            path:"/try",
            name:"Integration",
            icon:<MdIntegrationInstructions/>
        }
    ]
    return (
        <div className="container font-montserrat">
           <div style={{width: isOpen ? "190px" : "50px"}} className="sidebar">
               <div className="top_section">
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo font-bold text-lg">Marketplace</h1> */}
                   <div style={{marginLeft: isOpen ? "140px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text font-medium text-xs">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default SidebarMarketplace;
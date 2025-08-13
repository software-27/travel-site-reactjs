import React from "react";
import {useState,Fragment} from 'react';
import { AiOutlineDashboard, AiOutlineInbox} from "react-icons/ai";
import { BsPerson, BsCalendarCheck, BsCart2} from "react-icons/bs";
import { RiCarLine} from "react-icons/ri";
import {IoIosArrowDown, IoIosAddCircleOutline, IoIosTimer, IoIosContact } from "react-icons/io";
import { FiLayers, FiGift, FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {BiBus, BiMessageRoundedDots} from "react-icons/bi";
import { GrUserManager } from "react-icons/gr";
import { GoGraph } from "react-icons/go";
import {TbGavel} from "react-icons/tb";
import {
  Accordion,
  AccordionBody,
} from "@material-tailwind/react";
import {
    Column,
    Row,
    Text,
    Button,
    Img,
  } from "components";

  //fx for accordion 
function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }

  const Sidebar = (props)=> {
 
      // for accordion 
      const [open, setOpen] = useState("");
  
      const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
      };

    //navigate to ticket pools
    function handleNavigateTP() {
      navigate("/t17");
    }
    const navigate = useNavigate();
    function handleNavigate0() {
      navigate("/tour");
    }
    function handleNavigate1() {
      navigate("/t1");
    }
    //navigate to calendar
    function handleNavigate2() {
      navigate("/t2");
    }
    //navigate to daily manifest
    function handleNavigateDM() {
      navigate("/t3");
    }
    //navigat to dispatch
    function handleNavigateD() {
      navigate("/t4");
    }

    //navigate to point of sales
    function handleNavigate3() {
      navigate("/t5");
    }
    //navigate to inventory
    function handleNavigateI() {
      navigate("/t6");
    }
    //navigate to Packages
    function handleNavigateP() {
      navigate("/t9");
    }
    //navigate to marketing campaign
    function handleNavigateR() {
      navigate("/t11");
    }
    //navigate to point of service providers
    function handleNavigate4() {
      navigate("/t13");
    }
    //navigate to point of pickup location 
    function handleNavigate5() {
      navigate("/t15");
    }
    //navigate to contacts
    function handleNavigateCT() {
      navigate("/t19");
    }
    //navigate to gift cards
    function handleNavigate7() {
      navigate("/t31")
    }
    //navigate to add ons
    function handleNavigate8() {
      navigate("/t30")
    }
    //navigate to messages
    function handleNavigate9() {
      navigate("/t33")
    }
    //navigate to report
    function handleNavigate10() {
      navigate("/t34")
    }
    //navigate to activitylog
    function handleNavigate11() {
      navigate("/t41")
    }
    //navigate to setting
    function handleNavigate12() {
      navigate("/t44")
    }
 
     return(
         <>
       
       <Column>
          <Button className="cursor-pointer shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-medium w-[100%]"
          onClick={handleNavigate0}>
              
              <Row>
                <AiOutlineDashboard className="ticket h-5 w-5 mr-3"/>
                <Text className="text-black cursor-pointer "  variant="body6">
                  Dashboard
                </Text>
              </Row>
          </Button>
 
             <Fragment>
                 <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                     <Button 
                     className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]"
                     onClick={handleNavigate1}
                     >   
                      <Row className="items-center w-[100%] mr-20">
                        <Img
                          src="images/ticket.png"
                          className="ticket h-5 w-5 mr-3 "
                          alt="ticket"
                        />
                        <Text className="text-black text-semibold cursor-pointer " variant="body6">
                          Bookings
                        </Text>
                        <IoIosArrowDown  onClick={() => handleOpen(1)} className="absolute right-0 arrow h-4 w-4 mt-1"/>
                      </Row>  
                    </Button>
                   <AccordionBody>
                      <div>
                        <Button className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]"
                          onClick={handleNavigate2}
                        >
                          <Row className="items-center">
                            <BsCalendarCheck className="ticket h-5 w-5 mr-3"/>
                            <Text className="text-black cursor-pointer " variant="body7">
                              Calendar
                            </Text>
                          </Row>
                        </Button>
                      </div>
                      <div>
                        <Button className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]" onClick={handleNavigateDM}>
                          <Row className="items-center">
                            <BsPerson className="ticket h-5 w-5 mr-3 "/>
                            <Text className="text-black cursor-pointer " variant="body7">
                              Daily Manifest
                            </Text>
                          </Row>
                        </Button>
                       </div>
                       {/* <div>
                           <Button onClick={handleNavigateD} className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]">
                               <Row className="items-center">
                                 <RiCarLine className="ticket h-5 w-5 mr-3 "/>
                                 <Text className="text-black cursor-pointer " variant="body7">
                                   Dispatch
                                 </Text>
                               </Row>
                           </Button>
                       </div> */}
                       <div>
                           <Button className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]"
                           onClick={handleNavigate3}>
                               <Row className="items-center">
                                 <BsCart2 className="ticket h-5 w-5 mr-3 "/>
                                 <Text className="text-black cursor-pointer " variant="body7">
                                   Point of Sale
                                 </Text>
                               </Row>
                           </Button>
                       </div>
                   </AccordionBody>
                 </Accordion>
             </Fragment>
 
               
          <Fragment>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
               <Button 
               className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]"
               onClick={handleNavigateI} 
               >
                   <Row className="items-center w-[100%] mr-20">
                     <Img
                       src="images/baggage.png"
                       className="bag h-5 w-5 mr-3 "
                       alt="bag"
                     />
                     <Text className="text-black text-semibold cursor-pointer " variant="body6">
                       Manage Tour
                     </Text>
                     <IoIosArrowDown onClick={() => handleOpen(2)} className="absolute right-0 arrow h-5 w-4 ml-10"/>
                   </Row>
               </Button>

               <AccordionBody>
                <div>
                    <Button onClick={handleNavigateP} className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]">
                        <Row className="items-center">
                            <AiOutlineInbox className="ticket h-5 w-5 mr-3 "/>
                            <Text className="text-black cursor-pointer " variant="body7">
                             Packages
                            </Text>
                        </Row>
                    </Button>
                </div>
                <div>
                        <Button className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]"
                          onClick={handleNavigate8}
                        >
                          <Row className="items-center">
                            <IoIosAddCircleOutline className="ticket h-5 w-5 mr-3"/>
                            <Text className="text-black cursor-pointer " variant="body7">
                              Add On
                            </Text>
                          </Row>
                        </Button>
                      </div>

                {/* <div>
                    <Button onClick={handleNavigateR} className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]">
                        <Row className="items-center">
                            <TbGavel className="ticket h-5 w-5 mr-3"/>
                            <Text className="text-black cursor-pointer " variant="body7">
                             Campaign Rules
                            </Text>
                        </Row>
                    </Button>
                </div> */}

                {/* <div>
                    <Button className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]"
                    onClick={handleNavigate4}
                    >
                        <Row className="items-center">
                            <FaCubes className="ticket h-5 w-5 mr-3 "/>
                            <Text className="text-black cursor-pointer " variant="body7">
                             Service Providers
                            </Text>
                        </Row>
                    </Button>
                </div> */}

                {/* <div>
                    <Button className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]"
                    onClick={handleNavigate5}
                    >
                        <Row className="items-center">
                            <BiBus className="ticket h-5 w-5 mr-3 "/>
                            <Text className="text-black cursor-pointer " variant="body7">
                             Pickup Locations
                            </Text>
                        </Row>
                    </Button>
                </div> */}

                {/* <div>
                    <Button onClick={handleNavigateTP} className="shadow-none bg-white focus:bg-[#FAFAFA] hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]"
                    >
                        <Row className="items-center">
                            <FiLayers className="ticket h-5 w-5 mr-3 "/>
                            <Text className="text-black cursor-pointer " variant="body7">
                             Ticket Pools
                            </Text>
                        </Row>
                    </Button>
                </div> */}


               </AccordionBody>

            </Accordion>
          </Fragment>

          <Fragment>
                 <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                     <Button 
                     className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]"
                     onClick={handleNavigateR}
                     >   
                      <Row className="items-center w-[100%] mr-20">
                      <GrUserManager className="ticket h-5 w-5 mr-3"/>
                        <Text className="text-black text-semibold cursor-pointer " variant="body6">
                          Channel Manager
                        </Text>
                        <IoIosArrowDown  onClick={() => handleOpen(3)} className="absolute right-0 arrow h-4 w-4 mt-1"/>
                      </Row>  
                    </Button>
                   <AccordionBody>
                      <div>
                        <Button className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]" onClick={handleNavigateDM}>
                          <Row className="items-center">
                          <FiGift className="ticket h-5 w-5 mr-3"/>
                            <Text className="text-black cursor-pointer " variant="body7">
                              Gift Cards
                            </Text>
                          </Row>
                        </Button>
                       </div>
                       <div>
                        <Button className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]"
                          onClick={handleNavigate8}
                        >
                          <Row className="items-center">
                            <IoIosAddCircleOutline className="ticket h-5 w-5 mr-3"/>
                            <Text className="text-black cursor-pointer " variant="body7">
                              Add On
                            </Text>
                          </Row>
                        </Button>
                      </div>
                       {/* <div>
                           <Button onClick={handleNavigateD} className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]">
                               <Row className="items-center">
                                 <RiCarLine className="ticket h-5 w-5 mr-3 "/>
                                 <Text className="text-black cursor-pointer " variant="body7">
                                   Dispatch
                                 </Text>
                               </Row>
                           </Button>
                       </div> */}
                       {/* <div>
                           <Button className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]"
                           onClick={handleNavigate3}>
                               <Row className="items-center">
                                 <BsCart2 className="ticket h-5 w-5 mr-3 "/>
                                 <Text className="text-black cursor-pointer " variant="body7">
                                   Point of Sale
                                 </Text>
                               </Row>
                           </Button>
                       </div> */}
                   </AccordionBody>
                 </Accordion>
             </Fragment>

          <Fragment>
                 <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                     <Button 
                     className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]"
                     onClick={handleNavigateR}
                     >   
                      <Row className="items-center w-[100%] mr-20">
                      <TbGavel className="ticket h-5 w-5 mr-3"/>
                        <Text className="text-black text-semibold cursor-pointer " variant="body6">
                          Marketing Campaign
                        </Text>
                        <IoIosArrowDown  onClick={() => handleOpen(4)} className="absolute right-0 arrow h-4 w-4 mt-1"/>
                      </Row>  
                    </Button>
                   <AccordionBody>
                      <div>
                        <Button className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]" onClick={handleNavigate7}>
                          <Row className="items-center">
                          <FiGift className="ticket h-5 w-5 mr-3"/>
                            <Text className="text-black cursor-pointer " variant="body7">
                              Gift Cards
                            </Text>
                          </Row>
                        </Button>
                       </div>
                       <div>
                        <Button className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]"
                          onClick={handleNavigate8}
                        >
                          <Row className="items-center">
                            <IoIosAddCircleOutline className="ticket h-5 w-5 mr-3"/>
                            <Text className="text-black cursor-pointer " variant="body7">
                              Add On
                            </Text>
                          </Row>
                        </Button>
                      </div>
                       {/* <div>
                           <Button onClick={handleNavigateD} className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]">
                               <Row className="items-center">
                                 <RiCarLine className="ticket h-5 w-5 mr-3 "/>
                                 <Text className="text-black cursor-pointer " variant="body7">
                                   Dispatch
                                 </Text>
                               </Row>
                           </Button>
                       </div> */}
                       {/* <div>
                           <Button className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]"
                           onClick={handleNavigate3}>
                               <Row className="items-center">
                                 <BsCart2 className="ticket h-5 w-5 mr-3 "/>
                                 <Text className="text-black cursor-pointer " variant="body7">
                                   Point of Sale
                                 </Text>
                               </Row>
                           </Button>
                       </div> */}
                   </AccordionBody>
                 </Accordion>
             </Fragment>

          <Button onClick={handleNavigateCT} className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]">
                   <Row className="items-center">
                   <IoIosContact className="ticket h-5 w-5 mr-3"/>
                     <Text className="text-black text-semibold cursor-pointer " variant="body6">
                       Contacts
                     </Text>
                   </Row>
               </Button>

               <Button onClick={handleNavigate9} className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]">
                   <Row className="items-center">
                   <BiMessageRoundedDots className="ticket h-5 w-5 mr-3"/>
                     <Text className="text-black text-semibold cursor-pointer " variant="body6">
                       Messages
                     </Text>
                   </Row>
               </Button>

               <Button onClick={handleNavigate11} className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]">
                   <Row className="items-center">
                   <IoIosTimer className="ticket h-5 w-5 mr-3"/>
                     <Text className="text-black text-semibold cursor-pointer " variant="body6">
                       Activity Log
                     </Text>
                   </Row>
               </Button>

               <Button onClick={handleNavigate10} className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]">
                   <Row className="items-center">
                   <GoGraph className="ticket h-5 w-5 mr-3"/>
                     <Text className="text-black text-semibold cursor-pointer " variant="body6">
                       Reports
                     </Text>
                   </Row>
               </Button>

               <Button onClick={handleNavigate12} className="shadow-none bg-white hover:bg-[#FAFAFA] border-4 border-transparent hover:border-l-[#3382AF] items-start justify-start font-bold w-[100%]">
                   <Row className="items-center">
                   <FiSettings className="ticket h-5 w-5 mr-3"/>
                     <Text className="text-black text-semibold cursor-pointer " variant="body6">
                       Settings
                     </Text>
                   </Row>
               </Button>
          </Column>
             
 
 
      
 
         </>
     )
 }
 
 export default Sidebar;
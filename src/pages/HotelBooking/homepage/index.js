import { Input} from 'components/Input/index';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Text, Img, Line, Button} from "components";
import { useNavigate } from "react-router-dom";
import HeaderOTA from 'components/Header/HeaderOTA/index';
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";
import Footerepic from 'components/Footer/Footerepic/index';
import { MdLocationOn } from 'react-icons/md';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { foodData } from "./data";
import { RatingBar } from 'components/RatingBar/index';





const HomepagePage = () => {
    const navigate = useNavigate();

    function navigatePage(data) {
        navigate(`/${data}`);
    }

    return (
        <>
            <HeaderOTA className="fixed invisible lg:visible" />
            <HeaderOTAMobileEpic className="visible fixed overflow-hidden lg:invisible lg:hidden" />
        
            <div className="w-full font-montserrat h-fit p-[50px] md:px-[50px] xl:px-[100px] 2xl:px-[150px]">

                {/* <div className="w-full flex justify-between">
                    <div className="border border-1 border-[#DAD8D8] w-fit px-5 py-2 flex items-center rounded-[10px]">
                        <AiOutlineSearch size={23} className="text-[#7D7B7B]" />
                        <div className="ml-4 grid xl:pr-[60px] 2xl:pr-[170px]">
                            <text className="text-[13px] font-medium">
                                Johor Bahru
                            </text>
                            <text className="text-[10px] text-[#5392F9]">
                                2,143 choices
                            </text>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="border border-1 border-[#DAD8D8] w-fit px-5 py-2 flex items-center rounded-l-[10px]">
                            <CiCalendar size={23} className="text-[#7D7B7B]" />
                            <div className="ml-4 grid">
                                <input className="text-[13px] border-none p-0 icon-none" type="date" />
                                <text className="text-[10px] text-[#949494]">
                                    Saturday
                                </text>
                            </div>
                        </div>
                        <div className="border border-1 border-[#DAD8D8] w-fit px-5 py-2 flex items-center rounded-r-[10px]">
                            <CiCalendar size={23} className="text-[#7D7B7B]" />
                            <div className="ml-4 grid">
                                <input className="text-[13px] border-none p-0 icon-none" type="date" />
                                <text className="text-[10px] text-[#949494]">
                                    Tuesday
                                </text>
                            </div>
                        </div>
                    </div>
                    <div className="border border-1 border-[#DAD8D8] w-fit px-5 py-2 flex items-center rounded-[10px]">
                        <BsPeople size={20} className="text-[#7D7B7B]" />
                        <div className="ml-4 grid xl:pr-[10px] 2xl:pr-[90px]">
                            <text className="text-[13px] font-medium">
                                2 adults, 2 children
                            </text>
                            <text className="text-[10px] text-[#949494]">
                                1 room
                            </text>
                        </div>
                    </div>
                    <div className="bg-[#185ABD] w-fit px-[40px] py-2 flex items-center rounded-[10px] common-pointer hover:bg-[#010066]">
                        <div className=" ">
                            <text className="text-[13px] font-medium text-[#FFFFFF]">
                                SEARCH
                            </text>
                        </div>
                    </div>
                </div> */}

                <div className="flex">
                    {/* <div>

                        <div className="flex border-[#DAD8D8] border-b border-b-1 px-5 py-2 rounded-[10px] xl:w-[230px] 2xl:w-[320px]">
                            <AiOutlineSearch size={23} className="text-[#7D7B7B]" />
                            <input className="ml-4 placeholder-[#949494] placeholder-[13px] border-none" placeholder="Text Search"/>
                        </div>

                        <div className="divide-y">

                            <div className="mb-[30px] ">
                                <div className="flex justify-between mt-[40px]">
                                    <div>
                                        <text className="font-semibold text-[14px]">
                                            Special
                                        </text>
                                    </div>
                                    <div>
                                        <text className="text-[12px] font-medium underline text-[#5392F9] common-pointer">
                                            Clear Filter
                                        </text>
                                    </div>
                                </div>
                                <div className="mt-[20px]">
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Great for Families</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Great for Groups</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Pets Allowed</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Workation Friendly</label>
                                    </div>
                                </div>
                            </div>  

                            <div className="mb-[30px]">
                                <div className="mt-[30px]">
                                    <text className="font-semibold text-[14px]">
                                        Room Offers
                                    </text>
                                </div>
                                <div className="mt-[20px]">
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Breakfast included</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Car rental</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Complimentary snack</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Early check-in</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Early check-out</label>
                                    </div>
                                </div>
                            </div> 

                            <div className="mb-[30px]">
                                <div className="mt-[30px]">
                                    <text className="font-semibold text-[14px]">
                                        Price
                                    </text>
                                </div>
                                <div className="font-medium text-[12px] flex justify-between mt-[10px]">
                                    <div>
                                        <text>
                                            MIN
                                        </text>
                                        <div className="flex items-center px-3 py-2 flex justify-between border border-[#DAD8D8] border-[0.5px] rounded-[5px]">
                                            <text className="font-medium text-[14px]">
                                                $
                                            </text>
                                            <input type="number" className="ml-4 border-none w-[60px] p-0 text-[12px]" min="0"/>
                                        </div>
                                    </div>
                                    <Line className="bg-[#000000] h-[1.5px] mt-[40px] w-[25%]" />
                                    <div>
                                        <text>
                                            MAX
                                        </text>
                                        <div className="flex items-center px-3 py-2 flex justify-between border border-[#DAD8D8] border-[0.5px] rounded-[5px]">
                                            <text className="font-medium text-[14px]">
                                                $
                                            </text>
                                            <input type="number" className="ml-4 border-none w-[60px] p-0 text-[12px]" min="0"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-[30px]">
                                <div className="mt-[30px]">
                                    <text className="font-semibold text-[14px]">
                                        Rating
                                    </text>
                                </div>
                                <div className="mt-[20px]">
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <div className="flex">
                                            <AiFillStar size={20} className=" ml-4 text-[#EEA024]" />
                                            <AiFillStar size={20} className=" text-[#EEA024]" />
                                            <AiFillStar size={20} className=" text-[#EEA024]" />
                                            <AiFillStar size={20} className=" text-[#EEA024]" />
                                            <AiFillStar size={20} className=" text-[#EEA024]" />
                                        </div>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <div className="flex">
                                            <AiFillStar size={20} className=" ml-4 text-[#EEA024]" />
                                            <AiFillStar size={20} className=" text-[#EEA024]" />
                                            <AiFillStar size={20} className=" text-[#EEA024]" />
                                            <AiFillStar size={20} className=" text-[#EEA024]" />
                                            <AiFillStar size={20} className=" text-[#DAD8D8]" />
                                        </div>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <div className="flex">
                                            <AiFillStar size={20} className=" ml-4 text-[#EEA024]" />
                                            <AiFillStar size={20} className=" text-[#EEA024]" />
                                            <AiFillStar size={20} className=" text-[#EEA024]" />
                                            <AiFillStar size={20} className=" text-[#DAD8D8]" />
                                            <AiFillStar size={20} className=" text-[#DAD8D8]" />
                                        </div>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <div className="flex">
                                            <AiFillStar size={20} className=" ml-4 text-[#EEA024]" />
                                            <AiFillStar size={20} className=" text-[#EEA024]" />
                                            <AiFillStar size={20} className=" text-[#DAD8D8]" />
                                            <AiFillStar size={20} className=" text-[#DAD8D8]" />
                                            <AiFillStar size={20} className=" text-[#DAD8D8]" />
                                        </div>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <div className="flex">
                                            <AiFillStar size={20} className=" ml-4 text-[#EEA024]" />
                                            <AiFillStar size={20} className=" text-[#DAD8D8]" />
                                            <AiFillStar size={20} className=" text-[#DAD8D8]" />
                                            <AiFillStar size={20} className=" text-[#DAD8D8]" />
                                            <AiFillStar size={20} className=" text-[#DAD8D8]" />
                                        </div>
                                    </div>
                                </div>
                            </div> 

                            <div className="mb-[30px]">
                                <div className="mt-[30px]">
                                    <text className="font-semibold text-[14px]">
                                        Property Type
                                    </text>
                                </div>
                                <div className="mt-[20px]">
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Apartment</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Hotel</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Resort</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Inn</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Hostel</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Capsule</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Tent</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Villa</label>
                                    </div>
                                </div>
                            </div> 

                            <div className="mb-[30px]">
                                <div className="mt-[30px]">
                                    <text className="font-semibold text-[14px]">
                                        Bed Type
                                    </text>
                                </div>
                                <div className="mt-[20px]">
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Queen</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Double</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Single</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">King</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Bunk Bed</label>
                                    </div>
                                </div>
                            </div> 

                            <div className="mb-[30px]">
                                <div className="mt-[30px]">
                                    <text className="font-semibold text-[14px]">
                                        Room Amenities
                                    </text>
                                </div>
                                <div className="mt-[20px]">
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">TV</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Washing Machine</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Air Conditioning</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Iron Facilities</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Refrigerator</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Private Pool</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Kitchen</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Internet Access</label>
                                    </div>
                                </div>
                            </div> 

                            <div className="mb-[30px]">
                                <div className="mt-[30px]">
                                    <text className="font-semibold text-[14px]">
                                        Property Facilities
                                    </text>
                                </div>
                                <div className="mt-[20px]">
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Swimming Pool</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Internet</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Car Park</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Gym</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Front Desk [24Hour]</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Non-smoking</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Smoking Area</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Pets Allowed</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-blue-600 bg-[#FFFFFF] border-[#DAD8D8] border-[0.5px] rounded focus:ring-blue-500 focus:ring-2"/>
                                        <label for="default-checkbox" class="ml-4 text-[12px]">Nightclub</label>
                                    </div>
                                </div>
                            </div> 

                        </div>
                    </div> */}
                    <div className="xl:w-[830px] 2xl:w-[1140px]">
                        <div className="flex justify-between items-center">
                            <div>
                                <text className="md:text-[24px] xl:text-[11px] 2xl:text-[11px]">
                                    423 results
                                </text>
                            </div>
                            <div className="flex">
                                <div className="flex items-center">
                                    <text className="md:text-[24px] xl:text-[11px] 2xl:text-[11px]">
                                        Currency
                                    </text>
                                    <select id="currency" class="truncate ml-4 bg-[#FFFFFF] border border-[#DAD8D8] border-[0.5px] md:text-[24px] xl:text-[11px] 2xl:text-[11px] focus:ring-blue-500 focus:border-blue-500 block md:w-[160px] xl:w-[200px] 2xl:w-[200px] md:p-3 xl:p-1 2xl:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option className="text-[13px]" selected>United States Dollar - $</option>
                                        <option className="text-[13px]" value="MYR">Malaysian Ringgit - RM</option>
                                        <option className="text-[13px]" value="JPY">Japanese Yen - ¥</option>
                                        <option className="text-[13px]" value="EUR">Euro - €</option>
                                    </select>
                                </div>
                                <div className="flex items-center md:ml-[30px] xl:ml-[30px] 2xl:ml-[50px]">
                                    <text className="md:text-[24px] xl:text-[11px] 2xl:text-[11px]">
                                        Sort By
                                    </text>
                                    <select id="currency" class="truncate ml-4 bg-[#FFFFFF] border border-[#DAD8D8] border-[0.5px] md:text-[24px] xl:text-[11px] 2xl:text-[11px] focus:ring-blue-500 focus:border-blue-500 block md:w-[160px] xl:w-[200px] 2xl:w-[200px] md:p-3 xl:p-1 2xl:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option className="text-[13px]" selected>Featured</option>\
                                        <option className="text-[13px]" value="deal">Deals</option>
                                        <option className="text-[13px]" value="best">Best match</option>
                                        <option className="text-[13px]" value="low">Price: low to high</option>
                                        <option className="text-[13px]" value="high">Price: high to low</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        
                        <div className="md:pt-[50px] xl:pt-[20px] 2xl:pt-[20px]">
                            {foodData.map((data, index) => (
                                <div className="flex pb-[10px]" key={index}>
                                    <div className="common-pointer ">
                                        <Img
                                            src={data.image}
                                            className="md:w-[600px] xl:w-[400px] 2xl:w-[450px] md:h-[450px] xl:h-[250px] 2xl:h-[250px] object-cover border border-[0.5px] border-[#DAD8D8] rounded-l-[30px] shadow-sm"
                                            alt={data.alt}
                                        />
                                    </div>
                                    <div className="bg-[#FFFFFF] rounded-r-[30px] border border-[0.5px] border-[#DAD8D8] w-full shadow-sm"
                                        onClick={() => navigatePage(data.url)}>
                                        <div className="common-pointer">
                                            <div className="md:p-[30px] xl:p-[20px] 2xl:p-[20px] h-[160px]">
                                                <div className="flex">
                                                    <div>
                                                        <text className="font-semibold text-ellipsis overflow-hidden md:text-[35px] xl:text-[21px] 2xl:text-[21px] text-[#000000]">
                                                            {data.title}
                                                        </text>
                                                    </div>
                                                    <RatingBar
                                                        className="flex justify-between ml-4"
                                                        value={data.star}
                                                        starCount={5}
                                                        size={22}
                                                    />
                                                </div>
                                                <div className="flex items-center">
                                                    <MdLocationOn size={20} className="text-[14px] text-[#5392F9]" />
                                                    <text className="md:text-[20px] xl:text-[12px] 2xl:text-[12px] ml-2 text-[#5392F9]">
                                                    {data.location}
                                                    </text>
                                                </div>
                                                <div className="flex items-end md:pt-[70px] xl:pt-[30px] 2xl:pt-[30px]">
                                                    <div className="px-4 py-1 bg-[#5392F9] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px]">
                                                        <text className="font-[505] md:text-[29px] xl:text-[16px] 2xl:text-[16px] text-[#FFFFFF]">
                                                            {data.rating}
                                                        </text>
                                                        <text className="font-medium md:text-[23px] xl:text-[10px] 2xl:text-[10px] text-[#FFFFFF] ml-1">
                                                            / 5
                                                        </text>
                                                    </div>
                                                    <text className="flex md:text-[24px] xl:text-[11px] 2xl:text-[11px] md:ml-4 xl:ml-2 2xl:ml-2">
                                                        {data.review}
                                                        <div className="md:text-[24px] xl:text-[11px] 2xl:text-[11px] ml-1">
                                                            Reviews
                                                        </div>
                                                    </text>
                                                </div>
                                                <div className="flex justify-between items-center md:pt-[90px] xl:pt-[50px] 2xl:pt-[50px]">
                                                    <div className="flex tags overflow-x overflow-hidden w-[80%]">
                                                        {data.tags.map((tag, tagIndex) => ( 
                                                        <span key={tagIndex} className="tag w-fit md:text-[20px] xl:text-[12px] 2xl:text-[12px] text-[#5C5C5F] rounded-[5px] border border-[#DAD8D8] border-[0.5px] p-1 mr-1">
                                                            {tag}
                                                        </span>
                                                        ))}
                                                    </div>
                                                    <div>
                                                        <text className="text-[#424242] md:text-[28px] xl:text-[24px] 2xl:text-[24px] font-semibold">
                                                            {data.price}
                                                        </text>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="justify-between w-full pt-[50px] flex items-center">
                                <BsChevronLeft size={15} className="" />
                                <text className="md:text-[25px] xl:text-[18px] 2xl:text-[18px]">
                                    1
                                </text>
                                <BsChevronRight size={15} className="" />
                            </div>
                        </div>

                    </div>

                </div>

                
                

            </div>
            
            <div className="mt-[0px]">
                <Footerepic />
            </div>
            
            
        </>
    );

};

export default HomepagePage;
import { Input} from 'components/Input/index';
import { Text, Img, Line, Button} from "components";
import { useNavigate } from "react-router-dom";
import Footerepic from 'components/Footer/Footerepic/index';
import { AiOutlineColumnWidth } from 'react-icons/ai';
import { BsShop, BsDoorOpen, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { BiDrink, BiBed, BiCloset, BiMenu } from 'react-icons/bi';
import { IoMdTime, IoMdPerson, IoIosFitness, IoMdCash } from 'react-icons/io';
import { FiCoffee, FiCheckCircle } from "react-icons/fi";
import { MdOutlineRoomService, MdOutlineElevator, MdOutlineLocalLaundryService, MdOutlineFastfood, MdLocationOn, MdOutlineSmokeFree, 
    MdGroups2, MdOutlineLanguage, MdFamilyRestroom, MdMoneyOff, MdLocalPhone, MdDesk, MdKey, MdOutlineCheck, MdLuggage,
    MdOutlineCalendarToday  } from 'react-icons/md';
import { FaParking, FaShower, FaCreditCard, FaBed, FaWifi, FaWheelchair, FaPumpSoap, FaRegSnowflake, FaBus, FaHospital, FaBaby,
    FaChild, FaStar } from 'react-icons/fa';
import { TbSwimming } from 'react-icons/tb';
import { GiSittingDog, GiCigarette, GiBroom, GiWoodenCrate, GiTowel, GiSlippers, GiAirplaneDeparture } from 'react-icons/gi';
import { BsBag, BsTicketPerforated } from 'react-icons/bs';
import { RatingBar } from 'components/RatingBar/index';
import { TiFilter } from "react-icons/ti";
import HeaderOTA from 'components/Header/HeaderOTA/index';
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";


const HotelPage = () => {
    const navigate = useNavigate();

    function handleNavigate12() {
        navigate("/payment1"); 
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
                </div>   */}
                <div className=" flex justify-end w-full">

                    <text className="underline md:text-[22px] xl:text-[11px] 2xl:text-[11px] text-[#5392F9] common-pointer">
                        See all <b>6,143</b> properties in Johor Bahru
                    </text>

                </div>             
                <div className="mt-[10px] md:none xl:flex 2xl:flex items-center justify-between">
                    <Img
                        src= "https://pix8.agoda.net/hotelImages/4861656/-1/db07c2744c9aa9deb0f7a144aa3c1e44.png?ca=9&ce=1&s=1024x768"
                        className="md:w-full xl:w-[400px] 2xl:w-[480px] md:h-[450px] xl:h-[300px] 2xl:h-[300px] object-cover rounded-l-[5px]"
                        alt="trove1"
                    />
                    <div className="md:mt-[6px] grid md:grid-cols-6 xl:grid-cols-3 2xl:grid-cols-3 gap-[6px] ml-[6px]">
                        <div>
                            <Img
                                src= "https://pix8.agoda.net/hotelImages/4861656/-1/b10278925e39c836a80d0a2ab31aa225.jpg?ca=9&ce=1&s=1024x768"
                                className="xl:w-[187px] 2xl:w-[240px] h-[147px] object-cover"
                                alt="trove1"
                            />
                        </div>
                        <div>
                            <Img
                                src= "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/250937831.jpg?k=b4637b31bd99eed4c9468c8a1fd86165e9ea26996fe7cddb3afaeb185d774e44&o="
                                className="xl:w-[187px] 2xl:w-[240px] h-[147px] object-cover"
                                alt="trove1"
                            />
                        </div>
                        <div>
                            <Img
                                src= "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/208814763.jpg?k=405a40c5d4a77987fdf4a7a28b4e3c50aedabe23bd2a4f2ef8b61bd0e9b0a197&o="
                                className="xl:w-[187px] 2xl:w-[240px] h-[147px] object-cover"
                                alt="trove1"
                            />
                        </div>
                        <div>
                            <Img
                                src= "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/245272235.jpg?k=751beefab1624ca11cd62ea6d9ae5b162bf23267be6e5c432a8a70960cf04f41&o="
                                className="xl:w-[187px] 2xl:w-[240px] h-[147px] object-cover"
                                alt="trove1"
                            />
                        </div>
                        <div>
                            <Img
                                src= "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/138657253.jpg?k=907b74c830d66be4823229de1c01ce08ad65b6553802453c952a279677cdc501&o="
                                className="xl:w-[187px] 2xl:w-[240px] h-[147px] object-cover rounded-tr-[5px]"
                                alt="trove1"
                            />
                        </div>
                        <div>
                            <Img
                                src= "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/182383282.jpg?k=00e65e61d5e8a63969bbc324e3ce0889240a183a01c6ec907c494ff3b1f81dd9&o="
                                className="xl:w-[187px] 2xl:w-[240px] h-[147px] object-cover rounded-br-[5px]"
                                alt="trove1"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-[50px] grid xl:grid-cols-3 2xl:grid-cols-3 gap-4 w-full">
                    <div className="p-5 border border-[#EFEEEE] border-[0.5px] shadow-sm">
                        <div>
                            <text className="font-semibold md:text-[30px] xl:text-[24px] 2xl:text-[24px]">
                                4.3 
                            </text>
                            <text className="ml-4 text-[#949494] md:text-[25px] xl:text-[18px] 2xl:text-[18px]">
                                /5 
                            </text>
                        </div>
                        <div>
                            <text className="text-[#5392F9] md:text-[22px] xl:text-[14px] 2xl:text-[14px]">
                                293 reviews
                            </text>
                        </div>
                        <div className="mt-[20px]">
                            <text className="md:text-[24px] xl:text-[13px] 2xl:text-[13px]">
                                "Room are big and provided water dispenses very suitable for family with kids."  - Lee
                            </text>
                        </div>
                    </div>
                    <div className="p-5 border border-[#EFEEEE] border-[0.5px] shadow-sm">
                        <div className="justify-between flex place-items-center h-full">
                            <div className="">
                                <div className="flex items-center">
                                    <BsBag size={15} className="md:hidden xl:block 2xl:block stroke-[0.5px] text-[#545454]" />
                                    <BsBag size={30} className="md:block xl:hidden 2xl:hidden stroke-[0.5px] text-[#545454]" />
                                    <text className="text-[#464747] md:text-[25px] xl:text-[12px] 2xl:text-[12px] ml-4">
                                        KSL City Mall
                                    </text>
                                </div>
                                <div className="flex items-center mt-3">
                                    <BsTicketPerforated size={15} className="md:hidden xl:block 2xl:block stroke-[0.5px] text-[#545454]" />
                                    <BsTicketPerforated size={30} className="md:block xl:hidden 2xl:hidden stroke-[0.5px] text-[#545454]" />
                                    <text className="text-[#464747] md:text-[25px] xl:text-[12px] 2xl:text-[12px] ml-4">
                                        Johor Zoo
                                    </text>
                                </div>
                                <div className="flex items-center mt-3">
                                    <BsTicketPerforated size={15} className="md:hidden xl:block 2xl:block stroke-[0.5px] text-[#545454]" />
                                    <BsTicketPerforated size={30} className="md:block xl:hidden 2xl:hidden stroke-[0.5px] text-[#545454]" />
                                    <text className="text-[#464747] md:text-[25px] xl:text-[12px] 2xl:text-[12px] ml-4">
                                        Angry Birds Activity Park
                                    </text>
                                </div>
                                <div className="flex items-center mt-3">
                                    <BsBag size={15} className="md:hidden xl:block 2xl:block stroke-[0.5px] text-[#545454]" />
                                    <BsBag size={30} className="md:block xl:hidden 2xl:hidden stroke-[0.5px] text-[#545454]" />
                                    <text className="text-[#464747] md:text-[25px] xl:text-[12px] 2xl:text-[12px]] ml-4">
                                        Johor Bahru City Square
                                    </text>
                                </div>

                            </div>
                            <div className="grid">
                                <text className="text-[#464747] md:text-[25px] xl:text-[12px] 2xl:text-[12px]]">
                                    810m
                                </text>
                                <text className="text-[#464747] md:text-[25px] xl:text-[12px] 2xl:text-[12px] mt-3">
                                    1.6km
                                </text>
                                <text className="text-[#464747] md:text-[25px] xl:text-[12px] 2xl:text-[12px] mt-3">
                                    1.6km
                                </text>
                                <text className="text-[#464747] md:text-[25px] xl:text-[12px] 2xl:text-[12px] mt-3">
                                    1.8km
                                </text>

                            </div>
                            
                        </div>
                    </div>
                    <div className="p-5 border border-[#EFEEEE] border-[0.5px] shadow-sm">
                        <div className="flex place-items-center h-full">
                            <div className=" ">
                            <div className="flex items-center ">
                                <TbSwimming size={15} className="md:hidden xl:block 2xl:block text-[#545454]" />
                                <TbSwimming size={30} className="md:block xl:hidden 2xl:hidden text-[#545454]" />
                                <text className="text-[#464747] md:text-[25px] xl:text-[12px] 2xl:text-[12px] ml-4">
                                    Swimming Pool
                                </text>
                            </div>
                            <div className="flex items-center mt-3">
                                <BiDrink size={15} className="md:hidden xl:block 2xl:block text-[#545454]" />
                                <BiDrink size={30} className="md:block xl:hidden 2xl:hidden text-[#545454]" />
                                <text className="text-[#464747] md:text-[25px] xl:text-[12px] 2xl:text-[12px] ml-4">
                                    Nightclub
                                </text>
                            </div>
                            <div className="flex items-center mt-3">
                                <FaParking size={15} className="md:hidden xl:block 2xl:block text-[#545454]" />
                                <FaParking size={30} className="md:block xl:hidden 2xl:hidden text-[#545454]" />
                                <text className="text-[#464747] md:text-[25px] xl:text-[12px] 2xl:text-[12px] ml-4">
                                    Car Park
                                </text>
                            </div>
                            <div className="flex items-center mt-3">
                                <GiSittingDog size={15} className="md:hidden xl:block 2xl:block text-[#545454]" />
                                <GiSittingDog size={30} className="md:block xl:hidden 2xl:hidden text-[#545454]" />
                                <text className="text-[#464747] md:text-[25px] xl:text-[12px] 2xl:text-[12px] ml-4">
                                    Pets Allowed
                                </text>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>

                <div className="md:hidden xl:block 2xl:block p-5 border border-[#EFEEEE] border-[0.5px] shadow-sm mt-[50px]">
                    <div className="justify-between flex items-center">
                        <div className="grid grid-cols-6 gap-6">
                            <a href="#overview" className="text-[14px] text-[#464747] common-pointer">
                                Overview 
                            </a>
                            <a href="#room" className="text-[14px] text-[#464747] common-pointer">
                                Rooms 
                            </a>
                            <a href="#facilities" className="text-[14px] text-[#464747] common-pointer">
                                Facilities 
                            </a>
                            <a href="#review" className="text-[14px] text-[#464747] common-pointer">
                                Reviews 
                            </a> 
                            <a href="#location" className="text-[14px] text-[#464747] common-pointer">
                                Location 
                            </a> 
                            <a href="#policy" className="text-[14px] text-[#464747] common-pointer">
                                Policies
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="pr-[20px]">
                                <text className="text-[10px] text-[#464747]">
                                    from
                                </text>
                                <text className="ml-1 font-semibold text-[24px] text-[#000000]">
                                    $ 45
                                </text>
                            </div>
                            <div href="#room" className="bg-[#5392F9] hover:bg-[#185ABD] rounded-[10px] p-2 px-4 common-pointer">
                                <text className="font-semibold text-[#FFFFFF] text-[12px]">
                                    Select Room
                                </text>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="p-5 border border-[#EFEEEE] border-[0.5px] shadow-sm mt-[50px]">
                    <div className="divide-y">
                        <div classnamne="">
                            <div id="overview" className="flex items-center">
                                <text className="md:text-[32px] xl:text-[24px] 2xl:text-[24px] font-semibold text-[#000000]">
                                    TROVE Johor Bahru
                                </text>
                                <RatingBar
                                    className="flex justify-between ml-4"
                                    value={4}
                                    starCount={5}
                                    size={22}
                                />
                            </div>
                            <div className="flex items-center mt-2 ">
                                <MdLocationOn size={20} className="md:hidden xl:block 2xl:block text-[#5392F9]" />
                                <MdLocationOn size={35} className="md:block xl:hidden 2xl:hidden text-[#5392F9]" />
                                <text className="md:text-[20px] xl:text-[14px] 2xl:text-[14px] ml-2 text-[#5392F9]">
                                    Jalan Dato' Abdullah Tahir, Johor Bahru City Center, Johor Bahru, Malaysia, 80300
                                </text>
                            </div>
                        </div>
                        <div className="mt-[15px]">
                            <text className="md:text-[24px] xl:text-[12px] 2xl:text-[12px] mt-[15px]">
                                The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you 
                                please. Strategically situated in Johor Bahru City Center, allowing you access and proximity to 
                                local attractions and sights. Don't leave before paying a visit to the famous Legoland Malaysia. 
                                Rated with 4 stars, this high-quality property provides guests with access to restaurant and 
                                outdoor pool on-site.
                            </text>
                        </div>
                    </div>
                </div>
                <div className="mt-[50px] md:hidden xl:block 2xl:block">
                    <text id="room" className="md:text-[32px] xl:text-[24px] 2xl:text-[24px] font-semibold text-[#000000]">
                        Select Your Room
                    </text>
                    <div className="p-5 border border-[#EFEEEE] border-[0.5px] shadow-sm mt-[20px]">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center">
                                <TiFilter size={20} className="md:hidden xl:block 2xl:block text-[#000000] font-medium" />
                                <TiFilter size={35} className="md:block xl:hidden 2xl:hidden text-[#000000] font-medium" />
                                <text className="md:text-[24px] xl:text-[14px] 2xl:text-[14px] ml-2 text-[#000000]">
                                    Filter your options
                                </text>
                            </div>
                            <div>
                                <text className="md:text-[22px] xl:text-[12px] 2xl:text-[12px] ml-2 text-[#5392F9] common-pointer">
                                    Clear all
                                </text>
                            </div>
                        </div>
                        <div className="mt-[20px] flex ">
                            <div className="border border-[0.5px] border-[#DAD8D8] rounded-[50px] flex p-3 px-5">
                                <FiCoffee size={20} className="md:hidden xl:block 2xl:block text-[#464747] font-medium" />
                                <FiCoffee size={40} className="md:block xl:hidden 2xl:hidden text-[#464747] font-medium" />
                                <text className="md:text-[25px] xl:text-[14px] 2xl:text-[14px] ml-3 text-[#464747]">
                                    Breakfast included
                                </text>
                            </div>
                            <div className="ml-2 border border-[0.5px] border-[#DAD8D8] rounded-[50px] flex p-3 px-5">
                                <MdOutlineSmokeFree property size={20} className="md:hidden xl:block 2xl:block text-[#464747] font-medium" />
                                <MdOutlineSmokeFree property size={40} className="md:block xl:hidden 2xl:hidden text-[#464747] font-medium" />
                                <text className="md:text-[25px] xl:text-[14px] 2xl:text-[14px] ml-3 text-[#464747]">
                                    Non-smoking
                                </text>
                            </div>
                            <div className="ml-2 border border-[0.5px] border-[#DAD8D8] rounded-[50px] flex p-3 px-5">
                                <MdGroups2 size={20} className="md:hidden xl:block 2xl:block text-[#464747] font-medium" />
                                <MdGroups2 size={40} className="md:block xl:hidden 2xl:hidden text-[#464747] font-medium" />
                                <text className="md:text-[25px] xl:text-[14px] 2xl:text-[14px] ml-3 text-[#464747]">
                                    Great for groups
                                </text>
                            </div>
                            <div className="ml-2 border border-[0.5px] border-[#DAD8D8] rounded-[50px] flex p-3 px-5">
                                <MdFamilyRestroom size={20} className="md:hidden xl:block 2xl:block text-[#464747] font-medium" />
                                <MdFamilyRestroom size={40} className="md:block xl:hidden 2xl:hidden text-[#464747] font-medium" />
                                <text className="md:text-[25px] xl:text-[14px] 2xl:text-[14px] ml-3 text-[#464747]">
                                    Great for families
                                </text>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="md:hidden xl:block 2xl:block p-5 border border-[#EFEEEE] border-[0.5px] shadow-sm mt-[30px]">
                    <text className="text-[20px] font-semibold text-[#000000]">
                        Standard Twin Room
                    </text>
                    <div className="flex mt-[30px]">
                        <div>
                            <div>
                                <Img
                                    src= "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/138657253.jpg?k=907b74c830d66be4823229de1c01ce08ad65b6553802453c952a279677cdc501&o="
                                    className="w-[250px] h-[150px] object-cover"
                                    alt="trove1"
                                />
                                <div className="flex mt-[4px]">
                                    <Img
                                        src= "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/138657253.jpg?k=907b74c830d66be4823229de1c01ce08ad65b6553802453c952a279677cdc501&o="
                                        className="w-[123px] h-[100px] object-cover"
                                        alt="trove1"
                                    />
                                    <Img
                                        src= "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/138657253.jpg?k=907b74c830d66be4823229de1c01ce08ad65b6553802453c952a279677cdc501&o="
                                        className="ml-[4px] w-[123px] h-[100px] object-cover"
                                        alt="trove1"
                                    />

                                </div>
                            </div>
                            <div>
                                <div>
                                    <text className="text-[12px] text-[#5392F9] underline common-pointer">
                                        More Details
                                    </text>
                                </div>
                                <div className="mt-[30px]">
                                    <div className="mb-[10px] flex items-center">
                                        <FaBed size={23} className="text-[#464747]" />
                                        <text className="ml-4 text-[12px] text-[#464747]">
                                            2 single beds
                                        </text>
                                    </div>
                                    <div className="mb-[10px] flex items-center">
                                        <AiOutlineColumnWidth size={23} className="text-[#464747]" />
                                        <text className="ml-4 text-[12px] text-[#464747]">
                                            Room size: 27 m²/291 ft²
                                        </text>
                                    </div>
                                    <div className="mb-[10px] flex items-center">
                                        <FaShower size={23} className="text-[#464747]" />
                                        <text className="ml-4 text-[12px] text-[#464747]">
                                            Shower
                                        </text>
                                    </div>
                                    <div className="mb-[15px] flex items-center">
                                        <MdOutlineSmokeFree size={23} className="text-[#464747]" />
                                        <text className="ml-4 text-[12px] text-[#464747]">
                                            Non-smoking
                                        </text>
                                    </div>
                                    <div className="flex items-center">
                                        <text className="text-[12px] text-[#5392F9] underline common-pointer">
                                            See More
                                        </text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[70%] ml-[50px]">
                            <div className="bg-[#F6F2F2] p-5 flex justify-between">
                                <div>
                                    <text className="text-[14px] text-[#000000] font-semibold">
                                        Summary 
                                    </text>
                                </div>
                                <div>
                                    <text className="ml-[70px] text-[14px] text-[#000000] font-semibold">
                                        Capacity 
                                    </text>
                                </div>
                                <div>
                                    <text className="text-[14px] text-[#000000] font-semibold">
                                        Price per night 
                                    </text>
                                </div>
                            </div>
                            <div className="p-6 flex justify-between border-[#F6F2F2] border-r-[0.5px] border-b-[0.5px] border-l-[0.5px]">
                                <div>
                                    <div className="mb-[15px] flex items-center">
                                        <FiCoffee size={23} className="text-[#000000]" />
                                        <text className="ml-4 text-[12px] text-[#000000]">
                                            Breakfast at $ 15 
                                        </text>
                                    </div>
                                    <div className="mb-[15px] flex items-center">
                                        <MdMoneyOff size={23} className="text-[#000000]" />
                                        <text className="ml-4 text-[12px] text-[#000000]">
                                            Non-refundable
                                        </text>
                                    </div>
                                    <div className="mb-[15px] flex items-center">
                                        <FaCreditCard size={23} className="text-[#000000]" />
                                        <text className="ml-4 text-[12px] text-[#000000]">
                                            Prepay Online 
                                        </text>
                                    </div>
                                    <div className="mb-[15px] flex items-center">
                                        <IoMdTime size={23} className="text-[#949494]" />
                                        <text className="ml-4 text-[12px] text-[#949494]">
                                            Instant Confirmation
                                        </text>
                                    </div>
                                </div>
                                <div className="flex">
                                    <IoMdPerson size={23} className="text-[#000000]" />
                                    <IoMdPerson size={23} className="text-[#000000]" />
                                </div>
                                <div className="grid justify-items-end">
                                    <div>
                                        <text className="text-[30px] text-[#000000] font-semibold">
                                            $ 45
                                        </text>
                                    </div> 
                                    <div onClick={handleNavigate12} className="mt-[70px] p-3 px-8 bg-[#5392F9] hover:bg-[#185ABD] rounded-[10px]">
                                        <text className="text-[#FFFFFF] text-[12px]">
                                            Book now
                                        </text>

                                    </div>
                                </div>
                            </div>
                            <div className="p-6 flex justify-between border-[#F6F2F2] border-r-[0.5px] border-l-[0.5px] border-b-[0.5px]">
                                <div>
                                    <div className="mb-[15px] flex items-center">
                                        <FiCoffee size={23} className="text-[#000000]" />
                                        <text className="ml-4 text-[12px] text-[#000000]">
                                            Includes breakfast for 2 
                                        </text>
                                    </div>
                                    <div className="mb-[15px] flex items-center">
                                        <MdMoneyOff size={23} className="text-[#000000]" />
                                        <text className="ml-4 text-[12px] text-[#000000]">
                                            Non-refundable
                                        </text>
                                    </div>
                                    <div className="mb-[15px] flex items-center">
                                        <FaCreditCard size={23} className="text-[#000000]" />
                                        <text className="ml-4 text-[12px] text-[#000000]">
                                            Prepay Online 
                                        </text>
                                    </div>
                                    <div className="mb-[15px] flex items-center">
                                        <IoMdTime size={23} className="text-[#949494]" />
                                        <text className="ml-4 text-[12px] text-[#949494]">
                                            Instant Confirmation
                                        </text>
                                    </div>
                                </div>
                                <div className="flex">
                                    <IoMdPerson size={23} className="text-[#000000]" />
                                    <IoMdPerson size={23} className="text-[#000000]" />
                                </div>
                                <div className="grid justify-items-end">
                                    <div>
                                        <text className="text-[30px] text-[#ED5C59] font-semibold">
                                            $ 55
                                        </text>
                                    </div> 
                                    <div className="mt-[70px] p-3 px-8 bg-[#5392F9] hover:bg-[#185ABD] rounded-[10px]">
                                        <text className="text-[#FFFFFF] text-[12px]">
                                            Book now
                                        </text>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* mobile */}
                <div className="md:block xl:hidden 2xl:hidden p-5 border border-[#EFEEEE] border-[0.5px] shadow-sm mt-[30px]">
                    <text className="text-[30px] font-semibold text-[#000000]">
                        Standard Twin Room
                    </text>
                    <div className="mt-[30px]">
                        <div>
                            <div>
                                <Img
                                    src= "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/138657253.jpg?k=907b74c830d66be4823229de1c01ce08ad65b6553802453c952a279677cdc501&o="
                                    className="w-full h-[400px] object-cover"
                                    alt="trove1"
                                />
                            </div>
                            <div>
                                <div className="mt-[30px]">
                                    <div className="mb-[10px] flex items-center">
                                        <FaBed size={36} className="text-[#464747]" />
                                        <text className="ml-4 text-[24px] text-[#464747]">
                                            2 single beds
                                        </text>
                                    </div>
                                    <div className="mb-[10px] flex items-center">
                                        <AiOutlineColumnWidth size={36} className="text-[#464747]" />
                                        <text className="ml-4 text-[24px] text-[#464747]">
                                            Room size: 27 m²/291 ft²
                                        </text>
                                    </div>
                                    <div className="mb-[10px] flex items-center">
                                        <FaShower size={36} className="text-[#464747]" />
                                        <text className="ml-4 text-[24px] text-[#464747]">
                                            Shower
                                        </text>
                                    </div>
                                    <div className="mb-[15px] flex items-center">
                                        <MdOutlineSmokeFree size={36} className="text-[#464747]" />
                                        <text className="ml-4 text-[24px] text-[#464747]">
                                            Non-smoking
                                        </text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-[50px]">
                            <div className="bg-[#F6F2F2] p-[50px]">
                                <div className="flex justify-between border-[#F6F2F2] border-r-[0.5px] border-b-[0.5px] border-l-[0.5px]">
                                    <div>
                                        <div className="mb-[15px] flex items-center">
                                            <FiCoffee size={36} className="text-[#000000]" />
                                            <text className="ml-4 text-[24px] text-[#000000]">
                                                Breakfast at $ 15 
                                            </text>
                                        </div>
                                        <div className="mb-[15px] flex items-center">
                                            <MdMoneyOff size={36} className="text-[#000000]" />
                                            <text className="ml-4 text-[24px] text-[#000000]">
                                                Non-refundable
                                            </text>
                                        </div>
                                        <div className="mb-[15px] flex items-center">
                                            <FaCreditCard size={36} className="text-[#000000]" />
                                            <text className="ml-4 text-[24px] text-[#000000]">
                                                Prepay Online 
                                            </text>
                                        </div>
                                        <div className="mb-[15px] flex items-center">
                                            <IoMdTime size={36} className="text-[#949494]" />
                                            <text className="ml-4 text-[24px] text-[#949494]">
                                                Instant Confirmation
                                            </text>
                                        </div>
                                    </div>
                                    <div className="grid justify-items-end">
                                        <div className="flex">
                                            <IoMdPerson size={30} className="text-[#000000]" />
                                            <IoMdPerson size={30} className="text-[#000000]" />
                                        </div>
                                        <div>
                                            <text className="text-[40px] text-[#000000] font-semibold">
                                                $ 45
                                            </text>
                                        </div> 
                                    </div>
                                </div>
                                <div onClick={handleNavigate12} className="mt-[70px] p-4 w-full bg-[#5392F9] hover:bg-[#185ABD] rounded-[10px] flex items-center justify-center">
                                    <text className="text-[#FFFFFF] text-[28px] text-center">
                                        Book now
                                    </text>
                                </div>
                            </div>
                            <div className="bg-[#F6F2F2] p-[50px] mt-[10px]">
                                <div className="flex justify-between border-[#F6F2F2] border-r-[0.5px] border-b-[0.5px] border-l-[0.5px]">
                                    <div>
                                        <div className="mb-[15px] flex items-center">
                                            <FiCoffee size={36} className="text-[#000000]" />
                                            <text className="ml-4 text-[24px] text-[#000000]">
                                                Includes breakfast for 2
                                            </text>
                                        </div>
                                        <div className="mb-[15px] flex items-center">
                                            <MdMoneyOff size={36} className="text-[#000000]" />
                                            <text className="ml-4 text-[24px] text-[#000000]">
                                                Non-refundable
                                            </text>
                                        </div>
                                        <div className="mb-[15px] flex items-center">
                                            <FaCreditCard size={36} className="text-[#000000]" />
                                            <text className="ml-4 text-[24px] text-[#000000]">
                                                Prepay Online 
                                            </text>
                                        </div>
                                        <div className="mb-[15px] flex items-center">
                                            <IoMdTime size={36} className="text-[#949494]" />
                                            <text className="ml-4 text-[24px] text-[#949494]">
                                                Instant Confirmation
                                            </text>
                                        </div>
                                    </div>
                                    <div className="grid justify-items-end">
                                        <div className="flex">
                                            <IoMdPerson size={30} className="text-[#000000]" />
                                            <IoMdPerson size={30} className="text-[#000000]" />
                                        </div>
                                        <div>
                                            <text className="text-[40px] text-[#ED5C59] font-semibold">
                                                $ 55
                                            </text>
                                        </div> 
                                    </div>
                                </div>
                                <div className="mt-[70px] p-4 w-full bg-[#5392F9] hover:bg-[#185ABD] rounded-[10px] flex items-center justify-center">
                                    <text className="text-[#FFFFFF] text-[28px] text-center">
                                        Book now
                                    </text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:hidden xl:block 2xl:block p-5 border border-[#EFEEEE] border-[0.5px] shadow-sm mt-[10px]">
                    <text className="text-[20px] font-semibold text-[#000000]">
                        Club Deluxe King Suite
                    </text>
                    <div className="flex mt-[30px]">
                        <div>
                            <div>
                                <Img
                                    src= "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/138657253.jpg?k=907b74c830d66be4823229de1c01ce08ad65b6553802453c952a279677cdc501&o="
                                    className="w-[250px] h-[150px] object-cover"
                                    alt="trove1"
                                />
                                <div className="flex mt-[4px]">
                                    <Img
                                        src= "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/138657253.jpg?k=907b74c830d66be4823229de1c01ce08ad65b6553802453c952a279677cdc501&o="
                                        className="w-[123px] h-[100px] object-cover"
                                        alt="trove1"
                                    />
                                    <Img
                                        src= "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/138657253.jpg?k=907b74c830d66be4823229de1c01ce08ad65b6553802453c952a279677cdc501&o="
                                        className="ml-[4px] w-[123px] h-[100px] object-cover"
                                        alt="trove1"
                                    />

                                </div>
                            </div>
                            <div>
                                <div>
                                    <text className="text-[12px] text-[#5392F9] underline common-pointer">
                                        More Details
                                    </text>
                                </div>
                                <div className="mt-[30px]">
                                    <div className="mb-[10px] flex items-center">
                                        <BiBed size={23} className="text-[#464747]" />
                                        <text className="ml-4 text-[12px] text-[#464747]">
                                            1 king bed
                                        </text>
                                    </div>
                                    <div className="mb-[10px] flex items-center">
                                        <AiOutlineColumnWidth size={23} className="text-[#464747]" />
                                        <text className="ml-4 text-[12px] text-[#464747]">
                                            26m² | Floor: 27
                                        </text>
                                    </div>
                                    <div className="mb-[10px] flex items-center">
                                        <FaShower size={23} className="text-[#464747]" />
                                        <text className="ml-4 text-[12px] text-[#464747]">
                                            Private Bathroom
                                        </text>
                                    </div>
                                    <div className="mb-[15px] flex items-center">
                                        <MdOutlineSmokeFree size={23} className="text-[#464747]" />
                                        <text className="ml-4 text-[12px] text-[#464747]">
                                            Non-smoking
                                        </text>
                                    </div>
                                    <div className="mb-[15px] flex items-center">
                                        <FaWifi size={23} className="text-[#464747]" />
                                        <text className="ml-4 text-[12px] text-[#464747]">
                                            Free Wi-fi
                                        </text>
                                    </div>
                                    <div className="flex items-center">
                                        <text className="text-[12px] text-[#5392F9] underline common-pointer">
                                            See More
                                        </text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[70%] ml-[50px]">
                            <div className="bg-[#F6F2F2] p-5 flex justify-between">
                                <div>
                                    <text className="text-[14px] text-[#000000] font-semibold">
                                        Summary 
                                    </text>
                                </div>
                                <div>
                                    <text className="ml-[70px] text-[14px] text-[#000000] font-semibold">
                                        Capacity 
                                    </text>
                                </div>
                                <div>
                                    <text className="text-[14px] text-[#000000] font-semibold">
                                        Price per night 
                                    </text>
                                </div>
                            </div>
                            <div className="p-6 flex justify-between border-[#F6F2F2] border-r-[0.5px] border-l-[0.5px] border-b-[0.5px]">
                                <div>
                                    <div className="mb-[15px] flex items-center">
                                        <FiCoffee size={23} className="text-[#000000]" />
                                        <text className="ml-4 text-[12px] text-[#000000]">
                                            Breakfast at $ 15 
                                        </text>
                                    </div>
                                    <div className="mb-[15px] flex items-center">
                                        <MdMoneyOff size={23} className="text-[#000000]" />
                                        <text className="ml-4 text-[12px] text-[#000000]">
                                            Non-refundable
                                        </text>
                                    </div>
                                    <div className="mb-[15px] flex items-center">
                                        <FaCreditCard size={23} className="text-[#000000]" />
                                        <text className="ml-4 text-[12px] text-[#000000]">
                                            Prepay Online 
                                        </text>
                                    </div>
                                    <div className="mb-[15px] flex items-center">
                                        <IoMdTime size={23} className="text-[#949494]" />
                                        <text className="ml-4 text-[12px] text-[#949494]">
                                            Instant Confirmation
                                        </text>
                                    </div>
                                </div>
                                <div className="flex">
                                    <IoMdPerson size={23} className="text-[#000000]" />
                                    <IoMdPerson size={23} className="text-[#000000]" />
                                </div>
                                <div className="grid justify-items-end">
                                    <div>
                                        <text className="text-[14px] text-[#000000] line-through">
                                            $ 49
                                        </text>
                                    </div>
                                    <div>
                                        <text className="text-[30px] text-[#ED5C59] font-semibold">
                                            $ 45
                                        </text>
                                    </div> 
                                    <div className="mt-[30px] p-3 px-8 bg-[#5392F9] hover:bg-[#185ABD] rounded-[10px]">
                                        <text className="text-[#FFFFFF] text-[12px]">
                                            Book now
                                        </text>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* mobile */}
                <div className="md:block xl:hidden 2xl:hidden p-5 border border-[#EFEEEE] border-[0.5px] shadow-sm mt-[10px]">
                    <text className="text-[30px] font-semibold text-[#000000]">
                        Club Deluxe King Suite
                    </text>
                    <div className="mt-[30px]">
                        <div>
                            <div>
                                <Img
                                    src= "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/138657253.jpg?k=907b74c830d66be4823229de1c01ce08ad65b6553802453c952a279677cdc501&o="
                                    className="w-full h-[400px] object-cover"
                                    alt="trove1"
                                />
                            </div>
                            <div>
                                <div className="mt-[30px]">
                                    <div className="mb-[10px] flex items-center">
                                        <BiBed size={36} className="text-[#464747]" />
                                        <text className="ml-4 text-[24px] text-[#464747]">
                                            1 king bed
                                        </text>
                                    </div>
                                    <div className="mb-[10px] flex items-center">
                                        <AiOutlineColumnWidth size={36} className="text-[#464747]" />
                                        <text className="ml-4 text-[24px] text-[#464747]">
                                            26m² | Floor: 27
                                        </text>
                                    </div>
                                    <div className="mb-[10px] flex items-center">
                                        <FaShower size={36} className="text-[#464747]" />
                                        <text className="ml-4 text-[24px] text-[#464747]">
                                            Private Bathroom
                                        </text>
                                    </div>
                                    <div className="mb-[15px] flex items-center">
                                        <MdOutlineSmokeFree size={36} className="text-[#464747]" />
                                        <text className="ml-4 text-[24px] text-[#464747]">
                                            Non-smoking
                                        </text>
                                    </div>
                                    <div className="mb-[15px] flex items-center">
                                        <FaWifi size={36} className="text-[#464747]" />
                                        <text className="ml-4 text-[24px] text-[#464747]">
                                            Free Wi-fi
                                        </text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-[50px]">
                            <div className="bg-[#F6F2F2] p-[50px]">
                                <div className="flex justify-between border-[#F6F2F2] border-r-[0.5px] border-l-[0.5px] border-b-[0.5px]">
                                    <div>
                                        <div className="mb-[15px] flex items-center">
                                            <FiCoffee size={36} className="text-[#000000]" />
                                            <text className="ml-4 text-[24px] text-[#000000]">
                                                Breakfast at $ 15 
                                            </text>
                                        </div>
                                        <div className="mb-[15px] flex items-center">
                                            <MdMoneyOff size={36} className="text-[#000000]" />
                                            <text className="ml-4 text-[24px] text-[#000000]">
                                                Non-refundable
                                            </text>
                                        </div>
                                        <div className="mb-[15px] flex items-center">
                                            <FaCreditCard size={36} className="text-[#000000]" />
                                            <text className="ml-4 text-[24px] text-[#000000]">
                                                Prepay Online 
                                            </text>
                                        </div>
                                        <div className="mb-[15px] flex items-center">
                                            <IoMdTime size={36} className="text-[#949494]" />
                                            <text className="ml-4 text-[24px] text-[#949494]">
                                                Instant Confirmation
                                            </text>
                                        </div>
                                    </div>
                                    <div className="grid justify-items-end">
                                        <div className="flex">
                                            <IoMdPerson size={30} className="text-[#000000]" />
                                            <IoMdPerson size={30} className="text-[#000000]" />
                                        </div>
                                        <div>
                                            <text className="text-[20px] text-[#000000] line-through">
                                                $ 49
                                            </text>
                                        </div>
                                        <div>
                                            <text className="text-[40px] text-[#ED5C59] font-semibold">
                                                $ 45
                                            </text>
                                        </div> 
                                    </div>
                                </div>
                                <div className="mt-[70px] p-4 w-full bg-[#5392F9] hover:bg-[#185ABD] rounded-[10px] flex items-center justify-center">
                                    <text className="text-[#FFFFFF] text-[28px] text-center">
                                        Book now
                                    </text>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:hidden xl:block 2xl:block p-5 border border-[#EFEEEE] border-[0.5px] shadow-sm mt-[30px]">
                    <div id="facilities" className="flex justify-between items-center">
                        <text className="text-[20px] font-semibold text-[#000000]">
                            Amenities and facilities
                        </text>
                        <div className="flex items-end">
                            <text className="text-[12px] font-semibold text-[#AEAEAE]">
                                Facilities Rating:
                            </text>
                            <div className="bg-[#5392F9] p-3 ml-4 rounded-r-[8px] rounded-bl-[8px]">
                                <text className="font-semibold text-[14px] text-[#FFFFFF]">
                                    4.0 / 5
                                </text>
 
                            </div>
                        </div>
                    </div>
                    <div className="mt-[30px] grid grid-cols-4">
                        <div>
                            <text className="text-[14px] font-semibold text-[#000000]">
                                For kids
                            </text>
                            <div className="mt-[10px] flex items-center">
                                <TbSwimming size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Swimming pool [kids]
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <MdFamilyRestroom size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Family room
                                </text>
                            </div>
                            <div className="mt-[30px]">
                                <text className="text-[14px] font-semibold text-[#000000]">
                                    Languages spoken
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <MdOutlineLanguage size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    English
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <MdOutlineLanguage size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Chinese
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <MdOutlineLanguage size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Malay
                                </text>
                            </div>
                            <div className="mt-[30px]">
                                <text className="text-[14px] font-semibold text-[#000000]">
                                    Accessibility
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FaWheelchair size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Wheelchair accessible
                                </text>
                            </div>
                            <div className="mt-[30px]">
                                <text className="text-[14px] font-semibold text-[#000000]">
                                    Internet access
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FaWifi size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Free Wi-Fi in all rooms
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Internet services
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FaWifi size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Wi-Fi in public areas
                                </text>
                            </div>
                            <div className="mt-[30px]">
                                <text className="text-[14px] font-semibold text-[#000000]">
                                    Amenities
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <IoIosFitness size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Fitness center
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <TbSwimming size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Swimming pool [outdoor]
                                </text>
                            </div>
                        </div>

                        <div>
                            <text className="text-[14px] font-semibold text-[#000000]">
                                Cleanliness and safety
                            </text>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Daily disinfection in all rooms
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Daily disinfection in common areas
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Face coverings on staff
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    First aid kit
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Hand sanitizer
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Hot water linen and laundry washing
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Hygiene certification
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Individually-wrapped food options
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Physical distancing of at least 1 meter
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Protective screens in common areas
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Rooms sanitized between stays
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Safe dining setup
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Staff trained in safety protocol
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Sterilizing equipment
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Temperature check for guests and staff
                                </text>
                            </div>
                            <div className="mt-[30px]">
                                <text className="text-[14px] font-semibold text-[#000000]">
                                    Dining, drinking, and snacking
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <MdOutlineFastfood size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Halal Restaurant
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCoffee size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Breakfast Buffet
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCoffee size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Coffee Shop
                                </text>
                            </div>
                        </div>

                        <div>
                            <text className="text-[14px] font-semibold text-[#000000]">
                                Service and conveniences
                            </text>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Air conditioning in public area
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <IoMdCash size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Cash withdrawal
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <BsShop size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Conveniece store
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <GiBroom size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Daily housekeeping
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <BsDoorOpen size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Doorman
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <MdOutlineLocalLaundryService size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Dry cleaning
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <MdOutlineElevator size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Elevator
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <MdOutlineLocalLaundryService size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Laundry services
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <BsShop size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Shops
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <GiCigarette size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Smoking area
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <MdOutlineSmokeFree size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Smoke-free property
                                </text>
                            </div>
                            <div className="mt-[30px]">
                                <text className="text-[14px] font-semibold text-[#000000]">
                                    Access
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    CCTV in common areas
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <MdOutlineRoomService size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Check-in [24-hour]
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <MdOutlineRoomService size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Front desk [24-hour]
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Non-smoking rooms
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Safety and security features
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FiCheckCircle size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Smoke alarms
                                </text>
                            </div>
                            <div className="mt-[30px]">
                                <text className="text-[14px] font-semibold text-[#000000] mt-[30px]">
                                    Getting around
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FaParking size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Car park [free]
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <MdOutlineRoomService size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Valet Parking
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FaParking size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Car park [on-site]
                                </text>
                            </div>
                        </div>

                        <div>
                            <div className="">
                                <text className="text-[14px] font-semibold text-[#000000] mt-[30px]">
                                    Available in all rooms
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FaRegSnowflake size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Air conditioning
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <BiCloset size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Closet
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <MdDesk size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Desk
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <BiDrink size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Mini bar
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FaShower size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Private bathroom
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <GiSlippers size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Slippers
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <MdLocalPhone size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Telephone
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <GiTowel size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Towels
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FaPumpSoap size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Toiletries
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <GiWoodenCrate size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Wooden flooring
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FaWifi size={23} className="text-[#000000]" />
                                <text className="ml-4 text-[12px] text-[#000000]">
                                    Wi-Fi [free]
                                </text>
                            </div>
                        </div>

                    </div>
                    <div className="divide-y mt-[40px]">
                        <div className="">
                            <text className="text-[14px] font-semibold text-[#000000]">
                                Food and dining
                            </text>
                        </div>
                        <div className="mt-[15px]">
                            <text className="text-[12px] text-[#000000] font-[550]">
                                Restaurants on site
                            </text>
                            <div className="mt-[20px]">
                                <text className="text-[12px] text-[#000000] font-[540]">
                                    Lada & Clove
                                </text>
                                <div className="mt-[10px] flex items-center">
                                    <MdOutlineFastfood size={23} className="text-[#000000]" />
                                    <text className="ml-4 text-[12px] text-[#000000]">
                                        Cuisine: International
                                    </text>
                                </div>
                                <div className="mt-[10px] flex items-center">
                                    <BiMenu size={23} className="text-[#000000]" />
                                    <text className="ml-4 text-[12px] text-[#000000]">
                                        Menu: Buffet, A-la-carte
                                    </text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* mobile */}
                <div className="md:block xl:hidden 2xl:hidden p-5 border border-[#EFEEEE] border-[0.5px] shadow-sm mt-[30px]">
                    <div id="facilities" className="flex justify-between items-center">
                        <text className="text-[30px] font-semibold text-[#000000]">
                            Amenities and facilities
                        </text>
                        <div className="flex items-end">
                            <text className="text-[23px] font-semibold text-[#AEAEAE]">
                                Facilities Rating:
                            </text>
                            <div className="bg-[#5392F9] p-3 ml-4 rounded-r-[8px] rounded-bl-[8px]">
                                <text className="font-semibold text-[20px] text-[#FFFFFF]">
                                    4.0 / 5
                                </text>
 
                            </div>
                        </div>
                    </div>
                    <div className="mt-[30px]">
                        <div className="flex items-center mt-[20px]">
                            <TbSwimming size={36} className="text-[#000000]" />
                            <text className="ml-4 text-[24px] text-[#000000]">
                                Swimming pool
                            </text>
                        </div>
                        <div className="flex items-center mt-[20px]">
                            <FaWifi size={36} className="text-[#000000]" />
                            <text className="ml-4 text-[24px] text-[#000000]">
                                Internet access
                            </text>
                        </div>
                        <div className="flex items-center mt-[20px]">
                            <IoIosFitness size={36} className="text-[#000000]" />
                            <text className="ml-4 text-[24px] text-[#000000]">
                                Fitness center
                            </text>
                        </div>
                        <div className="flex items-center mt-[20px]">
                            <MdOutlineFastfood size={36} className="text-[#000000]" />
                            <text className="ml-4 text-[24px] text-[#000000]">
                                Halal Restaurant
                            </text>
                        </div>
                        <div className="flex items-center mt-[20px]">
                            <MdOutlineRoomService size={36} className="text-[#000000]" />
                            <text className="ml-4 text-[24px] text-[#000000]">
                                Check-in [24-hour]
                            </text>
                        </div>
                        <div className="flex items-center mt-[20px]">
                            <MdOutlineRoomService size={36} className="text-[#000000]" />
                            <text className="ml-4 text-[24px] text-[#000000]">
                                Front desk [24-hour]
                            </text>
                        </div>
                        <div className="flex items-center mt-[20px]">
                            <FiCheckCircle size={36} className="text-[#000000]" />
                            <text className="ml-4 text-[24px] text-[#000000]">
                                Non-smoking rooms
                            </text>
                        </div>
                        <div className="mt-[50px] p-4 w-full bg-[#FFFFFF] border border-[#5392F9] rounded-[10px] flex items-center justify-center">
                            <text className="text-[#5392F9] text-[28px] text-center">
                                More detail
                            </text>

                        </div>
                    </div>
                </div>

                {/* mobile */}
                <div className="md:block xl:hidden 2xl:hidden p-5 border border-[#EFEEEE] border-[0.5px] shadow-sm mt-[30px]">
                    <div className="">
                        <text className="text-[30px] font-semibold text-[#000000]">
                            Languages spoken
                        </text>
                    </div>
                    <div className="mt-[30px]">
                        <div className="mt-[20px] flex items-center">
                            <MdOutlineLanguage size={36} className="text-[#000000]" />
                            <text className="ml-4 text-[24px] text-[#000000]">
                                English
                            </text>
                        </div>
                        <div className="mt-[20px] flex items-center">
                            <MdOutlineLanguage size={36} className="text-[#000000]" />
                            <text className="ml-4 text-[24px] text-[#000000]">
                                Chinese
                            </text>
                        </div>
                        <div className="mt-[20px] flex items-center">
                            <MdOutlineLanguage size={36} className="text-[#000000]" />
                            <text className="ml-4 text-[24px] text-[#000000]">
                                Malay
                            </text>
                        </div>
                    </div>
                </div>

                <div className="md:hidden xl:block 2xl:block p-5 border border-[#EFEEEE] border-[0.5px] shadow-sm mt-[30px]">
                    <div className="flex justify-between items-center">
                        <text className="text-[20px] font-semibold text-[#000000]">
                            Location
                        </text>
                        <div className="flex items-end">
                            <text className="text-[12px] font-semibold text-[#AEAEAE]">
                                Location Rating:
                            </text>
                            <div className="bg-[#5392F9] p-3 ml-4 rounded-r-[8px] rounded-bl-[8px]">
                                <text className="font-semibold text-[14px] text-[#FFFFFF]">
                                    4.2 / 5
                                </text>
 
                            </div>
                        </div>
                    </div>
                    <div className="mt-[30px] grid grid-cols-3">
                        <div>
                            <text className="text-[14px] font-semibold text-[#000000]">
                                Airport
                            </text>
                            <div className="mt-[10px] flex items-center">
                                <GiAirplaneDeparture size={23} className="text-[#000000]" />
                                <div className="ml-4 grid">
                                    <text className="text-[11px] text-[#000000]">
                                        Seletar Airport (XSP) - Singapore
                                    </text>
                                    <text className="text-[11px] text-[#7D7B7B]">
                                        14.2 km (28 min drive)
                                    </text>
                                </div>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <GiAirplaneDeparture size={23} className="text-[#000000]" />
                                <div className="ml-4 grid">
                                    <text className="text-[11px] text-[#000000]">
                                    Senai International Airport (JHB) - Malaysia
                                    </text>
                                    <text className="text-[11px] text-[#7D7B7B]">
                                        20.7 km
                                    </text>
                                </div>
                            </div>
                        </div>

                        <div>
                            <text className="text-[14px] font-semibold text-[#000000]">
                                Public transportation
                            </text>
                            <div className="mt-[10px] flex items-center">
                                <FaBus size={20} className="text-[#000000]" />
                                <div className="ml-4 grid">
                                    <text className="text-[11px] text-[#000000]">
                                        Sentral Kotaraya Bus Terminal
                                    </text>
                                    <text className="text-[11px] text-[#7D7B7B]">
                                        1.6 km
                                    </text>
                                </div>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FaBus size={20} className="text-[#000000]" />
                                <div className="ml-4 grid">
                                    <text className="text-[11px] text-[#000000]">
                                        JB Sentral Railway Station
                                    </text>
                                    <text className="text-[11px] text-[#7D7B7B]">
                                        1.7 km (9 min drive)
                                    </text>
                                </div>
                            </div>
                            <div className="mt-[30px]">
                                <text className="text-[14px] font-semibold text-[#000000]">
                                    Hospital or clinic
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <FaHospital size={20} className="text-[#000000]" />
                                <div className="ml-4 grid">
                                    <text className="text-[11px] text-[#000000]">
                                        Century Orthopaedic Specialist Clinic
                                    </text>
                                    <text className="text-[11px] text-[#7D7B7B]">
                                        330 m
                                    </text>
                                </div>
                            </div>
                        </div>

                        <div>
                            <text className="text-[14px] font-semibold text-[#000000]">
                                Shopping
                            </text>
                            <div className="mt-[10px] flex items-center">
                                <BsBag size={23} className="text-[#000000]" />
                                <div className="ml-4 grid">
                                    <text className="text-[11px] text-[#000000]">
                                        Johor Bahru City Square
                                    </text>
                                    <text className="text-[11px] text-[#7D7B7B]">
                                        1.8 km
                                    </text>
                                </div>
                            </div>
                            <div className="mt-[30px]">
                                <text className="text-[14px] font-semibold text-[#000000]">
                                    Convenience store
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <text className="text-[11px] text-[#000000]">
                                    On-site
                                </text>
                            </div>
                            <div className="mt-[30px]">
                                <text className="text-[14px] font-semibold text-[#000000]">
                                    Cash withdrawal
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <text className="text-[11px] text-[#000000]">
                                    ATM on-site
                                </text>
                            </div>
                        </div>

                    </div>
                    <div className="divide-y mt-[40px]">
                        <div className="mt-[15px]">
                            <text className="text-[14px] font-semibold text-[#000000]">
                                What’s nearby
                            </text>
                        </div>
                        <div className="grid grid-cols-2">
                            <div>
                                <div className="mt-[30px]">
                                    <text className="text-[12px] text-[#000000] font-[540]">
                                        Popular landmarks
                                    </text>
                                    <div className="mt-[10px] flex items-center">
                                        <MdLocationOn size={23} className=" text-[#000000]" />
                                        <div className="ml-4 grid">
                                            <text className="text-[11px] text-[#000000]">
                                                KSL City Mall
                                            </text>
                                            <text className="text-[11px] text-[#7D7B7B]">
                                                810 m
                                            </text>
                                        </div>
                                    </div>
                                    <div className="mt-[10px] flex items-center">
                                        <MdLocationOn size={23} className="text-[#000000]" />
                                        <div className="ml-4 grid">
                                            <text className="text-[11px] text-[#000000]">
                                                Arulmigu Sri Rajakaliamman Glass Temple
                                            </text>
                                            <text className="text-[11px] text-[#7D7B7B]">
                                                990 m
                                            </text>
                                        </div>
                                    </div>
                                    <div className="mt-[10px] flex items-center">
                                        <MdLocationOn size={23} className="text-[#000000]" />
                                        <div className="ml-4 grid">
                                            <text className="text-[11px] text-[#000000]">
                                                Johor Zoo
                                            </text>
                                            <text className="text-[11px] text-[#7D7B7B]">
                                                1.6 km
                                            </text>
                                        </div>
                                    </div>
                                    <div className="mt-[10px] flex items-center">
                                        <MdLocationOn size={23} className="text-[#000000]" />
                                        <div className="ml-4 grid">
                                            <text className="text-[11px] text-[#000000]">
                                                Angry Birds Activity Park
                                            </text>
                                            <text className="text-[11px] text-[#7D7B7B]">
                                                1.6 km
                                            </text>
                                        </div>
                                    </div>
                                    <div className="mt-[10px] flex items-center">
                                        <MdLocationOn size={23} className="text-[#000000]" />
                                        <div className="ml-4 grid">
                                            <text className="text-[11px] text-[#000000]">
                                                Johor Bahru City Square
                                            </text>
                                            <text className="text-[11px] text-[#7D7B7B]">
                                                1.8 km
                                            </text>
                                        </div>
                                    </div>
                                    <div className="mt-[10px] flex items-center">
                                        <MdLocationOn size={23} className="text-[#000000]" />
                                        <div className="ml-4 grid">
                                            <text className="text-[11px] text-[#000000]">
                                                Danga Bay
                                            </text>
                                            <text className="text-[11px] text-[#7D7B7B]">
                                                4.8 km
                                            </text>
                                        </div>
                                    </div>
                                    <div className="mt-[10px] flex items-center">
                                        <MdLocationOn size={23} className="text-[#000000]" />
                                        <div className="ml-4 grid">
                                            <text className="text-[11px] text-[#000000]">
                                                Paradigm Mall Johor Bahru
                                            </text>
                                            <text className="text-[11px] text-[#7D7B7B]">
                                                9.4 km
                                            </text>
                                        </div>
                                    </div>
                                    <div className="mt-[10px] flex items-center">
                                        <MdLocationOn size={23} className="text-[#000000]" />
                                        <div className="ml-4 grid">
                                            <text className="text-[11px] text-[#000000]">
                                                Legoland Malaysia
                                            </text>
                                            <text className="text-[11px] text-[#7D7B7B]">
                                                15.8 km
                                            </text>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div>
                                <div className="mt-[30px]">
                                    <text className="text-[12px] text-[#000000] font-[540]">
                                        Nearby landmarks
                                    </text>
                                    <div className="mt-[10px] flex items-center">
                                        <MdLocationOn size={23} className="text-[#000000]" />
                                        <div className="ml-4 grid">
                                            <text className="text-[11px] text-[#000000]">
                                                Stadium Bandaraya Majlis Bandaraya Johor Bahru
                                            </text>
                                            <text className="text-[11px] text-[#7D7B7B]">
                                                280 m
                                            </text>
                                        </div>
                                    </div>
                                    <div className="mt-[10px] flex items-center">
                                        <MdLocationOn size={23} className="text-[#000000]" />
                                        <div className="ml-4 grid">
                                            <text className="text-[11px] text-[#000000]">
                                                Olympia College Johor Bahru
                                            </text>
                                            <text className="text-[11px] text-[#7D7B7B]">
                                                280 m
                                            </text>
                                        </div>
                                    </div>
                                    <div className="mt-[10px] flex items-center">
                                        <MdLocationOn size={23} className="text-[#000000]" />
                                        <div className="ml-4 grid">
                                            <text className="text-[11px] text-[#000000]">
                                                Plaza Pelangi
                                            </text>
                                            <text className="text-[11px] text-[#7D7B7B]">
                                                480 m
                                            </text>
                                        </div>
                                    </div>
                                    <div className="mt-[10px] flex items-center">
                                        <MdLocationOn size={23} className="text-[#000000]" />
                                        <div className="ml-4 grid">
                                            <text className="text-[11px] text-[#000000]">
                                                Tan England Women Clinic
                                            </text>
                                            <text className="text-[11px] text-[#7D7B7B]">
                                                540 m
                                            </text>
                                        </div>
                                    </div>
                                    <div className="mt-[10px] flex items-center">
                                        <MdLocationOn size={23} className="text-[#000000]" />
                                        <div className="ml-4 grid">
                                            <text className="text-[11px] text-[#000000]">
                                                Agrobank @ Wadi Hana
                                            </text>
                                            <text className="text-[11px] text-[#7D7B7B]">
                                                580 m
                                            </text>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="mt-[20px]">
                        <text className="text-[10px] text-[#7D7B7B]">
                            Distances shown are straight-line distances on the map. Actual travel distances may vary.
                        </text>
                    </div>
                </div>

                {/* mobile */}
                <div className="md:block xl:hidden 2xl:hidden p-5 border border-[#EFEEEE] border-[0.5px] shadow-sm mt-[30px]">
                    <div className="flex justify-between items-center">
                        <text className="text-[30px] font-semibold text-[#000000]">
                            Nearby
                        </text>
                    </div>
                    <div className="mt-[30px]">
                        <div className="mt-[20px] flex items-center">
                            <GiAirplaneDeparture size={36} className="text-[#000000]" />
                            <div className="ml-4 grid">
                                <text className="text-[24px] text-[#000000]">
                                    Seletar Airport (XSP) - Singapore
                                </text>
                                <text className="text-[24px] text-[#7D7B7B]">
                                    14.2 km (28 min drive)
                                </text>
                            </div>
                        </div>
                        <div className="mt-[20px] flex items-center">
                            <GiAirplaneDeparture size={36} className="text-[#000000]" />
                            <div className="ml-4 grid">
                                <text className="text-[24px] text-[#000000]">
                                Senai International Airport (JHB) - Malaysia
                                </text>
                                <text className="text-[24px] text-[#7D7B7B]">
                                    20.7 km
                                </text>
                            </div>
                        </div>
                        <div className="mt-[20px] flex items-center">
                            <FaBus size={36} className="text-[#000000]" />
                            <div className="ml-4 grid">
                                <text className="text-[24px] text-[#000000]">
                                    JB Sentral Railway Station
                                </text>
                                <text className="text-[24px] text-[#7D7B7B]">
                                    1.7 km (9 min drive)
                                </text>
                            </div>
                        </div>
                        <div className="mt-[20px] flex items-center">
                            <FaHospital size={36} className="text-[#000000]" />
                            <div className="ml-4 grid">
                                <text className="text-[24px] text-[#000000]">
                                    Century Orthopaedic Specialist Clinic
                                </text>
                                <text className="text-[24px] text-[#7D7B7B]">
                                    330 m
                                </text>
                            </div>
                        </div>
                        <div className="mt-[50px] p-4 w-full bg-[#FFFFFF] border border-[#5392F9] rounded-[10px] flex items-center justify-center">
                            <text className="text-[#5392F9] text-[28px] text-center">
                                More detail
                            </text>
                        </div>

                    </div>
                </div>

                <div className="md:hidden xl:block 2xl:block p-5 border border-[#EFEEEE] border-[0.5px] shadow-sm mt-[30px]">
                    <div className="flex justify-between items-center">
                        <text id="policy" className="text-[20px] font-semibold text-[#000000]">
                            Property policies
                        </text>
                    </div>
                    <div className="mt-[30px]">
                        <text className="font-[550] text-[14px] text-[#000000]">
                            Children and extra beds
                        </text>
                        <div>
                            <text className="text-[12px] text-[#000000]">
                                Extra beds are dependent on the room you choose. Please check the individual room capacity for more 
                                details. All children are welcome.
                            </text>
                        </div>
                    </div>
                    <div className="mt-[30px] grid grid-cols-3 gap-[10px]">
                        <div className="p-5 border-[1px] border-[#DAD8D8] rounded-[10px] divide-y">
                            <div className="flex items-center p-2">
                                <FaBaby size={20} className="text-[#000000]" />
                                <div className="ml-4">
                                    <text className="text-[12px] text-[#000000]">
                                        Infant 0-1 year(s)
                                    </text>
                                </div>
                            </div>
                            <div className="p-3 mt-[15px]">
                                <text className="text-[12px] text-[#000000] font-semibold">
                                    Stay for free if using existing bedding.
                                </text>
                                <div>
                                    <text className="text-[12px] text-[#575757]">
                                        Baby cot/crib available upon request
                                    </text>
                                </div>
                            </div>

                        </div>
                        <div className="p-5 border-[1px] border-[#DAD8D8] rounded-[10px] divide-y">
                            <div className="flex items-center p-2">
                                <FaChild size={20} className="text-[#000000]" />
                                <div className="ml-4">
                                    <text className="text-[12px] text-[#000000]">
                                        Children 2-11 year(s)
                                    </text>
                                </div>
                            </div>
                            <div className="p-3 mt-[15px]">
                                <text className="text-[12px] text-[#000000] font-semibold">
                                    Stay for free if using existing bedding.
                                </text>
                                <div>
                                    <text className="text-[12px] text-[#575757]">
                                        If you need an extra bed, it will incur an additional charge.
                                    </text>
                                </div>
                            </div>

                        </div>
                        <div className="p-5 border-[1px] border-[#DAD8D8] rounded-[10px] divide-y">
                            <div className="flex items-center p-2">
                                <IoMdPerson size={20} className="text-[#000000]" />
                                <div className="ml-4">
                                    <text className="text-[12px] text-[#000000]">
                                        Guests 12 years and older are considered as adults
                                    </text>
                                </div>
                            </div>
                            <div className="p-3 mt-[15px]">
                                <div className="mt-[15px]">
                                    <text className="text-[12px] text-[#575757]">
                                        Must use an extra bed which will incur an additional charge.
                                    </text>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="mt-[40px]">
                        <text className="text-[14px] font-[550] text-[#000000]">
                            Others
                        </text>
                        <div className="text-[12px] text-[#000000]">
                            When booking more than 5 rooms, different policies and additional supplements may apply.
                        </div>
                        
                    </div>

                    <div className="divide-y mt-[40px]">
                        <div className="">
                            <text className="text-[14px] font-semibold text-[#000000]">
                                Some helpful facts
                            </text>
                        </div>
                        <div className="grid grid-cols-3 mt-[15px]">
                            <div className="mt-[15px]">
                                <div className="mt-[30px]">
                                    <text className="text-[12px] text-[#000000] font-[540]">
                                        Check-in/Check-out
                                    </text>
                                    <div className="mt-[10px] flex items-center">
                                        <MdOutlineRoomService size={23} className="text-[#000000]" />
                                        <text className=" ml-4 text-[11px] text-[#000000]">
                                            Check-in from: <b>03:00 PM</b>
                                        </text>
                                    </div>
                                    <div className="mt-[10px] flex items-center">
                                        <MdOutlineRoomService size={23} className="text-[#000000]" />
                                        <text className=" ml-4 text-[11px] text-[#000000]">
                                            Check-out until: <b>12:00 PM</b>
                                        </text>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="mt-[30px]">
                                    <text className="text-[12px] text-[#000000] font-[540]">
                                        Extras
                                    </text>
                                    <div className="mt-[10px] flex items-center">
                                        <MdOutlineFastfood size={23} className="text-[#000000]" />
                                        <text className=" ml-4 text-[11px] text-[#000000]">
                                            Breakfast charge (unless included in room price): <b>$ 15</b>
                                        </text>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="mt-[30px]">
                                    <text className="text-[12px] text-[#000000] font-[540]">
                                        The property
                                    </text>
                                    <div className="mt-[10px] flex items-center">
                                        <BiDrink size={23} className="text-[#000000]" />
                                        <text className=" ml-4 text-[11px] text-[#000000]">
                                            Number of bars/lounges: <b>0</b>
                                        </text>
                                    </div>
                                    <div className="mt-[10px] flex items-center">
                                        <MdOutlineFastfood size={23} className="text-[#000000]" />
                                        <text className=" ml-4 text-[11px] text-[#000000]">
                                            Number of restaurants: <b>1</b>
                                        </text>
                                    </div>
                                    <div className="mt-[10px] flex items-center">
                                        <MdKey size={23} className="text-[#000000]" />
                                        <text className=" ml-4 text-[11px] text-[#000000]">
                                            Number of rooms : <b>283</b>
                                        </text>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                        

                </div>

                <div className="mt-[30px] md:hidden xl:block 2xl:block">
                    <text className="text-[20px] font-semibold text-[#000000]">
                        Recommendations properties nearby
                    </text>
                    <div className="mt-[20px] grid grid-cols-4 gap-[10px]">
                        <div>
                            <Img
                            src= "https://pix8.agoda.net/hotelImages/4861656/-1/db07c2744c9aa9deb0f7a144aa3c1e44.png?ca=9&ce=1&s=1024x768"
                            className="w-[310px] h-[200px] object-cover rounded-t-[30px]"
                            alt="trove1"
                            />
                            <div className="rounded-b-[30px] border-[#DAD8D8] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] p-[20px]">
                                <div className="flex justify-between">
                                    <div>
                                        <text className="text-[18px] font-semibold text-[#000000]">
                                            TROVE Johor Bahru
                                        </text>
                                        <div className="flex items-center">
                                            <MdLocationOn size={20} className="text-[#5392F9]" />
                                            <text className="ml-1 text-[10px] text-[#5392F9]">
                                                Johor Bahru City Center, Johor Bahru
                                            </text>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center">
                                            <text className="text-[16px] text-[#424242] font-medium">
                                                4
                                            </text>
                                            <FaStar size={20} className="text-[#EEA024]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[20px] divide-y">
                                    <div className="flex items-center">
                                        <div className="bg-[#5392F9] rounded-r-[8px] rounded-bl-[8px] p-[5px] px-[15px]">
                                            <text className="text-[#FFFFFF] text-[11px] font-semibold">
                                                4.3 / 5
                                            </text>
                                        </div>
                                        <div className="ml-1">
                                            <text className="text-[11px] text-[#000000]">
                                                1,293 Reviews
                                            </text>
                                        </div>
                                    </div>
                                    <div className="mt-[15px]">
                                        <div className="flex items-center mt-[15px]">
                                            <MdOutlineCheck  size={20} className="text-[#32A923]" /> 
                                            <text className="ml-2 text-[12px] text-[#32A923]">
                                                Breakfast available
                                            </text>
                                        </div>
                                        <div className="flex items-center">
                                            <MdOutlineCheck  size={20} className="text-[#32A923]" /> 
                                            <text className="ml-2 text-[12px] text-[#32A923]">
                                                Free cancellation
                                            </text>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[30px] flex justify-end w-full">

                                    <text className="font-semibold text-[24px] text-[#424242]">
                                        $ 45
                                    </text>

                                </div> 
                                <div className="mt-[10px] bg-[#5392F9] p-2 rounded-[10px]">
                                    <text className="text-[14px] font-semibold text-[#FFFFFF]">
                                        Book Now
                                    </text>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Img
                            src= "https://cf.bstatic.com/xdata/images/hotel/max1024x768/110224496.jpg?k=6987bfeb453c106e85d782b90e7c66f4286f43da3ef2fa620f7f83404d07b76e&o=&hp=1"
                            className="w-[310px] h-[200px] object-cover rounded-t-[30px]"
                            alt="KSL"
                            />
                            <div className="rounded-b-[30px] border-[#DAD8D8] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] p-[20px]">
                                <div className="flex justify-between">
                                    <div>
                                        <text className="text-[18px] font-semibold text-[#000000]">
                                            KSL Hotel & Resort
                                        </text>
                                        <div className="flex items-center">
                                            <MdLocationOn size={20} className="text-[#5392F9]" />
                                            <text className="ml-1 text-[10px] text-[#5392F9]">
                                                Johor Bahru City Center, Johor Bahru
                                            </text>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center">
                                            <text className="text-[16px] text-[#424242] font-medium">
                                                4.5
                                            </text>
                                            <FaStar size={20} className="text-[#EEA024]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[20px] divide-y">
                                    <div className="flex items-center">
                                        <div className="bg-[#5392F9] rounded-r-[8px] rounded-bl-[8px] p-[5px] px-[15px]">
                                            <text className="text-[#FFFFFF] text-[11px] font-semibold">
                                                4.2 / 5
                                            </text>
                                        </div>
                                        <div className="ml-1">
                                            <text className="text-[11px] text-[#000000]">
                                                8,141 Reviews
                                            </text>
                                        </div>
                                    </div>
                                    <div className="mt-[15px]">
                                        <div className="flex items-center mt-[15px]">
                                            <MdOutlineCheck  size={20} className="text-[#32A923]" /> 
                                            <text className="ml-2 text-[12px] text-[#32A923]">
                                                Breakfast available
                                            </text>
                                        </div>
                                        <div className="flex items-center">
                                            <MdOutlineCheck  size={20} className="text-[#32A923]" /> 
                                            <text className="ml-2 text-[12px] text-[#32A923]">
                                                Pay later
                                            </text>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[30px] flex justify-end w-full">

                                    <text className="font-semibold text-[24px] text-[#424242]">
                                        $ 97
                                    </text>

                                </div> 
                                <div className="mt-[10px] border-[1px] border-[#5392F9] p-2 rounded-[10px]">
                                    <text className="text-[14px] font-semibold text-[#5392F9]">
                                        View Property
                                    </text>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Img
                            src= "https://cf.bstatic.com/xdata/images/hotel/max1024x768/318933354.jpg?k=8b5831f815f4387547f9d87631ee44055b97f1e0e88ad1b00d8eb5ae990e1517&o=&hp=1"
                            className="w-[310px] h-[200px] object-cover rounded-t-[30px]"
                            alt="fives"
                            />
                            <div className="rounded-b-[30px] border-[#DAD8D8] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] p-[20px]">
                                <div className="flex justify-between">
                                    <div>
                                        <text className="text-[18px] font-semibold text-[#000000]">
                                            Fives Hotel
                                        </text>
                                        <div className="flex items-center">
                                            <MdLocationOn size={20} className="text-[#5392F9]" />
                                            <text className="ml-1 text-[10px] text-[#5392F9]">
                                                Johor Bahru City Center, Johor Bahru
                                            </text>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center">
                                            <text className="text-[16px] text-[#424242]">
                                                4
                                            </text>
                                            <FaStar size={20} className="text-[#EEA024]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[20px] divide-y">
                                    <div className="flex items-center">
                                        <div className="bg-[#5392F9] rounded-r-[8px] rounded-bl-[8px] p-[5px] px-[15px]">
                                            <text className="text-[#FFFFFF] text-[11px] font-semibold">
                                                4.3 / 5
                                            </text>
                                        </div>
                                        <div className="ml-1">
                                            <text className="text-[11px] text-[#000000]">
                                                7,241 Reviews
                                            </text>
                                        </div>
                                    </div>
                                    <div className="mt-[15px]">
                                        <div className="flex items-center mt-[15px]">
                                            <MdOutlineCheck  size={20} className="text-[#32A923]" /> 
                                            <text className="ml-2 text-[12px] text-[#32A923]">
                                                Free cancellation
                                            </text>
                                        </div>
                                        <div className="flex items-center">
                                            <MdOutlineCheck  size={20} className="text-[#32A923]" /> 
                                            <text className="ml-2 text-[12px] text-[#32A923]">
                                                Pay later
                                            </text>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[30px] flex justify-end w-full">

                                    <text className="font-semibold text-[24px] text-[#424242]">
                                        $ 124
                                    </text>

                                </div> 
                                <div className="mt-[10px] border-[1px] border-[#5392F9] p-2 rounded-[10px]">
                                    <text className="text-[14px] font-semibold text-[#5392F9]">
                                        View Property
                                    </text>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Img
                            src= "https://cf.bstatic.com/xdata/images/hotel/max1024x768/303201344.jpg?k=4cd6aa179017d7700c0f14584c385b2137c9e55e031fe156b6cf8cc55b68e2a8&o=&hp=1"
                            className="w-[310px] h-[200px] object-cover rounded-t-[30px]"
                            alt="forestct"
                            />
                            <div className="rounded-b-[30px] border-[#DAD8D8] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] p-[20px]">
                                <div className="flex justify-between">
                                    <div>
                                        <text className="text-[18px] font-semibold text-[#000000]">
                                            Forest City Golf Hotel
                                        </text>
                                        <div className="flex items-center">
                                            <MdLocationOn size={20} className="text-[#5392F9]" />
                                            <text className="ml-1 text-[10px] text-[#5392F9]">
                                                Gelang Patah/Legoland, Johor Bahru
                                            </text>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center">
                                            <text className="text-[16px] text-[#424242]">
                                                4
                                            </text>
                                            <FaStar size={20} className="text-[#EEA024]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[20px] divide-y">
                                    <div className="flex items-center">
                                        <div className="bg-[#5392F9] rounded-r-[8px] rounded-bl-[8px] p-[5px] px-[15px]">
                                            <text className="text-[#FFFFFF] text-[11px] font-semibold">
                                                4.0 / 5
                                            </text>
                                        </div>
                                        <div className="ml-1">
                                            <text className="text-[11px] text-[#000000]">
                                                1,100 Reviews
                                            </text>
                                        </div>
                                    </div>
                                    <div className="mt-[15px]">
                                        <div className="flex items-center mt-[15px]">
                                            <MdOutlineCheck  size={20} className="text-[#32A923]" /> 
                                            <text className="ml-2 text-[12px] text-[#32A923]">
                                                Breakfast available
                                            </text>
                                        </div>
                                        <div className="flex items-center">
                                            <MdOutlineCheck  size={20} className="text-[#32A923]" /> 
                                            <text className="ml-2 text-[12px] text-[#32A923]">
                                                Free cancellation
                                            </text>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[30px] flex justify-end w-full">

                                    <text className="font-semibold text-[24px] text-[#424242]">
                                        $ 84
                                    </text>

                                </div> 
                                <div className="mt-[10px] border-[1px] border-[#5392F9] p-2 rounded-[10px]">
                                    <text className="text-[14px] font-semibold text-[#5392F9]">
                                        View Property
                                    </text>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>

                <div className="md:hidden xl:block 2xl:block p-5 border border-[#EFEEEE] border-[0.5px] shadow-sm mt-[30px]">
                    <div className="flex justify-between items-center">
                        <text id="review" className="text-[20px] font-semibold text-[#000000]">
                            Reviews of TROVE Johor Bahru
                        </text>
                    </div>

                    <div className="flex">

                        <div className="mt-[30px]">
                            <div className="bg-[#5392F9] rounded-r-[8px] rounded-bl-[8px] p-[5px]">
                                <text className="text-[#FFFFFF] font-semibold text-[25px]">
                                    4.3 / 5
                                </text>
                            </div>
                            <div className="mt-2">
                                <text className="text-[12px] text-[#424242]">
                                    from 1,293 Reviewers
                                </text>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 mt-[30px] ml-[80px] gap-[80px]">

                            <div>
                                <div className="">
                                    <div class="w-[400px] align-center items-center align-middle content-center flex ml-2">
                                        <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1 h-2">
                                            <div class="bg-[#5392F9] rounded leading-none py-1 text-center dark:bg-blue-500 w-[73%] h-2"></div>
                                         </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <text className="text-[14px] text-[#000000]">
                                            Cleanliness
                                        </text>
                                        <text className="text-[14px] text-[#000000] font-semibold">
                                            4.7
                                        </text>
                                    </div>
                                </div>
                                <div className="mt-[30px]">
                                    <div class="w-[400px] align-center items-center align-middle content-center flex ml-2">
                                        <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1 h-2">
                                            <div class="bg-[#5392F9] rounded leading-none py-1 text-center dark:bg-blue-500 w-[78%] h-2"></div>
                                         </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <text className="text-[14px] text-[#000000]">
                                            Location
                                        </text>
                                        <text className="text-[14px] text-[#000000] font-semibold">
                                            4.8
                                        </text>
                                    </div>
                                </div>
                                <div className="mt-[30px]">
                                    <div class="w-[400px] align-center items-center align-middle content-center flex ml-2">
                                        <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1 h-2">
                                            <div class="bg-[#5392F9] rounded leading-none py-1 text-center dark:bg-blue-500 w-[73%] h-2"></div>
                                         </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <text className="text-[14px] text-[#000000]">
                                            Value for money
                                        </text>
                                        <text className="text-[14px] text-[#000000] font-semibold">
                                            4.7
                                        </text>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="">
                                    <div class="w-[400px] align-center items-center align-middle content-center flex ml-2">
                                        <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1 h-2">
                                            <div class="bg-[#5392F9] rounded leading-none py-1 text-center dark:bg-blue-500 w-[67%] h-2"></div>
                                         </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <text className="text-[14px] text-[#000000]">
                                            Facilities
                                        </text>
                                        <text className="text-[14px] text-[#000000] font-semibold">
                                            4.2
                                        </text>
                                    </div>
                                </div>
                                <div className="mt-[30px]">
                                    <div class="w-[400px] align-center items-center align-middle content-center flex ml-2">
                                        <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1 h-2">
                                            <div class="bg-[#5392F9] rounded leading-none py-1 text-center dark:bg-blue-500 w-[73%] h-2"></div>
                                         </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <text className="text-[14px] text-[#000000]">
                                            Services
                                        </text>
                                        <text className="text-[14px] text-[#000000] font-semibold">
                                            4.7
                                        </text>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="mt-[50px]">
                        <text className="text-[14px] text-[#000000] font-medium">
                            Filter reviews
                        </text>
                    </div>
                    <div className="flex mt-[10px]">
                        <select id="currency" class="p-3 bg-[#FFFFFF] rounded-[10px] border border-[#949494] border-[0.5px] text-[12px] text-[#423A36] focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option className="text-[13px]" selected>All guests (1,293)</option>\
                            <option className="text-[13px]" value="business">Business traveler (200)</option>
                            <option className="text-[13px]" value="couple">Couples (593)</option>
                            <option className="text-[13px]" value="solo">Solo traveler (200)</option>
                            <option className="text-[13px]" value="fy">Family with young children (100)</option>
                            <option className="text-[13px]" value="fo">Family with older children (100)</option>
                            <option className="text-[13px]" value="group">Group (100)</option>
                        </select>
                        <select id="currency" class="ml-4 p-3 bg-[#FFFFFF] rounded-[10px] border border-[#949494] border-[0.5px] text-[12px] text-[#423A36] focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option className="text-[13px]" selected>All room types</option>\
                            <option className="text-[13px]" value="standard">Standard Twin</option>
                            <option className="text-[13px]" value="Club">Club Deluxe King Suite</option>
                        </select>
                        <select id="currency" class="ml-4 p-3 bg-[#FFFFFF] rounded-[10px] border border-[#949494] border-[0.5px] text-[12px] text-[#423A36] focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option className="text-[13px]" selected>All languages</option>\
                            <option className="text-[13px]" >English</option>
                            <option className="text-[13px]" >Bahasa Malaysia</option>
                            <option className="text-[13px]" >Bahasa Indonesia</option>
                            <option className="text-[13px]" >한국어</option>
                            <option className="text-[13px]" >简体中文</option>
                            <option className="text-[13px]" >繁體中文 (香港)</option>
                            <option className="text-[13px]" >繁體中文 (台灣)</option>
                            <option className="text-[13px]" >ภาษาไทย</option>
                            <option className="text-[13px]" >Français</option>
                            <option className="text-[13px]" >日本語</option>
                            <option className="text-[13px]" >Čeština</option>
                            <option className="text-[13px]" >Dansk</option>
                            <option className="text-[13px]" >Deutsch</option>
                            <option className="text-[13px]" >Italiano</option>
                            <option className="text-[13px]" >Tiếng Việt</option>
                            <option className="text-[13px]" >Język polski</option>
                        </select>

                    </div>

                    <div className="mt-[50px] flex">
                        <text className="text-[14px] text-[#000000] font-medium">
                            Show reviews that mentions
                        </text>
                        <div className="ml-8 bg-[#5392F9] rounded-[50px] flex p-3 px-5">
                            <text className="text-[14px] text-[#FFFFFF]">
                                All Reviews
                            </text>
                        </div>
                        <div className="ml-2 border border-[0.5px] border-[#949494] rounded-[50px] flex p-3 px-5">
                            <text className="text-[14px] text-[#000000]">
                                Breakfast
                            </text>
                        </div>
                        <div className="ml-2 border border-[0.5px] border-[#949494] rounded-[50px] flex p-3 px-5">
                            <text className="text-[14px] text-[#000000]">
                                Spacious room
                            </text>
                        </div>
                        <div className="ml-2 border border-[0.5px] border-[#949494] rounded-[50px] flex p-3 px-5">
                            <text className="text-[14px] text-[#000000]">
                                House keeping
                            </text>
                        </div>
                        <div className="ml-2 border border-[0.5px] border-[#949494] rounded-[50px] flex p-3 px-5">
                            <text className="text-[14px] text-[#000000]">
                                Swimming pool
                            </text>
                        </div>
                    </div>

                    <div className="mt-[50px] flex justify-between items-center">
                        <div className="">
                            <text className="text-[12px] text-[#000000]">
                                Showing 1,293 reviews
                            </text>
                        </div>
                        <div className="flex items-center">
                            <text className="text-[12px] text-[#000000]">
                                Sorty by
                            </text>
                            <select id="currency" class="ml-4 p-3 bg-[#FFFFFF] rounded-[10px] border border-[#949494] border-[0.5px] text-[12px] text-[#423A36] focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option className="text-[13px]" selected>Most recent</option>\
                                <option className="text-[13px]" >Rating, high to low</option>
                                <option className="text-[13px]" >Rating, low to high</option>
                                <option className="text-[13px]" >Most helpful</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-[20px] border border-[0.5px] border-[#EFEEEE] grid grid-cols-2 p-8">
                        <div>
                            <div className="flex items-center">
                                <text className="text-[34px] text-[#5392F9] font-bold">
                                    4.5
                                </text>
                                <FaStar size={24} className="text-[#EEA024]" />
                            </div>
                            <div className="mt-[30px] flex items-center">
                                <IoMdPerson size={23} className="text-[#575757]" />
                                <text className=" ml-4 text-[12px] text-[#575757] font-semibold">
                                    Allysh
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <MdLuggage size={23} className="text-[#575757]" />
                                <text className=" ml-4 text-[12px] text-[#575757]">
                                    Couple
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <BiBed size={23} className="text-[#575757]" />
                                <text className=" ml-4 text-[12px] text-[#575757]">
                                    Club Deluxe King Suite
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <MdOutlineCalendarToday size={23} className="text-[#575757]" />
                                <text className=" ml-4 text-[12px] text-[#575757]">
                                    Stayed 1 night on April 2023
                                </text>
                            </div>

                        </div>
                        <div className="">
                            <div className="">
                                <text className="text-[28px] text-[#000000] font-medium">
                                    “Amazing Hotel!”
                                </text>
                            </div>
                            <div className="mt-[20px]">
                                <text className="text-[12px] text-[#575757]">
                                    Oh my I can’t describe how excellent this hotel is. 1. Strategic location where you can access 
                                    to various food stall at night. 2. Very nice room. Bright, high floor. Bathroom very clean and 
                                    luxurious. Comes with complimentary toiletries. The best part for me is the water dispenser! 
                                    We can just get drinking water either warm or cold at anytime, and they provide bottled water too! 
                                    Bed clean and comfy. Nice view where they provide sofa and coffee table. It’s relaxing and enjoying 
                                    when you sit there having a coffee in the morning. 3. Air cond well maintained. 4. Beautiful 
                                    refrigerator. 5. You can just spend all day in the room.
                                </text>
                            </div>
                            <div className="flex items-center justify-between mt-[50px]">
                                <text className="text-[12px] text-[#575757] ">
                                    Reviewed June 10, 2023
                                </text>
                                <div className="bg-[#5392F9] rounded-[10px] p-3">
                                    <text className="text-[#FFFFFF] text-[14px] font-bold">
                                        See room deals
                                    </text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[20px] border border-[0.5px] border-[#EFEEEE] grid grid-cols-2 p-8">
                        <div>
                            <div className="flex items-center">
                                <text className="text-[34px] text-[#5392F9] font-bold">
                                    4.1
                                </text>
                                <FaStar size={24} className="text-[#EEA024]" />
                            </div>
                            <div className="mt-[30px] flex items-center">
                                <IoMdPerson size={23} className="text-[#575757]" />
                                <text className=" ml-4 text-[12px] text-[#575757] font-semibold">
                                    Nadya 
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <MdLuggage size={23} className="text-[#575757]" />
                                <text className=" ml-4 text-[12px] text-[#575757]">
                                    Couple
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <BiBed size={23} className="text-[#575757]" />
                                <text className=" ml-4 text-[12px] text-[#575757]">
                                    Standard Twin Room
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <MdOutlineCalendarToday size={23} className="text-[#575757]" />
                                <text className=" ml-4 text-[12px] text-[#575757]">
                                    Stayed 1 night on May 2023
                                </text>
                            </div>

                        </div>
                        <div className="">
                            <div className="">
                                <text className="text-[28px] text-[#000000] font-medium">
                                    “Very satisfied”
                                </text>
                            </div>
                            <div className="mt-[20px]">
                                <text className="text-[12px] text-[#575757]">
                                    The hotel was wonderful. It was even better than expected. The price was amazing. 
                                    There were great restaurants within walking distance. Would definitely stay there 
                                    again.The bed was extremely comfortable. The room was spacious and clean. Got 
                                    many facilities.
                                </text>
                            </div>
                            <div className="flex items-center justify-between mt-[50px]">
                                <text className="text-[12px] text-[#575757] ">
                                    Reviewed May 12, 2023
                                </text>
                                <div className="bg-[#5392F9] rounded-[10px] p-3">
                                    <text className="text-[#FFFFFF] text-[14px] font-bold">
                                        See room deals
                                    </text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[20px] border border-[0.5px] border-[#EFEEEE] grid grid-cols-2 p-8">
                        <div>
                            <div className="flex items-center">
                                <text className="text-[34px] text-[#5392F9] font-bold">
                                    5
                                </text>
                                <FaStar size={24} className="text-[#EEA024]" />
                            </div>
                            <div className="mt-[30px] flex items-center">
                                <IoMdPerson size={23} className="text-[#575757]" />
                                <text className=" ml-4 text-[12px] text-[#575757] font-semibold">
                                    Syazwana 
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <MdLuggage size={23} className="text-[#575757]" />
                                <text className=" ml-4 text-[12px] text-[#575757]">
                                    Family with young children
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <BiBed size={23} className="text-[#575757]" />
                                <text className=" ml-4 text-[12px] text-[#575757]">
                                    Club Deluxe King Suite
                                </text>
                            </div>
                            <div className="mt-[10px] flex items-center">
                                <MdOutlineCalendarToday size={23} className="text-[#575757]" />
                                <text className=" ml-4 text-[12px] text-[#575757]">
                                    Stayed 3 nights in January 2023
                                </text>
                            </div>

                        </div>
                        <div className="">
                            <div className="">
                                <text className="text-[28px] text-[#000000] font-medium">
                                    “EXCELLENT SERVICE HOTEL”
                                </text>
                            </div>
                            <div className="mt-[20px]">
                                <text className="text-[12px] text-[#575757]">
                                    Managed to check in earlier with extra cost. Very clean hotel. Helpful staff. 
                                    Convenient to find food. Near Plaza pelangi, ksl mall. Check out with ease! 
                                    The fastest hotel to check out, basically just return key card to recep 
                                    and there you go. Will stay again this hotel in future.
                                </text>
                            </div>
                            <div className="flex items-center justify-between mt-[50px]">
                                <text className="text-[12px] text-[#575757] ">
                                    Reviewed January 24, 2023
                                </text>
                                <div className="bg-[#5392F9] rounded-[10px] p-3">
                                    <text className="text-[#FFFFFF] text-[14px] font-bold">
                                        See room deals
                                    </text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" items-center pt-[50px] flex justify-center gap-[20px]">
                        <div>
                            <BsChevronLeft size={15} className="" />
                        </div>
                        <div>
                            <text className="text-[18px] text-[#5392F9] font-semibold">
                                1
                            </text>
                        </div>
                        <div>
                            <text className="text-[18px]">
                                2
                            </text>
                        </div>
                        <div>
                            <text className="text-[18px]">
                                3
                            </text>
                        </div>
                        <div>
                            <text className="text-[18px]">
                                4
                            </text>
                        </div>
                        <div>
                            <text className="text-[18px]">
                                5
                            </text>
                        </div>
                        <div>
                            <BsChevronRight size={15} className="" />
                        </div>
                    </div>
                        

                </div>

                {/* mobile */}
                <div className="md:block xl:hidden 2xl:hidden p-5 border border-[#EFEEEE] border-[0.5px] shadow-sm mt-[30px]">
                    <div className="flex justify-between items-center">
                        <text id="review" className="text-[30px] font-semibold text-[#000000]">
                            Helpful Reviews on TROVE Johor Bahru
                        </text>
                    </div>

                    <div className="">

                        <div className="mt-[30px] flex items-center">
                            <div className="bg-[#5392F9] rounded-r-[8px] rounded-bl-[8px] p-[10px]">
                                <text className="text-[#FFFFFF] font-semibold text-[35px]">
                                    4.3 / 5
                                </text>
                            </div>
                            <div className="ml-4">
                                <text className="text-[22px] text-[#424242]">
                                    from 1,293 Reviewers
                                </text>
                            </div>
                        </div>

                        <div className="mt-[50px]">
                            <div className="">
                                <div class="w-[830px] align-center items-center align-middle content-center flex ml-2">
                                    <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1 h-3">
                                        <div class="bg-[#5392F9] rounded leading-none py-1 text-center dark:bg-blue-500 w-[73%] h-3"></div>
                                     </div>
                                </div>
                                <div className="flex justify-between">
                                    <text className="text-[24px] text-[#000000]">
                                        Cleanliness
                                    </text>
                                    <text className="text-[24px] text-[#000000] font-semibold">
                                        4.7
                                    </text>
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <div class="w-[830px] align-center items-center align-middle content-center flex ml-2">
                                    <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1 h-3">
                                        <div class="bg-[#5392F9] rounded leading-none py-1 text-center dark:bg-blue-500 w-[78%] h-3"></div>
                                     </div>
                                </div>
                                <div className="flex justify-between">
                                    <text className="text-[24px] text-[#000000]">
                                        Location
                                    </text>
                                    <text className="text-[24px] text-[#000000] font-semibold">
                                        4.8
                                    </text>
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <div class="w-[830px] align-center items-center align-middle content-center flex ml-2">
                                    <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1 h-3">
                                        <div class="bg-[#5392F9] rounded leading-none py-1 text-center dark:bg-blue-500 w-[73%] h-3"></div>
                                     </div>
                                </div>
                                <div className="flex justify-between">
                                    <text className="text-[24px] text-[#000000]">
                                        Value for money
                                    </text>
                                    <text className="text-[24px] text-[#000000] font-semibold">
                                        4.7
                                    </text>
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <div class="w-[830px] align-center items-center align-middle content-center flex ml-2">
                                    <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1 h-3">
                                        <div class="bg-[#5392F9] rounded leading-none py-1 text-center dark:bg-blue-500 w-[67%] h-3"></div>
                                     </div>
                                </div>
                                <div className="flex justify-between">
                                    <text className="text-[24px] text-[#000000]">
                                        Facilities
                                    </text>
                                    <text className="text-[24px] text-[#000000] font-semibold">
                                        4.2
                                    </text>
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <div class="w-[830px] align-center items-center align-middle content-center flex ml-2">
                                    <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1 h-3">
                                        <div class="bg-[#5392F9] rounded leading-none py-1 text-center dark:bg-blue-500 w-[73%] h-3"></div>
                                     </div>
                                </div>
                                <div className="flex justify-between">
                                    <text className="text-[24px] text-[#000000]">
                                        Services
                                    </text>
                                    <text className="text-[24px] text-[#000000] font-semibold">
                                        4.7
                                    </text>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-[50px] flex justify-between items-center">
                        <div className="">
                            <text className="text-[22px] text-[#000000]">
                                Showing 1,293 reviews
                            </text>
                        </div>
                        <div className="flex items-center">
                            <text className="text-[22px] text-[#000000]">
                                Sorty by
                            </text>
                            <select id="currency" class="ml-4 p-3 bg-[#FFFFFF] rounded-[10px] border border-[#949494] border-[0.5px] text-[22px] text-[#423A36] focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option className="text-[13px]" selected>Most recent</option>\
                                <option className="text-[13px]" >Rating, high to low</option>
                                <option className="text-[13px]" >Rating, low to high</option>
                                <option className="text-[13px]" >Most helpful</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-[20px] border border-[0.5px] border-[#EFEEEE] p-5">
                        <div className="justify-between flex">
                            <div className="">
                                <text className="text-[28px] text-[#000000] font-medium">
                                    “Amazing Hotel!”
                                </text>
                            </div>
                            <div className="flex items-center">
                                <text className="text-[34px] text-[#5392F9] font-bold">
                                    4.5
                                </text>
                                <FaStar size={24} className="text-[#EEA024]" />
                            </div>
                        </div>
                        <div className="">
                                <text className="text-[21px] text-[#575757]">
                                    Reviewed June 10, 2023
                                </text>
                            </div>
                        <div className="border-t-[2px]">
                            <div className="mt-[20px]">
                                <text className="text-[25px] text-[#575757]">
                                    Oh my I can’t describe how excellent this hotel is. 1. Strategic location where you can access 
                                    to various food stall at night. 2. Very nice room. Bright, high floor. Bathroom very clean and 
                                    luxurious. Comes with complimentary toiletries. The best part for me is the water dispenser! 
                                    We can just get drinking water either warm or cold at anytime, and they provide bottled water too! 
                                    Bed clean and comfy. Nice view where they provide sofa and coffee table. It’s relaxing and enjoying 
                                    when you sit there having a coffee in the morning. 3. Air cond well maintained. 4. Beautiful 
                                    refrigerator. 5. You can just spend all day in the room.
                                </text>
                            </div>
                            <div className="flex items-center justify-between mt-[50px] border-t-[2px] w-full">
                                <div className="flex items-center mt-[30px]">
                                    <div className="">
                                        <text className=" ml-4 text-[24px] text-[#575757] font-semibold">
                                            Allysh 
                                        </text>
                                    </div>
                                    <div className="">
                                        <text className=" ml-4 text-[24px] text-[#575757]">
                                            | Couple 
                                        </text>
                                    </div>

                                </div>
                            </div>
                            <div className="mt-[20px] p-4 w-full bg-[#FFFFFF] border border-[#5392F9] rounded-[10px] flex items-center justify-center">
                                <text className="text-[#5392F9] text-[28px] text-center">
                                    See room detail
                                </text>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[20px] border border-[0.5px] border-[#EFEEEE] p-5">
                        <div className="justify-between flex">
                            <div className="">
                                <text className="text-[28px] text-[#000000] font-medium">
                                    “Very satisfied”
                                </text>
                            </div>
                            <div className="flex items-center">
                                <text className="text-[34px] text-[#5392F9] font-bold">
                                    4.1
                                </text>
                                <FaStar size={24} className="text-[#EEA024]" />
                            </div>
                        </div>
                        <div className="">
                                <text className="text-[21px] text-[#575757]">
                                    Reviewed May 12, 2023
                                </text>
                            </div>
                        <div className="border-t-[2px]">
                            <div className="mt-[20px]">
                                <text className="text-[25px] text-[#575757]">
                                    The hotel was wonderful. It was even better than expected. The price was amazing. 
                                    There were great restaurants within walking distance. Would definitely stay there 
                                    again.The bed was extremely comfortable. The room was spacious and clean. Got 
                                    many facilities.
                                </text>
                            </div>
                            <div className="flex items-center justify-between mt-[50px] border-t-[2px] w-full">
                                <div className="flex items-center mt-[30px]">
                                    <div className="">
                                        <text className=" ml-4 text-[24px] text-[#575757] font-semibold">
                                            Nadya 
                                        </text>
                                    </div>
                                    <div className="">
                                        <text className=" ml-4 text-[24px] text-[#575757]">
                                            | Couple 
                                        </text>
                                    </div>

                                </div>
                            </div>
                            <div className="mt-[20px] p-4 w-full bg-[#FFFFFF] border border-[#5392F9] rounded-[10px] flex items-center justify-center">
                                <text className="text-[#5392F9] text-[28px] text-center">
                                    See room detail
                                </text>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[20px] border border-[0.5px] border-[#EFEEEE] p-5">
                        <div className="justify-between flex">
                            <div className="">
                                <text className="text-[28px] text-[#000000] font-medium">
                                    “EXCELLENT SERVICE HOTEL”
                                </text>
                            </div>
                            <div className="flex items-center">
                                <text className="text-[34px] text-[#5392F9] font-bold">
                                    5
                                </text>
                                <FaStar size={24} className="text-[#EEA024]" />
                            </div>
                        </div>
                        <div className="">
                                <text className="text-[21px] text-[#575757]">
                                    Reviewed May 12, 2023
                                </text>
                            </div>
                        <div className="border-t-[2px]">
                            <div className="mt-[20px]">
                                <text className="text-[25px] text-[#575757]">
                                    Managed to check in earlier with extra cost. Very clean hotel. Helpful staff. 
                                    Convenient to find food. Near Plaza pelangi, ksl mall. Check out with ease! 
                                    The fastest hotel to check out, basically just return key card to recep 
                                    and there you go. Will stay again this hotel in future.
                                </text>
                            </div>
                            <div className="flex items-center justify-between mt-[50px] border-t-[2px] w-full">
                                <div className="flex items-center mt-[30px]">
                                    <div className="">
                                        <text className=" ml-4 text-[24px] text-[#575757] font-semibold">
                                            Syazwana 
                                        </text>
                                    </div>
                                    <div className="">
                                        <text className=" ml-4 text-[24px] text-[#575757]">
                                            | Family with young children 
                                        </text>
                                    </div>

                                </div>
                            </div>
                            <div className="mt-[20px] p-4 w-full bg-[#FFFFFF] border border-[#5392F9] rounded-[10px] flex items-center justify-center">
                                <text className="text-[#5392F9] text-[28px] text-center">
                                    See room detail
                                </text>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[5
                        0px] p-4 w-full bg-[#5392F9] border border-[#FFFFFF] rounded-[10px] flex items-center justify-center">
                        <text className="text-[#FFFFFF] text-[28px] text-center">
                            See more reviews
                        </text>
                    </div>  

                </div>

            </div>
            
            <div className="mt-[0px]">
                <Footerepic />
            </div>
            
            
        </>
    );

};

export default HotelPage;
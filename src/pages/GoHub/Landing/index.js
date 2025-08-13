// import Headergo from 'components/Header/Headergo/index';
import { Input } from 'components/Input/index';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Text, Img, Line, Button } from "components";
import { useNavigate } from "react-router-dom";
// import HeadergoMobile from "components/Header/HeadergoMobile/index";
import Footerepic from 'components/Footer/Footerepic/index';
import { FaBus } from 'react-icons/fa';
import { BsBuildingsFill, BsChevronRight } from 'react-icons/bs';
import { MdOutlineSwapHoriz, MdOutlineCalendarToday, MdSearch, MdCancel } from 'react-icons/md';
import { RatingBar } from 'components/RatingBar/index';
import './styles.css';
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../../../../node_modules/axios/index';
import LoadingSpinner from 'components/LoadingSpinner/index';
import HeaderOTAMobile from 'components/Header/HeaderOTAMobile/index';
import { useAuth } from "AuthContext";
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignupPage from 'components/SignUp/index';
import LoginPage from 'components/Login/index';


const LandingPage = () => {
    console.log("Component Rendering");
    const baseUrl = window.location.origin;
    console.log("baseurl:", baseUrl);

    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();

    // const { isLoggedIn } = useAuth();
    // if (!isLoggedIn) {
    //     navigate("/");
    // }

    // console.log("isLoggedIn:", isLoggedIn);

    const [isPopup1Open, setIsPopup1Open] = useState(false);
    const [isPopup2Open, setIsPopup2Open] = useState(false);

    const openPopup1 = () => {
        setIsPopup1Open(true);
    };

    const openPopup2 = () => {
        setIsPopup2Open(true);
    };

    const closePopup1 = () => {
        setIsPopup1Open(false);
    };

    const closePopup2 = () => {
        setIsPopup2Open(false);
    };

    const location = useLocation();
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    const userId = localStorage.getItem("userId");
    const [loadingDest, setLoadingDest] = useState(false);
    const [loadingOrigin, setLoadingOrigin] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [error, setError] = useState(false);

    const destination = location?.state?.destination ?? '';
    console.log("destination: ", destination);

    // const startDate = location?.state?.date ?? '';
    // console.log("start date: ", startDate);

    const currentDate = new Date();
    const receivedDate = location?.state?.date ?? '';
    console.log("receivedDate: ", receivedDate);

    const date = new Date(receivedDate);
    // Set the time to the end of the day
    date.setHours(23, 59, 59, 999);
    console.log("date: ", date);

    const startDate = date >= currentDate ? date : '';
    console.log("start date: ", startDate);

    let updatedStartDate;

    if (startDate != '') {
        updatedStartDate = startDate;
    }
    else {
        updatedStartDate = new Date();
    }

    function formatDate(inputDate) {
        if (inputDate instanceof Date) {
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const day = inputDate.getDate();
            const month = months[inputDate.getMonth()];
            const year = inputDate.getFullYear();

            return `${day} ${month} ${year}`;
        } else if (typeof inputDate === 'string') {
            const monthsMap = {
                January: 'Jan',
                February: 'Feb',
                March: 'Mar',
                April: 'Apr',
                May: 'May',
                June: 'Jun',
                July: 'Jul',
                August: 'Aug',
                September: 'Sep',
                October: 'Oct',
                November: 'Nov',
                December: 'Dec',
            };

            const dateParts = inputDate.split(' ');
            const day = dateParts[0];
            const month = monthsMap[dateParts[1]];
            const year = dateParts[2];

            return `${day} ${month} ${year}`;
        } else {
            throw new Error('Invalid input format');
        }
    }

    // const formatDateForInput = (date) => {
    //     const year = date.getFullYear();
    //     const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    //     const day = date.getDate().toString().padStart(2, '0');
    //     return `${year}-${month}-${day}`;
    // };

    // function parseDate(dateString) {
    //     // Split the input date string into parts
    //     const dateParts = dateString.split(' ');

    //     // Map the abbreviated month to its full name
    //     const monthMap = {
    //         'Jan': 'January',
    //         'Feb': 'February',
    //         'Mar': 'March',
    //         'Apr': 'April',
    //         'May': 'May',
    //         'Jun': 'June',
    //         'Jul': 'July',
    //         'Aug': 'August',
    //         'Sep': 'September',
    //         'Oct': 'October',
    //         'Nov': 'November',
    //         'Dec': 'December',
    //     };

    //     // Extract day, month, and year from the date parts
    //     const day = parseInt(dateParts[0], 10);
    //     const month = monthMap[dateParts[1]];
    //     const year = parseInt(dateParts[2], 10);

    //     // Create a new Date object
    //     const dateObject = new Date(`${month} ${day}, ${year} 23:59:59:999`);

    //     // Check if the dateObject is valid
    //     if (!isNaN(dateObject.getTime())) {
    //         return dateObject;
    //     } else {
    //         throw new Error('Invalid date format');
    //     }
    // }


    const [departDate, setDepartDate] = useState(updatedStartDate);
    const [returnDate, setReturnDate] = useState(null);

    console.log("DEPARTDATE: ", departDate);

    const [originData, setOriginData] = useState("");
    // const [originData1, setOriginData1] = useState("");
    const [destinationData, setDestinationData] = useState([]);
    const [emailAddress, setEmailAddress] = useState("");
    const [gender, setGender] = useState("");
    const [callingCode, setCallingCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [originCode, setOriginCode] = useState("");
    const [originalName, setOriginalName] = useState("");
    const [destinationCode, setDestinationCode] = useState("");
    const [destinationName, setDestinationName] = useState("");

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOrigin, setSelectedOrigin] = useState('');
    const [searchOrigin, setSearchOrigin] = useState('');
    const [isOpen1, setIsOpen1] = useState(false);
    const [selectedDestination, setSelectedDestination] = useState('');
    const [searchDestination, setSearchDestination] = useState('');

    const toggleDropdown = () => {
        if (error) {
            toast.error("Something went wrong, please try after sometime.", {
                autoClose: 2000,
                position: 'top-right',
                closeButton: true,
                className: "xs:top-40 lg:top-20 toast-message",
            });
        } else {
            setIsOpen(!isOpen);
        }
    };

    const toggleDropdown1 = () => {
        if (!selectedOrigin) {
            toast.info("Please select Origin.", {
                autoClose: 2000,
                position: 'top-right',
                closeButton: true,
                className: "xs:top-40 lg:top-20 toast-message",
            });
            setIsOpen(true);
        }
        else {
            setIsOpen1(!isOpen1);
        }
    };


    // *Profile User Data*
    useEffect(() => {

        axios.get(`https://halaltravel.ai/ht/api/profile/${userId}`)
            .then(response => {

                const data = response.data;
                const email = data.email;
                const gender = data.gender;
                const callingCode = data.phoneNumber.countryCode;
                const phoneNumber = data.phoneNumber.phoneNumber;

                setEmailAddress(email);
                if (gender === 'male') {
                    setGender('true');
                }
                else if (gender === 'female') {
                    setGender('false');
                }
                else {
                    setGender('');
                }

                setCallingCode(callingCode);
                setPhoneNumber(phoneNumber);
                // console.log('countryCode:', data.phoneNumber.countryCode);
                // console.log('phoneNumber:', data.phoneNumber.phoneNumber);
            })
            .catch(error => {
                // setError(error);
                // setLoading(false);
                console.error('Error fetching profile data:', error);
            });
    }, [userId]);


    // *Origin Data*
    useEffect(() => {
        setLoadingSubmit(false);
        setLoadingOrigin(true);
        setError(false);
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);

        async function postOrigin() {
            try {
                const response = await axios.post(
                    'https://halaltravel.ai/ht/api/v1/bus/search/origin',
                    {},
                    {
                        // headers: {
                        //     Authorization: `Bearer ${token}`,
                        // },
                    }
                );

                console.log('response origin: ', response.data.data);
                // setOriginData(response.data);
                setOriginData(response.data.data);
                setLoadingOrigin(false);
            } catch (error) {
                console.log('Error:', error);
                setOriginData([]);
                setLoadingOrigin(false);
                setError(true);

            }
        }

        postOrigin();
    }, [isLoggedIn]);

    console.log("origindata: ", originData);


    const filterOriginData = () => {
        const searchTerm = searchOrigin.toLowerCase();

        if (originData != 0) {
            // console.log("hereeee");
            // Flatten the structure
            const flattenedData = originData.stateList.flatMap((state) => {
                return state.cityList.flatMap((city) => {
                    return city.terminalList.map((terminal) => ({
                        state: state.mdStateNameFrom,
                        city: city.mdCityNameFrom,
                        terminalName: terminal.mdTerminalNameFrom,
                        terminalCode: terminal.mdTerminalCodeFrom,
                    }));
                });
            });

            // Filter based on search term
            const filteredData = flattenedData.filter(
                (item) =>
                    item.state.toLowerCase().includes(searchTerm) ||
                    item.terminalName.toLowerCase().includes(searchTerm) ||
                    item.terminalCode.toLowerCase().includes(searchTerm)
            );

            // Group the filtered data by state and city
            const groupedData = filteredData.reduce((result, item) => {
                const key = item.state;
                result[key] = result[key] || { state: item.state, terminalList: [] };
                result[key].terminalList.push({
                    city: item.city,
                    terminalName: item.terminalName,
                    terminalCode: item.terminalCode,
                });
                return result;
            }, {});

            return Object.values(groupedData);
        } else {
            return originData;
        }
    };


    const handleSelectOrigin = (originTerminal) => {
        setSelectedOrigin(`${originTerminal.name} (${originTerminal.code})`);
        setOriginCode(originTerminal.code);
        setOriginalName(originTerminal.name);
        setSearchOrigin(''); // Clear the search term
        toggleDropdown();
    };

    const handleSearchOrigin = (e) => {
        setSearchOrigin(e.target.value);
        setSelectedOrigin(''); // Clear the selected terminal when searching
    };

    useEffect(() => {

        if (searchOrigin) {
            setIsOpen(true);
        }

        if (searchDestination) {
            setIsOpen1(true);
        }

    }, [searchOrigin, searchDestination]);



    // *Destination Data*
    useEffect(() => {

        if (originCode != '') {

            let requestData = {
                "originCode": originCode,
                "originType": "terminal",
                // "destination": destination,
            }

            console.log("requestData: ", requestData);

            async function postDestination() {
                try {
                    const response = await axios.post(
                        'https://halaltravel.ai/ht/api/v1/bus/search/destination', requestData,
                        {
                            // headers: {
                            //     Authorization: `Bearer ${token}`,
                            // },
                        }
                    );

                    console.log('response destination: ', response.data.data);
                    setDestinationData(response.data.data);
                    setLoadingDest(false);
                } catch (error) {
                    console.log('Error:', error);
                    console.log("Error response: ", error.response);
                    // console.log("Error status: ", error.response.status);

                    if (error.response && error.response.status === 404) {
                        console.log('No trip found from the origin to the destination');
                    } else {
                        console.log('An error occurred while fetching data');
                    }
                    setDestinationData([]);
                    setLoadingDest(false);
                }
            }

            postDestination();

        }
        else {

        }
    }, [originCode]);


    console.log("destinationData: ", destinationData);

    const filterDestinationData = () => {
        const searchTerm = searchDestination.toLowerCase();

        if (destinationData != 0) {
            // console.log("hereeee");
            // Flatten the structure
            const flattenedData = destinationData.stateList.flatMap((state) => {
                return state.cityList.flatMap((city) => {
                    return city.terminalList.map((terminal) => ({
                        state: state.mdStateNameTo,
                        city: city.mdCityNameTo,
                        terminalName: terminal.mdTerminalNameTo,
                        terminalCode: terminal.mdTerminalCodeTo,
                    }));
                });
            });

            // Filter based on search term
            const filteredData = flattenedData.filter(
                (item) =>
                    item.state.toLowerCase().includes(searchTerm) ||
                    item.terminalName.toLowerCase().includes(searchTerm) ||
                    item.terminalCode.toLowerCase().includes(searchTerm)
            );

            // Group the filtered data by state and city
            const groupedData = filteredData.reduce((result, item) => {
                const key = item.state;
                result[key] = result[key] || { state: item.state, terminalList: [] };
                result[key].terminalList.push({
                    city: item.city,
                    terminalName: item.terminalName,
                    terminalCode: item.terminalCode,
                });
                return result;
            }, {});

            return Object.values(groupedData);
        } else {
            return destinationData;
        }
    };

    const handleSelectDestination = (destinationTerminal) => {
        setSelectedDestination(`${destinationTerminal.name} (${destinationTerminal.code})`);
        setDestinationCode(destinationTerminal.code);
        setDestinationName(destinationTerminal.name);
        setSearchDestination(''); // Clear the search term
        toggleDropdown1();
    };

    const handleSearchDestination = (e) => {
        setSearchDestination(e.target.value);
        setSelectedDestination(''); // Clear the selected terminal when searching
    };



    useEffect(() => {
        setIsOpen1(false);

        setSelectedDestination("");
        setDestinationCode("");
        setDestinationName("");
        setDestinationData([]);
        setLoadingDest(true);

        if (selectedOrigin === "") {
            setOriginCode("");
            setOriginalName("");
        }
    }, [selectedOrigin]);


    useEffect(() => {
        if (selectedDestination === "") {
            setDestinationCode("");
            setDestinationName("");
        }
    }, [selectedDestination]);


    //*Generate Reference Number* 
    async function generateRefNumber() {
        try {
            const response = await axios.post(
                'https://halaltravel.ai/ht/api/v1/bus/booking/new', {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            let refNum = response.data.busBookingReferenceNo;
            console.log('response reference number: ', refNum);

            return refNum;

        } catch (error) {
            console.log('error ref number: ', error);
        }
    }

    // Convert the date string to a Date object
    function formatDateString(inputDate) {
        const dateObject = new Date(inputDate);

        // Format the date as 'DDMMMYYYY'
        const formattedDate = `${('0' + dateObject.getDate()).slice(-2)}${dateObject.toLocaleString('default', { month: 'short' })}${dateObject.getFullYear()}`;

        return formattedDate;
    }

    const bookingData = {
        OriginCode: originCode,  //pilih sini
        OriginalName: originalName,  //pilih sini
        DestinationCode: destinationCode,  //pilih sini
        DestinationName: destinationName,  //pilih sini
        DateFrom: departDate ? formatDateString(departDate) : '',  //pilih sini
        DateTo: returnDate ? formatDateString(formatDate(returnDate)) : '',  //pilih sini //optional
        UserEmailAddress: emailAddress,
        UserIdentityNumber: "", //takde
        UserPassportNo: "",  //takde
        UserGender: gender,
        UserDialCode: callingCode,
        UserMobileNumber: phoneNumber,
        AffCode: "gohub",  //taktau
        PartnerBookingReferenceNo: '',  //generated refNo dari api
        PostbackURL: "https://halaltravel.ai/ht/api/v1/bus/booking/confirm",  //URL TO UPDATE THE reference no
        RedirectURL: `${baseUrl}/bus-ticket-confirm`
    }


    console.log("BookingData: ", bookingData);
    // console.log("DateReturn: ", bookingData.DateReturn);



    const handleButtonSearch = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        const currentDate = new Date();

        if (isLoggedIn) {
            // tambah kalau tak sign in lagi suruh signin dulu
            if (!selectedOrigin) {
                console.log("PLEASE SELECT ONE ORIGIN FROM THE DROPDOWN");
                toast.info("Please select Origin.", {
                    autoClose: 2000,
                    position: 'top-right',
                    closeButton: true,
                    className: "xs:top-40 lg:top-20 toast-message",
                });
                setIsOpen(true);
            } else if (!selectedDestination) {
                console.log("PLEASE SELECT ONE DESTINATION FROM THE DROPDOWN");
                toast.info("Please select Destination.", {
                    autoClose: 2000,
                    position: 'top-right',
                    closeButton: true,
                    className: "xs:top-40 lg:top-20 toast-message",
                });
                setIsOpen1(true);
            } else if (!departDate) {
                console.log("PLEASE SELECT A DEPART DATE");
                toast.info("Please select a Depart date.", {
                    autoClose: 2000,
                    position: 'top-right',
                    closeButton: true,
                    className: "xs:top-40 lg:top-20 toast-message",
                });
                // } else if (departDate && departDate < currentDate) {
                //     console.log("PLEASE SELECT A VALID DEPART DATE");
                //     console.log("currentdate: ", currentDate);
                //     toast.info("Please select current or future Depart date.", {
                //         autoClose: 2000,
                //         position: 'top-right',
                //         closeButton: true,
                //         className: "xs:top-40 lg:top-20 toast-message",
                //     });
                // } else if (returnDate && returnDate < parseDate {
                //     console.log("PLEASE SELECT A VALID RETURN DATE");
                //     toast.info("Please select a valid Return date.", {
                //         autoClose: 2000,
                //         position: 'top-right',
                //         closeButton: true,
                //         className: "xs:top-40 lg:top-20 toast-message",
                //     });
            } else {
                console.log("OKAY");

                setLoadingSubmit(true);

                const referenceNumber = await generateRefNumber(); // Wait for generateRefNumber to complete

                //   Set the value of the PartnerBookingReferenceNo input field
                document.getElementById('PartnerBookingReferenceNo').value = referenceNumber;

                console.log(document.getElementById('PartnerBookingReferenceNo').value);
                console.log(document.getElementById('DateTo').value);

                // Trigger the form submission
                document.getElementById('redirectForm').submit();

            }
        } else {
            setIsOpen(false);
            setIsOpen1(false);
            setIsPopup1Open(true);
            localStorage.removeItem('customPath');
            // localStorage.setItem("customPath", "tour-marketplace");
        }

    };

    const limitAndTitleCase = (text, limit) => {
        // Check if text is provided
        if (!text) {
            return '';
        }

        // Title case the text
        const titleCaseText = text.toLowerCase().replace(/\b(\w)/g, (char) => char.toUpperCase());

        // Limit the text to the specified number of characters
        let limitedText = titleCaseText.slice(0, limit);

        // Add ellipsis if the text exceeds the limit
        if (titleCaseText.length > limit) {
            limitedText += '...';
        }

        return `<i>${limitedText}</i>`;
    };

    // *Close dropdown when click outside*
    const ref = useRef();

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (
    //             ref.current &&
    //             !ref.current.contains(event.target) &&
    //             event.target.tagName !== 'INPUT' // Exclude input element from the check
    //         ) {
    //             setIsOpen(false);
    //             setIsOpen1(false);
    //         }
    //     };

    //     document.addEventListener('mousedown', handleClickOutside);

    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, [ref]);


    function navigatePage(data) {
        navigate(`/${data}`);
    }

    console.log("");

    // Set the minimum date to the current date
    const minDate = new Date();

    function formatDateDisplay(dateString) {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options).replace(/ /g, '/');
    }

    return (
        <>
            <div className='fixed w-full' style={{ zIndex: 2 }}>
                {/* <HeaderOTAAdmin className="fixed invisible lg:visible" /> */}
                {/* <Headergo className="fixed invisible lg:visible" /> */}
                {/* <HeadergoMobile className="visible fixed overflow-hidden lg:invisible lg:hidden"/> */}
                {/* <HeaderOTAMobile className="visible fixed overflow-hidden lg:invisible lg:hidden" /> */}

                <HeaderOTAAdmin openPopup1={openPopup1} className="fixed invisible lg:visible" />
                <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
                <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />
                <HeaderOTAMobile openPopup1={openPopup1} className="visible fixed overflow-hidden lg:invisible lg:hidden" />
            </div>

            <div className="sm:hidden lg:block">
                {loadingSubmit && (
                    <div className="overlay-bus">
                        <LoadingSpinner size={19} />
                        {/* <text>submit</text> */}
                    </div>
                )}
            </div>
            <div className="sm:block lg:hidden">
                {loadingSubmit && (
                    <div className="overlay-bus">
                        <LoadingSpinner size={50} />
                        {/* <text>submit</text> */}
                    </div>
                )}
            </div>

            <div className="sm:hidden lg:block">
                {loadingOrigin && (
                    <div className="overlay-bus">
                        <LoadingSpinner size={19} />
                        {/* <text>fetch origin</text> */}
                    </div>
                )}
            </div>
            <div className="sm:block lg:hidden">
                {loadingOrigin && (
                    <div className="overlay-bus">
                        <LoadingSpinner size={50} />
                        {/* <text>fetch origin</text> */}
                    </div>
                )}
            </div>

            <div className="w-full font-montserrat xs:pt-[160px] lg:pt-[92px]">
                <div className="w-full ">
                    <Img
                        // src="https://www.utusan.com.my/wp-content/uploads/2023/06/260623-bus-rayahaji.jpg"
                        src="/images/bg_blue.jpg"
                        className="sm:h-[1600px] lg:h-[500px] object-cover object-top w-full"
                        alt="rectangle120"

                    />

                    <div className="sm:hidden lg:block">
                        <div className="absolute items-center top-[25%] justify-center flex w-full">
                            <text className="font-semibold opacity-100 text-[25px] text-gray text-shadow-lg">
                                Book Your Bus Trip for a Seamless Journey!
                            </text>
                        </div>
                    </div>

                    <div className="sm:block lg:hidden">
                        <div className="absolute inset-x-[5%] top-[12%] flex items-center justify-center">
                            <text className="font-semibold opacity-100 text-[32px] text-gray text-shadow-lg text-center">
                                Book Your Bus Trip for a Seamless Journey!
                            </text>
                        </div>
                    </div>



                    <div className="sm:hidden lg:block">
                        <div className="absolute items-center top-[38%] justify-center flex w-[100%]">
                            <div className="rounded-[10px] shadow-lg w-[1150px]" style={{ boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px' }}>
                                {/* <div className="bg-[#000000] bg-opacity-90 p-4 justify-start rounded-t-[10px]"> */}
                                <div className="bg-[#FFFFFF] p-4 justify-start rounded-t-[10px] border border-[#FFFFFF] border-b-[#C4C4C4]">
                                    <div className="flex items-center">
                                        <FaBus size={20} className="mr-4 text-[#00A19A]" />
                                        <text className="font-semibold opacity-100 text-[16px] text-[#00A19A]">
                                            Express Bus
                                        </text>

                                    </div>
                                </div>
                                <div className="bg-[#FFFFFF] p-4 pt-6 pb-10 px-10 items-end flex rounded-b-[10px] justify-between">
                                    <div className="justify-start">
                                        <text className="text-[13px] text-gray font-medium">
                                            Origin
                                        </text>
                                        <div className="p-3 mt-1 flex items-center border-[1px] border border-[#00A19A] rounded-[5px] bg-[#FFFFFF]" style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}>
                                            <BsBuildingsFill size={19} className="mr-4 text-[#00A19A]" />
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="Search Origin"
                                                    // className="py-1 px-4 w-55 text-[12px] border rounded border-blue-300 focus:border-blue-300"
                                                    className={`py-1 px-4 w-55 text-[12px] border rounded bg-[#F3F3F3]
                                                    ${isOpen ? 'border-blue-300 focus:border-blue-300' : 'border-[#F3F3F3] focus:border-[#F3F3F3]'}
                                                    ${selectedOrigin ? 'text-black font-medium' : ''}
                                                    `}
                                                    value={selectedOrigin || searchOrigin}
                                                    onClick={toggleDropdown}
                                                    onChange={handleSearchOrigin}
                                                />
                                                {isOpen && (
                                                    <ul className="dropdown-content absolute z-10 mt-1 w-[250px] bg-white border rounded shadow-lg overflow-y-auto max-h-52 list-none p-0">

                                                        {filterOriginData().length === 0 ? (
                                                            <li className="text-[12px] text-[#00A19A] text-center border-none py-3 px-3 cursor-not-allowed">
                                                                - No Terminal Found -
                                                            </li>
                                                        ) : (
                                                            filterOriginData().map((group, groupIndex) => (
                                                                <li key={groupIndex} className="text-[14px] font-semibold py-3 px-3" style={{ cursor: 'auto' }}>
                                                                    {group.state}
                                                                    <ul>
                                                                        {group.terminalList.map((terminal, terminalIndex) => (
                                                                            <li
                                                                                key={terminalIndex}
                                                                                className="text-[12px] font-medium py-2 px-3 cursor-pointer bg-[#F2FCFD] hover:bg-[#F2FCFD] mt-3 ml-1 border rounded-xl"
                                                                                onClick={() => handleSelectOrigin({ name: terminal.terminalName, code: terminal.terminalCode })}
                                                                            >
                                                                                {`${terminal.terminalName} (${terminal.terminalCode})`}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </li>
                                                            ))
                                                        )}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 mb-2 flex items-center border-[1px] border border-[#00A19A] rounded-full bg-[#FFFFFF] shadow-md">
                                        <MdOutlineSwapHoriz size={19} className="text-[#00A19A]" />
                                    </div>
                                    <div className="justify-start">
                                        {/* <text className="text-[13px] text-gray font-medium">
                                            Destination {destination ? `(${limitAndTitleCase(destination, 18)})` : ''}
                                        </text> */}
                                        <text
                                            className="text-[13px] text-gray font-medium"
                                            title={destination ? `${destination}` : ''}
                                            dangerouslySetInnerHTML={{ __html: `Destination ${destination ? `( ${limitAndTitleCase(destination, 17)} )` : ''}` }}
                                        />
                                        <div className="p-3 mt-1 flex items-center border-[1px] border border-[#00A19A] rounded-[5px] bg-[#FFFFFF]" style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}>
                                            <BsBuildingsFill size={19} className="mr-4 text-[#00A19A]" />
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    // placeholder={`${destination}`}
                                                    placeholder="Search Destination"
                                                    // className="py-1 px-4 w-55 text-[12px] border rounded focus:outline-none focus:ring focus:border-blue-300"
                                                    className={`py-1 px-4 w-55 text-[12px] border rounded bg-[#F3F3F3]
                                                    ${isOpen1 ? 'border-blue-300 focus:border-blue-300' : 'border-[#F3F3F3] focus:border-[#F3F3F3]'}
                                                    ${selectedDestination ? 'text-black font-medium' : ''}
                                                    `}
                                                    value={selectedDestination || searchDestination}
                                                    onClick={toggleDropdown1}
                                                    onChange={handleSearchDestination}
                                                />
                                                {isOpen1 && (
                                                    <ul className="dropdown-content absolute z-10 mt-1 w-[250px] bg-white border rounded shadow-lg overflow-y-auto max-h-52 list-none p-0">
                                                        {loadingDest ? (
                                                            <li className="flex text-[12px] text-[#000000] items-center justify-center border-none py-3 px-3 cursor-not-allowed">
                                                                <LoadingSpinner />
                                                                {/* <text>loading destination</text> */}
                                                            </li>
                                                        ) : filterDestinationData().length === 0 ? (
                                                            <li className="text-[12px] text-[#00A19A] text-center border-none py-3 px-3 cursor-not-allowed">
                                                                - No Terminal Found -
                                                            </li>
                                                        ) : (
                                                            filterDestinationData().map((group, groupIndex) => (
                                                                <li key={groupIndex} className="text-[14px] font-semibold py-3 px-3" style={{ cursor: 'auto' }}>
                                                                    {group.state}
                                                                    <ul>
                                                                        {group.terminalList.map((terminal, terminalIndex) => (
                                                                            <li
                                                                                key={terminalIndex}
                                                                                className="text-[12px] font-medium py-2 px-3 cursor-pointer bg-[#F2FCFD] hover:bg-[#F2FCFD] mt-3 ml-1 border rounded-xl"
                                                                                onClick={() => handleSelectDestination({ name: terminal.terminalName, code: terminal.terminalCode })}
                                                                            >
                                                                                {`${terminal.terminalName} (${terminal.terminalCode})`}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </li>
                                                            ))
                                                        )}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="justify-start">
                                        <text className="text-[13px] text-gray font-medium">
                                            Departure Date
                                        </text>
                                        <div className="p-3 mt-1 flex items-center border-[1px] border border-[#00A19A] rounded-[5px] bg-[#FFFFFF] pr-[15px]" style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}>
                                            <MdOutlineCalendarToday size={19} className="mr-4 text-[#00A19A]" />
                                            {/* <input
                                                type="date"
                                                id="myDate1"
                                                name="myDate1"
                                                className={`py-1 px-4 w-55 text-[12px] border rounded text-black font-medium
                                                        ${isOpen ? 'border-blue-300 focus:border-blue-300' : 'border-[#192579] focus:border-[#192579]'}
                                                    `}
                                                // value={departDate ? departDate.toISOString().split('T')[0] : ''}
                                                value={(parseDate(departDate)).toISOString().split('T')[0]}
                                                onChange={(event) => setDepartDate(formatDate(new Date(event.target.value)))}
                                            /> */}
                                            <div className="py-1 px-4 w-[130px] rounded bg-[#F3F3F3] border border-[#F3F3F3] focus:border-[#00A19A]">
                                                <DatePicker
                                                    className="font-normal text-[12px] not-italic p-[0] text-black placeholder:required text-slate_700 w-full"
                                                    wrapperClassName="w-full"
                                                    placeholderText="Departure Date"
                                                    type="date"
                                                    minDate={minDate}
                                                    // value={(parseDate(departDate).toLocaleDateString('en-GB'))}
                                                    // selected={parseDate(departDate)}
                                                    // onChange={(date) => setDepartDate(formatDate(date))}
                                                    // value={departDate ? departDate.toLocaleDateString('en-GB') : ''}
                                                    value={departDate ? formatDateDisplay(departDate) : ''}
                                                    selected={departDate}
                                                    onChange={(date) => setDepartDate(date)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="justify-start">
                                        <text className="text-[13px] text-gray font-medium">
                                            Return Date
                                        </text>
                                        <div className="p-3 mt-1 flex items-center border-[1px] border border-[#00A19A] rounded-[5px] bg-[#FFFFFF] pr-[15px]" style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}>
                                            <MdOutlineCalendarToday size={19} className="mr-4 text-[#00A19A]" />
                                            {/* <input
                                                type="date"
                                                id="myDate"
                                                name="myDate"
                                                className={`py-1 px-4 w-55 text-[12px] border rounded text-black font-medium
                                                    ${isOpen ? 'border-blue-300 focus:border-blue-300' : 'border-[#192579] focus:border-[#192579]'}
                                                `}
                                                // defaultValue={returnDate.toISOString().split('T')[0]}
                                                value={returnDate ? returnDate.toISOString().split('T')[0] : ''}
                                                onChange={(event) => setReturnDate(new Date(event.target.value))}
                                            /> */}
                                            <div className="py-1 px-4 w-[130px] rounded bg-[#F3F3F3] border border-[#F3F3F3] focus:border-[#00A19A]">
                                                <DatePicker
                                                    className="font-normal text-[12px] not-italic p-[0] text-black placeholder:required text-slate_700 w-full"
                                                    wrapperClassName="w-full"
                                                    placeholderText="Return Date"
                                                    type="date"
                                                    minDate={minDate}
                                                    // value={returnDate ? returnDate.toLocaleDateString('en-GB') : ''}
                                                    value={returnDate ? formatDateDisplay(returnDate) : ''}
                                                    selected={returnDate}
                                                    onChange={(date) => setReturnDate(date)}
                                                />
                                            </div>
                                            {returnDate && (
                                                <MdCancel
                                                    size={19}
                                                    className="ml-2 text-gray cursor-pointer"
                                                    onClick={() => setReturnDate('')} // Clear the returnDate
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className="p-3 mb-1 flex items-center border-[1px] border border-[#00A19A] hover:border-[#4C4C4C] rounded-full common-pointer bg-[#00A19A] hover:bg-[#4C4C4C] text-[#FFFFFF] shadow-lg"
                                        onClick={handleButtonSearch}
                                    >
                                        <MdSearch size={19} className="" />
                                        <form id="redirectForm" action="https://gohub-v2-web-demo.azurewebsites.net/ExpressBus/Trip/BusTicketExtend" method="POST">
                                            <input type="hidden" name="OriginCode" id="OriginCode" value={bookingData.OriginCode} />
                                            <input type="hidden" name="OriginName" id="OriginName" value={bookingData.OriginalName} />
                                            <input type="hidden" name="DestinationCode" id="DestinationCode" value={bookingData.DestinationCode} />
                                            <input type="hidden" name="DestinationName" id="DestinationName" value={bookingData.DestinationName} />
                                            <input type="hidden" name="DateFrom" id="DateFrom" value={bookingData.DateFrom} />
                                            <input type="hidden" name="DateTo" id="DateTo" value={bookingData.DateTo} />
                                            <input type="hidden" name="UserEmailAddress" id="UserEmailAddress" value={bookingData.UserEmailAddress} />
                                            <input type="hidden" name="UserIdentityNumber" id="UserIdentityNumber" value={bookingData.UserIdentityNumber} />
                                            <input type="hidden" name="UserPassportNo" id="UserPassportNo" value={bookingData.UserPassportNo} />
                                            <input type="hidden" name="UserGender" id="UserGender" value={bookingData.UserGender} />
                                            <input type="hidden" name="UserDialCode" id="UserDialCode" value={bookingData.UserDialCode} />
                                            <input type="hidden" name="UserMobileNumber" id="UserMobileNumber" value={bookingData.UserMobileNumber} />
                                            <input type="hidden" name="AffCode" id="AffCode" value={bookingData.AffCode} />
                                            <input type="hidden" name="PartnerBookingReferenceNo" id="PartnerBookingReferenceNo" value={bookingData.PartnerBookingReferenceNo} />
                                            <input type="hidden" name="PostbackURL" id="PostbackURL" value={bookingData.PostbackURL} />
                                            <input type="hidden" name="RedirectURL" id="RedirectURL" value={bookingData.RedirectURL} />
                                            {/* <button onClick={handleButtonSearch}>SUBMIT FORM</button> */}
                                            {/* <MdSearch size={19} className="text-[#FFFFFF]" onClick={handleButtonSearch} /> */}
                                        </form>
                                        {/* <form id="redirectForm" action="https://gohub-v2-web-demo.azurewebsites.net/ExpressBus/Trip/BusTicketExtend" method="POST">
                                            <input name="OriginCode" id="OriginCode" value={bookingData.OriginCode} />
                                            <input name="OriginName" id="OriginName" value={bookingData.OriginalName} />
                                            <input name="DestinationCode" id="DestinationCode" value={bookingData.DestinationCode} />
                                            <input name="DestinationName" id="DestinationName" value={bookingData.DestinationName} />
                                            <input name="DateFrom" id="DateFrom" value={bookingData.DateFrom} />
                                            <input name="DateTo" id="DateTo" value={bookingData.DateReturn} />
                                            <input name="UserEmailAddress" id="UserEmailAddress" value={bookingData.UserEmailAddress} />
                                            <input name="UserIdentityNumber" id="UserIdentityNumber" value={bookingData.UserIdentityNumber} />
                                            <input name="UserPassportNo" id="UserPassportNo" value={bookingData.UserPassportNo} />
                                            <input name="UserGender" id="UserGender" value={bookingData.UserGender} />
                                            <input name="UserDialCode" id="UserDialCode" value={bookingData.UserDialCode} />
                                            <input name="UserMobileNumber" id="UserMobileNumber" value={bookingData.UserMobileNumber} />
                                            <input name="AffCode" id="AffCode" value={bookingData.AffCode} />
                                            <input name="PartnerBookingReferenceNo" id="PartnerBookingReferenceNo" value={bookingData.PartnerBookingReferenceNo} />
                                            <input name="PostbackURL" id="PostbackURL" value={bookingData.PostbackURL} />
                                            <input name="RedirectURL" id="RedirectURL" value={bookingData.RedirectURL} />
                                            <button onClick={handleButtonSearch}>SUBMIT FORM</button>
                                        </form> */}
                                        {/* <form id="redirectForm" action="https://gohub-v2-web-demo.azurewebsites.net/ExpressBus/Trip/BusTicketExtend" method="POST">
                                            <input name="OriginCode" id="OriginCode" value='LAR' />
                                            <input name="OriginName" id="OriginName" value='Larkin Sentral' />
                                            <input name="DestinationCode" id="DestinationCode" value='MEL' />
                                            <input name="DestinationName" id="DestinationName" value='Melaka Sentral' />
                                            <input name="DateFrom" id="DateFrom" value='15Jan2024' />
                                            <input name="DateTo" id="DateTo" value='' />
                                            <input name="UserEmailAddress" id="UserEmailAddress" value='izzhhanis@gmail.com' />
                                            <input name="UserIdentityNumber" id="UserIdentityNumber" value='001106-03-0852' />
                                            <input name="UserPassportNo" id="UserPassportNo" value='' />
                                            <input name="UserGender" id="UserGender" value='false' />
                                            <input name="UserDialCode" id="UserDialCode" value='+60' />
                                            <input name="UserMobileNumber" id="UserMobileNumber" value='1112175833' />
                                            <input name="AffCode" id="AffCode" value='gohub' />
                                            <input name="PartnerBookingReferenceNo" id="PartnerBookingReferenceNo" value='fa666948-cdb0-47b1-b908-b574f37cd4aa' />
                                            <input name="PostbackURL" id="PostbackURL" value="https://halaltravel.ai/ht/api/v1/bus/booking/confirm" />
                                            <input name="RedirectURL" id="RedirectURL" value="https://vm.epictravel.ai/bus-ticket-confirm" />
                                            <button onClick={handleButtonSearch}>SUBMIT FORM</button>
                                        </form> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* mobile */}
                    <div className="sm:block lg:hidden">
                        <div className="px-[60px] absolute items-center top-[17%] justify-center w-full">
                            <div className="rounded-[20px] " style={{ boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px' }}>
                                <div className="justify-start bg-[#FFFFFF] rounded-t-[20px] p-6 px-8 border-[2px] border-[#FFFFFF] border-b-[#C4C4C4]">
                                    <div className="flex items-center">
                                        <FaBus size={36} className="mr-6 text-[#00A19A]" />
                                        <text className="font-semibold opacity-100 text-[37px] text-[#00A19A]">
                                            Express Bus
                                        </text>
                                    </div>
                                </div>
                                <div className="px-[55px] bg-[#FFFFFF] p-4 pb-6 items-end rounded-b-[20px] justify-between">
                                    <div className="justify-start mt-[20px] ">
                                        <div className='mb-2'>
                                            <text className="text-[31px] text-gray font-medium">
                                                Origin
                                            </text>
                                        </div>
                                        <div className="py-6 px-7 flex items-center border-[1px] border border-[#00A19A] rounded-[10px] bg-[#FFFFFF] " style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}>
                                            <BsBuildingsFill size={38} className="mr-7 ml-3 text-[#00A19A]" />
                                            {/* <input type="text" placeholder="Enter Origin" className="p-0 font-medium text-[32px] text-[#000000] border-none" /> */}
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="Search Origin"
                                                    // className={`py-6 px-7 w-[600px] text-[32px] border rounded bg-[#F3F3F3] shadow-inner
                                                    // ${isOpen ? 'border-[#ACACAC] focus:border-[#ACACAC]' : 'border-[#F3F3F3] focus:border-[#F3F3F3]'}
                                                    // ${selectedOrigin ? 'text-black font-medium' : ''}
                                                    // `}
                                                    className={`py-6 px-7 w-[600px] text-[32px] rounded bg-[#F3F3F3] border-none 
                                                    ${selectedOrigin ? 'text-black font-medium' : ''}
                                                    `}
                                                    value={selectedOrigin || searchOrigin}
                                                    onClick={toggleDropdown}
                                                    onChange={handleSearchOrigin}
                                                />
                                                {isOpen && (
                                                    <ul className="dropdown-content absolute z-10 mt-1 w-[100%] bg-white border rounded shadow-lg overflow-y-auto max-h-[602px] list-none p-0">
                                                        {filterOriginData().length === 0 ? (
                                                            <li className="text-[32px] text-[#00A19A] text-center border-none py-5 px-5 cursor-not-allowed">
                                                                - No Terminal Found -
                                                            </li>
                                                        ) : (
                                                            filterOriginData().map((group, groupIndex) => (
                                                                <li key={groupIndex} className="text-[32px] font-semibold py-5 px-5" style={{ cursor: 'auto' }}>
                                                                    {group.state}
                                                                    <ul>
                                                                        {group.terminalList.map((terminal, terminalIndex) => (
                                                                            <li
                                                                                key={terminalIndex}
                                                                                className="text-[30px] font-medium py-5 px-5 cursor-pointer bg-[#F2FCFD] hover:bg-[#F2FCFD] mt-6 ml-3 border bg-blue-100 rounded-2xl"
                                                                                onClick={() => handleSelectOrigin({ name: terminal.terminalName, code: terminal.terminalCode })}
                                                                            >
                                                                                {`${terminal.terminalName} (${terminal.terminalCode})`}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </li>
                                                            ))
                                                        )}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center mt-[35px] ">
                                        <div className="p-5 flex items-center border-[1px] rounded-full bg-[#FFFFFF] shadow-md">
                                            <MdOutlineSwapHoriz size={45} className="text-[#00A19A]" />
                                        </div>
                                    </div>
                                    <div className="justify-start mt-[30px]">
                                        <div className='mb-2'>
                                            {/* <text className="text-[31px] text-gray font-medium">
                                                Destination {destination ? `(${destination})` : ''}
                                            </text> */}
                                            <text
                                                className="text-[31px] text-gray font-medium"
                                                title={destination ? `${destination}` : ''}
                                                dangerouslySetInnerHTML={{ __html: `Destination ${destination ? `( ${limitAndTitleCase(destination, 28)} )` : ''}` }}
                                            />
                                        </div>
                                        <div className="py-6 px-7 flex items-center border-[1px] border border-[#00A19A] rounded-[10px] bg-[#FFFFFF]" style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}>
                                            <BsBuildingsFill size={38} className="mr-7 ml-3 text-[#00A19A]" />
                                            {/* <input type="text" placeholder="Enter Destination" className="p-0 font-medium text-[32px] text-[#000000] border-none" /> */}
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    // placeholder={`${destination}`}
                                                    placeholder="Search Destination"
                                                    // className="py-1 px-4 w-55 text-[12px] border rounded focus:outline-none focus:ring focus:border-blue-300"
                                                    // className={`py-6 px-7 w-[600px] text-[32px] border rounded bg-[#F3F3F3]
                                                    // ${isOpen1 ? 'border-blue-300 focus:border-blue-300' : 'border-[#F3F3F3] focus:border-[#F3F3F3]'}
                                                    // ${selectedDestination ? 'text-black font-medium' : ''}
                                                    // `}
                                                    className={`py-6 px-7 w-[600px] text-[32px] rounded bg-[#F3F3F3] border-none
                                                    ${selectedDestination ? 'text-black font-medium' : ''}
                                                    `}
                                                    value={selectedDestination || searchDestination}
                                                    onClick={toggleDropdown1}
                                                    onChange={handleSearchDestination}
                                                />
                                                {isOpen1 && (
                                                    <ul className="dropdown-content absolute z-10 mt-1 pb-6 w-[100%] bg-white border rounded shadow-lg overflow-y-auto max-h-[602px] list-none p-3">
                                                        {loadingDest ? (
                                                            <li className="flex text-[32px] text-[#000000] items-center justify-center border-none py-5 px-5 cursor-not-allowed">
                                                                <LoadingSpinner />
                                                                {/* <text>loading destination</text> */}
                                                            </li>
                                                        ) : filterDestinationData().length === 0 ? (
                                                            <li className="text-[32px] text-[#00A19A] text-center border-none py-5 px-5 cursor-not-allowed">
                                                                - No Terminal Found -
                                                            </li>
                                                        ) : (
                                                            filterDestinationData().map((group, groupIndex) => (
                                                                <li key={groupIndex} className="text-[32px] font-semibold py-5 px-5" style={{ cursor: 'auto' }}>
                                                                    {group.state}
                                                                    <ul>
                                                                        {group.terminalList.map((terminal, terminalIndex) => (
                                                                            <li
                                                                                key={terminalIndex}
                                                                                className="text-[30px] font-medium py-5 px-5 cursor-pointer bg-[#F2FCFD] hover:bg-[#F2FCFD] mt-6 ml-3 border bg-blue-100 rounded-2xl"
                                                                                onClick={() => handleSelectDestination({ name: terminal.terminalName, code: terminal.terminalCode })}
                                                                            >
                                                                                {`${terminal.terminalName} (${terminal.terminalCode})`}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </li>
                                                            ))
                                                        )}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="justify-start mt-[30px] mb-[10px]">
                                        <div className='mb-2'>
                                            <text className="text-[31px] text-gray font-medium">
                                                Departure Date
                                            </text>
                                        </div>
                                        <div className="px-6 py-7 mt-1 flex items-center border-[1px] border border-[#00A19A] rounded-[10px] bg-[#FFFFFF]" style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}>
                                            <MdOutlineCalendarToday size={38} className="mr-7 ml-3 text-[#00A19A]" />
                                            {/* <input type="date" className="p-0 font-medium text-[32px] text-[#000000] border-none" /> */}
                                            {/* <input
                                                type="date"
                                                id="myDate1"
                                                name="myDate1"
                                                min={minDate.toISOString().split('T')[0]}
                                                // className={`py-5 px-7 w-[600px] text-[32px] border rounded text-black font-medium bg-[#F3F3F3]
                                                //         ${isOpen ? 'border-blue-300 focus:border-blue-300' : 'border-[#F3F3F3] focus:border-[#F3F3F3]'}
                                                //     `}
                                                className={`py-5 px-7 w-[600px] text-[32px] text-black font-medium rounded bg-[#F3F3F3] border-none`}
                                                // value={departDate ? departDate.toISOString().split('T')[0] : ''}
                                                // value={formatDateForInput(parseDate(departDate))}
                                                // onChange={(event) => setDepartDate(formatDate(new Date(event.target.value)))}
                                                defaultValue={departDate.toISOString().split('T')[0]}
                                                onChange={(event) => setDepartDate(new Date(event.target.value))}
                                            /> */}
                                            <div className={`py-5 px-7 w-[600px] text-[32px] text-black font-medium rounded bg-[#F3F3F3] border-none`}>
                                                <DatePicker
                                                    className="font-normal text-[32px] not-italic p-[0] text-black placeholder:required text-slate_700 w-full border-none bg-[#F3F3F3]"
                                                    placeholderText="Departure Date"
                                                    type="date"
                                                    minDate={minDate}
                                                    // value={(parseDate(departDate).toLocaleDateString('en-GB'))}
                                                    // selected={parseDate(departDate)}
                                                    // onChange={(date) => setDepartDate(formatDate(date))}
                                                    // value={departDate ? departDate.toLocaleDateString('en-GB') : ''}
                                                    value={departDate ? formatDateDisplay(departDate) : ''}
                                                    selected={departDate}
                                                    onChange={(date) => setDepartDate(date)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="justify-start mt-[30px]">
                                        <div className='mb-2'>
                                            <text className="text-[31px] text-gray font-medium">
                                                Return Date
                                            </text>
                                        </div>
                                        <div className="px-6 py-7 mt-1 flex items-center border-[1px] border border-[#00A19A] rounded-[10px] bg-[#FFFFFF]" style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}>
                                            <MdOutlineCalendarToday size={38} className="mr-7 ml-3 text-[#00A19A]" />
                                            {/* <input type="date" className="p-0 font-medium text-[32px] text-[#000000] border-none" /> */}
                                            {/* <input
                                                type="date"
                                                id="myDate"
                                                name="myDate"
                                                min={minDate.toISOString().split('T')[0]}
                                                // className={`py-5 px-7 w-[600px] text-[32px] border rounded text-black font-medium
                                                //     ${isOpen ? 'border-blue-300 focus:border-blue-300' : 'border-[#192579] focus:border-[#192579]'}
                                                // `}
                                                className={`py-5 px-7 w-[600px] text-[32px] text-black font-medium rounded bg-[#F3F3F3] border-none`}
                                                // defaultValue={returnDate.toISOString().split('T')[0]}
                                                value={returnDate ? returnDate.toISOString().split('T')[0] : ''}
                                                onChange={(event) => setReturnDate(new Date(event.target.value))}
                                            >
                                            </input> */}
                                            <div className={`py-5 px-7 w-[600px] text-[32px] text-black font-medium rounded bg-[#F3F3F3] border-none`}>
                                                <DatePicker
                                                    className="font-normal text-[32px] not-italic p-[0] text-black placeholder:required text-slate_700 w-full"
                                                    wrapperClassName="w-full"
                                                    placeholderText="Return Date"
                                                    type="date"
                                                    minDate={minDate}
                                                    value={returnDate ? formatDateDisplay(returnDate) : ''}
                                                    selected={returnDate}
                                                    onChange={(date) => setReturnDate(date)}
                                                />
                                            </div>
                                            {returnDate && (
                                                <MdCancel
                                                    size={69}
                                                    className="ml-5 text-gray cursor-pointer"
                                                    onClick={() => setReturnDate('')} // Clear the returnDate
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div className="mt-[80px] mb-[20px] p-5 flex border-[1px] border border-[#00A19A] bg-[#00A19A] justify-center rounded-md" onClick={handleButtonSearch}>
                                        <text className="font-medium opacity-100 text-[30px] text-[#FFFFFF] font-medium">
                                            Search
                                        </text>
                                        <form id="redirectForm" action="https://gohub-v2-web-demo.azurewebsites.net/ExpressBus/Trip/BusTicketExtend" method="POST">
                                            <input type="hidden" name="OriginCode" id="OriginCode" value={bookingData.OriginCode} />
                                            <input type="hidden" name="OriginName" id="OriginName" value={bookingData.OriginalName} />
                                            <input type="hidden" name="DestinationCode" id="DestinationCode" value={bookingData.DestinationCode} />
                                            <input type="hidden" name="DestinationName" id="DestinationName" value={bookingData.DestinationName} />
                                            <input type="hidden" name="DateFrom" id="DateFrom" value={bookingData.DateFrom} />
                                            <input type="hidden" name="DateTo" id="DateTo" value={bookingData.DateTo} />
                                            <input type="hidden" name="UserEmailAddress" id="UserEmailAddress" value={bookingData.UserEmailAddress} />
                                            <input type="hidden" name="UserIdentityNumber" id="UserIdentityNumber" value={bookingData.UserIdentityNumber} />
                                            <input type="hidden" name="UserPassportNo" id="UserPassportNo" value={bookingData.UserPassportNo} />
                                            <input type="hidden" name="UserGender" id="UserGender" value={bookingData.UserGender} />
                                            <input type="hidden" name="UserDialCode" id="UserDialCode" value={bookingData.UserDialCode} />
                                            <input type="hidden" name="UserMobileNumber" id="UserMobileNumber" value={bookingData.UserMobileNumber} />
                                            <input type="hidden" name="AffCode" id="AffCode" value={bookingData.AffCode} />
                                            <input type="hidden" name="PartnerBookingReferenceNo" id="PartnerBookingReferenceNo" value={bookingData.PartnerBookingReferenceNo} />
                                            <input type="hidden" name="PostbackURL" id="PostbackURL" value={bookingData.PostbackURL} />
                                            <input type="hidden" name="RedirectURL" id="RedirectURL" value={bookingData.RedirectURL} />
                                            {/* <button onClick={handleButtonSearch}>SUBMIT FORM</button> */}
                                            {/* <MdSearch size={19} className="text-[#FFFFFF]" onClick={handleButtonSearch} /> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>





            </div >

            <div className="sm:mt-[50px] lg:mt-[0px]">
                <Footerepic />
            </div>


        </>
    );

};

export default LandingPage;
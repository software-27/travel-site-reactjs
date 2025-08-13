import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { data, fetchNewBlogData, fetchItineraryDetails, fetchItineraryDestination, fetchBlogData, fetchProductData, fetchTravelPlan } from 'data/data';
import { featuredData } from 'data/landing';
import { Column, Row } from "components";
import { MdSearch } from 'react-icons/md';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { AiOutlineClose } from "react-icons/ai";
import { IoPricetagSharp } from 'react-icons/io5';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { mdiBookmarkOutline } from '@mdi/js';
import { GrAddCircle } from 'react-icons/gr';
import { CiSearch } from "react-icons/ci";
import { FaTimes } from 'react-icons/fa';
import Icon from '@mdi/react';
import axios from "axios";
import { BsCalendarCheck, BsFillBookmarkFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import ThreeDotProd from 'components/ThreeDotProd/index';
import ThreeDotBlog from 'components/ThreeDotBlog/index';
import { RatingBar } from 'components/RatingBar/index';
import { Text } from 'components/index';
import { Img } from 'components/index';
import { ButtonMp } from 'components/index';
import { useDispatch } from 'react-redux';
import { fetchData2 } from "redux/actions2";
import { fetchData } from 'redux/actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs'
import loadGoogleMapsApi from 'load-google-maps-api';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import TravelPlan from 'components/TravelPlan/index';
import ThreeDotTravelplan from 'components/ThreeDotTravelplan/index';
import { FiCalendar } from 'react-icons/fi';
import "./LoadingSpinner5.css";
import { useParams } from 'react-router-dom';

const App = () => {
  const [contents, setContents] = useState(data);
  const [blogContent, setBlogContent] = useState([]);
  const [productContent, setProductContent] = useState([]);
  const [travelPlan, setTravelPlan] = useState([]);
  const productId = '';
  const productCode = '';
  const productPin = '';
  const productLink = '';
  const navigate = useNavigate();
  const baseURL = window.location.origin;
  console.log("baseUrl: ", baseURL)

  //we need token, user id
  const token = localStorage.getItem("token");
  const tokenType = localStorage.getItem("tokenType");
  const userId = localStorage.getItem("userId");

  //condition for each category
  const [isProduct, setIsProduct] = useState(false);
  const [isBlog, setIsBlog] = useState(false);
  const [isGallery, setIsGallery] = useState(false);
  const [isLivestream, setIsLivestream] = useState(false);
  const [isTravelplan, setIsTravelplan] = useState(false);

  // *Default value*
  useEffect(() => {
    setIsProduct(true);
    setIsBlog(true);
    setIsGallery(true);
    setIsLivestream(true);
    setIsTravelplan(true);
  }, []);

  // Filter Type blog/photos/etc
  const filterType = (category) => {
    setContents(
      data.filter((filteredContent) => {
        return filteredContent.category === category;
      })
    );
  };

  //for popup
  const [showModalItinerary, setshowModalItinerary] = React.useState(false);
  const [showAI, setShowAI] = React.useState(false);
  const [showYT, setShowYT] = React.useState(false);
  const [showModalBlog, setshowModalBlog] = React.useState(false);
  // const [showPopup, setShowPopup] = useState(false);

  const [selectedDateDepartYT, setSelectedDateDepartYT] = useState(null);
  const [selectedDateArrivalYT, setSelectedDateArrivalYT] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChangeDepartYT = (date) => {
    setSelectedDateDepartYT(date);
  };
  const handleDateChangeArrivalYT = (date) => {
    setSelectedDateArrivalYT(date);
  };

  const handleToggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const [currentPageProd, setCurrentPageProd] = useState(1);
  const [totalPagesProd, setTotalPagesProd] = useState('');
  // *Fetch Product Data*
  const fetchProduct = async () => {
    const pageSize = 100;
    try {
      const data = await fetchProductData(userId, currentPageProd, pageSize);
      if (data) {
        setProductContent(data.productContent);
        setTotalPagesProd(data.totalPages)
      }
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [currentPageProd])

  // // fetch travel plan
  const fetchTravel = async () => {

    try {
      const data = await fetchTravelPlan(userId);
      if (data) {
        setTravelPlan(data.travelPlan);
        setIsTravelplan(true);
        setIsLoadingg(false);
      }
    } catch (error) {
      console.error('Error fetching travelplan:', error);
      setIsLoadingg(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'auto' for instant scrolling
    });
  };

  const fetchAndRenderItineraryDetails = async (itineraryId, userId) => {
    try {
      setIsLoadingg(true);
      // const itineraryDetails = await fetchItineraryDetails(21);
      // // Combine data from travelPlan and itineraryDetails
      // const combinedData = { ...travelPlan.find((item) => item.id === 21), ...itineraryDetails };
      // // Render your component with combinedData
      // const userItineraryActivity = itineraryDetails.userItineraryActivity;
      console.log("CLICK - ITINERARY ID: ", itineraryId);

      const data = await fetchItineraryDetails(itineraryId);
      const data2 = await fetchItineraryDestination(itineraryId);

      let itineraryDetails = data;
      let userItineraryActivity = data.itineraryDetails.userItineraryActivity;
      let travelPlanId = data.itineraryDetails.itineraryId;
      let day = data.itineraryDetails.day;
      let title = data.itineraryDetails.itineraryTitle;
      let location = data.itineraryDetails.location;

      let itineraryDestination = data2;
      let destination = data2.itineraryDestination.destination;

      console.log("itineraryDetailsPC: ", itineraryDetails);
      console.log("userItineraryActivityPC: ", userItineraryActivity);
      console.log("itineraryIdPC: ", travelPlanId);
      console.log("Title: ", title);

      navigate('/obc', { state: { location, title, itineraryDestination, destination, day, itineraryDetails, userItineraryActivity, travelPlanId, userId } });
      setIsLoadingg(false);
    } catch (error) {
      console.error('Error fetching itinerary details:', error);
    }
  };

  useEffect(() => {
    // fetchProduct();
    fetchTravel();
  }, []);


  // data.userId, data.itineraryId, data.itineraryTitle
  const handleTravelPlanClick = (creatorId, itineraryId, title) => {
    const encodedTitle = encodeURIComponent(title);
    navigate(`/itinerary/${creatorId}/${itineraryId}/` + encodedTitle);
  };

  // Autocomplete
  const [isApiLoaded, setApiLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cursorColor, setCursorColor] = useState('black');
  useEffect(() => {
    loadGoogleMapsApi({
      key: 'AIzaSyB40jqFnXxo_4ZX7WezdrlR4NicJsseyu8',
      libraries: ['places']  // this line ensures the Places library is loaded
    }).then(() => {
      setApiLoaded(true);
    });

    const interval = setInterval(() => {
      setCursorColor((prevColor) => (prevColor === 'black' ? 'transparent' : 'black'));
    }, 500); // Toggle cursor color every 500ms

    return () => {
      clearInterval(interval);
    };
  }, []);


  const [selectedooc, setselectedooc] = useState('');

  //const [destination, setDestination] = useState("");
  var upatedestination = ''
  const handleChange = async (destination) => {
    upatedestination = destination
    await setDestination(destination);
    await setselectedooc("");

    // setIsLoading(address.length <= 0);
    // alert(address);
  };
  // const handleChange = (newValue) => {
  //   setAddress(newValue);
  // };

  //handle select lama
  // const handleSelect = async (destination) => {
  //   //alert(address)
  //   const rows = destination.split(",");

  //   if (rows.length > 0) {
  //     setDestination(rows[0]);
  //     setm(rows[0]);
  //     upatedestination = rows[0];
  //   } else {
  //     setDestination(destination);
  //     setm(destination);
  //     upatedestination = destination;
  //   }

  //   await setselectedooc(destination)
  //   geocodeByAddress(destination)
  //     .then((results) => {
  //       let city;
  //       let country;
  //       console.log("Results:", results);
  //       for (let i = 0; i < results[0].destination_components.length; i++) {
  //         if (results[0].destination_components[i].types.includes("locality")) {
  //           city = results[0].destination_components[i].long_name;
  //         }
  //         if (results[0].destination_components[i].types.includes("country")) {
  //           country = results[0].destination_components[i].long_name;
  //         }
  //       }

  //       if (typeof city === 'undefined') {
  //         //  alert(results[0])
  //         // setAddress(country);
  //         // setm(country) 
  //         // upateaddresss = country

  //       } else {
  //         // setAddress(city);
  //         // setm(city) 
  //         // upateaddresss = city
  //       }

  //       return getLatLng(city + ", " + country);
  //     })
  //     .then((latLng) => console.log("Success", latLng))
  //     .catch((error) => console.error("Errorrrrr", error));
  //   setNav(!nav);
  //   setDisabled(!isDisabled);
  // };

  const handleSelect = async (selectedDestination) => {
    // Split the selected destination into parts
    const rows = selectedDestination.split(",");

    let selectedCity = "";

    if (rows.length > 0) {
      selectedCity = rows[0].trim();
      setDestination(selectedCity);
      upatedestination = selectedCity;
    } else {
      setDestination(selectedDestination);
      upatedestination = selectedDestination;
    }

    await setselectedooc(selectedDestination)

    // Use react-places-autocomplete getLatLng to get latitude and longitude
    geocodeByAddress(selectedDestination)
      .then((results) => {
        console.log("Results:", results);
        for (let i = 0; i < results[0].address_components.length; i++) {
          if (results[0].address_components[i].types.includes("locality")) {
            selectedCity = results[0].address_components[i].long_name;
          }
          if (results[0].address_components[i].types.includes("administrative_area_level_1")) {
            setState(results[0].address_components[i].long_name);
          }
          if (results[0].address_components[i].types.includes("country")) {
            setCountry(results[0].address_components[i].long_name);
          }
        }

        return getLatLng(selectedCity + ", " + country);
      })
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Errorrrrr", error));

    setNav(!nav);
    setDisabled(!isDisabled);
  };


  const [isClicked, setIsClicked] = useState(false);
  const wrapperRef = useRef(null);
  const [m, setm] = useState('');
  const [day, setday] = useState('');

  const [nav, setNav] = useState(false)
  const [isDisabled, setDisabled] = useState(false)

  // Travelplan
  const [destination, setDestination] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [days, setDays] = useState('');
  const [language, setLanguage] = useState('');
  const [attractions, setAttractions] = useState([]);
  const [interests, setInterests] = useState([]);
  const [include, setInclude] = useState('');
  const [exclude, setExclude] = useState('');
  const [date, setDate] = useState(new Date());
  // Assuming date is a Date object
  const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;

  const [selectedAttraction, setSelectedAttraction] = useState([]);
  const [selectedInterest, setSelectedInterest] = useState([]);
  const [showInterests, setShowInterests] = useState(false);
  const [isLoadingg, setIsLoadingg] = useState(true);
  useEffect(() => {
    // Fetch initial attractions when the component mounts
    fetchAttractions();
  }, []);

  const fetchAttractions = async () => {
    try {
      const response = await axios.get('https://halaltravel.ai/hu/api/chatgpt/attraction');
      setAttractions(response.data);
    } catch (error) {
      console.error('Error fetching attractions:', error);
    }
  };

  const fetchInterests = async (selectedAttractions) => {
    // Send a POST request with the selected attractions
    try {
      const response = await axios.post('https://halaltravel.ai/hu/api/chatgpt/interests', selectedAttractions);

      if (response.status === 200) {
        setInterests(response.data);
      } else {
        console.error('Error fetching interests:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching interests:', error);
    }
  };

  useEffect(() => {
    // Fetch interests based on the selected attractions whenever selectedAttractions change
    fetchInterests(selectedAttraction);
  }, [selectedAttraction]);

  const handleAttractionClick = (attraction) => {
    // Check if the attraction is already selected
    if (selectedAttraction.includes(attraction)) {
      // If it is selected, remove it from the selected attractions
      setSelectedAttraction(selectedAttraction.filter((item) => item !== attraction));
    } else {
      // If it is not selected, check if the maximum limit (3) is reached
      if (selectedAttraction.length < 3) {
        // Add the attraction to the selected attractions
        setSelectedAttraction([...selectedAttraction, attraction]);
      } else {
        // Display an alert or message indicating that the maximum limit is reached
        alert('You can select up to three attractions.');
      }
    }
  };

  const handleInterestClick = (interest) => {
    // Check if the interest is already selected
    if (selectedInterest.includes(interest)) {
      // If it is selected, remove it from the selected interests
      setSelectedInterest(selectedInterest.filter((item) => item !== interest));
    } else {
      // If it is not selected, check if the maximum limit (7) is reached
      if (selectedInterest.length < 5) {
        // Add the interest to the selected interests
        setSelectedInterest([...selectedInterest, interest]);
      } else {
        // Display an alert or message indicating that the maximum limit is reached
        alert('You can select up to five interests.');
      }
    }
  };

  console.log("Interest: ", interests);
  console.log("SelectedAttraction: ", selectedAttraction);
  console.log("SelectedInterest: ", selectedInterest);

  const handleFetchInterests = () => {
    // Fetch interests based on the selected attractions
    fetchInterests();
  };

  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  const handleGenerateClick = async () => {

    console.log("GENERATE BUTTON CLICKED")
    try {
      // Prepare the query parameters
      if (!destination || !language || !days || !formattedDate || !selectedAttraction || !selectedInterest) {
        window.alert('Please fill in all the blanks before generating.');
        return;
      }

      const queryParams = {
        theme: 0,
        message: destination,
        state: state,
        country: country,
        days: days,
        date: formattedDate,
        language: language,
        attractions: selectedAttraction,
        interests: selectedInterest,
        include: include,
        exclude: exclude
      };
      console.log("queryParams hehehe: ", queryParams);
      setDays(days);
      setDestination(destination);
      setSelectedAttraction(selectedAttraction);
      setSelectedInterest(selectedInterest);
      setInclude(include);
      setExclude(exclude);
      setDate(formattedDate);

      try {
        // handleZoomClick()
        // window.document.body.style.zoom = 1;
        // wrapperRef.current.style.zoom = "1%";
        console.log("queryParams: ", queryParams);

        dispatch(fetchData2(queryParams));
        navigate('/ota1', { state: queryParams });
      } catch (error) {
        console.error('An error occurred:', error);
      }

    } catch (error) {
      console.error('Error generating data:', error);
    }
  };

  console.log("destination: ", destination);
  console.log("language: ", language);
  console.log("noOfDays: ", days);
  console.log("selectedState: ", state);
  console.log("selectedCountry: ", country);

  //navigate to overviewpage
  function navigateOTA(data) {

    console.log('navigateOTA')

    try {
      dispatch(fetchData(data));
    } catch (error) {
      console.error('An error occurred:', error);
    }

    navigate('/ota1', { state: data });

  }


  // Blog
  const [currentPageBlog, setCurrentPageBlog] = useState(1);
  const [totalPagesBlog, setTotalPagesBlog] = useState('');
  // *Fetch Blog Data*
  const fetchBlog = async () => {
    const pageSize = 5;
    try {
      const data = await fetchNewBlogData(userId, currentPageBlog, pageSize);
      if (data) {
        setBlogContent(data.blogContent);
        setTotalPagesBlog(data.totalPages)
      }
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

  useEffect(() => {
    // fetchProduct();
    fetchBlog();
  }, [currentPageBlog]);

  console.log("Product Contents:", productContent);
  console.log("Blog Contents:", blogContent);
  console.log("Blog pages total:", totalPagesBlog);

  //Slider direction
  const [slideDirection, setSlideDirection] = useState(null);
  //*Slide product slider *
  const slideLeftProduct = () => {
    var slider = document.getElementById('slider1')
    slider.scrollLeft = slider.scrollLeft - 500
    // if (currentPageProd > 1) {
    //   setCurrentPageProd(currentPageProd - 1);
    // }
  }

  const slideRightProduct = () => {
    var slider = document.getElementById('slider1')
    slider.scrollLeft = slider.scrollLeft + 500
    // setCurrentPageProd(currentPageProd + 1);
  }

  const slideLeftGallery = () => {
    var slider = document.getElementById('slider2')
    slider.scrollLeft = slider.scrollLeft - 500
    // if (currentPageProd > 1) {
    //   setCurrentPageProd(currentPageProd - 1);
    // }
  }

  const slideRightGallery = () => {
    var slider = document.getElementById('slider2')
    slider.scrollLeft = slider.scrollLeft + 500
    // setCurrentPageProd(currentPageProd + 1);
  }

  const slideLeftLivestream = () => {
    var slider = document.getElementById('slider3')
    slider.scrollLeft = slider.scrollLeft - 500
    // if (currentPageProd > 1) {
    //   setCurrentPageProd(currentPageProd - 1);
    // }
  }

  const slideRightLivestream = () => {
    var slider = document.getElementById('slider3')
    slider.scrollLeft = slider.scrollLeft + 500
    // setCurrentPageProd(currentPageProd + 1);
  }



  // * PAGINATION *
  const handleArrowClick = (direction) => {
    if (direction === 'left' && currentPageBlog > 1) {
      setCurrentPageBlog(currentPageBlog - 1);
    } else if (direction === 'right' && currentPageBlog < totalPagesBlog) {
      setCurrentPageBlog(currentPageBlog + 1);
    }
  };

  const getPageButtonsRange = () => {
    const buttonsRange = [];
    const startPage = Math.max(currentPageBlog - 1, 1);
    // const endPage = Math.min(currentPageBlog + 1, Math.ceil(totalPagesBlog));
    const endPage = Math.min(currentPageBlog, Math.ceil(totalPagesBlog));

    for (let i = startPage; i <= endPage; i++) {
      buttonsRange.push(i);
    }

    return buttonsRange;
  };

  // *CURRENCY*
  const currencySymbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    AUD: "$",
    AED: "د.إ",
    ARS: "$",
    BRL: "R$",
    CAD: "$",
    CHF: "CHF",
    CLP: "$",
    CNY: "¥",
    COP: "$",
    DKK: "kr",
    FJD: "FJ$",
    HHL: "HHL",
    HKD: "HK$",
    IDR: "Rp",
    ILS: "₪",
    INR: "₹",
    ISK: "kr",
    JPY: "¥",
    KRW: "₩",
    MXN: "$",
    MYR: "RM",
    NOK: "kr",
    NZD: "$",
    PEN: "S/",
    PHP: "₱",
    PLN: "zł",
    RUB: "₽",
    SEK: "kr",
    SGD: "$",
    THB: "฿",
    TRY: "₺",
    TWD: "NT$",
    VND: "₫",
    ZAR: "R",
  };;

  // * Change date format * // Format the date as "9 August 2023"
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // const formatDate = (dateString) => {
  //   const options = { year: 'numeric', month: 'long', day: 'numeric' };
  //   return new Date(dateString).toLocaleDateString('en-US', options);
  // };


  // function handleReadMore(blogId) {
  //   navigate('/blog-display', { state: { blogId } });
  //   // navigate('/blog-display');
  // }

  function handleReadMore(blogId, blogTitle, userId) {
    navigate(`/blog-display/${userId}/${blogId}/${blogTitle}`);
    // navigate('/blog-display');
  }


  // * Navigation *
  function handleNavigate() {
    navigate("/ota2");
  }

  function handleNavigate1() {
    navigate("/blog-title");
  }

  function handleNavigate2() {
    navigate("/blog-cke2");
  }

  const inputRef = useRef(null);
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "exclude") {
      setExclude(value); // Assuming exclude is a comma-separated string
    } else if (name === "include") {
      setInclude(value); // Assuming include is a comma-separated string
    } else if (name === "date") {
      setDate(value);
    }
  };

  // Set the minimum date to the current date
  const minDate = new Date();


  return (
    <div className='max-w-[1640px] m-auto px-4 p-12'>
      {/* <h1>Top Rated Menu Items</h1> */}
      <div className='mx-2'>
        <TravelPlan userId={userId} />
      </div>

      {/* Filter Row */}
      <div className='flex flex-col sm:flex lg:flex-row justify-between mb-6'>

        {/* Filter type */}
        <div className='lg:flex lg:flex-wrap xs:overflow-x-scroll xs:scroll xs:whitespace-nowrap xs:scroll-smooth xs:scrollbar-hide'>
          <button
            onClick={() => {
              setContents(data);
              setIsProduct(true);
              setIsBlog(true);
              setIsGallery(true);
              setIsLivestream(true);
              setIsTravelplan(true);
            }}
            // className={m-1 border ${isProduct ? 'bg-teal-500 text-white' : 'border-teal-500 hover:bg-teal-500 hover:text-white focus:bg-[#00A19A] focus:text-white'} rounded-xl px-5 py-1}>All</button>
            className={`m-1 border ${isProduct === true && isTravelplan === true && isBlog === true && isGallery === true && isLivestream === true ? 'bg-teal-500 text-white' : 'border-teal-500 hover:bg-teal-500 hover:text-white focus:bg-[#00A19A] focus:text-white'} rounded-xl px-5 py-1 xs:text-[35px] lg:text-[12px]`}>All</button>
          <button
            onClick={() => {
              filterType("itinerary");
              setIsProduct(false);
              setIsBlog(false);
              setIsGallery(false);
              setIsLivestream(false);
              setIsTravelplan(true);
            }}
            className={`m-1 border ${isProduct === false && isTravelplan === true && isBlog === false && isGallery === false && isLivestream === false ? 'bg-teal-500 text-white' : 'border-teal-500 hover:bg-teal-500 hover:text-white focus:bg-[#00A19A] focus:text-white'} rounded-xl px-5 py-1 xs:text-[35px] lg:text-[12px]`}>Travel Plan</button>

          <button
            onClick={() => {
              filterType('blog');
              setIsProduct(false);
              setIsBlog(true);
              setIsGallery(false);
              setIsLivestream(false);
              setIsTravelplan(false);
            }}
            // className='m-1 border border-teal-500 hover:bg-teal-500 hover:text-white focus:bg-[#00A19A] focus:text-white rounded-xl px-5 py-1'>Blog</button>
            className={`m-1 border ${isProduct === false && isTravelplan === false && isBlog === true && isGallery === false && isLivestream === false ? 'bg-teal-500 text-white' : 'border-teal-500 hover:bg-teal-500 hover:text-white focus:bg-[#00A19A] focus:text-white'} rounded-xl px-5 py-1 xs:text-[35px] lg:text-[12px]`}>Blog</button>
          <button
            onClick={() => {
              filterType('gallery');
              setIsProduct(false);
              setIsBlog(false);
              setIsGallery(true);
              setIsLivestream(false);
              setIsTravelplan(false);
            }}
            // className='m-1 border border-teal-500 hover:bg-teal-500 hover:text-white focus:bg-[#00A19A] focus:text-white rounded-xl px-5 py-1'>Photos</button>
            className={`m-1 border ${isProduct === false && isTravelplan === false && isBlog === false && isGallery === true && isLivestream === false ? 'bg-teal-500 text-white' : 'border-teal-500 hover:bg-teal-500 hover:text-white focus:bg-[#00A19A] focus:text-white'} rounded-xl px-5 py-1 xs:text-[35px] lg:text-[12px]`}>Gallery</button>
          {/* <button
            onClick={() => {
              filterType('videos');
              setIsProduct(false);
              setIsBlog(false);
              setIsPhoto(false);
              setIsVideo(true);
              setIsLivestream(false);
              setIsTravelplan(false);
            }}
            // className='m-1 border border-teal-500 hover:bg-teal-500 hover:text-white focus:bg-[#00A19A] focus:text-white rounded-xl px-5 py-1'>Videos</button>
            className={`m-1 border ${isProduct === false && isTravelplan === false && isBlog === false && isPhoto === false && isVideo === true && isLivestream === false ? 'bg-teal-500 text-white' : 'border-teal-500 hover:bg-teal-500 hover:text-white focus:bg-[#00A19A] focus:text-white'} rounded-xl px-5 py-1 xs:text-[35px] lg:text-[12px]`}>Videos</button> */}
          <button
            onClick={() => {
              filterType('livestreams');
              setIsProduct(false);
              setIsBlog(false);
              setIsGallery(false);
              setIsLivestream(true);
              setIsTravelplan(false);

            }}
            // className='m-1 border border-teal-500 hover:bg-teal-500 hover:text-white focus:bg-[#00A19A] focus:text-white rounded-xl px-5 py-1'>Livestreams</button>
            className={`m-1 border ${isProduct === false && isTravelplan === false && isBlog === false && isGallery === false && isLivestream === true ? 'bg-teal-500 text-white' : 'border-teal-500 hover:bg-teal-500 hover:text-white focus:bg-[#00A19A] focus:text-white'} rounded-xl px-5 py-1 xs:text-[35px] lg:text-[12px]`}>Livestreams</button>
        </div>

        {/* Searchbar */}
        {/* <div className='flex gap-4'>
          <div className='bg-gray-100 border border-gray-200 justify-between rounded-full inline-flex items-center h-fit py-1 px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <input class='bg-transparent p-1 w-full focus:outline-none border-none sm:text-[18px] lg:text-[13px]'
              type='text' placeholder='Search' />
            <MdSearch className='text-[#00A19A]' size={20} />
          </div>

          <div className='items-center justify-center'>
            <button className='m-1 border border-[#00A19A] bg-[#00A19A] text-white rounded-xl px-5 py-1'>Search</button>
          </div>
        </div> */}

      </div>

      {/* Display contents */}
      <div>
        {/* product display /> */}
        <div className='relative items-center'>
          {isProduct ? (
            <>
              <p className="font-bold text-gray-700 m-2 sm:text-[35px] lg:text-[14px]">Product</p>


              {/* <button
                className="absolute cursor-pointer top-[40%] left-2 bg-black bg-opacity-30 rounded-full sm:w-12 sm:h-12 lg:w-6 lg:h-6"
                disabled={currentPageProd <= 1} // Disable the button when currentPageProd is 1 or less
              >
                <MdChevronLeft
                  // className='text-white w-6 h-6'
                  className={`text-white sm:w-11 sm:h-11 lg:w-6 lg:h-6 ${currentPageProd <= 1 ? 'opacity-50 cursor-not-allowed' : '' // Apply opacity when disabled
                    }`}
                  onClick={slideLeft}
                  size={40}
                />
              </button> */}
              {/* {currentPageProd > 1 && ( // Check if it's not the first page*/}
              <button className="absolute cursor-pointer top-[40%] left-2 bg-black bg-opacity-30 rounded-full sm:w-11 sm:h-11 lg:w-6 lg:h-6 ">
                <MdChevronLeft
                  className='text-white sm:w-11 sm:h-11 lg:w-6 lg:h-6'
                  onClick={slideLeftProduct}
                  size={40}
                />
              </button>
              {/* )} */}

              <div className='flex justify-center'>
                <div id='slider1'
                  className='sm:w-[85%] sm:h-[800px] lg:w-[92%] lg:h-[380px] inline-flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                >
                  {productContent.length === 0 ? (
                    <>

                    </>
                  ) : (
                    productContent.map((product) => (
                      <div key={product.productId} className="inline-block bg-white p-5 flex-shrink-0 relative lg:hover:scale-105 duration-300" style={{ cursor: 'default' }}>
                        <div className='border sm:rounded-2xl lg:rounded-lg bg-white shadow-lg sm:h-[700px] sm:w-[550px] lg:h-[335px] lg:w-[240px]'>
                          {/* <a href={product.productLink} target="_blank" rel="noopener noreferrer"> */}
                          <div className="relative inline-block flex">
                            {/* <span className='absolute mt-3 ml-3 bg-black bg-opacity-70 p-2 text-white font-bold text-xs shadow-md'>{currencySymbols[product.productCurrency]} {product.productPrice}</span> */}
                            <img
                              className='sm:h-[350px] sm:w-[550px] lg:h-[190px] lg:w-[240px] inline-block sm:rounded-t-2xl lg:rounded-t-lg'
                              // src={product.productImage != null ? product.productImage : 'images/no_img_avail.jpg'}
                              src={product.productImage != null ? (product.productImage.startsWith('images/') ? '/' + product.productImage : product.productImage) : 'images/no_img_avail.jpg'}
                              alt={product.productName}
                            // title={product.productId}
                            // title='Click to view product'
                            />
                            {product.productPin === 'PIN' && (
                              <span className="absolute top-0 left-0 bg-teal-700 sm:w-[32%] sm:h-[15%] lg:w-[30%] lg:h-[12%] shadow-lg sm:rounded-tl-2xl sm:rounded-tr-3xl sm:rounded-br-3xl lg:rounded-tl-lg lg:rounded-tr-xl lg:rounded-br-xl cursor-pointer">
                                {/* <Text className="pl-2 text-xs text-white">PINNED</Text> */}
                                <div className="flex flex-col justify-center items-center h-full">
                                  <span className="sm:text-[25px] lg:text-[12px] text-white">PINNED</span>
                                </div>
                              </span>
                            )}
                            <button className="absolute top-0 right-2 cursor-pointer">
                              {/* <ThreeDotProd /> */}
                              <ThreeDotProd fetchProduct={fetchProduct} userId={userId} productId={product.productId} productCode={product.productCode} productPin={product.productPin} productLink={product.productLink} />
                            </button>
                          </div>
                          {/* </a> */}
                          <a href={product.productLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className='sm:p-6 lg:p-3'>
                              <span
                                className='block sm:max-w-[520px] sm:h-[70px] lg:max-w-[230px] lg:h-[25px] font-bold text-black sm:text-[37px] lg:text-[13px] break-words whitespace-normal'
                                title={product.productName}
                              >
                                {product.productName
                                  ? product.productName.length > 22
                                    ? product.productName.substring(0, 22) + '...'
                                    : product.productName
                                  : 'Title not found'}
                              </span>
                              <span className='block sm:max-w-[520px] sm:h-[150px] lg:max-w-[230px] lg:h-[55px] text-gray sm:text-[28px] lg:text-[11px] break-words whitespace-normal sm:text-justify lg:text-left'>
                                {product.productDesc
                                  ? product.productDesc.substring(0, 55) + '... '
                                  : '<No desc>'}
                                {/* ? (
                                  <>
                                    <span className='sm-screen:hidden lg-screen:block'>
                                      {product.productDesc.substring(0, 60) + '... '}
                                    </span>
                                    <span className='sm-screen:block lg-screen:hidden'>
                                      {product.productDesc.substring(0, 85) + '... '}
                                    </span>
                                  </>
                                )
                                : '<No desc>'} */}
                                {product.productDesc && (
                                  <a
                                    href={product.productLink}
                                    target="_blank"  // This opens the link in a new tab
                                    rel="noopener noreferrer" // This is recommended for security to prevent reverse tabnabbing
                                    className="font-montserrat text-left font-light underline cursor-pointer"
                                    style={{ color: 'blue', textDecorationColor: 'blue' }}
                                    title='More details'
                                  >
                                    More
                                  </a>
                                )}
                              </span>
                              <span className='block sm:h-[35px] lg:h-[15px] text-black sm:text-[35px] lg:text-[15px] font-bold break-words whitespace-normal flex justify-between items-center'>
                                <span>
                                  {product.productCurrency === 'MYR' ? currencySymbols['USD'] : currencySymbols[product.productCurrency]}
                                  {product.productCurrency === 'MYR' ? (product.productPrice * 0.2209907110425).toFixed(2) : product.productPrice}
                                  {/* {currencySymbols[product.productCurrency]} {product.productPrice} */}
                                  {/* , {product.productPin} */}
                                </span>
                                <span className="sm:hidden lg:block">
                                  <RatingBar
                                    value={4.5}
                                    starCount={5}
                                    size={17}
                                  />
                                </span>
                                <span className="sm:block lg:hidden">
                                  <RatingBar
                                    value={4.5}
                                    starCount={5}
                                    size={40}
                                  />
                                </span>
                              </span>
                              <span className='flex justify-between items-center'>
                                {/* <span className='block h-[15px] mt-2 font-bold text-teal-700 text-[10px] break-words whitespace-normal text-left'>
                                <Text className='' title='https://epic.rezgo.com'>EPIC</Text>
                              </span> */}
                                <span className='block sm:h-[35px] lg:h-[15px] sm:mt-4 lg:mt-2 font-bold text-teal-700 sm:text-[22px] lg:text-[10px] break-words whitespace-normal text-left'>
                                  {product.productCode.includes('DEALS') ? (
                                    <Text className='' title='DEALS'>DEALS</Text>
                                  ) : product.productCode.includes('FNT') ? (
                                    <Text className='' title='FLIGHT & TRANSPORT'>FLIGHT & TRANSPORT</Text>
                                  ) : product.productCode.includes('HOTELS') ? (
                                    <Text className='' title='https://www.kayak.com.my/hotels'>HOTELS</Text>
                                  ) : product.productLink.includes("https://www.viator.com") ? (
                                    <Text className='' title='https://www.viator.com'>VIATOR</Text>
                                  ) : product.productLink.includes("https://izzhnis.rezgo.com") ? (
                                    <Text className='' title='https://izzhnis.rezgo.com'>EPIC</Text>
                                  ) : (
                                    <Text className='' title=''>OTHER</Text>
                                  )}
                                </span>
                                <span className='block sm:h-[35px] lg:h-[15px] text-black sm:text-[22px] lg:text-[10px] break-words whitespace-normal text-right font-medium'>
                                  <Text className=''>4.5/5 (10)</Text>
                                </span>
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* <button
                className="absolute cursor-pointer top-[40%] right-2 bg-black bg-opacity-30 rounded-full sm:w-12 sm:h-12 lg:w-6 lg:h-6"
                disabled={currentPageProd >= totalPagesProd}
              >
                <MdChevronRight
                  // className='text-white w-6 h-6'
                  className={`text-white sm:w-11 sm:h-11 lg:w-6 lg:h-6 ${currentPageProd >= totalPagesProd ? 'opacity-50 cursor-not-allowed' : '' // Apply opacity when disabled
                    }`}
                  onClick={slideRight}
                  size={40}
                />
              </button> */}
              {/* {currentPageProd < totalPagesProd && ( // Check if it's not the last page */}
              <button className="absolute cursor-pointer top-[40%] right-2 bg-black bg-opacity-30 rounded-full sm:w-11 sm:h-11 lg:w-6 lg:h-6">
                <MdChevronRight
                  className='text-white sm:w-11 sm:h-11 lg:w-6 lg:h-6'
                  onClick={slideRightProduct}
                  size={40}
                />
              </button>
              {/* )}*/}

            </>
          ) : null}
        </div>

        {/* Itinerary display */}
        <div>
          {isTravelplan ? (
            <>

              <div className='flex items-center gap-2'>
                <p className="font-bold text-gray-700 m-2 sm:text-[35px] lg:text-[14px]">Travel Plan</p>
                {/* mobile add new*/}
                <div className='sm:block lg:hidden items-center mb-3'
                  onClick={() => setshowModalItinerary(true)}>
                  <button class=" bg-[#00A19A] border-grey-light px-8 py-3 rounded-full flex items-center justify-center">
                    <BsPlus className="w-12 h-12 text-white" />
                    <text className='text-[30px] mr-3 font-medium text-white'>Add new</text>
                  </button>
                </div>
              </div>
              <div className=''>
                <div className="sm:p-2 lg:p-0 lg:grid lg:grid-cols-4 xl:grid-cols-4 md:gap-[30px] lg:gap-9 sm:flex sm:flex-nowrap sm:overflow-x-scroll sm:scroll sm:scroll-smooth scrollbar-hide lg:shrink-0">
                  {/* {isTravelplan ? ( */}
                  <div className='sm:hidden xl:block 2xl:block my-2'>
                    <div className="bg-white sm:w-auto sm:h-[630px] lg:w-auto lg:h-[360px] 2xl:h-[420px] cursor-pointer border flex flex-col items-center justify-center shadow-lg border rounded-lg"
                      onClick={() => setshowModalItinerary(true)}
                    >
                      <GrAddCircle size={25} className="items-center text-center lg:h-[22px] lg:w-[22px] md:h-[38px] md:w-[38px]" />
                      <p className="font-bold sm:text-[28px] lg:text-[14px]">Create Your Travel Plan</p>
                    </div>
                  </div>
                  {/* ) : null} */}

                  {showModalItinerary ? (
                    <>
                      <div className="fixed bg-gray-50 xs:top-40 lg:top-20 rounded-3xl cursor-pointer text-center justify-center shadow-3xl items-center lg:mx-[400px] lg:my-[20px] flex-nowrap overflow-x-hidden overflow-y-auto scrollbar-hide inset-0 z-50 outline-none focus:outline-none" >
                        {/*Content*/}

                        <Column className="sm:w-[100%] sm:h-[100%] lg:w-[100%] lg:h-fit">
                          <Row className="text-end items-end justify-end">
                            <FaTimes
                              className="mr-4 mt-6 sm:h-10 sm:w-10 lg:h-5 lg:w-5 text-black common-pointer"
                              onClick={() => setshowModalItinerary(false)}
                            />
                          </Row>
                          <Row className="w-[100%] items-start justify-start ">
                            <Text className="text-start py-[70px] pl-[130px] sm:text-[37px] lg:text-xl text-black font-light">
                              Create Travel Plan
                            </Text>
                          </Row>
                          <p className="py-1 px-4 text-center">
                            <button
                              className="sm:w-[600px] lg:w-[300px] hover:bg-[#4eb6b1f8] inline-flex gap-1 items-center justify-between sm:text-[28px] lg:text-xs border border-[#00A19A] bg-[#00A19A] text-white rounded-lg px-3 py-3"
                              onClick={() => {
                                setShowAI(true);
                                setshowModalItinerary(false);
                              }
                              }
                            >
                              <div>Generate with AI</div>
                              <div className="items-end justify-between text-end ">
                                <AiOutlineDoubleRight className="sm:w-10 sm:h-10 lg:w-5 lg:h-5" />
                              </div>
                            </button>
                          </p>
                          <p className="px-4 text-center py-1">
                            <button
                              className="sm:w-[600px] lg:w-[300px] hover:bg-[#4eb6b1f8] inline-flex gap-1 items-center justify-between sm:text-[28px] lg:text-xs border border-[#00A19A] bg-[#00A19A] text-white rounded-lg px-3 py-3"
                              onClick={() => {
                                setShowYT(true);
                                setshowModalItinerary(false);
                              }
                              }
                            >
                              <span>Generate from youtube</span>
                              <AiOutlineDoubleRight className="sm:w-10 sm:h-10 lg:w-5 lg:h-5" />
                            </button>
                          </p>
                          <p className="px-4 text-center py-1">
                            <button className="sm:w-[600px] lg:w-[300px] hover:bg-[#4eb6b1f8] inline-flex gap-1 items-center justify-between sm:text-[28px] lg:text-xs border border-[#00A19A] bg-[#00A19A] text-white rounded-lg px-3 py-3"
                              onClick={handleNavigate}>
                              Create on your own
                              <AiOutlineDoubleRight className="sm:w-10 sm:h-10 lg:w-5 lg:h-5" />
                            </button>
                          </p>
                        </Column>
                      </div>

                      <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                  {/*Generate from AI*/}
                  {showAI ? (
                    <>
                      <div className="bg-gray-50 xs:top-40 lg:top-20 rounded-3xl cursor-pointer justify-center shadow-3xl items-center lg:mx-[400px] lg:my-[20px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
                        {/*Content*/}

                        <Column className="sm:py-[50px] sm:w-[100%] sm:h-[100%] lg:py-[10px] lg:w-[100%] lg:h-fit">
                          {/* <Row className="text-end items-end justify-end mr-4">
                            {showPopup && (
                              <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
                                <div className="bg-white p-8 rounded shadow-lg">
                                  <p className="md:text-3xl lg:text-lg mb-4">Are you sure you want to leave this page?</p>
                                  <div className="flex justify-end">
                                    <button className="mr-4 px-4 py-2 md:text-2xl lg:text-xs bg-gray-300 hover:bg-gray-400 rounded"
                                      onClick={() => {
                                        setShowPopup(false);
                                        setShowAI(true);
                                        setshowModalItinerary(false);
                                      }}>
                                      Cancel
                                    </button>
                                    <button className="px-4 py-2 md:text-2xl lg:text-xs bg-red-500 hover:bg-red-600 rounded text-white"
                                      onClick={() => {
                                        setShowPopup(false);
                                        setShowAI(false);
                                      }}>
                                      Confirm
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                            <FaTimes
                              className="mr-4 mt-6 sm:h-10 sm:w-10 lg:h-5 lg:w-5 text-black common-pointer"
                              onClick={() => {
                                setShowPopup(true); // Display the confirmation popup
                              }}
                            />
                          </Row> */}
                          <Row className="text-end items-end justify-end mr-4">
                            <FaTimes
                              className="mr-4 mt-6 sm:h-10 sm:w-10 lg:h-5 lg:w-5 text-black common-pointer"
                              onClick={() => setShowAI(false)}
                            />
                          </Row>
                          <Row className="w-[100%] items-start justify-start">
                            <Text className="w-[60%] text-start py-[30px] ml-[60px] sm:text-[37px] lg:text-xl text-black font-light">
                              Tell us about your travel plan!
                            </Text>
                          </Row>
                          <div className='m-2 mt-2 grid grid-cols-2 gap-4 mx-[60px]'>
                            {/* web view */}
                            <div class="sm:hidden lg:block xl:block 2xl:block">
                              <span className='font-medium sm:text-[28px] lg:text-[14px]'>Destination:</span>
                              <div className="bg-white_A700 flex flex-row gap-[5px] items-center justify-start outline outline-[1px] outline-[#00a19a] rounded-xl sm:h-24 lg:h-9 w-[100%]">
                                <BiWorld size={30} fill="#00a19a" className="lg:ml-2 md:ml-4 lg:h-[22px] lg:w-[22px] md:h-[38px] md:w-[38px]" />
                                <PlacesAutocomplete
                                  apiKey="AIzaSyB40jqFnXxo_4ZX7WezdrlR4NicJsseyu8"
                                  value={destination}
                                  onChange={handleChange}
                                  onSelect={handleSelect}
                                >
                                  {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {

                                    //to disable suggestion for epictravel

                                    // const suggestionsToDisable = [
                                    //   "Kuala Lumpur, Malaysia",
                                    //   "Pulau Pinang, Malaysia"
                                    // ];
                                    // const filteredSuggestions = suggestions.filter(
                                    //   (suggestion) => {
                                    //     // Check if the suggestion is a big city or a country
                                    //     // return suggestions;
                                    //     const isDisabled = suggestionsToDisable.includes(suggestion.description);
                                    //     return !isDisabled;
                                    //   }
                                    // );

                                    //for vm
                                    const suggestionsToDisable = [
                                      "Kuala Lumpur, Malaysia",
                                      "Pulau Pinang, Malaysia"
                                    ];

                                    const filteredSuggestions = suggestions.filter((suggestion) => {

                                      // Check if the suggestion description includes "Malaysia" and is not in the disabled list
                                      const includesMalaysia = suggestion.description.toLowerCase().includes("malaysia");
                                      const isDisabled = suggestionsToDisable.includes(suggestion.description);

                                      return includesMalaysia && !isDisabled;
                                    });

                                    return (
                                      <div>
                                        <input
                                          {...getInputProps({

                                            placeholder: "Destination",
                                            className: "font-normal not-italic font-montserrat p-[0] md:text-[28px] lg:text-[12px] text-black placeholder:required text-slate_700 w-[100%] outline-none border-none", // your custom class
                                          })}
                                        />

                                        <div className="autocomplete-dropdown-container" style={{ position: "absolute", zIndex: 1000, marginTop: 10, marginLeft: -40, border: isLoading ? 'none' : 'none', boxShadow: isLoading ? '0 0px 0px 0 rgba(0, 0, 0, 0.2)' : '0 4px 8px 0 rgba(0, 0, 0, 0.2)', width: '18%' }}>
                                          {isLoading ? (
                                            <div>
                                              <strong>Loading...</strong>
                                              <CircularProgress size={12} style={{ color: 'black' }} />
                                            </div>

                                          ) : (
                                            filteredSuggestions.map((suggestion) => {
                                              const className = suggestion.active
                                                ? "suggestion-item--active"
                                                : "suggestion-item";
                                              const style = suggestion.active
                                                ? {
                                                  font: 'Montserrat', backgroundColor: "#bee3e2", paddingLeft: '5px', paddingTop: '15px', paddingBottom: '10px', cursor: "pointer", color: 'black', fontSize: '12px', fontWeight: 'normal', outlineColor: "#00a19a", height: '5em', width: '300px',
                                                  borderOutlineColor: "#00a19a", borderColor: "#00a19a"
                                                }
                                                : {
                                                  font: 'Montserrat', backgroundColor: "#fafafa", cursor: "pointer", color: 'black', fontSize: '12px', fontWeight: 'normal', outlineColor: "#00a19a", height: '5em', width: '300px',
                                                  borderOutlineColor: "#00a19a", paddingLeft: '5px', paddingTop: '15px', paddingBottom: '10px', borderColor: "#00a19a"
                                                };
                                              return (
                                                <div
                                                  {...getSuggestionItemProps(suggestion, {
                                                    className,
                                                    style,
                                                  })}
                                                >
                                                  <span style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                                      <FaMapMarkerAlt style={{ marginRight: '2px', fontSize: '20px' }} />
                                                      <strong style={{ marginLeft: '5px', marginTop: '-10px' }}>{suggestion.description.split(",")[0]}</strong>
                                                    </span>
                                                    <span style={{ display: 'block', marginLeft: '25px', marginTop: '-5px' }}>
                                                      {/* {suggestion.description.split(",").slice(-2)} */}
                                                      {suggestion.description.split(',').slice(-2).join(', ')}
                                                    </span>
                                                  </span>
                                                </div>
                                              );
                                            })
                                          )}
                                        </div>
                                      </div>
                                    );
                                  }}
                                </PlacesAutocomplete>
                              </div>
                            </div>
                            {/* mobile view */}
                            <div className='sm:block lg:hidden'>
                              <label for='language' className='font-medium sm:text-[28px] lg:text-[14px]'>Destination:</label>
                              <div className="w-full inline-flex items-center text-center p-5 gap-4 justify-start border border-1 border-[#00a19a] rounded-xl hover:outline-blue-500/75">
                                <CiSearch size={55} fill="#00a19a" className="ml-4 text-gray_700 " />
                                {/* <BiWorld size={30} fill="#00a19a" className="lg:ml-2 md:ml-4 lg:h-[22px] lg:w-[22px] md:h-[38px] md:w-[38px]" /> */}

                                <input
                                  placeholder="Destination"
                                  className="bg-transparent font-montserrat items-center justify-start not-italic p-[0] sm:text-[30px] md:text-[30px] lg:text-[9px] placeholder:required text-slate_700 w-[160%] outline-none border-none"
                                  onClick={() => {
                                    setNav(!nav);
                                    setDisabled(!isDisabled);
                                    focusInput();
                                  }}
                                  disabled={isDisabled}
                                  value={destination}
                                />
                                {nav ? <div className="bg-black/80 fixed w-screen h-screen z-10 bottom-0 left-0"></div> : ''}
                                <div className={nav ? 'fixed bottom-0 rounded-t-[90px] left-0 w-screen h-[110em] p-4 bg-white z-10 duration-300' : 'fixed bottom-[-100%] left-0 w-screen h-[110em] p-4 bg-white z-10 duration-300'}>
                                  <text className="font-montserrat absolute top-40 left-11 text-[40px] font-medium">Enter Destination</text>

                                  <AiOutlineClose onClick={() => setNav(!nav) & setDisabled(!isDisabled)} size={60} className="absolute right-10 top-14 cursor-pointer" />

                                  <nav className="h-fit m-8 snap-y">
                                    <div className="snap-end grid mt-60 grid-cols-2 w-[100%]">
                                      <div className="col-span-2 w-[100%] inline-flex h-[10em] items-center rounded-[20px] rounded-[20px] text-center bg-white/80 p-6 gap-4 justify-start outline outline-[1px] outline-blue-500/75">
                                        <CiSearch size={50} className="ml-2 text-gray_700 " />
                                        <PlacesAutocomplete
                                          apiKey="AIzaSyB40jqFnXxo_4ZX7WezdrlR4NicJsseyu8"
                                          value={destination}
                                          onChange={handleChange}
                                          onSelect={handleSelect}
                                        >
                                          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
                                            // const filteredSuggestions = suggestions.filter(suggestion => {
                                            //   // Check if the suggestion is a big city or a country
                                            //   return suggestions

                                            //   // suggestion.types.includes('locality') || suggestion.types.includes('country');
                                            // });

                                            //to disable suggestion for epictravel

                                            // const suggestionsToDisable = [
                                            //   "Kuala Lumpur, Malaysia",
                                            //   "Pulau Pinang, Malaysia"
                                            // ];
                                            // const filteredSuggestions = suggestions.filter(
                                            //   (suggestion) => {
                                            //     // Check if the suggestion is a big city or a country
                                            //     // return suggestions;
                                            //     const isDisabled = suggestionsToDisable.includes(suggestion.description);
                                            //     return !isDisabled;
                                            //   }
                                            // );

                                            //for vm
                                            const suggestionsToDisable = [
                                              "Kuala Lumpur, Malaysia",
                                              "Pulau Pinang, Malaysia"
                                            ];

                                            const filteredSuggestions = suggestions.filter((suggestion) => {

                                              // Check if the suggestion description includes "Malaysia" and is not in the disabled list
                                              const includesMalaysia = suggestion.description.toLowerCase().includes("malaysia");
                                              const isDisabled = suggestionsToDisable.includes(suggestion.description);

                                              return includesMalaysia && !isDisabled;
                                            });

                                            return (
                                              <div>
                                                <input
                                                  ref={inputRef}
                                                  {...getInputProps({
                                                    placeholder: "Destination",
                                                    className: "custom-input font-medium font-montserrat items-center justify-start not-italic p-[0] sm:text-[35px] md:text-[35px] placeholder:required placeholder-gray-300 text-gray-400 w-[160%] outline-none border-none",
                                                    style: {
                                                    },
                                                  })}
                                                />

                                                <div className="autocomplete-dropdown-container" style={{ position: "absolute", zIndex: 1000, padding: 10, marginLeft: -130, marginTop: 80, width: '96%', height: '100%' }}>
                                                  {loading ? null : (
                                                    filteredSuggestions.map((suggestion) => {
                                                      const className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
                                                      const style = suggestion.active ? { backgroundColor: "#bee3e2", font: 'Montserrat', cursor: "pointer", color: '#000', paddingTop: '40px', fontSize: '32px', paddingRight: '20px', height: '4em', width: '600px', fontWeight: 'normal', textAlign: 'left' } : { backgroundColor: "#ffffff", paddingLeft: '30px', font: 'Montserrat', cursor: "pointer", color: '#000', fontSize: '35px', paddingTop: '40px', height: '5em', fontWeight: 'normal', textAlign: 'left' };
                                                      return (
                                                        <div
                                                          {...getSuggestionItemProps(suggestion, {
                                                            className,
                                                            style,
                                                          })}
                                                        >
                                                          <span style={{ display: 'flex', flexDirection: 'column' }}>
                                                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                                              <FaMapMarkerAlt style={{ marginRight: '4', fontSize: '50px', marginTop: '30px' }} />
                                                              <strong style={{ marginLeft: '30px', marginTop: '-20px' }}>{suggestion.description.split(",")[0]}</strong>
                                                            </span>
                                                            <line className="w-full h-2 color-[#f5f5f5]"></line>
                                                            <span style={{ display: 'block', fontStyle: 'oblique', marginLeft: '95px', marginTop: '-20px' }}>
                                                              {suggestion.description.split(',').slice(-2).join(', ')}
                                                            </span>
                                                          </span>
                                                        </div>
                                                      );
                                                    })
                                                  )}
                                                </div>
                                              </div>
                                            );
                                          }}
                                        </PlacesAutocomplete>
                                      </div>
                                    </div>
                                  </nav>
                                </div>
                              </div>
                            </div>
                            <div className=''>
                              <label for='language' className='font-medium sm:text-[28px] lg:text-[14px]'>Output language:</label>
                              <select
                                id='languages'
                                className='placeholder-[#d5d5d5] rounded-xl border border-[#00a19a] text-gray-900 sm:text-[26px] lg:text-xs focus:border-[#00a19a] block sm:h-24 lg:h-9 sm:w-[100%] lg:w-[100%]'
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                required
                              >
                                <option value='text-[#d5d5d5]'>Select</option>
                                <option value='english'>English</option>
                                <option value='malay'>Malay</option>
                                <option value='chinese_simplified'>Chinese Simplified</option>
                                <option value='chinese_traditional'>Chinese Traditional</option>
                                <option value='indonesian'>Indonesian</option>
                                <option value='thai'>Thai</option>
                                <option value='japanese'>Japanese</option>
                                <option value='korean'>Korean</option>
                                <option value='filipino'>Filipino</option>
                                <option value='hindi'>Hindi</option>
                                <option value='spanish'>Spanish</option>
                                <option value='arabic'>Arabic</option>
                                <option value='french'>French</option>
                                <option value='bengali'>Bengali</option>
                                <option value='russian'>Russian</option>
                                <option value='portuguese'>Portuguese</option>
                                <option value='vietnamese'>Vietnamese</option>
                              </select>
                            </div>
                          </div>

                          <div className='m-2 mt-2 grid grid-cols-2 gap-4 mx-[60px]'>
                            <div className=''>
                              <label for='days' className='font-medium sm:text-[28px] lg:text-[14px]'>No. of days:</label>
                              <select
                                id='days'
                                className='placeholder-[#d5d5d5] rounded-xl border border-[#00a19a] sm:text-[28px] lg:text-xs text-gray-900 focus:ring-blue-500 focus:border-blue-500 block sm:h-24 lg:h-9 sm:w-[100%] lg:w-full'
                                value={days}
                                onChange={(e) => setDays(e.target.value)}
                                required
                              >
                                <option value=' '>Select</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                              </select>
                            </div>

                            {/* mobile view */}
                            <div className='sm:block lg:hidden'>
                              <label for='date' className='font-medium sm:text-[28px] lg:text-[14px]'>Date:</label>
                              <div className="sm:block lg:hidden items-center flex justify-start p-4 gap-4 outline outline-[1px] outline-[#00a19a] rounded-xl sm:h-24 lg:h-9 hover:outline-blue-500/75" >
                                <FiCalendar size={30} className="ml-2 text-[#00a19a]" />
                                <input
                                  type="date"
                                  id="myDate"
                                  name="myDate"
                                  min={minDate.toISOString().split('T')[0]}
                                  className="border-none text-black text-[28px] pt-6 bg-transparent"
                                  defaultValue={startDate.toISOString().split('T')[0]}
                                  // onChange={(date) => setStartDate(date)}
                                  onChange={(event) => setStartDate(new Date(event.target.value))}
                                >
                                </input>
                              </div>
                            </div>

                            {/* web view */}
                            <div className='sm:hidden lg:block xl:block 2xl:block'>
                              <label for='date' className='font-medium sm:text-[28px] lg:text-[14px]'>Date:</label>
                              <div className="sm:hidden md:hidden lg:block xl:block 2xl:block bg-white_A700 flex flex-row gap-[5px] items-center outline outline-[1px] outline-[#00a19a] rounded-xl w-[100%] lg:h-9">
                                <FiCalendar size={30} className="ml-2 text-[#00a19a]" />
                                <DatePicker
                                  className="font-normal font-montserrat not-italic p-[0] lg:text-xs text-black placeholder:required text-slate_700 w-[100%]"
                                  wrapClassName="w-[100%] "
                                  placeholder="Date"
                                  name="date"
                                  shape="RoundedBorder3"
                                  size="sm"
                                  type="date"
                                  minDate={minDate}
                                  value={date}
                                  selected={date}
                                  onChange={(date) => setDate(date)} />
                                {/* </Input> */}
                              </div>
                            </div>
                          </div>

                          <div className='mx-[60px] mt-6'>
                            <label htmlFor='typeofattraction' className='font-medium sm:text-[28px] lg:text-[14px]'>Type of attractions: (Choose at least 2 Attractions)</label>
                            <div className="font-montserrat tracking-tighter flex flex-wrap gap-2 items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                              {attractions.map((attraction, index) => (
                                <button
                                  key={index}
                                  value={attraction}
                                  className={`m-1 border sm:text-[28px] lg:text-[14px] ${selectedAttraction.includes(attraction)
                                    ? 'bg-teal-500 text-white'
                                    : ''
                                    } hover:bg-teal-500 hover:text-white rounded-xl px-5 py-1 sm:h-20 lg:h-9 ${selectedAttraction.length === 3 && !selectedAttraction.includes(attraction)
                                      ? 'bg-gray-300 text-gray-500 border-gray-300 hover:bg-gray-300 hover:text-gray-500 hover:border-gray-300 cursor-not-allowed'
                                      : 'border-teal-500'
                                    }`}
                                  onChange={(e) => setAttractions(e.target.value)}
                                  onClick={() => handleAttractionClick(attraction)}
                                  disabled={selectedAttraction.length === 3 && !selectedAttraction.includes(attraction)}
                                >
                                  {attraction}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className='mx-[60px] mt-6'>
                            <label htmlFor='typeofattraction' className='font-medium sm:text-[28px] lg:text-[14px]'>Your Interests: (Choose at least 2 Interests)</label>
                            <div className="font-montserrat tracking-tighter flex flex-wrap gap-2 items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[14px] 3xl:mt-[22px] w-[100%]">
                              {/* <button
                                  className="m-1 font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center px-5 py-1 rounded-xl
                                  border border-teal-500 text-black"
                                  // onClick={handleFetchInterests}
                                >
                                  {/* {showInterests ? 'Interests: ' + interests.join(', ') : 'Fetch Interests'} */}
                              {/* {interests.length > 0 ? '' + interests.join(', ') : ''} */}
                              {/* </button> */}
                              {interests.map((interest, index) => (
                                <button
                                  key={index}
                                  value={interests}
                                  className={`m-1 border sm:text-[28px] lg:text-[14px] ${selectedInterest.includes(interest)
                                    ? 'bg-teal-500 text-white'
                                    : ''
                                    } hover:bg-teal-500 hover:text-white rounded-xl px-5 py-1 sm:h-20 lg:h-9 ${selectedInterest.length === 5 && !selectedInterest.includes(interest)
                                      ? 'bg-gray-300 text-gray-500 border-gray-300 hover:bg-gray-300 hover:text-gray-500 hover:border-gray-300 cursor-not-allowed'
                                      : 'border-teal-500'
                                    }`}
                                  onChange={(e) => setInterests(e.target.value)}
                                  onClick={() => handleInterestClick(interest)}
                                  disabled={selectedInterest.length === 5 && !selectedInterest.includes(interest)}
                                >
                                  {interest}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="mt-4 mx-[60px]">
                            <label for='exclusion' className='font-medium sm:text-[28px] lg:text-[14px]'>Exclude: (optional)</label>
                            <input
                              className="placeholder-[#9A9A9A] bg-white border border-[#00a19a] text-gray-900 sm:text-[26px] lg:text-xs focus:border-[#00a19a] rounded-xl block sm:h-24 lg:h-9 sm:w-[100%] lg:w-[100%]"
                              type="text"
                              name='exclude'
                              size="smSrc"
                              value={exclude}
                              onChange={handleInputChange}
                              required
                              placeholder="Insert places that you want to exlude"
                              title="E.g. Batu Caves"
                            ></input>
                            <div className='flex justify-between'>
                              <p className='sm:text-[26px] lg:text-xs'>Separate each entry with a comma</p>
                              <text className='sm:text-[26px] lg:text-xs'>0/50 max characters</text>
                            </div>
                          </div>

                          <div className="mt-4 mx-[60px] mb-2">
                            <label for='inclusion' className='font-medium sm:text-[28px] lg:text-[14px]'>Include: (optional)</label>
                            <input
                              className="placeholder-[#9A9A9A] bg-white border border-[#00a19a] text-gray-900 sm:text-[26px] lg:text-xs focus:border-[#00a19a] rounded-xl block sm:h-24 lg:h-9 sm:w-[100%] lg:w-[100%]"
                              name='include'
                              type="text"
                              size="smSrc"
                              required
                              value={include}
                              onChange={handleInputChange}
                              placeholder="Insert places that you want to include"
                              title="E.g. Pavillion Kuala Lumpur"
                            ></input>
                            <div className='flex justify-between'>
                              <p className='sm:text-[26px] lg:text-xs'>Separate each entry with a comma</p>
                              <text className='sm:text-[26px] lg:text-xs'>0/50 max characters</text>
                            </div>
                          </div>

                          <Row className="justify-between lg:mb-3 mx-[60px] text-end mt-[30px] ">
                            <button
                              className="bg-[#00A19A] md:text-[30px] lg:text-[14px] justify-end items-end lg:w-[15%] md:w-[20%] text-white font-medium px-4 py-1.5 rounded-lg "
                              onClick={() => {
                                setShowAI(false);
                                setshowModalItinerary(true);
                              }
                              }
                            >
                              Back
                            </button>
                            <button
                              className="bg-[#00A19A] md:text-[30px] lg:text-[14px] justify-end items-end lg:w-[25%] md:w-[20%] text-center text-white font-medium px-4 py-1.5 rounded-lg "
                              onClick={handleGenerateClick}
                            >
                              Generate
                            </button>
                          </Row>
                        </Column>
                      </div>

                      <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                  {/*Generate from youtube*/}
                  {showYT ? (
                    <>
                      <div className="bg-gray-50 xs:top-40 lg:top-20 scrollbar-hide rounded-3xl cursor-pointer justify-center shadow-3xl  items-center mx-[400px] my-[20px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        {/*Content*/}

                        <Column className="sm:py-[50px] sm:w-[100%] sm:h-[100%] lg:w-[100%] lg:h-fit" >
                          <Row className="w-[100%] items-start justify-start">
                            <Text className="w-[100%] text-start py-[30px] ml-[60px] text-[19px] text-black font-light">
                              Generate itinerary from Youtube videos
                            </Text>
                          </Row>
                          <Row className="mt-4">
                            <input
                              className=" mx-[60px] placeholder-[#d5d5d5] rounded bg-white border border-gray-300 text-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-4 "
                              type="text"
                              size="smSrc"
                              required
                              placeholder="Enter your Youtube link"
                              title="E.g. https://www.youtube.com/watch?v=uHC_7SgdB"
                            ></input>
                          </Row>
                          <Row className="mt-4">
                            <input
                              className=" mx-[60px] placeholder-[#d5d5d5] rounded bg-white border border-gray-300 text-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-4 "
                              type="text"
                              size="smSrc"
                              required
                              placeholder="Enter your destination"
                              title="E.g. Jeju Island Korea"
                            ></input>
                          </Row>
                          <Row className="mx-[60px] space-x-3 mt-4">
                            <button className="placeholder-[#d5d5d5] rounded bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-[50px] w-[100%] 2xl:mt-4">
                              <Row>
                                <Column>
                                  <BsCalendarCheck className="ml-3 mt-2 text-[#00A19A] font-thin h-6 w-7 cursor-pointer" />
                                </Column>
                                <Column className="flex flex-col justify-start items-start">
                                  <Text className="ml-3 font-semibold mt-1">
                                    Departure
                                  </Text>
                                  <Text className="ml-3 text-xs ">
                                    <DatePicker
                                      className="text-xs common-pointer"
                                      selected={selectedDateDepartYT}
                                      onChange={handleDateChangeDepartYT}
                                      dateFormat="MM/dd/yyyy"
                                      showPopperArrow={false}
                                      placeholderText="Add date"
                                    />
                                  </Text>
                                </Column>
                              </Row>
                            </button>

                            <button className="placeholder-[#d5d5d5] rounded bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-[50px] w-[100%] 2xl:mt-4">
                              <Row>
                                <Column>
                                  <BsCalendarCheck className="ml-3 mt-2 text-[#00A19A] font-thin h-6 w-7 cursor-pointer" />
                                </Column>
                                <Column className="flex flex-col justify-start items-start">
                                  <Text className="ml-3 font-semibold mt-1">
                                    Arrival
                                  </Text>
                                  <Text className="ml-3 text-xs ">
                                    <DatePicker
                                      className="text-xs common-pointer"
                                      selected={selectedDateArrivalYT}
                                      onChange={handleDateChangeArrivalYT}
                                      dateFormat="MM/dd/yyyy"
                                      showPopperArrow={false}
                                      placeholderText="Add date"
                                    />
                                  </Text>
                                </Column>
                              </Row>
                            </button>
                          </Row>
                          <Row className="mt-4">
                            <select className="mx-[60px]  placeholder-[#d5d5d5] rounded bg-white border border-gray-300 text-gray-900 text-xs  focus:border-blue-500 block h-8 w-[100%] 2xl:mt-4 ">
                              <option hidden>Theme</option>
                              <option className="py-4">Sport</option>
                              <option className="py-4">Adventure</option>
                            </select>
                          </Row>
                          <Row className="justify-between d mb-3 text-end mx-[60px] mt-[140px] ">
                            <button
                              className="bg-[#00A19A]  justify w-[25%] text-white font-medium  focus:text-white px-5 py-1 rounded-lg text-sm "
                              type="button"
                              onClick={() => {
                                setShowYT(false);
                                setshowModalItinerary(true);
                              }
                              }
                            >
                              <span>Back</span>
                            </button>
                            <button
                              className="bg-[#00A19A] w-[25%] text-white font-medium  focus:text-white px-5 py-1 rounded-lg text-sm "
                              type="button"
                            >
                              <span>Generate</span>
                            </button>
                          </Row>
                        </Column>
                      </div>

                      <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                  {/* {contents
                  .filter((data) => data.category === "itinerary") */}
                  {/* <div className='flex flex-nowrap overflow-x-auto overflow-y-hidden scroll lg:scrollbar scroll-smooth '> */}
                  {isLoadingg ? (
                    <div id="loading-container" className="loader-container5">
                      <div className="loader"></div>
                      <p className="loading-text">Loading...</p>
                    </div>
                  ) : (
                    <>
                      {isTravelplan && (
                        <>
                          {travelPlan
                            .filter((data) => data.itineraryStatus === "PUBLISHED")
                            .map((data, index) => (
                              // hover:scale-105 duration-300 
                              <div key={index} className='inline-block my-2' style={{ cursor: 'default' }}>
                                <div className="bg-white border sm:rounded-2xl lg:rounded-lg shadow-lg sm:w-[550px] sm:h-[700px] lg:w-full lg:h-[360px] 2xl:h-[420px]">
                                  {/* <div className='bg-white border sm:rounded-2xl lg:rounded-lg shadow-lg sm:h-[700px] sm:w-[550px] lg:h-[360px] 2xl:h-[420px] xl:w-auto 2xl:w-fit'> */}
                                  <div className="relative inline-block flex">
                                    <img
                                      src={`https://halaltravel.ai/hv/api/chatgpt/user/itinerary/coverimage/${data.itineraryImage}`}
                                      alt={data.alt}
                                      className="sm:h-[350px] sm:w-[550px] lg:h-[200px] 2xl:h-[220px] w-full inline-block sm:rounded-t-2xl lg:rounded-t-lg"
                                    />
                                    <button className="absolute top-0 right-2 cursor-pointer">
                                      <ThreeDotTravelplan
                                        itineraryLink={baseURL + `/itinerary/${data.userId}/${data.itineraryId}/${encodeURIComponent(data.itineraryTitle)}`}
                                      />

                                      {/* navigate(`/itinerary/${creatorId}/${itineraryId}/` + encodedTitle); */}
                                    </button>
                                  </div>
                                  <div className="cursor-pointer"
                                    onClick={() => handleTravelPlanClick(data.userId, data.itineraryId, data.itineraryTitle)}>
                                    <div className="items-center sm:p-6 lg:p-3">
                                      <Row>
                                        <p className="justify-center font-bold w-fit lg:text-[14px] text-black lg:block md:hidden"
                                          title={data.itineraryTitle}
                                        >
                                          {data.itineraryTitle.length > 28 ? data.itineraryTitle.substring(0, 28) + '...' : data.itineraryTitle}
                                        </p>
                                        <p className="justify-center font-bold w-fit sm:text-[37px] text-black lg:hidden md:block"
                                          title={data.itineraryTitle}
                                        >
                                          {data.itineraryTitle.length > 20 ? data.itineraryTitle.substring(0, 20) + '...' : data.itineraryTitle}
                                        </p>
                                      </Row>

                                      {/* Description */}
                                      <p className="mt-1 t-1 lg:h-[40px] 2xl:h-[75px] sm:h-[120px] lg:text-xs justify-center w-fit lg:block md:hidden"
                                        title={data.itineraryDescription}
                                      >
                                        {data.itineraryDescription.length > 65 ? data.itineraryDescription.substring(0, 65) + '...' : data.itineraryDescription}
                                      </p>
                                      <p className="mt-1 t-1 lg:h-[40px] 2xl:h-[75px] sm:h-[120px] sm:text-[28px] justify-center w-fit lg:hidden md:block"
                                        title={data.itineraryDescription}
                                      >
                                        {data.itineraryDescription.length > 40 ? data.itineraryDescription.substring(0, 40) + '...' : data.itineraryDescription}
                                      </p>

                                      {/* Tagging attraction */}
                                      <style>
                                        {`
                                        .interests-tooltip {
                                          display: none;
                                          position: absolute;
                                          background-color: white;
                                          border: 0.5px solid black;
                                          padding: 8px;
                                          z-index: 1;
                                          right: 0; /* Align to the right */
                                          flex-direction: row;
                                        }

                                        .tag-container {
                                          position:;
                                          display: inline-block;
                                        }

                                        .tag:hover .interests-tooltip {
                                          display: block;
                                        }
                                      `}
                                      </style>
                                      <div className="flex justify-between items-center lg:h-[30px] sm:h-[20px] md:mt-4 lg:mt-0 font-bold">
                                        <div className="tags truncate w-[200px] items-center ">
                                          {data.interests && data.interests.length > 0 ? (
                                            <>
                                              {data.interests
                                                .slice(0, 2)
                                                .map((tag, tagIndex) => (
                                                  <span
                                                    key={tagIndex}
                                                    className="tag w-[210px] sm:text-[22px] xl:text-[11px] lg:text-[11px] font-medium"
                                                    style={{ maxWidth: "0px" }} // Set the maximum width for tags
                                                  >
                                                    {tagIndex > 0 && (
                                                      <span className="dot lg:text-[20px] md:text-[20px] mx-2 font-medium">
                                                        •
                                                      </span>
                                                    )}
                                                    {tag.length > 15
                                                      ? tag.substring(0, 15) + "..."
                                                      : tag}
                                                  </span>
                                                ))}
                                              {data.interests.length > 1 && (
                                                <span
                                                  className="tag sm:text-[22px] lg:h-[30px] xl:text-[11px] lg:text-[11px] font-medium"
                                                  style={{ maxWidth: "100px" }} // Set the maximum width for tags
                                                >
                                                  <div class="interests-tooltip">
                                                    {data.interests
                                                      .slice(2)
                                                      .map((interest, index) => (
                                                        <div
                                                          key={index}
                                                          style={{ maxWidth: "100px" }}
                                                        >
                                                          {interest.length > 15
                                                            ? interest.substring(0, 15) + ".."
                                                            : interest}
                                                        </div>
                                                      ))}
                                                  </div>
                                                  {"      "} +{data.interests.length - 2}
                                                </span>
                                              )}
                                            </>
                                          ) : (
                                            <span className="tag sm:text-[22px] lg:h-[30px] xl:text-[11px] lg:text-[11px] font-medium">
                                              No interests.
                                            </span>
                                          )}
                                        </div>
                                        {/* to display state */}

                                        <div className="state truncate items-center">
                                          {data.state && (
                                            <span className="flex items-center sm:text-[22px] xl:text-[11px] lg:text-[11px] font-medium">
                                              <FaMapMarkerAlt className="inline-block mr-1" />
                                              {data.state.replace("Federal Territory of ", "").length > 9
                                                ? `${data.state.replace("Federal Territory of ", "").substring(0, 9)}...`
                                                : data.state.replace("Federal Territory of ", "")}
                                            </span>
                                          )}
                                        </div>


                                        {/* to display state and country */}

                                        {/* <div>
                                          {results.state && results.country && (
                                            <span className="sm:text-[22px] xl:text-[11px] lg:text-[11px] font-medium">
                                              <FaMapMarkerAlt className="inline-block mr-1" />
                                              {results.state.length > 9
                                                ? `${results.state.substring(0, 9)}...`
                                                : results.state}, {results.country}
                                            </span>
                                          )}
                                        </div> */}

                                      </div>

                                      <div className="block sm:h-[35px] lg:h-[15px] sm:mt-4 lg:mt-2 justify-between flex">
                                        <div className='justify-center'>
                                          <button className='cursor-pointer flex items-center gap-2 justify-center'>
                                            <BsFillBookmarkFill
                                              className="text-[#00A19A] lg:h-[15px] lg:w-[15px] md:h-[22px] md:w-[22px] common-pointer" />
                                            <text className='sm:text-[22px] xl:text-[11px] lg:text-[11px] text-[#00A19A]'>
                                              {data.savedCount} saves</text>
                                          </button>
                                        </div>
                                        <text className="sm:text-[22px] xl:text-[11px] lg:text-[11px] italic text-[#00A19A]">
                                          {data.username}
                                        </text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            ))}
                        </>
                      )}
                    </>
                  )}
                  {/* </div> */}
                </div>
              </div>
            </>
          ) : null}
        </div>

        {/* blog display */}
        <div className='w-full mt-5 mb-5'>  {/* xs:hidden lg:flex invisible lg:visible */}
          {isBlog ? (
            <>
              <div className='flex items-center gap-2'>
                <p className='font-bold text-gray-700 sm:text-[35px] lg:text-[14px] m-2'>Travel Blog</p>
                <div className='sm:block lg:hidden items-center mb-3'
                  onClick={() => setshowModalBlog(true)}>
                  <button class=" bg-[#00A19A] border-grey-light px-8 py-3 rounded-full flex items-center justify-center">
                    <BsPlus className="w-12 h-12 text-white" />
                    <text className='text-[30px] mr-3 font-medium text-white'>Add new</text>
                  </button>
                </div>
              </div>

              <div className="">
                <div className='sm:p-2 lg:p-0 lg:grid lg:grid-cols-3 xl:grid-cols-3 md:gap-[30px] lg:gap-9 sm:flex sm:flex-nowrap sm:overflow-x-scroll sm:scroll sm:scroll-smooth scrollbar-hide lg:shrink-0' >

                  <div className='sm:hidden xl:block 2xl:block my-3'>
                    <div className='bg-white sm:w-auto sm:h-[850px] lg:w-auto xl:h-[480px] 2xl:h-[460px] cursor-pointer border flex flex-col items-center justify-center shadow-lg sm:rounded-2xl lg:rounded-lg'
                      onClick={() => setshowModalBlog(true)}>
                      <GrAddCircle size={25} className="items-center text-center lg:h-[22px] lg:w-[22px] md:h-[38px] md:w-[38px]" />
                      <p className='font-bold sm:text-[28px] lg:text-[14px]'>Create Your Blog</p>
                    </div>
                  </div>

                  {showModalBlog ? (
                    <>
                      <div className="fixed bg-gray-50 xs:top-40 lg:top-20 rounded-3xl cursor-pointer text-center justify-center shadow-3xl items-center lg:mx-[400px] lg:my-[20px] flex-nowrap overflow-x-hidden overflow-y-auto scrollbar-hide inset-0 z-50 outline-none focus:outline-none" >
                        {/*Content*/}

                        <Column className="sm:w-[100%] sm:h-[100%] lg:w-[100%] lg:h-fit">
                          <Row className="text-end items-end justify-end">
                            <FaTimes
                              className="mr-4 mt-6 sm:h-10 sm:w-10 lg:h-5 lg:w-5 text-black common-pointer"
                              onClick={() => setshowModalBlog(false)}
                            />
                          </Row>
                          <Row className="w-[100%] items-start justify-start ">
                            <Text className="text-start py-[70px] pl-[130px] sm:text-[37px] lg:text-xl text-black font-light">
                              Create Your Blog
                            </Text>
                          </Row>
                          <p className="py-1 px-4 text-center">
                            <button
                              className="sm:w-[600px] lg:w-[300px] hover:bg-[#4eb6b1f8] inline-flex gap-1 items-center justify-between sm:text-[28px] lg:text-xs border border-[#00A19A] bg-[#00A19A] text-white rounded-lg px-3 py-3"
                              onClick={() => {
                                handleNavigate1();
                                setshowModalBlog(false);
                              }}

                            >
                              <div>Generate with AI</div>
                              <div className="items-end justify-between text-end ">
                                <AiOutlineDoubleRight className="sm:w-10 sm:h-10 lg:w-5 lg:h-5" />
                              </div>
                            </button>
                          </p>
                          <p className="px-4 text-center py-1">
                            <button
                              className="sm:w-[600px] lg:w-[300px] hover:bg-[#4eb6b1f8] inline-flex gap-1 items-center justify-between sm:text-[28px] lg:text-xs border border-[#00A19A] bg-[#00A19A] text-white rounded-lg px-3 py-3"
                              onClick={() => {
                                handleNavigate2();
                                setshowModalItinerary(false);
                              }
                              }
                            >
                              <span>Create your own</span>
                              <AiOutlineDoubleRight className="sm:w-10 sm:h-10 lg:w-5 lg:h-5" />
                            </button>
                          </p>
                        </Column>
                      </div>

                      <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}

                  {blogContent.length === 0 ? (
                    <>
                      {/* <div className='h-[470px] bg-gray-100 rounded-lg shadow-xs'></div>
                      <div className='h-[470px] bg-gray-100 rounded-lg shadow-xs'></div> */}
                    </>
                  ) : (
                    blogContent
                      // .filter((blog) => blog.status === "PUBLISHED")
                      .map(blog => (
                        <div key={blog.blogId} className='inline-block my-3'>
                          {/* hover:scale-105 duration-300 */}
                          <div className='common-pointer xl:h-[480px] xl:w-fit 2xl:h-[460px] 2xl:w-fit sm:h-[850px] sm:w-[750px] sm:rounded-2xl lg:rounded-lg shadow-lg '>
                            <div className="relative inline-block flex">
                              <img
                                // src={filteredFood.image ? filteredFood.image : 'images/no_pic.png'}
                                src={blog.blogImage ? blog.blogImage : 'https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/heroImage1/PowerfulReasons_hero.jpg'}
                                className='w-full sm:h-[350px] lg:h-[200px] lg:w-[700px] object-cover sm:rounded-t-2xl lg:rounded-t-lg'
                              />

                              {blog.blogPin === 'PIN' && (
                                <span className="absolute top-0 left-0 bg-teal-700 sm:w-[22%] sm:h-[15%] lg:w-[20%] lg:h-[12%] shadow-lg sm:rounded-tl-2xl sm:rounded-tr-3xl sm:rounded-br-3xl lg:rounded-tl-lg lg:rounded-tr-xl lg:rounded-br-xl cursor-pointer">
                                  <div className="flex flex-col justify-center items-center h-full">
                                    <span className="sm:text-[25px] lg:text-[12px] text-white">PINNED</span>
                                  </div>
                                </span>
                              )}

                              <button className="absolute top-0 right-2 cursor-pointer">
                                <ThreeDotBlog
                                  fetchBlog={fetchBlog}
                                  userId={userId}
                                  blogId={blog.blogId}
                                  blogPin={blog.blogPin}
                                  blogLink={baseURL + `/blog-display/${userId}/${blog.blogId}/${encodeURIComponent(blog.blogTitle)}`}
                                />
                              </button>
                            </div>

                            <div className='items-center justify-center sm:p-6 lg:p-3 '>
                              {/* <p className='text-center font-bold'>{blog.blog.match(/<h1>(.*?)<\/h1>/)?.[1] || 'Title not found'}</p> */}
                              <p className='text-center sm:text-[28px] lg:text-[14px] text-black font-bold sm:h-[100px] lg:h-[20%]'>{blog.blogTitle}
                              </p>
                              <p className='text-center sm:text-[22px] lg:text-[14px] opacity-70 sm:h-[35px] lg:h-[10%]'>{formatDate(blog.dateCreated)}</p>
                              {/* <p className='text-justify px-4'>{blog.blog.replace(/<h1[^>]*>.*?<\/h1>/i, "").replace(/<\/?[^>]+(>|$)/g, "").substring(0, 200)}...</p> */}
                              {/* <p className='text-justify sm:text-[28px] lg:text-[14px] sm:h-[230px] xl:h-[115px] 2xl:h-[100px]'>{blog.blogSummary}</p> */}
                              <p className="justify-center w-fit sm:text-[22px] lg:text-[15px] text-black" title={blog.blogSummary}>
                                {((blog.blogSummary || '').length > 200 ? (blog.blogSummary || '').substring(0, 200) + '...' : (blog.blogSummary || ''))}
                              </p>

                              <p className='text-right h-[10%]'>
                                <button className='bg-[#00A19A] justify-end items-center inline-flex font-medium text-white sm:text-[28px] lg:text-[14px] px-4 py-2.5 md:rounded-[20px] lg:rounded-lg '
                                  // className='inline-flex gap-1 items-center justify-center border border-[#00A19A] text-white rounded-lg bg-[#00A19A] sm:text-[28px] lg:text-[14px] sm:justify-end lg:justify-end lg:items-end lg:w-[50%] md:w-[35%] md:h-20 lg:h-fit text-white font-medium lg:px-4 lg:py-2.5 md:rounded-[20px] lg:rounded-lg'
                                  onClick={() => handleReadMore(blog.blogId, blog.blogTitle, userId)}>
                                  Read More
                                  <AiOutlineDoubleRight className="ml-1 sm:w-[30px] sm:h-[30px] lg:w-[15px] lg:h-[15px]" />
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                  )}
                </div>
              </div>

              {/* Blog pagination */}
              {totalPagesBlog > 1 && ( // Add this conditional check
                <div className="justify-center items-center mt-5">
                  <div className="flex flex-row m-2 font-poppins common-pointer justify-center items-center">
                    <Img
                      className={`h-[13px] w-[15px] ${currentPageBlog > 1 ? 'common-pointer' : 'hidden'}`}
                      src="images/img_arrowleftmp.svg"
                      alt="arrowleft"
                      onClick={() => handleArrowClick('left')}
                    />
                    {getPageButtonsRange().map((pageNumber) => (
                      pageNumber < totalPagesBlog ? (
                        <ButtonMp
                          key={pageNumber}
                          className={`shadow-lg flex h-[37px] w-[37px] common-pointer items-center justify-center ml-3 rounded-full text-center text-shadow-ts text-md tracking-[-0.30px]
                              ${currentPageBlog === pageNumber ? ' bg-cyan-700 text-white' : 'bg-white text-gray-700'}`}
                          size="txtPoppinsMedium20"
                          onClick={() => setCurrentPageBlog(pageNumber)}
                        >
                          {pageNumber}
                        </ButtonMp>
                      ) : null
                    ))}
                    {currentPageBlog < totalPagesBlog - 1 && (
                      <span className="text-gray-500 mx-2 font-bold">. . .</span>
                    )}
                    <ButtonMp
                      className={`shadow-lg flex h-[37px] w-[37px] common-pointer items-center justify-center rounded-full text-center text-shadow-ts text-md tracking-[-0.30px]
                              ${currentPageBlog === totalPagesBlog ? ' bg-cyan-700 text-white ml-3' : 'bg-white text-gray-700'}
                              ${currentPageBlog === totalPagesBlog - 1 ? ' ml-3' : ''}`}
                      size="txtPoppinsMedium20"
                      onClick={() => setCurrentPageBlog(totalPagesBlog)}
                    >
                      {totalPagesBlog}
                    </ButtonMp>
                    <Img
                      className={`h-[13px] w-[15px] ml-3 ${currentPageBlog < totalPagesBlog ? 'common-pointer' : 'hidden'}`}
                      src="images/img_arrowright_gray_700_01.svg"
                      alt="arrowright_One"
                      onClick={() => handleArrowClick('right')}
                    />
                  </div>
                </div>
              )}
            </>
          ) : null}
        </div>

        {/* gallery display */}
        <div>
          <div className="relative items-center">
            {isGallery ? (
              <>
                <p className="font-bold text-gray-700 m-2 lg:text-[14px] xs:text-[35px]">
                  Gallery
                </p>
                <button className="absolute cursor-pointer top-[45%] left-2 bg-black bg-opacity-30 rounded-full sm:w-11 sm:h-11 lg:w-6 lg:h-6 ">
                  <MdChevronLeft
                    className="text-white sm:w-11 sm:h-11 lg:w-6 lg:h-6"
                    onClick={slideLeftGallery}
                    size={40}
                  />
                </button>

                <div className="flex justify-center">
                  <div
                    id="slider2"
                    className="sm:w-[85%] sm:h-[420px] lg:w-[92%] lg:h-[200px] inline-flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
                  >
                    {contents
                      .filter((data) => data.category === "gallery")
                      .map((filteredFood) => (
                        <div
                          key={filteredFood.id}
                          className="inline-block p-5 flex-shrink-0 relative hover:scale-105 duration-300"
                          style={{ cursor: "default" }}
                        >
                          <div className="border sm:rounded-2xl lg:rounded-lg shadow-lg sm:h-[380px] sm:w-[550px] lg:h-[150px] lg:w-[240px]">
                            <a
                              // href={product.productLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="relative inline-block flex">
                                {/* <span className='absolute mt-3 ml-3 bg-black bg-opacity-70 p-2 text-white font-bold text-xs shadow-md'>{currencySymbols[product.productCurrency]} {product.productPrice}</span> */}
                                <img
                                  src={filteredFood.image}
                                  alt={filteredFood.name}
                                  className="sm:h-[380px] sm:w-[550px] lg:h-[150px] lg:w-[240px] inline-block cursor-pointer sm:rounded-2xl lg:rounded-lg object-cover"
                                />

                                {/* to display video */}
                                {filteredFood.video && (
                                  <video controls width="500">
                                    <source src={filteredFood.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                  </video>
                                )}


                              </div>
                            </a>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <button className="absolute cursor-pointer top-[45%] right-2 bg-black bg-opacity-30 rounded-full sm:w-11 sm:h-11 lg:w-6 lg:h-6">
                  <MdChevronRight
                    className="text-white sm:w-11 sm:h-11 lg:w-6 lg:h-6"
                    onClick={slideRightGallery}
                    size={40}
                  />
                </button>
              </>
            ) : null}
          </div>
        </div>

        {/* livestream display */}
        <div>
          <div className="relative items-center">
            {isLivestream ? (
              <>
                <p className="font-bold text-gray-700 m-2 lg:text-[14px] xs:text-[35px]">
                  Livestreams
                </p>
                <button className="absolute cursor-pointer top-[25%] left-2 bg-black bg-opacity-30 rounded-full sm:w-11 sm:h-11 lg:w-6 lg:h-6 ">
                  <MdChevronLeft
                    className="text-white sm:w-11 sm:h-11 lg:w-6 lg:h-6"
                    onClick={slideLeftLivestream}
                    size={40}
                  />
                </button>

                <div className="flex justify-center">
                  <div
                    id="slider3"
                    className="sm:w-[85%] sm:h-[800px] lg:w-[92%] lg:h-[380px] inline-flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
                  >
                    {contents
                      .filter((data) => data.category === "livestreams")
                      .map((filteredFood) => (
                        <div
                          key={filteredFood.id}
                          className="inline-block p-5 flex-shrink-0 relative hover:scale-105 duration-300"
                          style={{ cursor: "default" }}
                        >
                          <div className="border sm:rounded-2xl lg:rounded-lg shadow-lg sm:h-[380px] sm:w-[550px] lg:h-[150px] lg:w-[240px]">
                            <a
                              // href={product.productLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="relative inline-block flex">
                                {/* <span className='absolute mt-3 ml-3 bg-black bg-opacity-70 p-2 text-white font-bold text-xs shadow-md'>{currencySymbols[product.productCurrency]} {product.productPrice}</span> */}
                                <img
                                  src={filteredFood.image}
                                  alt={filteredFood.name}
                                  className="sm:h-[380px] sm:w-[550px] lg:h-[150px] lg:w-[240px] inline-block cursor-pointer sm:rounded-2xl lg:rounded-lg"
                                />
                              </div>
                            </a>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <button className="absolute cursor-pointer top-[25%] right-2 bg-black bg-opacity-30 rounded-full sm:w-11 sm:h-11 lg:w-6 lg:h-6">
                  <MdChevronRight
                    className="text-white sm:w-11 sm:h-11 lg:w-6 lg:h-6"
                    onClick={slideRightLivestream}
                    size={40}
                  />
                </button>
              </>
            ) : null}
          </div>
        </div>

      </div>
    </div>

  )
}

export default App;
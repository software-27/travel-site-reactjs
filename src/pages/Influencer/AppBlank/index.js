import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { data, fetchNewBlogData, fetchItineraryDetails, fetchItineraryDestination, fetchBlogData, fetchProductData, fetchTravelPlan } from 'data/data';
import { featuredData } from 'data/landing';
import { Column, Row } from "components";
import { MdSearch } from 'react-icons/md';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { IoPricetagSharp } from 'react-icons/io5';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { mdiBookmarkOutline } from '@mdi/js';
import { GrAddCircle } from 'react-icons/gr';
import { FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';
import Icon from '@mdi/react';
import axios from "axios";
import { BsCalendarCheck, BsFillBookmarkFill } from "react-icons/bs";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { RatingBar } from 'components/RatingBar/index';
import { Text } from 'components/index';
import { Img } from 'components/index';
import { ButtonMp } from 'components/index';
import TravelPlan from 'components/TravelPlan/index';
import { useDispatch } from 'react-redux';
import { fetchData } from 'redux/actions';
import ThreeDotTravelplan from 'components/ThreeDotTravelplan/index';

const AppBlank = ({ id }) => {
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
  // const userId = localStorage.getItem("tempUserId");
  const userId = id;

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

  const dispatch = useDispatch();

  //   Filter Type blog/photos/etc
  const filterType = (category) => {
    setContents(
      data.filter((filteredContent) => {
        return filteredContent.category === category;
      })
    );
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
      }
    } catch (error) {
      console.error('Error fetching travelplan:', error);
    }
  };

  const fetchAndRenderItineraryDetails = async (itineraryId) => {
    try {
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

      let itineraryDestination = data2;
      let destination = data2.itineraryDestination.destination;

      console.log("itineraryDetailsPC: ", itineraryDetails);
      console.log("userItineraryActivityPC: ", userItineraryActivity);
      console.log("itineraryIdPC: ", travelPlanId);
      console.log("Title: ", title);

      navigate('/obc', { state: { title, itineraryDestination, destination, day, itineraryDetails, userItineraryActivity, travelPlanId } });
      // console.log('Combined Data:', combinedData);
    } catch (error) {
      console.error('Error fetching itinerary details:', error);
    }
  };

  useEffect(() => {
    // fetchProduct();
    fetchTravel();
  }, []);

  const handleTravelPlanClick = (creatorId, itineraryId, title) => {
    const encodedTitle = encodeURIComponent(title);
    navigate(`/itinerary-save/${creatorId}/${itineraryId}/` + encodedTitle);
  };

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

  //Blog
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
  function handleNavigate1() {
    navigate("/blog-title");
  }

  function handleNavigate2() {
    navigate("/tour-marketplace");
  }


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
          <div className='bg-gray-200 justify-between rounded-full inline-flex items-center h-fit py-1 px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <input class='bg-transparent p-1 w-full focus:outline-none border-none'
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
                <div id='slider'
                  className='sm:w-[85%] sm:h-[800px] lg:w-[92%] lg:h-[380px] inline-flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                >
                  {productContent.length === 0 ? (
                    <>

                    </>
                  ) : (
                    productContent.map((product) => (
                      <div key={product.productId} className="inline-block p-5 flex-shrink-0 relative hover:scale-105 duration-300" style={{ cursor: 'default' }}>
                        <div className='border sm:rounded-2xl lg:rounded-lg shadow-lg sm:h-[700px] sm:w-[550px] lg:h-[340px] lg:w-[240px]'>
                          <a href={product.productLink} target="_blank" rel="noopener noreferrer">
                            <div className="relative inline-block flex">
                              {/* <span className='absolute mt-3 ml-3 bg-black bg-opacity-70 p-2 text-white font-bold text-xs shadow-md'>{currencySymbols[product.productCurrency]} {product.productPrice}</span> */}
                              <img
                                className='sm:h-[350px] sm:w-[550px] lg:h-[200px] lg:w-[240px] inline-block cursor-pointer sm:rounded-t-2xl lg:rounded-t-lg'
                                // src={product.productImage != null ? product.productImage : 'images/no_img_avail.jpg'}
                                src={product.productImage != null ? (product.productImage.startsWith('images/') ? '/' + product.productImage : product.productImage) : 'images/no_img_avail.jpg'}
                                alt={product.productName}
                                // title={product.productId}
                                title='Click to view product'
                              />
                              {product.productPin === 'PIN' && (
                                <span className="absolute top-0 left-0 bg-teal-700 sm:w-[32%] sm:h-[15%] lg:w-[30%] lg:h-[10%] shadow-lg sm:rounded-tl-2xl sm:rounded-tr-3xl sm:rounded-br-3xl lg:rounded-tl-lg lg:rounded-tr-xl lg:rounded-br-xl cursor-pointer">
                                  {/* <Text className="pl-2 text-xs text-white">PINNED</Text> */}
                                  <div className="flex flex-col justify-center items-center h-full">
                                    <span className="sm:text-[25px] lg:text-[12px] text-white">PINNED</span>
                                  </div>
                                </span>
                              )}
                            </div>
                          </a>
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
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* <button
                className="absolute cursor-pointer top-[40%] right-2 bg-black bg-opacity-30 rounded-full w-6 h-6"
                disabled={currentPageProd >= totalPagesProd}
              >
                <MdChevronRight
                  // className='text-white w-6 h-6'
                  className={`text-white w-6 h-6 ${currentPageProd >= totalPagesProd ? 'opacity-50 cursor-not-allowed' : '' // Apply opacity when disabled
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
              {/* )} */}

            </>
          ) : null}
        </div>

        {/* Itinerary display */}
        <div>
          {isTravelplan ? (
            <>
              <p className="font-bold text-gray-700 m-2 sm:text-[35px] lg:text-[14px]">Travel Plan</p>
              <div className='md:flex md:flex-nowrap md:overflow-x-scroll md:scroll md:scroll-smooth scrollbar-hide lg:shrink-0'>
                <div className="p-2 lg:grid lg:grid-cols-4 xl:grid-cols-4 md:gap-[30px] lg:gap-9">
                  {travelPlan
                    .filter((data) => data.itineraryStatus === "PUBLISHED")
                    .map((data, index) => (
                      // hover:scale-105 duration-300 
                      <div key={index} className='inline-block my-3' style={{ cursor: 'default' }}>
                        <div className='bg-white border sm:rounded-2xl lg:rounded-lg shadow-lg sm:h-[700px] sm:w-[550px] lg:h-[360px] 2xl:h-[420px] xl:w-fit 2xl:w-fit'>
                          <div className="relative inline-block flex">
                            <img
                              src={`https://halaltravel.ai/hv/api/chatgpt/user/itinerary/coverimage/${data.itineraryImage}`}
                              alt={data.alt}
                              className="sm:h-[350px] sm:w-[550px] lg:h-[200px] 2xl:h-[220px] w-full inline-block sm:rounded-t-2xl lg:rounded-t-lg"
                            />
                            <button className="absolute top-0 right-2 cursor-pointer">
                              {/* <ThreeDotTravelplan
                              /> */}
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
                </div>
              </div>
            </>
          ) : null}
        </div>

        {/* blog display */}
        <div className='w-full mt-5 mb-5'>
          {isBlog ? (
            <>
              <p className='font-bold text-gray-700 sm:text-[35px] lg:text-[14px] m-2'>Travel
                Blog</p>
              <div className="md:flex md:flex-nowrap md:overflow-x-scroll md:scroll md:scroll-smooth scrollbar-hide">
                <div className='p-2 lg:grid lg:grid-cols-3 xl:grid-cols-3 md:gap-[30px] lg:gap-9'>

                  {blogContent.length === 0 ? (
                    <>
                      <div className='h-[470px] bg-gray-100 rounded-lg shadow-xs'></div>
                      <div className='h-[470px] bg-gray-100 rounded-lg shadow-xs'></div>
                    </>
                  ) : (
                    blogContent.map(blog => (
                      <div key={blog.blogId} className='inline-block my-3'>
                        {/* hover:scale-105 duration-300 */}
                        <div className='common-pointer xl:h-[480px] xl:w-fit 2xl:h-[460px] 2xl:w-fit sm:h-[850px] sm:w-[750px] sm:rounded-2xl lg:rounded-lg shadow-lg '>
                          <div className="relative inline-block flex">
                            <img
                              // src={filteredFood.image ? filteredFood.image : 'images/no_pic.png'}
                              src={blog.blogImage ? blog.blogImage : 'https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/heroImage1/PowerfulReasons_hero.jpg'}
                              className='w-full sm:h-[350px] lg:h-[200px] object-cover sm:rounded-t-2xl lg:rounded-t-lg'
                            />
                          </div>

                          <div className='items-center justify-center sm:p-6 lg:p-3 '>
                            {/* <p className='text-center font-bold'>{blog.blog.match(/<h1>(.*?)<\/h1>/)?.[1] || 'Title not found'}</p> */}
                            <p className='text-center sm:text-[28px] lg:text-[14px] text-black font-bold sm:h-[100px] lg:h-[20%]'>{blog.blogTitle}
                            </p>
                            <p className='text-center sm:text-[22px] lg:text-[14px] opacity-70 sm:h-[35px] lg:h-[10%]'>{formatDate(blog.dateCreated)}</p>
                            {/* <p className='text-justify px-4'>{blog.blog.replace(/<h1[^>]*>.*?<\/h1>/i, "").replace(/<\/?[^>]+(>|$)/g, "").substring(0, 200)}...</p> */}
                            {/* <p className='text-justify sm:text-[28px] lg:text-[14px] sm:h-[230px] xl:h-[115px] 2xl:h-[100px]'>{blog.blogText.substring(0, 200)}...</p> */}
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
                      src="/images/img_arrowleftmp.svg"
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
                      src="/images/img_arrowright_gray_700_01.svg"
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

export default AppBlank;
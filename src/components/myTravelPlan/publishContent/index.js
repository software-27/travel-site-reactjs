import React, { useState, useEffect } from "react";
import { Row, Text, Button, Img, ButtonMp } from "components";
import { mdiBookmark, mdiDotsHorizontal, mdiCircleSmall } from "@mdi/js";
import Icon from "@mdi/react";
import ThreeDotSave from "components/ThreeDotSave/index";
import ThreeDotPublish from "components/ThreeDotPublish/index";
import { data, fetchTravelPlan, fetchItineraryDetails, fetchItineraryDestination } from "data/data";
import { useNavigate } from "react-router";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { FaMapMarkerAlt } from "react-icons/fa";
import "./LoadingSpinner2.css";
import axios from 'axios';

const PublishContent = () => {

  const navigate = useNavigate();
  const [nav3, setNav3] = useState(false);
  const [travelPlan, setTravelPlan] = useState([]);
  const token = localStorage.getItem("token");
  const tokenType = localStorage.getItem("tokenType");
  const userId = localStorage.getItem("userId");
  const [isPlan, setIsPlan] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [isLoadingg, setIsLoadingg] = useState(true);
  const baseURL = window.location.origin;
  console.log("baseUrl: ", baseURL)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'auto' for instant scrolling
    });
  };

  const [loadingTextIndex, setLoadingTextIndex] = useState(0);
  const loadingTexts = [
    "Hold tight as our system assembles your travel plan...",
    "Relax while we organize your travel plan...",
    "Grabbing the travel routes for your journey...",
    "Fine-tuning your travel plan to make it even better...",
    "Ready to unveil a carefully curated travel plan just for you...",
    "Hang tight, while we ensuring your travel itinerary unfolds flawlessly...",
    // Add more loading texts as needed
  ];
  useEffect(() => {
    // Simulate asynchronous actions with delays
    const fetchData = async () => {
      try {
        for (let i = 0; i < loadingTexts.length; i++) {
          setLoadingTextIndex(i);
          await simulateAsyncAction(); // Replace this with your actual asynchronous action
        }

        // All steps completed successfully
        setIsLoadingg(false);
      } catch (error) {
        console.error('Error during loading:', error);
        setIsLoadingg(true);
      }
    };

    fetchData();
  }, []);

  const simulateAsyncAction = () => {
    return new Promise(resolve => {
      setTimeout(resolve, 6000); // Simulate a delay (replace with your actual async action)
    });
  };

  const showAlertMessage = (type) => {
    setAlertType(type);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  //pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [numberOfElements, setNumberOfElements] = useState(0);
  const [number, setNumber] = useState(0);
  const [last, setLast] = useState("");
  const [itineraryStatus, setItineraryStatus] = useState("");
  const isLastPage = last;
  const currentTotal = isLastPage
    ? totalElements
    : numberOfElements * (number + 1);

  const handleArrowClick = (direction) => {
    if (direction === "left" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "right" && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const getPageButtonsRange = () => {
    const buttonsRange = [];
    const startPage = Math.max(currentPage - 1, 0);
    const endPage = Math.min(currentPage + 1, totalPages - 1);

    for (let i = startPage; i <= endPage; i++) {
      buttonsRange.push(i);
    }

    return buttonsRange;
  };

  const fetchTravelPlan = async () => {
    try {
      const response = await axios.get(`https://halaltravel.ai/hv/api/chatgpt/user/itinerary/listcover/PUBLISHED/${userId}/${currentPage}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });

      console.log("API Response publish:", response.data);
      console.log("itinerary status", itineraryStatus);
      console.log("current page", currentPage);

      if (response.data) {
        const travelPlan = response.data.content.map((element) => ({
          itineraryId: element.id,
          itineraryTitle: element.title,
          itineraryDescription: element.description,
          itineraryImage: element.coverImage,
          dateCreated: element.createdDate,
          itineraryStatus: element.status,
          username: element.username,
          savedCount: element.savedCount,
          attractions: element.attractions,
          interests: element.interests,
          state: element.state,
          userId: element.userId,
        }));

        console.log("Travel Plan: ", travelPlan);
        scrollToTop();
        setTravelPlan(travelPlan);
        setTotalPages(response.data.totalPages);
        setNumber(response.data.number);
        setLast(response.data.last);
        setNumberOfElements(response.data.numberOfElements);
        setTotalElements(response.data.totalElements);
        setIsPlan(true);
        setIsLoadingg(false); // Set loading to false after data is fetched
        scrollToTop();
      } else {
        console.error('Error fetching travel plan: Response or elements is undefined');
      }
    } catch (error) {
      console.error('Error fetching travel plan:', error);
      setIsLoadingg(false); // Set loading to false in case of an error
    }
  };


  useEffect(() => {
    

    fetchTravelPlan();
  }, [userId, token, currentPage]);

  const fetchAndRenderItineraryDetails = async (itineraryId, userId) => {
    try {

      setIsLoadingg(true);
      scrollToTop();

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

      navigate('/obc', { state: { location, title, itineraryDestination, destination, day, itineraryDetails, userItineraryActivity, travelPlanId, userId } });
      setIsLoadingg(false);
    } catch (error) {
      console.error('Error fetching itinerary details:', error);
    }
  };
  
  const handleTravelPlanClick = (creatorId, itineraryId, title) => {
    const encodedTitle = encodeURIComponent(title);
    navigate(`/itinerary/${creatorId}/${itineraryId}/` + encodedTitle);
  };

  return (
    <>

      {showAlert && (
        <Alert severity={alertType}>
          <AlertTitle>{alertType === 'success' ? 'Restricted' : 'Error'}</AlertTitle>
          {alertType === 'success'
            ? 'Successfully added to your private page'
            : 'Oops something went wrong'}
        </Alert>
      )}
      <div>
        <Row className="lg:mb-0 md:mb-3 ">
          <text className="mt-10 md:text-[28px] lg:text-[14px] sm:pl-6 lg:pl-[60px] font-semibold">
            {currentTotal}
          </text>
          <text className="mt-10 md:text-[28px] lg:text-[14px] sm:pl-2 lg:pl-[5px]">
            of
          </text>
          <text className="mt-10 md:text-[28px] lg:text-[14px] sm:pl-2 lg:pl-[5px] font-semibold">
            {totalElements}
          </text>
          <text className="mt-10 md:text-[28px] lg:text-[14px] sm:pl-2 lg:pl-[5px] ">
            Travel Plans
          </text>
        </Row>
      </div>
      <div className="bg-[#F5F5F5] sm:p-5 lg:p-0 sm:px-5 lg:px-[55px] sm:py-5 lg:py-10 grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:gap-[30px] lg:gap-9">
        {isLoadingg ? (
          <>
            <div
              id="loading-container"
              className="loader-container3 md:block lg:hidden "
            >
              <div className="loader md:block lg:hidden"></div>
              <p className="loading-text md:block lg:hidden text-center ">{loadingTexts[loadingTextIndex]}</p>
            </div>
            <div
              id="loading-container"
              className="loader-container3 lg:block md:hidden"
            >
              <div className="loader lg:block md:hidden"></div>
              <p className="loading-text lg:block md:hidden text-center">{loadingTexts[loadingTextIndex]}</p>
            </div>
          </>
        ) : (
          <>
            {isPlan && (
              <>
                {travelPlan.map((data, index) => (
                    <div className="bg-white common-pointer md:w-full md:h-[630px] lg:w-full lg:h-[360px] 2xl:h-[420px] border shadow-lg rounded-lg hover:scale-105 duration-300">
                      <div className="relative" key={index}>
                        <button className="absolute right-1 cursor-pointer">
                        <ThreeDotPublish 
                        itineraryId={data.itineraryId} 
                        userId={userId} 
                        showAlertMessage={showAlertMessage}
                        fetchTravel={fetchTravelPlan}
                        itineraryLink={baseURL + `/itinerary/${data.userId}/${data.itineraryId}/${encodeURIComponent(data.itineraryTitle)}`}
                        />
                        </button>
                        <img
                          src={`https://halaltravel.ai/hv/api/chatgpt/user/itinerary/coverimage/${data.itineraryImage}`}
                          alt={data.alt}
                          className="w-full sm:h-[350px] lg:h-[200px] 2xl:h-[220px] object-cover sm:rounded-t-lg lg:rounded-t-lg"
                          title={data.itineraryId}
                        />

                      </div>
                      <div className="items-center sm:p-6 lg:p-3"
                      onClick={() => handleTravelPlanClick(data.userId, data.itineraryId, data.itineraryTitle)}>
                      <Row>
                          <p
                            className="ml-3 justify-center font-bold w-fit md:text-[28px] lg:text-[14px] lg:block md:hidden"
                            title={data.itineraryTitle}
                          >
                            {data.itineraryTitle.length > 28
                              ? `${data.itineraryTitle.substring(0, 30)}...`
                              : data.itineraryTitle}
                            {/* Private Tour Kuala Lumpur */}
                            {/* {filteredFood.name.length > 20 ? filteredFood.name.substring(0, 20) + '...' : filteredFood.name} */}
                          </p>
                          <p
                            className="ml-3 justify-center font-bold w-fit md:text-[28px] lg:text-[14px] lg:hidden md:block"
                            title={data.itineraryTitle}
                          >
                            {data.itineraryTitle.length > 23
                              ? `${data.itineraryTitle.substring(0, 23)}...`
                              : data.itineraryTitle}
                            {/* Private Tour Kuala Lumpur */}
                            {/* {filteredFood.name.length > 20 ? filteredFood.name.substring(0, 20) + '...' : filteredFood.name} */}
                          </p>
                        </Row>
                        <p
                          className="ml-3 mt-1 w-fit md:text-[25px] lg:text-[12px] lg:h-[40px] 2xl:h-[75px] md:h-[20px] lg:block md:hidden"
                        //   title={filteredFood.desc}
                        >
                          {data.itineraryDescription.length > 65
                            ? `${data.itineraryDescription.substring(0, 65)}...`
                            : data.itineraryDescription}
                          {/* Get a bird’s-eye view over Kuala Lumpur */}
                          {/* {filteredFood.desc.length > 40 ? filteredFood.desc.substring(0, 40) + '...' : filteredFood.desc} */}
                        </p>
                        <p
                          className="ml-3 mt-1 w-fit md:text-[23px] lg:text-[12px] lg:h-[40px] md:h-[70px] lg:hidden md:block"
                        //   title={filteredFood.desc}
                        >
                          {data.itineraryDescription.length > 58
                            ? `${data.itineraryDescription.substring(0, 58)}...`
                            : data.itineraryDescription}
                          {/* Get a bird’s-eye view over Kuala Lumpur */}
                          {/* {filteredFood.desc.length > 40 ? filteredFood.desc.substring(0, 40) + '...' : filteredFood.desc} */}
                        </p>


                        {/* <div className="ml-3 mt-3">
                <Row>
                <text className=" text-[12px] mt-0.5 ">
                    Adventure
                  </text>
                  <Icon
                    path={mdiCircleSmall } 
                    size={1}
                    className=" w-fit h-fit"
                  />
                  <text className=" text-[12px] mt-0.5 ">
                    History
                  </text>
                </Row>
            
            </div> */}
                        {/* interest/ attraction */}
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
                        <div className="flex justify-between mx-3 items-center lg:h-[30px] sm:h-[20px] md:mt-4 lg:mt-0 font-bold">
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

                        <div className="justify-between ml-2 mr-3 lg:mt-[0px] md:mt-[25px] flex lg:mb-0 md:mb-1">
                          <div className="">
                            {/* total saved */}
                            <Row>
                              <Icon
                                path={mdiBookmark}
                                size={1}
                                className="text-[#00A19A]  w-fit h-fit lg:mt-0 md:mt-2"
                              />
                              <text className="  text-[#00A19A] lg:text-[12px] font-semibold md:text-[24px] mt-0.5">
                                {data.savedCount} Saves
                              </text>
                            </Row>
                          </div>

                          <div className="">
                            {/* Render if username is not null */}
                            {data.username !== null && (
                              <>
                                <text
                                  username={data.username}
                                  className="lg:text-[12px] md:text-[24px] italic text-[#000000] lg:block md:hidden"
                                >
                                  {data.username.length > 20
                                    ? data.username.substring(0, 20) + "..." // Display first 20 characters and add ellipsis
                                    : data.username}
                                </text>
                                <text
                                  username={data.username}
                                  className="lg:text-[12px] md:text-[24px] italic text-[#000000] md:block lg:hidden"
                                >
                                  {data.username.length > 18
                                    ? data.username.substring(0, 18) + "..." // Display first 20 characters and add ellipsis
                                    : data.username}
                                </text>
                              </>
                            )}
                            {/* Render a space character if username is null */}
                            {data.username === null && (
                              <>
                                <text
                                  username={data.username}
                                  className="lg:text-[12px] md:text-[24px] italic text-[#000000] lg:block md:hidden"
                                >
                                  {' '}
                                </text>
                                <text
                                  username={data.username}
                                  className="lg:text-[12px] md:text-[24px] italic text-[#000000] md:block lg:hidden"
                                >
                                  {' '}
                                </text>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </>
        )}
      </div>
      {isLoadingg ? null : (
        <>
          <Row className="justify-end w-[100%]">
            <text className="mt-6 md:text-[28px] lg:text-[14px] sm:pl-2 lg:pl-[5px]">
              Page
            </text>
            <text className="mt-6 md:text-[28px] lg:text-[14px] sm:pl-2 lg:pl-[5px]">
              {currentPage + 1}
            </text>
            <text className="mt-6 md:text-[28px] lg:text-[14px] sm:pl-2 lg:pl-[5px]">
              of
            </text>
            <text className="mt-6 md:text-[28px] lg:text-[14px] sm:pl-2 lg:pl-[5px] sm:pr-6 lg:pr-[60px] ">
              {totalPages}
            </text>
          </Row>

          <div className=" lg:mb-[100px] md:mb-[230px] md:hidden lg:block flex flex-row font-poppins items-start common-pointer justify-center ml-[0px] mt-[46px] w-[100%] h-[fit]">
            <Img
              className={`lg:mr-2 md:mr-6 lg:h-[13px] md:h-[35px] lg:mt-[20px] md:mt-[46px] lg:w-[15px] md:w-[35px]${
                currentPage > 0 ? "common-pointer" : "hidden"
              }`}
              src="https://vm.epictravel.ai/images/img_arrowleftmp.svg"
              onClick={() => handleArrowClick("left")}
            />
            {getPageButtonsRange().map((pageNumber) => (
              <ButtonMp
                key={pageNumber}
                className={` shadow-lg flex lg:h-[50px] lg:w-[50px] md:h-[120px] md:w-[120px] common-pointer items-center justify-center ml-5 rounded-full text-center text-shadow-ts lg:text-[16px] md:text-[35px] tracking-[-0.30px] 
                              ${
                                currentPage === pageNumber
                                  ? " bg-cyan-700 text-white"
                                  : "bg-white text-gray-700"
                              }`}
                size="txtPoppinsMedium20"
                onClick={() => setCurrentPage(pageNumber)}
              >
                {pageNumber + 1}
              </ButtonMp>
            ))}
            <Img
              className={` lg:ml-7 md:ml-11 lg:h-[13px] md:h-[35px] lg:mt-[20px] md:mt-[46px] lg:w-[15px] md:w-[35px]${
                currentPage < totalPages ? "common-pointer" : "hidden"
              }`}
              src="https://vm.epictravel.ai/images/img_arrowright_gray_700_01.svg"
              alt="arrowright_One"
              onClick={() => handleArrowClick("right")}
            />
          </div>
        </>
      )}
    </>
  );
};

export default PublishContent;

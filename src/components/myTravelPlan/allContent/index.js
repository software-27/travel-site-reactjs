import React, { useState, useEffect } from "react";
import { Row, Text, Button, Img } from "components";
import { mdiBookmark, mdiBookmarkOutline, mdiDotsHorizontal, mdiCircleSmall } from "@mdi/js";
import Icon from "@mdi/react";
import ThreeDotAll from "components/ThreeDotAll/index";
import { featuredData } from "./data";
import { data, fetchTravelPlan, fetchItineraryDetails, fetchItineraryDestination } from "data/data";
import { useNavigate } from "react-router";

const AllContent = () => {

  const navigate = useNavigate();
  const [nav3, setNav3] = useState(false);
  const [travelPlan, setTravelPlan] = useState([]);
  const token = localStorage.getItem("token");
  const tokenType = localStorage.getItem("tokenType");
  const userId = localStorage.getItem("userId");
  const [isPlan, setIsPlan] = useState(false);

  // // fetch travel plan
  const fetchTravel = async () => {

    try {
      const data = await fetchTravelPlan(userId);
      if (data) {
        setTravelPlan(data.travelPlan);
        setIsPlan(true);
      }
    } catch (error) {
      console.error('Error fetching travelplan:', error);
    }
  };

  useEffect(() => {
    fetchTravel();
  }, []);

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
      let location = data.itineraryDetails.location;

      let itineraryDestination = data2;
      let destination = data2.itineraryDestination.destination;

      console.log("itineraryDetailsPC: ", itineraryDetails);
      console.log("userItineraryActivityPC: ", userItineraryActivity);
      console.log("itineraryIdPC: ", travelPlanId);
      console.log("Title: ", title);

      navigate('/obc', { state: {location, title, itineraryDestination, destination, day, itineraryDetails, userItineraryActivity, travelPlanId } });
      // console.log('Combined Data:', combinedData);
    } catch (error) {
      console.error('Error fetching itinerary details:', error);
    }
  };


  return (
    <>

      <div className="bbg-[#F5F5F5]  sm:p-5 lg:p-0 sm:px-5 lg:px-[55px] sm:py-5 lg:py-10 grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:gap-[30px] lg:gap-9">
        {isPlan ? (
          <>
            {travelPlan.map((data, index) => (
              <div className="bg-white common-pointer md:w-full md:h-[630px] lg:w-full lg:h-[360px] 2xl:h-[420px] border shadow-lg rounded-lg hover:scale-105 duration-300">
                <div className="relative" key={index}>
                  <button className="absolute right-1 cursor-pointer">
                    <ThreeDotAll title={data.itineraryTitle} days={data.days} attractions={data.attractions} interests={data.interests}
                      itineraryId={data.itineraryId}
                      userId={userId} fetchTravel={fetchTravel}
                    />
                  </button>
                  <img
                    src={`https://halaltravel.ai/hv/api/chatgpt/user/itinerary/coverimage/${data.itineraryImage}`}
                    alt={data.alt}
                    className="w-full sm:h-[350px] lg:h-[200px] 2xl:h-[220px] object-cover sm:rounded-t-lg lg:rounded-t-lg"
                  />
                </div>

                <div
                  className=" items-center sm:p-6 lg:p-3"
                  onClick={() =>
                    fetchAndRenderItineraryDetails(data.itineraryId)
                  }
                >
                  <Row>
                    <p
                      className="ml-3 justify-center font-bold w-fit md:text-[28px] lg:text-[14px]"
                    //   title={filteredFood.name}
                    >
                      {data.itineraryTitle.length > 33
                        ? `${data.itineraryTitle.substring(0, 33)}...`
                        : data.itineraryTitle}
                      {/* Private Tour Kuala Lumpur */}
                      {/* {filteredFood.name.length > 20 ? filteredFood.name.substring(0, 20) + '...' : filteredFood.name} */}
                    </p>
                  </Row>
                  <p
                    className="ml-3 mt-1 w-fit md:text-[25px] lg:text-[12px] h-[40px]"
                  //   title={filteredFood.desc}
                  >
                    {data.itineraryDescription.length > 80
                      ? `${data.itineraryDescription.substring(0, 80)}...`
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

                  <div className="tags lg:h-[38px] sm:h-[20px] ml-3 md:mt-4 lg:mt-0 font-bold">
                    {data.interests.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="tag sm:text-[22px] xl:text-[11px] lg:text-[11px] font-medium"
                      >
                        {tagIndex > 0 && (
                          <span className="dot lg:text-[15px] md:text-[20px] mx-2 font-medium">
                            •
                          </span>
                        )}
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="justify-between ml-2 mr-3 lg:mt-[35px] md:mt-[25px] flex lg:mb-0 md:mb-1">
                    <div className="">
                      <Row>
                        <Icon
                          path={mdiBookmark}
                          size={1}
                          className="text-[#00A19A]  w-fit h-fit lg:mt-0 md:mt-2"
                        />
                        <text className=" text-[#00A19A] lg:text-[12px] font-semibold md:text-[24px] mt-0.5">
                          {data.savedCount} Saves
                        </text>
                      </Row>
                    </div>
                    <div className="">
                      {" "}
                      <text className=" lg:text-[12px] md:text-[24px]  italic text-[#000000]">
                        {data.username}
                      </text>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
};

export default AllContent;

import React from "react";

import { Column, Row, Text, Input, Img, Line, Stack, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PhotosPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/hs1");
  }
  function handleNavigate2() {
    navigate("/hs2");
  }
  function handleNavigate3() {
    navigate("/hs3");
  }
  function handleNavigate4() {
    navigate("/hs4");
  }
  function handleNavigate5() {
    navigate("/hs5");
  }
  function handleNavigate6() {
    navigate("/hs6");
  }
  function handleNavigate7() {
    navigate("/hs7");
  }
  function handleNavigate20(){
    navigate("/hs6")
  }
  return (
    <>
      <Header></Header>
     <Column className="bg-gray_100 scroll-smooth w-[100%] pb-10 h-fit justify-start items-center">
        <Column className="items-center justify-center w-[100%] mb-6">
            <Row className="gap-0.5 h-[60px] w-[80%] justify-evenly">
                <Column className="font-sans bg-gray_100 w-[15%] justify-end items-center">
                    <Text onClick={handleNavigate1} className="common-pointer text-gray_501" variant="body4" >Basic Info</Text>
                    <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
                </Column>
                <Column className="font-sans lg:text- bg-gray_100  w-[14%] justify-end items-center">
                    <Text onClick={handleNavigate2} className="common-pointer text-gray_501" variant="body4" >Layout & Pricing</Text>
                    <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
                </Column>
                <Column className="font-sans bg-gray_100 w-[15%] justify-end items-center"> 
                    <Text onClick={handleNavigate3} className="common-pointer text-gray_501" variant="body4" >Facilities & Services</Text>
                    <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
                </Column>
                <Column className="font-sans bg-gray_100  w-[15%] justify-end items-center">
                    <Text onClick={handleNavigate4} className="common-pointer text-gray_501" variant="body4" >Amenities</Text>
                    <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
                </Column>
                <Column className="font-sans bg-200_ce w-[15%] justify-end items-center"> 
                    <Text onClick={handleNavigate5} className="common-pointer text-gray_702" variant="body4" > Photos</Text>
                    <Line className="bg-gray_702 h-[4px] w-full mt-4"></Line>
                </Column>
                <Column className="font-sans bg-gray_100 w-[15%] justify-end items-center">
                    <Text onClick={handleNavigate6} className="common-pointer text-gray_501" variant="body4" > Policies</Text>
                    <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
                </Column>
                <Column className="font-sans bg-gray_100 w-[14%] justify-end items-center">
                    <Text onClick={handleNavigate7} className="common-pointer text-gray_501" variant="body4" > Payments</Text>
                    <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
                </Column>        
            </Row>
        </Column>
      
      <Column className="bg-gray_100 h-fit font-ptsans items-center justify-start mx-[auto] w-[100%]">
        <Column className="justify-start gap-2 w-[80%]">
          <Text className="font-bold mt-[6px] text-[26px]">
            Property photos
          </Text>
          <Text className="mb-[6px] text-[16px]">
            Great photos invite guests to get the full experience of your
            property, so upload some high-resolution photos that represent all
            your property has to offer. We will display these photos on your
            property's page on the Booking.com website.
          </Text>

          <Row className="w-[100%] h-fit">
            <Column className="justify-start rounded-radius4 shadow h-fit bg-white_A700 w-[76%]">
              <Text className="ml-[10px] mt-[14px]" variant="h6">
                Photo gallery
              </Text>
              <Column className="justify-center ml-[10px]">
                <div class="flex justify-center items-center w-[99%]">
                  <label
                    for="dropzone-file"
                    class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
                      <p class="text-[20px] text-black dark:text-gray-400">
                        Upload at least 1 photo
                      </p>
                      <p class="mb-2 text-[14px] text-black dark:text-gray-400">
                        You will also be able to upload more after registration
                      </p>
                      <p class="mb-2 text-[20px] text-black font-bold dark:text-gray-400">
                        Drag and drop your photos here
                      </p>
                      <p class="mb-2 text-[14px] text-gray-500 dark:text-gray-400">
                        or
                      </p>
                      <input
                        className="justify-center items-center ml-20"
                        id="dropzone-file"
                        type="file"
                      />
                    </div>
                  </label>
                </div>
              </Column>

              <Column className="mx-2 my-4 p-6 bg-[#fdf4d8]">
                <Text className="mb-4 font-semibold text-[20px]">
                  No professional photos? No problem.
                </Text>
                <Row>
                  <svg
                    aria-hidden="true"
                    fill="black"
                    height="26px"
                    width="25px"
                    className="font-bold"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>You can use:</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25px"
                      height="20px"
                      className="ml-2"
                      fill="currentColor"
                      class="bi bi-phone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />{" "}
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                  </span>
                  
                  <span className="ml-1">A smartphone</span>
                  <span className="ml-4"></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="22px"
                    fill="currentColor"
                    className="ml-6"
                    class="bi bi-camera-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />{" "}
                  </svg>
                  
                  <span className="ml-1">A digital camera</span>
                </Row>

                <Row>
                  <svg
                    aria-hidden="true"
                    fill="black"
                    className="font-bold"
                    height="26px"
                    width="25px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Top tip! Guests love photos! Here are some tips on taking
                    great photos of your property
                  </span>
                </Row>

                <Row>
                  <svg
                    aria-hidden="true"
                    fill="black"
                    height="30px"
                    width="30px"
                    className="font-bold"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    If you don’t know who took a photo, it's best to avoid using
                    it. Only use photos which you took or own the copyright to,
                    or photographer’s consent to use the photo.
                  </span>
                </Row>
              </Column>
            </Column>

            <Column className="justify-start rounded-radius4 shadow  ml-4 p-4 h-20 fixed right-40 top-50 bg-white_A700 w-[18%]">
              <Text className="font-regular text-[12px]">
                After you complete registration you will still be able to make
                changes to your listing before it goes live.
              </Text>
            </Column>
          </Row>

          <Button
            className="mt-4 font-bold bg-sky-700 hover:bg-indigo_901 text-center text-white_A700 w-[76%]"
            variant="OutlineLightblue8001_2"
            onClick={handleNavigate20}
          >
            Continue
          </Button>
        </Column>
      </Column>
    </Column>
    </>
  );
};

export default PhotosPage;

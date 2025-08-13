import React,{useState} from "react";

import {
  Column,
  Row,
  Text,
  Input,
  Button,
  Line,
} from "components";
import Header from "components/Header/Header";
import { SelectBoxAme1 } from "components/SelectBoxAme1";
import { SelectBoxAme2 } from "components/SelectBoxAme2";
import { useNavigate } from "react-router-dom";
import Accordion from "components/Accordion/Accordion";


const AmenitiesPage = () => {

  const [show, setShow] = useState();
  const [showhide, setShowhide] = useState("no");

  const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };  

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

  function handleNavigate20() {
    navigate("/hs5");
  }

  return (
    <>
      <Header></Header>
     
      
      <Column className="bg-gray_100 h-fit font-ptsans items-center justify-start mx-[auto] w-[100%]">
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
            <Column className="font-sans bg-gray_200_ce  w-[15%] justify-end items-center">
                <Text onClick={handleNavigate4} className="common-pointer text-gray_702" variant="body4" >Amenities</Text>
                <Line className="bg-gray_702 h-[4px] w-full mt-4"></Line>
            </Column>
            <Column className="font-sans bg-100 w-[15%] justify-end items-center"> 
                <Text onClick={handleNavigate5} className="common-pointer text-gray_501" variant="body4" > Photos</Text>
                <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
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
        <Column className="justify-start gap-6 w-[80%]">
          <Text className="font-bold pt-2 mt-[10px]" variant="h3">
            Amenities
          </Text>
          <Text className="mt-[2px] mb-[2px]" variant="body4">
            These are specific features and services available in each room
            type.
          </Text>

          <Row className="w-[100%] h-fit">
            <Column className="justify-start rounded-radius4 shadow h-fit bg-white_A700 w-[76%]">
              <Text className="m-[10px]" variant="h6">
                Extra bed options
              </Text>
              <Text className="mt-[10px] bg-gray_500 text-[13px] w-fit px-[6px] py-[4px] text-white_A700">
                These are the bed options that can be added upon request.
              </Text>
              <Text className="m-[10px] text-[16px]">
                Can you provide extra beds?
              </Text>

              <div className="row">
                <form className="row g-3">
                  <div className="col-md-12">
                    <Row className="flex space-x-4 m-[10px]">
                      <div className="text-black flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700 w-[16%] h-10">
                        <input
                          type="radio"
                          name="userdetail"
                          value="yes"
                          checked={showhide === "yes"}
                          class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          onClick={handleshow}
                        />
                        <label class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                          Yes
                        </label>
                      </div>
                      <div className="text-black flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700 w-[16%] h-10">
                        <input
                          type="radio"
                          name="userdetail"
                          value="no"
                          checked={showhide === "no"}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          onClick={handleshow}
                        />
                        <label class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                          No
                        </label>
                      </div>
                    </Row>
                  </div>

                  {showhide === "yes" && (
                    <Row>
                      <div className="w-[100%] ml-[10px]">
                        <Text className="text-[16px]">
                          Select the number of extra beds that can be added.
                        </Text>

                        <SelectBoxAme1 className="mt-[20px] w-[12%] outline outline-[0.3px] outline-gray_402 rounded border border-gray-200 dark:border-gray-700"></SelectBoxAme1>

                        <Row className="my-[16px]">
                          <Text className="text-[15px] font-bold">
                            Tick the box if you can accommodate the following
                            guests in extra beds.
                          </Text>
                        </Row>

                        <div class="mb-5">
                          <input
                            type="checkbox"
                            name="agree"
                            id="agree"
                            class="ml-[10px] peer form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          />
                          <label for="agree" className="text-[14px]">
                            Children up to 2 years old in cots
                          </label>
                          <div class="mt-2 hidden peer-checked:block">
                            <Column>
                              <Row id="pricePerChild">
                                <Text className="m-[10px] text-[14px]">
                                  Enter the price per night, per child
                                </Text>
                                <Button
                                  class="flex justify-center items-center w-[8%] h-[42px] bg-gray_400 border-y border-l border-gray_501 rounded-l "
                                  variant="OutlineBlack90026"
                                >
                                  MYR
                                </Button>
                                <Input
                                  id="number"
                                  className="font-normal justify-center items-center not-italic ml-1 text-[14px] placeholder:required text-slate_700 rounded-r w-[100%]"
                                  placeholder="0.00"
                                  variant="OutlineGray503"
                                  type="number"
                                  min="0.00"
                                />
                              </Row>
                            </Column>
                          </div>
                        </div>

                        <div class="mb-5">
                          <input
                            type="checkbox"
                            name="agree"
                            id="agree"
                            class="ml-[10px] peer form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          />
                          <label for="agree" className="text-[14px]">
                            Children
                          </label>
                          <div class="mt-2 hidden peer-checked:block">
                            <Column>
                              <Row
                                className="w-[100%] h-[42px]"
                                id="pricePerChild"
                              >
                                <SelectBoxAme2 className="ml-[10px] h-[38px] w-[22%] outline outline-[0.3px] outline-gray_402 rounded border border-gray-200 dark:border-gray-700"></SelectBoxAme2>

                                <Text className="m-[10px] text-[14px]">
                                  Enter the price per night, per child
                                </Text>
                                <Button
                                  class="flex justify-center items-center w-[8%] h-[42px] bg-gray_400 border-y border-l border-gray_501 rounded-l "
                                  variant="OutlineBlack90026"
                                >
                                  MYR
                                </Button>
                                <Input
                                  id="number"
                                  variant="OutlineGray503"
                                  className="font-normal justify-center items-center not-italic ml-1 text-[14px] placeholder:required text-slate_700 rounded-r w-[100%]"
                                  placeholder="0.00"
                                  type="number"
                                  min="0.00"
                                />
                              </Row>
                            </Column>
                          </div>
                        </div>

                        <div class="mb-5">
                          <input
                            type="checkbox"
                            name="agree"
                            id="agree"
                            class="ml-[10px] peer form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          />
                          <label for="agree" className="text-[14px]">
                            Adults
                          </label>
                          <div class="mt-2 hidden peer-checked:block">
                            <Column>
                              <Row
                                className="w-[100%] h-[42px] mb-5"
                                id="pricePerChild"
                              >
                                <Text className="m-[10px] text-[14px]">
                                  Enter the price per night, per adult
                                </Text>
                                <Button
                                  class="flex justify-center items-center w-[8%] h-[42px] bg-gray_400 border-y border-l border-gray_501 rounded-l "
                                  variant="OutlineBlack90026"
                                >
                                  MYR
                                </Button>
                                <Input
                                  id="number"
                                  className="font-normal justify-center items-center not-italic ml-1 text-[14px] placeholder:required text-slate_700 rounded-r w-[100%]"
                                  placeholder="0.00"
                                  variant="OutlineGray503"
                                  type="number"
                                  min="0.00"
                                />
                              </Row>
                            </Column>
                          </div>
                        </div>
                      </div>
                    </Row>
                  )}
                </form>
              </div>
            </Column>

            <Column className="justify-start rounded-radius4 shadow  ml-4 p-4 h-20 fixed right-40 top-50 bg-white_A700 w-[18%]">
              <Text className="font-regular text-[12px]">
                After you complete registration you will still be able to make
                changes to your listing before it goes live.
              </Text>
            </Column>
          </Row>

          <Column className="p-[20px] justify-start rounded-radius4 shadow mb-[10px] h-fit bg-white_A700 w-[76%]">
            <Text variant="h6">Amenities</Text>
            <Text className="text-[14px] mt-2 font-semibold">
              Tell us about your amenities
            </Text>

            <Column className="p-[20px] justify-start mt-2 border border-gray_300 mt-2 mb-[10px] h-fit bg-white_A700 w-[100%]">
              <Column className="mb-2">
                <Text className="text-[18px] mt-2 font-semibold">
                  Most requested by guests
                </Text>

                <Row className="form-check font-ptsans text-[14px] items-start m-[10px] rounded-radius4 w-[100%]">
                  <input
                    class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="Air conditioning"
                  />
                  <label for="Air conditioning" className="cursor-pointer">
                    Air conditioning
                  </label>
                </Row>

                <Row className="form-check font-ptsans text-[14px] items-start m-[10px] rounded-radius4 w-[100%]">
                  <input
                    class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="Bath1"
                  />
                  <label for="Bath1" className="cursor-pointer">
                    Bath
                  </label>
                </Row>

                <Row className="form-check font-ptsans text-[14px] items-start m-[10px] rounded-radius4 w-[100%]">
                  <input
                    class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="Spa bath1"
                  />
                  <label for="Spa bath1" className="cursor-pointer">
                    Spa bath
                  </label>
                </Row>

                <Row className="form-check font-ptsans text-[14px] items-start m-[10px] rounded-radius4 w-[100%]">
                  <input
                    class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="Flat-screen TV1"
                  />
                  <label for="Flat-screen TV1" className="cursor-pointer">
                    Flat-screen TV
                  </label>
                </Row>

                <Row className="form-check font-ptsans text-[14px] items-start m-[10px] rounded-radius4 w-[100%]">
                  <input
                    class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="Balcony1"
                  />
                  <label for="Balcony1" className="cursor-pointer">
                    Balcony
                  </label>
                </Row>

                <Row className="form-check font-ptsans text-[14px] items-start m-[10px] rounded-radius4 w-[100%]">
                  <input
                    class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="Electric kettle1"
                  />
                  <label for="Electric kettle1" className="cursor-pointer">
                    Electric kettle
                  </label>
                </Row>

                <Row className="form-check font-ptsans text-[14px] items-start m-[10px] rounded-radius4 w-[100%]">
                  <input
                    class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="View1"
                  />
                  <label for="View1" className="cursor-pointer">
                    View
                  </label>
                </Row>

                <Row className="form-check font-ptsans text-[14px] items-start m-[10px] rounded-radius4 w-[100%]">
                  <input
                    class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="Terrace1"
                  />
                  <label for="Terrace1" className="cursor-pointer">
                    Terrace
                  </label>
                </Row>
              </Column>
            </Column>

            <Button
              type="button"
              className="flex justify-center items-center mt-[10px] w-[18%] h-[42px] bg-gray_400 border border-gray_501 text-[14px]"
              onClick={() => setShow(!show)}
            >
              {show === true ? "⮟ Hide all amenities" : "⮞ Show all amenities"}
            </Button>

            {show && (
              <>
                <Text className="text-[18px] mt-6 mb-4 font-semibold">
                  All amenities by category
                </Text>

                <Accordion allowMultipleOpen>
                  <div label="Room amenities">
                    <div className="overflow-y-scroll h-[470px] form-check font-ptsans text-[14px] items-start border border-gray_300 w-[100%]">
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Clothes rack"
                        />
                        <label for="Clothes rack" className="cursor-pointer">
                          Clothes rack
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Drying rack for clothing"
                        />
                        <label
                          for="Drying rack for clothing"
                          className="cursor-pointer"
                        >
                          Drying rack for clothing
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Fold-up bed"
                        />
                        <label for="Fold-up bed" className="cursor-pointer">
                          Fold-up bed
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Sofa bed"
                        />
                        <label for="Sofa bed" className="cursor-pointer">
                          Sofa bed
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Air conditioning1"
                        />
                        <label
                          for="Air conditioning1"
                          className="cursor-pointer"
                        >
                          Air conditioning
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Wardrobe or closet"
                        />
                        <label
                          for="Wardrobe or closet"
                          className="cursor-pointer"
                        >
                          Wardrobe or closet
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Carpeted"
                        />
                        <label for="Carpeted" className="cursor-pointer">
                          Carpeted
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Dressing room"
                        />
                        <label for="Dressing room" className="cursor-pointer">
                          Dressing room
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Extra long beds (> 2 metres)"
                        />
                        <label
                          for="Extra long beds (> 2 metres)"
                          className="cursor-pointer"
                        >
                          Extra long beds (> 2 metres)
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Fan"
                        />
                        <label for="Fan" className="cursor-pointer">
                          Fan
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Fireplace"
                        />
                        <label for="Fireplace" className="cursor-pointer">
                          Fireplace
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Heating"
                        />
                        <label for="Heating" className="cursor-pointer">
                          Heating
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Interconnected room(s) available"
                        />
                        <label
                          for="Interconnected room(s) available"
                          className="cursor-pointer"
                        >
                          Interconnected room(s) available
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Iron"
                        />
                        <label for="Iron" className="cursor-pointer">
                          Iron
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Ironing facilities"
                        />
                        <label
                          for="Ironing facilities"
                          className="cursor-pointer"
                        >
                          Ironing facilities
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Mosquito net"
                        />
                        <label for="Mosquito net" className="cursor-pointer">
                          Mosquito net
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Private entrance"
                        />
                        <label
                          for="Private entrance"
                          className="cursor-pointer"
                        >
                          Private entrance
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Safety deposit box"
                        />
                        <label
                          for="Safety deposit box"
                          className="cursor-pointer"
                        >
                          Safety deposit box
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Sofa"
                        />
                        <label for="Sofa" className="cursor-pointer">
                          Sofa
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Soundproofing"
                        />
                        <label for="Soundproofing" className="cursor-pointer">
                          Soundproofing
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Seating Area"
                        />
                        <label for="Seating Area" className="cursor-pointer">
                          Seating Area
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Tile/marble floor"
                        />
                        <label
                          for="Tile/marble floor"
                          className="cursor-pointer"
                        >
                          Tile/marble floor
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Pants press"
                        />
                        <label for="Pants press" className="cursor-pointer">
                          Pants press
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Hardwood or parquet floors"
                        />
                        <label
                          for="Hardwood or parquet floors"
                          className="cursor-pointer"
                        >
                          Hardwood or parquet floors
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Desk"
                        />
                        <label for="Desk" className="cursor-pointer">
                          Desk
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Hypoallergenic"
                        />
                        <label for="Hypoallergenic" className="cursor-pointer">
                          Hypoallergenic
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Cleaning products"
                        />
                        <label
                          for="Cleaning products"
                          className="cursor-pointer"
                        >
                          Cleaning products
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Electric blankets"
                        />
                        <label
                          for="Electric blankets"
                          className="cursor-pointer"
                        >
                          Electric blankets
                        </label>
                      </Row>
                    </div>
                  </div>

                  <div label="Bathroom">
                    <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                      <input
                        class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value=""
                        id="Private bathroom"
                      />
                      <label for="Private bathroom" className="cursor-pointer">
                        Private bathroom
                      </label>
                    </Row>
                    <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                      <input
                        class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value=""
                        id="Shared bathroom"
                      />
                      <label for="Shared bathroom" className="cursor-pointer">
                        Shared bathroom
                      </label>
                    </Row>
                  </div>

                  <div label="Media & technology">
                    <div className="overflow-y-scroll h-[470px] form-check font-ptsans text-[14px] items-start border border-gray_300 w-[100%]">
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Computer"
                        />
                        <label for="Computer" className="cursor-pointer">
                          Computer
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Game console"
                        />
                        <label for="Game console" className="cursor-pointer">
                          Game console
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Air conditioning"
                        />
                        <label
                          for="Air conditioning"
                          className="cursor-pointer"
                        >
                          Air conditioning
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Game console – Nintendo Wii"
                        />
                        <label
                          for="Game console – Nintendo Wii"
                          className="cursor-pointer"
                        >
                          Game console – Nintendo Wii
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Game console – PS2"
                        />
                        <label
                          for="Game console – PS2"
                          className="cursor-pointer"
                        >
                          Game console – PS2
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Game console – PS3"
                        />
                        <label
                          for="Game console – PS3"
                          className="cursor-pointer"
                        >
                          Game console – PS3
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Game console – Xbox 360"
                        />
                        <label
                          for="Game console – Xbox 360"
                          className="cursor-pointer"
                        >
                          Game console – Xbox 360
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Laptop"
                        />
                        <label for="Laptop" className="cursor-pointer">
                          Laptop
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="iPad"
                        />
                        <label for="iPad" className="cursor-pointer">
                          iPad
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Cable channels"
                        />
                        <label for="Cable channels" className="cursor-pointer">
                          Cable channels
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="CD player"
                        />
                        <label for="CD player" className="cursor-pointer">
                          CD player
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="DVD player"
                        />
                        <label for="DVD player" className="cursor-pointer">
                          DVD player
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Fax"
                        />
                        <label for="Fax" className="cursor-pointer">
                          Fax
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="iPod dock"
                        />
                        <label for="iPod dock" className="cursor-pointer">
                          iPod dock
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Laptop safe"
                        />
                        <label for="Laptop safe" className="cursor-pointer">
                          Laptop safe
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Flat-screen TV"
                        />
                        <label for="Flat-screen TV" className="cursor-pointer">
                          Flat-screen TV
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Pay-per-view channels"
                        />
                        <label
                          for="Pay-per-view channels"
                          className="cursor-pointer"
                        >
                          Pay-per-view channels
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Radio"
                        />
                        <label for="Radio" className="cursor-pointer">
                          Radio
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Satellite channels"
                        />
                        <label
                          for="Satellite channels"
                          className="cursor-pointer"
                        >
                          Satellite channels
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Telephone"
                        />
                        <label for="Telephone" className="cursor-pointer">
                          Telephone
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="TV"
                        />
                        <label for="TV" className="cursor-pointer">
                          TV
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Video"
                        />
                        <label for="Video" className="cursor-pointer">
                          Video
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Video games"
                        />
                        <label for="Video games" className="cursor-pointer">
                          Video games
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Blu-ray player"
                        />
                        <label for="Blu-ray player" className="cursor-pointer">
                          Blu-ray player
                        </label>
                      </Row>
                    </div>
                  </div>

                  <div label="Food & drink">
                    <div className="overflow-y-scroll h-[470px] form-check font-ptsans text-[14px] items-start border border-gray_300 w-[100%]">
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Dining area"
                        />
                        <label for="Dining area" className="cursor-pointer">
                          Dining area
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Dining table"
                        />
                        <label for="Dining table" className="cursor-pointer">
                          Dining table
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Barbecue"
                        />
                        <label for="Barbecue" className="cursor-pointer">
                          Barbecue
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Stovetop"
                        />
                        <label for="Stovetop" className="cursor-pointer">
                          Stovetop
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Toaster"
                        />
                        <label for="Toaster" className="cursor-pointer">
                          Toaster
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Electric kettle"
                        />
                        <label for="Electric kettle" className="cursor-pointer">
                          Electric kettle
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Outdoor dining area"
                        />
                        <label
                          for="Outdoor dining area"
                          className="cursor-pointer"
                        >
                          Outdoor dining area
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Outdoor furniture"
                        />
                        <label
                          for="Outdoor furniture"
                          className="cursor-pointer"
                        >
                          Outdoor furniture
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Minibar"
                        />
                        <label for="Minibar" className="cursor-pointer">
                          Minibar
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Kitchenette"
                        />
                        <label for="Kitchenette" className="cursor-pointer">
                          Kitchenette
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Kitchenware"
                        />
                        <label for="Kitchenware" className="cursor-pointer">
                          Kitchenware
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Microwave"
                        />
                        <label for="Microwave" className="cursor-pointer">
                          Microwave
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Refrigerator"
                        />
                        <label for="Refrigerator" className="cursor-pointer">
                          Refrigerator
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Tea/Coffee maker"
                        />
                        <label
                          for="Tea/Coffee maker"
                          className="cursor-pointer"
                        >
                          Tea/Coffee maker
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Coffee machine"
                        />
                        <label for="Coffee machine" className="cursor-pointer">
                          Coffee machine
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Children's high chair"
                        />
                        <label
                          for="Children's high chair"
                          className="cursor-pointer"
                        >
                          Children's high chair
                        </label>
                      </Row>
                    </div>
                  </div>

                  <div label="Services & extras">
                    <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                      <input
                        class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value=""
                        id="Executive lounge access"
                      />
                      <label
                        for="Executive lounge access"
                        className="cursor-pointer"
                      >
                        Executive lounge access
                      </label>
                    </Row>
                    <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                      <input
                        class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value=""
                        id="Alarm clock"
                      />
                      <label for="Alarm clock" className="cursor-pointer">
                        Alarm clock
                      </label>
                    </Row>
                    <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                      <input
                        class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value=""
                        id="Wake-up service"
                      />
                      <label for="Wake-up service" className="cursor-pointer">
                        Wake-up service
                      </label>
                    </Row>
                    <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                      <input
                        class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value=""
                        id="Wake up service/Alarm clock"
                      />
                      <label
                        for="Wake up service/Alarm clock"
                        className="cursor-pointer"
                      >
                        Wake up service/Alarm clock
                      </label>
                    </Row>
                    <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                      <input
                        class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value=""
                        id="Linen"
                      />
                      <label for="Linen" className="cursor-pointer">
                        Linen
                      </label>
                    </Row>
                    <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                      <input
                        class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value=""
                        id="Towels/sheets (extra fee)"
                      />
                      <label
                        for="Towels/sheets (extra fee)"
                        className="cursor-pointer"
                      >
                        Towels/sheets (extra fee)
                      </label>
                    </Row>
                  </div>

                  <div label="Outdoor & view">
                    <div className="overflow-y-scroll h-[470px] form-check font-ptsans text-[14px] items-start border border-gray_300 w-[100%]">
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Balcony"
                        />
                        <label for="Balcony" className="cursor-pointer">
                          Balcony
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Patio"
                        />
                        <label for="Patio" className="cursor-pointer">
                          Patio
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="View"
                        />
                        <label for="View" className="cursor-pointer">
                          View
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Terrace"
                        />
                        <label for="Terrace" className="cursor-pointer">
                          Terrace
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="City view"
                        />
                        <label for="City view" className="cursor-pointer">
                          City view
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Garden view"
                        />
                        <label for="Garden view" className="cursor-pointer">
                          Garden view
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Lake view"
                        />
                        <label for="Lake view" className="cursor-pointer">
                          Lake view
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Landmark view"
                        />
                        <label for="Landmark view" className="cursor-pointer">
                          Landmark view
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Mountain view"
                        />
                        <label for="Mountain view" className="cursor-pointer">
                          Mountain view
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Pool view"
                        />
                        <label for="Pool view" className="cursor-pointer">
                          Pool view
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="River view"
                        />
                        <label for="River view" className="cursor-pointer">
                          River view
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                        <input
                          class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Sea view"
                        />
                        <label for="Sea view" className="cursor-pointer">
                          Sea view
                        </label>
                      </Row>
                    </div>
                  </div>

                  <div label="Layout"></div>

                  <div label="Accessibility">
                    <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                      <input
                        class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value=""
                        id="Room is situated on the ground floor"
                      />
                      <label
                        for="Room is situated on the ground floor"
                        className="cursor-pointer"
                      >
                        Room is situated on the ground floor
                      </label>
                    </Row>
                    <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                      <input
                        class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value=""
                        id="Room is entirely wheelchair accessible"
                      />
                      <label
                        for="Room is entirely wheelchair accessible"
                        className="cursor-pointer"
                      >
                        Room is entirely wheelchair accessible
                      </label>
                    </Row>
                    <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                      <input
                        class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value=""
                        id="Upper floors accessible by elevator"
                      />
                      <label
                        for="Upper floors accessible by elevator"
                        className="cursor-pointer"
                      >
                        Upper floors accessible by elevator
                      </label>
                    </Row>
                    <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                      <input
                        class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value=""
                        id="Upper floors accessible by stairs only"
                      />
                      <label
                        for="Upper floors accessible by stairs only"
                        className="cursor-pointer"
                      >
                        Upper floors accessible by stairs only
                      </label>
                    </Row>

                    <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                      <input
                        class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value=""
                        id="Toilet with grab rails"
                      />
                      <label
                        for="Toilet with grab rails"
                        className="cursor-pointer"
                      >
                        Toilet with grab rails
                      </label>
                    </Row>
                  </div>

                  <div label="Entertainment and family services">
                    <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                      <input
                        class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value=""
                        id="Baby safety gates"
                      />
                      <label for="Baby safety gates" className="cursor-pointer">
                        Baby safety gates
                      </label>
                    </Row>
                    <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                      <input
                        class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value=""
                        id="Board games/puzzles"
                      />
                      <label
                        for="Board games/puzzles"
                        className="cursor-pointer"
                      >
                        Board games/puzzles
                      </label>
                    </Row>
                    <Row className="form-check font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                      <input
                        class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value=""
                        id="Books, DVDs, or music for children"
                      />
                      <label
                        for="Books, DVDs, or music for children"
                        className="cursor-pointer"
                      >
                        Books, DVDs, or music for children
                      </label>
                    </Row>
                    <Row className="cursor-pointer form-check-input font-ptsans bg-gray_300 hover:bg-white_A700 text-[14px] p-4 items-start border-b border-gray_402  w-[100%]">
                      <input
                        class="form-check-input appearance-none h-3.5 w-3.5 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        id="Child safety socket covers"
                      />
                      <label
                        for="Child safety socket covers"
                        className="cursor-pointer"
                      >
                        Child safety socket covers
                      </label>
                    </Row>
                  </div>

                  <div label="Bath/Hot spring"></div>

                  <div label="Safety & security"></div>

                  <div label="Safety features"></div>

                  <div label="Physical distancing"></div>

                  <div label="Cleanliness & disinfecting"></div>

                  <div label="Exclusive services"></div>
                </Accordion>
              </>
            )}
          </Column>

          <Button
            className="font-bold bg-sky-700 hover:bg-indigo_901 text-center text-white_A700 w-[76%] mb-4"
            variant="OutlineLightblue8001_2"
            onClick={handleNavigate20}
          >
            Continue
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default AmenitiesPage;
 
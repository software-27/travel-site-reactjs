import React, { useEffect, useState } from "react";
import Select from 'react-select';
// import { DropdownCheckboxSearch } from "components/DropdownCheckboxSearch";
import { SelectBoxselect } from "components/SelectBox select";
import { Column, Row, Text, Img, Line, Button, Stack } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";
// import PropertyAPI from "api/propertyApi";
import axios from 'axios';
import GlobalConstant from "constant/global";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";

const LanguagePage = ({ onChange }) => {
  const navigate = useNavigate();

  // const propertyApi = new PropertyAPI();

  const [checkboxData, setCheckboxData] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const filteredData = checkboxData.slice(0, 5); // Filter the data to IDs 1 to 5
  // const filteredDataAdd = checkboxData.slice(5, 13); // Filter the data to IDs 6 to 10

  const [searchTerm, setSearchTerm] = useState('');
  const filteredDataAdd = checkboxData
    .slice(5, 13)
    .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Fetch checkbox data from the database (simulated with a useEffect hook)
  useEffect(() => {
    // Simulated API call to fetch checkbox data
    const fetchData = async () => {
      // const response = await fetch('http://localhost:8080/api/property/languageList');
      let check = GlobalConstant.BASE_API + `/api/property/languageList`;
      console.log('check: ',check, ' test: ', GlobalConstant.TEST)
      const response = await fetch(GlobalConstant.BASE_API + `/api/property/languageList`);

      const data = await response.json();
      setCheckboxData(data);
    };
    fetchData();
  }, []);


  const handleButtonClick = () => {
    // setIsExpanded(!isExpanded);
    setIsExpanded(!isExpanded);
    if (isOpen && isExpanded) {
      setIsOpen(false);
    }
  };

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  // Handle checkbox changes
  const handleCheckboxChange = (event, item) => {
    const isChecked = event.target.checked;
    const itemId = item.language_id;

    // Update the checkedItems state based on checkbox changes
    if (isChecked) {
      setCheckedItems([...checkedItems, itemId]);
    } else {
      setCheckedItems(checkedItems.filter((checkedItemId) => checkedItemId !== itemId));
    }
  };

  const selectOptions = filteredDataAdd.map((item) => ({
    value: item.id,
    label: (
      <label className="flex items-center">
        <input
          className="form-check mb-2 w-6 h-6 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          type="checkbox"
          checked={checkedItems.includes(item.language_id)}
          onChange={(event) => handleCheckboxChange(event, item)}
        />
        <span className="ml-1 mb-2">{item.name}</span>
      </label>
    ),
  }));


  function handleNavigate73() {
    navigate("/nl1");
  }
  function handleNavigate76() {
    navigate("/Parking");
  }


  // continue
  function handleNavigate77() {
    console.log('list: ', checkedItems)

    const postData = {
      "language_ids": checkedItems,
    }

    console.log('post1: ', postData)
    postPropertyLanguage(postData)

    navigate("/rules");
  }

  // function postPropertyLanguage(postData) {
  //   console.log('post1: ', postData)
  // }

  async function postPropertyLanguage(postData) {
    try {
      // Retrieve the property owner ID from local storage
      const propertyId = localStorage.getItem('property_id');
      console.log('Property Id:', propertyId);

      // const response = await axios.post(`http://localhost:8080/api/property/language/${propertyId}`, postData);
      let check = GlobalConstant.BASE_API + `/api/property/language/${propertyId}`;
      console.log('check: ',check, ' test: ', GlobalConstant.TEST)
      const response = await axios.post(GlobalConstant.BASE_API + `/api/property/language/${propertyId}`,
      postData
      );

      console.log('response: ', response)

      let data = response.data;
      localStorage.setItem('property_id', data.property_id)
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start 2xl:mb-[100px] mx-[auto] xl:pb-[102px] 2xl:pb-[115px] 3xl:pb-[138px] lg:pb-[81px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <HeaderOTAAdmin className="w-[100%]" />
          <Column className="justify-start w-[100%]">
            <Row className="bg-gray_50 items-left justify-evenly pt-6 pb-4 w-[100%]">
              <Row className="bg-gray_50 items-center justify-center w-[19%]">

                <Stack className="items-center justify center">
                  <Row>
                    <Text className="Step1 cursor-pointer mt-1" variant="body4" onClick={handleNavigate73}>
                      Name and location
                    </Text>
                    <Img
                      src="images/img_checkmark.svg"
                      className="checkmark"
                      alt="checkmark"
                    />
                  </Row>
                  <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[-5px] 3xl:mt-[31px] w-[100%]">
                    <Text className="text-[13px] text-gray_800 underline italic">
                      100% completed
                    </Text>
                  </Row>
                </Stack>
              </Row>
              <Column className="bg-gray_50 items-center justify-center w-[19%]">
                <Stack className="items-center justify center">
                  <Text className="Step2 mb-2.5 2xl:mt-[5px]" variant="body4">
                    Property Setup
                  </Text>
                  <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[1px] 3xl:mt-[31px] w-[100%]">
                    <Text className="text-[13px] text-gray_800 underline italic">
                      50% completed
                    </Text>
                  </Row>
                </Stack>
              </Column>
              <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
                <Text className="Step2 mb-2.5 2xl:mt-[10px]" variant="body4">
                  Photos
                </Text>
              </Column>
              <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
                <Text className="Step2 mb-2.5 2xl:mt-[10px]" variant="body4">
                  Pricing and Calendar
                </Text>
              </Column>
            </Row>
            <Line className="bg-gray_700_33 h-[0.5px] w-[100%]" />
            <Text className="columnrectangleeight xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-black_900 w-[auto]"
              variant="body1">
              What language do you or your staff speak?
            </Text>
            <Column className="items-center justify-start xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[39%]">
              <Column className="bg-white_A700 justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] shadow-bs4 w-[100%]">
                <Text
                  className="font-bold text-black_900 mb-3 w-[100%]"
                  variant="body2"
                >
                  Select languages
                </Text>
                <div>
                  {filteredData.map((item) => (
                    <div key={item.language_id}>
                      <label className="flex items-center">
                        <input className="form-check mb-2 w-6 h-6 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 focus:border-gray-300"
                          type="checkbox"
                          checked={checkedItems.includes(item.language_id)}
                          onChange={(event) => handleCheckboxChange(event, item)}
                        />
                        <span className="ml-2 mb-2">
                          {item.name}
                        </span>
                      </label>
                    </div>
                  ))}

                </div>

                <hr className="border border-gray-300 my-4" />

                <div>
                  <button onClick={handleButtonClick} className="font-bold mt-7 mb-3 hover:text-blue-600">
                    Add additional languages
                  </button>
                  
                  {isExpanded && (
                    <button onClick={handleMenuOpen} className="appearance-none py-2 pl-3 pr-8 text-left w-full bg-white border border-gray-300 shadow-inner cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 flex justify-between">
                      {/* {checkedItems.length === 0 ? ( */}
                      {checkedItems.filter((item) => filteredDataAdd.some((data) => data.language_id === item)).length === 0 ? (
                      <>
                        Select languages
                        <svg
                          className="w-4 h-5 ml-2 -mr-3 text-gray-500 "
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </>
                      ):(
                      // {checkedItems.length > 0 && (
                      <div className="mb-1 ml-1 text-xs flex flex-wrap">
                      {/* <span className="mt-2">Selected items: </span> */}
                        {filteredDataAdd
                          .filter((item) => checkedItems.includes(item.language_id))
                          .map((item) => (
                            <span key={item.language_id} className="bg-blue-200 px-2 py-1 rounded-md ml-1 mt-1">
                              {item.name}
                            </span>
                        ))}
                      {/* </div> */}
                    </div>
                    )}
                    </button>
                    
                  )}

                  {isOpen && (
                    <div className="h-[200px] overflow-y-auto border border-gray-300 shadow-md mt-2">
                      {filteredDataAdd.map((item) => (
                        <div key={item.language_id} className="ml-2">
                          <label className="flex items-center">
                            <input
                              className="form-check mt-2 mb-2 w-6 h-6 mr-2 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 focus:border-gray-300"
                              type="checkbox"
                              checked={checkedItems.includes(item.language_id)}
                              onChange={(event) => handleCheckboxChange(event, item)}
                            />
                            <span className="ml-1">{item.name}</span>
                          </label>
                        </div>
                      ))}
                    {/* <div className="w-full h-[200px] overflow-y-auto border border-gray-300 shadow-md p-2 mt-2"> */}
                      {/* <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full mb-2 p-1 border border-gray-300 rounded"
                        placeholder="Search..."
                      /> */}
                      {/* Render selected item names */}
                      {/* {checkedItems.length > 0 && (
                        <div className="mb-3 ml-1 text-xs flex flex-wrap">
                          <span className="mt-2">Selected items: </span>
                            {filteredDataAdd
                              .filter((item) => checkedItems.includes(item.language_id))
                              .map((item) => (
                                <span key={item.language_id} className="bg-blue-200 px-2 py-1 rounded-md ml-1 mt-1">
                                  {item.name}
                                </span>
                            ))}
                          </div>
                        </div>
                      )} */}
                    </div>
                  )}

                  {/* {isExpanded && (
                    <div>
                      {filteredDataAdd.map((item) => (
                        <div key={item.id}>
                          <label className="flex items-center">
                            <input className="form-check mb-2 w-6 h-6 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                              type="checkbox"
                              checked={checkedItems.includes(item.language_id)}
                              onChange={(event) => handleCheckboxChange(event, item)}
                            />
                            <span className="ml-1 mb-2">
                              {item.name}
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                  )} */}
                </div>

                <span className="m-1"></span>

              </Column>
            </Column>


            <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[39%]" />
            <Row>
              <Row className="mb-14 items-center xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
                <Stack
                  className="common-pointer hover:bg-gray_400 bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                  onClick={handleNavigate76}
                >
                  <Img
                    src="images/img_expandarrow.png"
                    className="ExpandArrow"
                    alt="ExpandArrow"

                  />
                </Stack>
                <Button
                  className=" font-bold bg-sky-700 hover:bg-indigo_901 lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
                  variant="OutlineLightblue8001_2"
                  onClick={handleNavigate77}
                >
                  Continue
                </Button>
              </Row>
              <Row className="mb-14 items-center xl:ml-[110px] 2xl:ml-[20px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
                <Button
                  className=" font-bold bg-gray_700 hover:bg-gray_900 text-white rounded-full"
                >
                  Save draft
                </Button>
              </Row>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default LanguagePage;
import React, { useEffect, useState } from "react";

import { Column, Stack, Img, Row, Text, Line, Button } from "components";
import { useNavigate } from "react-router-dom";
import Header from "components/Header/Header";
// import PropertyAPI from "api/propertyApi";
import axios from 'axios';
import GlobalConstant from "constant/global";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";

const HostprofilePage = () => {
  const navigate = useNavigate();

  // const propertyApi = new PropertyAPI();

  const [checkedProperty, setCheckedProperty] = useState(false)
  const [inputProperty, setInputProperty] = useState('')
  const [checkedHost, setCheckedHost] = useState(false)
  const [inputHost, setInputHost] = useState('')
  const [inputAboutHost, setInputAboutHost] = useState('')
  const [checkedNeighbourhood, setCheckedNeighbourhood] = useState(false)
  const [inputNeighbourhood, setInputNeighbourhood] = useState('')
  const [checkedNone, setCheckedNone] = useState(false)
  
  // const [value, setValue] = useState('');
  // const handleInputChange = event => {
  //   setValue(event.target.value);
  // }

  function handleNavigate73() {
    navigate("/nl1");
  }
  //back
  function handleNavigate76() {
    navigate("/rules");
  }
  //cont
  function handleNavigate77() {
    console.log('Property: ', checkedProperty, ' About property:', inputProperty, ' Host:', checkedHost, ' Host Name:', inputHost, 
                ' About Host:', inputAboutHost, ' Neighbourhood:', checkedNeighbourhood, ' About neighbourhood:', inputNeighbourhood,
                ' None:', checkedNone)

    localStorage.setItem('checkedProperty', checkedProperty)
    localStorage.setItem('checkedHost', checkedHost)
    localStorage.setItem('checkedNeighbourhood', checkedNeighbourhood)
    localStorage.setItem('checkedNone', checkedNone)
    localStorage.setItem('inputProperty', inputProperty)
    localStorage.setItem('inputHost', inputHost)
    localStorage.setItem('inputAboutHost', inputAboutHost)
    localStorage.setItem('inputNeighbourhood', inputNeighbourhood)

    // console.log('Checked Property:', checkedProperty)
    // console.log('Before Update: ', localStorage.getItem('inputProperty')); // Log the value before updating

    const blankText = " ";

    if (checkedNone === true){
      console.log('if: None true')
      localStorage.setItem('checkedProperty', false);
      localStorage.setItem('inputProperty', blankText);
      localStorage.setItem('checkedHost', false);
      localStorage.setItem('inputHost', blankText);
      localStorage.setItem('inputAboutHost', blankText);
      localStorage.setItem('checkedNeighbourhood', false);
      localStorage.setItem('inputNeighbourhood', blankText);
    }
    else{
      console.log('else: None false')

      if (checkedProperty === false){
        console.log('property: false')
        localStorage.setItem('inputProperty', blankText);
      }
  
      if (checkedHost === false){
        console.log('host: false')
        localStorage.setItem('inputHost', blankText);
        localStorage.setItem('inputAboutHost', blankText);
      }
  
      if (checkedNeighbourhood === false){
        console.log('neighbour: false')
        localStorage.setItem('inputNeighbourhood', blankText);
      }
    }


    console.log('Updated Property: ', localStorage.getItem('checkedProperty'));
    console.log('Updated Property Details: ', localStorage.getItem('inputProperty')); // Log the value after updating
    console.log('Updated Host: ', localStorage.getItem('checkedHost'));
    console.log('Updated Host 1: ', localStorage.getItem('inputHost'));
    console.log('Updated Host 2: ', localStorage.getItem('inputAboutHost'));
    console.log('Updated Neighbourhood: ', localStorage.getItem('checkedNeighbourhood'));
    console.log('Updated Neighbourhood Details: ', localStorage.getItem('inputNeighbourhood'));

    let updatedCheckedProperty = localStorage.getItem('checkedProperty');
    let updatedInputProperty = localStorage.getItem('inputProperty');
    let updatedCheckedHost = localStorage.getItem('checkedHost');
    let updatedInputHost = localStorage.getItem('inputHost');
    let updatedInputAboutHost = localStorage.getItem('inputAboutHost');
    let updatedCheckedNeighbourhood = localStorage.getItem('checkedNeighbourhood');
    let updatedInputNeighbourhood = localStorage.getItem('inputNeighbourhood');

    console.log('Checked Property: ', updatedCheckedProperty, ' About Property: ', updatedInputProperty,
    ' Checked Host: ', updatedCheckedHost, ' Host : ', updatedInputHost, ' About Host: ', updatedInputAboutHost, 
    ' Checked Neighbourhood: ', updatedCheckedNeighbourhood, ' About Neighbourhood: ', updatedInputNeighbourhood,
    ' Checked None: ', checkedNone)


    const postData = {
      "property_profile": updatedCheckedProperty,
      "property_detail": updatedInputProperty,
      "host": updatedCheckedHost,
      "host_name": updatedInputHost,
      "host_about": updatedInputAboutHost,
      "neighbourhood": updatedCheckedNeighbourhood, 
      "neighbourhood_about": updatedInputNeighbourhood,
      "none": checkedNone
    }
    
    console.log('post1: ', postData)
    postPropertyHostProfile(postData)
    navigate("/import");
  
  }

  // function postPropertyHostProfile(postData) {
  //   console.log('post1: ', postData)
  // }

  async function postPropertyHostProfile(postData) {
    try {
      // Retrieve the property owner ID from local storage
      const propertyId = localStorage.getItem('property_id');
      console.log('Property Id:', propertyId);

      // const response = await axios.post('http://localhost:8080/api/property/createProperty/${propertyOwnerId}', postData);
      // const response = await axios.post(`http://localhost:8080/api/property/profile/${propertyId}`, postData);
      let check = GlobalConstant.BASE_API + `/api/property/profile/${propertyId}`;
      console.log('check: ',check, ' test: ', GlobalConstant.TEST)
      const response = await axios.post(GlobalConstant.BASE_API + `/api/property/profile/${propertyId}`,
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
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[50px] xl:pb-[63px] 2xl:pb-[71px] 3xl:pb-[85px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <HeaderOTAAdmin className="w-[100%]" />
          <Column className="items-center justify-start w-[100%]">
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
                        90% completed
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
            </Column>
          </Column>
          <Text
            className="columnrectangleeight xl:ml-[112px] 2xl:ml-[124px] 3xl:ml-[150px] lg:ml-[90px] lg:mt-[36px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-black_900 w-[auto]"
            variant="body1"
          >
            Host profile
          </Text>
          <Row className="items-start xl:ml-[109px] 2xl:ml-[124px] 3xl:ml-[150px] lg:ml-[90px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[66%]">
            <Column className="bg-white_A700 border border-gray_300 border-solid justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[60%]">
              <Text className="Maincard3 w-[100%]" variant="h7">
                Help your listing stand out by telling potential guests a bit more about yourself, your property and your neighbourhood. This information will be shown on your property page.
              </Text>
              <Row className="items-left justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[93%]">
                <Column className="items-start lg:ml-[15px] xl:ml-[7px] 2xl:ml-[-3px] 3xl:ml-[9px] w-[93%]">
                  <div className="mb-5">
                    <input type="checkbox" name="agree" id="agree"
                      className="peer w-6 h-6 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 focus:border-gray-300"
                      checked={checkedProperty}
                      onChange={()=>setCheckedProperty(!checkedProperty)} />
                    <label htmlFor="agree" className="ml-3">
                      The property
                    </label>

                    {/* <div className="mt-2 hidden peer-checked:block"> */}
                    <div className={`mt-2 ${(checkedNone || !checkedProperty) ? 'hidden' : 'peer-checked:block'}`}>
                      <Column>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">About the property</label>
                        <textarea id="message"
                          value={inputProperty}
                          onInput={e => setInputProperty(e.target.value)}
                          rows="4"
                          className="block p-2.5 2xl:ml-[20px] w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[250%]"
                          placeholder="What makes your place unique? What can guests expect?"></textarea>
                      </Column>
                    </div>
                  </div>
                  <div className="mb-5 ">
                    <input type="checkbox" name="agree" id="agree"
                      className="peer w-6 h-6 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 focus:border-gray-300"
                      checked={checkedHost}
                      onChange={()=>setCheckedHost(!checkedHost)} />
                    <label htmlFor="agree" className="ml-3">The host
                    </label>

                    {/* <div className="mt-2 hidden peer-checked:block"> */}
                    <div className={`mt-2 ${(checkedNone || !checkedHost) ? 'hidden' : 'peer-checked:block'}`}>
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Host Name</label>
                      <textarea id="message"
                        rows="1"
                        value={inputHost}
                        onInput={e => setInputHost(e.target.value)}
                        className="mb-3 block p-2.5 2xl:ml-[20px] w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[250%]"
                        placeholder=""></textarea>

                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">About the host</label>
                      <textarea id="message"
                        rows="4"
                        value={inputAboutHost}
                        onInput={e => setInputAboutHost(e.target.value)}
                        className="block p-2.5 2xl:ml-[20px] w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[250%]"
                        placeholder="What are your interests? What do you like about hosting?"></textarea>

                    </div>
                  </div>

                  <div className="mb-5">
                    <input type="checkbox" name="agree" id="agree"
                      className="peer w-6 h-6 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 focus:border-gray-300"
                      checked={checkedNeighbourhood}
                      onChange={()=>setCheckedNeighbourhood(!checkedNeighbourhood)} 
                    />
                    <label htmlFor="agree" className="ml-3">The neighbourhood
                    </label>

                    {/* <div className="mt-2 hidden peer-checked:block"> */}
                    <div className={`mt-2 ${(checkedNone || !checkedNeighbourhood) ? 'hidden' : 'peer-checked:block'}`}>
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">About the neighbourhood</label>
                      <textarea id="message"
                        rows="4"
                        value={inputNeighbourhood}
                        onInput={e => setInputNeighbourhood(e.target.value)}
                        className="block p-2.5 2xl:ml-[20px] w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[250%]"
                        placeholder="What's the area like? Are there any attractions nearby?"
                        ></textarea>
                        
                    </div>
                  </div>

                  <div className="mb-5">
                    <input type="checkbox" name="agree" id="agree"
                      className="peer w-6 h-6 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 focus:border-gray-300"
                      checked={checkedNone}
                      // onChange={()=>setCheckedNone(!checkedNone)} 
                      onChange={() => {
                        setCheckedNone(!checkedNone)
                        setCheckedProperty(false);
                        setCheckedHost(false);
                        setCheckedNeighbourhood(false);
                      }}
                      // onChange={() => {
                      //   setCheckedNone(!checkedNone);
                      //   if (!checkedNone) {
                      //     setCheckedProperty(false);
                      //     setCheckedHost(false);
                      //     setCheckedNeighbourhood(false);
                      //   }
                      // }}
                      />
                    <label htmlFor="agree" className="ml-3">None of the above/I'll add these later
                    </label>
                  </div>
                </Column>
              </Row>
            </Column>
          </Row>
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
    </>
  );
};

export default HostprofilePage;
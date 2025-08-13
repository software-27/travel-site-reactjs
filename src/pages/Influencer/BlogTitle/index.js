import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from 'components/LoadingSpinner/index';
import { useAuth } from 'AuthContext';
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";
import { Img, Text, Button, Input, Column } from "components";
import HeaderOTAMobile from 'components/Header/HeaderOTAMobile/index';
import { ToastContainer, toast } from 'react-toastify';
const BlogTitle = () => {
  //navigate button
  const navigate = useNavigate();
  const [keywords, setKeywords] = useState('');
  const [language, setLanguage] = useState('');
  const [generatedTitle, setGeneratedTitle] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [dataArray, setDataArray] = useState([]);
  const [dataOnlyArray, setDataOnlyArray] = useState([]);
  const location = useLocation();
  const [isContentVisible, setContentVisible] = useState(false);
  //spinner
  const [isLoading, setIsLoading] = useState(false);
  const { setIsLoggedIn } = useAuth();

  setIsLoggedIn(true);


  // useEffect(() => {
  //   // Retrieve values from localStorage on page load
  //   const storedKeywords = localStorage.getItem("keywords");
  //   const storedLanguage = localStorage.getItem("language");
  //   // const storedNewDataOnlyArray = localStorage.getItem("newDataOnlyArray");

  //   // Update state with stored values if they exist
  //   if (storedKeywords) {
  //     setKeywords(storedKeywords);
  //   }

  //   if (storedLanguage) {
  //     setLanguage(storedLanguage);
  //   }

  //   // if (storedNewDataOnlyArray) {
  //   //   setDataOnlyArray(storedNewDataOnlyArray);
  //   // }

  //   console.log('storedKeywords: ', storedKeywords)
  //   console.log('storedLanguage: ', storedLanguage)
  //   // console.log('storedNewDataOnlyArray: ', storedNewDataOnlyArray)

  // }, []);

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

  const generateBlogTitle = async () => {

    console.log('[ keywords: ', keywords, "||", 'language:', language, ']')

    // Check if any of the required fields is empty
    if (!keywords) {
      toast.error('Keywords cannot be empty. Please input keywords before proceeding.', { position: 'top-center', autoClose: 5000 });
      setIsLoading(false);
      return; 
    }

    if (!language) {
      toast.error('Language cannot be empty. Please select language before proceeding.', { position: 'top-center', autoClose: 5000 });
      setIsLoading(false);
      return; 
    }


    const payload = {
      keywords: keywords,
      language: language,
    };

    try {
      setIsLoading(true); // Show the loading spinner
      const response = await axios.post('https://halaltravel.ai/gpt/blog/partone', payload);
      // setGeneratedTitle(response.data.titles);
      setIsLoading(false); // Hide the loading spinner after the API call is complete
      setGeneratedTitle(response.data)
      setContentVisible(true);
      console.log("Results:" + response.data);

      // Split the generatedTitle into an array using newline characters
      const newArray = response.data.split('\n').map(item => item.trim('"'));
      // Extract only the blog titles from the newArray
      // const newDataOnlyArray = newArray.map(item => item.split('"')[1]);
      // const newDataOnlyArray = newArray.map(item => item.replace(/^\d+\.\s*/, ''));
      const newDataOnlyArray = newArray.map(item => item.replace(/^\d+\.\s*"?|"$/g, ''));
      // Update the state with the array of blog titles
      setDataArray(newDataOnlyArray);
      // Make sure the dataArray has at least three elements
      if (newDataOnlyArray.length >= 3) {
        const [data1, data2, data3] = newDataOnlyArray;
        console.log('Result 1:', data1);
        console.log('Result 2:', data2);
        console.log('Result 3:', data3);
      } else {
        console.log('Not enough data to split into three elements');
      }
      // localStorage.setItem('keywords', keywords);
      // localStorage.setItem('language', language);
      // Update the state dataOnlyArray with newDataOnlyArray
      setDataOnlyArray(newDataOnlyArray);
      // localStorage.setItem('newDataOnlyArray', newDataOnlyArray);

    } catch (error) {
      console.error(error);
      setIsLoading(false); // Hide the loading spinner in case of an error
    }

  };

  // continue button
  function handleNavigate1() {
    localStorage.setItem('language', language);
    // navigate("/blog-outline1", { state: { selectedTitle: dataOnlyArray[selectedOption - 1] } });
    navigate("/blog-outline", { state: { selectedTitle: selectedOption ? dataOnlyArray[selectedOption - 1] : "" } });
    // navigate("/blog-outline1")

  };
  //for dropdown list
  const [isVisible, setIsVisible] = useState("");


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const changeHandler = e => {
    const getshow = e.target.value;
    setIsVisible(getshow);
  }

  return (
    <div className='font-montserrat w-full'>
      <div className='fixed w-full' style={{ zIndex: 2 }}>
        <HeaderOTAAdmin openPopup1={openPopup1} className="fixed invisible lg:visible" />
        <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
        <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />
        <HeaderOTAMobile openPopup1={openPopup1} className="visible fixed overflow-hidden lg:invisible lg:hidden" />
      </div>
      <div className='w-full mx-auto p-5 xs:pt-[160px] lg:pt-[92px]'>

        <div class="lg:max-w-xl mx-auto my-4 ">
          <div class="flex pb-3">
            <div class="flex-1">
            </div>

            <div class="flex-1">
              <div class="xs:w-20 lg:w-10 xs:h-20 lg:h-10 bg-gray-500 border-2 border-grey-light mx-auto rounded-full sm:text-[28px] lg:text-[18px] text-white flex items-center">
                <span class="text-white text-center w-full">1</span>
              </div>
            </div>


            <div class="w-3/4 align-center items-center align-middle content-center flex">
              <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div class="bg-blue-600 rounded leading-none py-1 text-center dark:bg-blue-500 w-[0%]"></div>
              </div>
            </div>


            <div class="flex-1">
              <div class="xs:w-20 lg:w-10 xs:h-20 lg:h-10 bg-gray-500/30 border-2 border-grey-light mx-auto rounded-full sm:text-[28px] lg:text-[18px] text-white flex items-center">
                <span class="text-white text-center w-full">2</span>
              </div>
            </div>

            <div class="w-3/4 align-center items-center align-middle content-center flex">
              <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div class="bg-blue-600 rounded leading-none py-1 text-center dark:bg-blue-500 w-[0%]"></div>
              </div>
            </div>

            <div class="flex-1">
              <button class="xs:w-20 lg:w-10 xs:h-20 lg:h-10 bg-gray-500/30 border-2 border-grey-light mx-auto rounded-full sm:text-[28px] lg:text-[18px] text-white flex items-center">
                <span class="text-white text-center w-full">3</span>
              </button>
            </div>

            <div class="flex-1">
            </div>
          </div>

          <div class="flex sm:text-[28px] lg:text-[14px] content-center text-center">
            <div class="w-2/4">
              Step 1: Blog Ideas + Titles
            </div>

            <div class="w-2/4 text-gray-500/50">
              Step 2: Blog Outline
            </div>

            <div class="w-2/4 text-gray-500/50">
              Step 3: Review and Generate
            </div>
          </div>

          <div className='w-full items-center content-center sm:mt-8 lg:mt-4 lg:max-w-3xl sm:w-full'>
            <div className='border border-gray-200 rounded-sm shadow p-4 h-[fit] sm:w-full'>
              <text className='font-semibold sm:text-[37px] lg:text-[14px]'>Blog Ideas + Titles</text>

              <div className='m-2 lg:mt-2 grid grid-cols-2 xs:mt-5 gap-4 '>
                <div>
                  <label for='language' className='font-medium xs:text-[35px] lg:text-[14px]'>Output Language:</label>
                  <div className='border border-1 md:border-neutral-400 lg:border-neutral-200 justify-center bg-white_A700 flex flex-row g:gap-4 md:gap-8  lg:h-10 sm:h-24 items-center outline outline-[0.5px] outline-[#D8D8D8] md:rounded-[20px] lg:rounded-[5px] w-full'>
                    <select
                      id='languages'
                      className='md:my-4 lg:my-1 md:text-[30px] font-normal not-italic font-montserrat p-0 lg:text-[12px] ml-1 text-black placeholder:required text-slate_700 w-[100%] outline-none border-none '
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      required
                    >
                      <option value=''>Select</option>
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
                <div>
                  <span className='font-medium xs:text-[35px] lg:text-[14px]'>Keywords:</span>
                  <div className='border border-1 md:border-neutral-400 lg:border-neutral-200 justify-center bg-white_A700 flex flex-row lg:gap-4 md:gap-8 lg:h-10 sm:h-24 items-center outline outline-[0.5px] outline-[#D8D8D8] md:rounded-[20px] lg:rounded-[5px] w-full'>
                    <input type='text' placeholder='Enter keywords in your selected language' className='md:my-4 lg:my-1 xs:text-[30px] font-normal not-italic font-montserrat p-0 lg:text-[12px] ml-1 text-black placeholder:required text-slate_700 w-[100%] outline-none border-none '
                      id="keywords"
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
              </div>
              <Column className=" w-full justify-end items-end mt-8 text-right">
                <div className='w-[100%] justify-end items-end'>
                  <button className='bg-[#00A19A] xs:text-[35px] lg:text-[14px] xs:justify-center lg:justify-end lg:items-end lg:w-[15%] xs:w-[35%] xs:h-20 lg:h-10 text-white font-medium xs:rounded-[20px] lg:rounded-lg'
                    type='button'
                    onClick={() => {
                      generateBlogTitle();
                    }}
                    value='yes'>Generate</button>
                </div>
              </Column>
              {/* Loading spinner will be rendered conditionally */}
              {isLoading && (
                <div className="flex justify-center"> {/* Center the spinner using flex */}
                  <LoadingSpinner />
                </div>
              )}

              {isContentVisible && (
                <div className='m-2 space-y-3'>
                  <span className='font-medium lg:text-[14px] sm:text-[28px] '>Results:</span>
                  <div className='space-y-2 justify-start'>
                    {dataOnlyArray.length >= 1 && (
                      <>

                        <button
                          className={`${selectedOption === 1 ? 'bg-gray-500' : 'bg-gray-300'
                            } text-black xs:text-[35px] lg:text-[14px] font-medium hover:bg-gray-500 rounded-lg w-full items-start p-3`}
                          onClick={() => handleOptionSelect(1)}
                        >
                          <p className='items-start'>{dataOnlyArray[0]}</p>
                        </button>
                      </>
                    )}

                    {dataOnlyArray && dataOnlyArray.length >= 2 && (
                      <button
                        className={`${selectedOption === 2 ? 'bg-gray-500' : 'bg-gray-300'
                          } text-black xs:text-[35px] lg:text-[14px] font-medium hover:bg-gray-500 rounded-lg w-full items-start p-3`}
                        onClick={() => handleOptionSelect(2)}
                      >
                        <p className='text-start'>{dataArray[1]}</p>

                      </button>
                    )}

                    {dataArray && dataArray.length >= 3 && (
                      <button
                        className={`${selectedOption === 3 ? 'bg-gray-500' : 'bg-gray-300'
                          } text-black xs:text-[35px] lg:text-[14px] font-medium hover:bg-gray-500 rounded-lg w-full items-start p-3`}
                        onClick={() => handleOptionSelect(3)}
                      >
                        <p className='text-start'>{dataArray[2]}</p>
                      </button>
                    )}
                  </div>



                  <p className='xs:text-[28px] lg:text-[14px] text-right'>Select 1 and Click Continue</p>
                  <div className='flex justify-end'>
                    <button
                      className={`${selectedOption ? 'bg-[#00A19A]' : 'bg-gray-300'
                        } text-white font-medium items-center xs:text-[35px] lg:text-[14px] lg:w-[15%] xs:w-[35%] xs:h-20 lg:h-10 text-white font-medium xs:rounded-[20px] lg:rounded-lg`}
                      disabled={!selectedOption}
                      onClick={handleNavigate1}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}


            </div>
          </div>

        </div>

      </div>
    </div >

  )
}

export default BlogTitle;
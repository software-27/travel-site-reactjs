import React, { useState, useRef } from 'react'
import axios from 'axios';
import HeaderOTA from 'components/Header/HeaderOTA/index';
import App from 'pages/Influencer/App/index';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './editcreator.css';
import { ImFacebook2, ImFacebook, ImTwitter, ImInstagram } from 'react-icons/im';
import { FaTwitterSquare, FaInstagram, FaTiktok } from 'react-icons/fa';
import { TfiYoutube } from 'react-icons/tfi';
import { IoShare } from 'react-icons/io5';
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import LoadingSpinner from 'components/LoadingSpinner/index';
import { useEffect } from 'react';
import { Modal, initTE } from 'tw-elements';
import { Line } from 'components/Line/index';
import { useAuth } from 'AuthContext';
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";
import HeaderOTAMobile from 'components/Header/HeaderOTAMobile/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from '../../../../node_modules/react-router-dom/index';

// Initialize tw-elements
initTE({ Modal });

const EditCreator = () => {

  const [name, setName] = useState('');
  const [keywords, setKeywords] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [language, setLanguage] = useState('');
  const [description, setDescription] = useState('');
  const [showSavedText, setShowSavedText] = useState(false);
  const [generatedDescription, setGeneratedDescription] = useState('');
  const editorRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setIsLoggedIn } = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isErrorOpen, setErrorOpen] = useState(false);


  const [logoImagePath, setLogoImagePath] = useState('');
  const [headerImagePath, setHeaderImagePath] = useState('');
  const [profileImagePath, setProfileImagePath] = useState('');

  const [logoImage, setLogoImage] = useState('');
  const [headerImage, setHeaderImage] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const [profileData, setProfileData] = useState({
    bio: '',
    instagram: '',
    tiktok: '',
    twitter: '',
    facebook: '',
    youtube: '',
    username: '',
    email: '',
  });

  const [headerImageExists, setHeaderImageExists] = useState(true);
  const [profileImageExists, setProfileImageExists] = useState(true);
  const defaultHeaderImageUrl = 'images/default_header.jpg';
  const defaultProfileImageUrl = 'images/default_profile.jpg';

  const [activeSection, setActiveSection] = useState('generate'); // Default to 'upcoming'

  const handleSectionClick = (section) => {
    setActiveSection(section);
    // Additional logic or fetch data for the selected section if needed
  };

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

  setIsLoggedIn(true);

  const handleLogoImageChange = (event) => {
    const file = event.target.files[0];
    setLogoImage(file);
  };

  const handleHeaderImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const fileType = selectedFile.type;
      const fileSizeInBytes = selectedFile.size;
      const fileSizeInKB = fileSizeInBytes / 1024; // File size in KB

      const allowedTypes = ['image/jpeg', 'image/png']; // Allowed image types
      const maxSizeKB = 1024; // Maximum file size in KB (1 MB)

      if (allowedTypes.includes(fileType)) {
        if (fileSizeInKB > maxSizeKB) {

          // Clear the input value to allow selecting the same file again
          event.target.value = null;

          toast.error("Image file size exceeds 1 MB.", {
            autoClose: 2000,
            position: 'top-right',
            closeButton: false,
            className: "xs:top-40 lg:top-20 toast-message",
          });

        } else {
          console.log(`File type: ${fileType}`);
          console.log(`File size: ${fileSizeInKB} KB`);
          // File type and size are both valid; you can proceed with further actions

          setHeaderImage(selectedFile);
        }
      } else {
        // Clear the input value to allow selecting the same file again
        event.target.value = null;

        toast.error("Invalid file type. Please select a valid image file.", {
          autoClose: 2000,
          position: 'top-right',
          closeButton: false,
          className: "xs:top-40 lg:top-20 toast-message",
        });
      }
    }

  };

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleProfileImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const fileType = selectedFile.type;
      const fileSizeInBytes = selectedFile.size;
      const fileSizeInKB = fileSizeInBytes / 1024; // File size in KB

      const allowedTypes = ['image/jpeg', 'image/png']; // Allowed image types
      const maxSizeKB = 1024; // Maximum file size in KB (1 MB)

      if (allowedTypes.includes(fileType)) {
        if (fileSizeInKB > maxSizeKB) {

          // Clear the input value to allow selecting the same file again
          event.target.value = null;

          toast.error("File size exceeds 1 MB.", {
            autoClose: 2000,
            position: 'top-right',
            closeButton: false,
            className: "xs:top-40 lg:top-20 toast-message",
          });

        } else {
          console.log(`File type: ${fileType}`);
          console.log(`File size: ${fileSizeInKB} KB`);
          // File type and size are both valid; you can proceed with further actions

          setProfileImage(selectedFile);
        }
      } else {
        // Clear the input value to allow selecting the same file again
        event.target.value = null;

        toast.error("Invalid file type. Please select a valid image file.", {
          autoClose: 2000,
          position: 'top-right',
          closeButton: false,
          className: "xs:top-40 lg:top-20 toast-message",
        });
      }
    }
  };

  // Function to show the success message
  const showSuccess = () => {
    setShowSuccessMessage(true);
  };

  // Function to hide the success message
  const hideSuccess = () => {
    setShowSuccessMessage(false);
  };

  const handleImageRemove = (imageTypes) => {
    imageTypes.forEach((imageType) => {
      switch (imageType) {
        case 'logoImage':
          setLogoImage(null);
          break;
        case 'logoImagePath':
          setLogoImagePath(null);
          break;
        case 'headerImage':
          setHeaderImage(null);
          setHeaderImageExists(false);
          break;
        case 'headerImagePath':
          setHeaderImagePath(null);
          setHeaderImageExists(false);
          break;
        case 'profileImage':
          setProfileImage(null);
          setProfileImageExists(false);
          break;
        case 'profileImagePath':
          setProfileImagePath(null);
          setProfileImageExists(false);
          break;
        default:
          break;
      }
    });
  };

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    // Fetch the current user's data from the database and populate the form fields
    axios.get(`https://halaltravel.ai/ht/api/profile/${userId}`)
      .then(response => {
        const data = response.data;
        const logoImage = data.logoImage;
        const headerImage = data.headerImage;
        const profileImage = data.profileImage;
        const bio = data.bio;
        setProfileData({
          email: data.email,
          username: data.userName,
          bio: data.bio,
          instagram: data.instagram,
          tiktok: data.tiktok,
          facebook: data.facebook,
          twitter: data.twitter,
          youtube: data.youtube,
        });
        setLogoImagePath(logoImage);
        setHeaderImagePath(headerImage);
        setProfileImagePath(profileImage);
        setDescription(bio);
        console.log('-------------', data.profileImage);
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
      });
  }, [userId]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading1, setIsLoading1] = useState(false);

  const clearErrorMessage = () => {
    setErrorMessage('');
  };

  const handleSubmit = async () => {
    setIsLoading1(true);

    // console.log("")
    // console.log('111logoImage:', logoImage);
    // console.log('111headerImage:', headerImage);
    // console.log('111profileImage:', profileImage);
    // console.log('111profileData:', JSON.stringify(profileData));

    const json = JSON.stringify(profileData);
    const blob = new Blob([json], {
      type: 'application/json'
    });
    const formData = new FormData();
    // formData.append('logoImage', logoImage);
    formData.append('headerImage', headerImage);
    formData.append('profileImage', profileImage);
    formData.append('profileData', blob);

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    const userId = localStorage.getItem("userId");

    if (profileData.username != '') {
      try {
        await axios.post(`https://halaltravel.ai/ht/api/profile/${userId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Profile updated successfully:', formData);
        toggleModal();
      } catch (error) {
        console.log('Error updating profile:', error);

        toggleError();

      }
    } else {
      toast.error("Please fill in the username.", {
        autoClose: 2000,
        position: 'top-right',
        closeButton: false,
        className: "xs:top-40 lg:top-20 toast-message",
      });

      setIsLoading1(false);
    }

  };

  console.log('[ name:', name, 'keywords: ', keywords, 'target_audience:', targetAudience,
    'language:', language, ']')

  console.log('errorMessage: ', errorMessage);

  const generateProfileDescription = async () => {
    // Check if any of the required fields is empty
    if (!name || !keywords || !targetAudience || !language) {
      alert('Please fill in all fields');
      return;
    }
    setIsLoading(true);
    const payload = {
      name: name,
      keywords: keywords,
      target_audience: targetAudience,
      language: language,
    };

    try {
      const response = await axios.post('https://halaltravel.ai/gpt/creator', payload);
      // const generatedDescription = response.data.replace(/(<([^>]+)>)/gi, '');
      const generatedDescription = response.data.replace(/<\/?[^>]+(>|$)/g, '');
      setDescription(generatedDescription);
      setProfileData((prevData) => ({
        ...prevData,
        bio: generatedDescription, // Set for the "description" field in profileData
      }));
      // setGeneratedDescription(generatedDescription);
      // setShowSavedText(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTextAreaChange = (event) => {
    const data = event.target.value;
    setDescription(data);
    setProfileData((prevData) => ({
      ...prevData,
      bio: data
    }));
    console.log(data);
  };

  useEffect(() => {
    // Simulate loading delay with setTimeout (replace with your actual data fetching logic)
    const loadingDelay = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after the data is fetched (or simulated delay)
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(loadingDelay);
  }, []);


  const toggleModal = () => {
    setIsLoading1(false);
    setModalOpen(!isModalOpen);
  };

  const toggleError = () => {
    setIsLoading1(false);
    setErrorOpen(!isErrorOpen);
  };

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const fileSizeInBytes = selectedFile.size;
      // Convert the file size to kilobytes (KB)
      const fileSizeInKB = fileSizeInBytes / 1024;

      console.log(`File size: ${fileSizeInKB} KB`);

      // You can add your size validation logic here
      if (fileSizeInKB > 1024) {
        // Display an error message or take appropriate action
        console.log('File size exceeds 1 MB.');
      }
    }
  }



  const renderHeaderImage = () => {
    if (headerImagePath || headerImage) {
      return (
        <div className="relative">
          <button
            className="absolute top-2 right-2 p-1 bg-[#808080] rounded-full text-white"
            style={{
              padding: 0,
              borderRadius: '50%',
              width: '25px',
              height: '25px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onClick={() => handleImageRemove(['headerImagePath', 'headerImage'])}
          >
            X
          </button>

          <img
            src={headerImage ? URL.createObjectURL(headerImage) : headerImagePath}
            alt="Header"
            className="max-w-full max-h-full m-auto"
            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
          />
        </div>
      );
    } else {
      return (
        <img
          src={defaultHeaderImageUrl}
          alt="Default Header"
          className="max-w-full max-h-full m-auto"
          style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
        />
      );
    }
  };

  const [isOverlayOpen, setOverlayOpen] = useState(true);

  // Function to open the overlay
  const openOverlay = () => {
    setOverlayOpen(true);
  };

  // Function to close the overlay
  const closeOverlay = () => {
    setOverlayOpen(false);
  };


  const navigate = useNavigate();


  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     event.preventDefault();
  //     event.returnValue = ''; // This line shows the confirmation dialog in most browsers
  //     return ''; // For some browsers
  //   };

  //   window.onbeforeunload = handleBeforeUnload;

  //   const handlePageLeave = (event) => {
  //     const confirmationMessage = 'Are you sure you want to leave this page? Your changes may not be saved.';

  //     // Display custom confirmation dialog
  //     if (typeof event === 'undefined') {
  //       event = window.event;
  //     }

  //     if (event) {
  //       event.returnValue = confirmationMessage;
  //     }

  //     return confirmationMessage;
  //   };

  //   const links = document.querySelectorAll('a');
  //   const buttons = document.querySelectorAll('button');

  //   links.forEach(link => {
  //     link.addEventListener('click', handlePageLeave);
  //   });

  //   buttons.forEach(button => {
  //     button.addEventListener('click', handlePageLeave);
  //   });

  //   return () => {
  //     window.onbeforeunload = null;
  //     links.forEach(link => {
  //       link.removeEventListener('click', handlePageLeave);
  //     });
  //     buttons.forEach(button => {
  //       button.removeEventListener('click', handlePageLeave);
  //     });
  //   };
  // }, []);


  return (
    <div className='bg-[#E9EDED] flex flex-col font-montserrat mx-auto w-full'>

      <div className='fixed w-full' style={{ zIndex: 2 }}>
        <HeaderOTAAdmin openPopup1={openPopup1} className="fixed invisible lg:visible" />
        <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
        <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />
        <HeaderOTAMobile openPopup1={openPopup1} />
      </div>

      <div className='flex flex-direction' style={{ paddingTop: '92px', zIndex: 1 }}>

        {/* {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <p>Are you sure you want to leave this page? Your changes may not be saved.</p>
              <div className="popup-buttons">
                <button onClick={handleConfirm}>Confirm</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          </div>
        )} */}

        {/* Button to open the overlay */}
        <div className='fixed xs:mt-[10%] lg:mt-[1%]' style={{ zIndex: 1 }}>
          {/* <button
            className='bg-[#00A19A] text-black font-medium px-8 py-4 text-sm items-center mb-3 shadow-xl rounded-r-lg'
            onClick={openOverlay}
          >
            Go Back to Edit
          </button> */}
          <button
            className='bg-[#00A19A] text-white font-medium xs:px-7 xs:py-3 lg:px-3 lg:py-2 xs:text-[37px] lg:text-[14px] items-center mb-3 border border-y-white border-r-white border-l-[#00A19A] xs:rounded-r-full lg:rounded-r-full flex items-center'
            style={{boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'}}
            onClick={openOverlay}
          >
            Edit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 xs:w-10 xs:h-10 lg:w-4 lg:h-4" // Adjust the size and margin as needed
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Semi-transparent black backdrop
        {isOverlayOpen && (
          <div
            className="fixed top-[92px] left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] "
          // onClick={closeOverlay}
          ></div>
        )} */}


        {/* Overlay */}
        {isOverlayOpen && (
          <>
            <div className="relative" >

              {/* Semi-transparent black backdrop */}
              <div
                className="fixed xs:top-[160px] lg:top-[92px] left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] "
                onClick={closeOverlay}
                style={{ zIndex: 2 }}
              ></div>

              {/* Edit section */}
              <div className='xs:top-[160px] lg:top-[92px] xs:w-[100%] lg:w-[500px] h-auto bg-[#D3DDDC] overflow-y-scroll overlay shadow-xl'>

                <div className="flex justify-end mt-[2%]">
                  <button
                    className='fixed bg-[#00A19A] text-white font-medium xs:px-5 xs:py-3 lg:px-3 lg:py-2 xs:text-[37px] lg:text-[14px] items-center mb-3 border border-y-white border-l-white border-r-[#00A19A] xs:rounded-l-full lg:rounded-l-full flex items-center group'
                    onClick={closeOverlay}
                    style={{ zIndex: 1, boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px' }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 xs:w-10 xs:h-10 lg:w-4 lg:h-4" // Adjust the size and margin as needed
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 5l-7 7 7 7M8 5l-7 7 7 7"
                      />
                    </svg>
                    {/* <span className="xs:block lg:hidden group-hover:block transition-opacity duration-300"> */}
                    <span className="block transition-opacity duration-300">
                      <span className="block">Preview</span>
                    </span>
                  </button>
                </div>


                {/* logo */}
                <div className='xs:px-10 lg:px-2'>
                  <div className='xs:mt-10 lg:mt-0 p-4'>
                    <div className='justify-center items-center text-center my-2 bg-[#00A19A] shadow-md'>
                      <button
                        className='text-white text-center font-bold xs:px-8 xs:py-5 lg:px-5 lg:py-3 xs:text-[37px] lg:text-[17px] items-center'
                      >
                        <span>Edit Your Storefront</span>
                      </button>
                    </div>
                    <span className='xs:text-[24px] lg:text-[12px] text-[#ED5951]'>* Required fields.</span>

                    {/* <p className='font-bold'>Logo Image</p>
                    <label htmlFor="dropzone-file">
                    <div className='w-full border border-[#A0A0A0] border-dashed text-center justify-center items-center pt-5 h-30'>
                      {/* Conditional rendering */}
                    {/* {(logoImagePath || logoImage) ? (
                        <div className="relative">
                          <button
                            className="absolute top-2 right-2 p-1 bg-[#808080] rounded-full text-white"
                            style={{
                              padding: 0,
                              borderRadius: '50%',
                              width: '25px',
                              height: '25px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                            onClick={() => handleImageRemove(['logoImagePath', 'logoImage'])}
                          >
                            X
                          </button>

                          <img
                            src={logoImage ? URL.createObjectURL(logoImage) : logoImagePath}
                            alt="Logo"
                            className="max-w-full max-h-full m-auto"
                            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                          />
                        </div>
                      ) : (
                        <div className='overflow-hidden relative'>
                          <button
                            className='bg-[#00A19A] text-white text-center font-medium px-5 py-1 rounded-lg text-[10px] items-center mb-3'
                            onClick={() => document.getElementById('logoImageInput').click()} // Trigger the input click

                          >
                            {/* <span>Select Image</span> */}
                    {/* <span>{logoImagePath ? 'Change Image' : 'Select Image'}</span>
                          </button>
                          <p className='text-center'>File should be .jpeg or.png</p>
                          <input
                            id="logoImageInput"
                            type="file"
                            className="hidden"
                            name="logoImage"
                            onChange={handleLogoImageChange}
                          />
                        </div>
                      )}
                    </div>  */}
                    {/* </label> */}

                  </div>


                  {/* header */}
                  <div className='p-4'>
                    <p className='font-bold mb-3 xs:text-[30px] lg:text-[14px]'>Header Image</p>
                    <label for="dropzone-file" >
                      <div className='w-full border border-[#A0A0A0] border-dashed text-center justify-center items-center  h-30'>
                        {/* Conditional rendering */}
                        {(headerImagePath || headerImage) ? (
                          <div className="relative">
                            <button
                              className="absolute top-2 right-2 p-1 bg-[#808080] rounded-full text-white xs:w-[70px] lg:w-[25px] xs:h-[70px] lg:h-[25px] xs:text-[37px] lg:text-[14px] shadow-3xl font-medium"
                              style={{
                                padding: 0,
                                borderRadius: '50%',
                                // width: '25px',
                                // height: '25px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                              onClick={() => handleImageRemove(['headerImagePath', 'headerImage'])}
                            >
                              X
                            </button>

                            <img
                              src={headerImage ? URL.createObjectURL(headerImage) : headerImagePath}
                              alt="Header"
                              className="max-w-full max-h-full m-auto"
                              style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                            />
                          </div>
                        ) : (

                          <div className='overflow-hidden relative xs:px-7 xs:py-5 lg:px-5 lg:py-1'>
                            <button
                              className='bg-[#00A19A] text-white text-center font-medium xs:px-7 xs:py-3 lg:px-5 lg:py-1 rounded-lg xs:text-[26px] lg:text-[10px] items-center xs:mb-10 lg:mb-3'
                              onClick={() => document.getElementById('headerImageInput').click()} // Trigger the input click
                              style={{ marginTop: '20px' }}
                            >
                              {/* <span>Select Image</span> */}
                              <span>{headerImagePath ? 'Change Image' : 'Select Image'}</span>
                            </button>

                            <p className='text-center xs:text-[30px] lg:text-[14px]'>File should be .jpeg/.png and less than 1 Mb</p>
                            <input
                              id="headerImageInput"
                              type="file"
                              className="hidden"
                              onChange={handleHeaderImageChange}
                            />

                          </div>

                        )}

                      </div>


                    </label>

                  </div>


                  {/* profile */}
                  <div className='p-4'>
                    <p className='font-bold mb-3 xs:text-[30px] lg:text-[14px]'>Profile Image</p>
                    <label for="dropzone-file">

                      <div className='w-full border border-[#A0A0A0] border-dashed text-center justify-center items-center h-30'>
                        {/* Conditional rendering */}
                        {(profileImagePath || profileImage) ? (
                          <div className="relative">
                            <button
                              className="absolute top-2 right-2 p-1 bg-[#808080] rounded-full text-white xs:w-[70px] lg:w-[25px] xs:h-[70px] lg:h-[25px] xs:text-[37px] lg:text-[14px] shadow-3xl font-medium"
                              style={{
                                padding: 0,
                                borderRadius: '50%',
                                // width: '25px',
                                // height: '25px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                              onClick={() => handleImageRemove(['profileImagePath', 'profileImage'])}
                            >
                              X
                            </button>

                            <img
                              src={profileImage ? URL.createObjectURL(profileImage) : profileImagePath}
                              alt="Profile"
                              className="max-w-full max-h-full m-auto"
                              style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                            />
                          </div>
                        ) : (
                          <div className='overflow-hidden relative xs:px-7 xs:py-5 lg:px-5 lg:py-1'>
                            <button
                              className='bg-[#00A19A] text-white text-center font-medium xs:px-7 xs:py-3 lg:px-5 lg:py-1 rounded-lg xs:text-[26px] lg:text-[10px] items-center xs:mb-10 lg:mb-3'
                              onClick={() => document.getElementById('profileImageInput').click()} // Trigger the input click
                              style={{ marginTop: '20px' }}
                            >
                              {/* <span>Select Image</span> */}
                              <span>{profileImagePath ? 'Change Image' : 'Select Image'}</span>
                            </button>

                            <p className='text-center xs:text-[30px] lg:text-[14px]'>File should be .jpeg/.png and less than 1 Mb</p>
                            <input
                              id="profileImageInput"
                              type="file"
                              className="hidden"
                              onChange={handleProfileImageChange}
                            />
                          </div>
                        )}
                      </div>
                    </label>
                  </div>

                  {/* profile setting */}
                  <div className='p-4'>
                    <p className='font-bold xs:text-[30px] lg:text-[14px] xs:mt-16 lg:mt-4'>Profile Setting Accounts:</p>
                    <div className='mt-4'>
                      <span className='font-medium xs:text-[30px] lg:text-[14px]'>
                        Username <span className='text-[#ED5951]'>*</span>
                      </span>
                      <input
                        type='text'
                        placeholder='eg: user_nick'
                        className='input-field text-black xs:text-[28px] lg:text-[12px] xs:py-5 lg:py-1 w-full border-none shadow-md md:mt-2 lg:mt-1'
                        name='username'
                        value={profileData.username}
                        onChange={handleInputChange}
                      ></input>
                    </div>
                    <div className='xs:mt-8 lg:mt-4'>
                      <span className='font-medium xs:text-[30px] lg:text-[14px]'>Email Address</span>
                      <input
                        type='email'
                        placeholder='testing@gmail.com'
                        className='input-field text-black xs:text-[28px] lg:text-[12px] xs:py-5 lg:py-1 w-full border-none shadow-md md:mt-2 lg:mt-1'
                        name='email'
                        value={profileData.email}
                        onChange={handleInputChange}
                        disabled
                      ></input>
                    </div>
                  </div>


                  {/* details */}
                  <form>
                    <div className='p-4 xs:mt-16 lg:mt-4 '>
                      {/* <label for='name' className='font-bold xs:text-[30px] lg:text-[14px]'>Generate Your Bio:</label> */}
                      <label for='name' className='font-bold xs:text-[30px] lg:text-[14px]'>Bio:</label>
                      <div className="grid grid-cols-2 xs:text-[30px] lg:text-[14px] mt-4 bg-gray-100 border-2 border-gray-100 border-b-[#939191] ">
                        <text
                          className={`flex items-center border-2 ${activeSection === 'generate' ? 'border-gray-100 border-b-[#00A19A] text-[#00A19A]' : 'text-[#939191] border-none'}
                            p-2 md:py-8 lg:py-2 common-pointer font-medium`}
                          onClick={() => handleSectionClick('generate')}
                        >
                          GENERATE BIO
                        </text>
                        <text
                          className={`flex items-center border-2 ${activeSection === 'own' ? 'border-gray-100 border-b-[#00A19A] text-[#00A19A]' : 'text-[#939191] border-none'}
                            p-2 py-4 common-pointer font-medium`}
                          onClick={() => handleSectionClick('own')}
                        >
                          CREATE YOUR OWN BIO
                        </text>
                      </div>

                      <div className=' bg-gray-100 border border-none'>
                        {activeSection === 'generate' && (
                          <div className='p-5 md:px-10 lg:px-5'>
                            <div className='xs:mt-5 lg:mt-3'>
                              <label for='name' className='font-medium xs:text-[30px] lg:text-[14px]'>1. Enter your name</label>
                              <input
                                type='text'
                                id="name"
                                placeholder='Your Name'
                                className='input-field text-black xs:text-[28px] lg:text-[12px] xs:py-5 lg:py-1 w-full border shadow-md md:mt-2 lg:mt-1'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                              />
                            </div>
                            <div className='xs:mt-8 lg:mt-4'>
                              <label for='keywords' className='font-medium xs:text-[30px] lg:text-[14px]'>2. Enter keyword(s)</label>
                              <textarea
                                type='text'
                                id="keywords"
                                className='input-field text-black xs:text-[28px] lg:text-[12px] xs:py-5 lg:py-1 w-full xs:h-40 lg:h-20 border shadow-md md:mt-2 lg:mt-1'
                                placeholder='Add anything about yourself'
                                value={keywords}
                                onChange={(e) => setKeywords(e.target.value)}
                                required
                              ></textarea>
                            </div>
                            <div className='xs:mt-8 lg:mt-4'>
                              <label for='target-audience' className='font-medium xs:text-[30px] lg:text-[14px]'>3. Enter your targets audience</label>
                              <textarea
                                type='text'
                                id="targetAudience"
                                className='input-field text-black xs:text-[28px] lg:text-[12px] xs:py-5 lg:py-1 w-full xs:h-40 lg:h-20 border shadow-md md:mt-2 lg:mt-1'
                                placeholder='For example, they can be fans of travel, people shopping for sports gear.'
                                value={targetAudience}
                                onChange={(e) => setTargetAudience(e.target.value)}
                                required
                              ></textarea>
                            </div>
                            <div className='xs:mt-8 lg:mt-4'>
                              <label for='language' className='font-medium xs:text-[30px] lg:text-[14px]'>4. Select a language:</label>
                              <select
                                id='languages'
                                className='ml-5 xs:text-[28px] lg:text-[12px] xs:py-5 lg:py-1 items-left border shadow-md'
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                required
                              >
                                <option value=''>Select</option>
                                <option value='en'>English</option>
                                <option value='ms'>Malay</option>
                                <option value='zh-Hans'>Chinese Simplified</option>
                                <option value='zh-Hant'>Chinese Tradition</option>
                              </select>
                            </div>
                            <div className='xs:mt-12 lg:mt-6 justify-center items-center text-center'>
                              <button
                                className='bg-[#00A19A] text-white font-medium focus:text-white xs:px-7 xs:py-3 lg:px-5 lg:py-2 xs:rounded-2xl lg:rounded-lg xs:text-[30px] lg:text-[14px] items-center shadow-xl'
                                type='button'
                                onClick={generateProfileDescription}
                              >
                                <span>Generate</span>

                              </button>
                            </div>

                            {/* {isLoading && (
                            <div className="flex justify-center">
                              <LoadingSpinner />
                            </div>
                          )} */}
                          </div>
                        )}

                        {/* <textarea
                        type="text"
                        className="xs:h-[550px] lg:h-[200px]  lg:text-[14px] xs:text-[45px] text-justify xs:mt-5 lg:mt-2 w-full border-2 focus:border-gray-500 xs:mb-10 lg:mb-0"
                        placeholder='Tell your audience about youself'
                        style={{ lineHeight: '1.5' }} // You can adjust the line height value
                        // value={description}
                        // onChange={handleTextAreaChange}
                        name='description'
                        value={description && profileData.bio}
                        onChange={handleTextAreaChange}
                        /> */}
                        <div className='relative justify-center items-center text-center p-5 md:px-10 lg:px-5'>
                          {isLoading && (
                            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-[30%] md:mx-10 lg:mx-5 md:mt-10 lg:mt-5 md:mb-10 lg:mb-0 xs:h-[550px] lg:h-[200px] ">
                              <LoadingSpinner />
                            </div>
                          )}
                          <div className="md:py-5 lg:py-0">
                            <textarea
                              type="text"
                              className="input-field text-black xs:h-[550px] lg:h-[200px] lg:text-[12px] xs:text-[28px] text-justify w-full border-2 focus:border-gray-500 xs:mb-10 lg:mb-0 border shadow-md"
                              placeholder='Tell your audience about yourself'
                              style={{ lineHeight: '1.5' }}
                              name='description'
                              value={description && profileData.bio}
                              onChange={handleTextAreaChange}
                            />
                          </div>
                        </div>
                        {/* <div className='xs:mt-4 lg:mt-0'><span className='xs:text-[28px] lg:text-[12px] text-gray-500' >*Navigate to the 'Preview' view to review your Bio.</span></div> */}
                      </div>

                    </div>

                  </form>

                  {/* social media */}
                  <div className='p-4'>
                    <p className='font-bold xs:text-[30px] lg:text-[14px] xs:mt-16 lg:mt-4'>Connect Social Accounts (Optional):</p>
                    <div className='mt-4'>
                      <span className='font-medium xs:text-[30px] lg:text-[14px]'>Instagram</span>
                      <input
                        type='text'
                        placeholder='https://instagram.com/#####'
                        className='input-field text-black xs:text-[28px] lg:text-[12px] xs:py-5 lg:py-1 w-full border-none shadow-md md:mt-2 lg:mt-1'
                        name='instagram'
                        value={profileData.instagram}
                        onChange={handleInputChange}
                      ></input>
                    </div>
                    <div className='xs:mt-8 lg:mt-4'>
                      <span className='font-medium xs:text-[30px] lg:text-[14px]'>Tiktok</span>
                      <input
                        type='text'
                        placeholder='https://www.tiktok.com/#####'
                        className='input-field text-black  xs:text-[28px] lg:text-[12px] xs:py-5 lg:py-1 w-full border-none shadow-md md:mt-2 lg:mt-1'
                        name='tiktok'
                        value={profileData.tiktok}
                        onChange={handleInputChange}
                      ></input>
                    </div>
                    <div className='xs:mt-8 lg:mt-4'>
                      <span className='font-medium xs:text-[30px] lg:text-[14px]'>Twitter</span>
                      <input
                        type='text'
                        placeholder='https://x.com/######'
                        className='input-field text-black xs:text-[28px] lg:text-[12px] xs:py-5 lg:py-1 w-full border-none shadow-md md:mt-2 lg:mt-1'
                        name='twitter'
                        value={profileData.twitter}
                        onChange={handleInputChange}
                      ></input>
                    </div>
                    <div className='xs:mt-8 lg:mt-4'>
                      <span className='font-medium xs:text-[30px] lg:text-[14px]'>Facebook</span>
                      <input
                        type='text'
                        placeholder='https://www.facebook.com/######'
                        className='input-field text-black xs:text-[28px] lg:text-[12px] xs:py-5 lg:py-1 w-full border-none shadow-md md:mt-2 lg:mt-1'
                        name='facebook'
                        value={profileData.facebook}
                        onChange={handleInputChange}
                      ></input>
                    </div>
                    <div className='xs:mt-8 lg:mt-4'>
                      <span className='font-medium xs:text-[30px] lg:text-[14px]'>Youtube</span>
                      <input
                        type='text'
                        placeholder='https://youtube.com/channel/####'
                        className='input-field text-black xs:text-[28px] lg:text-[12px] xs:py-5 lg:py-1 w-full border-none shadow-md md:mt-2 lg:mt-1'
                        name='youtube'
                        value={profileData.youtube}
                        onChange={handleInputChange}
                      ></input>
                    </div>
                  </div>


                  <div className='xs:mt-20 lg:mt-10 justify-center items-center text-center mb-[20%]'>
                    <button
                      className='bg-[#00A19A] text-white font-medium xs:px-10 xs:py-5 lg:px-5 lg:py-2 xs:rounded-3xl lg:rounded-xl xs:text-[32px] lg:text-[14px] items-center shadow-xl'
                      onClick={() => {
                        // toggleModal();
                        clearErrorMessage();
                        handleSubmit();
                      }}
                    >
                      <span>Save</span>
                    </button>
                    {isLoading1 && (
                      <div className="flex justify-center mt-5">
                        <LoadingSpinner />
                      </div>
                    )}
                  </div>

                </div>



                {isModalOpen && (
                  <div
                    data-te-modal-init
                    className="fixed left-0 top-0 z-[1055] flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-70"
                  >
                    <div
                      data-te-modal-dialog-ref
                      className="xs:w-[700px] lg:w-[500px] w-full mx-4 bg-white rounded-md shadow-lg"
                    >
                      {/* Modal Content */}
                      <div className="p-4">
                        <h5 className="xs:text-[28px] lg:text-[18px] font-medium leading-normal text-gray-800">
                          Profile has been successfully updated </h5>
                        {/* Add your modal content here */}
                        <p className="xs:text-[24px] lg:text-[14px] text-gray-600">Go to
                          <a href="/influencer-creator" className="text-black font-bold"> My Storefront
                          </a>
                        </p>

                      </div>

                      {/* Modal Footer */}
                      <div className="flex justify-end p-4 bg-gray-100 rounded-b-md">
                        <button
                          type="button"
                          onClick={toggleModal}
                          className="mr-2 inline-block bg-[#00A19A] px-6 py-2 xs:text-[18px] lg:text-[12px] font-medium uppercase leading-normal text-white hover:text-white bg-white-300 rounded hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {isErrorOpen && (
                  <div
                    data-te-modal-init
                    className="fixed left-0 top-0 z-[1055] flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-70"
                  >
                    <div
                      data-te-modal-dialog-ref
                      className="xs:w-[700px] lg:w-[500px] w-full mx-4 bg-white rounded-md shadow-lg"
                    >
                      {/* Modal Content */}
                      <div className="p-4">
                        <h5 className="xs:text-[30px] lg:text-[20px] font-bold leading-normal text-gray-800">
                          ERROR
                        </h5>
                        <br></br>
                        <h5 className="xs:text-[28px] lg:text-[18px] font-medium leading-normal text-gray-800">
                          Oops, something went wrong.
                        </h5>
                        {/* Add your modal content here */}
                        {/* <p className="text-sm text-gray-600">Go to
                          <a href="/edit-creator" className="text-black font-bold"> My Storefront
                          </a>
                        </p> */}

                      </div>

                      {/* Modal Footer */}
                      <div className="flex justify-end p-4 bg-gray-100 rounded-b-md">
                        <button
                          type="button"
                          onClick={toggleError}
                          className="mr-2 inline-block bg-[#ED5951] px-6 py-2 xs:text-[18px] lg:text-[12px] font-medium uppercase leading-normal text-white hover:text-white bg-white-300 rounded hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </>

        )}


        <div className='w-full px-32 xs:px-0 lg:px-20 xs:mt-[70px] lg:mt-0' >
          {headerImageExists ? (
            <>
              <img
                src={headerImagePath ? headerImagePath : defaultHeaderImageUrl}
                className='object-cover h-10 lg:w-[1822px] xs:w-[1822px] lg:h-[320px] xs:h-[550px]'
                // style={{
                //   width: '1822px',
                //   height: '320px',
                //   objectFit: 'cover',
                // }}
                alt="header" />
              <div><hr className="border-b xs:border-gray-400 lg:xs:border-gray-300" /></div>
            </>
          ) : (
            <>
              <img
                // src={defaultHeaderImageUrl}
                src={headerImage ? URL.createObjectURL(headerImage) : defaultHeaderImageUrl}
                alt="Default Header"
                className="object-cover h-10  lg:w-[1822px] xs:w-[1822px] lg:h-[320px] xs:h-[550px]"
              // style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
              />
              <div><hr className="border-b xs:border-gray-400 lg:xs:border-gray-300" /></div>
            </>
          )}
          <div className='bg-white h-fit rounded-b-lg p-2 px-6'>
            <div className='image-container px-4 absolute xs:top-[360px] xs:left-[] sm:top-[400px] sm:left-[30px] lg:top-[291px] lg:left-[90px]'>
              {profileImageExists ? (
                <img
                  src={profileImagePath ? profileImagePath : defaultProfileImageUrl}
                  alt="Profile"
                  height='300px' width='300px'
                  style={{
                    objectFit: 'cover', // Maintain aspect ratio and cover the entire container
                  }}
                  className='rounded-full lg:items-start z-10 drop-shadow-lg lg:w-[250px] xs:w-[600px] lg:h-[250px] xs:h-[600px] xs:items-center xs:ml-[140px] lg:ml-0' />
              ) : (
                <img
                  // src={defaultProfileImageUrl}
                  src={profileImage ? URL.createObjectURL(profileImage) : defaultProfileImageUrl}
                  alt="Default Profile"
                  height='300px' width='300px'
                  style={{
                    objectFit: 'cover', // Maintain aspect ratio and cover the entire container
                  }}
                  className='rounded-full lg:items-start z-10 drop-shadow-lg lg:w-[250px] xs:w-[600px] lg:h-[250px] xs:h-[600px] xs:items-center xs:ml-[140px] lg:ml-0'
                />
              )}
              <div className='inline-flex pl-[60px] space-x-2 py-2 mt-4'>
              </div>
            </div>

            <div className='profile-description lg:pl-[300px] lg:text-left xs:text-center lg:pr-[45px] xs:px-6 py-2 w-[100%] text-gray-800 lg:mt-0 xs:mt-[240px]'>
              <p className='font-bold lg:text-[20px] xs:text-[70px] text-gray lg:mt-0 xs:mt-8'>
                {profileData.username ? profileData.username : 'username'}
              </p>
              <textarea
                type="text"
                className="xs:h-[550px] lg:h-[200px]  lg:text-[14px] xs:text-[45px] text-justify xs:mt-5 lg:mt-2 w-full border-1 focus:border-gray-100 xs:mb-10 lg:mb-0"
                placeholder='Tell your audience about youself'
                style={{ lineHeight: '1.5' }} // You can adjust the line height value
                // value={description}
                // onChange={handleTextAreaChange}
                name='description'
                value={description && profileData.bio}
                onChange={handleTextAreaChange}
                disabled

              />

            </div>
          </div>

          {/* <div className='bg-white mt-3 w-full h-fit rounded-lg max-w-[1640px] m-auto' >
            
            <App /> 

          </div> */}

          <div className='bg-white mt-3 w-full h-fit rounded-lg max-w-[1640px] m-auto mb-20' >

            <div className='xs:p-10 lg:p-5 justify-center xs:text-[32px] lg:text-[14px] text-center' style={{ cursor: 'default' }}>
              <span>
                See the Full Storefront in&nbsp;
              </span>
              <a href='/influencer-creator' className='text-[#00A19A] font-bold hover:underline'>Storefront</a>
            </div>

          </div>

          {!isOverlayOpen && (
            <div className="fixed bottom-8 left-1/2">
              <button
                className="md:px-8 lg:px-4 md:py-4 lg:py-2 bg-[#00A19A] font-medium md:text-[32px] lg:text-[14px] text-[#FFFFFF] rounded-full hover:bg-[#939191]"
                style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
                transform: "translateX(-50%)"}}
                onClick={() => {
                  // toggleModal();
                  clearErrorMessage();
                  handleSubmit();
                  setOverlayOpen(true);
                }}
              >
                Save Changes
              </button>
            </div>
          )}


        </div>
      </div>
    </div>
  )
}

export default EditCreator;

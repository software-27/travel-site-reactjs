import React, { useState, useEffect } from 'react'
import { Text, Input, Img, Button, Line, Row, Column } from "components";
import { FaTimes } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchData } from "redux/actions";
import { useLocation } from 'react-router-dom';
import ReactDOM from "react-dom";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { ToastContainer, toast } from 'react-toastify';
import "./LoadingSpinner6.css";
import Compressor from '@xkeshi/image-compressor';



const ContentSettingPublish = ({
  showContentSetting,
  itineraryId,
  closePopup3,
  title,
  description,
  days,
  attractions,
  interests,
  image,
  fetchTravel,
  showAlertMessage
}) => {

  const url = `https://halaltravel.ai/hv/api/chatgpt/user/itinerary/coverimage${image}`;
  const [isLoading, setIsLoading] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const userId = localStorage.getItem("userId");
  const [cover_image, setCoverImage] = useState('');
  const [coverImagePath, setCoverImagePath] = useState(url);
  const [characterCount, setCharacterCount] = useState(0);
  // console.log("Itinerary Id KKKKKK : ", itineraryId);
  const [request_itinerary, setRequestItinerary] = useState({
    title: title,
    description: description,
    user_itinerary_id: itineraryId,
    attractions: attractions,
    interests: interests,
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isLoadingg, setIsLoadingg] = useState(false);


  // handle toggle button
  const handleToggle = () => {
    setIsPublished(!isPublished);
    // Add any other logic you need when the button is toggled
  };

  // handle confirm and apply changes button
  const handleSaveButtonClick = async () => {
    setIsLoading(true);
    setIsLoadingg(true);
    const apiUrl = 'https://halaltravel.ai/hv/api/chatgpt/user/itinerary/edit';

    const formData = new FormData();
    // formData.append('cover_image', cover_image);
    // formData.append('cover_image', cover_image || image);
    if (cover_image) {
      formData.append('cover_image', cover_image);
    }
    else {
      formData.append('cover_image', new File([], image));
    }

    const json = JSON.stringify(request_itinerary);
    const blob = new Blob([json], {
      type: 'application/json'
    });

    formData.append('request_itinerary', blob);

    const token = localStorage.getItem("token");
    console.log("Token:", token);

    console.error('cover_image:', cover_image);

    try {
      // setIsLoadingg(true);
      const response = await axios.put(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        console.log('Itinerary saved successfully:', formData);

        // Extract the itineraryId from the response
        const itineraryId = request_itinerary.user_itinerary_id;

        // Second API call to update status
        const updateStatusResponse = await axios.post('https://halaltravel.ai/hv/api/chatgpt/user/itinerary/updatestatus', {
          userId: userId,
          itineraryId: itineraryId,
          status: 'PUBLISHED',
        });

        if (updateStatusResponse.status === 200) {
          console.log('API call to update status successful');
          await fetchTravel(userId);
          closePopup3();
          // setShowSuccessModal(true);
          // setShowAlert(true);
          showAlertMessage('success');

        } else {
          //  setIsLoadingg(true);
          console.error('API call to update status failed');
        }

      } else {
        console.error('Error saving itinerary:', response.data.message);
        // setIsLoadingg(false);
      }

      console.log('API Response:', response.data);
      console.log('Itinerary saved successfully:', formData);

    } catch (error) {
      closePopup3();
      showAlertMessage('error');

      console.error('Error save itinerary:', error);
      console.error('API Response Title:', request_itinerary.title);
      console.error('API Response description:', request_itinerary.description);
      console.error('API Response Itinerary id:', request_itinerary.user_itinerary_id);
      console.error('Days saved:', request_itinerary.day);
      console.error('API Response User id:', userId);
      console.error('API Response Cover Image:', cover_image);
    } finally {
      setIsLoading(false); // Set loading state to false regardless of success or failure
      setIsLoadingg(false);
    }
  };

  const renderSuccessModal = () => {
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>Settings Updated</h2>
          <p>Successfully updated guide settings!</p>
          <button onClick={() => setShowSuccessModal(false)}>Close</button>
        </div>
      </div>
    );
  };

  // const handlecover_imageChange = (event) => {
  //   // const file = event.target.files[0];
  //   // console.log('New Cover Image:', file);
  //   // setCoverImage(file);
  //   const selectedFile = event.target.files[0];

  //   if (selectedFile) {
  //     const fileType = selectedFile.type;
  //     const fileSizeInBytes = selectedFile.size;
  //     const fileSizeInKB = fileSizeInBytes / 1024; // File size in KB

  //     const allowedTypes = ['image/jpeg', 'image/png']; // Allowed image types
  //     const maxSizeKB = 1024; // Maximum file size in KB (1 MB)

  //     if (allowedTypes.includes(fileType)) {
  //       if (fileSizeInKB > maxSizeKB) {

  //         // Clear the input value to allow selecting the same file again
  //         event.target.value = null;

  //         toast.error("Image file size exceeds 1 MB.", {
  //           autoClose: 2000,
  //           position: 'top-right',
  //           closeButton: false,
  //           className: "xs:top-40 lg:top-20 toast-message",
  //         });

  //       } else {
  //         console.log(`File type: ${fileType}`);
  //         console.log(`File size: ${fileSizeInKB} KB`);
  //         // File type and size are both valid; you can proceed with further actions

  //         setCoverImage(selectedFile);
  //       }
  //     } else {
  //       // Clear the input value to allow selecting the same file again
  //       event.target.value = null;

  //       toast.error("Invalid file type. Please select a valid image file.", {
  //         autoClose: 2000,
  //         position: 'top-right',
  //         closeButton: false,
  //         className: "xs:top-40 lg:top-20 toast-message",
  //       });
  //     }
  //   }
  // };

  // handle cover_image change with compression
  const handlecover_imageChange = async (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      try {
        const compressedFile = await compressImage(selectedFile);
        setCoverImage(compressedFile);
        setCoverImagePath(URL.createObjectURL(compressedFile));
      } catch (error) {
        console.error('Error compressing image:', error);
      }
    }
  };

  const compressImage = async (file) => {
    return new Promise(async (resolve, reject) => {
      const originalSize = file.size / 1024; // Convert size to kilobytes

      // Check if the original image size is greater than 1000 KB
      if (originalSize > 1000) {
        try {
          let compressedFile;
          let compressedSize;

          // Iterate with different quality settings until the size is below 1000 KB
          for (let quality = 0.8; quality >= 0.1; quality -= 0.1) {
            compressedFile = await new Promise((resolve, reject) => {
              new Compressor(file, {
                quality: quality,
                success(result) {
                  resolve(result);
                },
                error(error) {
                  reject(error);
                },
              });
            });

            compressedSize = compressedFile.size / 1024; // Convert size to kilobytes

            if (compressedSize <= 1000) {
              break; // Exit the loop if the size is below or equal to 1000 KB
            }
          }

          console.log(`Original Size: ${originalSize.toFixed(2)} KB`);
          console.log(`Compressed Size: ${compressedSize.toFixed(2)} KB`);

          resolve(compressedFile);
        } catch (error) {
          reject(error);
        }
      } else {
        console.log(`Image size is not greater than 1000 KB. No compression needed.`);
        resolve(file);
      }
    });
  };

  const handleImageRemove = (imageTypes) => {
    imageTypes.forEach((imageType) => {
      switch (imageType) {
        case 'cover_image':
          console.log('Removing Cover Image');
          setCoverImage(null);
          break;
        default:
          break;
      }
    });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setRequestItinerary({
      ...request_itinerary,
      [name]: value,
    });
    if (request_itinerary.description.length <= 199) {
      setCharacterCount(request_itinerary.description.length);
    }
  };

  // handle removing the cover image
  const handleRemoveCoverImage = () => {
    setCoverImage('');
  };

  // const handleHeaderImageChange = (event) => {
  //   const selectedFile = event.target.files[0];

  //   if (selectedFile) {
  //     const fileType = selectedFile.type;
  //     const fileSizeInBytes = selectedFile.size;
  //     const fileSizeInKB = fileSizeInBytes / 1024; // File size in KB

  //     const allowedTypes = ['image/jpeg', 'image/png']; // Allowed image types
  //     const maxSizeKB = 1024; // Maximum file size in KB (1 MB)

  //     if (allowedTypes.includes(fileType)) {
  //       if (fileSizeInKB > maxSizeKB) {

  //         // Clear the input value to allow selecting the same file again
  //         event.target.value = null;

  //         toast.error("Image file size exceeds 1 MB.", {
  //           autoClose: 2000,
  //           position: 'top-right',
  //           closeButton: false,
  //           className: "xs:top-40 lg:top-20 toast-message",
  //         });

  //       } else {
  //         console.log(`File type: ${fileType}`);
  //         console.log(`File size: ${fileSizeInKB} KB`);
  //         // File type and size are both valid; you can proceed with further actions

  //         setHeaderImage(selectedFile);
  //       }
  //     } else {
  //       // Clear the input value to allow selecting the same file again
  //       event.target.value = null;

  //       toast.error("Invalid file type. Please select a valid image file.", {
  //         autoClose: 2000,
  //         position: 'top-right',
  //         closeButton: false,
  //         className: "xs:top-40 lg:top-20 toast-message",
  //       });
  //     }
  //   }

  // };


  return (
    <>
      {showContentSetting ? (
        <>
          <div className="font-montserrat bg-gray-50 xs:top-40 lg:top-0 rounded-3xl cursor-pointer justify-center shadow-3xl items-center lg:mx-[400px] lg:my-[20px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            {/*Content title*/}

            <Column className="sm:py-[50px] sm:w-[100%] sm:h-[100%] lg:py-[10px] lg:w-[100%] lg:h-fit">
              <div className=' flex mx-[60px] items-center'>
                <Text className="w-[100%] text-start py-[20px] sm:text-[37px] lg:text-xl text-[#00A19A] font-medium">
                  Content Setting
                </Text>
                <button className="text-end items-end justify-end">
                  <FaTimes
                    className="sm:h-10 sm:w-10 lg:h-5 lg:w-5 text-black common-pointer"
                    // onClick={() => setShowContentSetting(false)}
                    onClick={closePopup3}
                  />
                </button>
              </div>

              <hr className='mb-3'></hr>
              {/*Content*/}
              <div className='m-2'>
                <div className="mt-4 mx-[60px]">
                  <label for='title' className='text-[#00A19A] font-medium sm:text-[28px] lg:text-[14px]'>Title</label>
                  <input
                    className="placeholder-[#9A9A9A] rounded bg-white border border-[#D3D3D3] text-gray-900 sm:text-[26px] lg:text-xs block sm:h-24 lg:h-9 w-[100%]"
                    type="text"
                    size="smSrc"
                    required
                    placeholder="Name your itinerary"
                    title="E.g. 2 Days to Manila"
                    name='title'
                    value={request_itinerary.title}
                    onChange={handleInputChange}

                  ></input>
                </div>

                <div className="mt-4 mx-[60px] ">
                  <label for='desc' className='text-[#00A19A] font-medium sm:text-[28px] lg:text-[14px]'>Description</label>
                  <textarea
                    className="placeholder-[#9A9A9A] rounded bg-white border border-[#D3D3D3] text-gray-900 sm:text-[26px] lg:text-xs block sm:h-40 lg:h-20 w-[100%]"
                    type="text"
                    size="smSrc"
                    required
                    placeholder="What’s this itinerary guide? (optional)"
                    name='description'
                    value={request_itinerary.description.substring(0, 200)}
                    onChange={handleInputChange}

                  // title="E.g. "
                  ></textarea>
                  <div className="">
                    <text className="flex justify-end sm:text-[26px] lg:text-xs">
                      {request_itinerary.description ? request_itinerary.description.length : 0}/200 max characters
                    </text>
                  </div>
                </div>
                <div className="mt-4 mx-[60px] ">

                  <label for='dropzone_cover_img' className='text-[#00A19A] font-medium sm:text-[28px] lg:text-[14px]'>Insert Cover Image
                    {/* insert cover_image */}

                    <div className='w-full border border-[#D3D3D3] rounded-sm border-dashed text-center justify-center items-center h-35'>
                      <div className="relative flex items-center justify-center">
                        <div className="overflow-hidden relative">
                          {(cover_image || coverImagePath) && !coverImagePath.includes("/0/no_image.png") && (
                            <button
                              className="absolute top-3 right-3 p-1 bg-[#808080] rounded-full text-white"
                              style={{
                                padding: 0,
                                borderRadius: '50%',
                                width: '25px',
                                height: '25px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                              onClick={() => {
                                handleImageRemove(['cover_image']);
                                setCoverImagePath('');
                                setCoverImage(null); // Clear the cover_image state
                              }}
                              title='Remove Image'

                            >
                              X
                            </button>
                          )}

                          {(!cover_image && !coverImagePath) || (coverImagePath && coverImagePath.includes("/0/no_image.png")) ? (
                            <div>
                              <p className="text-center text-[#9A9A9A] sm:text-[28px] lg:text-[14px] font-normal mt-5">
                                Add cover image
                              </p>
                              <label
                                htmlFor="coverImg"
                                className="bg-[#EDEDED] inline-flex items-center justify-center font-medium sm:w-[40px] sm:h-[40px] lg:w-[22px] lg:h-[22px] rounded-full mb-3"
                              >
                                <AiOutlinePlus className="lg:h-[22px] lg:w-[22px] sm:h-[38px] sm:w-[38px] text-center text-[#00A19A]" />
                                <input
                                  id="coverImg"
                                  type="file"
                                  className="hidden"
                                  name="cover_image"
                                  onChange={handlecover_imageChange}
                                />
                              </label>
                            </div>

                          ) : (
                            <img
                              src={coverImagePath || URL.createObjectURL(cover_image)}
                              alt="Selected Cover"
                              className="w-569 h-379"
                              name="cover_image"
                            />
                          )}
                        </div>
                      </div>


                    </div>

                  </label>

                </div>

                {/* Display Interests */}
                <div className="mt-4 mx-[60px]">
                  <label className='text-[#00A19A] font-medium sm:text-[28px] lg:text-[14px]'>Interests</label>
                  <div className='flex space-x-2'>
                    {interests && interests.length > 0 ? (
                      interests.map((interest, index) => (
                        <span key={index} className='bg-[#EDEDED] px-2 py-1 text-sm rounded'>
                          {interest}
                        </span>
                      ))
                    ) : (
                      <p>No interests selected</p>
                    )}
                  </div>
                </div>

                <div className='mt-8 text-center'>
                  <button className='rounded-lg px-2 py-2 bg-[#00A19A] sm:h-20 lg:h-9 text-white sm:text-[28px] lg:text-[14px]'
                    onClick={handleSaveButtonClick}
                    disabled={isLoading}

                  >
                    {isLoadingg && (
                      <div className="loader-container6">
                        <div className="loader"></div>
                        <p className="loading-text">loading...</p>
                      </div>
                    )}
                    Confirm and apply changes</button>
                </div>

              </div>

            </Column>
          </div>

          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        ""
      )}

      <div>
        {showAlert && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — <strong>check it out!</strong>
          </Alert>
        )}

        {showAlert && (
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert — <strong>check it out!</strong>
          </Alert>
        )}

        {showAlert && (
          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            This is an info alert — <strong>check it out!</strong>
          </Alert>
        )}

        {showAlert && (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success alert — <strong>check it out!</strong>
          </Alert>
        )}
      </div>


    </>
  );
};

export default ContentSettingPublish
import React, { useEffect, useState } from 'react'
import { Text, Input, Img, Button, Line, Row, Column } from "components";
import { FaTimes } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchData } from "redux/actions";
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./UpdateBlog.css";
import Compressor from '@xkeshi/image-compressor';

const UpdateBlog = ({ title, editorText, showContentSetting, openPopup3, closePopup3, headerImagePath, blogId, summary }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingg, setIsLoadingg] = useState(false);
    const [isPublished, setIsPublished] = useState(false);
    const userId = localStorage.getItem("userId");
    const [blogHeader, setBlogHeader] = useState();
    const [blogHeaderPath, setBlogHeaderPath] = useState(headerImagePath);
    const [characterCount, setCharacterCount] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isErrorOpen, setErrorOpen] = useState(false);
    const [isAuthErrorOpen, setAuthErrorOpen] = useState(false);
    const [blogData, setBlogData] = useState({
        title: title,
        blog: editorText,
        summary: summary,
    });

    // console.log("HEADER 2:", headerImagePath);

    useEffect(() => {
        setBlogData({ title: title, blog: editorText, summary: summary, });
        setBlogHeaderPath(headerImagePath);
    }, [title, editorText, summary, headerImagePath]);

    useEffect(() => {
        if (summary) {
            setCharacterCount(summary.length);
        }
    }, [summary]);
    //     setRequestItinerary((prevRequest) => ({
    //       ...prevRequest,
    //       chatgpt_id: chatgptId,
    //     }));
    //   }, [chatgptId]);

    //   console.log("Selected Interest Content Setting: ", message);
    //   console.log("req: ", request_itinerary);
    // const receivedData1 = {
    //   days: receivedData.days,
    // };

    // console.log("Received Days on Content Setting: " + receivedData.days);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const toggleError = () => {
        setErrorOpen(!isErrorOpen);
    };

    const toggleAuthError = () => {
        setAuthErrorOpen(!isAuthErrorOpen);
    };


    // handle confirm and apply changes button
    const handleSaveButtonClick = async () => {
        // setIsLoading(true);
        setIsLoadingg(true);

        localStorage.removeItem('EditblogTitle');
        localStorage.removeItem('EditblogContent');

        const apiUrl = `https://halaltravel.ai/ht/api/blog/update/${blogId}`;
        const token = localStorage.getItem("token");
        const formData = new FormData();

        if (!editorText) {
            toast.error('Content cannot be empty. Please add content before publishing.', {
                position: 'top-center',
                autoClose: 5000,
            });
            setIsLoading(false);
            setIsLoadingg(false);
            return;
        }

        if (!blogHeader && !blogHeaderPath) {
            toast.error('Header image cannot be empty. Please upload a header image before publishing.', {
                position: 'top-center',
                autoClose: 5000,
            });
            setIsLoading(false);
            setIsLoadingg(false);
            return;
        }

        if (blogHeader) {
            formData.append('blogHeader', blogHeader);
        }

        if (!blogData.title) {
            toast.error('Title cannot be empty. Please input title before publishing.', {
                position: 'top-center',
                autoClose: 5000,
            });
            setIsLoading(false);
            setIsLoadingg(false);
            return;
        }

        if (!blogData.summary) {
            toast.error('Summary cannot be empty. Please input summary before publishing.', {
                position: 'top-center',
                autoClose: 5000,
            });
            setIsLoading(false);
            setIsLoadingg(false);
            return;
        }

        const json = JSON.stringify(blogData);
        const blob = new Blob([json], {
            type: 'application/json'
        });

        formData.append('blogHeader', blogHeader);
        formData.append('blogData', blob);

        console.log("REQUEST", blogData);
        console.log("REQUEST IMAGE", blogHeader);

        try {

            const response = await axios.patch(apiUrl, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('formData:', formData);
            console.log('Blog update successfully:', formData);
            closePopup3();
            toggleModal();
            // toast.success('Succesfully created blog', {
            //     autoClose: 1500,
            //     position: 'bottom-center',
            //     closeButton: false,
            // });

        } catch (error) {
            if (error.response && error.response.status === 401) {
                toggleAuthError();
                console.error("Unauthorized access. Error post blog:", error);
            } else {
                toggleError();
                console.error("Error post blog 1:", error);
            }
            console.error('Error post blog:', error.response);

        } finally {
            setIsLoading(false);
            setIsLoadingg(false); // Set loading state to false regardless of success or failure
        }
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

    const handlecover_imageChange = async (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            try {
                const compressedFile = await compressImage(selectedFile);
                setBlogHeader(compressedFile);
                setBlogHeaderPath(URL.createObjectURL(compressedFile));
            } catch (error) {
                toast.error('Error compressing image', {
                    position: 'top-center',
                    autoClose: 5000,
                });
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
                case 'blogHeader':
                    console.log('Removing Blog Header');
                    setBlogHeader(null);
                    break;
                default:
                    break;
            }
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBlogData({
            ...blogData,
            [name]: value,
        });
        if (name === 'summary' && value.length <= 200) {
            setCharacterCount(value.length);
        }
    };

    const handleTitleChange = (e) => {
        const { name, value } = e.target;
        setBlogData({
            ...blogData,
            [name]: value,
        })
    };
    return (
        <>
            {showContentSetting ? (
                <>
                    <div className="font-montserrat bg-gray-50 xs:top-40 lg:top-20 rounded-3xl cursor-pointer justify-center shadow-3xl items-center lg:mx-[400px] lg:my-[20px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        {/*Content title*/}

                        <Column className="sm:py-[50px] sm:w-[100%] sm:h-[100%] lg:py-[10px] lg:w-[100%] lg:h-fit">
                            <div className='flex mx-[60px] items-center'>
                                <Text className="w-[100%] text-start py-[20px] sm:text-[37px] lg:text-xl text-[#00A19A] font-medium">
                                    Create Your Blog Post
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
                                        value={blogData.title}
                                        placeholder="Name your blog title"
                                        title="E.g. 2 Days to Manila"
                                        name='title'
                                        // value={request_itinerary.title}
                                        onChange={handleTitleChange}

                                    ></input>
                                </div>

                                <div className="mt-4 mx-[60px] ">
                                    <label for='desc' className='text-[#00A19A] font-medium sm:text-[28px] lg:text-[14px]'>Blog Summary
                                    </label>
                                    <textarea
                                        className="placeholder-[#9A9A9A] rounded bg-white border border-[#D3D3D3] text-gray-900 sm:text-[26px] lg:text-xs block sm:h-40 lg:h-20 w-[100%]"
                                        type="text"
                                        size="smSrc"
                                        required
                                        placeholder="The summary of this blog will be featured in the carousel display on the blog page."
                                        name="summary"
                                        value={blogData.summary}
                                        onChange={handleInputChange}
                                        maxLength={200}
                                    ></textarea>
                                    <div className="">
                                        <text className="flex justify-end sm:text-[26px] lg:text-xs">
                                            {characterCount}/200 max characters
                                        </text>
                                    </div>
                                </div>

                                <div className="mt-4 mx-[60px] ">

                                    <label for='dropzone_cover_img' className='text-[#00A19A] font-medium sm:text-[28px] lg:text-[14px]'>Insert Cover Image

                                        {/* insert cover_image */}

                                        <div className='w-full border border-[#D3D3D3] rounded-sm border-dashed text-center justify-center items-center h-35'>

                                            <div className="relative flex items-center justify-center">

                                                <div className='overflow-hidden relative'>
                                                    {(blogHeader || blogHeaderPath) && (
                                                        // <div className="relative flex items-center justify-center">
                                                        <button
                                                            title='Remove Image'
                                                            className="absolute top-3 right-5 p-1 bg-[#808080] rounded-full text-white"
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
                                                                handleImageRemove(['blogHeader']);
                                                                setBlogHeaderPath('');
                                                                setBlogHeader(null);
                                                            }}

                                                        >
                                                            X
                                                        </button>
                                                        // </div>
                                                    )}

                                                    {(!blogHeader && !blogHeaderPath) ? (
                                                        <div>
                                                            <p className='text-center text-[#9A9A9A] sm:text-[28px] lg:text-[14px] font-normal mt-5'>Add cover image</p>

                                                            <label
                                                                htmlFor="blogHeader"
                                                                className='bg-[#EDEDED] inline-flex items-center justify-center font-medium sm:w-[40px] sm:h-[40px] lg:w-[22px] lg:h-[22px] rounded-full mb-3'
                                                            >
                                                                <AiOutlinePlus className='lg:h-[22px] lg:w-[22px] sm:h-[38px] sm:w-[38px] text-center text-[#00A19A]' />
                                                                <input
                                                                    id="blogHeader"
                                                                    type="file"
                                                                    className="hidden"
                                                                    name='blogHeader'
                                                                    onChange={handlecover_imageChange}
                                                                />
                                                            </label>

                                                        </div>

                                                    ) : (
                                                        <img
                                                            src={blogHeaderPath || URL.createObjectURL(blogHeader)}
                                                            alt="Selected Cover"
                                                            className="w-569 h-379"
                                                            name="blogHeader"
                                                        />
                                                    )}
                                                </div>

                                            </div>
                                        </div>
                                        <div>
                                            <span className='text-gray-400 sm:text-[26px] lg:text-xs'>Maximum upload image size: 1.5 MB</span>
                                        </div>
                                        <div>
                                            <span className='text-gray-400 sm:text-[26px] lg:text-xs'>
                                                Recommended size of image: 842 x 400 pixels</span>
                                        </div>
                                    </label>

                                </div>


                                <div className='mt-8 text-center'>
                                    <button className='rounded-lg px-2 py-2 bg-[#00A19A] sm:h-20 lg:h-9 text-white sm:text-[28px] lg:text-[14px]'
                                        onClick={handleSaveButtonClick}
                                        disabled={isLoading}
                                    >{isLoadingg && (
                                        <div className="loader-containerUpdateBlog">
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
                        <div className="text-center p-4 ">
                            <div className='p-2 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00A19A" class="w-12 h-12">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </div>
                            <h1 className="xs:text-[32px] lg:text-[22px] font-medium leading-normal text-gray-800">
                                Congratulation </h1>
                            <p className="xs:text-[24px] lg:text-[14px] text-gray-600">You have successfully updated the blog.
                            </p>
                            {/* <p className="xs:text-[24px] lg:text-[14px] text-gray-600">
                                Please proceed to the
                                <a href="/manage-content" className="text-black font-bold"> social posting</a>
                                <span> section to adjust the blog's status.</span>
                            </p> */}

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
                                An error has occurred. Please try again.
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

            {isAuthErrorOpen && (
                <div
                    data-te-modal-init
                    className="fixed left-0 top-0 z-[1055] flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-70"
                >
                    <div
                        data-te-modal-dialog-ref
                        className="xs:w-[700px] lg:w-[500px] w-full mx-4 bg-white rounded-md shadow-lg"
                    >
                        {/* Modal Content */}
                        <div className="p-4 item-center">
                            <h5 className="text-center xs:text-[30px] lg:text-[20px] font-bold leading-normal text-gray-800">
                                Error: Unauthorized
                            </h5>
                            <br></br>
                            <h5 className="text-center xs:text-[28px] lg:text-[18px] font-medium leading-normal text-gray-800">
                                An error has occurred due to an authentication issue. Please log in again.
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
                                onClick={toggleAuthError}
                                className="mr-2 inline-block bg-[#ED5951] px-6 py-2 xs:text-[18px] lg:text-[12px] font-medium uppercase leading-normal text-white hover:text-white bg-white-300 rounded hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default UpdateBlog
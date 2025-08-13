
import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { useAuth } from "AuthContext";
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";
import HeaderOTAMobile from 'components/Header/HeaderOTAMobile/index';
import axios from "axios";
import { data,fetchNewBlogData2, fetchBlogData } from 'data/data';
import { ButtonMp } from 'components/index';
import { Img } from 'components/index';
import { Row } from "components";
import "./message.css";

const ManageContent = () => {
    const navigate = useNavigate();
    const [nav, setNav] = useState(false);
    // const [nav1, setNav1] = useState(false);
    const { setIsLoggedIn } = useAuth();
    setIsLoggedIn(true);
    const toggleDropdown = () => {
        setNav((prevState) => !prevState); // Toggles the state between true and false
    };

    const [isPopup1Open, setIsPopup1Open] = useState(false);
    const [isPopup2Open, setIsPopup2Open] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [message, setMessage] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showUpdateSuccessMessage, setShowUpdateSuccessMessage] = useState(false);
    const [isErrorOpen, setErrorOpen] = useState(false);

    const toggleError = () => {
        setErrorOpen(!isErrorOpen);
    };

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

    // const toggleDropdown2 = () => {
    //     setNav1((prevState) => !prevState); // Toggles the state between true and false
    // };

    const formatDate = (dateString) => {
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };


    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    const userId = localStorage.getItem("userId");

    // Blog
    const [blogContent, setBlogContent] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState("");
    const [currentPageBlog, setCurrentPageBlog] = useState(1);
    const [totalPagesBlog, setTotalPagesBlog] = useState('');
    const pageSize = 8;
    // *Fetch Blog Data*
    // const fetchBlog = async () => {
    //     const pageSize = 8;
    //     try {
    //         const data = await fetchBlogData(userId, currentPageBlog, pageSize);
    //         if (data) {
    //             setBlogContent(data.blogContent);
    //             setTotalPagesBlog(data.totalPages)
    //         }
    //     } catch (error) {
    //         console.error('Error fetching blog data:', error);
    //     }
    // };

    // useEffect(() => {
    //     // fetchProduct();
    //     fetchBlog();
    // }, [currentPageBlog]);
    console.log("selectedStatus: ", selectedStatus);
    console.log("blogContent: 2", blogContent);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchNewBlogData2(userId, currentPageBlog, pageSize);
                if (data) {
                    setBlogContent(data.blogContent);
                    setTotalPagesBlog(data.totalPages);

                    // Update selectedStatus based on fetched data
                    const newSelectedStatus = {};
                    data.blogContent.forEach(blog => {
                        newSelectedStatus[blog.blogId] = blog.status; 
                    });
                    setSelectedStatus(newSelectedStatus);

                    if (currentPageBlog > data.totalPages) {
                        setCurrentPageBlog(data.totalPages || 1);
                    }
                }
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        };

        fetchData();
    }, [userId, currentPageBlog, pageSize]);



    const updateBlogStatus = async (blogId, newStatus) => {
        try {
            const response = await axios.patch(`https://halaltravel.ai/ht/api/blog/updateStatus/${blogId}`, {
                status: newStatus
            }, {
                headers: {
                    Authorization: `Bearer ${token}` // Make sure to use the correct token here
                }
            });
            if (response.status === 200) {
                console.log('Status updated successfully');
                setShowUpdateSuccessMessage(true)
            }
        } catch (error) {
            console.error('Error updating blog status:', error);
            // You may want to handle errors, such as displaying a message to the user
        }
    };

    // * PAGINATION *
    const handleArrowClick = (direction) => {
        if (direction === 'left' && currentPageBlog > 1) {
            setCurrentPageBlog(currentPageBlog - 1);
        } else if (direction === 'right' && currentPageBlog < totalPagesBlog) {
            setCurrentPageBlog(currentPageBlog + 1);
        }
    };

    const getPageButtonsRange = () => {
        const buttonsRange = [];
        const startPage = Math.max(currentPageBlog - 1, 1);
        // const endPage = Math.min(currentPageBlog + 1, Math.ceil(totalPagesBlog));
        const endPage = Math.min(currentPageBlog, Math.ceil(totalPagesBlog));

        for (let i = startPage; i <= endPage; i++) {
            buttonsRange.push(i);
        }

        return buttonsRange;
    };

    const handleStatusChange = async (blogId, newStatus) => {
        setSelectedStatus(prev => ({
            ...prev,
            [blogId]: newStatus
        }));
        await updateBlogStatus(blogId, newStatus);
    };

    const handleTitleClick = (blogId, blogTitle, userId) => {
        navigate(`/blog-display/${userId}/${blogId}/${blogTitle}`);
    }

    const handleDelete = (event) => {
        event.preventDefault();
        setShowConfirmation(true);
    };

    const handleDeleteClick = async (blogId) => {
        try {
            await axios.delete(
                `https://halaltravel.ai/ht/api/blog/delete/${blogId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("Deletion successful!");
            setShowSuccessMessage(true);
            const data = await fetchBlogData(userId, currentPageBlog, pageSize);
            if (data) {
                setBlogContent(data.blogContent);
                setTotalPagesBlog(data.totalPages);
                if (currentPageBlog > data.totalPages) {
                    setCurrentPageBlog(data.totalPages); // Update to the last available page
                }
            }

        } catch (error) {
            if (error.response && error.response.status === 401) {
                // Handle 401 Unauthorized error specifically
                toggleError(); // This could be your method to handle or display error messages
                console.error("Unauthorized access. Error deleting blog:", error);
            } else {
                // Handle other errors
                console.error("Error deleting blog:", error);
            }
        }
    };

    const confirmRemove = (blogId) => {
        handleDeleteClick(blogId);
        setShowConfirmation(false);

        setTimeout(() => {
            setMessage(false);
        }, 1000);
    };

    const cancelRemove = () => {
        setShowConfirmation(false);
    };

    const handleEditClick = (blogId, userId) => {
        navigate(`/blog/edit/${userId}/${blogId}`);
    }

    // Function to show the success message
    const showSuccess = () => {
        setShowSuccessMessage(true);
    };

    // Function to hide the success message
    const hideSuccess = () => {
        setShowSuccessMessage(false);
        setShowUpdateSuccessMessage(false);
    };

    return (
        <>
            {showSuccessMessage && (
                <div className="success-message1">
                    <div className="message-line">
                        Blog deleted
                        <button onClick={hideSuccess} className="close-button1">X</button>
                    </div>
                    <div className="message-line1">
                        Blog successfully deleted
                    </div>
                </div>
            )}

            {showUpdateSuccessMessage && (
                <div className="success-message1">
                    <div className="message-line">
                        Status updated
                        <button onClick={hideSuccess} className="close-button1">X</button>
                    </div>
                    <div className="message-line1">
                        Status updated successfully
                    </div>
                </div>
            )}

            <div className=' flex flex-col font-montserrat mx-auto w-full h-auto '>
                <div className='fixed w-full' style={{ zIndex: 2 }}>
                    <HeaderOTAAdmin openPopup1={openPopup1} className="fixed invisible lg:visible" />
                    <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
                    <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />
                    <HeaderOTAMobile openPopup1={openPopup1} className="visible fixed overflow-hidden lg:invisible lg:hidden" />
                </div>
                <div className='xs:p-[50px] lg:px-[200px] xs:pt-[160px] lg:pt-[92px]'>
                    <div className='mt-8 '>

                        <div class="overflow-x-auto shadow-md sm:rounded-lg">
                            <div class="flex items-center justify-between pb-4">
                                <label for="table-search" class="sr-only">Search</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="table-search" class="sm:text-[20px] lg:text-[14px] block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                                </div>
                                <div>
                                    <button
                                        id="dropdownRadioButton"
                                        data-dropdown-toggle="dropdownRadio"
                                        class=" inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                        type="button"
                                        onClick={toggleDropdown}>
                                        <svg class="w-3 h-3 sm:w-2.5 sm:h-2.5 text-gray-500 dark:text-gray-400 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                                        </svg>
                                        Last 30 days
                                        <svg class="w-3 h-3 sm:w-2.5 sm:h-2.5 ml-2.5 sm:ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    {/* <!-- Dropdown menu --> */}
                                    <div
                                        id="dropdownRadio"
                                        className={`z-10 font-normal w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${nav ? "" : "hidden"
                                            } absolute`}
                                    // class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" 
                                    >
                                        <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                                            <li>
                                                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                                    <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="filter-radio-example-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                                    <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="filter-radio-example-2" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 7 days</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                                    <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="filter-radio-example-3" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 30 days</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                                    <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="filter-radio-example-4" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last month</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                                    <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="filter-radio-example-5" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last year</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            {/* manage content  */}
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="sm:text-[20px] lg:text-[14px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            <span class="sr-only">Image</span>
                                        </th>
                                        <th scope="col" class=" px-6 py-3 text-center">
                                            Title/Caption
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-center">
                                            Type
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-center">
                                            Status
                                        </th>
                                        <th scope="col" class="px-6 sm:px-10 py-3 text-center">
                                            Date
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-center">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {Array.isArray(blogContent) ? (
                                        blogContent.map(record => (
                                            <tr key={record.blogId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover-bg-gray-600">

                                                {/* <td className="w-32 p-4">
                                                <img src={record.blogImage} alt={record.title} className="" />
                                            </td> */}
                                                <td className="w-32 p-4">
                                                    <img
                                                        className="w-full h-auto max-w-full sm:max-w-xs mx-auto"
                                                        src={record.blogImage}
                                                        alt={record.blogTitle}
                                                        style={{ width: '96px', height: '54px' }}
                                                    />
                                                </td>

                                                <td className="cursor-pointer px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                    onClick={() => handleTitleClick(record.blogId, record.blogTitle, userId)}
                                                >
                                                    <Row>
                                                        <p className="justify-center  w-fit sm:text-[22px] lg:text-[15px] text-black"
                                                            title={record.blogTitle}
                                                        >
                                                            {record.blogTitle.length > 50 ? record.blogTitle.substring(0, 50) + '...' : record.blogTitle}
                                                        </p>
                                                    </Row>
                                                </td>
                                                <td className="text-center px-6 py-4 sm:text-[20px] lg:text-[14px] ">Blog</td>
                                                <td className="item-center sm:text-[20px] lg:text-[14px] w-[15px]">
                                                    <select
                                                        value={selectedStatus[record.blogId]}
                                                        onChange={(e) => handleStatusChange(record.blogId, e.target.value)}
                                                        className="w-full md:text-[30px] py-1 px-2 lg:text-[12px] font-normal not-italic font-montserrat text-black text-slate_700"
                                                        aria-label={`Select status for ${record.blogTitle}`}
                                                    >
                                                        <option value="DRAFT">Draft</option>
                                                        <option value="PUBLISHED">Published</option>
                                                    </select>

                                                </td>
                                                <td className="text-center px-4 sm:px-2 py-4 sm:py-6 lg:px-2 lg:py-2 sm:text-[20px] lg:text-[14px]">{formatDate(record.dateCreated)}</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-4 sm:py-5 sm:px-5 lg:px-5 lg:py-2">
                                                        <AiFillEdit size={20} className="cursor-pointer sm:hidden lg:block"
                                                            title='Edit Blog'
                                                            onClick={() => handleEditClick(record.blogId, userId)} />
                                                        <AiFillEdit size={40} className="cursor-pointer sm:block lg:hidden"
                                                            title='Edit Blog'
                                                            onClick={() => handleEditClick(record.blogId, userId)} />
                                                        <AiFillDelete size={20} className="cursor-pointer text-[#c8102e] sm:hidden lg:block"
                                                            title='Delete Blog'
                                                            onClick={() => setShowConfirmation(record.blogId)} />
                                                        <AiFillDelete size={40} className="cursor-pointer text-[#c8102e] sm:block lg:hidden"
                                                            title='Delete Blog'
                                                            onClick={() => setShowConfirmation(record.blogId)} />
                                                    </div>

                                                    {showConfirmation === record.blogId && (
                                                        <>
                                                            <div className="sm:hidden lg:block">
                                                                <div className="block absolute right-0 text-md">
                                                                    <div className="bg-gray-100 border border-gray-300 shadow-2xl p-4 rounded">
                                                                        <p>Confirm delete blog?</p>
                                                                        <div className="mt-2 flex justify-center text-xs">
                                                                            <button
                                                                                className="px-4 py-2 mr-2 bg-red-600 text-white rounded hover:bg-red-500"
                                                                                onClick={() => confirmRemove(record.blogId)}
                                                                            >
                                                                                Confirm
                                                                            </button>
                                                                            <button
                                                                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                                                                                onClick={cancelRemove}
                                                                            >
                                                                                Cancel
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sm:block lg:hidden">
                                                                <div className="block absolute right-10 text-3xl ">
                                                                    <div className="bg-white border border-gray-300 shadow-2xl p-6 rounded-lg">
                                                                        <p>Confirm delete blog?</p>
                                                                        <div className="mt-5 flex justify-center text-2xl">
                                                                            <button
                                                                                className="px-7 py-4 mr-5 bg-red-600 text-white rounded-lg hover:bg-red-500"
                                                                                onClick={() => confirmRemove(record.blogId)}
                                                                            >
                                                                                Confirm
                                                                            </button>
                                                                            <button
                                                                                className="px-7 py-4 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                                                                                onClick={cancelRemove}
                                                                            >
                                                                                Cancel
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}


                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6">Loading...</td>
                                        </tr>
                                    )}

                                </tbody>

                            </table>

                            {message && (
                                <div className="absolute bg-green-400 shadow-lg text-white p-2 mt-10 right-7 rounded">
                                    Travel plan deleted
                                </div>
                            )}


                            {/* Blog pagination */}
                            {totalPagesBlog > 1 && ( // Add this conditional check
                                <div className="justify-center items-center mt-5">
                                    <div className="flex flex-row m-2 font-poppins common-pointer justify-center items-center">
                                        <Img
                                            className={`h-[13px] w-[15px] ${currentPageBlog > 1 ? 'common-pointer' : 'hidden'}`}
                                            src="images/img_arrowleftmp.svg"
                                            alt="arrowleft"
                                            onClick={() => handleArrowClick('left')}
                                        />
                                        {getPageButtonsRange().map((pageNumber) => (
                                            pageNumber < totalPagesBlog ? (
                                                <ButtonMp
                                                    key={pageNumber}
                                                    className={`shadow-lg flex h-[37px] w-[37px] common-pointer items-center justify-center ml-3 rounded-full text-center text-shadow-ts text-md tracking-[-0.30px]
                              ${currentPageBlog === pageNumber ? ' bg-cyan-700 text-white' : 'bg-white text-gray-700'}`}
                                                    size="txtPoppinsMedium20"
                                                    onClick={() => setCurrentPageBlog(pageNumber)}
                                                >
                                                    {pageNumber}
                                                </ButtonMp>
                                            ) : null
                                        ))}
                                        {currentPageBlog < totalPagesBlog - 1 && (
                                            <span className="text-gray-500 mx-2 font-bold">. . .</span>
                                        )}
                                        <ButtonMp
                                            className={`shadow-lg flex h-[37px] w-[37px] common-pointer items-center justify-center rounded-full text-center text-shadow-ts text-md tracking-[-0.30px]
                              ${currentPageBlog === totalPagesBlog ? ' bg-cyan-700 text-white ml-3' : 'bg-white text-gray-700'}
                              ${currentPageBlog === totalPagesBlog - 1 ? ' ml-3' : ''}`}
                                            size="txtPoppinsMedium20"
                                            onClick={() => setCurrentPageBlog(totalPagesBlog)}
                                        >
                                            {totalPagesBlog}
                                        </ButtonMp>
                                        <Img
                                            className={`h-[13px] w-[15px] ml-3 ${currentPageBlog < totalPagesBlog ? 'common-pointer' : 'hidden'}`}
                                            src="images/img_arrowright_gray_700_01.svg"
                                            alt="arrowright_One"
                                            onClick={() => handleArrowClick('right')}
                                        />
                                    </div>
                                </div>
                            )}

                        </div>


                    </div>
                </div>
            </div>

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
                                onClick={toggleError}
                                className="mr-2 inline-block bg-[#ED5951] px-6 py-2 xs:text-[18px] lg:text-[12px] font-medium uppercase leading-normal text-white hover:text-white bg-white-300 rounded hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ManageContent;
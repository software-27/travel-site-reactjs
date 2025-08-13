import React, { useState } from 'react'
import axios from 'axios';
import HeaderOTA from 'components/Header/HeaderOTA/index';
import { useNavigate } from '../../../../node_modules/react-router-dom/index';
import { MdOutlineDone } from 'react-icons/md';
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from 'components/LoadingSpinner/index';
import { useAuth } from 'AuthContext';
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";
import HeaderOTAMobile from 'components/Header/HeaderOTAMobile/index';
import { ToastContainer, toast } from 'react-toastify';

const BlogOutline = () => {
	const location = useLocation();
	const selectedTitle = location.state && location.state.selectedTitle;
	// State for editable blog title
	const [title, setTitle] = useState(selectedTitle || '');
	const [blogOutline, setBlogOutline] = useState('');
	//Generate Button
	const generateBlogOutline = async () => {

		console.log('[ blogTitle: ', title, ']')

		const language = localStorage.getItem('language');
		// Check if any of the required fields is empty
		if (!title) {
			toast.error('Title cannot be empty. Please input title before proceeding.', { position: 'top-center', autoClose: 5000 });
			setIsLoading(false);
			return; // Stop execution if title is missing
		}

		const payload = {
			title: title,
			language: language,
		};

		try {
			setIsLoading(true); // Show the loading spinner
			const response = await axios.post('https://halaltravel.ai/gpt/blog/parttwov2', payload);
			
			setIsLoading(false); // Hide the loading spinner after the API call is complete
			setBlogOutline(response.data);
			setContentVisible(true);
			// Store the generated blog outline in localStorage
			// localStorage.setItem('blogOutline', response.data);
			console.log("Blog Outline:" + "\n" + response.data);
		}

		catch (error) {
			console.error(error);
			setIsLoading(false); // Hide the loading spinner in case of an error
		}

	};
	//navigate button
	const navigate = useNavigate();
	function handleNavigate1() {
		// navigate("/review-generate")
		navigate("/review-generate", { state: { title: title, blogOutline: blogOutline } });

	}
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

	//for dropdown list
	const [isVisible, setIsVisible] = useState("");

	// State to control the visibility of the content
	const [isContentVisible, setContentVisible] = useState(false);

	//spinner
	const [isLoading, setIsLoading] = useState(false);

	//select
	const [selectedOption, setSelectedOption] = useState(null);

	const handleOptionSelect = (option) => {
		setSelectedOption(option);
	};

	const changeHandler = e => {
		const getshow = e.target.value;
		setIsVisible(getshow);
	}

	// Function to handle changes in the blog title
	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	// // Check for stored blogOutline in localStorage when the component mounts
	// useEffect(() => {
	// 	const storedBlogOutline = localStorage.getItem('blogOutline');
	// 	if (storedBlogOutline) {
	// 		setBlogOutline(storedBlogOutline);
	// 		setContentVisible(true); // Set the visibility state to true when there's a stored blog outline
	// 	}
	// }, []);

	const { setIsLoggedIn } = useAuth();
	setIsLoggedIn(true);

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

						<div class="flex-1 items-center">
							<div class="xs:w-20 lg:w-10 xs:h-20 lg:h-10 bg-[#38b000] items-center border-2 border-grey-light mx-auto rounded-full flex">
								<MdOutlineDone className='text-white xs:ml-4 lg:ml-2 xs:w-[40px] xs:h-[40px] lg:w-[20px] lg:h-[20px]' />
							</div>
						</div>


						<div class="w-3/4 align-center items-center align-middle content-center flex">
							<div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
								<div class="bg-blue-600 rounded leading-none py-1 text-center dark:bg-blue-500 w-[100%]"></div>
							</div>
						</div>


						<div class="flex-1">
							<div class="xs:w-20 lg:w-10 xs:h-20 lg:h-10 bg-gray-500 border-2 border-grey-light mx-auto rounded-full sm:text-[28px] lg:text-[18px] text-white flex items-center">
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

						<div class="w-2/4 text-gray-500">
							Step 2: Blog Outline
						</div>

						<div class="w-2/4 text-gray-500/50">
							Step 3: Review and Generate
						</div>
					</div>

					<div className='w-full items-center content-center sm:mt-8 lg:mt-4 lg:max-w-3xl sm:w-full'>
						<div className='border border-gray-200 rounded-sm shadow p-4 h-[fit] sm:w-full'>
							<text className='font-semibold sm:text-[37px] lg:text-[14px]'>Blog Outline</text>

							<div className='m-2 lg:mt-2 xs:mt-5 gap-4 items-center'>
								<div className='w-[100%]'>
									<span className='font-medium xs:text-[35px] lg:text-[14px]'>Blog Title:</span>
									<input
										type='text'
										className='px-2 py-1 xs:text-[30px] lg:text-[12px] w-full lg:h-10 xs:h-24 xs:rounded-[20px] lg:rounded-[5px] focus:border-blue-500'
										placeholder='Enter blog title...'
										value={title}
										onChange={handleTitleChange}
									/>
								</div>
							</div>

							<div>
								<div className='m-2 flex justify-end xs:mt-5 lg:mt-3'>
									<button className='bg-[#00A19A] text-white font-medium items-center xs:text-[35px] lg:text-[14px] lg:w-[15%] xs:w-[35%] xs:h-20 lg:h-10 text-white font-medium xs:rounded-[20px] lg:rounded-lg'
										onClick={() => {
											generateBlogOutline();
										}}
										value='yes'>Generate</button>
								</div>
								{/* Loading spinner will be rendered conditionally */}
								{isLoading && (
									<div className="flex justify-center"> {/* Center the spinner using flex */}
										<LoadingSpinner />
									</div>
								)}
								{isContentVisible && (
									<div className='m-2'>
										<span className='font-medium lg:text-[14px] sm:text-[28px] '>Results:</span>
										<div className='w-full rounded-lg border border-gray-500 bg-gray-200'>
											<div className='p-4 space-y-2'>
												<span className='lg:text-[12px] sm:text-[22px] font-bold'>Blog Outline</span>
												{/* <p className='text-justify'>{blogOutline}</p>
												 */}
												{blogOutline.split('\n').map((line, index) => (
													<p key={index} className='lg:text-[14px] sm:text-[28px] text-justify'>
														{line}</p>
												))}
											</div>
										</div>
										<div className='xs:mt-5 lg:mt-3 flex justify-end'>
											<button className='bg-[#00A19A] text-white font-medium items-center xs:text-[35px] lg:text-[14px] lg:w-[15%] xs:w-[35%] xs:h-20 lg:h-10 text-white font-medium xs:rounded-[20px] lg:rounded-lg'
												onClick={handleNavigate1}>Continue</button>
										</div>
									</div>
								)}
							</div>

						</div>
					</div>

				</div>
			</div>
		</div>

	)
}

export default BlogOutline;
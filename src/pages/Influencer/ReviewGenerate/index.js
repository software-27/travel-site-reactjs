import React, { useState, useEffect } from 'react'
import HeaderOTA from 'components/Header/HeaderOTA/index';
import { MdOutlineDone } from 'react-icons/md';
import { useNavigate, useLocation } from '../../../../node_modules/react-router-dom/index';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import { useAuth } from 'AuthContext';
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";
import axios from 'axios';
import HeaderOTAMobile from 'components/Header/HeaderOTAMobile/index';
import Dropdown from 'react-bootstrap/Dropdown';
import { ToastContainer, toast } from 'react-toastify';
import LoadingSpinner from 'components/LoadingSpinner/index';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./LoadingSpinner.css";

const ReviewGenerate = () => {
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();
	const { title: initialTitle, blogOutline: initialBlogOutline } = location.state || {};
	const [title, setTitle] = useState(initialTitle || '');
	const [blogOutline, setBlogOutline] = useState(initialBlogOutline || '');
	//navigate button
	const navigate = useNavigate();
	//for dropdown list
	const [isVisible, setIsVisible] = useState("");
	const [tone, setTone] = useState("");
	const [isPopup1Open, setIsPopup1Open] = useState(false);
	const [isPopup2Open, setIsPopup2Open] = useState(false);
	const [isLoadingg, setIsLoadingg] = useState(false);
	const [loadingTextIndex, setLoadingTextIndex] = useState(0);
	const loadingTexts = [
		"Just a moment, AI is writing your blog.",
		"AI is turning your ideas into words...",
		"Give us a sec, crafting your article with AI.",
		"AI is busy typing up your blog post...",
		"Almost there, AI is finalizing your content.",
		"The AI writer is on it, hang tight!",
		"Your AI-crafted blog is coming up shortly.",
		"The AI is putting the finishing touches on your post.",
		"AI is on the job, your blog will be ready soon.",
		"Hold on, AI is polishing your blog narrative."
	  ];
	  

	useEffect(() => {
		if (isLoadingg) {
			const intervalId = setInterval(() => {
				setLoadingTextIndex((prevIndex) => (prevIndex + 1) % loadingTexts.length);
			}, 4000); 
			return () => clearInterval(intervalId);
		}
	}, [isLoadingg, loadingTexts.length]);

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

	// Function to handle changes in the blog outline
	const handleBlogOutlineChange = (e) => {
		setBlogOutline(e.target.value);
	};

	// const handleGenerateClick = async () => {
	// 	const language = localStorage.getItem('language');

	// 	try {

	// 		if (!title) {
	// 			toast.error('Title cannot be empty. Please input title before proceed.', {
	// 				position: 'top-center',
	// 				autoClose: 5000,
	// 			});
	// 			return;
	// 		}

	// 		if (!blogOutline) {
	// 			toast.error('Blog outline cannot be empty. Please add write blog outline before proceed.', {
	// 				position: 'top-center',
	// 				autoClose: 5000,
	// 			});
	// 			setIsLoading(false);
	// 			return;
	// 		}

	// 		if (!blogOutline) {
	// 			toast.error('Blog outline cannot be empty. Please add write blog outline before proceed.', {
	// 				position: 'top-center',
	// 				autoClose: 5000,
	// 			});
	// 			setIsLoading(false);
	// 			return;
	// 		}

	// 		if (!tone) {
	// 			toast.error('Tone cannot be empty. Please select tone before proceed.', {
	// 				position: 'top-center',
	// 				autoClose: 5000,
	// 			});
	// 			setIsLoading(false);
	// 			return;
	// 		}

	// 		// const payload = `${title}\n${blogOutline}`;
	// 		const payload = `Blog Title:\n${title}\nBlog Outline:\n${blogOutline}`;
	// 		const url = new URL('https://halaltravel.ai/gpt/blog/partthreev2');
	// 		url.searchParams.append('language', language);
	// 		url.searchParams.append('tone', tone);

	// 		const response = await fetch(url, {
	// 			method: 'POST',
	// 			body: payload,
	// 			headers: {
	// 				'Content-Type': 'text/plain',
	// 			},
	// 		});

	// 		setIsLoading(false);

	// 		console.log("REQUESt:", url);

	// 		if (response.ok) {
	// 			const generatedBlogData = await response.text();
	// 			const blogTitle = title;
	// 			// localStorage.removeItem('language');
	// 			navigate('/blog-cke', { state: { blogTitle, generatedBlogData } });
	// 		} else {
	// 			alert('Failed to generate blog data.');
	// 		}

	// 	} catch (error) {
	// 		setIsLoading(false);
	// 		console.error('Error generating blog data:', error);
	// 	}
	// };


	const handleGenerateClick = async () => {
		// Validate fields
		if (!title) {
			toast.error('Title cannot be empty. Please input title before proceeding.', { position: 'top-center', autoClose: 5000 });
			setIsLoading(false);
			return; // Stop execution if title is missing
		}

		if (!blogOutline) {
			toast.error('Blog outline cannot be empty. Please write blog outline before proceeding.', { position: 'top-center', autoClose: 5000 });
			setIsLoading(false);
			return; // Stop execution if blogOutline is missing
		}

		if (!tone) {
			toast.error('Tone cannot be empty. Please select tone before proceeding.', { position: 'top-center', autoClose: 5000 });
			setIsLoading(false);
			return; // Stop execution if tone is missing
		}

		setIsLoadingg(true);

		try {
			setIsLoading(true);
			setTimeout(() => {
				setIsLoadingg(false);
			}, 50000);
			const payload = `Blog Title: ${title}\nBlog Outline: ${blogOutline}`;
			const language = localStorage.getItem('language') || 'English'; // Fallback to English if not set
			const url = `https://halaltravel.ai/gpt/blog/partthreev2?language=${language}&tone=${tone}`;

			
			const response = await axios.post(url, payload, {
				headers: { 'Content-Type': 'text/plain' },
			});

			if (response.status === 200) { 
				const generatedBlogData = response.data;
				navigate('/blog-cke', { state: { blogTitle: title, generatedBlogData } });
			} else {
			
				toast.error('Failed to generate blog data.', { position: 'top-center', autoClose: 5000 });
			}
		} catch (error) {
			console.error('Error generating blog data:', error);
			setIsLoadingg(false);
			toast.error('An error occurred while generating blog data.', { position: 'top-center', autoClose: 5000 });
		} finally {
			setIsLoadingg(false);
			setIsLoading(false); 
		}
	};


	const { setIsLoggedIn } = useAuth();
	setIsLoggedIn(true);

	console.log("Current message index:", loadingTextIndex);

	return (
		<div className=' flex flex-col font-montserrat mx-auto w-full h-auto'>
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
							<div class="xs:w-20 lg:w-10 xs:h-20 lg:h-10 bg-[#38b000] border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
								<MdOutlineDone className='text-white xs:ml-4 lg:ml-2 xs:w-[40px] xs:h-[40px] lg:w-[20px] lg:h-[20px]' />
							</div>
						</div>

						<div class="w-3/4 align-center items-center align-middle content-center flex">
							<div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
								<div class="bg-blue-600 rounded leading-none py-1 text-center dark:bg-blue-500 w-[100%]"></div>
							</div>
						</div>

						<div class="flex-1">
							<button class="xs:w-20 lg:w-10 xs:h-20 lg:h-10 bg-gray-500 border-2 border-grey-light mx-auto rounded-full sm:text-[28px] lg:text-[18px] text-white flex items-center">
								<span class="text-white text-center w-full">3</span>
							</button>
						</div>

						<div class="flex-1">
						</div>
					</div>

					<div class="flex xs:text-[28px] lg:text-[14px] content-center text-center">
						<div class="w-2/4 text-[#38b000]">
							Step 1: Blog Ideas + Titles
						</div>

						<div class="w-2/4 text-[#38b000]">
							Step 2: Blog Outline
						</div>

						<div class="w-2/4">
							Step 3: Review and Generate
						</div>
					</div>

					<div className='w-full items-center content-center sm:mt-8 lg:mt-4 lg:max-w-3xl xs:w-full'>
						<div className='border border-gray-200 rounded-sm shadow p-4 h-[fit] sm:w-full'>
							<text className='font-semibold xs:text-[37px] lg:text-[14px]'>Blog Outline</text>

							<div className='flex m-2 lg:mt-2 xs:mt-5 gap-4 items-center justify-between'>
								<div className='flex-grow w-[70%]'>
									<div className='w-full'>
										<span className='font-medium xs:text-[35px] lg:text-[14px]'>Blog Title:</span>
										<div className='flex justify-left'>
											<input
												type='text'
												className='px-2 py-1 xs:text-[30px] lg:text-[12px] w-full lg:h-10 xs:h-24 xs:rounded-[20px] lg:rounded-[5px] focus:border-blue-500'
												placeholder='A 3-Day Tour of Melaka: Exploring the Historical City of Malaysia'
												value={title} // Set the 'title' value as the input value
												onChange={handleTitleChange}
											/>
										</div>
									</div>
								</div>

								<div className='flex-initial w-[30%]' >
									<span className='font-medium xs:text-[35px] lg:text-[14px]'>Tone:</span>
									<div className='border border-1 md:border-neutral-400 lg:border-neutral-200 justify-center bg-white_A700 flex flex-row g:gap-4 md:gap-8  lg:h-10 sm:h-24 items-center outline outline-[0.5px]  md:rounded-[20px] lg:rounded-[5px]'>
										<select
											id='tone'
											className='w-full p-2 md:text-[30px] lg:text-[12px] font-normal not-italic font-montserrat p-0 ml-1 text-black placeholder:required text-slate_700 outline-none border-none '
											value={tone}
											onChange={(e) => setTone(e.target.value)}
											required
										>
											<option value=''>Select</option>
											<option value='Conversational'>Conversational</option>
											<option value='Professional'>Professional</option>
											<option value='Informative'>Informative</option>
											<option value='Persuasive'>Persuasive</option>
											<option value='Narrative'>Narrative</option>
											<option value='Humorous'>Humorous</option>
											<option value='Educational'>Educational</option>
											<option value='Inspiring'>Inspiring</option>
											<option value='Analytical'>Analytical</option>
										</select>
									</div>
								</div>
							</div>


							<div className='mt-2 m-2'>
								<span className='font-medium lg:text-[14px] xs:text-[35px]'>Blog Outline:</span>
								<div className='space-y-2'>
									<textarea
										type='text'
										id="keywords"
										className='lg:text-[14px] xs:text-[28px] gap-2 text-justify w-full rounded-lg focus:border-blue-500'
										rows="10"
										placeholder='1. Introduction: Overview of Melaka Malaysia and why it is a great destination for a day tour
										2. Day 1: Explore the historical sites of Melaka a such as A Famosa St Paul Church and the Melaka Sultanate Palace Museum 
										3. Day 2: Visit the cultural attractions of Melaka such as Baba and Nyonya Heritage Museum the Jonker Street night market and the Cheng Hoon teng Temple 
										4. Day 3: Sample the local cuisine of Melaka such as the famous Nyonya Laksa and Durian Cendol and take a river cruise along the Melaka River 
										5. Conclusion: Summary of the day tour and tips for future travelers'
										value={blogOutline}
										onChange={handleBlogOutlineChange} >

									</textarea>
								</div>
							</div>

							<div className='xs:mt-5 lg:mt-3 m-2 flex justify-end'>
								<button className='bg-[#00A19A] font-medium items-center xs:text-[35px] lg:text-[14px] lg:w-[15%] xs:w-[35%] xs:h-20 lg:h-10 text-white font-medium xs:rounded-[20px] lg:rounded-lg'
									onClick={handleGenerateClick}
									value='yes'
								>
									Generate</button>
							</div>

							{isLoadingg && (
								// web view
								<div className="flex flex-col items-center justify-center"> 
									<div className="flex justify-center">
										<LoadingSpinner />
									</div>
									<p className="loading-text text-center mt-10 lg:mt-10"> 
										{loadingTexts[loadingTextIndex]}
									</p>
								</div>
							)}


						</div>
					</div>

				</div>
			</div>
		</div >

	)
}

export default ReviewGenerate;
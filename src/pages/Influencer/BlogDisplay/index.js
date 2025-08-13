
import HeaderOTA from 'components/Header/HeaderOTA/index';
import React, { useState } from 'react'
import { MdOutlineDone } from 'react-icons/md';
// import './cke.css';
import { useNavigate } from '../../../../node_modules/react-router-dom/index';
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from 'components/LoadingSpinner/index';
import { useEffect } from 'react';
import GlobalConstant from "constant/global";
import axios from "axios";
import { useAuth } from "AuthContext";
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";
import HeaderOTAMobile from 'components/Header/HeaderOTAMobile/index';

const BlogDisplay = () => {
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();
	// const { generatedBlogData: generatedBlogData } = location.state || {};
	// const { generatedBlogData: generatedBlogData } = location.state || {};
	const [blogContent, setBlogContent] = useState('');
	const [title, setTitle] = useState('');
	const [formattedDate, setFormattedDate] = useState('');

	// const { blogId } = location.state || {};


	//navigate button
	const navigate = useNavigate();

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

	//select
	const [selectedOption, setSelectedOption] = useState(null);

	const handleOptionSelect = (option) => {
		setSelectedOption(option);
	};

	const changeHandler = e => {
		const getshow = e.target.value;
		setIsVisible(getshow);
	}

	const userId = useLocation().pathname.replace('/blog-display/', '').split('/')[0];
	const blogId = useLocation().pathname.replace(`/blog-display/`, '').split('/')[1];
	const blogTitle = useLocation().pathname.replace(`/blog-display/`, '').split('/')[2];
	// const blogTitle = useLocation().pathname.replace(`/blog-display/${userId}/${blogId}/`,'');
	// const currentPath = useLocation().pathname;
	console.log('userId: ', userId);
	console.log('blogId: ', blogId);
	console.log('blogTitle: ', blogTitle);
	// const tempUserId = "";
	// localStorage.setItem("tempUserId", currentPath);


	useEffect(() => {
		//const blogId = localStorage.getItem("blogId");
		console.log("blogId:  " + blogId);
		if (blogId) {
			const fetchBlogContent = async () => {
				try {
					const response = await axios.get(`https://halaltravel.ai/ht/api/blog/blogDetails/${blogId}`);
					console.log("Response:" + response.data);
					// Parse the date string into a Date object
					const date = new Date(response.data.dtCreated);

					// Format the date as "Month Day, Year"
					const formattedDate = new Intl.DateTimeFormat('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					}).format(date);

					setBlogContent(response.data.blog);
					setTitle(response.data.title)
					setFormattedDate(formattedDate);
					// setformattedDate(response.data.dtCreated)
				} catch (error) {
					console.error('Error fetching blog content:', error);
				}
			};

			fetchBlogContent();
		}
	}, [blogId]);

	const { setIsLoggedIn } = useAuth();
	setIsLoggedIn(true);



	return (
		<div className=' flex flex-col mx-auto w-full h-auto'>
			<div className='fixed w-full' style={{ zIndex: 2 }}>
				<HeaderOTAAdmin openPopup1={openPopup1} className="fixed invisible lg:visible" />
				<LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
				<SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />
				{/* <HeaderOTAMobile openPopup1={openPopup1} className="visible fixed overflow-hidden lg:invisible lg:hidden" /> */}
			</div>
			<div className='lg:mx-72 sm:mx-5 xs:pt-[160px] lg:pt-[92px] mb-8'>

				<div className='mt-8 border border-2 border-[] rounded-sm shadow p-10 px-20 py-10 h-[fit]'>
					<p className='lg:text-[40px] sm:text-[65px] font-semibold'>{title}</p>
					<br></br>
					<p className='sm:text-[30px] lg:text-[15px]'>{formattedDate}</p>
					<br></br>
					<br></br>

					{blogContent ? (
						<div className='styled-content'
						dangerouslySetInnerHTML={{ __html: blogContent }} />				  
				  
					) : (
						<div className='flex items-center justify-center h-full'>
							<LoadingSpinner />
						</div>
					)}

					{/* <div className='lg:text-base'>
						<h2 className='text-[30px] sm:text-xl lg:text-base'>Heading 2</h2>
						<p className='text-[16px] sm:text-base lg:text-base'>This is some text content.</p>
					</div> */}


				</div>
			</div>

		</div>

	)
}

export default BlogDisplay;
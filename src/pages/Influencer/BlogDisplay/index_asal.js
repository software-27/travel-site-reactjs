
import HeaderOTA from 'components/Header/HeaderOTA/index';
import React, { useState } from 'react'
import { MdOutlineDone } from 'react-icons/md';
// import './cke.css';
import { useNavigate } from '../../../../node_modules/react-router-dom/index';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from 'components/LoadingSpinner/index';
import { useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import GlobalConstant from "constant/global";
import axios from "axios";

const BlogDisplay = () => {
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();
	const { generatedBlogData: generatedBlogData } = location.state || {};
	const [blogContent, setBlogContent] = useState(generatedBlogData || '');


	//navigate button
	const navigate = useNavigate();


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

	useEffect(() => {
		// Simulate loading delay with setTimeout (replace with your actual data fetching logic)
		const loadingDelay = setTimeout(() => {
			setIsLoading(false); // Set isLoading to false after the data is fetched (or simulated delay)
		}, 2000); // Adjust the delay as needed

		return () => clearTimeout(loadingDelay); // Clean up the timeout on component unmount
	}, []);



	return (
		<div className=' flex flex-col mx-auto w-full h-auto '>
			<HeaderOTAAdmin />
			{/* <HeaderOTAMobile /> */}
			<div className='mx-72'>

				<div className='mt-8 border border-2 border-[] rounded-sm shadow p-10 px-20 py-10 h-[fit]'>
					{/* <p className='title font-bold text-2xl'>A Journey to Remember: A Guide to the Must-See Attractions in Sabah</p> */}
					{/* <p>{formattedDate}</p> */}
					<div className='pt-4 py-2 w-[100%] text-justify'>
						<div dangerouslySetInnerHTML={{ __html: blogContent }} />

					</div>
				</div>
			</div>

		</div>

	)
}

export default BlogDisplay;
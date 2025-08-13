
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

const BlogPreview = () => {
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();
	const { generatedBlogData: generatedBlogData } = location.state || {};
	const [blogContent, setBlogContent] = useState(generatedBlogData || '');

	// Get the current date
	const currentDate = new Date();
	const formattedDate = currentDate.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});


	//navigate button
	const navigate = useNavigate();

	function handleNavigate1() {
		navigate('/blog-cke', { state: { generatedBlogData } });
	}

	function handlePublish() {

		//here, we shpuld get the content
		// const blogContent = richtextEditorRef.current.value;

		if (!blogContent) {
			// Display an alert or message to the user indicating that the content is empty
			alert('Content cannot be empty. Please add content before publishing.');
			return;
		}

		//we need token, user id
		const token = localStorage.getItem("token");
		const tokenType = localStorage.getItem("tokenType");
		const userId = localStorage.getItem("userId");


		const url = `https://halaltravel.ai/ht/api/blog/${userId}`;
		const data = {
			blog: blogContent
		}

		// Submit the form data to the server using axios or any other HTTP library
		axios
			.post(url, data, {
				headers: {
					// Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYWxxaXNraGFpMzIwQGdtYWlsLmNvbSIsInVzZXJJZCI6MywiaWF0IjoxNjkxMzk1MTg3LCJleHAiOjE2OTE5OTk5ODd9.75VAksE8IgOiW2Drdw3BnCi8LRSaVFSxFUNZUQQd3v4DsSPiEhR7wxfqbwqAA0q0DmYUEnZK8bq0rT2WCST0Cg"
				Authorization: `Bearer ${token}`
				},
			})
			.then(response => {
				console.log("Success -----", response.data);
			})
		navigate("/blog-display", { state: { generatedBlogData } })
			.catch(error => {
				console.log("Failed -----", error);
			});
	}


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

	// const API_URL = "http://localhost:8080/api/creatorpage";
	// const UPLOAD_ENDPOINT = "uploadImage"

	// function uploadAdapter(loader) {
	// 	return {
	// 	  upload: () => {
	// 		return new Promise((resolve) => {
	// 		  loader.file.then((file) => {
	// 			const reader = new FileReader();
	// 			reader.onload = () => {
	// 			  const url = reader.result;
	// 			  resolve({ default: url });
	// 			};
	// 			reader.readAsDataURL(file);
	// 		  });
	// 		});
	// 	  },
	// 	};
	//   }


	// function uploadAdapter(loader) {
	// 	return {
	// 		upload: () => {
	// 			return new Promise((resolve, reject) => {
	// 				const body = new FormData();
	// 				loader.file.then((file) => {
	// 					body.append("images", file);
	// 					let check = GlobalConstant.BASE_API + `/api/creatorpage/uploadImage`;
	// 					console.log("check: ", check, "test: ", GlobalConstant.TEST);
	// 					fetch(GlobalConstant.BASE_API + `/api/creatorpage/uploadImage`, {
	// 						// fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
	// 						method: "POST",
	// 						body: body
	// 					}).then((res => res.json()))
	// 						.then((res) => {
	// 							// The response should contain the URL of the uploaded image
	// 							if (res && res.url) {
	// 								resolve({ default: `${API_URL}/${res.url}` });
	// 								//   } else {
	// 								// 	reject(new Error("Invalid response format"));
	// 								//   }
	// 							}
	// 						})
	// 						.catch((err) => {
	// 							reject(err);
	// 						})
	// 				})
	// 			})
	// 		}
	// 	}
	// }

	// function uploadPlugin(editor) {
	// 	editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
	// 		return uploadAdapter(loader);
	// 	}
	// }


	return (
		<div className=' flex flex-col mx-auto w-full h-auto '>
			<HeaderOTAAdmin />
			{/* <HeaderOTAMobile /> */}
			<div className='mx-72'>
				<div className='mt-8 flex justify-between'>
					<BiArrowBack size={25}
						onClick={handleNavigate1} />
					<button
						className='bg-[#00A19A] text-white font-medium px-5 py-1 rounded-lg text-[12px]'
						onClick={handlePublish}
					>Publish
					</button>
				</div>
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

export default BlogPreview;
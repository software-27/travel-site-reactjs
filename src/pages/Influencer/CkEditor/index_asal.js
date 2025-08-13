// import React, { useState, useRef } from 'react'
// import { MdOutlineDone } from 'react-icons/md';
// import './cke.css';
// import { Stack } from "components";
// import { useNavigate } from '../../../../node_modules/react-router-dom/index';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
// import { useLocation } from 'react-router-dom';
// import LoadingSpinner from 'components/LoadingSpinner/index';
// import { useEffect } from 'react';
// // import '../../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css';
// import GlobalConstant from "constant/global";
// import axios from "axios";

// const CkEditor = () => {
// 	const [isLoading, setIsLoading] = useState(false);
// 	const location = useLocation();
// 	const { generatedBlogData } = location.state || {};
// 	const ckeditorRef = useRef();


// 	//navigate button
// 	const navigate = useNavigate();

// 	function handleNavigate1() {
// 		// const postData = {
// 		// 	"images": imageUrl
// 		// };
// 		// handleSubmit(postData);
// 		// console.log('post photo: ', postData)


// 		//here, we shpuld get the content
// 		const ckeditorContent = ckeditorRef.current.editor.getData();

// 		//we need token, user id
// 		const token = localStorage.getItem("token");
// 		const tokenType = localStorage.getItem("tokenType");
// 		const userId = localStorage.getItem("userId");


// 		const url = `https://halaltravel.ai/ht/api/blog/${userId}`;
// 		const data = {
// 			blog : ckeditorContent
// 		}

// 		// Submit the form data to the server using axios or any other HTTP library
// 		axios
// 		.post(url, data, {
// 			headers : {

// 				Authorization : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbm1oZzE5OTBAZ21haWwuY29tIiwidXNlcklkIjoxLCJpYXQiOjE2OTExMjAwOTgsImV4cCI6MTY5MTcyNDg5OH0.hUdDDzADo3u-ahSZbxewfRZRoo7DbWlFhKNmHn_K63GjSLl_0gYHsPP1r9pzSnKRb6hu2jre-E8etPfUFDPDsw"
// 			},
// 		})
// 		.then(response => {
// 			console.log("Success -----", response.data);
// 		})
// 		.catch(error => {
// 			console.log("Failed -----", error);
// 		});
// 		//navigate("/ckeditor")

// 	}
// 	//for dropdown list
// 	const [isVisible, setIsVisible] = useState("");

// 	//select
// 	const [selectedOption, setSelectedOption] = useState(null);

// 	const handleOptionSelect = (option) => {
// 		setSelectedOption(option);
// 	};

// 	const changeHandler = e => {
// 		const getshow = e.target.value;
// 		setIsVisible(getshow);
// 	}

// 	useEffect(() => {
// 		// Simulate loading delay with setTimeout (replace with your actual data fetching logic)
// 		const loadingDelay = setTimeout(() => {
// 			setIsLoading(false); // Set isLoading to false after the data is fetched (or simulated delay)
// 		}, 2000); // Adjust the delay as needed

// 		return () => clearTimeout(loadingDelay); // Clean up the timeout on component unmount
// 	}, []);

// 	const API_URL = "http://localhost:8080/api/creatorpage";
// 	const UPLOAD_ENDPOINT = "uploadImage"

// 	// function uploadAdapter(loader) {
// 	// 	return {
// 	// 	  upload: () => {
// 	// 		return new Promise((resolve) => {
// 	// 		  loader.file.then((file) => {
// 	// 			const reader = new FileReader();
// 	// 			reader.onload = () => {
// 	// 			  const url = reader.result;
// 	// 			  resolve({ default: url });
// 	// 			};
// 	// 			reader.readAsDataURL(file);
// 	// 		  });
// 	// 		});
// 	// 	  },
// 	// 	};
// 	//   }


// 	function uploadAdapter(loader) {
// 		return {
// 			upload: () => {
// 				return new Promise((resolve, reject) => {
// 					const body = new FormData();
// 					loader.file.then((file) => {
// 						body.append("images", file);
// 						let check = GlobalConstant.BASE_API + `/api/creatorpage/uploadImage`;
// 						console.log("check: ",check, "test: ", GlobalConstant.TEST);
// 						fetch(GlobalConstant.BASE_API + `/api/creatorpage/uploadImage`, {
// 						// fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
// 							method: "POST",
// 							body: body
// 						}).then((res => res.json()))
// 							.then((res) => {
// 								 // The response should contain the URL of the uploaded image
// 								 if (res && res.url) {
// 									resolve({ default: `${API_URL}/${res.url}`});
// 								//   } else {
// 								// 	reject(new Error("Invalid response format"));
// 								//   }
// 							}
// 						})
// 							.catch((err) => {
// 								reject(err);
// 							})
// 					})
// 				})
// 			}
// 		}
// 	}

// 	function uploadPlugin(editor) {
// 		editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
// 			return uploadAdapter(loader);
// 		}
// 	}


// 	return (
// 		<div className=' flex flex-col font-montserrat mx-auto w-full h-auto'>
// 			<HeaderOTAAdmin />
// 			{/* <HeaderOTAMobile /> */}
// 			<div className='w-full p-4'>

// 				<div class="max-w-xl mx-auto my-4 ">
// 					<div class="flex pb-3">
// 						<div class="flex-1">
// 						</div>

// 						<div class="flex-1 items-center">
// 							<div class="w-10 h-10 bg-[#38b000] items-center border-2 border-grey-light mx-auto rounded-full flex">
// 								<MdOutlineDone size={20} className='text-white ml-2' />
// 							</div>
// 						</div>


// 						<div class="w-3/4 align-center items-center align-middle content-center flex">
// 							<div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
// 								<div class="bg-blue-600 rounded leading-none py-1 text-center dark:bg-blue-500 w-[100%]"></div>
// 							</div>
// 						</div>


// 						<div class="flex-1">
// 							<div class="w-10 h-10 bg-[#38b000] border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
// 								<MdOutlineDone size={20} className='text-white ml-2' />
// 							</div>
// 						</div>

// 						<div class="w-3/4 align-center items-center align-middle content-center flex">
// 							<div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
// 								<div class="bg-blue-600 rounded leading-none py-1 text-center dark:bg-blue-500 w-[100%]"></div>
// 							</div>
// 						</div>

// 						<div class="flex-1">
// 							<button class="w-10 h-10 bg-[#38b000] border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center ">
// 								<MdOutlineDone size={20} className='text-white ml-2' />
// 							</button>
// 						</div>

// 						<div class="flex-1">
// 						</div>
// 					</div>

// 					<div class="flex text-sm content-center text-center">
// 						<div class="w-3/4 text-[#38b000]">
// 							Step 1: Blog Ideas + Titles
// 						</div>

// 						<div class="w-3/4 text-[#38b000]">
// 							Step 2: Blog Outline
// 						</div>

// 						<div class="w-3/4 text-[#38b000]">
// 							Step 3: Review and Generate
// 						</div>
// 					</div>
// 				</div>

// 				<div className='w-full flex flex-col justify-center items-center mt-4'>
// 					{/* <div className='border border-gray-200 rounded-sm shadow p-4 h-[fit] mx-auto w-full sm:max-w-3xl mb-4'>
// 					<span className="text-black_900 font-montserrat font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
//                         Upload your header.{" "}
//                     </span>
// 					<Stack className="font-ptsans lg:h-[206px] xl:h-[258px] 2xl:h-[290px] 3xl:h-[348px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[28px] 3xl:mt-[29px] w-[93%]">
//                       <div className="flex justify-center items-center w-full">
//                         <label htmlFor="dropzone-file" type="file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
//                           <div className="flex flex-col justify-center items-center pt-5 pb-6">
//                             <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
//                             <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
//                             <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
//                           </div>
// 						  <input id="dropzone-file" type="file" class="hidden" />

//                         </label>
//                       </div>
//                     </Stack>
// 					</div> */}
// 						<div className='border border-gray-200 rounded-sm shadow p-4 h-[fit] sm:max-w-3xl'>

// 							<div className='mt-2 m-2 space-y-2'>
// 								{generatedBlogData ? (
// 									<CKEditor
// 										ref={ckeditorRef}
// 										config={{
// 											extraPlugins: [uploadPlugin]
// 										}}

// 										editor={ClassicEditor}
// 										data={generatedBlogData}
// 										onReady={editor => {
// 											// You can store the "editor" and use when it is needed.
// 											console.log('Editor is ready to use!', editor);
// 										}}
// 										onChange={(event, editor) => {
// 											const data = editor.getData();
// 											console.log({ event, editor, data });
// 										}}

// 										// onChange={(event, editor) => handleEditorChange(event, editor)}
// 										onBlur={(event, editor) => {
// 											console.log('Blur.', editor);
// 										}}
// 										onFocus={(event, editor) => {
// 											console.log('Focus.', editor);
// 										}}


// 									/>
// 								) : (
// 									<div className="flex justify-center"> {/* Center the spinner using flex */}
// 										<LoadingSpinner />
// 									</div>
// 								)}

// 							</div>

// 							<div className='m-2 flex justify-end gap-2'>
// 								{/* <button className='bg-[#00A19A] text-white font-medium px-5 py-1 rounded-lg text-[10px]'
// 									onClick={handleNavigate1}
// 								>Save as Draft</button> */}
// 								<button className='bg-[#00A19A] text-white font-medium px-5 py-1 rounded-lg text-[10px]'
// 									onClick={handleNavigate1}
// 								>Preview</button>
// 							</div>
							

// 						</div>
// 					</div>

				

// 			</div>
// 		</div>

// 	)
// }

// export default CkEditor;

import React, { useState, useRef } from 'react'
import { MdOutlineDone } from 'react-icons/md';
import './cke.css';
import { useNavigate } from '../../../../node_modules/react-router-dom/index';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from 'components/LoadingSpinner/index';
import { useEffect } from 'react';
import GlobalConstant from "constant/global";
import axios from "axios";

import { registerLicense } from '@syncfusion/ej2-base';
import { HtmlEditor, Link, Image, Inject, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

const CkEditor = () => {
	registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF5cXmdCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWXhednRRRWZeV0x/W0Y=');


	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();
	const { generatedBlogData } = location.state || {};
	const [editorData, setEditorData] = useState('');
	// const ckeditorRef = useRef();
	const richtextEditorRef = useRef();
	//navigate button
	const navigate = useNavigate();

	//button preview
	function handleNavigate1() {
		const editorText  = richtextEditorRef.current.value;
		setEditorData(editorText);
		navigate("/blog-preview", { state: { generatedBlogData: editorText } })

	}

	const resetEditorContent = () => {
		setEditorData('');
	  };

	// function handleNavigate1() {
	// 	// const postData = {
	// 	// 	"images": imageUrl
	// 	// };
	// 	// handleSubmit(postData);
	// 	// console.log('post photo: ', postData)


	// 	//here, we shpuld get the content
	// 	const ckeditorContent = ckeditorRef.current.editor.getData();

	// 	//we need token, user id
	// 	const token = localStorage.getItem("token");
	// 	const tokenType = localStorage.getItem("tokenType");
	// 	const userId = localStorage.getItem("userId");


	// 	const url = `https://halaltravel.ai/ht/api/blog/${userId}`;
	// 	const data = {
	// 		blog : ckeditorContent
	// 	}

	// 	// Submit the form data to the server using axios or any other HTTP library
	// 	axios
	// 	.post(url, data, {
	// 		headers : {

	// 			Authorization : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYWxxaXNraGFpMzIwQGdtYWlsLmNvbSIsInVzZXJJZCI6MywiaWF0IjoxNjkxMzk1MTg3LCJleHAiOjE2OTE5OTk5ODd9.75VAksE8IgOiW2Drdw3BnCi8LRSaVFSxFUNZUQQd3v4DsSPiEhR7wxfqbwqAA0q0DmYUEnZK8bq0rT2WCST0Cg"
	// 		},
	// 	})
	// 	.then(response => {
	// 		console.log("Success -----", response.data);
	// 	})
	// 	.catch(error => {
	// 		console.log("Failed -----", error);
	// 	});
	// 	navigate("/blog-display")

	// }

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

	useEffect(() => {
		setEditorData(generatedBlogData || editorData || ''); // Set the editorData state from the received content
	  }, [generatedBlogData,editorData]);

	const API_URL = "http://localhost:8080/api/creatorpage";
	const UPLOAD_ENDPOINT = "uploadImage"

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


	function uploadAdapter(loader) {
		return {
			upload: () => {
				return new Promise((resolve, reject) => {
					const body = new FormData();
					loader.file.then((file) => {
						body.append("images", file);
						let check = GlobalConstant.BASE_API + `/api/creatorpage/uploadImage`;
						console.log("check: ", check, "test: ", GlobalConstant.TEST);
						fetch(GlobalConstant.BASE_API + `/api/creatorpage/uploadImage`, {
							// fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
							method: "POST",
							body: body
						}).then((res => res.json()))
							.then((res) => {
								// The response should contain the URL of the uploaded image
								if (res && res.url) {
									resolve({ default: `${API_URL}/${res.url}` });
									//   } else {
									// 	reject(new Error("Invalid response format"));
									//   }
								}
							})
							.catch((err) => {
								reject(err);
							})
					})
				})
			}
		}
	}

	function uploadPlugin(editor) {
		editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
			return uploadAdapter(loader);
		}
	}


	return (
		<div className=' flex flex-col font-montserrat mx-auto w-full h-auto'>
			<HeaderOTAAdmin />
			{/* <HeaderOTAMobile /> */}
			<div className='w-full p-4'>

				<div class="max-w-xl mx-auto my-4 ">
					<div class="flex pb-3">
						<div class="flex-1">
						</div>

						<div class="flex-1 items-center">
							<div class="w-10 h-10 bg-[#38b000] items-center border-2 border-grey-light mx-auto rounded-full flex">
								<MdOutlineDone size={20} className='text-white ml-2' />
							</div>
						</div>


						<div class="w-3/4 align-center items-center align-middle content-center flex">
							<div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
								<div class="bg-blue-600 rounded leading-none py-1 text-center dark:bg-blue-500 w-[100%]"></div>
							</div>
						</div>


						<div class="flex-1">
							<div class="w-10 h-10 bg-[#38b000] border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
								<MdOutlineDone size={20} className='text-white ml-2' />
							</div>
						</div>

						<div class="w-3/4 align-center items-center align-middle content-center flex">
							<div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
								<div class="bg-blue-600 rounded leading-none py-1 text-center dark:bg-blue-500 w-[100%]"></div>
							</div>
						</div>

						<div class="flex-1">
							<button class="w-10 h-10 bg-[#38b000] border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center ">
								<MdOutlineDone size={20} className='text-white ml-2' />
							</button>
						</div>

						<div class="flex-1">
						</div>
					</div>

					<div class="flex text-sm content-center text-center">
						<div class="w-3/4 text-[#38b000]">
							Step 1: Blog Ideas + Titles
						</div>

						<div class="w-3/4 text-[#38b000]">
							Step 2: Blog Outline
						</div>

						<div class="w-3/4 text-[#38b000]">
							Step 3: Review and Generate
						</div>
					</div>

					<div className='w-full content-center mt-4 sm:max-w-3xl'>
						<div className='border border-gray-200 rounded-sm shadow p-4 h-[fit] sm:max-w-3xl'>

							<div className='mt-2 m-2 space-y-2'>
								{generatedBlogData ? (
									<RichTextEditorComponent
									ref={richtextEditorRef}
									value={editorData || generatedBlogData}>
										
										<Inject services={[Toolbar, Image, Link, HtmlEditor]} />
									</RichTextEditorComponent>
								) : (
									<div className="flex justify-center"> {/* Center the spinner using flex */}
										<LoadingSpinner />
									</div>
								)}

							</div>

							<div className='m-2 flex justify-end gap-2'>
								{/*        */}
								<button className='bg-[#00A19A] text-white font-medium px-5 py-1 rounded-lg text-[10px]'
									onClick={handleNavigate1}
								>Preview</button>
							</div>


						</div>
					</div>

				</div>

			</div>
		</div>

	)
}

export default CkEditor;
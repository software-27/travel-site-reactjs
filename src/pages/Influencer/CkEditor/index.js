import React, { useState, useRef } from 'react'
import { MdOutlineDone } from 'react-icons/md';
import './cke.css';
import { useNavigate } from '../../../../node_modules/react-router-dom/index';
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from 'components/LoadingSpinner/index';
import { useEffect } from 'react';
import axios from "axios";
import { Stack } from "components";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";
import Compressor from '@xkeshi/image-compressor';
import { registerLicense } from '@syncfusion/ej2-base';
import {
	HtmlEditor,
	Image,
	Inject,
	Link,
	QuickToolbar,
	Count,
	RichTextEditorComponent,
	Toolbar,
} from '@syncfusion/ej2-react-richtexteditor';
// import { HtmlEditor, Image, Video, Link, Inject, RichTextEditorComponent, Toolbar, QuickToolbar } from '@syncfusion/ej2-react-richtexteditor';
// import { DialogComponent } from '@syncfusion/ej2-react-popups';
import PublishBlogAI from 'components/PublishBlogAI/index';
import HeaderOTAMobile from 'components/Header/HeaderOTAMobile/index';
import { useAuth } from "AuthContext";

const CkEditor = () => {
	registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhKYVFyWmFZfVpgdVdMZFlbRHJPMyBoS35RckVgWXledXRdR2FcUEB0');

	const richtextEditorRef = useRef();
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();
	const { blogTitle: initialTitle, generatedBlogData } = location.state || {};
	const [isPreviewButtonVisible, setIsPreviewButtonVisible] = useState(false);
	const { title } = location.state || {};
	const [Btitle, setTitle] = useState(initialTitle || '');
	const [editorData, setEditorData] = useState(generatedBlogData || '');
	const [uploadedImage, setUploadedImage] = useState(null);
	const [showDialog, setShowDialog] = useState(false);
	const [dialogContent, setDialogContent] = useState('');
	const [totalImageSize, setTotalImageSize] = useState(0);
	const [isLoadingg, setIsLoadingg] = useState(false);
	const { isLoggedIn } = useAuth();
	const [isShowContentSetting, setIsShowContentSetting] = React.useState(false);
	//navigate button
	const navigate = useNavigate();

	const [blogHeader, setBlogHeader] = useState(null);
	const [blogData, setBlogData] = useState({
		title: Btitle,
		blog: '',
	});

	const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

	useEffect(() => {
		const clearSession = () => {
			sessionStorage.removeItem('hasVisited');
		};

		// Check if 'hasVisited' is set in sessionStorage
		if (!sessionStorage.getItem('hasVisited')) {
			setIsErrorModalOpen(true); // Show the modal if they haven't visited
			sessionStorage.setItem('hasVisited', 'true'); // Set 'hasVisited' in sessionStorage
		}

		window.addEventListener('beforeunload', clearSession);

		// Cleanup function to remove the event listener
		return () => {
			window.removeEventListener('beforeunload', clearSession);
		};
	}, []);

	useEffect(() => {
		// Set editorData when generatedBlogData changes
		setEditorData(generatedBlogData || '');
	}, [generatedBlogData]);

	useEffect(() => {
		// const editorText = richtextEditorRef.current.value;
		const storedGeneratedData = localStorage.getItem('generatedData');
		const storedEditorData = localStorage.getItem('editorData');
		const storedBlogHeader = sessionStorage.getItem('blogHeader');

		if (storedGeneratedData) {
			setEditorData(storedGeneratedData); // Use setEditorData to set both values
		}

		if (storedEditorData) {
			setEditorData(storedEditorData);
		}

		if (storedBlogHeader) {
			setBlogHeader(storedBlogHeader);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('generatedData', generatedBlogData);
		localStorage.setItem('editorData', editorData);
	}, [generatedBlogData, editorData, blogHeader]);

	function handleNavigate1() {
		const editorText = richtextEditorRef.current.value;
		setEditorData(editorText);
		const coverImageUrl = blogHeader ? URL.createObjectURL(blogHeader) : null;

		localStorage.setItem('editorData', editorText);
		sessionStorage.setItem('title', Btitle);

		const previewUrl = '/blog-preview';
		const newTab = window.open(previewUrl, '_blank');
		if (newTab) {
			newTab.onload = () => {
				// Pass the necessary data to the new tab
				newTab.postMessage({ editorText, Btitle, coverImageUrl }, window.location.origin);
			};
		}

	};

	const toggleModal = () => {
		setIsErrorModalOpen(!isErrorModalOpen);
	};

	const handleNavigatePublish = () => {
		if (isLoggedIn) {
			setIsShowContentSetting(true);
		} else {
			setIsPopup1Open(true);
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

	const handleCoverImageChange = async (event) => {
		const file = event.target.files[0];
		if (file) {
			try {
				const compressedFile = await compressImage(file);
				setBlogHeader(compressedFile);
			} catch (error) {
				console.error('Error compressing image:', error);
			}
		}
	};

	const handleImageRemove = (imageTypes) => {
		imageTypes.forEach((imageType) => {
			switch (imageType) {
				case 'blogHeader':
					setBlogHeader(null);
					break;
				default:
					break;
			}
		});
	};

	const resetEditorContent = () => {
		setEditorData('');
	};


	//for dropdown list
	const [isVisible, setIsVisible] = useState("");
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

	//select
	const [selectedOption, setSelectedOption] = useState(null);

	const handleOptionSelect = (option) => {
		setSelectedOption(option);
	};

	const changeHandler = e => {
		const getshow = e.target.value;
		setIsVisible(getshow);
	}

	const handleInputChange = e => {
		const { name, value } = e.target;
		setBlogData({
			...blogData,
			[name]: value,
		});
		setTitle(e.target.value);
	};

	useEffect(() => {
		// Simulate loading delay with setTimeout (replace with your actual data fetching logic)
		const loadingDelay = setTimeout(() => {
			setIsLoading(false);
			setIsPreviewButtonVisible(true);
		}, 2000);

		return () => clearTimeout(loadingDelay); // Clean up the timeout on component unmount
	}, []);

	useEffect(() => {
		// setEditorData(generatedBlogData || editorData || '');
		setEditorData(editorData || '');
		setTitle(title || initialTitle || '');
		setBlogHeader(blogHeader)
		// Set the editorData state from the received content
	}, [editorData, initialTitle, title, blogHeader]);

	const handlePublish = async () => {

		const editorText = richtextEditorRef.current.value;
		blogData.blog = editorText;
		blogData.title = Btitle
		const json = JSON.stringify(blogData);
		const blob = new Blob([json], {
			type: 'application/json'
		});

		if (!editorText) {
			// Display an alert or message to the user indicating that the content is empty
			alert('Content cannot be empty. Please add content before publishing.');
			return;
		}

		if (!blogHeader) {
			// Display an alert or message to the user indicating that the header image is empty
			alert('Header image cannot be empty. Please upload a header image before publishing.');
			return;
		}

		if (!Btitle) {
			// Display an alert or message to the user indicating that the header image is empty
			alert('Title cannot be empty. Please input title before publishing.');
			return;
		}

		setBlogData({
			...blogData,
			title: Btitle,
			blog: editorText,
		});

		const formData = new FormData();
		formData.append('blogHeader', blogHeader);
		formData.append('blogData', blob);

		// we need token, user id
		const token = localStorage.getItem("token");
		const tokenType = localStorage.getItem("tokenType");
		const userId = localStorage.getItem("userId");

		console.log('blogContents:', blogData);
		console.log('CoverImage:', blogHeader);
		// const url = `https://halaltravel.ai/ht/api/blog/${userId}`;
		try {
			await axios.post(`https://halaltravel.ai/ht/api/blog/${userId}`, formData, {
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'multipart/form-data',
				},
			});
			console.log('blogContents 2:', blogData);
			console.log('CoverImage 2:', blogHeader);
			console.log('Blog saved successfully:', formData);

			toast.success('Succesfully created blog', {
				autoClose: 1500,
				position: 'bottom-center',
				closeButton: false,
			});
		} catch (error) {
			toast.error('Oops, something went wrong', {
				autoClose: 5000,
				position: 'bottom-center',
				closeButton: true,
			});
			console.log('blogContents 2:', blogData);
			console.log('CoverImage 2:', blogHeader);
			// console.error('Error post blog:', error.response);
			console.error('Error post blog:', error);
		}
	};

	const closePopup3 = () => {
		setIsShowContentSetting(false);
	};

	// let imageSettings = { allowedTypes: ['.jpeg', '.jpg', '.png'], display: 'inline', width: 'auto', 
	// height: 'auto', saveFormat: 'Blob', saveUrl: null, path: null}

	// 

	// const toolbarSettings = {
	// 	items: [
	// 		'Bold',
	// 		'Italic',
	// 		'Underline',
	// 		'StrikeThrough',
	// 		'|',
	// 		'FontName',
	// 		'FontSize',
	// 		'FontColor',
	// 		'BackgroundColor',
	// 		'LowerCase',
	// 		'UpperCase',
	// 		'|',
	// 		'Formats',
	// 		'Alignments',
	// 		'OrderedList',
	// 		'UnorderedList',
	// 		'Outdent',
	// 		'Indent',
	// 		'|',
	// 		'CreateLink',
	// 		'Image',
	// 		'|',
	// 		'ClearFormat',
	// 		'Print',
	// 		'SourceCode',
	// 		'FullScreen',
	// 		'|',
	// 		'Undo',
	// 		'Redo',
	// 	],
	// 	type: 'MultiRow'
	// };

	const toolbarSettings = {
		items: [
			'Bold',
			'Italic',
			'Underline',
			'StrikeThrough',
			'|',
			'FontName',
			'FontSize',
			'FontColor',
			'BackgroundColor',
			'LowerCase',
			'UpperCase',
			'|',
			'Formats',
			'Alignments',
			'OrderedList',
			'UnorderedList',
			'Outdent',
			'Indent',
			'|',
			'CreateLink',
			'Image',
			'|',
			'ClearFormat',
			'Print',
			'SourceCode',
			'FullScreen',
			'|',
			'Undo',
			'Redo',
		],
		type: 'MultiRow',
	};


	const insertImageSettings = {
		saveFormat: "Base64",
		// saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
	};

	useEffect(() => {
		console.log("Updated TOTAL SIZE: ", totalImageSize);
	}, [totalImageSize]);


	function onImageUploading(args) {
		console.log('file is uploading');

		let sizeInBytes = args.fileData.size;
		let maxImageSize = 1.5 * 1024 * 1024;

		if (maxImageSize < sizeInBytes) { // Image exceeds 1.5 MB
			args.cancel = true;
			toast.error('You are only allowed to upload files that are 1.5 MB or smaller.', {
				position: 'top-center',
				autoClose: 5000,
			});
		}

		if ((totalImageSize + sizeInBytes) > 8 * 1024 * 1024) { // Total images exceed 8 MB
			args.cancel = true;
			toast.error('The maximum total size for uploaded images is 8 MB.', {
				position: 'top-center',
				autoClose: 5000,
			});
			return;
		}
		// Update the total size state
		setTotalImageSize((prevSize) => {
			const newSize = prevSize + sizeInBytes;
			// Log the total size in MB
			console.log("TOTAL SIZE in MB: ", (newSize / (1024 * 1024)).toFixed(2) + "MB");
			return newSize;
		});
	};

	function formatNewLinesToHTML(text) {
		return text
			.split('\n')
			.map((item, index) => {
				if (!item) return '';
				if (item.trim().startsWith('1.')) {
					// For list items, you might want to wrap with <li> tags or similar
					return `<li>${item.trim()}</li>`;
				}
				// Wrap other lines in <p> tags
				return `<p>${item.trim()}</p>`;
			})
			.join('');
	}

	const formattedBlogData = generatedBlogData ? formatNewLinesToHTML(generatedBlogData) : '';

	return (
		<>
			{isErrorModalOpen && (
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
								<svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" viewBox="0 0 16 16"><path fill="#ff0000"
									d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575ZM8 5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8 5m1 6a1 1 0 1 0-2 0a1 1 0 0 0 2 0" /></svg>

							</div>
							<h1 className="xs:text-[32px] lg:text-[22px] font-medium leading-normal text-gray-800">
								Reminder </h1>
							<p className="xs:text-[24px] lg:text-[14px] text-gray-600">File size should not exceed 5MB.
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
								className="mr-2 inline-block bg-[#ED5951] px-6 py-2 xs:text-[18px] lg:text-[12px] font-medium uppercase leading-normal text-white hover:text-white bg-white-300 rounded hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			)}
			<div className='flex flex-col font-montserrat mx-auto w-full h-auto'>
				<div className='fixed w-full' style={{ zIndex: 2 }}>
					<HeaderOTAAdmin openPopup1={openPopup1} className="fixed invisible lg:visible" />
					<LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
					<SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />
					<HeaderOTAMobile openPopup1={openPopup1} className="visible fixed overflow-hidden lg:invisible lg:hidden" />
				</div>
				<div className='w-full mx-auto p-5 xs:pt-[160px] lg:pt-[92px]' style={{ zIndex: 1 }}>

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

							<div class="flex-1 items-center">
								<div class="xs:w-20 lg:w-10 xs:h-20 lg:h-10 bg-[#38b000] items-center border-2 border-grey-light mx-auto rounded-full flex">
									<MdOutlineDone className='text-white xs:ml-4 lg:ml-2 xs:w-[40px] xs:h-[40px] lg:w-[20px] lg:h-[20px]' />
								</div>
							</div>

							<div class="flex-1">
							</div>
						</div>

						<div class="flex xs:text-[28px] lg:text-[14px] content-center text-center">
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
					</div>


					<div className="flex justify-end px-4 py-4 mr-8">

						<div className='xs:mt-5 lg:mt-3 m-2 flex justify-end gap-2 fixed' style={{ zIndex: 2 }}>
							{/* Preview Button */}
							<button className=' flex justify-end p-2 bg-[#00A19A] items-center flex xs:text-[35px] lg:text-[14px] lg:w-[50%] xs:w-[35%] xs:h-20 lg:h-10 text-white font-medium xs:rounded-[20px] lg:rounded-lg'
								onClick={handleNavigate1}
								title='Preview post'
							>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
									<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
								</svg>
								<span className="ml-2">Preview</span>
							</button>

							{/* Update Button */}
							<button
								type='submit'
								className='p-2 bg-[#00A19A] items-center flex xs:text-[35px] lg:text-[14px] lg:w-[50%] xs:w-[35%] xs:h-20 lg:h-10 text-white font-medium xs:rounded-[20px] lg:rounded-lg'
								onClick={handleNavigatePublish}
								title='Publish post'
							>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
								</svg>

								<span className="ml-2">Publish</span>
							</button>
							<PublishBlogAI
								showContentSetting={isShowContentSetting}
								closePopup3={closePopup3}
								title={Btitle}
								editorText={richtextEditorRef.current?.value}
							/>
						</div>
					</div>

					<div className='w-full flex flex-col justify-center items-center mt-10'>
						{generatedBlogData ? (
							<>
								<div className='mx-auto w-full lg:mt-2 xs:mt-5 lg:max-w-3xl xs:w-full mb-6'>
									<span className='font-medium xs:text-[35px] lg:text-[14px]'>Blog Title:</span>
									<input
										type='text'
										name='title'
										className='px-2 py-1 xs:text-[30px] lg:text-[12px] w-full lg:h-10 xs:h-24 xs:rounded-[20px] lg:rounded-[5px] focus:border-blue-500'
										placeholder='Title'
										value={Btitle}
										onChange={(e) => setTitle(e.target.value)}
									/>
								</div>

								<div className='w-full flex flex-col justify-center items-center mt-4'>
									<div className='border border-gray-200 rounded-sm shadow p-4 h-[fit] lg:max-w-3xl xs:w-full'>
										<div className='mt-2 m-2 space-y-2'>
											<span className='text-red-400 sm:text-[26px] lg:text-xs'>Maximum upload image size: 1.5 MB</span>

											<RichTextEditorComponent
												height={450}
												className="ck-editor__editable"
												id="defaultRTE"
												showCharCount={true}
												maxLength={10000}
												autoSaveOnIdle='enabled'
												toolbarSettings={toolbarSettings}
												insertImageSettings={insertImageSettings}
												imageUploading={onImageUploading}
												ref={richtextEditorRef}
												value={formattedBlogData || blogData.blog}
												onChange={(e) => {
													setEditorData(e.htmlValue);
													setBlogData({
														...blogData,
														blog: e.htmlValue,
													});
												}}
											>
												<Inject
													services={[Toolbar, Count, Image, Link, HtmlEditor, QuickToolbar]}
												/>
											</RichTextEditorComponent>
										</div>
									</div>
								</div>
							</>
						) : (
							<div className="flex justify-center mt-4"> {/* Adjusted for consistent spacing */}
								<LoadingSpinner />
							</div>
						)}
					</div>


				</div>

			</div >
		</>


	)
}

export default CkEditor;
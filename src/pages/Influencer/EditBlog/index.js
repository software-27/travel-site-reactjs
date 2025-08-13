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
import { Row } from "components";
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
import HeaderOTAMobile from 'components/Header/HeaderOTAMobile/index';
import { useParams } from 'react-router-dom';
import Compressor from '@xkeshi/image-compressor';
import UpdateBlog from 'components/UpdateBlog/index';
import { useAuth } from "AuthContext";

const EditBlog = () => {
	registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF5cXmdCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWXhednRRRWZeV0x/W0Y=');

	const richtextEditorRef = useRef();
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();
	const [isPreviewButtonVisible, setIsPreviewButtonVisible] = useState(false);
	const [uploadedImage, setUploadedImage] = useState(null);
	const navigate = useNavigate();
	const { isLoggedIn } = useAuth();
	const { destination, state, country } = useParams();
	let { blogId } = useParams();
	const [isShowContentSetting, setIsShowContentSetting] = React.useState(false);
	const [totalImageSize, setTotalImageSize] = useState(0);
	// const [editorData, setEditorData] = useState('');
	const [title, setTitle] = useState(localStorage.getItem('EditblogTitle') || '');
	const [blog, setBlog] = useState(localStorage.getItem('EditblogContent') || '');
	const [blogHeader, setBlogHeader] = useState(null);
	const [headerImagePath, setHeaderImagePath] = useState('');
	const [summary, setSummary] = useState('')

	// console.log("HEHEHE: ", headerImagePath);
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

	const closePopup3 = () => {
		setIsShowContentSetting(false);
	};

	const handleBlogChange = (content) => {
		setBlog(content.value); // Assuming content is a string of HTML from the editor
	};

	const handleNavigateUpdate = () => {
		if (isLoggedIn) {
			// navigate("/ota2");
			setIsShowContentSetting(true);
		} else {
			setIsPopup1Open(true);
		}
	};

	const insertImageSettings = {
		saveFormat: "Base64",
		// saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
	};

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
			return;
		}

		if ((totalImageSize + sizeInBytes) > 8 * 1024 * 1024) { // Total images exceed 8 MB
			args.cancel = true;
			toast.error('The maximum total size for uploaded images is 8 MB.', {
				position: 'top-center',
				autoClose: 5000,
			});
			return;
		}
		setTotalImageSize((prevSize) => prevSize + sizeInBytes);
	}

	useEffect(() => {
		const localTitle = localStorage.getItem('EditblogTitle');
		const localBlog = localStorage.getItem('EditblogContent');

		// Function to fetch blog details
		const fetchBlogDetails = async () => {
			try {
				const response = await axios.get(`https://halaltravel.ai/ht/api/blog/blogDetails/${blogId}`);
				const data = response.data;
				const blogSummary = data.summary; //only set the blog details if there are no local edits

				// Only set the blog details if there are no local edits
				if (!localTitle && !localBlog) {
					setTitle(data.title);
					setBlog(data.blog);
				}
				// Set other data as required
				setHeaderImagePath(data.headerImage);
				setSummary(data.summary);
				//console.log('Summary',blogSummary)
				//console.log('Summary 2', summary)
				// ...set other state variables
			} catch (error) {
				console.error('Error fetching blog details:', error);
			}
		};

		if (!localTitle || !localBlog) {
			fetchBlogDetails(); // Only fetch from the server if there's no local edit
		} else {
			// Set state from local storage if available
			if (localTitle) setTitle(localTitle);
			if (localBlog) setBlog(localBlog);
		}

		return () => {
			localStorage.removeItem('EditblogTitle');
			localStorage.removeItem('EditblogContent');
		};

	}, [blogId]);

	useEffect(() => {
		// Auto-saving blog using an interval
		const saveBlog = () => {
			console.log('Auto-saving blog...');
			localStorage.setItem('EditblogTitle', title);
			localStorage.setItem('EditblogContent', blog);
		};

		saveBlog();
		const interval = setInterval(saveBlog, 1000 * 60);

		// Cleanup interval on component unmount
		return () => {
			clearInterval(interval);
			localStorage.removeItem('EditblogTitle');
			localStorage.removeItem('EditblogContent');
		};
	}, [title, blog]);


	function handleNavigate1() {
		const editorText = richtextEditorRef.current.value;
		// setEditorData(editorText);

		const coverImageUrl = blogHeader ? URL.createObjectURL(blogHeader) : null;

		const previewUrl = '/edit-blog-preview';
		const newTab = window.open(previewUrl, '_blank');
		if (newTab) {
			newTab.onload = () => {
				// Pass the necessary data to the new tab
				newTab.postMessage({ blog, title: title, coverImageUrl }, window.location.origin);
			};
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


	// const handleUpdate = async () => {

	// 	const editorText = richtextEditorRef.current.value;
	// 	const json = JSON.stringify(blogData);
	// 	const blob = new Blob([json], {
	// 		type: 'application/json'
	// 	});

	// 	const formData = new FormData();
	// 	formData.append('blogHeader', blogHeader);
	// 	formData.append('blogData', blob);

	// 	// we need token, user id
	// 	const token = localStorage.getItem("token");
	// 	const tokenType = localStorage.getItem("tokenType");
	// 	const userId = localStorage.getItem("userId");

	// 	console.log('blogContents:', blogData);
	// 	// console.log('blog:',editorText);
	// 	console.log('CoverImage:', blogHeader);
	// 	setBlogData(prevBlogData => ({
	// 		...prevBlogData,
	// 		blog: editorText,
	// 	}));

	// 	console.log('blogData.blog:', blogData.blog);

	// 	try {
	// 		await axios.patch(`https://halaltravel.ai/ht/api/blog/update/${blogId}`, formData, {
	// 			headers: {
	// 				Authorization: `Bearer ${token}`,
	// 				'Content-Type': 'multipart/form-data',
	// 			},
	// 		});


	// 		console.log('Blog updated successfully:', formData);

	// 		toast.success('Succesfully updated blog', {
	// 			autoClose: 1500,
	// 			position: 'bottom-center',
	// 			closeButton: false,
	// 		});
	// 	} catch (error) {
	// 		toast.error('Oops, something went wrong', {
	// 			autoClose: 5000,
	// 			position: 'bottom-center',
	// 			closeButton: true,
	// 		});
	// 		console.error('Error updating blog:', error.response);
	// 	}
	// };

	// console.log('blogContents1:', blogData);

	// let imageSettings = { allowedTypes: ['.jpeg', '.jpg', '.png'], display: 'inline', width: 'auto', 
	// height: 'auto', saveFormat: 'Blob', saveUrl: null, path: null}


	const performUpdate = async (formData, token) => {

		await axios.patch(`https://halaltravel.ai/ht/api/blog/update/${blogId}`, formData, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'multipart/form-data',
			},
		});

		console.log('Blog updated successfully:', formData);

		// You can choose to update state or trigger any other logic here after a successful update

		toast.success('Successfully updated blog', {
			autoClose: 1500,
			position: 'bottom-center',
			closeButton: false,
		});
	};

	const handleUpdateError = (error) => {
		toast.error('Oops, something went wrong', {
			autoClose: 5000,
			position: 'bottom-center',
			closeButton: true,
		});
		console.error('Error updating blog:', error.response);
	};

	// Now call the updateBlog function wherever needed

	return (
		<div className='flex flex-col font-montserrat mx-auto w-full h-auto'>
			<div className='fixed w-full' style={{ zIndex: 2 }}>
				<HeaderOTAAdmin openPopup1={openPopup1} className="fixed invisible lg:visible" />
				<LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
				<SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />
				<HeaderOTAMobile openPopup1={openPopup1} className="visible fixed overflow-hidden lg:invisible lg:hidden" />
			</div>


			<div className='w-full mx-auto p-5 xs:pt-[160px] lg:pt-[92px]' style={{ zIndex: 1 }}>
				<div className="flex justify-end px-4 py-4 mr-8">
					<div className='xs:mt-5 lg:mt-3 flex justify-end gap-2 fixed'
						style={{ zIndex: 2 }}>
						{/* Preview Button */}
						<button className='p-2 bg-[#00A19A] items-center xs:text-[35px] lg:text-[14px] lg:w-[50%] xs:w-[50%] xs:h-20 lg:h-10 text-white font-medium xs:rounded-[20px] lg:rounded-lg'
							onClick={handleNavigate1}
							title='Preview post'
						>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="sm:w-12 sm:h-12 lg:w-6 lg:h-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
							</svg>
							<span className="ml-2">Preview</span>
						</button>

						{/* Update Button */}
						<button
							type='submit'
							className='p-2 bg-[#00A19A] items-center flex xs:text-[35px] lg:text-[14px] lg:w-[50%] xs:w-[50%] xs:h-20 lg:h-10 text-white font-medium xs:rounded-[20px] lg:rounded-lg'
							onClick={handleNavigateUpdate}
							title='Update post'
						>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:w-11 sm:h-11 lg:w-6 lg:h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
							</svg>
							<span className="ml-2">Update</span>
						</button>
						<UpdateBlog
							showContentSetting={isShowContentSetting}
							closePopup3={closePopup3}
							title={title}
							editorText={richtextEditorRef.current?.value}
							headerImagePath={headerImagePath}
							blogId={blogId}
							summary={summary}
						/>
					</div>
				</div>

				<div className='w-full flex flex-col justify-center items-center mt-10'>

					<div className='mx-auto w-full lg:mt-2 xs:mt-5 lg:max-w-3xl xs:w-full mb-6'>
						{/* <Row className="row-1 w-full z-0 items-center justify-start p-2 gap-6"> */}
						{/* <div className='mx-auto w-full lg:mt-2 xs:mt-5 lg:max-w-3xl xs:w-full my-3 ml-1'> */}
						<span className='font-medium xs:text-[35px] lg:text-[14px]'>Blog Title:</span>
						<input
							type='text'
							className='px-2 py-1 xs:text-[30px] lg:text-[12px] w-full lg:h-10 xs:h-24 xs:rounded-[20px] lg:rounded-[5px] focus:border-blue-500'
							// placeholder='Title'
							name='title'
							value={title} // Set the 'title' value as the input value
							onChange={(e) => setTitle(e.target.value)}
						// onChange={handleInputChange}
						/>
					</div>

					{/* </div> */}

					<div className='w-full flex flex-col justify-center items-center mt-4'>
						<div className='overflow-y-auto border border-gray-200 rounded-sm shadow p-4 h-[fit] lg:max-w-3xl xs:w-full'>
							<div className='mt-2 m-2 space-y-2'>
								<span className='text-red-400 sm:text-[26px] lg:text-xs'>Maximum upload image size: 1.5 MB</span>

								<RichTextEditorComponent
									height={450}
									className="ck-editor__editable"
									id="defaultRTE"
									saveInterval="1"
									showCharCount={true}
									maxLength={40000}
									value={blog}
									toolbarSettings={toolbarSettings}
									insertImageSettings={insertImageSettings}
									imageUploading={onImageUploading}
									onChange={handleBlogChange}
									ref={richtextEditorRef}
									change={(args) => setBlog(args.value)}

								>
									<Inject services={[Toolbar, Count, Image, Link, HtmlEditor, QuickToolbar]} />
								</RichTextEditorComponent>

							</div>

						</div>
					</div>

				</div>
			</div>
		</div>


	)
}

export default EditBlog;
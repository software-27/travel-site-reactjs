import React, { useRef, useState, useEffect } from "react";
import { MdOutlineDone } from 'react-icons/md';
import './cke.css';
import { useNavigate } from '../../../../node_modules/react-router-dom/index';
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from 'components/LoadingSpinner/index';
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
	PasteCleanup,
} from '@syncfusion/ej2-react-richtexteditor';
import HeaderOTAMobile from 'components/Header/HeaderOTAMobile/index';
import { ButtonMp, Row, Column, Text, Button, Img } from "components";
import { FaTimes } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import loadGoogleMapsApi from "load-google-maps-api";
import PlacesAutocomplete from "react-places-autocomplete";
import {
	geocodeByAddress,
	geocodeByPlaceId,
	getLatLng,
} from "react-places-autocomplete";
import { BiWorld } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FiCalendar } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaMapMarkerAlt, FaPlus } from "react-icons/fa";
import DatePicker from "react-datepicker";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch } from "react-redux";
import { fetchData2 } from "redux/actions2";
import { useAuth } from "AuthContext";
import { useParams } from "react-router-dom";
import PublishBlog from "components/PublishBlog/index";
// import { DialogComponent } from '@syncfusion/ej2-react-popups';

const CkEditor2 = () => {
	registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhKYVFyWmFZfVpgdVdMZFlbRHJPMyBoS35RckVgWXledXRdR2FcUEB0');

	const richtextEditorRef = useRef();
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();
	const [isPreviewButtonVisible, setIsPreviewButtonVisible] = useState(false);
	const [editorData, setEditorData] = useState('');
	const [uploadedImage, setUploadedImage] = useState(null);
	const [showAI, setShowAI] = React.useState(false);
	const [characterEx, setCharacterEx] = useState(0);
	const [characterIn, setCharacterIn] = useState(0);
	const { isLoggedIn } = useAuth();
	const { destination, state, country } = useParams();
	const [title, setTitle] = useState(localStorage.getItem('blogTitle') || '');
	const [blog, setBlog] = useState(localStorage.getItem('blogContent') || '');
	const [isShowContentSetting, setIsShowContentSetting] = React.useState(false);
	const [totalImageSize, setTotalImageSize] = useState(0);
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

	// Save the content to local storage or send to a server
	useEffect(() => {
		const saveBlog = () => {
			console.log('Auto-saving blog...');
			localStorage.setItem('blogTitle', title);
			localStorage.setItem('blogContent', blog ? blog : '<p></p>');
		};

		saveBlog();
		const interval = setInterval(saveBlog, 1000 * 60);

		// Cleanup interval on component unmount
		return () => {
			clearInterval(interval);
			localStorage.removeItem('blogTitle');
			localStorage.removeItem('blogContent');
		};
	}, [title, blog]);


	// Handler for title change
	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const closePopup3 = () => {
		setIsShowContentSetting(false);
	};

	const [blogHeader, setBlogHeader] = useState(null);
	const [blogData, setBlogData] = useState({
		title: title,
		blog: blog,
	});


	function handleNavigate1() {
		const editorText = richtextEditorRef.current.value;
		setEditorData(editorText);
		const coverImageUrl = blogHeader ? URL.createObjectURL(blogHeader) : null;

		const previewUrl = '/blog-preview';
		const newTab = window.open(previewUrl, '_blank');
		if (newTab) {
			newTab.onload = () => {
				// Pass the necessary data to the new tab
				newTab.postMessage({ blog, title: title, coverImageUrl }, window.location.origin);
			};
		}

	};

	const handleNavigatePublish = () => {
		if (isLoggedIn) {
			// navigate("/ota2");
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


	const [newDestination, setNewDestination] = useState(destination);
	const [newState, setNewState] = useState(state);
	const [newCountry, setNewCountry] = useState(country);

	// Autocomplete
	const [isApiLoaded, setApiLoaded] = useState(false);
	//   const [isLoading, setIsLoading] = useState(false);
	const [cursorColor, setCursorColor] = useState("black");
	useEffect(() => {
		loadGoogleMapsApi({
			key: "AIzaSyB40jqFnXxo_4ZX7WezdrlR4NicJsseyu8",
			libraries: ["places"], // this line ensures the Places library is loaded
		}).then(() => {
			setApiLoaded(true);
		});

		const interval = setInterval(() => {
			setCursorColor((prevColor) =>
				prevColor === "black" ? "transparent" : "black"
			);
		}, 500); // Toggle cursor color every 500ms

		return () => {
			clearInterval(interval);
		};
	}, []);


	const [isClicked, setIsClicked] = useState(false);
	const wrapperRef = useRef(null);
	const [m, setm] = useState("");
	const [day, setday] = useState("");

	const [nav, setNav] = useState(false);
	const [isDisabled, setDisabled] = useState(false);

	//for dropdown list
	const [isVisible, setIsVisible] = useState("");
	const [isPopup1Open, setIsPopup1Open] = useState(false);
	const [isPopup2Open, setIsPopup2Open] = useState(false);
	const [isModalOpen, setModalOpen] = useState(true);

	const openPopup1 = () => {
		setIsPopup1Open(true);
	};

	const toggleModal = () => {
		setIsErrorModalOpen(!isErrorModalOpen);
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

	const handleBlogChange = (content) => {
		setBlog(content.value); // Assuming content is a string of HTML from the editor
	};

	useEffect(() => {
		// Simulate loading delay with setTimeout (replace with your actual data fetching logic)
		const loadingDelay = setTimeout(() => {
			setIsLoading(false);
			setIsPreviewButtonVisible(true);
		}, 2000);

		return () => clearTimeout(loadingDelay); // Clean up the timeout on component unmount
	}, []);

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

	const pasteCleanupSettings = {
		// allowedStyleProps: ['color', 'margin', 'font-size'],
		allowedStyleProps: [
			'background', 'background-color', 'border', 'border-bottom', 'border-left',
			'border-radius', 'border-right', 'border-style', 'border-top', 'border-width',
			'clear', 'color', 'cursor', 'direction', 'display', 'float', 'font',
			'font-family', 'font-size', 'font-weight', 'font-style', 'height', 'left',
			'line-height', 'margin', 'margin-top', 'margin-left', 'margin-right',
			'margin-bottom', 'max-height', 'max-width', 'min-height', 'min-width',
			'overflow', 'overflow-x', 'overflow-y', 'padding', 'padding-bottom',
			'padding-left', 'padding-right', 'padding-top', 'position', 'right',
			'table-layout', 'text-align', 'text-decoration', 'text-indent', 'top',
			'vertical-align', 'visibility', 'white-space', 'width'
		],
		deniedAttrs: ['class', 'title', 'id'],
		deniedTags: ['a'],
		keepFormat: false,
		plainText: false,
		prompt: true
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
		// Update the total size state
		setTotalImageSize((prevSize) => {
			const newSize = prevSize + sizeInBytes;
			// Log the total size in MB
			console.log("TOTAL SIZE in MB: ", (newSize / (1024 * 1024)).toFixed(2) + "MB");
			return newSize;
		});
	}


	// Travelplan
	// const [destination1, setDestination1] = useState('');
	const [days, setDays] = useState("");
	const [language, setLanguage] = useState("");
	const [attractions, setAttractions] = useState([]);
	const [interests, setInterests] = useState([]);
	const [include, setInclude] = useState("");
	const [exclude, setExclude] = useState("");
	const [date, setDate] = useState(new Date());
	// Assuming date is a Date object
	const formattedDate = `${(date.getMonth() + 1)
		.toString()
		.padStart(2, "0")}/${date
			.getDate()
			.toString()
			.padStart(2, "0")}/${date.getFullYear()}`;

	const [selectedAttraction, setSelectedAttraction] = useState([]);
	const [selectedInterest, setSelectedInterest] = useState([]);
	const [showInterests, setShowInterests] = useState(false);

	useEffect(() => {
		// Fetch initial attractions when the component mounts
		fetchAttractions();
	}, []);

	const fetchAttractions = async () => {
		try {
			const response = await axios.get(
				"https://halaltravel.ai/hu/api/chatgpt/attraction"
			);
			setAttractions(response.data);
		} catch (error) {
			console.error("Error fetching attractions:", error);
		}
	};

	const fetchInterests = async (selectedAttractions) => {
		// Send a POST request with the selected attractions
		try {
			const response = await axios.post(
				"https://halaltravel.ai/hu/api/chatgpt/interests",
				selectedAttractions
			);

			if (response.status === 200) {
				setInterests(response.data);
			} else {
				console.error("Error fetching interests:", response.statusText);
			}
		} catch (error) {
			console.error("Error fetching interests:", error);
		}
	};

	useEffect(() => {
		// Fetch interests based on the selected attractions whenever selectedAttractions change
		fetchInterests(selectedAttraction);
	}, [selectedAttraction]);

	const handleAttractionClick = (attraction) => {
		// Check if the attraction is already selected
		if (selectedAttraction.includes(attraction)) {
			// If it is selected, remove it from the selected attractions
			setSelectedAttraction(
				selectedAttraction.filter((item) => item !== attraction)
			);
		} else {
			// If it is not selected, check if the maximum limit (3) is reached
			if (selectedAttraction.length < 3) {
				// Add the attraction to the selected attractions
				setSelectedAttraction([...selectedAttraction, attraction]);
			} else {
				// Display an alert or message indicating that the maximum limit is reached
				alert("You can select up to three attractions.");
			}
		}
	};

	const handleInterestClick = (interest) => {
		// Check if the interest is already selected
		if (selectedInterest.includes(interest)) {
			// If it is selected, remove it from the selected interests
			setSelectedInterest(selectedInterest.filter((item) => item !== interest));
		} else {
			// If it is not selected, check if the maximum limit (7) is reached
			if (selectedInterest.length < 5) {
				// Add the interest to the selected interests
				setSelectedInterest([...selectedInterest, interest]);
			} else {
				// Display an alert or message indicating that the maximum limit is reached
				alert("You can select up to five interests.");
			}
		}
	};

	// console.log("Interest: ", interests);
	// console.log("SelectedAttraction: ", selectedAttraction);
	// console.log("SelectedInterest: ", selectedInterest);

	const handleFetchInterests = () => {
		// Fetch interests based on the selected attractions
		fetchInterests();
	};

	const dispatch = useDispatch();

	const inputRef = useRef(null);
	const focusInput = () => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	const handleInputChange2 = (e) => {
		const { name, value } = e.target;
		if (name === "exclude") {
			setExclude(value); // Assuming exclude is a comma-separated string
		} else if (name === "include") {
			setInclude(value); // Assuming include is a comma-separated string
		} else if (name === "date") {
			setDate(value);
		}

		if (exclude.length <= 50) {
			setCharacterEx(exclude.length);
		}
	};

	// Set the minimum date to the current date
	const minDate = new Date();



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

					<div className="flex justify-end px-4 py-4 mr-8">

						<div className='xs:mt-5 lg:mt-3 m-2 flex justify-end gap-2 fixed'
							style={{ zIndex: 2 }}
						>
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

							{/* Save Button */}
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
							<PublishBlog
								showContentSetting={isShowContentSetting}
								closePopup3={closePopup3}
								title={title}
								editorText={richtextEditorRef.current?.value}
							/>

						</div>
					</div>

					<div className='w-full flex flex-col justify-center items-center mt-10'>

						<div className='mx-auto w-full lg:mt-2 xs:mt-5 lg:max-w-3xl xs:w-full mb-6'>
							<span className='font-medium xs:text-[35px] lg:text-[14px]'>Blog Title:</span>
							<input
								type='text'
								name='title'
								className='px-2 py-1 xs:text-[30px] lg:text-[12px] w-full lg:h-10 xs:h-24 xs:rounded-[20px] lg:rounded-[5px] focus:border-blue-500'
								placeholder='Title'
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							// onChange={handleInputChange}
							/>
						</div>
					</div>

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
									pasteCleanupSettings={pasteCleanupSettings}
								>
									<Inject services={[Toolbar, Count, Image, Link, HtmlEditor, QuickToolbar, PasteCleanup]} />
								</RichTextEditorComponent>

								<div className="flex justify-center"> {/* Center the spinner using flex */}
								</div>


							</div>

						</div>
					</div>


				</div>

			</div>

		</>


	)
}

export default CkEditor2;
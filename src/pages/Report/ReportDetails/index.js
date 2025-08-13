import HeaderOTA from 'components/Header/HeaderOTA/index';
import { Input } from 'components/Input/index';
import { Text, Img, Line, ButtonMp } from "components";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import HeaderOTAMobile from 'components/Header/HeaderOTAMobile/index';
import SignupPage from 'components/SignUp/index';
import LoginPage from 'components/Login/index';
import { MdOutlineFileDownload, MdOutlineClose, MdOutlineCalendarToday } from 'react-icons/md';
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";
import Footerepic from 'components/Footer/Footerepic/index';
import { reportData } from "./data";
import axios from '../../../../node_modules/axios/index';
import React from 'react';
import * as XLSX from 'xlsx';
import DatePicker from "react-datepicker";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from 'components/LoadingSpinner/index';


const ReportDetails = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    const userId = localStorage.getItem("userId");

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


    const [reportData, setReportData] = useState([]);
    const [reportDetails, setReportDetails] = useState([]);
    const [downloadReportData, setDownloadReportData] = useState([]);
    const [selectedRange, setSelectedRange] = useState('Past7');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [pageSize, setPageSize] = useState('10');
    const [currentDate, setCurrentDate] = useState('');
    const [loadingDownload, setLoadingDownload] = useState(false);
    const [loadingReport, setLoadingReport] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); //pageNumber


    const fetchData = async () => {
        setLoadingReport(true);

        let queryParams = {
            range: selectedRange,
            pageNumber: currentPage,
            pageSize: pageSize,
        };

        // if (selectedRange === 'Custom') {
        //     queryParams.startDate = formatDateUsingLocale(startDate);
        //     queryParams.endDate = formatDateUsingLocale(endDate);
        // }

        // Function to check if a date is valid
        const isValidDate = (date) => {
            return date && !isNaN(new Date(date).getTime());
        };

        if (selectedRange === 'Custom') {
            // Check if both startDate and endDate are valid
            if (!isValidDate(startDate) || !isValidDate(endDate)) {
                // If either date is invalid, log a message and exit the function early.
                console.log("Please fill in the start date and end date first.");
                toast.error("Please select start date and end date.", {
                    autoClose: 2000,
                    position: 'top-right',
                    closeButton: true,
                    className: "xs:top-40 lg:top-20 toast-message",
                });
                setLoadingReport(false);
                return; // Exit the function to avoid making the API call
            } else {
                // If both dates are valid, format them and add to queryParams
                queryParams.startDate = formatDateUsingLocale(startDate);
                queryParams.endDate = formatDateUsingLocale(endDate);
            }
        }

        console.log("Query Params: ", queryParams);

        try {
            const response = await axios.get(
                `https://halaltravel.ai/ht/api/transactions/leads/${userId}`,
                {
                    params: queryParams,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = response.data;

            console.log("Report Details data: ", data);
            console.log("Report Details elements: ", data.elements);

            const sortedElements = data.elements.sort((a, b) => {
                const dateA = new Date(a.leadDate);
                const dateB = new Date(b.leadDate);

                return dateA - dateB;
            });

            setReportData(data);
            setReportDetails(sortedElements);

            // const processedReportDetails = sortedElements.map(({ id, createdBy, dtCreated, updatedBy, dtUpdated, revenue, ...keepAttrs }) => keepAttrs);
            const processedReportDetails = sortedElements.map(({
                id, createdBy, dtCreated, updatedBy, dtUpdated, revenue, commission, brandId, label, hotelId, pvalue, eid, pid, integrationCode, ...keepAttrs
            }) => ({
                ...keepAttrs, // Spread the rest of the attributes to keep them unchanged
                commission: commission * 0.5 // Adjust the commission to be 50% of its original value
            }));
            console.log("processedReportDetails: ", processedReportDetails);

            setDownloadReportData(processedReportDetails);

            const date = new Date();
            setCurrentDate(formatCustomDate(date));

            setLoadingReport(false);

        } catch (error) {
            console.error('Failed to fetch data:', error);
            setLoadingReport(false);
            toast.error("Something went wrong, please try after sometime.", {
                autoClose: 2000,
                position: 'top-right',
                closeButton: true,
                className: "xs:top-40 lg:top-20 toast-message",
            });
        }
    };

    useEffect(() => {

        fetchData();

    }, [currentPage, userId]);



    const handleRangeChange = (event) => {
        setSelectedRange(event.target.value);

        if (event.target.value !== 'Custom') {
            setStartDate('');
            setEndDate('');
        }

        setIsClick(true);
    };


    // Handler for changes in the date range
    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        setIsClick(true);
    };

    function formatDateUsingLocale(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-CA', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
    }


    // *DOWNLOAD FUNCTIONS*
    const downloadExcel = (reportDetails) => {
        setLoadingDownload(true);

        // Define a file name
        const fileName = 'ReportDetails.xlsx';

        // Create a new workbook and add a worksheet
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(reportDetails);

        // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'ReportDetails');

        // Define export options
        const exportOptions = { bookType: 'xlsx', type: 'binary' };

        // Write the workbook in binary format
        const excelBuffer = XLSX.write(workbook, exportOptions);

        // Convert to a Blob and trigger download
        const data = new Blob([s2ab(excelBuffer)], { type: 'application/octet-stream' });
        saveAs(data, fileName);

        setLoadingDownload(false);
    };

    // Utility function to convert a binary string to an ArrayBuffer
    const s2ab = (s) => {
        const buffer = new ArrayBuffer(s.length);
        const view = new Uint8Array(buffer);

        for (let i = 0; i < s.length; i++) {
            view[i] = s.charCodeAt(i) & 0xFF;
        }
        return buffer;
    };

    const saveAs = (blob, fileName) => {
        const url = window.URL.createObjectURL(blob);
        const anchorElem = document.createElement('a');
        anchorElem.style.display = 'none';
        anchorElem.href = url;
        anchorElem.download = fileName;
        document.body.appendChild(anchorElem);
        anchorElem.click();
        document.body.removeChild(anchorElem);
        window.URL.revokeObjectURL(url);
    };


    // Custom function to format the date
    function formatCustomDate(date) {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const day = date.getDate().toString().padStart(2, '0');
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        const timezone = "GMT+0800 (Malaysia Time)"; // Hardcoded, as timezone offset and name handling can be complex and vary

        return `${month} ${day} ${year} ${hours}:${minutes}:${seconds} ${timezone}`;
    }

    // * PAGINATION *
    // const productsPerPageDeals = 10; // Number of products to display per page
    // const totalPagesEpic = Math.ceil(epicData.length / productsPerPageEpic); // Calculate total pages
    const totalPages = Math.ceil(reportData.totalElements / pageSize); // Calculate total pages



    // Calculate the index range for the products to display on the current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;


    const handleArrowClick = (direction) => {
        if (direction === 'left' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (direction === 'right' && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const getPageButtonsRange = () => {
        const buttonsRange = [];
        const startPage = Math.max(currentPage - 1, 1);
        const endPage = Math.min(currentPage + 1, Math.ceil(totalPages));

        for (let i = startPage; i <= endPage; i++) {
            buttonsRange.push(i);
        }

        return buttonsRange;
    };



    function handleViewOnline() {
        fetchData();
        setIsClick(false);
        setCurrentPage(1);
    }

    function handleNavigate12() {
        navigate("/report-dashboard");
    }



    return (
        <>
            <div className='fixed w-full' style={{ zIndex: 2 }}>
                <HeaderOTAAdmin openPopup1={openPopup1} className="fixed invisible lg:visible" />
                <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
                <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />
                <HeaderOTAMobile openPopup1={openPopup1} className="visible fixed overflow-hidden lg:invisible lg:hidden" />
            </div>

            <div className="w-full font-montserrat bg-[#F5F5F5] p-[50px] xs:pt-[200px] lg:pt-[132px]">

                <div className="items-center top-[25%] justify-start flex w-full mb-[30px]">
                    <text className="font-semibold opacity-100 md:text-[42px] lg:text-[25px] text-gray text-shadow-lg">
                        Transaction Report
                    </text>
                </div>

                <div className="flex md:flex-col lg:flex-row w-full">
                    <div className='flex flex-row md:[100%] lg:w-[50%] md:mb-10 lg:mb-0'>
                        <div className='md:text-[22px] lg:text-[13px] mr-[20px]'>
                            {/* <label htmlFor="date-range">Select a date range: </label> */}
                            <select
                                id="date-range"
                                className='items-center md:text-[22px] lg:text-[13px] text-black md:w-[220px] lg:w-[140px] border-[1px] border border-[#1E9A4D] rounded-[5px] bg-[#FFFFFF] pr-[15px] shadow-md'
                                value={selectedRange}
                                onChange={handleRangeChange}
                            >
                                <option value="Past7">Past 7 days</option>
                                <option value="Past30">Past 30 days</option>
                                <option value="CurrentM">This month</option>
                                <option value="Custom">Specific dates</option>
                            </select>
                        </div>
                        {selectedRange === 'Custom' &&
                            <div className="flex items-center border-[1px] border border-[#1E9A4D] rounded-[5px] bg-[#FFFFFF] pr-[15px] mr-[20px] shadow-md">
                                {/* <div className="py-1 px-4 w-[230px] rounded bg-[#F3F3F3] border border-[#F3F3F3] focus:border-[#00A19A]"> */}
                                <MdOutlineCalendarToday size={19} className="mx-4 text-[#1E9A4D]" />
                                <DatePicker
                                    className="font-normal md:text-[22px] lg:text-[13px] not-italic text-black placeholder:required text-slate_700 w-full"
                                    // wrapperClassName="w-full"
                                    placeholderText="Select dates"
                                    type="date"
                                    selected={startDate}
                                    onChange={handleDateChange}
                                    startDate={startDate}
                                    endDate={endDate}
                                    selectsRange
                                />
                                {/* </div> */}
                            </div>
                        }

                        <div
                            className={`flex items-center rounded-[5px] px-[30px] py-[5px] bg-[#1E9A4D] common-pointer hover:bg-[#0E7535] border border-[#1E9A4D] 
                            ${isClick ? '' : 'shadow-md'}`}
                            style={{
                                // boxShadow: isClick ? 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' : 'none'
                                boxShadow: isClick ? 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px' : ''

                            }}
                            onClick={handleViewOnline}
                        >
                            <text className="font-medium md:text-[22px] lg:text-[13px] text-[#FFFFFF] ">
                                View Online
                            </text>
                        </div>
                    </div>

                    <div className='flex flex-row md:[100%] lg:w-[50%] justify-end'>
                        <div
                            className={`flex items-center rounded-[5px] px-[30px] py-[5px] bg-[#1E9A4D] border border-[#1E9A4D] shadow-md
                            ${loadingDownload ? 'not-allowed bg-opacity-[80%] ' : 'common-pointer bg-opacity-[100%] hover:bg-[#0E7535]'}`}
                            // onClick={() => downloadExcel(downloadReportData)}
                            onClick={() => {
                                if (!loadingDownload) {
                                    downloadExcel(downloadReportData);
                                }
                            }}
                        >
                            <MdOutlineFileDownload size={17} className="md:hidden lg:block mr-2 text-[#FFFFFF]" />
                            <MdOutlineFileDownload size={28} className="md:block lg:hidden mr-2 text-[#FFFFFF]" />
                            <text className="font-medium md:text-[22px] lg:text-[13px] text-[#FFFFFF] ">
                                Download
                            </text>
                        </div>
                        {/* <div className="flex items-center common-pointer rounded-[5px] px-[30px] py-[5px] ml-[20px] border-[#1E9A4D] border-[1px] bg-[#FFFFFF] hover:bg-[#B3E6C6] shadow-md"
                            onClick={handleNavigate12}>
                            <MdOutlineClose size={17} className="md:hidden lg:block mr-2 text-[#1E9A4D]" />
                            <MdOutlineClose size={28} className="md:block lg:hidden mr-2 text-[#1E9A4D]" />
                            <text className="font-medium md:text-[22px] lg:text-[13px] text-[#1E9A4D] ">
                                Close
                            </text>
                        </div> */}
                    </div>
                </div>

                <div className="mt-[40px]">
                    <text className="md:text-[17px] lg:text-[12px] text-[#000000] font-medium">
                        {/* All dated based on GMT +10. Report created on Jan 08 2024 13:23:12 FMT+0800 (Malaysia Time) */}
                        All dated based on GMT +10. Report created on {currentDate}
                    </text>
                </div>


                <div
                    className="bg-[#FFFFFF] p-[35px] mt-[20px] border-[#D8D8D8] border border-[0.3px] "
                    style={{
                        // boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'\
                        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'

                    }}
                >
                    <div className='flex justify-between items-center pb-8'>
                        <div className="flex flex-row font-poppins items-start common-pointer w-[40%]">
                            <Img
                                className={`h-[13px] mr-5 mt-[10px] w-[15px] ${currentPage > 1 ? 'common-pointer' : ''}
                                ${Math.ceil(totalPages) === 0 ? 'hidden' : ''}`}
                                src="images/img_arrowleftmp.svg"
                                alt="arrowleft"
                                onClick={() => handleArrowClick('left')}
                            />
                            {getPageButtonsRange().map((pageNumber) => (
                                <ButtonMp
                                    key={pageNumber}
                                    className={`flex h-8 w-10 common-pointer items-center justify-center text-center text-shadow-ts md:text-[20px] lg:text-[14px] tracking-[-0.30px] border border-[#1E9A4D]
                                    ${currentPage === pageNumber ? ' bg-[#1E9A4D] text-white' : 'bg-white text-gray-700'}`}
                                    size="txtPoppinsMedium20"
                                    onClick={() => setCurrentPage(pageNumber)}
                                >
                                    {pageNumber}
                                </ButtonMp>
                            ))}
                            <Img
                                className={`h-[13px] ml-5 mt-[10px] w-5 ${currentPage < totalPages ? 'common-pointer' : ''}
                                ${Math.ceil(totalPages) === 0 ? 'hidden' : ''}`}
                                src="images/img_arrowright_gray_700_01.svg"
                                alt="arrowright_One"
                                onClick={() => handleArrowClick('right')}
                            />
                        </div>
                        <div className='flex justify-end items-center'>
                            <span className="self-end md:text-[17px] lg:text-[13px] font-medium">Page {Math.ceil(totalPages) === 0 ? '0' : currentPage} of {Math.ceil(totalPages)}</span>
                        </div>
                    </div>

                    {/* table */}
                    <div className="overflow-x-scroll scrollbar w-full h-auto mb-5">
                        <div className="">
                            <table className="min-w-full table-auto border-collapse">
                                <thead className='bg-gray-100 md:text-[22px] lg:text-[14px]'>
                                    <tr>
                                        {/* 1 */}
                                        <th className="border min-w-[120px]">
                                            <div className='p-3'>Lead Date</div>
                                        </th>
                                        {/* 2 */}
                                        <th className="border min-w-[120px]">
                                            <div className='p-3'>Lead ID</div>
                                        </th>
                                        {/* 3 */}
                                        <th className="border min-w-[150px]">
                                            <div className='p-3'>Lead Check-in</div>
                                        </th>
                                        {/* 4 */}
                                        <th className="border min-w-[150px]">
                                            <div className='p-3'>Lead Check-out</div>
                                        </th>
                                        {/* 5 */}
                                        <th className="border min-w-[120px]">
                                            <div className='p-3'>Booking ID</div>
                                        </th>
                                        {/* 6 */}
                                        <th className="border min-w-[150px]">
                                            <div className='p-3'>Booking Date</div>
                                        </th>
                                        {/* 7 */}
                                        <th className="border min-w-[200px]">
                                            <div className='p-3'>Booking Check-in Date</div>
                                        </th>
                                        {/* 8 */}
                                        <th className="border min-w-[210px]">
                                            <div className='p-3'>Booking Check-out Date</div>
                                        </th>
                                        {/* 9 */}
                                        {/* <th className="border min-w-[120px]">
                                            <div className='p-3'>Revenue</div>
                                        </th> */}
                                        {/* 10 */}
                                        <th className="border min-w-[120px]">
                                            <div className='p-3'>Commission</div>
                                        </th>
                                        {/* 11 */}
                                        <th className="border min-w-[150px]">
                                            <div className='p-3'>Language Code</div>
                                        </th>
                                        {/* 12 */}
                                        <th className="border min-w-[150px]">
                                            <div className='p-3'>Device Category</div>
                                        </th>
                                        {/* 13 */}
                                        <th className="border min-w-[200px]">
                                            <div className='p-3'>Client Country Code</div>
                                        </th>
                                        {/* 14 */}
                                        {/* <th className="border min-w-[120px]">
                                            <div className='p-3'>Brand ID</div>
                                        </th> */}
                                        {/* 15 */}
                                        {/* <th className="border min-w-[120px]">
                                            <div className='p-3'>Label</div>
                                        </th> */}
                                        {/* 16 */}
                                        {/* <th className="border min-w-[120px]">
                                            <div className='p-3'>Hotel ID</div>
                                        </th> */}
                                        {/* 17 */}
                                        <th className="border min-w-[150px]">
                                            <div className='p-3'>Hotel Country</div>
                                        </th>
                                        {/* 18 */}
                                        <th className="border min-w-[120px]">
                                            <div className='p-3'>Hotel City</div>
                                        </th>
                                        {/* 19 */}
                                        <th className="border min-w-[120px]">
                                            <div className='p-3'>Hotel Name</div>
                                        </th>
                                        {/* 20 */}
                                        <th className="border min-w-[150px]">
                                            <div className='p-3'>Transaction Type</div>
                                        </th>
                                        {/* 21 */}
                                        <th className="border min-w-[200px]">
                                            <div className='p-3'>Transaction Type Code</div>
                                        </th>
                                        {/* 22 */}
                                        <th className="border min-w-[200px]">
                                            <div className='p-3'>Transaction Status</div>
                                        </th>
                                        {/* 23 */}
                                        <th className="border min-w-[210px]">
                                            <div className='p-3'>Transaction Status Code</div>
                                        </th>
                                        {/* 24 */}
                                        <th className="border min-w-[120px]">
                                            <div className='p-3'>Vertical</div>
                                        </th>
                                        {/* 25 */}
                                        {/* <th className="border min-w-[120px]">
                                            <div className='p-3'>P Value</div>
                                        </th> */}
                                        {/* 26 */}
                                        {/* <th className="border min-w-[120px]">
                                            <div className='p-3'>EID</div>
                                        </th> */}
                                        {/* 27 */}
                                        {/* <th className="border min-w-[120px]">
                                            <div className='p-3'>PID</div>
                                        </th> */}
                                        {/* 28 */}
                                        <th className="border min-w-[120px]">
                                            <div className='p-3'>CID</div>
                                        </th>
                                        {/* 29 */}
                                        <th className="border min-w-[120px]">
                                            <div className='p-3'>LID</div>
                                        </th>
                                        {/* 30 */}
                                        {/* <th className="border min-w-[120px]">
                                            <div className='p-3'>Integration Code</div>
                                        </th> */}
                                        {/* 31 */}
                                        <th className="border min-w-[120px]">
                                            <div className='p-3'>Bookings</div>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {loadingReport ? (
                                        <tr>
                                            <td colSpan="100%" className="text-center p-5"><LoadingSpinner /></td>
                                        </tr>
                                    ) : reportDetails.length > 0 ? (
                                        reportDetails.map((data, index) => (
                                            <tr key={index} className='text-center md:text-[20px] lg:text-[13px]'>
                                                {/* 1 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.leadDate}</div>
                                                </td>
                                                {/* 2 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.leadId}</div>
                                                </td>
                                                {/* 3 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.leadCheckin}</div>
                                                </td>
                                                {/* 4 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.leadCheckout}</div>
                                                </td>
                                                {/* 5 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.bookingId}</div>
                                                </td>
                                                {/* 6 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.bookingDate}</div>
                                                </td>
                                                {/* 7 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.bookingCheckinDate}</div>
                                                </td>
                                                {/* 8 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.bookingCheckoutDate}</div>
                                                </td>
                                                {/* 9 */}
                                                {/* <td className="border">
                                                    <div className='p-3'>{data.revenue}</div>
                                                </td> */}
                                                {/* 10 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.commission * 0.5}</div>
                                                </td>
                                                {/* 11 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.languageCode}</div>
                                                </td>
                                                {/* 12 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.deviceCategory}</div>
                                                </td>
                                                {/* 13 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.clientCountryCode}
                                                    </div>
                                                </td>
                                                {/* 14 */}
                                                {/* <td className="border">
                                                    <div className='p-3'>{data.brandId}</div>
                                                </td> */}
                                                {/* 15 */}
                                                {/* <td className="border">
                                                    <div className='p-3'>{data.label}</div>
                                                </td> */}
                                                {/* 16 */}
                                                {/* <td className="border">
                                                    <div className='p-3'>{data.hotelId}</div>
                                                </td> */}
                                                {/* 17 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.hotelCountry}</div>
                                                </td>
                                                {/* 18 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.hotelCity}</div>
                                                </td>
                                                {/* 19 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.hotelName}</div>
                                                </td>
                                                {/* 20 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.transactionType}</div>
                                                </td>
                                                {/* 21 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.transactionTypeCode}</div>
                                                </td>
                                                {/* 22 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.transactionStatus}</div>
                                                </td>
                                                {/* 23 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.transactionStatusCode}</div>
                                                </td>
                                                {/* 24 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.vertical}</div>
                                                </td>
                                                {/* 25 */}
                                                {/* <td className="border">
                                                    <div className='p-3'>{data.pvalue}</div>
                                                </td> */}
                                                {/* 26 */}
                                                {/* <td className="border">
                                                    <div className='p-3'>{data.eid}</div>
                                                </td> */}
                                                {/* 27 */}
                                                {/* <td className="border">
                                                    <div className='p-3'>{data.pid}</div>
                                                </td> */}
                                                {/* 28 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.cid}</div>
                                                </td>
                                                {/* 29 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.lid}</div>
                                                </td>
                                                {/* 30 */}
                                                {/* <td className="border">
                                                    <div className='p-3'>{data.integrationCode}</div>
                                                </td> */}
                                                {/* 31 */}
                                                <td className="border">
                                                    <div className='p-3'>{data.bookings}</div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr className='md:text-[20px] lg:text-[13px]'>
                                            <td colSpan="100%" className="text-start border p-5 italic">No Data</td>
                                            {/* Ensure colSpan covers all columns */}
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="mb-[100px]">
                    {/* <span className="self-end mr-7 mt-3 text-[13px]">Page {Math.ceil(totalPages) === 0 ? '0' : currentPage} of {Math.ceil(totalPages)}</span>
                    <div className="flex flex-row font-poppins items-start common-pointer justify-center ml-[419px] mt-[46px] w-[40%]">
                        <Img
                            className={`h-[13px] mt-[25px] w-[15px] ${currentPage > 1 ? 'common-pointer' : 'hidden'}`}
                            src="images/img_arrowleftmp.svg"
                            alt="arrowleft"
                            onClick={() => handleArrowClick('left')}
                        />
                        {getPageButtonsRange().map((pageNumber) => (
                            <ButtonMp
                                key={pageNumber}
                                className={`shadow-lg flex h-[57px] common-pointer items-center justify-center ml-5 rounded-full text-center text-shadow-ts text-xl tracking-[-0.30px] w-[57px]
                              ${currentPage === pageNumber ? ' bg-cyan-700 text-white' : 'bg-white text-gray-700'}`}
                                size="txtPoppinsMedium20"
                                onClick={() => setCurrentPage(pageNumber)}
                            >
                                {pageNumber}
                            </ButtonMp>
                        ))}
                        <Img
                            className={`h-[13px] ml-7 mt-[25px] w-5 ${currentPage < totalPages ? 'common-pointer' : 'hidden'}`}
                            src="images/img_arrowright_gray_700_01.svg"
                            alt="arrowright_One"
                            onClick={() => handleArrowClick('right')}
                        />
                    </div> */}
                </div>

            </div>

            <div className="">
                <Footerepic />
            </div>


        </>
    );

};

export default ReportDetails;
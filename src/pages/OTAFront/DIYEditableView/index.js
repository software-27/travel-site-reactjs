import React, { useState, useRef, useEffect } from 'react';
import {
  ScheduleComponent,
  Day,
  Week,
  Inject,
  ViewsDirective,
  ViewDirective,
  DragAndDrop,
  Resize,
  Agenda
} from '@syncfusion/ej2-react-schedule';
import { registerLicense } from '@syncfusion/ej2-base';
import '../../../styles/scheduler.css';
import { BsPlus } from 'react-icons/bs';
import { restaurant } from 'data/restaurant';
import { AiOutlineClose } from 'react-icons/ai';
import HeaderOTA from 'components/Header/HeaderOTA/index';
import HeaderOTAMobile from 'components/Header/HeaderOTAMobile/index';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { L10n, createElement } from '@syncfusion/ej2-base';
import { Uploader } from '@syncfusion/ej2-react-inputs';
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";


const DIYEditableViewPage = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const receivedData = location.state;
  const timeScale = { enable: true, interval: 60, slotCount: 1 };
  const [showOverlay, setShowOverlay] = useState(false);
  registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF5cXmdCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWXhednRRRWZeV0x/W0Y=');

  const dateHeaderTemplate = (props) => {
    return (
      <div className="container">
        <div className="date-header">{props.date.getDate()}</div>
        <div className="day-header">{props.date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
        <div className="vertical"></div>
      </div>)
  }

  const addLunch = () => {
    setShowOverlay(true);
  };


  //overlay
  const closeOverlay = () => {
    setShowOverlay(false);
  };

  const [foods, setFoods] = useState(restaurant);

  const containerStyle = {
    maxHeight: '800px', // Set the desired maximum height
    overflowY: 'auto', // Add vertical scroll bar when content exceeds the height
  };
  const scrollBarStyle = {
    width: '2px', // Set the width of the scrollbar
  };
  const [hoveredRestaurant, setHoveredRestaurant] = useState(null);


  const handleRestaurantLeave = () => {
    setHoveredRestaurant(null);
  };

  const handleRestaurantHover = (restaurant) => {
    setHoveredRestaurant(restaurant);
    //console.log(restaurant.id)
  };

  //change the event window Title
  // L10n.load({
  //   'en-US': {
  //     schedule: {
  //       newEvent: 'Add Activity',
  //     },
  //   },
  // });

  //add restaurant to plan
  let scheduleObj = useRef(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data1);

  const editorWindowTemplate = '<div><div class="custom-event-editor"><form id="editorForm">' +
    '<input id="description" class="e-field e-input" name="Description" placeholder="Description"/>' +
    '<button id="submit" title="submit" class="e-event-details">Submit</button></form></div></div>';

  // Ensure scheduleObj is initialized and updated properly
  useEffect(() => {
    // Make sure scheduleObj is assigned when the component mounts
    scheduleObj.current = scheduleObj.current || scheduleObj;
  }, []);

  //to prompt different eventwindow for add meal and add activity -- start
  const fieldsData = {
    id: 'Id',
    description: { name: 'Description', title: 'Comments' },
  };

  const onActionBegin = (args) => {
    if (args.requestType === 'toolbarItemRendering') {
      const MealButton = {
        cssClass: 'add-lunch-button',
        align: 'Left',
        id: 'meal-button',
        text: 'Add Meal',
        click: (addLunch),
      };

      const ActivityButton = {
        cssClass: 'add-activity-button',
        align: 'Left',
        id: 'activity-button',
        text: 'Add Activity',
        click: (onActClick),
        //  onOpenEditorButtonClick(null, 'Activity'), // Pass 'Activity' as actionType
      };

      args.items.push(MealButton);
      args.items.push(ActivityButton);
    }
  };

  var meal = false;
  var activity = false;

  const onPopupOpen = (args) => {
    if (args.type === 'Editor') {

      let timeElement = args.element.querySelector('.e-all-day-time-zone-row');

      if (timeElement) {
        timeElement.style.display = 'none';
      }

      let recElement = args.element.querySelector('#_recurrence_editor');
      recElement.style.display = 'none';

      //if the button clicked is activity it will prompt activity editor window
      if (activity) {
        L10n.load({
          'en-US': {
            schedule: {
              newEvent: 'Add Activity',
            },
          },
        });
        if (!args.element.querySelector('.custom-field-row')) {
          let row = createElement('div', { className: 'custom-field-row' });
          let formElement = args.element.querySelector('.e-schedule-form');

          formElement.lastChild.insertBefore(row, formElement.lastChild.lastChild);

          let container = createElement('div', { className: 'custom-field-container' });
          let inputEle = createElement('input', {
            className: 'e-field', attrs: { name: 'Upload' }
          });
          container.appendChild(inputEle);
          row.appendChild(container);
          let uploadObject = new Uploader();
          uploadObject.appendTo(inputEle);
          inputEle.setAttribute('name', 'Upload');


        }

      }
    }

  };
  const onPopupClose = (args) => {
    if (args.type === 'Editor') {
      const customFieldRow = args.element.querySelector('.custom-field-row');

      if (customFieldRow) {
        customFieldRow.remove(); // Remove the custom field row from the DOM
      }
    }
  }

  const onMealclick = (restaurant) => {

    setShowOverlay(false);
    meal = true;

    let cellData = {
      startTime: new Date(),
      endTime: new Date(),
      Location: restaurant ? restaurant.name : '', // Check if restaurant is null
    };

    if (scheduleObj.current) {
      scheduleObj.current.openEditor(cellData, 'Add', restaurant);
    }
    //console.log(scheduleObj);
    meal = false;
  };

  const onActClick = () => {

    activity = true;

    let cellData = {
      startTime: new Date(),
      endTime: new Date(),
    };

    if (scheduleObj.current) {
      scheduleObj.current.openEditor(cellData, 'Add', true);
    }

    activity = false;
  };

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



  return (
    <div>

<div className='fixed w-full' style={{ zIndex: 2 }}>
        <HeaderOTA openPopup1={openPopup1} className="fixed invisible lg:visible" />
        <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
        <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />
        <HeaderOTAMobileEpic openPopup1={openPopup1} className="visible fixed overflow-hidden lg:invisible lg:hidden" />    
      </div>

      <div className="invisible lg:visible bg-white flex flex-col font-ptsans items-center justify-start mx-auto w-full h-300 mt-[-200]" style={{ paddingTop: '92px', zIndex: 1}}>
        <div className="place-items-center grid bg-white shadow-inner p-4 w-full">
          <div>
            <text
              className="font-montserrat common-pointer ml-10 hover:border-b hover:border-b-2 hover:border-b-[#6392F9] hover:text-[#6392F9] p-3 mt-[-20]"
              onClick={() => {
                const dataToPass = {
                  message: receivedData.message,
                  days: receivedData.days,
                  theme: receivedData.theme,
                  date: receivedData.date
                };
                navigate('/ota1', { state: dataToPass });
              }}
            >
              OVERVIEW
            </text>
            <text
              className="font-montserrat common-pointer font-bold border-b border-b-2 border-b-[#6392F9] text-[#6392F9] p-3"
              onClick={() => {
                if (!data?.length) {
                  // Add handling for empty data case if needed
                } else {
                  const dataToPass = {
                    message: receivedData.message,
                    days: receivedData.days,
                    theme: receivedData.theme,
                    date: receivedData.date
                  };
                  navigate('/ota2', { state: dataToPass });
                }
              }}
            >
              EDITABLE VIEW
            </text>
          </div>
        </div>
      </div>

      <div className="visible lg:invisible lg:hidden">

        <div className="place-items-center grid bg-white shadow-inner p-4 w-full"  >
          <div>
            <text
              className="font-montserrat common-pointer ml-10 sm:ml-4 md:ml-6 lg:ml-10 hover:border-b hover:border-b-2 hover:border-b-[#6392F9] hover:text-[#6392F9] p-3"
              onClick={() => {
                try {
                  //  alert("ooooo");

                  const dataToPass = {
                    message: receivedData.message,
                    days: receivedData.days,
                    theme: receivedData.theme,
                    date: receivedData.date
                  };
                  navigate('/ota1', { state: dataToPass });
                } catch (error) {
                  console.error("An error occurred:", error);
                  // Handle the error gracefully, e.g., show an error message to the user
                  alert("An error occurred. Please try again." + error);
                }
              }}
            >
              Overview
            </text>
            <text
              className={`font-montserrat common-pointer font-bold border-b border-b-2 border-b-[#6392F9] text-[#6392F9] p-3 ${data?.length > 0 ? 'cursor-pointer' : ''
                }`}
              onClick={() => {
                if (!data?.length) {



                } else {
                  //  alert("eddddd")
                  const dataToPass = {

                    message: receivedData.message,
                    days: receivedData.days,
                    theme: receivedData.theme,
                    date: receivedData.date
                  };
                  navigate('/ota1', { state: dataToPass });
                }
              }}
            >
              Editable View
            </text>

          </div>
        </div>
      </div>

      <div className="h-screen w-auto scheduler-container mt-10">
        <ScheduleComponent
          ref={scheduleObj}
          showQuickInfo={false}
          eventSettings={{ dataSource: data, fields: fieldsData }}
          style={{ zIndex: 1 }}
          cssClass="schedule-border-customization"
          actionBegin={onActionBegin.bind(this)}
          currentView='Week'
          width='100%'
          selectedDate={new Date()}
          dateHeaderTemplate={dateHeaderTemplate}
          popupOpen={onPopupOpen.bind(this)}
          popupClose={onPopupClose.bind(this)}
        >

          <ViewsDirective>
            <ViewDirective option='Day' interval={1} displayName='1 Day' startHour='00:00' endHour='23:00' timeScale={timeScale} />
            <ViewDirective option='Week' interval={1} displayName='1 Week' showWeekend={true} isSelected={true} />
          </ViewsDirective>
          <Inject services={[Day, Week, DragAndDrop, Resize, Agenda]} />

        </ScheduleComponent>
        {showOverlay && (
          <div className="overlay">
            <div className="overlay-content">
              <AiOutlineClose className="overlay-close" onClick={closeOverlay} />
              <div className='w-full p-2 mt-20' style={containerStyle}>




                {/* Display contents */}
                <div>

                  {/* Tower of London */}

                  <div>
                    <p className='font-semibold font-montserrat text-xl text-[#008009] mb-2 mt-6'>Kuala Lumpur</p>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 gap-y-4 pb-4'>
                      {foods.filter(restaurant => restaurant.category === 'TOL').map((filteredFood) => (
                        <div
                          key={filteredFood.category}
                          className='relative'
                          onMouseEnter={() => handleRestaurantHover(filteredFood)}
                          onMouseLeave={handleRestaurantLeave}
                          onClick={() => onMealclick(filteredFood, 'Add Meal')}
                        >
                          <div className='h-[230px] shadow-md hover:scale-105 duration-300'>
                            <div className='relative'>
                              <img
                                src={filteredFood.image}
                                alt={filteredFood.name}
                                className='w-full h-[130px] object-cover rounded-tl-lg rounded-tr-lg'
                              />
                              {hoveredRestaurant === filteredFood && (
                                <div className='absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
                                  <p
                                    className='text-white font-montserrat inline-flex justify-center items-center text-md'
                                  ><BsPlus size={24} />Add to plan</p>
                                </div>
                              )}
                            </div>

                            <div className='items-center justify-center mt-2 px-2 xs:py-2 lg:py-4'>
                              <p className='text-center text-black text-md font-montserrat text-[#008009] font-semibold'>{filteredFood.name}</p>
                              <p className='font-montserrat ml-2 w-full text-xs inline-flex text-[#00a19a] font-medium'>Cuisines: <p className='text-[#00a19a] w-full font-light text-start font-montserrat italic text-xs bg-slate-70'>
                                &nbsp;{filteredFood.cuisineType}
                              </p></p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>



                </div>
                <style>
                  {`
              ::-webkit-scrollbar {
                width: ${scrollBarStyle.width};
              }
              ::-webkit-scrollbar-thumb {
                background: #888;
              }
              ::-webkit-scrollbar-thumb:hover {
                background: #555;
              }
            `}
                </style>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>

  );

}

export default DIYEditableViewPage;
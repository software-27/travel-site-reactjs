// actions2.js
import { el } from 'date-fns/locale';
import yaml from 'js-yaml';
import axios from 'axios';
import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, FETCH_DATA_LOADING, SAVE_ITINERARY_ID } from './actionTypes2';
import {
  ADD_RESTAURANT_REQUEST,
  ADD_RESTAURANT_SUCCESS,
  ADD_RESTAURANT_FAILURE,
} from './actionTypes2';

export const fetchDataLoading = (loading) => ({
  type: FETCH_DATA_LOADING,
  payload: loading,
});

export const fetchDataSuccess = (data, data1, data3) => ({
  type: FETCH_DATA_SUCCESS,
  payload: { data, data1, data3 },
});

export const saveItineraryId = (itineraryId) => ({
  type: SAVE_ITINERARY_ID,
  payload: itineraryId,
});

export const fetchDataError = (error) => ({
  type: FETCH_DATA_ERROR,
  payload: error,
});


export const addRestaurantRequest = () => ({
  type: ADD_RESTAURANT_REQUEST,

});

export const addRestaurantSuccess = (restaurant) => ({
  type: ADD_RESTAURANT_SUCCESS,
  payload: restaurant,
});

export const addRestaurantFailure = (error) => ({
  type: ADD_RESTAURANT_FAILURE,
  payload: error,
});



// export const fetchData = (receivedData) => async (dispatch) => {
//   console.log('fetchData action creator called');
//   // Your fetchData code here
// };

export const addRestaurantData = () => async (dispatch) => {
  dispatch(addRestaurantRequest(true));

  try {
    console.log("eeeeeee")

    const response = await fetch('https://halaltravel.ai/hs/api/restaurant/place');

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }


    let myArray = [];

    const data = await response.json();

    //let data2= JSON.parse(data.result)

    //myArray3 = Object.entries(data3);

    //console.log("fff",data2)
    console.log("fff", data)

    for (const xloc in data) {
      const currentItem = data[xloc];

      myArray.push({
        id: currentItem.id,
        image: currentItem.image,
        name: currentItem.name,
        rating: currentItem.rating,

        userRatingsTotal: currentItem.userRatingsTotal,

      });

    }

    console.log("pupu", myArray)


    dispatch(addRestaurantSuccess(myArray));

  } catch (error) {
    console.log("eeeeeee", error)
    dispatch(addRestaurantFailure(error.message));
    ;

  } finally {
    dispatch(addRestaurantRequest(false));
  }
};


export const fetchData2 = (receivedData) => async (dispatch) => {
  dispatch(fetchDataLoading(true));

  // const url = receivedData.theme === 0
  //   ? `https://halaltravel.ai/gpt/submitv3?destination=${receivedData.message}&days=${receivedData.days}&language=${receivedData.language}&attractions=${receivedData.attractions.join('&attractions=')}&interests=${receivedData.interests.join('&interests=')}`
  //   : `https://halaltravel.ai/gpt/submitv3?destination=${receivedData.message}&days=${receivedData.days}&language=${receivedData.language}&attractions=${receivedData.attractions.join('&attractions=')}&interests=${receivedData.interests.join('&interests=')}`;

  const url = 'https://halaltravel.ai/gpt/submitv3';

  const token = localStorage.getItem("token");
  const tokenType = localStorage.getItem("tokenType");
  const userId = localStorage.getItem("userId");

  const requestData = {
    destination: receivedData.message,
    state: receivedData.state,
    country: receivedData.country,
    days: receivedData.days,
    attractions: receivedData.attractions,
    interests: receivedData.interests,
    language: receivedData.language,
    include: receivedData.include,
    exclude: receivedData.exclude,
    date: receivedData.date
  };

  try {
    console.log("POST DATA")
    const response = await axios.post(url, requestData, {
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    });
    console.log('url: ',url,' requestData: ', requestData)
    console.log('Response Data:', response.data);

    if (response.status === 200) {
      // if (response.data.error_code === 'Error on OpenAI') {
      //   // Handle the OpenAI error here (if needed)
      //   console.log('OpenAI Error:', response.data.error_message);
      // }

      const { result, location, destination, itineraryId } = response.data;
      console.log('Response ItineraryID: ', itineraryId)

    } else {
      // Handle other status codes, e.g., 404, 500, etc.
      throw new Error(`Error: HTTP status code ${response.status}`);
    }


    //version
    const data = response.data;

    let myArray = [];
    let myArray2 = [];
    let myArray3 = [];
    let myArray4 = [];
    let itineraryId = data.itineraryId;

    //itinerary id from database
    // const itineraryId = data.itineraryId;

    // const data = await response.json();


    // console.log('CHECK again: ',data)

    let data2 = data.result
    let data22 = data.result
    let data3 = data.location
    let data4 = data.destination
    let data5 = data.itineraryId
    //myArray3 = Object.entries(data3);

    console.log("Result", data2)
    console.log("Location", data.location)
    console.log("destination: ", data.destination)
    console.log("itineraryId: ", data5)


    for (const xloc in data3) {
      if (data3.hasOwnProperty(xloc)) {
        const currentItem = data3[xloc];
        if (
          Array.isArray(data3) &&
          data3.length > 0 &&
          currentItem &&
          currentItem.thumbnailURL
        ) {
          myArray3.push({
            rating: currentItem.rating,
            thumbnailURL: currentItem.thumbnailURL,
            title: currentItem.title,
            webURL: currentItem.webURL,
          });
        }
      }
    }



    var x1 = 0;
    var time;
    const keys = Object.keys(data2);
    for (const x in data2) {
      // console.log(x,' : ',data2[x])
      if (x.includes('Day'))
        time = data2[x]

      const index = keys.indexOf(x);

      //  console.log("llllll",data3[x]['thumbnailURL'])
      var aam = 'Day ' + (Number(x) + 1)



      if (Array.isArray(data3) && data3.length > 0) {
        myArray.push({


          day: Number(x) + 1,
          location: 'yes',
          afternoonactivity: data2[x][aam]['03:00 pm']['afternoon activity'],
          //  locationm:data3[x1]['thumbnailURL'],

          //  locationa:data3[x1+1]['thumbnailURL'],
          //  locatione:data3[x1+2]['thumbnailURL'],

          itineraryId: data2[x][aam]['03:00 pm']['id'],

          afternoonplace: data2[x][aam]['03:00 pm']['place'],
          acomment: data2[x][aam]['03:00 pm']['comment'],
          dinner: data2[x][aam]['07:00 pm']['place'],
          morningplace: data2[x][aam]['09:00 am']['place'],
          morningactivity: data2[x][aam]['09:00 am']['morning activity'],
          morningactivity: data2[x][aam]['09:00 am']['morning activity'],
          mcomment: data2[x][aam]['09:00 am']['comment'],
          lunch: data22[x][aam]['12:00 pm']['place'],
          eveningplace: data2[x][aam]['09:00 pm']['place'],
          eveningactivity: data2[x][aam]['09:00 pm']['evening activity'],
          ecomment: data2[x][aam]['09:00 pm']['comment'],

        });

      } else {
        myArray.push({


          day: Number(x) + 1,

          afternoonactivity: data2[x][aam]['03:00 pm']['afternoon activity'],

          locationm: '',
          locatione: '',
          locationa: '',
          location: '',

          afternoonplace: data2[x][aam]['03:00 pm']['place'],
          acomment: data2[x][aam]['03:00 pm']['comment'],
          dinner: data2[x][aam]['07:00 pm']['place'],
          morningplace: data2[x][aam]['09:00 am']['place'],
          morningactivity: data2[x][aam]['09:00 am']['morning activity'],
          morningactivity: data2[x][aam]['09:00 am']['morning activity'],
          mcomment: data2[x][aam]['09:00 am']['comment'],
          lunch: data22[x][aam]['12:00 pm']['place'],
          eveningplace: data2[x][aam]['09:00 pm']['place'],
          eveningactivity: data2[x][aam]['09:00 pm']['evening activity'],
          ecomment: data2[x][aam]['09:00 pm']['comment'],

        });



      }
      let formattedDate;
      if (index === 0) {
        // const currentDateStr = receivedData.date;
        // const parts = currentDateStr.split('/');

        // const year = currentDate.getFullYear().toString();
        // const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        // const day = currentDate.getDate().toString().padStart(2, '0');

        // const formattedDate = `${year}-${month}-${day}`;


        const currentDateStr = receivedData.date; // Assuming currentDateStr is in "MM/DD/YYYY" format

        if (currentDateStr) {
          const parts = currentDateStr.split('/');

          if (parts.length === 3) {
            const month = parseInt(parts[0], 10);
            const day = parseInt(parts[1], 10);
            const year = parseInt(parts[2], 10);

            if (!isNaN(month) && !isNaN(day) && !isNaN(year)) {
              const currentDate = new Date(year, month - 1, day); // Months are zero-based
              formattedDate = `${year}-${(month).toString().padStart(2, '0')}-${(day).toString().padStart(2, '0')}`;

              // Now, currentDate is a valid Date object, and formattedDate is in "YYYY-MM-DD" format
              // Use currentDate and formattedDate as needed
            }
          }
        }

        var aam = 'Day ' + (Number(x) + 1)

        // console.log("111",data2[x][aam]['12:00 pm']['activity'])
        myArray2.push({
          title: data2[x][aam]['09:00 am']['morning activity'],
          start: formattedDate.toString() + " 09:00",
          slotDuration: '02:00:00',
          id: x,
        });


        myArray4.push({
          Id: Math.floor(Math.random() * 10),
          Subject: data2[x][aam]['09:00 am']['morning activity'],
          StartTime: formattedDate.toString() + " 09:00",
          EndTime: formattedDate.toString() + " 10:00",
          IsAllDay: false,
          Description: ''

        });



        // myArray2.push({
        //   title: data2[x][aam]['09:00 am']["place"],
        //   start: formattedDate.toString()+ " 10:30",
        //   slotDuration: '02:00:00',
        //   id: x,
        // });

        myArray2.push({
          title: data2[x][aam]["12:00 pm"]["lunch"],
          start: formattedDate.toString() + " 12:00",
          slotDuration: '01:00:00',
          id: x,
        });


        myArray4.push({
          Id: Math.floor(Math.random() * 10),
          Subject: data2[x][aam]["12:00 pm"]["lunch"],
          StartTime: formattedDate.toString() + " 12:00",
          EndTime: formattedDate.toString() + " 13:00",
          IsAllDay: false,
          Description: ''

        });


        myArray2.push({
          title: data2[x][aam]["03:00 pm"]["afternoon activity"],
          start: formattedDate.toString() + " 15:00",
          slotDuration: '02:00:00',
          id: x,
        });



        myArray4.push({
          Id: Math.floor(Math.random() * 10),
          Subject: data2[x][aam]["03:00 pm"]["afternoon activity"],
          StartTime: formattedDate.toString() + " 15:00",
          EndTime: formattedDate.toString() + " 16:00",
          IsAllDay: false,
          Description: ''

        });


        // myArray2.push({
        //   title: data2[x][aam]["03:00 pm"]["place"],
        //   start: formattedDate.toString()+ " 14:30",
        //   slotDuration: '02:30:00',
        //   id: x,
        // });
        myArray2.push({
          title: data2[x][aam]["07:00 pm"]["dinner"],
          start: formattedDate.toString() + " 19:00",
          slotDuration: '01:00:00',
          id: x,
        });


        myArray4.push({
          Id: Math.floor(Math.random() * 10),
          Subject: data2[x][aam]["07:00 pm"]["dinner"],
          StartTime: formattedDate.toString() + " 19:00",
          EndTime: formattedDate.toString() + " 20:00",
          IsAllDay: false,
          Description: ''

        });



        myArray2.push({
          title: data2[x][aam]["09:00 pm"]["evening activity"],
          start: formattedDate.toString() + " 21:00",
          slotDuration: '02:00:00',
          id: x,
        });


        myArray4.push({
          Id: Math.floor(Math.random() * 10),
          Subject: data2[x][aam]["09:00 pm"]["evening activity"],
          StartTime: formattedDate.toString() + " 21:00",
          EndTime: formattedDate.toString() + " 22:00",
          IsAllDay: false,
          Description: ''

        });





      }
      else {

        const currentDate = new Date(receivedData.date);
        currentDate.setDate(currentDate.getDate() + 1);
        const year = currentDate.getFullYear().toString();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');

        formattedDate = `${year}-${month}-${day}`;

        var aam = 'Day ' + (Number(x) + 1)
        myArray2.push({
          title: data2[x][aam]['09:00 am']['morning activity'],
          start: formattedDate.toString() + " 09:00",
          slotDuration: '02:0:00',
          id: x,
        });


        myArray4.push({
          Id: Math.floor(Math.random() * 10),
          Subject: data2[x][aam]['09:00 am']['morning activity'],
          StartTime: formattedDate.toString() + " 09:00",
          EndTime: formattedDate.toString() + " 10:00",
          IsAllDay: false,
          Description: ''

        });


        // myArray2.push({
        //   title: data2[x][aam]['09:00 am']["place"],
        //   start: formattedDate.toString()+ " 10:30",
        //   slotDuration: '02:00:00',
        //   id: x,
        // });

        myArray2.push({
          title: data2[x][aam]["12:00 pm"]["lunch"],
          start: formattedDate.toString() + " 12:00",
          slotDuration: '01:00:00',
          id: x,
        });


        myArray4.push({
          Id: Math.floor(Math.random() * 10),
          Subject: data2[x][aam]["12:00 pm"]["lunch"],
          StartTime: formattedDate.toString() + " 12:00",
          EndTime: formattedDate.toString() + " 13:00",
          IsAllDay: false,
          Description: ''

        });

        myArray2.push({
          title: data2[x][aam]["03:00 pm"]["afternoon activity"],
          start: formattedDate.toString() + " 15:00",
          slotDuration: '02:00:00',
          id: x,
        });




        myArray4.push({
          Id: Math.floor(Math.random() * 10),
          Subject: data2[x][aam]["03:00 pm"]["afternoon activity"],
          StartTime: formattedDate.toString() + " 15:00",
          EndTime: formattedDate.toString() + " 16:00",
          IsAllDay: false,
          Description: ''

        });

        // myArray2.push({
        //   title: data2[x][aam]["03:00 pm"]["place"],
        //   start: formattedDate.toString()+ " 14:30",
        //   slotDuration: '02:30:00',
        //   id: x,
        // });
        myArray2.push({
          title: data2[x][aam]["07:00 pm"]["dinner"],
          start: formattedDate.toString() + " 19:00",
          slotDuration: '01:00:00',
          id: x,
        });



        myArray4.push({
          Id: Math.floor(Math.random() * 10),
          Subject: data2[x][aam]["07:00 pm"]["dinner"],
          StartTime: formattedDate.toString() + " 19:00",
          EndTime: formattedDate.toString() + " 20:00",
          IsAllDay: false,
          Description: ''

        });


        myArray2.push({
          title: data2[x][aam]["09:00 pm"]["evening activity"],
          start: formattedDate.toString() + " 21:00",
          slotDuration: '02:00:00',
          id: x,
        });

        myArray4.push({
          Id: Math.floor(Math.random() * 10),
          Subject: data2[x][aam]["09:00 pm"]["evening activity"],
          StartTime: formattedDate.toString() + " 21:00",
          EndTime: formattedDate.toString() + " 22:00",
          IsAllDay: false,
          Description: ''

        });



      }


      x1 = x1 += 3;
      // console.log("pppp", x1)

    }



    // console.log("pppp", myArray4)


    dispatch(fetchDataSuccess(myArray, myArray4, myArray3));
    dispatch(saveItineraryId(itineraryId));
    console.log('Itinerary ID saved to Redux:', itineraryId);

  } catch (error) {
    console.log("Error fetching data:", error)
    dispatch(fetchDataError(error.message));
    dispatch(fetchDataSuccess([], [], []));
    // throw new Error(`OpenAI Error: ${error.response.data.error_message}`);

  } finally {
    dispatch(fetchDataLoading(false));
  }
};





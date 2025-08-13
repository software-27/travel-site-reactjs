// actions.js
import { el } from 'date-fns/locale';
import yaml from 'js-yaml';

import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, FETCH_DATA_LOADING } from './actionTypes';
import {
  ADD_RESTAURANT_REQUEST,
  ADD_RESTAURANT_SUCCESS,
  ADD_RESTAURANT_FAILURE,
} from './actionTypes';

export const fetchDataLoading = (loading) => ({
  type: FETCH_DATA_LOADING,
  payload: loading,
});

export const fetchDataSuccess = (data, data1, data3) => ({
  type: FETCH_DATA_SUCCESS,
  payload: { data, data1, data3 },
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







export const fetchData = (receivedData) => async (dispatch) => {
  dispatch(fetchDataLoading(true));
  //http://desa.celex.com.my/gpt/submit?destination=kuantan&days=2&theme=2
  // ? `http://desa.celex.com.my/gpt/submit?destination=${receivedData.message}&days=${receivedData.days}&theme=2`
  // : `http://desa.celex.com.my/gpt/submit?destination=${receivedData.message}&days=${receivedData.days}&theme=2`;;

  //http://desa.celex.com.my/gpt/submit?destination=kuantan&days=2&theme=2
  //http://desa.celex.com.my/gpt/submit?destination=kuantan&days=2&theme=2
  // ? `http://desa.celex.com.my/chat/submit?destination=${receivedData.message}&days=${receivedData.days}&theme=${receivedData.theme}`
  // : `http://desa.celex.com.my/chat/submit?destination=${receivedData.message}&days=${receivedData.days}&theme=${receivedData.theme}`;
  try {
    console.log("eeeeeee")
    const url =
      receivedData.theme === 0


        ? `https://halaltravel.ai/gpt/submit?destination=${receivedData.message}&days=${receivedData.days}`
        : `https://halaltravel.ai/gpt/submit?destination=${receivedData.message}&days=${receivedData.days}`;;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }








    let myArray = [];
    let myArray2 = [];
    let myArray3 = [];
    let myArray4 = [];


    // const reader = response.body.getReader();
    // let partialWord = '';

    // while (true) {
    //   const { done, value } = await reader.read();

    //   if (done) break;

    //   const chunk = new TextDecoder().decode(value);

    //   // Append the chunk to the partial word
    //   partialWord += chunk;

    //   // Split partial word into words
    //   const words = partialWord.split(/\s+/);

    //   // Store the last word as a partial word if it doesn't end with a whitespace
    //   partialWord = words.pop();

    //   // Log each word
    //   for (const word of words) {
    //     console.log(word);
    //   }
    // }

    // // Log the final partial word if it exists
    // if (partialWord) {
    //   console.log(partialWord);
    // }

    // // Parse YAML data
    // const data = yaml.load(partialWord);

    // console.log("Parsed YAML data:", data);

    // Parse YAML data
    //     console.log("wwww",data.location)

    const data = await response.json();

    let data2 = JSON.parse(data.result)
    let data22 = JSON.parse(data.result)
    let data3 = data.location
    //myArray3 = Object.entries(data3);

    console.log("wwww", data2)
    console.log("wwww", data.location)


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
      else {
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
      if (index == 0) {
        const currentDate = receivedData.date;
        const year = currentDate.getFullYear().toString();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        console.log("date", formattedDate, "6:00");


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

        const currentDate = receivedData.date;
        currentDate.setDate(currentDate.getDate() + 1);
        const year = currentDate.getFullYear().toString();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        console.log("next day", formattedDate);
        console.log("next day", index);
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
      console.log("pppp", x1)

    }



    console.log("pppp", myArray4)






    dispatch(fetchDataSuccess(myArray, myArray4, myArray3));

  } catch (error) {
    console.log("eeeeeee", error)
    dispatch(fetchDataError(error.message));
    dispatch(fetchDataSuccess([], [], []));

  } finally {
    dispatch(fetchDataLoading(false));
  }
};





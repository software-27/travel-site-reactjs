// reducer.js
import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, FETCH_DATA_LOADING, SAVE_ITINERARY_ID, } from './actionTypes2';

import {
  ADD_RESTAURANT_REQUEST,
  ADD_RESTAURANT_SUCCESS,
  ADD_RESTAURANT_FAILURE,
} from './actionTypes2';

const initialState = {
  data: null,
  data1: null,
  data3: null,
  itineraryId: null,
  loading: false,
  error: null,
  restaurant: null,
};

const initialState1 = {
  loading: false,
  restaurant: null,
  error: null,
};



export const dataReducer2 = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_LOADING:
      console.log('dataReducer2 FETCH_DATA_LOADING', action.payload);
      return { ...state, loading: action.payload };
    case FETCH_DATA_SUCCESS:
      console.log('dataReducer2 FETCH_DATA_SUCCESS', action.payload);
      return {
        ...state, data: action.payload.data,
        data1: action.payload.data1,
        data3: action.payload.data3, 
        error: null,
        itineraryId: null
      };
    // case SAVE_ITINERARY_ID:
    //   return { ...state, itineraryId: action.payload };
    case SAVE_ITINERARY_ID:
      console.log('dataReducer2 SAVE_ITINERARY_ID: ',action.payload);
      return { ...state, itineraryId: action.payload };
    case FETCH_DATA_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};


export const addRestaurantReducer = (state = initialState1, action) => {
  switch (action.type) {
    case ADD_RESTAURANT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurant: action.payload,
      };
    case ADD_RESTAURANT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
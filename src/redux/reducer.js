// reducer.js
import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, FETCH_DATA_LOADING, SAVE_ITINERARY_ID } from './actionTypes';

import {
  ADD_RESTAURANT_REQUEST,
  ADD_RESTAURANT_SUCCESS,
  ADD_RESTAURANT_FAILURE,
} from './actionTypes';

const initialState = {
  data: null,
  data1: null,
  data3: null,
  loading: false,
  error: null,
  restaurant: null,
  itineraryId: null
};

const initialState1 = {
  loading: false,
  restaurant: null,
  error: null,
};



export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_LOADING:
      return { ...state, loading: action.payload };
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload.data, data1: action.payload.data1,data3: action.payload.data3 ,error: null };
    case FETCH_DATA_ERROR:
      return { ...state, error: action.payload };
    case SAVE_ITINERARY_ID:
      return { ...state, itineraryId: action.payload };
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

import { RateUser } from '../../../entities/rateUser/rateUserEntentitie';
import { ReduxPayload } from '../../../entities/publications/ReduxPayload';
import * as allRateTypes from '../../constants/rateUser/rateUserTypes';


const initialState = new  ReduxPayload<RateUser>() ; 
// reducer de obtener mi tasa
export const getMyRate = (state = initialState, action: allRateTypes.allRateUserType) => {
    switch (action.type) {
      case allRateTypes.GET_MY_RATEUSER_FETCH :
        return {
          ...state,
          ...action.payload
        };
      case allRateTypes.GET_MY_RATEUSER_SUCCESS:
        return {
          ...state,
          ...action.payload
        };
      case allRateTypes.GET_MY_RATEUSER_FAILED:
        return {
          ...state,
          ...action.payload
        };
      default:
        return state
    };
  };
// reducer de agregar calificacion. 
  export const addRate = (state = initialState, action: allRateTypes.allRateUserType) => {
    switch (action.type) {
      case allRateTypes.ADD_RATEUSER_FETCH :
        return {
          ...state,
          ...action.payload
        };
      case allRateTypes.ADD_RATEUSER_SUCCESS:
        return {
          ...state,
          ...action.payload
        };
      case allRateTypes.ADD_RATEUSER_FAILED:
        return {
          ...state,
          ...action.payload
        };
      default:
        return state
    };
  };
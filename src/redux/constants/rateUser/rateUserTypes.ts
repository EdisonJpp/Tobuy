import  {RateUser } from '../../../entities/rateUser/rateUserEntentitie';
import {ReduxPayload } from '../../../entities/publications/ReduxPayload' ; 

// ACTIONS OF RATE USER 
export const GET_MY_RATEUSER_FETCH = 'GET_MY_RATEUSER_FETCH';
export type GET_MY_RATEUSER_FETCH = typeof GET_MY_RATEUSER_FETCH ; 
export const GET_MY_RATEUSER_SUCCESS = 'GET_MY_RATEUSER_SUCCESS';
export type GET_MY_RATEUSER_SUCCESS = typeof GET_MY_RATEUSER_SUCCESS ; 
export const GET_MY_RATEUSER_FAILED = 'GET_MY_RATEUSER_FAILED';
export type GET_MY_RATEUSER_FAILED = typeof GET_MY_RATEUSER_FAILED ; 

// add actions 
export const ADD_RATEUSER_FETCH = 'ADD_RATEUSER_FETCH';
export type ADD_RATEUSER_FETCH = typeof ADD_RATEUSER_FETCH ; 
export const ADD_RATEUSER_SUCCESS = 'ADD_RATEUSER_SUCCESS';
export type ADD_RATEUSER_SUCCESS = typeof ADD_RATEUSER_SUCCESS ; 
export const ADD_RATEUSER_FAILED = 'ADD_RATEUSER_FAILED';
export type ADD_RATEUSER_FAILED = typeof ADD_RATEUSER_FAILED ; 




// GETT FETCH
export interface get_My_RateUser_fetch{
    type:  GET_MY_RATEUSER_FETCH , 
    payload : ReduxPayload<RateUser>
};
// GET SUCCESS
export interface get_My_RateUser_success{
    type:  GET_MY_RATEUSER_SUCCESS , 
    payload : ReduxPayload<RateUser>
};
// GET FAILED
export interface get_My_RateUser_failed{
    type:  GET_MY_RATEUSER_FAILED , 
    payload : ReduxPayload<RateUser>
};


// add FETCH
export interface add_RateUser_fetch{
    type:  ADD_RATEUSER_FETCH , 
    payload : ReduxPayload<RateUser>
};
// ADD success
export interface add_RateUser_success{
    type:  ADD_RATEUSER_SUCCESS , 
    payload : ReduxPayload<RateUser>
};
// ADD failed
export interface add_RateUser_failed{
    type:  ADD_RATEUSER_FAILED , 
    payload : ReduxPayload<RateUser>
};


export type allRateUserType = get_My_RateUser_fetch | get_My_RateUser_success | get_My_RateUser_failed | 
add_RateUser_fetch | add_RateUser_success | add_RateUser_failed ; 

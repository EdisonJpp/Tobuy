import  { ReduxPayload } from '../../../entities/publications/ReduxPayload';
import { User} from '../../../entities/user/usersEntitie' ;
// AUTH USER
export const AUTH_LOGIN_FETCH = 'AUTH_LOGIN_FETCH';
export type AUTH_LOGIN_FETCH = typeof AUTH_LOGIN_FETCH ;
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export type AUTH_LOGIN_SUCCESS = typeof AUTH_LOGIN_SUCCESS ;
export const AUTH_LOGIN_FAILED = 'AUTH_LOGIN_FAILED';
export type AUTH_LOGIN_FAILED = typeof AUTH_LOGIN_FAILED ;
// register user 
export const ADD_USER_FETCH = 'ADD_USER_FETCH';
export type ADD_USER_FETCH =  typeof ADD_USER_FETCH;
export const ADD_USER_SUCCES = 'ADD_USER_SUCCES';
export type ADD_USER_SUCCES = typeof ADD_USER_SUCCES ;
export const ADD_USER_FAILED = 'ADD_USER_FAILED';
export type ADD_USER_FAILED = typeof ADD_USER_FAILED ;

// Edit User
export const EDIT_USER_FETCH = 'EDIT_USER_FETCH';
export type EDIT_USER_FETCH = typeof EDIT_USER_FETCH ;
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export type EDIT_USER_SUCCESS = typeof EDIT_USER_SUCCESS ;
export const EDIT_USER_FAILED = 'EDIT_USER_FAILED';
export type EDIT_USER_FAILED = typeof EDIT_USER_FAILED ;


//getUser
export const GET_USER_FETCH = 'GET_USER_FETCH';
export type GET_USER_FETCH = typeof GET_USER_FETCH ;
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export type GET_USER_SUCCESS = typeof GET_USER_SUCCESS ;
export const GET_USER_FAILED = 'GET_USER_FAILED';
export type GET_USER_FAILED = typeof GET_USER_FAILED ;

// ACTIONS 
//get user 
interface getUserFetch{
    type: GET_USER_FETCH,
    payload : ReduxPayload<User>
};
interface getUserSuccess{
    type: GET_USER_SUCCESS,
    payload : ReduxPayload<User>
};
interface getUserFailed{
    type: GET_USER_FAILED,
    payload : ReduxPayload<User>
};
//AUTH user
interface authUserFetch{
    type : AUTH_LOGIN_FETCH,
    payload : ReduxPayload<User>
};
interface authUserSuccess{
    type : AUTH_LOGIN_SUCCESS,
    payload : ReduxPayload<User>
};
interface authUserFailed{
    type : AUTH_LOGIN_FAILED,
    payload : ReduxPayload<User>
};
// register user  
interface addUserFetch{
    type : ADD_USER_FETCH,
    payload : ReduxPayload<User>
};
interface addUserSuccess{
    type : ADD_USER_SUCCES,
    payload : ReduxPayload<User>
};
interface addUserFailed{
    type : ADD_USER_FAILED,
    payload : ReduxPayload<User>
};

// EDIT USER 
interface editUserFetch{
    type : EDIT_USER_FETCH,
    payload : ReduxPayload<User>
};
interface editUserSuccess{
    type : EDIT_USER_SUCCESS,
    payload : ReduxPayload<User>
};
interface editUserFailed{
    type : EDIT_USER_FAILED,
    payload : ReduxPayload<User>
}

export type userTypes = authUserFetch | authUserSuccess | authUserFailed | addUserFetch | addUserSuccess |
addUserFailed | editUserFetch | editUserSuccess | editUserFailed | getUserFetch | getUserSuccess | getUserFailed;
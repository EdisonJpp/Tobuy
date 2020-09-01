import { User } from '../../../entities/user/usersEntitie';
import { ReduxPayload } from '../../../entities/publications/ReduxPayload';
import * as users_Types from '../../constants/user/usersTypes';

const inicitialState = new ReduxPayload<User>();
export const authUser_reducer = (state = inicitialState, action: users_Types.userTypes) => {
    switch (action.type) {
        case users_Types.AUTH_LOGIN_FETCH:
            return {
                ...state,
                ...action.payload,
            };
        case users_Types.AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case users_Types.AUTH_LOGIN_FAILED:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state ;
    };
};

export const addUser_reducer = (state = inicitialState, action: users_Types.userTypes) => {
    switch (action.type) {
        case users_Types.ADD_USER_FETCH:
            return {
                ...state,
                ...action.payload,
            };
        case users_Types.ADD_USER_SUCCES:
            return {
                ...state,
                ...action.payload,
            };
        case users_Types.ADD_USER_FAILED:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state ;
    };
};
export const editUser_reducer = (state = inicitialState, action: users_Types.userTypes) => {
    switch (action.type) {
        case users_Types.EDIT_USER_FETCH:
            return {
                ...state,
                ...action.payload,
            };
        case users_Types.EDIT_USER_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case users_Types.EDIT_USER_FAILED:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state ;
    };
};

export const getUser_reducer = (state = inicitialState, action: users_Types.userTypes) => {
    switch (action.type) {
        case users_Types.GET_USER_FETCH:
            return {
                ...state,
                ...action.payload,
            };
        case users_Types.GET_USER_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case users_Types.GET_USER_FAILED:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state ;
    };
};



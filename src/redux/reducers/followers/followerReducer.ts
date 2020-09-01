import * as followersTypes from '../../constants/follower/folowerTypes';
import { ReduxPayload } from '../../../entities/publications/ReduxPayload';
import { Followers } from '../../../entities/follower/followerEntitie';

const inicialState = new ReduxPayload<Followers>();

export const getFollowersR = (state = inicialState, action: followersTypes.followerTypes) => {
    switch (action.type) {
        case followersTypes.GET_FOLLOWER_FETCH:
            return {
                ...state,
                ...action.payload,
            };
        case followersTypes.GET_FOLLOWER_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case followersTypes.GET_FOLLOWER_FAILED:
            return {
                ...state,
                ...action.payload,
            };

        default: 
        return state ; 
    };
};

export const addFollowersR = (state = inicialState, action: followersTypes.followerTypes) => {
    switch (action.type) {
        case followersTypes.ADD_FOLLOWER_FETCH:
            return {
                ...state,
                ...action.payload,
            };
        case followersTypes.ADD_FOLLOWER_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case followersTypes.ADD_FOLLOWER_FAILED:
            return {
                ...state,
                ...action.payload,
            };

        default: 
        return state ; 
    };
};


export const deleteFollowersR = (state = inicialState, action: followersTypes.followerTypes) => {
    switch (action.type) {
        case followersTypes.DELETE_FOLLOWER_FETCH:
            return {
                ...state,
                ...action.payload,
            };
        case followersTypes.DELETE_FOLLOWER_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case followersTypes.DELETE_FOLLOWER_FAILED:
            return {
                ...state,
                ...action.payload,
            };

        default: 
        return state ; 
    };
};



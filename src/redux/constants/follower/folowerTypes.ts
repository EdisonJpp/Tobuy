import { Followers } from '../../../entities/follower/followerEntitie';
import { ReduxPayload } from '../../../entities/publications/ReduxPayload';

export const GET_FOLLOWER_FETCH = 'GET_FOLLOWER_FETCH';
export type GET_FOLLOWER_FETCH = typeof GET_FOLLOWER_FETCH;
export const GET_FOLLOWER_SUCCESS = 'GET_FOLLOWER_SUCCESS';
export type GET_FOLLOWER_SUCCESS = typeof GET_FOLLOWER_SUCCESS;
export const GET_FOLLOWER_FAILED = 'GET_FOLLOWER_FAILED';
export type GET_FOLLOWER_FAILED = typeof GET_FOLLOWER_FAILED;

export const ADD_FOLLOWER_FETCH = 'ADD_FOLLOWER_FETCH';
export type ADD_FOLLOWER_FETCH = typeof ADD_FOLLOWER_FETCH;
export const ADD_FOLLOWER_SUCCESS = 'ADD_FOLLOWER_SUCCESS';
export type ADD_FOLLOWER_SUCCESS = typeof ADD_FOLLOWER_SUCCESS;
export const ADD_FOLLOWER_FAILED = 'ADD_FOLLOWER_FAILED';
export type ADD_FOLLOWER_FAILED = typeof ADD_FOLLOWER_FAILED;

export const DELETE_FOLLOWER_FETCH = 'DELETE_FOLLOWER_FETCH';
export type DELETE_FOLLOWER_FETCH = typeof DELETE_FOLLOWER_FETCH;
export const DELETE_FOLLOWER_SUCCESS = 'DELETE_FOLLOWER_SUCCESS';
export type DELETE_FOLLOWER_SUCCESS = typeof DELETE_FOLLOWER_SUCCESS;
export const DELETE_FOLLOWER_FAILED = 'DELETE_FOLLOWER_FAILED';
export type DELETE_FOLLOWER_FAILED = typeof DELETE_FOLLOWER_FAILED;


interface getFollowerFetch {
    type: GET_FOLLOWER_FETCH;
    payload: ReduxPayload<Followers>;
};
interface getFollowerSuccess {
    type: GET_FOLLOWER_SUCCESS;
    payload: ReduxPayload<Followers>;
};
interface getFollowerFailed {
    type: GET_FOLLOWER_FAILED;
    payload: ReduxPayload<Followers>;
};


// ADD
interface addFollowerFetch {
    type: ADD_FOLLOWER_FETCH;
    payload: ReduxPayload<Followers>;
};
interface addFollowerSuccess {
    type: ADD_FOLLOWER_SUCCESS;
    payload: ReduxPayload<Followers>;
};
interface addFollowerFailed {
    type: ADD_FOLLOWER_FAILED;
    payload: ReduxPayload<Followers>;
};

// DELETE
interface deleteFollowerFetch {
    type: DELETE_FOLLOWER_FETCH;
    payload: ReduxPayload<Followers>;
};
interface deleteFollowerSuccess {
    type: DELETE_FOLLOWER_SUCCESS;
    payload: ReduxPayload<Followers>;
};
interface deleteFollowerFailed {
    type: DELETE_FOLLOWER_FAILED;
    payload: ReduxPayload<Followers>;
};


export type followerTypes = getFollowerFetch | getFollowerSuccess | getFollowerFailed |
    addFollowerFetch | addFollowerSuccess | addFollowerFailed | deleteFollowerFetch | 
    deleteFollowerSuccess | deleteFollowerFailed; 
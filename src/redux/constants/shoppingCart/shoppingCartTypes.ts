import {shoppingCart} from '../../../entities/shoppingCart/shoppingCart';
import  { ReduxPayload } from '../../../entities/publications/ReduxPayload';
// import { DELETE_POST_FAILED } from '../publication/publicationTypes';

// GET CART BY USERID
export const GET_SHOPPING_CART_FETCH = 'GET_SHOPPING_CART_FETCH';
export type GET_SHOPPING_CART_FETCH = typeof GET_SHOPPING_CART_FETCH ;
export const GET_SHOPPING_CART_SUCCESS = 'GET_SHOPPING_CART_SUCCESS';
export type GET_SHOPPING_CART_SUCCESS = typeof GET_SHOPPING_CART_SUCCESS ;
export const GET_SHOPPING_CART_FAILED = 'GET_SHOPPING_CART_FAILED';
export type GET_SHOPPING_CART_FAILED = typeof GET_SHOPPING_CART_FAILED ;

// ADD CART 
export const ADD_CART_FETCH = 'ADD_CART_FETCH';
export type ADD_CART_FETCH = typeof ADD_CART_FETCH ;
export const ADD_CART_SUCCESS = 'ADD_CART_SUCCESS';
export type ADD_CART_SUCCESS = typeof ADD_CART_SUCCESS ;
export const ADD_CART_FAILED = 'ADD_CART_FAILED';
export type ADD_CART_FAILED = typeof ADD_CART_FAILED ;

//DELETE CART
export const DELETE_CART_FETCH = 'DELETE_CART_FETCH';
export type DELETE_CART_FETCH = typeof DELETE_CART_FETCH ;
export const DELETE_CART_SUCCESS = 'DELETE_CART_SUCCESS';
export type DELETE_CART_SUCCESS = typeof DELETE_CART_SUCCESS ;
export const DELETE_CART_FAILED = 'DELETE_CART_FAILED';
export type DELETE_CART_FAILED = typeof DELETE_CART_FAILED ;


// GET CART 
interface getShoppingCartFect {
    type : GET_SHOPPING_CART_FETCH;
    payload : ReduxPayload<shoppingCart>;
};
interface getShoppingCartSuccess {
    type : GET_SHOPPING_CART_SUCCESS;
    payload : ReduxPayload<shoppingCart>;
};
interface getShoppingCartFailed {
    type : GET_SHOPPING_CART_FAILED;
    payload : ReduxPayload<shoppingCart>;
};


// ADD CART 
interface addCartFecht{
    type : ADD_CART_FETCH,
    payload : ReduxPayload<shoppingCart>
};
interface addCartSuccess{
    type : ADD_CART_SUCCESS,
    payload : ReduxPayload<shoppingCart>
};
interface addCartFailed{
    type : ADD_CART_FAILED,
    payload : ReduxPayload<shoppingCart>
};

// DELETE CART
interface deleteCartFetch {
    type : DELETE_CART_FETCH,
    payload : ReduxPayload<shoppingCart>;
};
interface deleteCartSucces{
    type : DELETE_CART_SUCCESS,
    payload : ReduxPayload<shoppingCart>;
};
interface deleteCartFailed{
    type : DELETE_CART_FAILED,
    payload : ReduxPayload<shoppingCart>;
};
 


 export type shoppingCartTypes = getShoppingCartFect |  getShoppingCartSuccess |getShoppingCartFailed |
 deleteCartFetch | deleteCartSucces | deleteCartFailed | addCartFecht | addCartSuccess | addCartFailed;
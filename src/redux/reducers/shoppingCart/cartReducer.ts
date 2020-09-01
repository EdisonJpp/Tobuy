import {shoppingCart } from '../../../entities/shoppingCart/shoppingCart';
import {ReduxPayload } from '../../../entities/publications/ReduxPayload';
import * as s from '../../constants/shoppingCart/shoppingCartTypes'

const inicitialState =new ReduxPayload<shoppingCart>(); 

export const getShopping_reducer = (state = inicitialState, action: s.shoppingCartTypes) => {
    switch (action.type) {
        case s.GET_SHOPPING_CART_FETCH:
            return {
                ...state,
                ...action.payload,
            };
        case s.GET_SHOPPING_CART_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case s.GET_SHOPPING_CART_FAILED:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state ;
    };
};


// ACTION OF ADD  SHOPPING CART
export const addShopping_reducer = (state = inicitialState, action: s.shoppingCartTypes) => {
    switch (action.type) {
        case s.ADD_CART_FAILED:
            return {
                ...state,
                ...action.payload,
            };
        case s.ADD_CART_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case s.ADD_CART_FAILED:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state ;
    };
};

/// DELETE SHOPPING CART
export const deleteShopping_reducer = (state = inicitialState, action: s.shoppingCartTypes) => {
    switch (action.type) {
        case s.DELETE_CART_FAILED:
            return {
                ...state,
                ...action.payload,
            };
        case s.DELETE_CART_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case s.DELETE_CART_FAILED:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state ;
    };
};
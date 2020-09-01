import { getShoppingCart, addShoppingCart, deleteShoppingCart } from '../../../services/shoppingCartService'
import * as s from '../../constants/shoppingCart/shoppingCartTypes'

export const getShoppingCart_fetch = (): s.shoppingCartTypes => {
    return {
        type: s.GET_SHOPPING_CART_FETCH,
        payload: {
            loading: true,
            data: undefined,
            error: undefined,
        },
    };
};
export const getShoppingCart_success = async (userId: number): Promise<s.shoppingCartTypes> => {
    const response = await getShoppingCart(userId);
    if (response.status === 200) {
        return {
            type: s.GET_SHOPPING_CART_SUCCESS,
            payload: {
                data: response.data === undefined ? [] : response.data,
                loading: false,
                error: undefined,
            },
        };
    } else {
        return {
            type: s.GET_SHOPPING_CART_FAILED,
            payload: {
                data: undefined,
                loading: false,
                error: undefined,
            },
        };
    };
};

export const addShoppingCart_fetch = (): s.shoppingCartTypes => {
    return {
        type: s.ADD_CART_FETCH,
        payload: {
            loading: true,
            data: undefined,
            error: undefined,
        },
    };
};
export const AddShoppingCart_success = async (cart: any): Promise<s.shoppingCartTypes> => {
    const response = await addShoppingCart(cart);
    if (response.status === 200) {
        return {
            type: s.ADD_CART_SUCCESS,
            payload: {
                data: response.data,
                loading: false,
                error: undefined,
            },
        };
    } else {
        const data = response.response.data;
        return {
            type: s.ADD_CART_FAILED,
            payload: {
                data: undefined,
                loading: false,
                error: data,
            },
        };
    };
};

export const deleteShoppingCart_fetch = (): s.shoppingCartTypes => {
    return {
        type: s.DELETE_CART_FETCH,
        payload: {
            loading: true,
            data: undefined,
            error: undefined,
        },
    };
};
export const deleteShoppingCart_success = async (id: number): Promise<s.shoppingCartTypes> => {
    const response = await deleteShoppingCart(id);
    if (response.status === 200) {
        return {
            type: s.DELETE_CART_SUCCESS,
            payload: {
                data: response.data,
                loading: false,
                error: undefined,
            },
        };
    } else {
        const data = response.response.data;
        return {
            type: s.DELETE_CART_FAILED,
            payload: {
                data: undefined,
                loading: false,
                error: data,
            },
        };
    };
};
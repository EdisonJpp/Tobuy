
import customAxios from '../config/axios';

export const getShoppingCart = async (userId: number) => {
    return customAxios.get(`/shoppingCart/${userId}`)
        .then(r => r)
        .catch((e) => {
            return e;
        });
};
export const addShoppingCart = async (cart: any) => {
    return customAxios.post('/shoppingCart', cart)
        .then(r => r)
        .catch((e) => {
            return e;
        });
};
export const deleteShoppingCart = async (id: number) => {
    return customAxios.delete(`/shoppingCart/${id}`)
        .then(r => r)
        .catch((e) => {
            return e;
        });
};
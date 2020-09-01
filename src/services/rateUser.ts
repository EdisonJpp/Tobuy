import customAxios from '../config/axios';

// get rate by  userI   d ; 
export const getByUserId = async (userId: number) => {
    const data = await customAxios.get(`/rate-user/${userId}`);
    return data;
};

// add rate
export const addRateUser  = async (dataRate : number) => {
    const data = await customAxios.post(`/rate-user` , dataRate );
    return data;
};

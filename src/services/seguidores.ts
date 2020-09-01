import customAxios from '../config/axios';


export const followersById =  async(userId : number) => {
    const data = await customAxios.get(`/followers/${userId}`);
    return data ; 
};

export const addFollowers =  async(dataFollower : any) => {
    const data = await customAxios.post(`/followers`, dataFollower);
    return data ; 
};
export const deleteFollowers =  async(seguidoresId : number) => {
    const data = await customAxios.delete(`/followers/${seguidoresId}`);
    return data ; 
};
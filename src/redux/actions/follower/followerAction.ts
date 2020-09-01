import * as followerTypes from '../../constants/follower/folowerTypes';
import { followersById , addFollowers ,deleteFollowers} from '../../../services/seguidores';

export const getMyFollowersFetch = (): followerTypes.followerTypes => {
    return {
        type: followerTypes.GET_FOLLOWER_FETCH,
        payload: {
            loading: true,
            data: undefined,
            error: undefined,
        },
    };
};
export const getMyFollowersSuccess = async(userId: number): Promise<followerTypes.followerTypes> => {
    const response =  await followersById(userId);

    if (response.status === 200) {
        return {
            type: followerTypes.GET_FOLLOWER_SUCCESS,
            payload: {
                loading: true,
                data: response.data,
                error: undefined,
            },
        };
    }else{
        return {
            type: followerTypes.GET_FOLLOWER_FAILED,
            payload: {
                loading: true,
                data: undefined,
                error: {},
            },
        };
    };
};

export const addFollowersFetch = (): followerTypes.followerTypes => {
    return {
        type: followerTypes.ADD_FOLLOWER_FETCH,
        payload: {
            loading: true,
            data: undefined,
            error: undefined,
        },
    };
};
export const addFollowersSuccess = async(followerData: any): Promise<followerTypes.followerTypes> => {
    const response =  await addFollowers(followerData);
    if (response.status === 200) {
        return {
            type: followerTypes.ADD_FOLLOWER_SUCCESS,
            payload: {
                loading: true,
                data: response.data,
                error: undefined,
            },
        };
    }else{
        return {
            type: followerTypes.ADD_FOLLOWER_FAILED,
            payload: {
                loading: true,
                data: undefined,
                error: {},
            },
        };
    };
};

export const deleteFollowersFetch = (): followerTypes.followerTypes => {
    return {
        type: followerTypes.ADD_FOLLOWER_FETCH,
        payload: {
            loading: true,
            data: undefined,
            error: undefined,
        },
    };
};
export const deleteFollowersSuccess = async(seguidorId: number): Promise<followerTypes.followerTypes> => {
    const response =  await deleteFollowers(seguidorId);
    if (response.status === 200) {
        return {
            type: followerTypes.ADD_FOLLOWER_SUCCESS,
            payload: {
                loading: true,
                data: response.data,
                error: undefined,
            },
        };
    }else{
        return {
            type: followerTypes.ADD_FOLLOWER_FAILED,
            payload: {
                loading: true,
                data: undefined,
                error: {},
            },
        };
    };
};

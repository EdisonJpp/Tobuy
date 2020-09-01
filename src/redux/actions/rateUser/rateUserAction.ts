// import { RateUser } from '../../../entities/rateUser/rateUserEntentitie';
// import { ReduxPayload } from '../../../entities/publications/ReduxPayload';
import * as allRateTypes from '../../constants/rateUser/rateUserTypes';
import { getByUserId  , addRateUser} from '../../../services/rateUser';


// GET MY RATE
export const getMyRateUser_fetch = (): allRateTypes.allRateUserType => {
    return {
        type: allRateTypes.GET_MY_RATEUSER_FETCH,
        payload: {
            loading: true,
            data: undefined,
            error: undefined,
        },
    };
};
export const getMyRateUser_success = async (userId: number): Promise<allRateTypes.allRateUserType> => {
    const response = await getByUserId(userId);
    if (response.status === 200) {
        return {
            type: allRateTypes.GET_MY_RATEUSER_SUCCESS,
            payload: {
                loading: false,
                data: response.data,
                error: undefined,
            },
        };
    } else {
        return {
            type: allRateTypes.GET_MY_RATEUSER_FAILED,
            payload: {
                loading: false,
                data: undefined,
                error: { message: 'do not have rate' },
            },
        };
    };
};


/// ADD RATE ACTIONS. 
export const addRateUser_fetch = (): allRateTypes.allRateUserType => {
    return {
        type: allRateTypes.ADD_RATEUSER_FETCH,
        payload: {
            loading: true,
            data: undefined,
            error: undefined,
        },
    };
};
export const addRateUser_success = async (dataRate: number): Promise<allRateTypes.allRateUserType> => {
    const response = await addRateUser(dataRate);
    if (response.status === 200) {
        return {
            type: allRateTypes.ADD_RATEUSER_SUCCESS,
            payload: {
                loading: false,
                data: response.data,
                error: undefined,
            },
        };
    } else {
        return {
            type: allRateTypes.ADD_RATEUSER_FAILED,
            payload: {
                loading: false,
                data: undefined,
                error: { message: 'do not have rate' },
            },
        };
    };
};
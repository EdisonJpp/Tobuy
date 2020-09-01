import * as user_Types from '../../constants/user/usersTypes';
import { createUser, editUser, getUser } from '../../../services/UserService';
import { User } from '../../../entities/user/usersEntitie';

export const AddUser_fetch = (): user_Types.userTypes => {
    return {
        type: user_Types.ADD_USER_FETCH,
        payload: {
            loading: true,
            data: undefined,
            error: undefined,
        },
    };
};
export const AddUserSuccess = async (user: User): Promise<user_Types.userTypes> => {

    const response: any = await createUser(user);
    if (response && response.status === 200) {
        return {
            type: user_Types.ADD_USER_SUCCES,
            payload: {
                loading: false,
                data: undefined,
                error: undefined,
            },
        };
    } else {
        return {
            type: user_Types.ADD_USER_FAILED,
            payload: {
                loading: false,
                data: undefined,
                error: response.response.data,
            },
        };
    };
};

export const editUserFetch = (): user_Types.userTypes => {
    return {
        type: user_Types.EDIT_USER_FETCH,
        payload: {
            loading: true,
            data: undefined,
            error: undefined,
        },
    };
};
export const editUserSuccess = async (user: User): Promise<user_Types.userTypes> => {
    const response = await editUser(user);
    if (response.status === 200) {
        return {
            type: user_Types.EDIT_USER_SUCCESS,
            payload: {
                loading: false,
                data: response.data,
                error: undefined,
            },
        };
    } else {
        return {
            type: user_Types.ADD_USER_FAILED,
            payload: {
                loading: false,
                data: undefined,
                error: response.data,
            },
        };
    };
};
export const getUserFetch = (): user_Types.userTypes => {
    return {
        type: user_Types.GET_USER_FETCH,
        payload: {
            loading: true,
            data: undefined,
            error: undefined,
        },
    };
};
export const getUserSuccess = async (): Promise<user_Types.userTypes> => {
    const response = await getUser();
    if (response.status) {
        return {
            type: user_Types.GET_USER_SUCCESS,
            payload: {
                loading: false,
                data: response.data,
                error: undefined,
            },
        };
    } else {
        return {
            type: user_Types.GET_USER_FAILED,
            payload: {
                loading: false,
                data: undefined,
                error: response.data,
            },
        };
    };
};
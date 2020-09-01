import * as sellerTypes from '../../constants/seller/sellertypes';
// import { User } from '../../../entities/user/usersEntitie';
import { myProfile } from '../../../services/UserService';


export const getSellerFecth = (): sellerTypes.Sellertypes => {
    return {
        type: sellerTypes.GER_SELLER_FETCH,
        payload: {
            loading: true,
            data: undefined,
            error: undefined,
        },
    };
};

export const getSellerSuccess = async (id: number): Promise<sellerTypes.Sellertypes> => {
    const response = await myProfile(id);
    if (response.status === 200) {
        return {
            type: sellerTypes.GER_SELLER_SUCCESS,
            payload: {
                loading: false,
                data: response.data,
                error: undefined,
            },
        };
    } else {
        return {
            type: sellerTypes.GER_SELLER_SUCCESS,
            payload: {
                loading: false,
                data: undefined,
                error: response.data,
            },
        };
    };
};
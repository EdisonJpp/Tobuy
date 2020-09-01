import { ReduxPayload } from '../../../entities/publications/ReduxPayload';
import * as sellerTypes from '../../constants/seller/sellertypes';
import { User } from '../../../entities/user/usersEntitie';



const inicialState = new ReduxPayload<User>();

export const sellerReducer = (state = inicialState, action: sellerTypes.Sellertypes) => {
    switch (action.type) {
        case sellerTypes.GER_SELLER_FETCH:
            return {
                ...state,
                ...action.payload,
            };

        case sellerTypes.GER_SELLER_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case sellerTypes.GER_SELLER_FAILED:
            return {
                ...state,
                ...action.payload,
            };
        default :
            return state ;
        
    };
};


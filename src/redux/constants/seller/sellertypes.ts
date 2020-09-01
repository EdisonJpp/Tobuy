import  { ReduxPayload } from '../../../entities/publications/ReduxPayload';
import { User} from '../../../entities/user/usersEntitie' ;

export const GER_SELLER_FETCH =  'GER_SELLER_FETCH';
export type GER_SELLER_FETCH = typeof GER_SELLER_FETCH ; 
export const GER_SELLER_SUCCESS =  'GER_SELLER_SUCCESS';
export type GER_SELLER_SUCCESS = typeof GER_SELLER_SUCCESS ; 
export const GER_SELLER_FAILED =  'GER_SELLER_FAILED';
export type GER_SELLER_FAILED = typeof GER_SELLER_FAILED ; 

interface getSellerFecth{
    type : GER_SELLER_FETCH ;
    payload : ReduxPayload<User>;
};
interface getSellerSuccess{
    type : GER_SELLER_SUCCESS ;
    payload : ReduxPayload<User>;
};
interface getSellerFailed{
    type : GER_SELLER_FAILED ;
    payload : ReduxPayload<User>;
};

export type Sellertypes =getSellerFecth | getSellerSuccess | getSellerFailed  ; 
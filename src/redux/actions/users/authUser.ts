import * as user_Types  from '../../constants/user/usersTypes';
import {login}  from '../../../services/AuthService';
import{User}from '../../../entities/user/usersEntitie';
export const authUser_fetch = () : user_Types.userTypes =>{
    return{
        type : user_Types.AUTH_LOGIN_FETCH,
        payload:{
            loading : true,
            data : undefined ,
            error : undefined,
        },
    };
};
export const authUser_success = async( userData : User) : Promise<user_Types.userTypes> =>{
    const response : any = await login(userData);
    if( response && response.status === 200){
        return{
            type : user_Types.AUTH_LOGIN_SUCCESS,
            payload :{
                loading : false,
                data : response.data,
                error : undefined,
            },
        };
    }else{
        const error = response ; 
        return{
            type : user_Types.AUTH_LOGIN_FAILED,
            payload: {
                loading : false , 
                data : undefined ,
                error : {error  : 'Datos Incorrectos'}, 
            },
        };
    };
};
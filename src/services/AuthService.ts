import customAxios from "../config/axios";
import { User } from '../entities/user/usersEntitie';

export const login = (userData: User) => {
    return customAxios.post('/login', userData)
        .then(r => r)
        .catch((e) => {
            return e.response;
        });
};
import customAxios from "../config/axios";


export const createUser = async (user: any) => {
  return customAxios.post('/users', user)
    .then(r => (r))
    .catch((err) => {
      return err;
    });
};
export const myProfile = async (users_id: any) => {
  const myProfile = await customAxios.get(`/users/${users_id}`);
  return myProfile;
};
export const editUser = async (user: any) => {
  const data = await customAxios.put(`/users/${user.id}`, user);
  return data;
};

export const getUser = async () => {
  const data = await customAxios.get('/users');
  return data;
};
import customAxios from "../config/axios";

export const AddPublication = async (photos: any[], publicationData: any) => {
   const add = await customAxios.post('/publications', { photos, publicationData });
   return add;
}
export const getPublications = async () => await customAxios.get('/publications');
export const getPublicationById = async (id: number) => {
   const data = await customAxios.get(`/publications/${id}`)
   return data;
};
export const getPostByCategory = async (categoryId: any) => {
   const data = await customAxios.get(`/category/${categoryId}`);
   return data;

}
export const deletePost = async (id: number) => await customAxios.delete(`/publications/${id}`);

  // export const myPublications = async (users_id : number) => {
  //   const data =  await customAxios.get(`/mypublications/${users_id}`);
  //   console.log(data + 'hola data');
  //   console.log(users_id + 'hola que tal');
  //   return data ;
  // }
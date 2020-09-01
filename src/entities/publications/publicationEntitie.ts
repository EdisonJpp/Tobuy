export class Publication{
    title?: String;
    condition?: String;
    price?: number;
    description?: String
    image_name?: any ; 
    wasPublishedAt?: String;
    users_id?:number;
    categoryId?: number ;
};

export interface orderPublication{
    title: String;
    condition: String;
    price: number;
    description: String
    image_name: any ; 
    wasPublishedAt: String;
    users_id:number;
    categoryId: number ;
};
import {orderPublication} from  '../../entities/publications/publicationEntitie';
type  order = 'asc' | 'desc'; 

export const filter = ( order : order ) => ( a : orderPublication  , b: orderPublication )=>{
    const aa =  a.price ; 
    const bb = b.price ; 
    // const orderBy =  
    return  order === 'asc' ? (aa - bb) : (bb - aa) ; 

};
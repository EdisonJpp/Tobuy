import  { ReduxPayload } from '../../../entities/publications/ReduxPayload';
import { Publication} from '../../../entities/publications/publicationEntitie' ;
// recent Publication
export const RECENT_PUBLICATIONS_FETCH = 'RECENT_PUBLICATIONS_FETCH';
export type RECENT_PUBLICATIONS_FETCH =  typeof RECENT_PUBLICATIONS_FETCH;
export const RECENT_PUBLICATIONS_FAILED = 'RECENT_PUBLICATIONS_FAILED';
export type RECENT_PUBLICATIONS_FAILED =  typeof RECENT_PUBLICATIONS_FAILED;
export const RECENT_PUBLICATIONS_SUCCESS = 'RECENT_PUBLICATIONS_SUCCESS';
export type RECENT_PUBLICATIONS_SUCCESS =  typeof RECENT_PUBLICATIONS_SUCCESS;

/// find by id 
export const PUBLICATION_BY_ID_FETCH =  'PUBLICATION_BY_ID_FETCH';
export type PUBLICATION_BY_ID_FETCH = typeof PUBLICATION_BY_ID_FETCH;
export const PUBLICATION_BY_ID_SUCCESS =  'PUBLICATION_BY_ID_SUCCESS';
export type PUBLICATION_BY_ID_SUCCESS = typeof PUBLICATION_BY_ID_SUCCESS;
export const PUBLICATION_BY_ID_FAILED =  'PUBLICATION_BY_ID_FAILED';
export type PUBLICATION_BY_ID_FAILED = typeof PUBLICATION_BY_ID_FAILED;

// add publications 
export const ADD_PUBLICATIONS_FETCH = 'ADD_PUBLICATIONS_FETCH';
export type  ADD_PUBLICATIONS_FETCH = typeof ADD_PUBLICATIONS_FETCH ;
export const ADD_PUBLICATIONS_SUCCESS = 'ADD_PUBLICATIONS_SUCCESS';
export type  ADD_PUBLICATIONS_SUCCESS = typeof ADD_PUBLICATIONS_SUCCESS ;
export const ADD_PUBLICATIONS_FAILED = 'ADD_PUBLICATIONS_FAILED';
export type  ADD_PUBLICATIONS_FAILED = typeof ADD_PUBLICATIONS_FAILED ;


// user publications 
export const MY_PUBLICATION_FETCH = 'MY_PUBLICATION_FETCH';
export type MY_PUBLICATION_FETCH = typeof MY_PUBLICATION_FETCH ;
export const MY_PUBLICATION_SUCCESS = 'MY_PUBLICATION_SUCCESS';
export type MY_PUBLICATION_SUCCESS = typeof MY_PUBLICATION_SUCCESS ;
export const MY_PUBLICATION_FAILED = 'MY_PUBLICATION_FAILED';
export type MY_PUBLICATION_FAILED = typeof MY_PUBLICATION_FAILED ;


// looking for  publications
export const SEARCH_PUBLICATION_FETCH =  'SEARCH_PUBLICATION_FETCH';
export type SEARCH_PUBLICATION_FETCH = typeof SEARCH_PUBLICATION_FETCH ;
export const SEARCH_PUBLICATION_SUCCESS =  'SEARCH_PUBLICATION_SUCCESS';
export type SEARCH_PUBLICATION_SUCCESS = typeof SEARCH_PUBLICATION_SUCCESS ;
export const SEARCH_PUBLICATION_FAILED =  'SEARCH_PUBLICATION_FAILED';
export type SEARCH_PUBLICATION_FAILED = typeof SEARCH_PUBLICATION_FAILED ;


// find by category
export const POST_BY_CATEGORY_FETCH = 'POST_BY_CATEGORY_FETCH';
export type POST_BY_CATEGORY_FETCH = typeof POST_BY_CATEGORY_FETCH ;
export const POST_BY_CATEGORY_SUCCESS = 'POST_BY_CATEGORY_SUCCESS';
export type POST_BY_CATEGORY_SUCCESS = typeof POST_BY_CATEGORY_SUCCESS ;
export const POST_BY_CATEGORY_FAILED = 'POST_BY_CATEGORY_FAILED';
export type POST_BY_CATEGORY_FAILED = typeof POST_BY_CATEGORY_FAILED ;

// delete publications 
export const DELETE_POST_FETCH = 'DELETE_POST_FETCH';
export type DELETE_POST_FETCH = typeof DELETE_POST_FETCH ; 
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export type DELETE_POST_SUCCESS = typeof DELETE_POST_SUCCESS ; 
export const DELETE_POST_FAILED = 'DELETE_POST_FAILED';
export type DELETE_POST_FAILED = typeof DELETE_POST_FAILED ; 



// Actions  
// publicaciones recientes
interface IFindPublications{
    type: RECENT_PUBLICATIONS_FETCH,
    payload : ReduxPayload<Publication>
};
interface IFindPublicationsSucces{
    type : RECENT_PUBLICATIONS_SUCCESS,
    payload : ReduxPayload<Publication>
};
interface IFindPublicationsFailed{
    type : RECENT_PUBLICATIONS_FAILED,
    payload : ReduxPayload<Publication>
};

// find publication by id 
interface publicationByIdFetch{
    type : PUBLICATION_BY_ID_FETCH,
    payload : ReduxPayload<Publication>
};
interface publicationByIdSucces{
    type : PUBLICATION_BY_ID_SUCCESS,
    payload : ReduxPayload<Publication>
};
interface publicationByIdFailed{
    type : PUBLICATION_BY_ID_FAILED,
    payload : ReduxPayload<Publication>
};
/// add publications 
interface addPublicationsFetch{
    type : ADD_PUBLICATIONS_FETCH,
    payload : ReduxPayload<Publication>
};
interface addPublicationsSuccess{
    type : ADD_PUBLICATIONS_SUCCESS,
    payload : ReduxPayload<Publication>
};
interface addPublicationsFailed{
    type : ADD_PUBLICATIONS_FAILED,
    payload : ReduxPayload<Publication>
};

/// user publications 
interface myPublicationFetch{
    type : MY_PUBLICATION_FETCH,
    payload : ReduxPayload<Publication>
};
interface myPublicationSuccess{
    type : MY_PUBLICATION_SUCCESS,
    payload : ReduxPayload<Publication>
};
interface myPublicationFailed{
    type : MY_PUBLICATION_FAILED,
    payload : ReduxPayload<Publication>
};

  /// seaching post for the in inpu
interface searchPublication_fetch{
    type : SEARCH_PUBLICATION_FETCH
    payload :ReduxPayload<Publication>
};
interface searchPublication{
    type : SEARCH_PUBLICATION_SUCCESS
    payload :ReduxPayload<Publication>
};
interface searchPublication_failed{
    type : SEARCH_PUBLICATION_FAILED
    payload :ReduxPayload<Publication>
};

// find by category
interface postByCategory_fetch{
    type : POST_BY_CATEGORY_FETCH,
    payload : ReduxPayload<Publication>
};
interface postByCategory_success{
    type : POST_BY_CATEGORY_SUCCESS,
    payload : ReduxPayload<Publication>
};
interface postByCategory_failed{
    type : POST_BY_CATEGORY_FAILED,
    payload : ReduxPayload<Publication>
};

// DELETE PUBLICATIONS 
interface deletePost_fetch{
    type : DELETE_POST_FETCH,
    payload : ReduxPayload<Publication>
};
interface deletePost_success{
    type : DELETE_POST_SUCCESS,
    payload : ReduxPayload<Publication>
};
interface deletePost_failed{
    type : DELETE_POST_FAILED,
    payload : ReduxPayload<Publication>
};


/// all actions
export type PublicationTypes =
IFindPublications | IFindPublicationsSucces | IFindPublicationsFailed | publicationByIdFetch |
publicationByIdSucces | publicationByIdFailed | addPublicationsFetch | addPublicationsSuccess|
addPublicationsFailed | myPublicationFetch | myPublicationSuccess | myPublicationFailed | searchPublication |
searchPublication_failed | searchPublication_fetch | postByCategory_fetch | postByCategory_success | postByCategory_failed |
deletePost_fetch |deletePost_success | deletePost_failed ;
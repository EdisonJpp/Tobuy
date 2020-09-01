import { ReduxPayload } from "../../../entities/publications/ReduxPayload";
import { Publication } from "../../../entities/publications/publicationEntitie";
import * as RecentPublication from '../../constants/publication/publicationTypes';

const initialState = new ReduxPayload<Publication>();
export const publicationReducer = (state = initialState, action: RecentPublication.PublicationTypes) => {
  switch (action.type) {
    case RecentPublication.RECENT_PUBLICATIONS_FETCH:
      return {
        ...state,
        ...action.payload
      };
    case RecentPublication.RECENT_PUBLICATIONS_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case RecentPublication.RECENT_PUBLICATIONS_FAILED:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state
  };
};
export const publicationById_Reducer = (state = initialState, action: RecentPublication.PublicationTypes) => {
  switch (action.type) {
    case RecentPublication.PUBLICATION_BY_ID_FETCH:
      return {
        ...state,
        ...action.payload
      };
    case RecentPublication.PUBLICATION_BY_ID_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case RecentPublication.PUBLICATION_BY_ID_FAILED:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  };
};
export const AddPost_Reducer = (state = initialState, action: RecentPublication.PublicationTypes) => {
  switch (action.type) {
    case RecentPublication.ADD_PUBLICATIONS_FETCH:
      return {
        ...state,
        ...action.payload
      };
    case RecentPublication.ADD_PUBLICATIONS_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case RecentPublication.ADD_PUBLICATIONS_FAILED:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state
  };
};
export const myPublications_Reducer = (state = initialState, action: RecentPublication.PublicationTypes) => {
  switch (action.type) {
    case RecentPublication.MY_PUBLICATION_FETCH:
      return {
        ...state,
        ...action.payload
      };
    case RecentPublication.MY_PUBLICATION_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case RecentPublication.MY_PUBLICATION_FAILED:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state
  };
};
export const searchPublications_Reducer = (state = initialState, action: RecentPublication.PublicationTypes) => {
  switch (action.type) {
    case RecentPublication.SEARCH_PUBLICATION_FETCH:
      return {
        ...state,
        ...action.payload
      };
    case RecentPublication.SEARCH_PUBLICATION_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case RecentPublication.SEARCH_PUBLICATION_FAILED:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state
  };
};
export const getPostByCategory_reducer = (state = initialState, action: RecentPublication.PublicationTypes) => {
  switch (action.type) {
    case RecentPublication.POST_BY_CATEGORY_FETCH:
      return {
        ...state,
        ...action.payload
      };
    case RecentPublication.POST_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case RecentPublication.POST_BY_CATEGORY_FAILED:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state
  };
};

export const deletePost_reducer = (state = initialState, action: RecentPublication.PublicationTypes) => {
  switch (action.type) {
    case RecentPublication.DELETE_POST_FETCH:
      return {
        ...state,
        ...action.payload
      };
    case RecentPublication.DELETE_POST_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case RecentPublication.DELETE_POST_FAILED:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state
  };
};
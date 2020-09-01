import { combineReducers } from 'redux';
import {
  publicationReducer, publicationById_Reducer, AddPost_Reducer, myPublications_Reducer,
  searchPublications_Reducer, getPostByCategory_reducer, deletePost_reducer
}
  from '../reducers/publications/recentPublication';
import { ReduxPayload } from '../../entities/publications/ReduxPayload';
import { Publication } from '../../entities/publications/publicationEntitie';
import { authUser_reducer, addUser_reducer, editUser_reducer, getUser_reducer } from '../reducers/users/authUser';
import { User } from '../../entities/user/usersEntitie';
import { getShopping_reducer, addShopping_reducer, deleteShopping_reducer } from '../reducers/shoppingCart/cartReducer';
import { shoppingCart } from '../../entities/shoppingCart/shoppingCart'
import { sellerReducer } from '../reducers/seller/sellerreducer';

import { getFollowersR, addFollowersR, deleteFollowersR } from '../reducers/followers/followerReducer';
import { Followers } from '../../entities/follower/followerEntitie';
import { getMyRate, addRate } from '../reducers/rateUser/rateUserReducer';
import { RateUser } from '../../entities/rateUser/rateUserEntentitie';

export interface IAppState {
  publications: ReduxPayload<Publication>;
  publicationsById: ReduxPayload<Publication>;
  addPost: ReduxPayload<Publication>;
  myPublications: ReduxPayload<Publication>;
  postByCategory: ReduxPayload<Publication>;
  deletePost: ReduxPayload<Publication>;
  searchPublications: ReduxPayload<Publication>;
  authUser: ReduxPayload<User>;
  addUser: ReduxPayload<User>;
  editUser: ReduxPayload<User>;
  getUsers: ReduxPayload<User>;
  shoppingCart: ReduxPayload<shoppingCart>;
  addCart: ReduxPayload<shoppingCart>;
  deleteCart: ReduxPayload<shoppingCart>;
  getSeller: ReduxPayload<User>;
  getFollowers: ReduxPayload<Followers>;
  addFollower: ReduxPayload<Followers>;
  deleteFollowers: ReduxPayload<Followers>;
  getMyRate: ReduxPayload<RateUser>;
  addRate: ReduxPayload<RateUser>;
};

export const Reducers = combineReducers<IAppState>({
  publications: publicationReducer,
  publicationsById: publicationById_Reducer,
  addPost: AddPost_Reducer,
  myPublications: myPublications_Reducer,
  postByCategory: getPostByCategory_reducer,
  deletePost: deletePost_reducer,
  authUser: authUser_reducer,
  addUser: addUser_reducer,
  editUser: editUser_reducer,
  searchPublications: searchPublications_Reducer,
  shoppingCart: getShopping_reducer,
  addCart: addShopping_reducer,
  deleteCart: deleteShopping_reducer,
  getUsers: getUser_reducer,
  getSeller: sellerReducer,
  getFollowers: getFollowersR,
  addFollower: addFollowersR,
  deleteFollowers: deleteFollowersR,
  getMyRate: getMyRate,
  addRate: addRate,
});

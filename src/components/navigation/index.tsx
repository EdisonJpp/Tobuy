import React from 'react';
// import HeaderIndex from './header/index';
import Navigation from './navigation';
 import { withRouter } from 'react-router-dom';
// import { } from '../../redux/actions/publications/postActions';
// import { addShoppingCart_fetch, AddShoppingCart_success, getShoppingCart_fetch, getShoppingCart_success } from '../../redux/actions/shoppingCart/shoppingCartActions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import Footer from './footer';
// import './index.css';


const mapStateToProps = (state: any) => {
    return {
        // recentPublication: state.publications.data,
        // screenLoading: state.publications.loading,
        // resultOfSearch: state.searchPublications.data,
        postByCategory: state.postByCategory.data,
        // postByCategoryFailed: state.postByCategory.error,
        // cartData: state.shoppingCart.data,
    };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
    // ReducerPublications: async () => {
    //     await dispatch(publications_fetch());
    //     dispatch(await publications_success());
    // },

    // // getPostBycategory: async (categoryId: number) => {
    // //     await dispatch(postByCategory_fetch());
    // //     dispatch(await postByCategory_success(categoryId));
    // // },
    // addCart: async (cart: any) => {
    //     await dispatch(addShoppingCart_fetch());
    //     dispatch(await AddShoppingCart_success(cart));
    // },
    // getCart: async (userId: number) => {
    //     await dispatch(getShoppingCart_fetch());
    //     dispatch(await getShoppingCart_success(userId));
    // }
});
export default  connect(mapStateToProps, mapDispatchToProps)(Navigation);
import ByCategory from './byCategory'; 
import { postByCategory_fetch, postByCategory_success } from '../../../../redux/actions/publications/postActions';

// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withRouter } from 'react-router';




const mapStateToProps = (state: any) => {
    return {
        // recentPublication: state.publications.data,
        // screenLoading: state.publications.loading,
        // resultOfSearch: state.searchPublications.data,
        postByCategory: state.postByCategory.data,
        postByCategoryFailed: state.postByCategory.error,
        loading: state.postByCategory.loading,
        // cartData: state.shoppingCart.data,
    };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({

    getPostByCategory: async (categoryId: number) => {
        await dispatch(postByCategory_fetch());
        dispatch(await postByCategory_success(categoryId));
    },

});
export default  connect(mapStateToProps, mapDispatchToProps)(ByCategory);
// export default ByCategory ; 
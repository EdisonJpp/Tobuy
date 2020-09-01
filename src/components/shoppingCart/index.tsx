import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ShoppingCart from './shoppingCart';
import { getShoppingCart_fetch, getShoppingCart_success, deleteShoppingCart_fetch, deleteShoppingCart_success } from '../../redux/actions/shoppingCart/shoppingCartActions'; 
import { addRateUser_fetch , addRateUser_success } from '../../redux/actions/rateUser/rateUserAction' ;


const mapStateToProps = (state: any) => {
    return {
        postOfCart: state.shoppingCart.data,
        screeLoading: state.shoppingCart.loading,
        error: state.shoppingCart.error,
        deleteCorrecty: state.deleteCart.data,
    };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getPost: async (userId: number) => {
            await dispatch(getShoppingCart_fetch());
            dispatch(await getShoppingCart_success(userId));
        },
        deleteCart: async (id: number) => {
            await dispatch(deleteShoppingCart_fetch());
            dispatch(await deleteShoppingCart_success(id));
        },
        addUserRating : async(dataRate : any) =>{
            await dispatch(addRateUser_fetch());
            dispatch(await addRateUser_success(dataRate));
        },
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShoppingCart));
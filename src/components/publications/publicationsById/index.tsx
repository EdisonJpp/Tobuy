// import customAxios from '../../../config/axios';
import { connect } from 'react-redux';
import BPublicationById from './publicationById';
import { Dispatch } from 'redux';
import { withRouter  } from 'react-router-dom'
import { publicationById_success, publicationById_fetch ,postByCategory_fetch, postByCategory_success } from '../../../redux/actions/publications/postActions';
import { addShoppingCart_fetch , AddShoppingCart_success, getShoppingCart_fetch , getShoppingCart_success} from '../../../redux/actions/shoppingCart/shoppingCartActions';

      
const mapStateToProps =  (state: any) => {
    return {
        screenLoading : state.publicationsById.loading ,
        publicationById: state.publicationsById.data,
        cartData : state.shoppingCart.data ,        

    };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
    findById: async (id : number) => {
        await dispatch(publicationById_fetch());
        dispatch(await publicationById_success(id));
    },
    getPostBycategory: async (categoryId: number) => {
        await dispatch(postByCategory_fetch());
        dispatch(await postByCategory_success(categoryId));
    },
    addCart : async(cart : any) =>{
        await dispatch(addShoppingCart_fetch());
        dispatch(await AddShoppingCart_success(cart));
    },
    getCart : async(userId : number)=>{
        await dispatch(getShoppingCart_fetch());
        dispatch(await getShoppingCart_success(userId));
    },
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BPublicationById));
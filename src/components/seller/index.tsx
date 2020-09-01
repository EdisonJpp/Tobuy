import Sellerprofile from './profile';
import {Dispatch  } from 'redux' ; 
import { connect} from 'react-redux';
import { getSellerFecth, getSellerSuccess } from '../../redux/actions/seller/sellerActions'; 
import {getMyFollowersFetch, getMyFollowersSuccess , addFollowersFetch , addFollowersSuccess, deleteFollowersFetch ,deleteFollowersSuccess} from '../../redux/actions/follower/followerAction';
import {getMyRateUser_fetch, getMyRateUser_success ,addRateUser_fetch ,addRateUser_success} from '../../redux/actions/rateUser/rateUserAction'



const mapStateToProp = (state : any)=> {
    return{
        screenLoading : state.getSeller.loading, 
        sellerData : state.getSeller.data,
        followerData: state.getFollowers.data, 
        ratingData :  state.getMyRate.data,

    };
};
const mapDispatchToProps = (dispatch : Dispatch)=>{
    return{
        getSeller : async( id : number)=>{
            await dispatch(getSellerFecth());
            dispatch(await getSellerSuccess(id));
        },
        getFollowers : async(userId : number)=>{
            await dispatch(getMyFollowersFetch());
            dispatch(await getMyFollowersSuccess(userId));
        },
        addFollower : async(followerData : any) =>{
            await dispatch(addFollowersFetch());
            dispatch(await addFollowersSuccess(followerData));
        },
        deleteFollower : async(seguidorId : number)=>{
            await dispatch(deleteFollowersFetch());
            dispatch(await deleteFollowersSuccess(seguidorId));
        },
        getMyRating : async( userId : number)=>{
            await dispatch(getMyRateUser_fetch());
            dispatch(await getMyRateUser_success(userId));
        },
        addUserRating : async(dataRate : any) =>{
            await dispatch(addRateUser_fetch());
            dispatch(await addRateUser_success(dataRate));
        },
    };
};
export default   connect(mapStateToProp,mapDispatchToProps)(Sellerprofile) ;
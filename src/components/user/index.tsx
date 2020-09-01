import { connect } from 'react-redux';
import { Dispatch } from 'redux' ;
import { withRouter } from 'react-router-dom'
import Perfil from './perfil/perfil';
import {myPublications_fetch ,myPublications_success ,deletePost_fetch ,deletePost_success } from '../../redux/actions/publications/postActions';
import {  editUserFetch , editUserSuccess} from "../../redux/actions/users/userActions";
import { getMyFollowersFetch ,getMyFollowersSuccess } from '../../redux/actions/follower/followerAction';
import {getMyRateUser_fetch, getMyRateUser_success} from '../../redux/actions/rateUser/rateUserAction'

const mapStateToProps = (state : any) =>{
    return{
        myPublications : state.myPublications.data,
        screenLoading  : state.myPublications.loading ,
        screenLoadingDelete : state.deletePost.loading,
        deleteSucces : state.deletePost.data,
        followerData : state.getFollowers.data, 
        ratingData :  state.getMyRate.data,

    };
};
const mapDispatchToProps = ( dispatch: Dispatch)=>{
    return{
        myPublicationF :  async(users_id : number ) =>{
            await dispatch(myPublications_fetch());
            dispatch(await myPublications_success(users_id));
        },
        deleteMyPost : async ( id : number )=>{
            await dispatch(deletePost_fetch());
            dispatch(await deletePost_success(id));
        },
        editUserFunction : async( user : any) =>{
            await dispatch(editUserFetch());
            dispatch(await editUserSuccess(user));
        },
        getMyFollower : async(userId : number)=>{
            await dispatch(getMyFollowersFetch());
            dispatch(await getMyFollowersSuccess(userId)); 
        },
        getMyRating : async( userId : number)=>{
            await dispatch(getMyRateUser_fetch());
            dispatch(await getMyRateUser_success(userId));
        },
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Perfil));



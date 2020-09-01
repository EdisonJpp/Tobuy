import { connect} from 'react-redux';
import { Dispatch } from 'redux';
import Login from "./login";
import {authUser_success , authUser_fetch } from '../../redux/actions/users/authUser';
import {withRouter } from 'react-router-dom';
import {User} from '../../entities/user/usersEntitie';

const mapStateToProps = (state : any ) =>{
    console.log(state.authUser.data);
    return{
        userData : state.authUser.data,
        screenLoading : state.authUser.loading,
        failed  : state.authUser.error
    };
};
const mapDispatchToProps = (dispatch : Dispatch) =>{
    return{
        authuser : async( userData : User  ) =>{
            await dispatch( authUser_fetch());
            dispatch(await authUser_success(userData));
        },
        
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
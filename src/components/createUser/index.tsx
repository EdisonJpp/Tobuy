import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { Dispatch} from 'redux'; 
import CreateUser from './createUser'; 
import {AddUser_fetch, AddUserSuccess, getUserSuccess ,getUserFetch} from '../../redux/actions/users/userActions';
const mapStateToprops = (state : any) =>{
    return{
        usersData : state.getUsers.data,
    };

};
const mapDispatchToProps = (dispatch : Dispatch) =>{
    return{
        createUser : async ( user :any )=>{
            await dispatch(AddUser_fetch());
            dispatch( await AddUserSuccess(user));
        },
        getUser : async()=>{
            await dispatch(getUserFetch());
            dispatch(await getUserSuccess());
        }
    };
};

export default withRouter(connect(mapStateToprops,mapDispatchToProps)(CreateUser));
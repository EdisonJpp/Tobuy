import {withRouter} from 'react-router-dom'; 
import {connect} from 'react-redux'; 
import { Dispatch} from 'redux';
import RateUser from './rateUser';
import {getMyRateUser_fetch, getMyRateUser_success} from '../../redux/actions/rateUser/rateUserAction'




const mapStateToProps = (state : any) =>{
    return{
        screenLoading :  state.getMyRate.loading,
        ratingData :  state.getMyRate.data,

    };
};

const mapDispatchToProps = (dispatch : Dispatch) =>{
    return{
        getMyRating : async( userId : number)=>{
            await dispatch(getMyRateUser_fetch());
            dispatch(await getMyRateUser_success(userId));
        },
    };
};



export default connect(mapStateToProps ,mapDispatchToProps)(RateUser) ; 
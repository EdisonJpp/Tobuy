import EditUser from './editUser';
import { connect } from 'react-redux' ;

const mapStateToProps = (state : any) =>{
    return{
        screenLoading : state.editUser.loading,
};
};

export default   connect(mapStateToProps )(EditUser);

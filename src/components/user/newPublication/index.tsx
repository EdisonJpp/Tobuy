import newPublications from './newPublications';
import { connect} from 'react-redux';
import {Dispatch} from 'redux'; 
import {  withRouter} from "react-router-dom";
import {addPost_success, addPost_fetch  } from '../../../redux/actions/publications/postActions'

const mapStateToProps = ( state : any) =>{
    return{
        screenLoading : state.addPost.loading, 
    }
};
const mapDispatchToProps = (  dispatch: Dispatch) =>{
    return{
        newpublication : async (photo : any , publicationData : any)=>{
            await dispatch(addPost_fetch());
            dispatch(await addPost_success(photo,publicationData));
        },
    };
};
export default  withRouter( connect(mapStateToProps, mapDispatchToProps)(newPublications));








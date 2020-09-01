import SearchResult from './searchResult'
import { connect } from  'react-redux'
import { withRouter} from 'react-router-dom'

const mapStateToProps = (state : any) =>{
    return{
        result : state.searchPublications.data,
        screenLoadingOfResult : state.searchPublications.loaging,
    };
};
export default withRouter( connect(mapStateToProps)(SearchResult));
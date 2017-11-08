import { connect } from 'react-redux';
import SortUsers from "../components/SortUsers";
import { setCurrentUserSort } from "../actions";



function mapDispatchToProps(dispatch){
    return {
     setIsLoading: function(sort){
       let action = setCurrentUserSort(sort);
       dispatch(action);
     }
    }
  }


var label = connect(null, mapDispatchToProps);
var SortUsersContainer = label(SortUsers);
export default SortUsersContainer;


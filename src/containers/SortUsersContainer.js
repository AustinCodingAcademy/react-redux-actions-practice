import SortUsers from "../components/SortUsers";
import {connect} from "react-redux";
import {setCurrentUserSort} from "../actions";

function mapDispatchToProps(dispatch){
  return {
    set: function(sort){
      var action = setCurrentUserSort(sort);
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(SortUsers);
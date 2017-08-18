import SortUsers from "../components/SortUsers";
import {connect} from 'react-redux';
import {setCurrentSort} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    set: function(sort) {
      let action = setCurrentSort(sort);
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(SortUsers);


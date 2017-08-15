import SortUsers from '../components/SortUsers';
import {setCurrentUserSort} from '../actions';
import {connect} from 'react-redux';


function mapDispatchToProps(dispatch) {
  return {
    set: function(sort) {
      dispatch(setCurrentUserSort(sort))
    }
  }
}

export default connect(null, mapDispatchToProps)(SortUsers);

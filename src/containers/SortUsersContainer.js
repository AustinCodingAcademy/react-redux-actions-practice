import {connect} from 'react-redux';
import {setCurrentUserSort} from '../actions';
import SortUsers from '../components/SortUsers';

function mapDispatchToProps(dispatch){
  return {
    set:function(theUser){
      let action = setCurrentUserSort(theUser);
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(SortUsers);

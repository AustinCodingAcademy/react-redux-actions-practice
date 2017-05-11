import { connect } from 'react-redux';
import SortUsers from '../components/SortUsers';
import {setCurrentUserSort} from '../actions';

function mapDispatchToProps(dispatch){
  return {
    // returns an object that we call an action
    set:function(sort){
      let action = setCurrentUserSort(sort);
      dispatch(action);
    }
  }
}

const SortUsersContainer = connect(mapDispatchToProps)(SortUsersContainer);

export default SortUsersContainer
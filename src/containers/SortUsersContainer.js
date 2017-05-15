import {connect} from 'react-redux';
import SortUsers from "../components/SortUsers";
import {setCurrentUserSort} from "../actions";


// map prop `set` to action `setCurrentUserSort`
const mapDispatchToProps = dispatch => {
  return {
    set: (sortOn) => {
      const action = setCurrentUserSort(sortOn);
      dispatch(action);
    }
  };
};

const SortUsersContainer = connect(null,mapDispatchToProps)(SortUsers);
export default SortUsersContainer

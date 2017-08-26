import { connect } from 'react-redux';
import {setCurrentUserSort} from '../actions';
import SortUsers from "../components/SortUsers";

function mapDispatchToProps(dispatch) {
  return {
   set: function(sort) {
     dispatch(setCurrentUserSort(sort));
   },
  }
}

export default connect(null, mapDispatchToProps)(SortUsers);

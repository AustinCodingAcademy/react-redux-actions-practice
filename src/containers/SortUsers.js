import { connect } from 'react-redux';
import {setCurrentUserSort} from "../actions";
import SortUsers from "../components/SortUsers";

function mapDispatchToProps(dispatch){
  return {
    setSort: () => dispatch(setCurrentUserSort())
  }
}

export default connect(null,mapDispatchToProps)(SortUsers);

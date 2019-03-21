import { connect } from 'react-redux';
import { setCurrentUserSort } from "../../actions"
import SortUsers from "../../components/SortUsers";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    set: setCurrentUserSort
  }
}

export default connect(mapStateToProps)(SortUsers);

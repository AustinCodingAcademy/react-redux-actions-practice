import { connect } from 'react-redux';
import {setSpecialText} from "../actions";
import Users from "../components/Users";
import state from "../state";


function mapStateToProps(state){
  return {
   users: state.users,
   sortOn: currentUserSort
  }
}

export default connect(mapStateToProps, null)(Users);

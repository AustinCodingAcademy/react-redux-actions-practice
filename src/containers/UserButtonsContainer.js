import { connect } from 'react-redux';
import {addUser, removeUser} from "../actions";
import Users from "../components/Users.js";


const mapDispatchToProps = {
   add:addUser,
   remove:removeUser
  }


export default connect(null,mapDispatchToProps)(Users);
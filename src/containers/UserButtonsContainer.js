import { connect } from 'react-redux';
import {setSpecialText} from "../actions";
import UserButtons from "../components/UserButtons";


function mapDispatchToProps(dispatch){
  return {
   add:function(user){
     let action = addUser(user);
     dispatch(action);
   },
   remove: () => {
     let action = removeUser();
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(UserButtons);

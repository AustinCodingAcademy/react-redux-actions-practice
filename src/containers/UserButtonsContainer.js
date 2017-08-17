import { connect } from 'react-redux';
import {addUser, removeUser} from '../actions';
import UserButtons from '../components/UserButtons';

function mapDispatchToProps(dispatch){
  return {
    //this function needed a parameter sent in because the function in 
    //UserButtons worked that way
    add:function(obj){
      let action = addUser(obj);
      dispatch(action);
    },
    remove:function(){
      let action = removeUser();
      dispatch(action);
    }
  }
}


export default connect(null,mapDispatchToProps)(UserButtons);

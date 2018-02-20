import React from 'react';
import { connect } from 'react-redux';
import {addUser} from "../actions";
import {removeUser} from "../actions";
import UserButtons from "../components/UserButtons";


function mapDispatchToProps(dispatch){
return {
  add:function(user){
    var action = addUser(user);
    dispatch(action);
  },
  remove:function(){
    var action = removeUser();
    dispatch(action);
  }
}
}

const UserButtonsContainer = connect(null,mapDispatchToProps)(UserButtons);
export default UserButtonsContainer;

import React from 'react';
import { addUser, removeUser } from "../actions";
import { connect } from "react-redux";
import UserButtons from "../components/UserButtons"

function mdp(dispatch){
  return{
    add:function(user){
      let action = addUser(user);
      dispatch(action);
    },
    remove:function(){
      let action = removeUser();
      dispatch(action);
    }
  }
}
export default connect(null,mdp)(UserButtons);
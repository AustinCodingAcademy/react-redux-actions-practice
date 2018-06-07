import { connect } from 'react-redux'
import { addUser, removeUser } from '../actions'
import UserButtons from '../components/UserButtons'

function mdp(dispatch){
  return{
    add:function(user){
      dispatch(addUser(user))
      },
    remove:function(){
      dispatch(removeUser())
    }
    }
  
}

export default connect(null,mdp)(UserButtons);
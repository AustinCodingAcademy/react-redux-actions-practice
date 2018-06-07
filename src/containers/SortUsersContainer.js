import { connect } from 'react-redux'
import { currentUserSort } from '../actions'
import SortUsers from '../components/SortUsers'

const mdp = (dispatch)=>{
  return{
    set:function(user){
      dispatch(currentUserSort(user))
    }
  }
}

export default connect(null,mdp)(SortUsers)
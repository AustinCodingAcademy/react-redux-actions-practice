import { connect } from 'react-redux'
import { setSearchText } from '../actions'
import SearchTextBox from '../components/SearchTextBox'

const mdp = dispatch =>{
  return{
    set:function(text){
      dispatch(setSearchText(text))
    }
  }
}

export default connect(null, mdp)(SearchTextBox)
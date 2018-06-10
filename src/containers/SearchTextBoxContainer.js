import { connect } from 'react-redux';
import SearchTextBox from "../components/SearchTextBox";
import { setSearchText } from "../actions";


function mapDispatchToProps(dispatch){
  return {
    set: function(text){
      dispatch(setSearchText(text))
    }
  }
}

export default connect(null,mapDispatchToProps)(SearchTextBox);
import {connect} from "react-redux";
import SearchTextBox from '../components/SearchTextBox';
import {setSearchText} from "../actions";

function mapDispatchToProps(dispatch){
  return {
    set: function(){
      var action = setSearchText();
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchTextBox);

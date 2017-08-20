import {connect} from "react-redux";
import SearchTextBox from "../components/SearchTextBox";
import {setSearchText} from "../actions";

function mapDispatchToProps(dispatch){
  return {
    set:function(text){
      var action = setSearchText(text);
      dispatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps)(SearchTextBox);

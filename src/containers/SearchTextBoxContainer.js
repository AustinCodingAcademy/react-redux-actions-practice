import SearchTextBox from "../components/SearchTextBox";
import { connect } from "react-redux";
import { setSearchText } from "../actions";

// map prop set to action setSearchText
function mapDispatchToProps(dispatch){
  return {
    set: function(txt){
      let action = setSearchText(txt);
      dispatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps)(SearchTextBox);

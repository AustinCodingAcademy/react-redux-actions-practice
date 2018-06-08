import { setSearchText } from "../actions";
import SearchTextBox from "../components/SearchTextBox";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
    return {
      set: function(txt) {
        let action = setSearchText(txt);
        dispatch(action);
      },
    };
  }
  
  export default connect(null,mapDispatchToProps)(SearchTextBox);
import { Connect } from "react-redux";
import SearchTextBox from "./components/SearchTextBox";
import { loadSearch } from "./actions";

function mapDispatchToProps(dispatch){
  return {
    set: function(searchText){
      let action = setSearchText(searchText);
      dispatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps)(SearchTextBox);

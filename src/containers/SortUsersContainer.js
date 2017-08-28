import {setCurrentUserSort} from "../actions";
import {connect} from "react-redux";
import SortUsers from "../components/SortUsers";

function mapDispatchToProps(dispatch) {
  return{
    set: function(sort){
      let action = setCurrentUserSort(sort);
      dispatch(action);
    }
  }
}

//This is the shorter way to export.
//export default connect(null,mapDispatchToProps)(CityDropDown)

let otherFunction = connect(null, mapDispatchToProps);
let SortUsersContainer = otherFunction(SortUsers);
export default SortUsersContainer;

import {connect} from "react-redux";
import {setCurrentUserSort} from "../actions";
import SortUser from "../components/SortUsers";


function mapDispatchToProps(dispatch){
  return {
    set:function(userSort){
      let action = setCurrentUserSort(userSort);
      dispatch(action);
    }
  }
}


const SortUserContainer = connect(mapDispatchToProps)(SortUser);


export default SortUserContainer

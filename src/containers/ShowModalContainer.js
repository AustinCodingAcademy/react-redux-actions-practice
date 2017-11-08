import { connect } from 'react-redux';
import ShowModal from "../components/SearchTextBox";
import { setIsLoading  } from "../actions";



function mapDispatchToProps(dispatch){
    return {
     setIsLoading: function(isLoading){
       let action = setIsLoading(isLoading);
       dispatch(action);
     }
    }
  }


var label = connect(null, mapDispatchToProps);
var ShowModalContainer = label(ShowMOdal);
export default ShowModalContainer;


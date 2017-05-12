import { connect } from 'react-redux';
import { setIsLoading } from "../actions";
import ShowModal from "../components/ShowModal";

function mapDispatchToProps(dispatch){
  return {
    set:function(isLoading){
      let action = setIsLoading(isLoading);
      dispatch(action);
    }
  };
}

const ShowModalContainer = connect(null,mapDispatchToProps)(ShowModal);
export default ShowModalContainer;

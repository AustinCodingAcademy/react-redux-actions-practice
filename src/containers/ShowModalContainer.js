import { connect } from 'react-redux';
import {setIsLoading} from "../actions";
import ShowModal from "../components/ShowModal";

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading
    }
}

function mapDispatchToProps(dispatch){
  return {
    setIsLoading:function(){
      let action = setIsLoading()
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowModal);
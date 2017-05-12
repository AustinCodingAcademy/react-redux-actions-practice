import { connect } from 'react-redux';
import ShowModal from '../components/ShowModal';
import {setIsLoading} from '../actions';

function mapDispatchToProps(dispatch){
  return {
    // returns an object that we call an action
    setIsLoading:function(isLoading){
      let action = setIsLoading(isLoading);
      dispatch(action);
    }
  }
}

const ShowModalContainer = connect(null,mapDispatchToProps)(ShowModal);

export default ShowModalContainer
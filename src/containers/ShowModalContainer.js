import ShowModal from '../components/ShowModal';
import {setIsLoading} from '../actions';
import {connect} from 'react-redux';


function mapDispatchToProps(dispatch) {
  return {
    setIsLoading: function(isLoading) {
      dispatch(setIsLoading(isLoading))
    }
  }
}

export default connect(null, mapDispatchToProps)(ShowModal);

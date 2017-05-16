import { connect } from 'react-redux';
import ShowModal from '../components/ShowModal';
import { setIsLoading } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    setIsLoading: (bool) => {
      const action = setIsLoading(bool);
      dispatch(action);
    }
  }
}

const ShowModalContainer = connect(null, mapDispatchToProps)(ShowModal);

export default ShowModalContainer;

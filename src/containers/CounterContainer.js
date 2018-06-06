import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from '../actions';
import Counter from '../components/Counter';

const mapStateToProps = (state) => {
  return {
    count: state.currentCount,
  };
};

export default connect(mapStateToProps, null)(Counter);

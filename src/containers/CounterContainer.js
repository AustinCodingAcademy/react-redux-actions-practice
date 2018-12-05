import { connect } from 'react-redux';
import Counter from '../components/Counter';

mapStateToProps(state) {
  return {
    count: state.currentCount
  }
}

export default connect(mapStateToProps)(Counter);
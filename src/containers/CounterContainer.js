import Counter from '../components/Counter';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter);


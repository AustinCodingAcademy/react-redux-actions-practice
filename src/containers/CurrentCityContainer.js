import {connect} from 'react-redux';
import currentCity from '../components/CurrentCity';

function mapStateToProps(state){
  return {
    text: state.currentCity
  }
}

export default connect(mapStateToProps)(currentCity);

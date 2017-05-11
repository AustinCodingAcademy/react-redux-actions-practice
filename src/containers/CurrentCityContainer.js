import { connect } from 'react-redux';
import CurrentCity from '../components/CurrentCity';

function mapStateToProps(state){
  return {
    text:state.currentCity
  }
}

const CurrentCityContainer = connect(mapStateToProps)(CurrentCityContainer);

export default CurrentCityContainer
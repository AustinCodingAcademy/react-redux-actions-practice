import { connect } from 'react-redux';
import { setCurrentCity } from "../actions";
import CurrentCity from "../components/CurrentCity";


function mapStateToProps(state){
  return {
    text: state.currentCity
  }
}
//
// function mapDispatchToProps(dispatch){
//   return {
//     setCurrentCity:function(city){
//       let action = setCurrentCity(city);
//       dispatch(action);
//     }
//   };
// }

const CurrentCityContainer = connect(mapStateToProps)(CurrentCity);
export default CurrentCityContainer;

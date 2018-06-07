import { connect } from 'react-redux'
import { currentCity } from '../actions'
import CityDropDown from '../components/CityDropDown'

const mdp = dispatch =>{
  return{
    set:function(city){
      dispatch(currentCity(city))}
  }
}

export default connect(null, mdp)(CityDropDown)
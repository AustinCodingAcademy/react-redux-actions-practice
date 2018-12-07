import { connect } from 'react-redux'
import CurrentCity from '../components/CurrentCity'

const msp = (state)=>{return{text:state.currentCity}}

const CurrentCityContainer = connect(msp)(CurrentCity)

export default CurrentCityContainer
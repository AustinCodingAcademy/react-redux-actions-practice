import { connect } from 'react-redux'
import Counter from '../components/Counter'

const msp = (state) => {return{count:state.currentCount}}

const CounterContainer = connect(msp)(Counter)

export default CounterContainer;
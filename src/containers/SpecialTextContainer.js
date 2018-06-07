import { connect } from 'react-redux';
import SpecialText from "../components/SpecialText";


const msp = state =>{return{text:state.specialText}}

const SpecialTextContainer = connect(msp)(SpecialText)

export default SpecialTextContainer;
import { connect } from 'react-redux';
import SpecialText from "../components/SpecialText";


const mapStatetoProps = state => {
    return {text: state.specialText}}

const SpecialTextContainer = connect(mapStatetoProps)(SpecialText)

export default SpecialTextContainer;

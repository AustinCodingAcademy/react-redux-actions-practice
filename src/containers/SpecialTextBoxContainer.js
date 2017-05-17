import {connect} from 'react-redux';
import SpecialTextBox from '../components/SpecialTextBox';
import {setSpecialText} from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        set:function(text) {
            let action = setSpecialText(text);
            dispatch(action);
        }
    }
}

const SpecialTextBoxContainer = connect(null, mapDispatchToProps)(SpecialTextBox);
export default SpecialTextBoxContainer;
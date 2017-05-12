import {connect} from 'react-redux';
import SpecialTextBox from '../components/SpecialTextBox';
import {setSpecialText} from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        setSpecialText:function(text) {
            let action = setSpecialText(text);
            dispatch(action);
        }
    }
}

const SpecialTextBoxContainer = connect(mapDispatchToProps, SpecialTextBox);
export default SpecialTextBoxContainer;
import {connect} from 'react-redux';
import SearchTextBox from '../components/SearchTextBox';
import {setSearchText} from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        setSearchText:function(text) {
            let action = setSearchText(text);
            dispatch(action);
        }
    }
}

const SearchTextBoxContainer = connect(mapDispatchToProps, SearchTextBox);
export default SearchTextBoxContainer;
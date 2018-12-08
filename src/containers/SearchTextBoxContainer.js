import {connect} from "react-redux";
import {setSearchText} from "../actions";
import SearchTextBox from '../components/SearchTextBox';

function mapDispatchToProps(dispatch){
    return{
        set: function(text){
            var action = setSearchText(text);
            dispatch(action);
        }
    }
}
export default connect(null, mapDispatchToProps)(SearchTextBox)

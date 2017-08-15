import SearchTextBox from '../components/SearchTextBox';
import {setSearchText} from '../actions';
import {connect} from 'react-redux';


function mapDispatchToProps(dispatch) {
  return {
    set: function(txt) {
      dispatch(setSearchText(txt))
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchTextBox);

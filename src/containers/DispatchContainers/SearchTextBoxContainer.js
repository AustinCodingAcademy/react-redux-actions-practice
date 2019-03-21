import { connect } from 'react-redux';
import { setSearchText } from "../../actions"
import SearchTextBox from "../../components/SearchTextBox";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    set: setSearchText 
  }
}

export default connect(mapStateToProps)(SearchTextBox);

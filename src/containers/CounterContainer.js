//Counter Container... map a prop called 'count' to the state 'currentCount'

import { connect } from 'react-redux';
import Counter from "../components/Counter";

function mapDispatchToProps(dispatch){
    return {
     set:function(txt){
       let action = CurrentCount(txt);
       dispatch(action);
     }
    }
  }
  
  export default connect(null,mapDispatchToProps)(Count);
  
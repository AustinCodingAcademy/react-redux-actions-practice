
import {connect} from 'react-redux';
import Counter from '../components/Counter'

const mapStateToProps = state => ({ count: state.currentCount })
    
  
    
export default connect(mapStateToProps)(Counter);
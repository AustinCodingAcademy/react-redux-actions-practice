import {connect} from 'react-redux';
import CurrentCity from '../components/CurrentCity'

const mapStateToProps = state => ({text: state.currentCity})
    

export default connect(mapStateToProps)(CurrentCity);
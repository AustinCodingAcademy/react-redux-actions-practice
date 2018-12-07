import { connect } from 'react-redux'
import { setIsLoading } from '../actions'
import ShowModal from '../components/ShowModal'

const mapDispatchToProps = dispatch => {
  return{
    setIsLoading:function(load){
      dispatch(setIsLoading(load))
    }
  }
}

export default connect(null, mapDispatchToProps)(ShowModal);

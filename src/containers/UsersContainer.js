import { connect } from 'react-redux';
import UsersContainer from "../components/Users";
import currentUserSort from "../components/SortUsers";

//map a prop called text to the state Users
function mapStateToProps(state){
    return {
      text: state.users
    }
  }
  
  export default connect(mapStateToProps)(Users);
  //I have no idea if this is right... map a prop called 'firstNameFilter' to the state'SearchText'//
  function mapStateToProps(state){
      return{
        set:function(txt){
            let action = SearchText(txt);
            dispatch(action);
        }  
      }
      export default connect(null,mapDispatchToProps)(firstNameFilter);
  }
  //Also have no idea if this is right... map a prop called sortOn to the state 'currentUserSort'
  function mapStateToProps(state){
      return{
          set:function(txt){
              let action = currentUserSort(txt);
              dispatch(action);
          }
      }
      export default connect(null,mapDispatchToProps)(sortOn)
  }
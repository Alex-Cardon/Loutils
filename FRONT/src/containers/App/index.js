import { connect } from 'react-redux';
import { getContent } from 'src/actions/content';
import App from 'src/components/App';


const mapDispatchToProps = (dispatch) =>({
  loadContent:() => {
    dispatch(getContent());
  }
});

export default connect(null, mapDispatchToProps)(App);

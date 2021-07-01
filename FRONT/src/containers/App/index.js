import { connect } from 'react-redux';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  
  isLogged: state.user.isLogged,
  
  
});

export default connect(mapStateToProps)(App);






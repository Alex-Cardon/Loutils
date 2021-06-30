import { connect } from 'react-redux';

import Header from 'src/components/Header';



const mapStateToProps = (state) => ({
  
  isLogged: state.user.isLogged,
  loggedMessage: `Bienvenue ${state.user.name}`,
  
});

export default connect(mapStateToProps)(Header);

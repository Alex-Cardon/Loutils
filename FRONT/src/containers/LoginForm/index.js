import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';

import { 
  changeField, 
  submitLogin, 
  logout,
  toggleSettings,
} from 'src/actions/loginForm';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
  loggedMessage: `Bienvenue ${state.user.name}`,
  isOpen: state.user.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
  // comme vu dans notre enquête
  // changeField prend 2 parametres
  // la nouvelel valeur de l'input
  // la "case" a modifier (email ou password)
  // enquete_changefield.png et enquete_changeField.md
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  handleLogin: () => {
    dispatch(submitLogin());
  },
  handleLogout: () => {
    dispatch(logout());
  },

  onSettingsToggle: () => {
    dispatch(toggleSettings());
  },
 
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

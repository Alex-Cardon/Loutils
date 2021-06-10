import { connect } from 'react-redux';

import { changeSettingsInput } from 'src/actions/settingsField';

import SettingsField from 'src/components/SignupPage/SettingsField';


const mapStateToProps = (state, ownProps) => ({
  // je vais chercher dans settings la clé correspondant à
  // ce qui est dans la prop stateKey
  // si stateKey === "email" c'est comme si j'écrivais
  // state.settings['email']
  value: state[ownProps.stateKey],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (event) => {
    // meme idée : on récupère ownProps.stateKey pour obtenir
    // la clé qui nous concerne (email ou password)
    // cette clé sera donc donnée en prop manuellement dans le JSX
    // qui appelle mon composant connecté
    dispatch(changeSettingsInput(ownProps.stateKey, event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsField);

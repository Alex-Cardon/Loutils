import { connect } from 'react-redux';

import adFormInput from 'src/components/AdForm/adFormInput';

import { changeAdField } from 'src/actions/adForm';

//! je recupère mes proptypes du component index.js de SignupPage 
//!comme les proptypes sont func et string  
//! direction les actions dans signup.js 

//!cela sera une donnée
const mapStateToProps = (state, ownProps) => ({
  value: state.settings[ownProps.stateKey],
  isLogged: state.user.isLogged,
});
//! cela sera une action 
const mapDispatchToProps = (dispatch, ownProps) => ({
  
  onChange: (event) => {
    // meme idée : on récupère ownProps.stateKey pour obtenir
    // la clé qui nous concerne (email ou password)
    // cette clé sera donc donnée en prop manuellement dans le JSX
    // qui appelle mon composant connecté
    // dispatch(changeAdField(ownProps.stateKey, event.target.value));
    console.log(event.target.value);
    const newValue = (event.target.type === 'number') ? parseInt(event.target.value, 10) : event.target.value;
    dispatch(changeAdField(newValue, event.target.name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(adFormInput);

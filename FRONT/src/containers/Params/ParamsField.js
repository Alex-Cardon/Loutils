import { connect } from 'react-redux';

import ParamsField from 'src/components/Params/ParamsField';

import { changeParamsInput } from 'src/actions/paramsField';

//! je recupère mes proptypes du component index.js de SignupPage 
//!comme les proptypes sont func et string  
//! direction les actions dans params.js 

//!cela sera une donnée
const mapStateToProps = (state, ownProps) => ({
  // je vais chercher dans settings la clé correspondant à
  // ce qui est dans la prop stateKey
  // si stateKey === "email" c'est comme si j'écrivais
  // state['email']
  value: state.params[ownProps.stateKey],
});
//! cela sera une action 
const mapDispatchToProps = (dispatch, ownProps) => ({
  
  onChange: (event) => {
    // meme idée : on récupère ownProps.stateKey pour obtenir
    // la clé qui nous concerne (email ou password)
    // cette clé sera donc donnée en prop manuellement dans le JSX
    // qui appelle mon composant connecté
    dispatch(changeParamsInput(ownProps.stateKey, event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ParamsField);

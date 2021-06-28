import { connect } from 'react-redux';

import SettingsField from 'src/components/AdForm/adFormPicture';

import { changeadFormPicture } from 'src/actions/adFormPicture';

//! je recupère mes proptypes du component index.js de SignupPage 
//!comme les proptypes sont func et string  
//! direction les actions dans signup.js 

//!cela sera une donnée
const mapStateToProps = (state, ownProps) => ({

  value: state.settings[ownProps.stateKey],
});
//! cela sera une action 
const mapDispatchToProps = (dispatch, ownProps) => ({
  
  onChange: (event) => {
    dispatch(changeadFormPicture(ownProps.stateKey, event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsField);

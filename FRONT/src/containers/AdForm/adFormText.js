import { connect } from 'react-redux';

import SettingsField from 'src/components/AdForm/adFormText';

import { changeadFormText } from 'src/actions/adFormText';

//!cela sera une donnée
const mapStateToProps = (state, ownProps) => ({

  value: state.settings[ownProps.stateKey],
});
//! cela sera une action 
const mapDispatchToProps = (dispatch, ownProps) => ({
  
  onChange: (event) => {
    dispatch(changeadFormText(ownProps.stateKey, event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsField);

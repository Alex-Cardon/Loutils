import { connect } from 'react-redux';

import adFormText from 'src/components/AdForm/adFormText';

import { changeAdField } from 'src/actions/adForm';

//!cela sera une donnée
const mapStateToProps = (state, ownProps) => ({

  value: state.settings[ownProps.stateKey],
  isLogged: state.user.isLogged,
});
//! cela sera une action 
const mapDispatchToProps = (dispatch, ownProps) => ({
  
  onChange: (event) => {
    // dispatch(changeAdField(ownProps.stateKey, event.target.value));
    const newValue = (event.target.type === 'number') ? parseInt(event.target.value, 10) : event.target.value;
    dispatch(changeAdField(newValue, event.target.name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(adFormText);

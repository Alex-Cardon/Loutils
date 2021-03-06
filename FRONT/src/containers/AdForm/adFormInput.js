import { connect } from 'react-redux';

import adFormInput from 'src/components/AdForm/adFormInput';

import { changeAdField } from 'src/actions/adForm';

//! je recupère mes proptypes du component index.js de SignupPage 
//!comme les proptypes sont func et string  
//! direction les actions dans signup.js 

//!cela sera une donnée
const mapStateToProps = (state, ownProps) => {
  // console.log("Juan", state.ad);
  return{
    value: state.ad[ownProps.name],
  // value: state.settings[ownProps.stateKey],
  isLogged: state.user.isLogged,
}};
//! cela sera une action 
const mapDispatchToProps = (dispatch, ownProps) => ({
  
  onChange: (event) => {

    console.log(event.target.value);
    const newValue = (event.target.type === 'number') ? parseInt(event.target.value, 10) : event.target.value;
    dispatch(changeAdField(newValue, event.target.name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(adFormInput);

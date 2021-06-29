import { connect } from 'react-redux';

import adFormPicture from 'src/components/AdForm/adFormPicture';

import { changeAdField } from 'src/actions/adForm';

//! je recupère mes proptypes du component index.js de SignupPage 
//!comme les proptypes sont func et string  
//! direction les actions dans signup.js 

//!cela sera une donnée
const mapStateToProps = (state, ownProps) => ({

  value: state.settings[ownProps.stateKey],
});
//! cela sera une action 
const mapDispatchToProps = (dispatch, ownProps) => ({
  
  updatePictureId: (picture_id) => {
    dispatch(changeAdField(picture_id, 'picture_id'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(adFormPicture);

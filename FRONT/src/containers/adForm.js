import { connect } from 'react-redux';

import { changeAdField, changeToolState, submitAdLogin, uploadFile } from 'src/actions/adForm';

import AdForm from 'src/components/AdForm';

const mapStateToProps = (state) => ({
  toolName: state.ad.toolName,
  image: state.ad.image,
  price: state.ad.price,
  caution: state.ad.caution,
  description: state.ad.description,
  toolState: state.ad.toolState,
  });

const mapDispatchToProps = (dispatch) => ({

  changeField: (value, name) => {
    dispatch(changeAdField(value, name));
  },

  getToolStateValue: (value) => {
    console.log("value : ", value);
    // ici value est un objet au lieu de value="used" ou value="working"
    dispatch(changeToolState(value));
  },

  onUploadFile: (e) => {
    console.log("data file");
    dispatch(uploadFile(e));
  }, 

  handleLogin: () => {
    dispatch(submitAdLogin());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(AdForm);
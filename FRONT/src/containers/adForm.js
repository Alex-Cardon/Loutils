import { connect } from 'react-redux';

import { 
  changeAdField, 
  changeToolState, 
  submitAdLogin, 
  getFileUpload,
  selectImage,
} from 'src/actions/adForm';

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

  handleFileUpload: (value) => {
    console.log('je suis dans containers: handleFileUpload');
    dispatch(getFileUpload(value));
  },

  handleLogin: () => {
    dispatch(submitAdLogin());
  },

  onImageSelected:(image) => {
    //console.log('image: ', image);
    dispatch(selectImage(image));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(AdForm);

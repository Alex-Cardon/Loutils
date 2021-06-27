import { connect } from 'react-redux';


import { 
  changeAdField, 
  changeToolState, 
  submitAdLogin, 
  getFileUpload,
  selectImage,
  changeField,
  getToolStateValue,
  handleFileUpload,
  handleLogin,
  onImageSelected
} from 'src/actions/adForm';


import AdForm from 'src/components/AdForm';

console.log("changeAdField", changeAdField,
"changeToolState", changeToolState, 
"submitAdLogin", submitAdLogin, 
"getFileUpload",getFileUpload,
"selectImage",selectImage,)

const mapStateToProps = (state) => ({
  title: state.ad.title,
  image: state.ad.image,
  price: state.ad.price,
  deposit: state.ad.deposit,
  description: state.ad.description,
  product_state: state.ad.product_state,
  postcode: state.ad.postcode,
  });

  // console.log("AdForm Container : title",title,
  // "image",image,
  // "price",price,
  // "deposit",deposit,
  // "description",description,
  // "product_state",product_state,
  // "postcode",postcode);

console.log("container ad form ligne 26");
const mapDispatchToProps = (dispatch) => ({

  changeField: (value, name) => {
    dispatch(changeAdField(value, name));
    console.log("changeField",changeField);
  },

  handleSubmit : (evt) => {
    evt.preventDefault();
    handleLogin();
  },

  getToolStateValue: (value) => {
    console.log("value : ", value);
    // ici value est un objet au lieu de value="used" ou value="working"
    dispatch(changeToolState(value));
    console.log("getToolStateValue",getToolStateValue);
  },


  handleFileUpload: (value) => {
    console.log('je suis dans containers: handleFileUpload');
    dispatch(getFileUpload(value));
    console.log("handleFileUpload,",handleFileUpload);
  },

  onUploadFile: (e) => {
    console.log("data file");
    dispatch(uploadFile(e));
    console.log("onUploadFile",onUploadFile);
  }, 


  handleLogin: () => {
    dispatch(submitAdLogin());
    console.log("handleLogin",handleLogin);
  },

  onImageSelected:(image) => {
    //console.log('image: ', image);
    dispatch(selectImage(image));
    console.log("onImageSelected",onImageSelected);
  },

});
console.log("container ad form FIN ligne 66");
export default connect(mapStateToProps, mapDispatchToProps)(AdForm);

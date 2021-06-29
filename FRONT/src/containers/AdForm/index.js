import { connect } from 'react-redux';

import AdForm from 'src/components/AdForm';

import { 
  getToolStateValue, 
  submitAdLogin,
  changeAdField
} from 'src/actions/adForm';


const mapStateToProps = (state) => ({
  getToolStateValue,
  });


//console.log("container ad form ligne 26");
const mapDispatchToProps = (dispatch) => ({

  handleAdForm: (event) => {
    event.preventDefault();
    dispatch(submitAdLogin());
  },
  onChange: (event) => {
    const newValue = (event.target.type === 'number') ? parseInt(event.target.value, 10) : event.target.value;
    dispatch(changeAdField(newValue, event.target.name));
  },
});
//console.log("container ad form FIN ligne 66");
export default connect(mapStateToProps, mapDispatchToProps)(AdForm);

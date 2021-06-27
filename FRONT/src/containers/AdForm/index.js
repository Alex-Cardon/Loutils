import { connect } from 'react-redux';

import AdForm from 'src/components/AdForm';

import { 
  getToolStateValue, 
} from 'src/actions/adForm';


const mapStateToProps = (state) => ({
  getToolStateValue,
  });


//console.log("container ad form ligne 26");
const mapDispatchToProps = (dispatch) => ({

  handleSubmit: () => {
    dispatch();
  
  },
});
//console.log("container ad form FIN ligne 66");
export default connect(mapStateToProps, mapDispatchToProps)(AdForm);

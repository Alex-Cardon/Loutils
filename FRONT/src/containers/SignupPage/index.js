import { connect } from 'react-redux';

import SignupPage from 'src/components/SignupPage';



const mapDispatchToProps = (dispatch) => ({
    // envoi du formulaire
    handleFormSubmit: (event) => {
    // on ne veut pas que la page se recharge
    event.preventDefault();
    console.log('3. Je lance une action SUBMIT_SETTINGS');
    dispatch(submitSettings());
  },
});

export default connect(mapDispatchToProps)(SignupPage);


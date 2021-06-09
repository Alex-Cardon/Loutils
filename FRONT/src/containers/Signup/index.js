import { connect } from 'react-redux';

import SignupPage from 'src/components/SignupPage';

const mapStateToProps = (state) => ({
  pseudo: state.pseudo,
  email: state.email,
  phone: state.phone,
  password: state.password,
});

const mapDispatchToProps = (dispatch) => ({
    handleFormSubmit: () => {
        dispatch(());
    },
    handleInputChange: (newValue) => {
        dispatch(handleInputChange(newValue));
    },  
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);


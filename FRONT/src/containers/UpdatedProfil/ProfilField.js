import { connect } from 'react-redux';

import ProfilField from 'src/components/UpdatedProfil/ProfilField';

import { changeUpdatedProfilInput } from 'src/actions/profilField';


const mapStateToProps = (state, ownProps) => ({
  
  value: state.updatedProfil[ownProps.stateKey],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  
  onChange: (event) => {
    
    dispatch(changeUpdatedProfilInput(ownProps.stateKey, event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilField);

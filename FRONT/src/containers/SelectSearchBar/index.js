import { connect } from 'react-redux';

import SelectSearchBar from 'src/components/SelectSearchBar';

import { changeCategoriesInput, changeLocalisationInput, research } from 'src/actions/selectSearchBar';


//! je recupère mes proptypes du component index.js de SignupPage 
//!comme les proptypes sont func et string  
//! direction les actions dans signup.js 

//!cela sera une donnée
const mapStateToProps = (state) => ({
  inputTools: state.research.tools ,
  inputLocalisation: state.research.localisation,
  category:state.research.category,
  distance: state.research.distance,
});
//! cela sera une action 
const mapDispatchToProps = (dispatch) => ({
  onSearchToolsChange: (event) => {
    console.log('je lance changeCategoriesInput');
    dispatch(changeCategoriesInput(event.target.value));
  },
  onSearchLocalisationChange: (event) => {
    dispatch(changeLocalisationInput(event.target.value));
  },
  handleResearh: () => {
    dispatch(research());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectSearchBar);

//! Direction les actions 

import { connect } from 'react-redux';

import SelectSearchBar from 'src/components/SelectSearchBar';

import { 
  changeCategoriesInput, 
  changeLocalisation, 
  researchButton, 
  getCategories,
  getRadius, 
} from 'src/actions/selectSearchBar';


//! je recupère mes proptypes du component index.js de SignupPage 
//!comme les proptypes sont func et string  
//! direction les actions dans signup.js 

//!cela sera une donnée
const mapStateToProps = (state) => ({
  title: state.research.inputTools ,
  postcode: state.research.localisation,
});
//! cela sera une action 
const mapDispatchToProps = (dispatch) => ({
  onSearchToolsChange: (event) => {
    console.log('je lance changeCategoriesInput');
    dispatch(changeCategoriesInput(event.target.value));
  },
  onSearchLocalisation: (event) => {
    console.log('je lance changeLocalisationInput');
    dispatch(changeLocalisation(event.target.value));
  },
  handleResearch: (event) => {
    event.preventDefault();
    console.log('je lance researchTitle et researchPostcode')
    dispatch(researchButton()); 
  },
  handleCategory: (event) => {
    console.log('je lance getCategories');
    console.log(event.target.value),
    dispatch(getCategories(event.target.value));
  },
  handleRadius: (event) => {
    console.log('je lance getRadius');
    console.log(event.target.value),
    dispatch(getRadius(event.target.value));
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectSearchBar);

//! Direction les actions 

/* loadSelect:() => {
    console.log('je lance GET_RADIUS et GET CATEGORIES');
    dispatch(getCategories());
    dispatch(getRadius());
  }*/



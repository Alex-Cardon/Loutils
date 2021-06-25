import { connect } from 'react-redux';

import SelectSearchBar from 'src/components/SelectSearchBar';

import { 
  changeCategoriesInput, 
  changeLocalisationInput, 
  researchTitle, 
  researchPostcode,
  getCategories,
  getRadius 
} from 'src/actions/selectSearchBar';


//! je recupère mes proptypes du component index.js de SignupPage 
//!comme les proptypes sont func et string  
//! direction les actions dans signup.js 

//!cela sera une donnée
const mapStateToProps = (state) => ({
  inputTools: state.research.title ,
  inputLocalisation: state.research.postcode,
  categores:state.research.categories,
  radius: state.research.radius,
});
//! cela sera une action 
const mapDispatchToProps = (dispatch) => ({
  onSearchToolsChange: (event) => {
    console.log('je lance changeCategoriesInput');
    dispatch(changeCategoriesInput(event.target.value));
  },
  onSearchLocalisationChange: (event) => {
    console.log('je lance changeLocalisationInput');
    dispatch(changeLocalisationInput(event.target.value));
  },
  handleResearh: (event) => {
    event.preventDefault();
    console.log('je lance researchTitle et researchPostcode')
    dispatch(researchTitle());
    dispatch(researchPostcode());
    
  },
  handleCategory: (event) => {
    event.preventDefault();
    console.log('je lance getCategories');
    dispatch(getCategories());
  },
  handleRadius: (event) => {
    event.preventDefault();
    console.log('je lance getRadius');
    dispatch(getRadius());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectSearchBar);

//! Direction les actions 

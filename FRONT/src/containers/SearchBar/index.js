import { connect } from 'react-redux';

import SearchBar from 'src/components/SearchBar';

import { submitResearch, changeSettingsInput } from 'src/actions/searchBar';


//! je recupère mes proptypes du component index.js de SignupPage 
//!comme les proptypes sont func et string  
//! direction les actions dans signup.js 

//!cela sera une donnée
const mapStateToProps = (state) => ({
  inputText: state.search.searchValue,  
});
//! cela sera une action 
const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => {
    console.log('je lance changeSettingsInput');
    dispatch(changeSettingsInput(event.target.value));
  },
  onSearchSubmit: (event) => {
    event.preventDefault();
    console.log('je lance submitResearch');
    dispatch(submitResearch());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

//! Direction les actions 

import React from 'react';

import LoginForm from 'src/containers/LoginForm';
import SearchBar from 'src/containers/SearchBar';

import './styles.scss';

const Header = () => (
  <div className="header">
    <LoginForm />
    <SearchBar /> 
  </div>
  
);

export default Header;

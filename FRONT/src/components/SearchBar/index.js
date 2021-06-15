import React from 'react';
import PropTypes from 'prop-types';

import { Form, Input } from 'semantic-ui-react';

const SearchBar = ({ inputText, onSearchChange, onSearchSubmit }) => (
  // onSubmit appellera une prop de type fonction.
  // SearchBar est un composant de présentation, il s'en fout ce qu'il se passe lors du submit
  // on placera cette logique au dessus, dans le composant App.
  <Form className="searchBar"
  onSubmit={onSearchSubmit}>
    <Input
      iconPosition="left"
      icon="search"
      placeholder="Que recherchez-vous ?"
      value={inputText}
      onChange={onSearchChange}
    />
  </Form>
);

SearchBar.propTypes = {
  inputText: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

export default SearchBar;

import React from 'react'
import { Button, Select, Input } from 'semantic-ui-react'

import PropTypes from 'prop-types';

import './styles.scss';

const category = [
  { key: 'Catégories', text: 'Catégories', value: 'Catégories' },
  { key: 'marteau', text: 'Marteau', value: 'all' },
  { key: 'articles', text: 'Articles', value: 'articles' },
  { key: 'products', text: 'Products', value: 'products' },
]

const distance = [
  { key: 'Rayon', text: 'Rayon', value: 'Rayon' },
  { key: '5', text: '5 kms', value: '5' },
  { key: '10', text: '10 kms', value: '10' },
  { key: '15', text: '15 kms', value: '15' },
]

const SelectSearchBar = ({
  inputTools, 
  inputLocalisation, 
  onSearchToolsChange, 
  onSearchLocalisationChange, 
  handleResearh
}) => (

  <Input className='selectSearchBar'
    onChange={onSearchToolsChange}
    value={inputTools}
    type='text'
    placeholder="Nom de l'outil" action>
    <input />
    <Input
      onChange={onSearchLocalisationChange}
      value={inputLocalisation}
      type='text'
      placeholder='Code Postal' action>
    </Input>
    <Select compact options={category} defaultValue='Catégories' />
    <Select compact options={distance} defaultValue='Rayon' />
    <Button type='button' onClick={handleResearh}>Search</Button>
  </Input>
);

SelectSearchBar.propTypes = {
  inputTools: PropTypes.string.isRequired,
  inputLocalisation: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  onSearchToolsChange: PropTypes.func.isRequired,
  onSearchLocalisationChange: PropTypes.func.isRequired,
  handleResearh: PropTypes.func.isRequired,
};

export default SelectSearchBar;

//! direction le container 

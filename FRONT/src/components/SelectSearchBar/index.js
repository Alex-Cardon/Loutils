
import React from 'react';

import { Button, Select, Input } from 'semantic-ui-react'

//import PropTypes from 'prop-types';

import './styles.scss';

const category = [
  { key: '9', text: "Plomberie", value: "Plomberie" },
  { key: '10', text: "Peinture", value: "Peinture" },
  { key: '8', text: "Nettoyage", value: "Nettoyage" },
  { key: '3', text: "Mécanique", value: "Mécanique" },
  { key: '7', text: "Levage/Echelle", value: "Levage/Echelle" },
  { key: '2', text: "Jardin", value: "Jardin" },
  { key: '5', text: "Electroportatif", value: "Electroportatif" },
  { key: '4', text: "Electricité", value: "Electricité" },
  { key: '6', text: "BTP", value: "BTP" },
  { key: '52', text: "Robin", value: "Robin" },
]

const radius = [
  { key: '0', text: '5 kms', value: "5" },
  { key: '1', text: '10 kms', value: "10" },
  { key: '2', text: '20 kms', value: "20" },
  { key: '3', text: '50 kms', value: "50" },
  { key: '4', text: 'laser', value: "100" },
]

const SelectSearchBar = ({
  inputTools,
  inputLocalisation,
  onSearchToolsChange,
  onSearchLocalisationChange,
  handleResearch,
  handleCategory,
  handleRadius,

}) => (
  
  <div className='selectSearchBar'>
    <Input className='selectSearchBar'
      onChange={onSearchToolsChange}
      value={inputTools}
      type='text'
      placeholder="Nom de l'outil" action>
      <input />
      <Select onClick={handleCategory} compact options={category} placeholder='Catégories' defaultValue='Catégories' />
      <Input
        onChange={onSearchLocalisationChange}
        value={inputLocalisation}
        type='text'
        placeholder='Code Postal' action>
      </Input>
      <Select onClick={handleRadius} compact options={radius} placeholder='Rayon' defaultValue='Rayon' />
      <Button type='submit' onSubmit={handleResearch}>Search</Button>
    </Input>
  </div>
);


/*
SelectSearchBar.propTypes = {
  inputTools: PropTypes.string.isRequired,
  inputLocalisation: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  onSearchToolsChange: PropTypes.func.isRequired,
  onSearchLocalisationChange: PropTypes.func.isRequired,
  handleResearh: PropTypes.func.isRequired,
  handleCategory: PropTypes.func.isRequired,
  handleRadius: PropTypes.func.isRequired,
};*/

export default SelectSearchBar;

//! direction le container 


{/*
<div>
    <div className='selectSearchBar'>
      <Input className='selectSearchBar'
        onChange={onSearchToolsChange}
        value={inputTools}
        type='text'
        placeholder="Nom de l'outil" action>
        <input />
        <Select onClick={handleCategory} compact options={options1} placeholder='Catégories' defaultValue='Catégories' />
      </Input>
    </div>
    <div>
      <Input className='selectSearchBar'
        onChange={onSearchLocalisationChange}
        value={inputLocalisation}
        type='text'
        placeholder='Code Postal' action>
        <input />
        <Select onClick={handleRadius} compact options={options2} placeholder='Rayon' defaultValue='Rayon' />
        <Button type='submit' onSubmit={handleResearch}>Search</Button>
      </Input>
    </div>
  </div>

*/}


{/*

    <div className='selectSearchBar'>
      <input className='selectSearchBar'
        onChange={onSearchToolsChange}
        value={inputTools}
        type='text'
        placeholder="Nom de l'outil" action />
        <select onClick={handleCategory} compact options={options1} placeholder='Catégories' defaultValue='Catégories' />
      <input className='selectSearchBar'
        onChange={onSearchLocalisationChange}
        value={inputLocalisation}
        type='text'
        placeholder='Code Postal' action /> 
        <select onClick={handleRadius} compact options={options2} placeholder='Rayon' defaultValue='Rayon' />
        <button type='submit' onSubmit={handleResearch}>Search</button>
  </div>

*/}

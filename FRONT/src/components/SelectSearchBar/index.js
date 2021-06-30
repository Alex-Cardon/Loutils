
import React from 'react';

//import { Button, Select, Input } from 'semantic-ui-react'

//import PropTypes from 'prop-types';

import './styles.scss';


const SelectSearchBar = ({
  inputTools,
  localisation,
  onSearchToolsChange,
  onSearchLocalisation,
  handleResearch,
  handleCategory,
  handleRadius,

}) => {


  return(
  <form className='form' onSubmit={handleResearch}>
    <div className='select'>
    <input className='selecSearchBar' onChange={onSearchToolsChange} value={inputTools} type="text" id="" name="" placeholder="Nom de l'outil" required />
    <select className='selecSearchBar' onChange={handleCategory} name="handleCategory" id="handleCategory" required >
      <option value="">Catégories</option>
      <option value="allCat">All</option>
      <option value="Plomberie">Plomberie</option>
      <option value="Peinture">Peinture</option>
      <option value="Nettoyage">Nettoyage</option>
      <option value="Mécanique">Mécanique</option>
      <option value="Levage/Echelle">Levage/Echelle</option>
      <option value="Jardin">Jardin</option>
      <option value="Electroportatif">Electroportatif</option>
      <option value="Electricité">Electricité</option>
      <option value="BTP">BTP</option>
      <option value="Robin">Robin</option>
    </select>
    <input className='selecSearchBar' onChange={onSearchLocalisation} value={localisation} type="number" id="inputLocalisation" name="inputLocalisation" placeholder="Code postal" required />
    <select className='selecSearchBar' onChange={handleRadius} name="handleRadius" id="handleRadius" required>
      <option value="">Rayon</option>
      <option value="5">5 kms</option>
      <option value="10">10 kms</option>
      <option value="20">20 kms</option>
      <option value="50">50 kms</option>
      <option value="Laser">Laser</option>
    </select>
    <button className="className='selecSearchBar'"
            type="submit"
            >
        Lotiliser 
    </button>
    </div>
  </form>

)};


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


      /*
<form className='selecSearchBar'>
    <div className='select-category'>
      <input className='selectSearchBar'
        onChange={onSearchToolsChange}
        value={inputTools}
        type='text'
        placeholder="Nom de l'outil"  />  
        <select onClick={handleCategory} compact options={options1} placeholder='Catégories' defaultValue='Catégories' />
    </div>
    <div>
      <input className='select-radius'
        onChange={onSearchLocalisationChange}
        value={inputLocalisation}
        type='text'
        placeholder='Code Postal' />
        <select onClick={handleRadius} compact options={options2} placeholder='Rayon' defaultValue='Rayon' />
        <button type='submit' onSubmit={handleResearch}>Search</button>
      
    </div>
  </form>

*/


    /*

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
]*/

/*
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

*/


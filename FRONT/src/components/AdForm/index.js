import React from "react";
//import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
//import Header from 'src/containers/Header'; <Header />
//import LoginForm from 'src/containers/LoginForm'; <LoginForm />
//import Footer from 'src/components/Footer'; <Footer />
import AdFormInput from 'src/containers/AdForm/adFormInput';
import AdFormPicture from 'src/containers/AdForm/adFormPicture';
import AdFormText from 'src/containers/AdForm/adFormText';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Proptypes from 'prop-types';
import './style.scss';
toast.configure();
const notify = () => {
  toast.success('Votre annonce sera bientôt disponible', {position: toast.POSITION.TOP_RIGHT} )
}
const AdForm = ({
  // getToolStateValue,
  adPosted,
  handleAdForm,
  onChange
}) => (

    <div className="adForm" >
      <h2 className="adForm__title">Sélectionnez votre photo</h2>
      <div>
      <AdFormPicture
          />
          </div>
      <h2>Publier une annonce</h2>
      <form onSubmit={handleAdForm}>
        <div className="adForm__unit">
          <AdFormInput
            name="title"
            type="text"
            placeholder="exemple: Perceuse"
            
          />
        </div>
        <div className="adForm__unit">
        <select onChange={onChange} name="category_id" id="handleCategory" required >
          <option value="" disabled>Catégories</option>
          <option value="9">Plomberie</option>
          <option value="10">Peinture</option>
          <option value="8">Nettoyage</option>
          <option value="3">Mécanique</option>
          <option value="7">Levage/Echelle</option>
          <option value="2">Jardin</option>
          <option value="5">Electroportatif</option>
          <option value="4">Electricité</option>
          <option value="6">BTP</option>
        </select>
        </div>
        <div className="adForm__unit">
          <AdFormInput
            name="price"
            type="number"
            placeholder="Prix de la location par jour"

          />
        </div>
        <div className="adForm__unit">
          <AdFormInput
            name="deposit"
            type="number"
            placeholder="Prix de la caution"

          />
        </div>
        <div className="adForm__unit">
          <AdFormInput
            name="postcode"
            type="text"
            placeholder="Code postal"

          />
        </div>
        <div className="adForm__unit">
          <AdFormText
            name="description"
            type="text"
            placeholder="description de l'outil"

          />
        </div>
        <div className="adForm__unit--radio">
          <p>Loutil est plutot:  </p>
          <div>
            <label hmtlfor="new">comme neuf</label>
            <input
              type="radio"
              value="new"
              name="product_state"
              onChange={onChange}
            />
          </div>
          <div>
            <label hmtlfor="used">En etat de marche</label>
            <input
              type="radio"
              value="used"
              name="product_state"
              onChange={onChange}

            />
          </div>
        </div>

        <button
        onClick={notify}
          className="adForm__button"
          type="submit"
        >
          Validez
        </button>
        {adPosted && (<Redirect from="/AdForm" to="/Announcements" />)}
        {/*<div className="adForm__diary">
                    <h3>Choisissez la période de disponibilité de votre outil</h3>
                    <Diary />
  </div>*/}
      </form>
      
    </div>
 
);


AdForm.proptypes = {
  handleSubmit: Proptypes.func.isRequired,
}
export default AdForm;

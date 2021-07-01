import React from 'react';
import { NavLink } from 'react-router-dom';

//import Header from 'src/containers/Header';
import LoginForm from 'src/containers/LoginForm';
//import Footer from 'src/components/Footer'; <Footer />

import './styles.scss';

const Setting = () => (
  <div className='account'>
  <NavLink
      className='account-navlink'
      exact
      to="/Messagerie"
    >
      Ma messagerie
    </NavLink>
  <NavLink
      className='account-navlink'
      exact
      to="/Announcements"
    >
     Mes annonces
    </NavLink>
    <NavLink
      className='account-navlink'
      exact
      to="/Profil"
    >
      Mon profil
    </NavLink>
   
  
  </div >
);

export default Setting;




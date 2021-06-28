import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

//import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import LoginForm from 'src/containers/LoginForm';
import Footer from 'src/components/Footer';

import { Card } from 'semantic-ui-react';

import Loading from 'src/components/Loading';
import './styles.scss';



const Profil = ({ handleDeleteAccount, profil, loadProfil }) => {
  const [loading, setLoader] = useState(true);
  console.log(`profil dans mon composant`, profil);
  
  useEffect(() => {
    setTimeout(() => { setLoader(!loading) }, 1000);
    loadProfil();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
  <div className='announcements'>
    <Header />
    <LoginForm />
    <h1> Mon Profil</h1>
    <Card.Group className='card-profil'>
    
      <Card
        image={filepath}
        header={name}
        meta={description}
        description={coordonnées}
      />
      <div>
      <button onClick={handleDeleteAccount}>supprimer mon compte</button>
      </div>
    </Card.Group>
    <NavLink
      className=''
      exact
      to="/Params"
    >
      Modifier mon profil
    </NavLink>
    <Footer />
  </div>
);
}
{/* 
Profil.propTypes = {
      handleDeleteAccount: PropTypes.func.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
};
*/}
export default Profil;

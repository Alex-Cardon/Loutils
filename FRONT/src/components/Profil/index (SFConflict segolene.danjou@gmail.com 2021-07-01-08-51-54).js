import React, { useEffect, useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

//import PropTypes from 'prop-types';

import Header from 'src/components/Header';
//import LoginForm from 'src/containers/LoginForm'; <LoginForm />
import Footer from 'src/components/Footer';

import { Card } from 'semantic-ui-react';

import Loading from 'src/components/Loading';
import './styles.scss';
import photo from '/src/assets/Etienne.png';


const Profil = ({ handleDeleteAccount, profil, loadProfil, deleteAccount }) => {
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
      
      <h1> Mon Profil</h1>
      <Card.Group className='card-profil'>

        <Card
          image={photo}
          header={profil.name}
          meta={profil.email}
        />
      </Card.Group>
      <div>
        <button onClick={handleDeleteAccount}>supprimer mon compte</button>
      </div>
      <NavLink
        className=''
        exact
        to="/UpdatedProfil"
      >
        Modifier mon profil
      </NavLink>
      <Footer />
      {deleteAccount && (<Redirect from="/Profil" to="/" />)}
    </div>
  );  
}
/* 
Profil.propTypes = {
      handleDeleteAccount: PropTypes.func.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
};
*/
export default Profil;

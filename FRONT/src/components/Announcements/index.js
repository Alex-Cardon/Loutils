import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card, Icon, Image  } from 'semantic-ui-react';

import Loading from 'src/components/Loading';
//import Header from 'src/containers/Header'; <Header />
//import LoginForm from 'src/containers/LoginForm'; <LoginForm />
//import Footer from 'src/components/Footer'; <Footer />


import './styles.scss';

const announcements = ({
  handleDeleteBooking, 
  begining, 
  end, 
  loadAnnouncements, 
  announcements 
}) => {

  const [loading, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => { setLoader(!loading) }, 1000);
    loadAnnouncements();
  }, []);
  
  if (loading) {
    return <Loading />;
  }

  const onDeleteBooking = (evt) => {
    evt.preventDefault();
    handleDeleteBooking( announcements.ad_id);
  };

  return (
  <div className='announcements'>
        
    

    <NavLink
      className='account-navlink'
      exact
      to="/AdForm"
    >
      Publier une annonce
    </NavLink>
    <h1> Mes annonces</h1>

    <Card.Group className='card-group'>
      {announcements.data.map((obj) => {
      return (
         <div className="card" key={obj.ad_id}>
            <Card
              image={obj.filepath}
              header={obj.title}
              meta={obj.description}
              description={obj.price + " €/ jour"}
            />
            <button className="ui button" onClick={onDeleteBooking}>Supprimer l'annonce</button>

            <NavLink
      className='account-navlink'
      exact
      to={`/Diary/${obj.ad_id}`}
    >
      Voir le calendrier
    </NavLink>

          </div>
      )
}
      )}   
    </Card.Group>
    
  </div>
  );
    }

    //console.log("obj component", obj);
/*    
announcements.propTypes = {
  advertissement: PropTypes.arrayOf(
    PropTypes.shape({
      begining : PropTypes.func.isRequired,
      end : PropTypes.func.isRequired,
      handleDeleteBooking: PropTypes.func.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      msg: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};*/
export default announcements;

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card, Icon, Image  } from 'semantic-ui-react';

import Loading from 'src/components/Loading';
import Header from 'src/components/Header';
import LoginForm from 'src/containers/LoginForm';
import Footer from 'src/components/Footer';


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

  return (
  <div className='announcements'>
    <Header />
    <LoginForm />
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
         <div>
            <Card
              key={obj.id}
              image={obj.filepath}
              header={obj.title}
              meta={obj.description}
              description={obj.price + " € / jour"}
            />
            <button onClick={handleDeleteBooking}>delete booking</button>
            <div>
              <p>Réservé du {obj.begining} au {obj.end}.</p>
            </div>
          </div>
      )
}
      )}   
    </Card.Group>
    <Footer />
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

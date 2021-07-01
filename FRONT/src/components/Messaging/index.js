import React from 'react';
import { useEffect } from 'react';

import Header from 'src/components/Header';
import Messages from 'src/containers/Messages';
import LoginForm from 'src/containers/LoginForm';
import Footer from 'src/components/Footer';

import { Icon } from 'semantic-ui-react'
import './styles.scss';


const Messaging= () => {

    return (
      <div className="messaging">
      <LoginForm />
      <Header />
      {/* <h1>Annonce Scie Borg de Chris </h1>
      <Icon color='red' name='envelope outline' />
      <Icon color='red' name='trash alternate outline' /> */}
      <Messages />
      {/* <Form /> */}
      <Footer />
    </div>
    )
    
};

export default Messaging;

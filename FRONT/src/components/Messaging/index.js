import React from 'react';

import Header from 'src/components/Header';
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
//import LoginForm from 'src/containers/LoginForm'; <LoginForm />
import Footer from 'src/components/Footer';

import { Icon } from 'semantic-ui-react'
import './styles.scss';

const Messaging= () => ( 
 
    <div className="messaging">
      <Header />
      {/* <h1>Annonce Scie Borg de Chris </h1>
      <Icon color='red' name='envelope outline' />
      <Icon color='red' name='trash alternate outline' /> */}
      <Messages />
      {/* <Form /> */}
      <Footer />
    </div>
);

export default Messaging;

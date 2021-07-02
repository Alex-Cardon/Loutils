import React from 'react';
import { useEffect } from 'react';

//import Header from 'src/containers/Header'; <Header />
import Messages from 'src/containers/Messages';

//import Form from 'src/containers/Form';  <Footer />
//import LoginForm from 'src/containers/LoginForm'; <LoginForm />

import Footer from 'src/components/Footer';

import { Icon } from 'semantic-ui-react'
import './styles.scss';


const Messaging= () => ( 
 
    <div className="messaging">
      
      {/* <h1>Annonce Scie Borg de Chris </h1>
      <Icon color='red' name='envelope outline' />
      <Icon color='red' name='trash alternate outline' /> */}
      <Messages />
      {/* <Form /> */}
     
    </div>
    );
    


export default Messaging;

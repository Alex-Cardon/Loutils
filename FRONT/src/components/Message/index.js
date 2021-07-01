import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { Form, Button } from 'semantic-ui-react';

import { useParams } from 'react-router';

import './message.scss';
import Header from 'src/components/Header';
import LoginForm from 'src/containers/LoginForm';
import Footer from 'src/components/Footer';

const Message = ({ 
  msgValue,
  messages,
  addMsgText,
  handleDelete,
  handleMessage,
  msgDelete,
}) => {
  const { id } = useParams();
  const message = messages.msg_recieved.find((message) => message.msg_id === parseInt(id, 10))

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleMessage(msgValue, message.sender_id, message.ad_id);
  };

  const deleteMsgText = (evt) => {
    evt.preventDefault();
    handleDelete( message.msg_id);
  };

  let history = useHistory();
  if(msgDelete) { 
    console.log('je suis dans useHistory '); 
    msgDelete = false;
    history.push('/Messagerie');
  }


  return (
  <div className='message'>
       <LoginForm />
      <Header />
      <h1> Annonce : {message.title}</h1>
      <Form onSubmit={handleSubmit}>
        <hr></hr>
        <div className="sender">
          <p className="from">De :</p>
          <span className="sender"> {message.sender_name} </span>
        </div>
        <hr></hr>
        <div className="message">
          <p className="message">Message :</p>
          <span className="messageContent"> {message.content}</span>

          </div>
          <hr></hr>
        <Form.Field   >
          <label htmlFor="response">Votre réponse</label>
          <input 
            placeholder='Votre réponse ici' 
            name="response"
            id="response"
            onChange={addMsgText}  
            value={msgValue}
          />
         
        </Form.Field>
        <Button type="submit">validez</Button>
        <Button onClick={deleteMsgText} >Supprimer</Button>
      </Form>
      <Footer />
  </div>

);
};

Message.propTypes = {
  msgDelete: PropTypes.bool.isRequired,
  msgValue: PropTypes.string.isRequired,
  addMsgText: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleMessage: PropTypes.func.isRequired,
};

export default Message;

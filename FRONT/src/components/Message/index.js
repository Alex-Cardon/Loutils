import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';




import { toast } from 'react-toastify';//
import 'react-toastify/dist/ReactToastify.css'//
import { Form, Button, TextArea } from 'semantic-ui-react';

import { useParams } from 'react-router';

import './message.scss';

toast.configure()//

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
    msgDelete = false;
    history.push('/Messagerie');
  }


  const notify = () => {
    toast.success('Message envoyé', {position: toast.POSITION.TOP_RIGHT} )
  }//juste au dessus du retur !!!!!//

  return (
    <div className='message-container'>
      <div className='message'>
      
      <h1> Annonce : {message.title}</h1>
      <form onSubmit={handleSubmit}>
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
          <Form.Field
      id="response"
      control={TextArea}
      placeholder='Votre réponse ici' 
      name="response"
      cols='40'
      rows='3'
      onChange={addMsgText}  
      value={msgValue}
    />
    <div className='btn-container'>
        <Button onClick={notify} type="submit">Envoyer</Button>
        <Button onClick={deleteMsgText} >Supprimer</Button>
        <NavLink className='return'
          exact
          to="/Messagerie"
        >
          Retourner aux messages
        </NavLink>
        </div>
      </form>
  </div>
  
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

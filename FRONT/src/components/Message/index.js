import React, {} from 'react';
import PropTypes from 'prop-types';

import { Form, Button } from 'semantic-ui-react';

import { useParams } from 'react-router';

import './message.scss';
//import Header from 'src/containers/Header'; <Header />
import LoginForm from 'src/containers/LoginForm'; 
//import Footer from 'src/components/Footer'; <Footer />

const Message = ({ 
  msgValue,
  messages,
  addMsgText,
  deleteMsgText,
  handleMessage,
}) => {
  const { id } = useParams();
  const message = messages.msg_recieved.find((message) => message.msg_id === parseInt(id, 10))

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleMessage(msgValue, message.sender_id, message.ad_id);
  };
  return (
  <div className='message'>
       <LoginForm />
      
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
      
  </div>

);
};

Message.propTypes = {
  
  msgValue: PropTypes.string.isRequired,
  addMsgText: PropTypes.func.isRequired,
  deleteMsgText: PropTypes.func.isRequired,
  handleMessage: PropTypes.func.isRequired,
};

export default Message;

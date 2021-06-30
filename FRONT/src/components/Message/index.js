import React, {} from 'react';
import PropTypes from 'prop-types';

import { Form, Button } from 'semantic-ui-react';

import { useParams } from 'react-router';

import './message.scss';


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
      
      <h1> Message :{message.title}</h1>
      <Form onSubmit={handleSubmit}>
        <div className="message">
          <p>De:{message.sender_name} </p>
          <p>{message.content}</p>
        </div>
        <Form.Field   >
          <label htmlFor="response">Repondre</label>
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

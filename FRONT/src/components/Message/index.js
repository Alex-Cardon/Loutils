import React, {} from 'react';
import PropTypes from 'prop-types';

import { Form } from 'semantic-ui-react';

import { useParams } from 'react-router';

import './message.scss';


const Message = ({ 
  msgValue,
  messages,
  addMsgText,
  deleteMsgText,
  submitMsgText,
}) => {
  const { id } = useParams();
  const message = messages.msg_recieved.find((message) => message.msg_id === parseInt(id, 10))
return(
  <div className='message'>
      
      <h1> Message :{message.title}</h1>
      <Form>
        <div className="message">
          <p>De:{message.sender_name} </p>
          <p>{message.content}</p>
        </div>
        <Form.Field onSubmit={submitMsgText}  >
          <label htmlFor="response">Repondre</label>
          <input 
            placeholder='Votre réponse ici' 
            name="response"
            id="response"
            onChange={addMsgText}  
            value={msgValue}
          />
          <button type="submit">validez</button>
          <button onClick={deleteMsgText} >Supprimer</button>
        </Form.Field>

      </Form>
   
  </div>

);
};

Message.propTypes = {
  
  msgValue: PropTypes.string.isRequired,
  addMsgText: PropTypes.func.isRequired,
  deleteMsgText: PropTypes.func.isRequired,
  submitMsgText: PropTypes.func.isRequired,
};

export default Message;

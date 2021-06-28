import React from 'react';
import PropTypes from 'prop-types';

import { Form } from 'semantic-ui-react';

import './message.scss';

const Message = ({ 
  sender_name, 
  title, 
  content,
  addMsgText,
  deleteMsgText,
  submitMsgText,
}) => {

return(

  <div className='message'>
     
      <h1> Message : perceuse {title}</h1>
      <Form>
        <div className="message">
          <p>De: Doudou {sender_name} </p>
          <p>Perceuse performant{content}</p>
        </div>
        <Form.Field onSubmit={submitMsgText}  >
          <label>Repondre</label>
          <input placeholder='First Name' onChange={addMsgText}  />
        </Form.Field>
        <button onclick={deleteMsgText} >Supprimer</button>
      </Form>
   
  </div>

);
};

Message.propTypes = {
  sender_name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  addMsgText: PropTypes.func.isRequired,
  deleteMsgText: PropTypes.func.isRequired,
  submitMsgText: PropTypes.func.isRequired,
};

export default Message;

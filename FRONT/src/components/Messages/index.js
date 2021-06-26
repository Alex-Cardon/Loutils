import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
//import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import LoginForm from 'src/containers/LoginForm';
import Footer from 'src/components/Footer';

import Loading from 'src/components/Loading';

import Message from 'src/containers/Message';

import './messages.scss';

const Messages = ({ sender_id, recipient_id, title }) => {

  const [loading, setLoader] = useState(true);
  console.log(`messages dans mon composant`, Messages);

  useEffect(() => {
    setTimeout(() => { setLoader(!loading) }, 1000);
    loadMessages();
  }, []);

  if (loading) {
    return <Loading />;
  }

return(

  <div className="messages-list">
    <Header />
    <LoginForm />
    <h1> Mes messages</h1>
    <Messages.Group className='message-group'>
    {Messages.data.map((obj) => {
      <div>
        { title && (
          <p>{title}</p>
        )}
        {!title &&(
          <div>
            <Card
              key_sender={obj.sender_id}
              key_recipient={obj.recipient_id}
              header={obj.title}
            />
          </div>
        )}
      </div>
      })}   
  
  </Messages.Group>
  <Footer />
  </div>
);
}

// Messages.propTypes = {

//   author: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
//   sender_id: propTypes.number.isRequired,
//   recipient_id: propTypes.number.isRequired,
//   title: propTypes.string.isRequired,

// };

export default Messages;

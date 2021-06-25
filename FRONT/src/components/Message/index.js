import React , { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import LoginForm from 'src/containers/LoginForm';
import Footer from 'src/components/Footer';

import Loading from 'src/components/Loading';

import './message.scss';

const Message = ({ sender_id, recipient_id, title, created_at, content, has_been_read, loadMessage }) => {


  const [loading, setLoader] = useState(true);
  console.log(`message dans mon composant`, Message);

  useEffect(() => {
    setTimeout(() => { setLoader(!loading) }, 1000);
    loadMessage();
  }, []);

  if (loading) {
    return <Loading />;
  }

return(

  <div className='message'>
     <Header />
     <LoginForm />
     <NavLink
      className='account-navlink'
      exact
      to="/MessageForm"
    >
      <h1> Message : {title}</h1>
    </NavLink>
    <div className="message__author">De: {sender_id}</div>
    <div className="message__recipient">A: {recipient_id}</div>
    <div className="message__title">Titre: {title}</div>
    <div className="message__created_at">Date: {created_at}</div>
    <p className="message__content">Message: {content}</p>
    <p className="message__has_been_read">Lu: {has_been_read}</p>
    <Footer />
  </div>

);
};

Message.propTypes = {
  sender_id: PropTypes.number.isRequired,
  recipient_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  has_been_read: PropTypes.string.isRequired,
};

export default Message;

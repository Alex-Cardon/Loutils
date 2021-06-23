import React from 'react';
import PropTypes from 'prop-types';

import './message.scss';

const Message = ({ author, content }) => (
  <div className='message'>
    <div className="message__author">De: {author}</div>
    <p className="message__content">Message: {content}</p>
  </div>
);

Message.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Message;

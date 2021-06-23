import React from 'react';
import PropTypes from 'prop-types';
import Message from 'src/containers/Message';

import './messages.scss';

const Messages = ({ author, content }) => (
  <div className="messages-list">
    <Message
      author={author}
      content={content}
    />
  </div>
);

Messages.propTypes = {

  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,

};

export default Messages;

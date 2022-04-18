import React, { useEffect, useState } from 'react';
import { useHistory, Redirect, Link } from 'react-router-dom';

import Loading from 'src/components/Loading';

import { List } from 'semantic-ui-react';

import './messages.scss';


const Messages = ({loadMessages, messages}) => {

  const history = useHistory();
  const changeRoute = (evt) => {
  let path = "/Message";
  history.push(path);
};

  const [loading, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => { setLoader(!loading) }, 1000);
    loadMessages();
  }, []);

  if (loading) {
    return <Loading />;
  }

return(

  <div className="messages-list">
    <h1> Mes messages : </h1>
    <List>
    {messages.msg_recieved.map((obj) => {
       return  (
        
          <List.Item  key={obj.msg_id} >  
            <Link to={`/Message/${obj.msg_id}`}>
              <List.Header id={obj.msg_id}>{obj.sender_name}</List.Header>
              <List.Description id={obj.msg_id}>{obj.title} </List.Description>
            </Link>

          </List.Item>
        
       )  
       
    })}
    </List>

  </div>
);
}
/*
Messages.propTypes = {

//   author: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
//   sender_id: propTypes.number.isRequired,
//   recipient_id: propTypes.number.isRequired,
//   title: propTypes.string.isRequired,

};*/

export default Messages;

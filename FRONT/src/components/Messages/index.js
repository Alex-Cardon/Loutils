import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Loading from 'src/components/Loading';

import { List } from 'semantic-ui-react';

import './messages.scss';


const Messages = ({loadMessages, message}) => {

  const history = useHistory();
  const changeRoute = () => {
  let path = "/Message";
  history.push(path);
};

  const [loading, setLoader] = useState(true);
  console.log(`messages dans mon composant messages`, message);
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
    {message.msg_recieved.map((obj) => {
       return  (
        <List.Item key={obj.msg_id} onClick={changeRoute} >   
          <List.Header>{obj.sender_name}</List.Header>
          <List.Description>{obj.title} </List.Description>
        </List.Item>
       )
       
    })}
    </List>
    {/* <Message /> */}
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

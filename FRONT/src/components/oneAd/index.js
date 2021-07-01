import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card, Icon, Image, Modal, Form, Button, TextArea  } from 'semantic-ui-react';

import Loading from 'src/components/Loading';
import Header from 'src/components/Header';
import LoginForm from 'src/containers/LoginForm';
import Footer from 'src/components/Footer';

import './oneAd.scss';

const oneAd = ({ loadOneAd, oneAd,handleMessage }) => {
  const [loading, setLoader] = useState(true);
  const [open, setOpen] = useState(false);
  const [msgTxt, setMsgText] = useState('');
  
  const handleMsg = () => {
    handleMessage(msgTxt, oneAd.user_id, oneAd.ad_id );
    console.log("component", msgTxt, oneAd.user_id, oneAd.ad_id );
  }
  useEffect(() => {
    setTimeout(() => { setLoader(!loading) }, 1000);
    loadOneAd();
    
  }, []);
  //console.log("oneAd component", oneAd);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className='oneAd'>
          <LoginForm />
    <Header />
    <NavLink
      className='account-navlink'
      exact
      to="/AdForm"
    >
      Publier une annonce
    </NavLink>
    <h1> Détail de l'annonce </h1>
    <Card className="bidule">
    <Image src={oneAd.filepath} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{oneAd.title}</Card.Header>
      <Card.Meta>
        <span className='state'>Etat : {oneAd.product_state}</span>
        {/* <span className='user'>{oneAd.user_id}</span> */}
      </Card.Meta>
      <Card.Description>
        <p>Description de l'outil : {oneAd.description}</p>
        <p>Prix de la location journalière : {oneAd.price}€</p>
      </Card.Description>
    </Card.Content>
    <Card extra>
      <p class="post-codeAd">
        Code postal : {oneAd.postcode}
      </p>
      <br></br>
      <p class="depositAd">
        Caution : {oneAd.deposit}€
      </p>

      <NavLink
      className='account-navlink'
      exact
      to={`/Calendar/${oneAd.ad_id}`}
    >
      Voir le calendrier
      
    </NavLink>






    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Envoyer un message</Button>}
    >
      <Form idAnnonce = {oneAd.ad_id}  idRecipient = {oneAd.user_id} onSubmit= {handleMsg}>
         <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            label='Envoyer'
            placeholder='Opinion'
            name="msgTxt"
            value={msgTxt}
            onChange={e => setMsgText(e.target.value)}
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    </Modal>








    </Card>
  </Card>
  <Footer />
  </div>
  );

}
//console.log(oneAd, loadOneAd,filepath, title, product_state, user_id, description, price, postcode, deposit);

oneAd.proptypes = {
      filepath: PropTypes.string.isRequired, 
      title: PropTypes.string.isRequired, 
      product_state: PropTypes.string.isRequired, 
      user_id: PropTypes.number.isRequired, 
      description: PropTypes.string.isRequired, 
      price: PropTypes.number.isRequired, 
      postcode: PropTypes.string.isRequired, 
      deposit: PropTypes.number.isRequired,
};

export default oneAd;




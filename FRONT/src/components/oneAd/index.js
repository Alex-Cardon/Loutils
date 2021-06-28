import React, { useEffect, useState } from 'react';

//import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react';

import Loading from 'src/components/Loading';
import './styles.scss';


const oneAd = ({ loadOneAd }) => {
  const [loading, setLoader] = useState(true);
  //console.log(`content dans mon composant`, content);
 

  useEffect(() => {
    setTimeout(() => { setLoader(!loading) }, 1000);
    loadOneAd();
    
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
  );
}

/*
adResults.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
id: PropTypes.number.isRequired,
title: PropTypes.string.isRequired,
description: PropTypes.string.isRequired,
price: PropTypes.number.isRequired,
}).isRequired,
).isRequired,
};*/

export default oneAd;




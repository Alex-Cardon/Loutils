import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react';

import Loading from 'src/components/Loading';
import './styles.scss';


const adResults = ({ content, loadContent, searchResult, apiResult }) => {
  const [loading, setLoader] = useState(true);
  //console.log(`content dans mon composant`, content);
  //console.log(`searchResult dans mon composant`, searchResult);
  //console.log(`apiResult dans mon composant`, apiResult);

  useEffect(() => {
    localStorage.setItem("content", JSON.stringify(content))
  });

  useEffect(() => {
    setTimeout(() => { setLoader(!loading) }, 1000);
    loadContent();
    
  }, []);

  const maxTextLength = 100;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
    {apiResult && (
      
    <Card.Group className='card-group'>

    {searchResult.data.map((obj) => {
      console.log(obj);
      return (
        
        <Link to={`/ad/${obj.ad_id}`} className="clikingOnCard" key={obj.ad_id}>
        <Card 

          image={obj.filepath}
          header={obj.title}
          meta={obj.description.substring(0, maxTextLength)+ "..."}
          description={obj.price + "€ / jour"}
          
        />
      </Link>)
    })}

  </Card.Group>)
}
  {!apiResult && (
    <Card.Group className='card-group'>
  {content.data.map((obj) => {
    console.log(obj);
    return (
      
      <Link to={`/ad/${obj.ad_id}`} className="clikingOnCard" key={obj.ad_id}>
      <Card
        image={obj.filepath}
        header={obj.title}
        meta={obj.description.substring(0, maxTextLength)+ "..."}
        description={obj.price + "€ / jour"}
      />
      </Link>
    )
  })}
</Card.Group>
)}
   </> 
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

export default adResults;




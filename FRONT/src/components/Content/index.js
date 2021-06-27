
import React, { useEffect, useState } from 'react';

//import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react';

import Loading from 'src/components/Loading';
import './styles.scss';


const adResults = ({ content, loadContent }) => {
  const [loading, setLoader] = useState(true);
  //console.log(`content dans mon composant`, content);

  useEffect(() => {
    localStorage.setItem("content", JSON.stringify(content))
  });

  useEffect(() => {
    setTimeout(() => { setLoader(!loading) }, 1000);
    loadContent();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Card.Group className='card-group'>

      {content.data.map((obj) => {
        return (
          <Card
            key={obj.description}
            image={obj.filepath}
            header={obj.title}
            meta={obj.description}
            description={obj.price}
          />
        )
      })}

    </Card.Group>
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




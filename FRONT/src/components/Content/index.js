import React from 'react';
//import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react';
// TODO en cours de construction

import './styles.scss';

const adResults = () => (
  <Card.Group className='card-group'>
      {/* {
      advertissment.map(
      (ad) => (*/}
          <Card
            key="id"//{ad.id}
            image="image"//{ad.}
            header="titre"//{ad.}
            meta="description"//{ad.}
            description="price"//{ad.}
          />
          <Card
            key="id"//{ad.id}
            image="image"//{ad.}
            header="titre"//{ad.}
            meta="description"//{ad.}
            description="price"//{ad.}
          />
          <Card
            key="id"//{ad.id}
            image="image"//{ad.}
            header="titre"//{ad.}
            meta="description"//{ad.}
            description="price"//{ad.}
          />
          <Card
          key="id"//{ad.id}
          image="image"//{ad.}
          header="titre"//{ad.}
          meta="description"//{ad.}
          description="price"//{ad.}
        />
        <Card
            key="id"//{ad.id}
            image="image"//{ad.}
            header="titre"//{ad.}
            meta="description"//{ad.}
            description="price"//{ad.}
          />
          <Card
            key="id"//{ad.id}
            image="image"//{ad.}
            header="titre"//{ad.}
            meta="description"//{ad.}
            description="price"//{ad.}
          />
       {/*} ),
      )
    }*/}
  </Card.Group>
);

/*adResults.propTypes = {
  advertissement: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};*/

export default adResults;

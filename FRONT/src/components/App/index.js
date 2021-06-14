// == Import npm
import React from 'react';

import Header from 'src/components/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
    <Error />
  </div>
);

// == Export
export default App;

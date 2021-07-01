import React from 'react';

//import Header from 'src/containers/Header'; <Header />
//import Footer from 'src/components/Footer'; <Footer />
import Content from 'src/containers/Content';

import SelectSearchBar from 'src/containers/SelectSearchBar';

import './styles.scss';


const Home = () => (
  <div className='home'>
    <SelectSearchBar />
    <Content /> 
  </div>

);

export default Home;

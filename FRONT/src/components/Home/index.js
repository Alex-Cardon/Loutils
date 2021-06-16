import React from 'react';

import Header from 'src/components/Header';
import LoginForm from 'src/containers/LoginForm';
import Content from 'src/components/Content';
import Footer from 'src/components/Footer';
import SelectSearchBar from 'src/containers/SelectSearchBar';

import './styles.scss';

const Home = () => (
  <div className='home'>
  <Header />
  <LoginForm /> 
  <SelectSearchBar />
  <Content /> 
  <Footer />
  </div>

);

export default Home;

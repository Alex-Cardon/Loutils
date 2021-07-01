import React from 'react';

//import Header from 'src/containers/Header'; <Header />
import LoginForm from 'src/containers/LoginForm';
import Content from 'src/containers/Content';
//import Footer from 'src/components/Footer'; <Footer />
import SelectSearchBar from 'src/containers/SelectSearchBar';

import './styles.scss';



const Home = () => (
  <div className='home'>
    <LoginForm />
    <SelectSearchBar />
    <Content /> 
  </div>

);

export default Home;

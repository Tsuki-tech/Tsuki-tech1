import React from 'react'
// import {Router, Routes,Route} from 'react-router-dom'
import Client from './contact/client/client';
import IntroPage from './LandingPage';
import OurWork from './LandingPage/whatwedo';
import Experience from './contact/experience';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Contact from 'src/components/Contact';
import "src/Pages/HomePage.scss"

export default function HomePageRouter() {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route>sabai router yeta</Route>
        </Routes>
      </Router> */}
      <Header/>
      <div className='tsukiTech-webPage-body'>
      <IntroPage/>
      <OurWork/>
     <Experience/>
      <Client/>
      <Contact/>
      <Footer/>
      </div>    
    </div>
  );
}

import React from 'react'
// import {Router, Routes,Route} from 'react-router-dom'
import Client from './contact/client/client';
import IntroPage from './LandingPage';
import OurWork from './LandingPage/whatwedo';
import Experience from './contact/experience';

export default function HomePageRouter() {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route>sabai router yeta</Route>
        </Routes>
      </Router> */}
      <IntroPage/>
      <OurWork/>
     <Experience/>
      <Client/>
      
    </div>
  );
}

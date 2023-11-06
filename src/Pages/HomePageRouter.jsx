import React from 'react'
// import {Router, Routes,Route} from 'react-router-dom'
import Header from 'src/components/Header';
import Client from './contact/client/client';
// import Experience from './contact/client/experience';
import Footer from 'src/components/Footer';
import Contact from 'src/components/Contact';

export default function HomePageRouter() {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route>sabai router yeta</Route>
        </Routes>
      </Router> */}
      <Header />
      <Client/>
      {/* <Experience/> */}
      <Contact />
      <Footer />
    </div>
  );
}

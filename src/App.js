import React from 'react';
import logo from './logo.svg';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Header from './component/Header.js'
import FooterSection from './component/FooterSection.js'
import './App.css';

import HomePage from './component/homePage/HomePage'
import ContactPage from './component/contactPage/ContactPage'
import ReservationPage from './component/reservationPage/ReservatonPage'
import MenuPage from './component/MenuPage'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/contact" exact component={ContactPage}/>
        <Route path="/reservation" exact component={ReservationPage}/>
        <Route path="/menu" exact component={MenuPage}/>
      </Switch>
      <FooterSection/>
    </BrowserRouter>
  );
}

export default App;

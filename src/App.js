import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/HomePage.js'
import HatsPage from './pages/hats/HatsPage.js'
import ShopPage from './pages/shop/ShopPage.js'
import Header from './components/header/Header.js'



function App() {

  // useEffect(() => {
  //   fetch("https://the-sneaker-database.p.rapidapi.com/sneakers?limit=10", {
  //   "method": "GET",
  //   "headers": {
	// 	"x-rapidapi-key": "da769213c9msh5b8a723d55439bap1a2a7fjsnaf0ba9294f7b",
	// 	"x-rapidapi-host": "the-sneaker-database.p.rapidapi.com"
  //     }
  //   })
  //   .then(response => response.json())
  //   .then((data) => console.log(data))
  //   .catch(err => {
  //     console.error(err);
  //   });;  
  //     }, []);

  

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/hats">
          <HatsPage />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;

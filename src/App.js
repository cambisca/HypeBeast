import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/HomePage.js'
import HatsPage from './pages/hats/HatsPage.js'
import ShopPage from './pages/shop/ShopPage.js'



function App() {
  return (
    <div>
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

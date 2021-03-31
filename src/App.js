import React from 'react'
import '../src/App.css'
import HomePage from '../src/pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom'
import ShopPage from '../src/pages/shop/shop.component.jsx';


function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;


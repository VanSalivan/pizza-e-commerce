import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/cart' exact component={Cart} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

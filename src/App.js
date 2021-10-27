import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';

import { API_URL } from './config';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    async function getPizzas() {
      const result = await fetch(`${API_URL}db.json`)
      const body = await result.json()

      setPizzas(body.pizzas)
    }

    getPizzas();
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route path='/' exact>
            <Home pizzas={pizzas} />
          </Route>
          <Route path='/cart' exact component={Cart} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

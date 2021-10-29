import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getPizzas, fetchPizzas } from './redux/actions/pizzas';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

import { API_URL } from './config';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
    fetch(API_URL)
      .then((res) => res.json())
      .then((body) => dispatch(getPizzas(body)));

    // eslint-disable-next-line
  }, []);

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

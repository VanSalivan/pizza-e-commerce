import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getPizzas, fetchPizzas } from '../redux/actions/pizzas';

import { API_URL } from '../config';

import Categories from '../components/Categories';
import { PizzaItem } from '../components/PizzaItem/PizzaItem';
import Sort from '../components/Sort';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sort = [
  { name: 'популярности', type: 'popular' },
  { name: 'цена', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

const Home = () => {
  const dispatch = useDispatch();
  const { pizzas } = useSelector((state) => state.pizzas);

  useEffect(() => {
    dispatch(fetchPizzas());
    fetch(`${API_URL}db.json`)
      .then((res) => res.json())
      .then((body) => dispatch(getPizzas(body.pizzas)));
    
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories items={categories} />
        <Sort items={sort} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {pizzas &&
          pizzas.map((pizza) => {
            return <PizzaItem key={pizza.id} {...pizza} />;
          })}
      </div>
    </div>
  );
};

export default Home;

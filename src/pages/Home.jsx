import React from 'react';

import Categories from '../components/Categories';
import { PizzaItem } from '../components/PizzaItem/PizzaItem';
import Sort from '../components/Sort';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sort = ['популярности', 'цене', 'алфавиту'];

const Home = ({ pizzas }) => {
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories items={categories} />
        <Sort items={sort} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {pizzas.map((pizza) => {
          return <PizzaItem key={pizza.id} {...pizza} />;
        })}
      </div>
    </div>
  );
};

export default Home;

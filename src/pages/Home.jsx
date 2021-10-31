import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFilteredPizzas } from '../services/pizzas';

import Categories from '../components/Categories';
import PizzaItem from '../components/PizzaItem';
import PizzaItemSkeleton from '../components/PizzaItemSkeleton';
import Sort from '../components/Sort';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sort = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цена', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

const Home = () => {
  const dispatch = useDispatch();
  const { pizzas, loading } = useSelector((state) => state.pizzas);
  const { category, sortBy } = useSelector((state) => state.filter);

  const pizzasSkeletons = Array.from({ length: 8 }).map((item, index) => (
    <PizzaItemSkeleton key={index} />
  ));

  useEffect(() => {
    dispatch(getFilteredPizzas(category, sortBy));

    // eslint-disable-next-line
  }, [category, sortBy]);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories items={categories} />
        <Sort items={sort} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {loading
          ? pizzasSkeletons
          : pizzas.map((pizza) => {
              return <PizzaItem key={pizza.id} {...pizza} />;
            })}
      </div>
    </div>
  );
};

export default Home;

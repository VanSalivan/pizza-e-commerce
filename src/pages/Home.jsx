import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPizzas } from '../services/pizzas';

import Categories from '../components/Categories';
import PizzaItem from '../components/PizzaItem';
import PizzaItemSkeleton from '../components/PizzaItemSkeleton';
import Sort from '../components/Sort';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sort = [
  { name: 'популярности', type: 'popular' },
  { name: 'цена', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

const Home = () => {
  const { pizzas, loading } = useSelector((state) => state.pizzas);
  const dispatch = useDispatch();

  const pizzasSkeletons = Array.from({ length: 8 }).map((item, index) => (
    <PizzaItemSkeleton key={index} />
  ));

  useEffect(() => {
    if (!pizzas.length) {
      dispatch(getAllPizzas());
    }

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

import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setSortCategory } from '../../redux/actions/filters';

const Categories = ({ items = [] }) => {
  const activeCategory = useSelector((state) => state.filter.category);
  const dispatch = useDispatch();

  const onSelectCategory = (name) => {
    dispatch(setSortCategory(name));
  };

  return (
    <div className='categories'>
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onSelectCategory(null)}
        >
          Все
        </li>
        {items.map((category) => (
          <li
            className={activeCategory === category ? 'active' : 'null'}
            onClick={() => onSelectCategory(category)}
            key={category}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Categories };

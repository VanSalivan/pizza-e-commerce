import React, { useState } from 'react';

const Categories = ({ items = [] }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleActiveCategory = (name) => setActiveCategory(name);

  return (
    <div className='categories'>
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => handleActiveCategory(null)}
        >
          Все
        </li>
        {items.map((category) => (
          <li
            className={activeCategory === category ? 'active' : 'null'}
            onClick={() => handleActiveCategory(category)}
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

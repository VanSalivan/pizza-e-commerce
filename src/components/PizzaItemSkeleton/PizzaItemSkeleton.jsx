import React from 'react';

import './styles.scss'

const PizzaItemSkeleton = () => {
  return (
    <article className='skeleton-Wrapper'>
      <div className='skeleton-PizzaImage' />
      <div className='skeleton-PizzaBody' />
    </article>
  );
};

export { PizzaItemSkeleton };

import { API_URL } from '../config';

import { getPizzas, fetchPizzas } from '../redux/actions/pizzas';

export const getFilteredPizzas = (category, sortBy) => (dispatch) => {
  // const categoryValue = 

  dispatch(fetchPizzas());
  fetch(`${API_URL}?${category ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then((res) => res.json())
    .then((body) => dispatch(getPizzas(body)));
}
import { getPizzas, fetchPizzas } from '../redux/actions/pizzas';

export const getFilteredPizzas = (category, sortBy) => (dispatch) => {
  dispatch(fetchPizzas());
  fetch(`/pizzas?${category ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then((res) => res.json())
    .then((body) => dispatch(getPizzas(body)));
}
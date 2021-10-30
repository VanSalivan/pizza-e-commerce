import { API_URL } from '../config';

import { getPizzas, fetchPizzas } from '../redux/actions/pizzas';

export const getAllPizzas = () => (dispatch) => {
  dispatch(fetchPizzas());
  fetch(API_URL)
    .then((res) => res.json())
    .then((body) => dispatch(getPizzas(body)));
}
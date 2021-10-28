export const getPizzas = (array) => {
  return {
    type: 'GET_PIZZAS',
    payload: array,
  }
};

export const fetchPizzas = () => {
  return {
    type: 'FETCH_PIZZAS'
  }
};
export const addPizzaToCart = (pizzaObj) => {
  return {
    type: 'ADD_PIZZA_TO_CART',
    payload: pizzaObj
  }
};
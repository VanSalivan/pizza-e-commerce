export const addPizzaToCart = (pizzaObj) => {
  return {
    type: 'ADD_PIZZA_TO_CART',
    payload: pizzaObj
  }
};

export const deletePizzaFromCart = (name) => {
  return {
    type: 'DELETE_PIZZA_FROM_CART',
    payload: name
  }
};

export const clearCart = () => {
  return {
    type: 'CLEAR_CART'
  }
};

export const plusCartItem = (name) => {
  return {
    type: 'PLUS_CART_ITEM',
    payload: name
  }
};

export const minusCartItem = (name) => {
  return {
    type: 'MINUS_CART_ITEM',
    payload: name
  }
};

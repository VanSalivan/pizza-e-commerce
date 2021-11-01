const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_TO_CART': {
      // отдельная константа для получения актуального значения "количества полей в объекте" из redux
      const newItems = {
        ...state.items,
        [action.payload.name]: !state.items[action.payload.name]
          ? [action.payload]
          : [...state.items[action.payload.name], action.payload]
      };

      const allPizzas = Object.values(newItems).flat(1);

      const totalPriceInCart = allPizzas.reduce((total, item) => total + item.price, 0)

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: totalPriceInCart
      };
    }

    case 'DELETE_PIZZA_FROM_CART':
      return {
        ...state,
      };

    default:
      return state;
  }
};
const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0
};

const getTotalPriceFrom = (arr) => arr.reduce((total, item) => total + item.price, 0);

const getTotalPrice = (arr) => {
  return Object.keys(arr).reduce(
    (total, name) => arr[name].totalPrice + total
    , 0)
}

const getTotalCount = (arr) => {
  return Object.keys(arr).reduce(
    (total, name) => arr[name].items.length + total
    , 0)
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_TO_CART': {

      // Проверка для первого добавления в корзину
      const currentPizzaItems = !state.items[action.payload.name]
        ? [action.payload]
        : [...state.items[action.payload.name].items, action.payload];

      // Формирование актуального значения "количества полей в объекте" из redux
      const newItems = {
        ...state.items,
        [action.payload.name]: {
          items: currentPizzaItems,
          totalPrice: getTotalPriceFrom(currentPizzaItems)
        }
      };

      // const allPizzas = Object.values(newItems).map(obj => obj.items).flat(1);
      // const totalPriceInCart = getTotalPriceFrom(allPizzas);

      return {
        ...state,
        items: newItems,
        totalCount: getTotalCount(newItems),
        totalPrice: getTotalPrice(newItems)
      };
    }

    case 'DELETE_PIZZA_FROM_CART':
      const newItems = { ...state.items };
      const deletedItemTotalPrice = newItems[action.payload].totalPrice;
      const deletedItemTotalCount = newItems[action.payload].items.length;

      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - deletedItemTotalPrice,
        totalCount: state.totalCount - deletedItemTotalCount,
      };

    case 'PLUS_CART_ITEM': {
      // Клон пиццы из массива для добавления
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0]
      ];

      // Создание нового обьекта с данными для передачи функциям "getTotalCount" & "getTotalPrice"
      const newItems = {
          ...state.items,
          [action.payload]: {
            items: newObjItems,
            totalPrice: getTotalPriceFrom(newObjItems),
          }
      }

      return {
        items: newItems,
        totalCount: getTotalCount(newItems),
        totalPrice: getTotalPrice(newItems)
      }
    }

    case 'MINUS_CART_ITEM': {
      const oldItems = state.items[action.payload].items;
      // Условия для обработки отрицательного значения пицц
      const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;

      // Создание нового обьекта с данными для передачи функциям "getTotalCount" & "getTotalPrice"
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPriceFrom(newObjItems),
        }
      }

      return {
        items: newItems,
        totalCount: getTotalCount(newItems),
        totalPrice: getTotalPrice(newItems)
      }
    }

    case 'CLEAR_CART':
      return {
        ...initialState
      };


    default:
      return state;
  }
};
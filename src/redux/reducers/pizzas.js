const initialState = {
  pizzas: [],
  loading: true
};

export const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PIZZAS':
      return {
        ...state,
        loading: true
      };

    case 'GET_PIZZAS':
      return {
        ...state,
        pizzas: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
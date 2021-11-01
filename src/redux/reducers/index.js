import { combineReducers } from "redux";

import { filterReducer } from './filters';
import { pizzasReducer } from './pizzas';
import { cartReducer } from './cart';

const rootReducer = combineReducers({
  filter: filterReducer,
  pizzas: pizzasReducer,
  cart: cartReducer
});

export default rootReducer;
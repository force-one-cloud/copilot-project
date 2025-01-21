import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import orderReducer from './reducers/orderReducer';

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  order: orderReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

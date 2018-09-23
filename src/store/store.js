import { createStore, combineReducers, compose } from 'redux';
import { colors } from '../components/reducers';

const rootReducer = combineReducers({
  colors
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
  )
);

export default store;

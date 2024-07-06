

// this is root reducer and it is provided to the store
import { combineReducers } from 'redux';
import operationsReducer from './Cart/Reducers/operations';
// import counterReducer from '../../components/counter/CounterSlice'
export const rootReducer = combineReducers({
  operations: operationsReducer, // 'operations' is the slice name
// more reducers can be added here
});

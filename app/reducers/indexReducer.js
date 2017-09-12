import { combineReducers } from 'redux';
import todos from './todos';

const indexReducer = combineReducers({
  todos,
});

export default indexReducer;

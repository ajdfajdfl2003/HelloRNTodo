import * as Types from '../types';

const initialState = [];

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case Types.ADD_TODO:
      return [...state , action.payload];

    case Types.TOGGLE_TODO:
      let filteredTodos = state.filter((todo) => todo.id !== action.payload.id);
      return [...filteredTodos, {...action.payload, checked: !action.payload.checked}].sort((a,b) => a.id > b.id);

    case Types.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
  }
  return state;
}

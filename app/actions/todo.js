import * as Types from '../types';
import { Alert } from 'react-native';

export function addTodo(todo) {
  return (dispatch) => {
    dispatch({
      type: Types.ADD_TODO,
      payload: todo,
    });
  };
}

export function toggleTodo(todo) {
  return (dispatch) => dispatch({
    type: Types.TOGGLE_TODO,
    payload: todo,
  });
}

export function removeTodo(id) {
  return (dispatch) => dispatch({
    type: Types.REMOVE_TODO,
    payload: { id },
  });
}

import {
  ADD_TODO,
  CLEAR_ALL_TODOS,
  DELETE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  UPDATE_ON_DRAG_AND_DROP,
} from './actionsTypes';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

// export function handleKeyDown(todo) {
//   return {
//     type: ADD_TODO,
//     payload: todo,
//   };
// }

export function clearAllTask(todoId) {
  return {
    type: CLEAR_ALL_TODOS,
    payload: todoId,
  };
}

export function deleteTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
}

export function toggleTodo(todoId) {
  return {
    type: TOGGLE_TODO,
    payload: todoId,
  };
}

export function updateOnDragAndDrop() {
  return { type: UPDATE_ON_DRAG_AND_DROP };
}

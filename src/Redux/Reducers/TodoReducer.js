/*eslint default-case: "error"*/
import {
  ADD_TODO,
  CLEAR_ALL_TODOS,
  DELETE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  UPDATE_ON_DRAG_AND_DROP,
} from '../Actions/actionsTypes';

import { todos } from '../states';

export let reducer = (state = todos, action) => {
  let todoTask;
  switch (action.type) {
    case ADD_TODO:
      todoTask = [...state];
      todoTask.push(action.payload);
      return todoTask;

    case CLEAR_ALL_TODOS:
      todoTask = [...state];
      todoTask = todoTask.filter((todo) => todo.id === action.payload);
      return todoTask;

    case DELETE_TODO:
      todoTask = [...state];
      todoTask = todoTask.filter((todo) => todo.id !== action.payload);
      return todoTask;

    case UPDATE_TODO:
      todoTask = [...state];
      let index = -1;
      for (let i = 0; i < todoTask.length; i++) {
        index++;
        if (todoTask[i].id === action.payload.id) {
        }
      }
      if (index !== -1) {
        todoTask[index] = action.payload;
        return todoTask;
      }
      break;
    // we don't use toggleTodo in this project. left for an alternative option
    case TOGGLE_TODO:
      todoTask = [...state];
      todoTask = todoTask.map((todo) => {
        return todo.id === Number(action.payload.id)
          ? { ...todo, completed: !todo.completed }
          : { ...todo };
      });
      return todoTask;

    case UPDATE_ON_DRAG_AND_DROP:
      return [...state];

    // No Default
  }
  return state;
};

export default reducer;

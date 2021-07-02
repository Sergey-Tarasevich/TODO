import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import './Styles.css';

function TodoList() {
  let todos = useSelector((state) => state);
  // ul - className="col-12 offset-lg-3 col-lg-6 list-group"
  return (
    <div className="tasks__list">
      <ul>
        {todos.map((todo, priority) => (
          <li className="list-group-item">
            <TodoItem key={todos.id} todo={todo} priority={priority} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import './Styles.css';
import { Draggable } from 'react-beautiful-dnd';

function TodoList() {
  let todos = useSelector((state) => state);
  // ul - className="col-12 offset-lg-3 col-lg-6 list-group"
  return (
    <div className="list-group">
      <ul
      // className="col-12 offset-lg-3 col-lg-6 list-group"
      >
        {todos.map((todo, index) => (
          <Draggable
            key={todo.id}
            draggableId={todo.id}
            todo={todo}
            index={index}
          >
            {(provided, snapshot) => (
              <li
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                // className="list-group-item"
                key={index}
                style={{
                  userSelect: 'none',
                  padding: 16,
                  margin: '0 0 8px 0',
                  minHeight: '50px',
                  backgroundColor: snapshot.isDragging
                    ? // first value - color when we drop task
                      '#263B4A'
                    : // second value - background block task color
                      '#456C86',
                  color: 'white',
                  ...provided.draggableProps.style,
                }}
              >
                <TodoItem key={todos.index} todo={todo} />
              </li>
            )}
          </Draggable>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

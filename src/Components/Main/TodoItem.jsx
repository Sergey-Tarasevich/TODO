/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteTodo,
  updateTodo,
  toggleTodo,
} from '../../Redux/Actions/actionCreator';
import { useSelector } from 'react-redux';
import './Styles.css';

function TodoItem({ todo }) {
  // set hooks edit todo text in input
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState(todo.name);
  //set hooks color text
  const [textColor, setTextColor] = useState('red');
  //set hooks style text
  const [styleText, setStyleText] = useState('none');
  let todos = useSelector((state) => state);
  let dispatch = useDispatch();

  const handleChangeTextStyle = () => {
    setTextColor(textColor === 'green' ? 'red' : 'green');
    setStyleText(styleText === 'line-through' ? 'none' : 'line-through');
  };

  return (
    <div>
      <div className="row mx-2 align-items-center">
        {/* <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div> */}
        <div>
          {editable ? (
            <input
              type="text"
              className="form-control"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          ) : (
            <h4 style={{ color: textColor, textDecoration: styleText }}>
              <span className="form-text-priority-todo">
                Priority is: {todo.priority}
              </span>{' '}
              <br />
              <span className="form-text-priority-todo">
                Todo is: {todo.name}
              </span>
            </h4>
          )}

          {/* edit's todo task button */}
          <button
            className="btn btn-primary m-2"
            onClick={() => {
              dispatch(
                updateTodo({
                  ...todo,
                  name: value,
                })
              );
              if (editable) {
                setValue(todo.value);
              }
              setEditable(!editable);
            }}
          >
            {editable ? 'Update' : 'Edit'}
          </button>
          {/* delete todo task button */}
          <button
            className="btn btn-danger m-2"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            Delete Task
          </button>
          {/* checkbox change color and text decoration (change css) */}
          <input
            type="checkbox"
            className="checkbox"
            onClick={() => dispatch(handleChangeTextStyle)}
          />
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

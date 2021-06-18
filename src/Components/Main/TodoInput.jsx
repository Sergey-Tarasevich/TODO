import React, { useState } from 'react';
import {
  addTodo,
  clearAllTask,
  // handleKeyDown,
} from '../../Redux/Actions/actionCreator';
import { v1 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import './Styles.css';

function TodoInput() {
  let [value, setValue] = useState(localStorage.getItem('value') || '');
  let [priority, setPriority] = useState(
    localStorage.getItem('priority') || ''
  );
  let todos = useSelector((state) => state);
  let dispatch = useDispatch();

  const updateInput = (e) => {
    e.preventDefault();
    const trimmedText = e.target.value.trim();
    localStorage.setItem('value', trimmedText);
    //update react state
    setValue(trimmedText);
  };

  const updateInputPriority = (e) => {
    const trimmedText = e.target.value.trim();
    localStorage.setItem('priority', trimmedText);
    //update react state
    setPriority(trimmedText);
  };

  const handleKeyDown = (event) => {
    const trimmedText = event.target.value.trim();
    // if (value === '') return alert('Need enter TODO task')// if (priority < Number(0) || priority > Number(5))
    // return alert('Need enter Priority number 1 - 5');

    // If the user pressed the Enter key:

    if (event.charCode === 13 && trimmedText) {
      // Dispatch the "todo added" action with this text
      dispatch(
        addTodo({
          id: uuid(),
          name: value,
          priority: priority,
          completed: false,
        })
      );
      // And clear out the text input
      setValue('');
      setPriority('');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h3 className="row-name-todo col-12 offset-lg-3 col-lg-6 alert alert-info">
          TODO or NOT TODO that is the question
        </h3>
        <hr />

        <div className="col-12 offset-lg-3 col-lg-6 form-horizontal">
          <div className="form-group">
            <label className="input-label alert alert-success">
              TODO's LIST
            </label>

            <div className="input-form form-group">
              <input
                className="form-control"
                name="value"
                type="text"
                autoFocus={true}
                value={value}
                onChange={updateInput}
                onKeyPress={handleKeyDown}
                placeholder="Type your TODO here..."
              />

              <input
                className="form-control"
                name="priority"
                type="number"
                defaultValue="0"
                value={priority}
                onKeyPress={handleKeyDown}
                onChange={updateInputPriority}
                placeholder="Type your PRIORITY..."
              />
            </div>
          </div>

          <div className="form-group-btn">
            <div className="group-btn">
              <button
                className="btn-addTask btn btn-primary"
                type="submit"
                onClick={(e) => {
                  dispatch(
                    addTodo({
                      id: uuid(),
                      name: value,
                      priority: priority,
                      completed: false,
                    })
                  );
                  if (value === '') return alert('Need enter TODO task');
                  setValue('');

                  setPriority('');
                }}
              >
                Add TODO TASK
              </button>

              <button
                className="btn-clearAllTask btn btn-danger"
                type="submit"
                onClick={() => dispatch(clearAllTask(todos.id))}
              >
                CLEAR ALL TASK's
              </button>
            </div>
          </div>

          <h4 className="badge col-12 offset-ld-3 col-lg-6 alert alert-warning">
            To Do Count: <span>{todos.length}</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;

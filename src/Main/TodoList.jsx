import React, { useState } from 'react';
import './Styles.css';

const TodoList = () => {
  // initial hooks
  const [value, setValue] = useState(localStorage.getItem('value') || '');
  const [list, setList] = useState([]);

  const updateInput = (e) => {
    //update react state
    setValue(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    //create item task with unique id
    setList([
      ...list,
      {
        id: 1 + Math.random(),
        value: value.slice(),
        completed: false,
        sorted: false,
      },
    ]);

    // return empty input
    setValue('');
  };

  const deleteTask = (id) => {
    //filter out task being deleted
    const updatedListTodo = list.filter((item) => item.id !== id);
    setList(updatedListTodo);
  };

  const clearAllTask = (e) => {
    e.preventDefault();
    const updatedListTodo = list.filter((value) => list.value === '');
    setList(updatedListTodo);
  };

  return (
    <div className="container">
      <h3>TODO or NOT TODO that is the question</h3>
      <hr />

      <form className="form-horizontal">
        <div className="form-group">
          <label className="input-label">TODO's LIST</label>
          <div className="input-form">
            <input
              name="value"
              type="text"
              value={value}
              onChange={updateInput}
              placeholder="Type your TODO here..."
            />
          </div>
        </div>
        <div className="form-group-btn">
          <div>
            {/* button add todo item */}
            <button className="btn-addTask" type="submit" onClick={addTask}>
              Add TODO
            </button>

            <button
              className="btn-clearAllTask"
              type="submit"
              onClick={clearAllTask}
            >
              CLEAR ALL TASK's
            </button>
          </div>
        </div>
      </form>

      <hr />

      <h4>
        To Do Count: <span className="badge">{list.length}</span>
      </h4>

      <ul className="list-group">
        {list.map((value) => (
          <li className="list-group-item" key={value.id}>
            <span className={value.completed ? 'value-completed' : undefined}>
              <div className="list-group-item-priority"></div>
              {value.value}
            </span>
            {/* checkbox todo item */}
            <input
              type="checkbox"
              className="checkbox"

              // onChange={handleChangeTextStyle}
            />
            {/* button delete todo item */}
            <button
              className="btn-deleteTask"
              onClick={() => deleteTask(value.id)}
            >
              Delete Task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

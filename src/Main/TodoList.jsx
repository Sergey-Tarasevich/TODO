import React, { useState } from 'react';
import './Styles.css';

const TodoList = () => {
  // initial hooks
  const [value, setValue] = useState('');
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
  };

  const deleteTask = (id) => {
    //filter out task being deleted
    const updatedListTodo = list.filter((item) => item.id !== id);
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

            <div></div>
          </div>
        </div>
      </form>

      <hr />

      <ul className="list-group">
        {list.map((value) => (
          <li className="list-group-item" key={value.id}>
            <span className={value.completed ? 'value-completed' : undefined}>
              <div className="list-group-item-priority"></div>
              {value.value}
            </span>
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

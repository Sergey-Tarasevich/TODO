import React from 'react';

import TodoListCss from './TodoListCss.module.css';

// create new class component for TODO List
class TodoList extends React.Component {
  constructor(props) {
    super(props);

    // create state only in constructor
    this.state = {
      newItem: '',
      list: [],
    };
  }

  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value,
    });
  }

  addItem(e) {
    e.preventDefault();

    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    // copy of current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    // update state with new list and reset newItem input
    this.setState({
      list,
      newItem: '',
    });
  }

  deleteItem(id) {
    //copy current list of items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className={TodoListCss.TodoList}>
        <section>
          <div>
            TODO's LIST
            <br />
            <form onSubmit={this.addItem}>
              <input
                type="text"
                placeholder="Type your TODO here..."
                value={this.state.newItem}
                onChange={(e) => this.updateInput('newItem', e.target.value)}
              />
              <button onClick={(e) => this.addItem(e)}>Add TODO</button>
              <span>
                <ul>
                  {this.state.list.map((item) => {
                    return (
                      //add li with unique id
                      <li key={item.id}>
                        {item.value}

                        <label
                          // onClick={handleChangeTextColor}
                          // onChange={handleChangeStyleText}
                          className="switch"
                        >
                          <input type="checkbox" />
                        </label>

                        <button onClick={() => this.deleteItem(item.id)}>
                          X
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </span>
            </form>
            <br />
          </div>
        </section>
      </div>
    );
  }
}

export default TodoList;

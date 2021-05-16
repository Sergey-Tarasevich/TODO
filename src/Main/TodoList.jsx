import React from 'react';

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

  render() {
    return (
      <div>
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
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default TodoList;

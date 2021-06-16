import React, { Component } from 'react';
// import logo from './logo.svg';
// import epam from './epam-logo.svg';
import Header from './Components/Header/Header';
import TodoInput from './Components/Main/TodoInput';
import TodoList from './Components/Main/TodoList';
import Footer from './Components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <article className="TodoList">
          <TodoInput />

          <TodoList />
        </article>
        <Footer />
      </div>
    );
  }
}

export default App;

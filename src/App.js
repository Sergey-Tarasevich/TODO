import React, { Component } from 'react';
import Header from './Components/Header/Header';
import TodoInput from './Components/Main/TodoInput';
import TodoList from './Components/Main/TodoList';
import Columns from './Components/Main/Columns';
import Footer from './Components/Footer/Footer';
import ScrollToTopButton from './Components/ScrollToTopButton/ScrollToTopButton';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <article className="TodoList">
          <TodoInput />
          <TodoList />
          <Columns />
        </article>
        <ScrollToTopButton />
        <Footer />
      </div>
    );
  }
}

export default App;

import React from 'react';
import Header from './Header/header';
import TodoList from './Main/TodoList';
import Footer from './Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <article className="TodoList">
        <TodoList />
      </article>
      <Footer />
    </div>
  );
};

export default App;

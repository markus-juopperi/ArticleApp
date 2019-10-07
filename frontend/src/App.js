import React from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import ArticleForm from './components/ArticleForm';

function App() {
  return (
    <div className="App row">
      <ArticleList></ArticleList>
      <ArticleForm></ArticleForm>
    </div>
  );
}

export default App;

import React from 'react';
import { FaRedditSquare } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="name-bar">
          <FaRedditSquare className="icon"/>
          <h1 className="webname"> Minimal <span> Reddit </span> </h1>
        </div>
      </header>

      <main>
        <div className="main-content">
          <div className="filter">Filter </div>
          <div className="content">Content</div>
        </div>

        <aside>Subreddit</aside> 

      </main>
    </div>
  );
}

export default App;

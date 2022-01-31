import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="header">Header goes here</div>
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

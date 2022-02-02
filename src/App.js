import React from 'react';
import Filter from './features/Filter/Filter';
import Content from './features/Content/Content';
import Subreddit from './features/Subreddit/Subreddit';

import { FaRedditSquare } from 'react-icons/fa';
import './App.css';

const App = () => {
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
          <Filter />
          
          <Content />
        </div>

        <aside>
          <Subreddit />
        </aside> 
      </main>

    </div>
  );
}

export default App;

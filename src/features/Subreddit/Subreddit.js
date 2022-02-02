import React from 'react';
import './Subreddit.css';

const Subreddit = () => {
    return (
        <div>
            <div className="header">Top Subreddits</div>
            <div className="subreddit">
                <div>1</div>
                <div>Subreddit Name</div>
                <button>Visit</button>
            </div>
        </div>
    )
};

export default Subreddit;
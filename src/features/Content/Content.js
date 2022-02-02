import React from 'react';
import './Content.css';

import {
    HiArrowSmUp,
    HiArrowSmDown
} from 'react-icons/hi';

const Content = () => {
    return (
        <div className="content">
            <div className="votes">
                <button>
                    <HiArrowSmUp />
                </button>
                <div className="vote-count">123</div>
                <button>
                    <HiArrowSmDown />
                </button>
            </div>    
            <div className="card"> 
                <div className="author">AVATAR GOES HERE - POST BY: Jason 3 hours ago</div>
                <div className="sub">
                    <div className="title">TITLE</div>
                    <div className="post">Picture</div>
                </div>
                <div className="utility">
                    <button>Comments</button>
                    <button>Share</button>
                    <button>Open in Browser</button>
                </div>
            </div>
        </div>
    )
};

export default Content;
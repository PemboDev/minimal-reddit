import React from 'react';
import {
    AiFillPlusSquare
} from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import './Filter.css';

const Filter = () => {
    return (
        <div className="filter">
            <div className="icon"> 
                <button><AiFillPlusSquare /></button>
                <p>Best</p>
            </div>
            <div className="icon"> 
                <button><AiFillPlusSquare /></button>
                <p>Hot</p>
            </div>
            <div className="icon"> 
                <button><AiFillPlusSquare /></button>
                <p>New</p>
            </div>
            <div className="icon"> 
                <button><AiFillPlusSquare /></button>
                <p>Top</p>
            </div>
            <div className="search">
                <button> <AiOutlineSearch /></button>
                <input type="text" placeholder="Search"></input>
            </div>

        </div>
    );
};

export default Filter;
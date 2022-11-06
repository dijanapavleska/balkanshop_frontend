import React, { useState } from 'react';
import "../App.css";
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';
import Search from './Search';
function Navbar() {

    const [showLinks, setShowLinks] = useState(false);
    return (
        <div className='navbar'>
            <div className='leftSide'>
                <Search />
                <button><SearchIcon /></button>
            </div>
            <div className='rightSide'>
                <div className='links' id={showLinks ? "hidden" : ""}>
                    <a href='/home'>Home |</a>
                    <a href='/register'>  Register |</a>
                    <a href='/login'>Login | </a>
                    <a href='/contacts'>Contacts</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}>
                    {" "}
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar
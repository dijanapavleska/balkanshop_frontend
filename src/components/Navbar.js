import React, { useState } from 'react';
import "../App.css";
import Cart from './Cart';
import { Container } from 'react-bootstrap';

import Search from './Search';
function Navbar() {

    const [showLinks, setShowLinks] = useState(false);
    return (

        <Container className='Navbar'>

            <div className='row'>
                <div className="col-9 col-md-4">
                    <Search />
                </div>
                <div className="col-3 d-md-none">
                    <button onClick={() => setShowLinks(!showLinks)}>
                        <i className="bi bi-list"></i>
                    </button>
                </div>
                <div className={`col-12 col-md-8 links d-md-block ${showLinks ? "" : "d-none"}`} >
                    <div className="row">
                        <a className='col-12 col-md-2' href='/'>Home</a>
                        <a className='col-12 col-md-2' href='/register'>Register</a>
                        <a className='col-12 col-md-2' href='/login'>Login</a>
                        <a className='col-12 col-md-2' href='/contacts'>Contacts</a>

                        <Cart />
                    </div>




                </div>
            </div>

        </Container>
    )
}

export default Navbar
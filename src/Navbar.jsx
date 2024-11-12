import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    return (
        <>
        <nav>
        <ul className='nav-bar'>
            <li>
                <Link to="/">Create Campaign</Link>
            </li>
            <li>
                <Link to="/promotion">Create Promotion</Link>
            </li>
        </ul>
    </nav>
    </>

    )
}

export default Navbar
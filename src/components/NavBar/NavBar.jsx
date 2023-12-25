import React from 'react';
import CartWidget from '../CartWidget'
import '../NavBar/NavBar.css'

export const NavBar = () => {
    return(
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <a className="nav_link home" href="#">MORFEO</a>
                </div>
                <ul className="nav_list">
                    <li>
                        <a className="nav_link" href="#">Sabanas y Almohadas</a>
                    </li>
                    <li>
                        <a className="nav_list" href="#">Sommiers</a>
                    </li>
                    <li>
                        <a className="nav_list" href="#">
                            <CartWidget/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar
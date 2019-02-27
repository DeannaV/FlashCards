import React, { Component } from "react";

import { NavLink } from 'react-router-dom';

import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
                <NavLink className="nav-link p-2 text-muted" to="/" exact={true}>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link p-2 text-muted" to="/all" exact={true}>All</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link p-2 text-muted" to="/flashcard/add" exact={true}>Add Flashcard</NavLink>
            </li>
        </ul>
    );
  }
} 

export default NavBar;
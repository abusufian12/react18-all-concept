import React from 'react';
import {  NavLink } from "react-router-dom";
import styles from '../../mystyle.module.css'; 

export default function Navbar(){
    return(
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={(navInfo) => (navInfo.isActive ? styles.active : "")} >
                  Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={(navInfo) => (navInfo.isActive ? styles.active : "")} >About</NavLink>
            </li>
            <li>
              <NavLink to="/posts" className={(navInfo) => (navInfo.isActive ? styles.active : "")} >Posts</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={(navInfo) => (navInfo.isActive ? styles.active : "")} >Users</NavLink>
            </li>
            <li>
              <NavLink to="/hooks" className={(navInfo) => (navInfo.isActive ? styles.active : "")} >Hooks</NavLink>
            </li>
          </ul>
        </nav>
    );
}


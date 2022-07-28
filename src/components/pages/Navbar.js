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
              <NavLink to="/state-up" className={(navInfo) => (navInfo.isActive ? styles.active : "")} >StateUp</NavLink>
            </li>
            <li>
              <NavLink to="/hooks" className={(navInfo) => (navInfo.isActive ? styles.active : "")} >Hooks</NavLink>
              {/* <ul>
                <li><NavLink to="/link-1" className={(navInfo) => (navInfo.isActive ? styles.active : "")} >Link 1</NavLink></li>
                <li><NavLink to="/link-2" className={(navInfo) => (navInfo.isActive ? styles.active : "")} >Link 2</NavLink></li>
                <li><NavLink to="/link-3" className={(navInfo) => (navInfo.isActive ? styles.active : "")} >Link 3</NavLink></li>
              </ul> */}
            </li>

            
          </ul>
        </nav>
    );
}


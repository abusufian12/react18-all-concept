import React from 'react';
import {  NavLink, Link, Outlet } from "react-router-dom";
import styles from '../../mystyle.module.css'; 

import {FavoriteColor, Car} from '../all-hooks/learn-use-state';
import {Timer} from '../all-hooks/learn-use-effect';

export default function Hooks(){
    return(
        <>
            <nav>
                <ul>
                    <li>
                    <NavLink to="/hooks/use-state" className={(navInfo) => (navInfo.isActive ? styles.active : "")} >Use State</NavLink>
                    </li>
                    <li>
                    <NavLink to="/hooks/use-effect" className={(navInfo) => (navInfo.isActive ? styles.active : "")} >Use Effect</NavLink>
                    </li>
                    <li>
                    <NavLink to="/hooks/use-ref" className={(navInfo) => (navInfo.isActive ? styles.active : "")} >Use Ref</NavLink>
                    </li>
                    <li>
                    <NavLink to="/hooks/use-context" className={(navInfo) => (navInfo.isActive ? styles.active : "")} >Use Context</NavLink>
                    </li>
                    <li>
                    <NavLink to="/hooks/use-reducer" className={(navInfo) => (navInfo.isActive ? styles.active : "")} >Use Reducer</NavLink>
                    </li>
                    <li>
                    <NavLink to="/hooks/use-callback" className={(navInfo) => (navInfo.isActive ? styles.active : "")} >Use Callback</NavLink>
                    </li>
                    <li>
                    <NavLink to="/hooks/use-memo" className={(navInfo) => (navInfo.isActive ? styles.active : "")} >Use Memo</NavLink>
                    </li>
                    <li>
                    <NavLink to="/hooks/custom-hooks" className={(navInfo) => (navInfo.isActive ? styles.active : "")} >Custom Hooks</NavLink>
                    </li>
                </ul>
                <Outlet />
            </nav>

            {/* <div>
                <h2>Use State Example</h2>
                <FavoriteColor />
                <Car />
                <Timer />
            </div> */}
        </>
    );
}


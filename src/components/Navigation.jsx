import React from 'react';
import {NavLink} from "react-router-dom";
import "../styles/navigation.css"

export default function Navigation(props) {
    const {about, contact, hobbies} = props.links;
    
    return (
        <nav className ="navigation">
            <h1>My Page</h1>
            <ul> 
                <li><NavLink activeClassName="link-active" to={about.path}>{about.label}</NavLink></li>
                <li><NavLink activeClassName="link-active" to={hobbies.path}>{hobbies.label}</NavLink></li>
                <li><NavLink activeClassName="link-active" to={contact.path}>{contact.label}</NavLink></li>
            </ul>
        </nav>
    )
}

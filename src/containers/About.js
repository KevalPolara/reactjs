import React from 'react';
import {Link} from 'react-router-dom';

function About(props) {
    return (
        <div>
             <a href='#'>
                <ul>
                    <li><Link to={"/home"}>Home</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link to={"/"}>About</Link></li>
                </ul>
                
            </a>
            <h1>About Page</h1>
        </div>
    );
}

export default About;
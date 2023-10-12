import React from 'react';
import {Link} from 'react-router-dom';


function Contact(props) {
    return (
        <div>
             <a href='#'>
                <ul>
                    <li><Link to={"/home"}>Home</Link></li>
                    <li><Link to={"/"}>Contact</Link></li>
                    <li><Link to={"/About"}>About</Link></li>
                </ul>
                
            </a>
            <h1>Contact Page</h1>

            
        </div>
    );
}

export default Contact;
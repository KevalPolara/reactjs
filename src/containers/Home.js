import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div>
            <a href='#'>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link to={"/About"}>About</Link></li>
                </ul>
                
            </a>
            <h1>Home Page</h1>
            
        </div>
    );
}

export default Home;
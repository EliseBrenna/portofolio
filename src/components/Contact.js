import React from 'react';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>ELISE BRENNA</h2>
                <div className="nav-bar">
                    <nav>
                        <Link to="/">WORK</Link> 
                        <Link to="/about">ABOUT</Link> 
                        <Link to="/contact">CONTACT</Link> 
                    </nav>
                </div>
                <div className="contact">
                    <h4><a href="mailto: elisebrenna@gmail.com? subject=subject text">elisebrenna@gmail.com</a></h4>
                </div>
            </div>
        )
    }
}

export default Contact;
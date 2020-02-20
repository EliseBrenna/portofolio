import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
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
                <div className="about">
                    <h4>Elise is situated in the capital of Norway, Oslo.</h4>
                    <h4>She graduated from Westerdals ACT in 2014 with a bachelor degree in Retail Design.
                        For the next 8 years she worked in the fashion industry as a brand manager, before
                        she decided to change her career and follow her other dream - web development
                        and programming.
                    </h4>
                    <h4>In January 2020 she finished a 3 month accelerating program in JavaScript.</h4>
                    <h4 style={{fontWeight: 600}}>Qualifications <br></br>
                        <h4>
                        Git<br></br>
                        HTML<br></br>
                        React<br></br>
                        Node.js<br></br>
                        Express<br></br>
                        JavaScript<br></br>
                        PostgreSQL<br></br>
                        Browser APIs<br></br>
                        CSS and SASS<br></br>
                        RESTful Web Services
                    </h4>
                    </h4>
                </div>
            </div>
        )
    }
}

export default About;
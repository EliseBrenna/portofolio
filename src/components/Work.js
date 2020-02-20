import React from 'react';
import { Link } from 'react-router-dom';

class Work extends React.Component {
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
                <div className="work-gallery">
                    <a className="digipant" href="https://github.com/EliseBrenna/pante-app" target="_blank"><img src="./digipant.PNG" alt="digipant"/></a>
                    <a className="job" href="https://github.com/EliseBrenna/job" target="_blank"><img src="./job.PNG" alt="jobbrowser"/></a>
                    <a className="eggxact" href="https://github.com/EliseBrenna/eggxact" target="_blank"><img src="./eggxact.PNG" alt="eggxact"/></a>
                    <a className="twitter" href="https://github.com/EliseBrenna/academy-twitter-clone" target="_blank"><img src="./twitter.PNG" alt="twitter"/></a>
                </div>
            </div>
        )
    }
}

export default Work;
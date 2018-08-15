import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {

        return <React.Fragment>

            <div className="menu-container">
                <div className="row justify-content-center">
                    <div className="row">

                        <div className="col-xs-12 col-md-10 col-lg-6">
                            <table className="table table-card">
                                <thead>
                                    <tr>
                                        <th scope="col" className="menu" id="about">
                                            <a href="#about-card">
                                                <span id="about"><img className="fab" src={ require('./../../images/icons/earlybirds.png')}  alt="alt text"/></span><br />
                                                <span className="link" id="about">About</span>
                                            </a>
                                        </th>
                                        <th scope="col" className="menu" id="resume">
                                            <a href="#resume-card">
                                                <span id="resume"><img className="fab" src={ require('./../../images/icons/resume.png')} alt="alt text" /></span><br />
                                                <span className="link" id="resume">Resume</span>
                                            </a>
                                        </th>

                                        <th scope="col" className="menu" id="works">
                                            <a href="#works-card">
                                                <span id="works"><img className="fab" src={ require('./../../images/icons/paint.png')} alt="alt text" /></span><br />
                                                <span className="link" id="works">Works</span>
                                            </a>
                                        </th>
                                        <th scope="col" className="menu" id="contact">
                                            <a href="#contacts-card">
                                                <span id="contact"><img className="fab" src={ require('./../../images/icons/at.png')} alt="alt text" /></span><br />
                                                <span className="link" id="contact">Contact</span>
                                            </a>
                                        </th>

                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>


    }
}

export default Menu;
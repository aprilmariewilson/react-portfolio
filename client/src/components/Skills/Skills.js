import React, { Component } from "react";
import "./Skills.css"

class Skills extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {

        return <React.Fragment>
                            <div className="content skills">
                    <div className="title text-center"><h2>My Skills</h2></div>
                    <div className="row">
                        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                            <div className="skills-list">
                                <div className="skill-title border-line-h">
                                    <div className="icon">
                                            <i className="fas fa-code"></i>
                                        </div>
                                    <div className="name">Front End Coding</div>
                                </div>
                                <ul>
                                    <li>
                                        <div className="name">HTML / CSS</div>
                                        <div className="progress">
                                            <div className="percentage" id="htmlStyle"></div>
                                        </div>
                                    </li>
                                    <li className="border-line-h">
                                        <div className="name">SASS / Materialize / Bootstrap</div>
                                        <div className="progress">
                                            <div className="percentage" id="bootStyle"></div>
                                        </div>
                                    </li>
                                    <li className="border-line-h">
                                        <div className="name">JavaScript / jQuery </div>
                                        <div className="progress">
                                            <div className="percentage" id="jStyle"></div>
                                        </div>
                                    </li>

                                    <li className="border-line-h">
                                        <div className="name">React / Redux</div>
                                        <div className="progress">
                                            <div className="percentage" id="reactStyle"></div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                            <div className="skills-list">
                                <div className="skill-title border-line-h">
                                    <div className="icon">
                                            <i className="fas fa-server"></i>
                                        </div>
                                    <div className="name">Back End Coding</div>
                                </div>
                                <ul>
                                    <li>
                                        <div className="name">Node.js</div>
                                        <div className="progress">
                                            <div className="percentage" id="nodeStyle"></div>
                                        </div>
                                    </li>
                                    <li className="border-line-h">
                                        <div className="name">Express / Servers </div>
                                        <div className="progress">
                                            <div className="percentage" id="serverStyle"></div>
                                        </div>
                                    </li>
                                    <li className="border-line-h">
                                        <div className="name">PHP / MYSQL / MongoDB</div>
                                        <div className="progress">
                                            <div className="percentage" id="mongoStyle"></div>
                                        </div>
                                    </li>
                                    <li className="border-line-h">
                                        <div className="name">WebPack</div>
                                        <div className="progress">
                                            <div className="percentage" id="webStyle"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    };
};
export default Skills;
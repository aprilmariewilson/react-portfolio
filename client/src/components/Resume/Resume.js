import React, { Component } from "react";
import "./Resume.css"

class Resume extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {

        return <React.Fragment>
           <div className="content resume">
                    <div className="title text-center"><h2>Resume</h2></div>
                    <div className="row">
                        <div className="col-d-6 col-t-6 col-m-12 border-line-v">
                            <div className="resume-title border-line-h">
                                <div className="icon">
                                        <i className="fas fa-briefcase"></i>
                                    </div>
                                <div className="name">Experience</div>
                            </div>
                            <div className="resume-item border-line-h active">
                                <div className="date">2012 - Present</div>
                                <div className="name">Assistant Store Manager</div>
                                <div className="company">DSW</div>
                                <p>Hire, train and collaborate to create a team to execute initiatives and maintain service
                                    and operational standards.
                                </p>
                            </div>
                            <div className="resume-item border-line-h">
                                <div className="date">2011 - 2012</div>
                                <div className="name">Assistant Store Manager</div>
                                <div className="company">Burlington Coat Factory</div>
                                <p> Create, scheduled and managed teams to complete projects during timeframe given.
                                </p>
                            </div>
                            <div className="resume-item">
                                <div className="date">2007 - 2011</div>
                                <div className="name">Insurance Agent</div>
                                <div className="company">State Farm Insurance</div>
                                <p> Assessed customer needs and helped created customized packages as well as crisis management.
                                </p>
                            </div>
                        </div>
                        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                            <div className="resume-title border-line-h">
                                <div className="icon">
                                        <i className="fas fa-university"></i>
                                    </div>
                                <div className="name">Education</div>
                            </div>
                            <div className="resume-items">
                                <div className="resume-item border-line-h">
                                    <div className="date">2018</div>
                                    <div className="name">Coding Bootcamp</div>
                                    <div className="company">University of Utah</div>
                                    <p>
                                        An intensive 24 week Full Stack Flex course that equips you to become a full stack web developer and gives you the knowledge
                                        and skills to build dynamic end-to-end web applications
                                    </p>
                                </div>
                                <div className="resume-item border-line-h">
                                    <div className="date">1999 - 2000</div>
                                    <div className="name">Biology</div>
                                    <div className="company">Utah State University</div>
                                    <p>
                                        Biological studies with a minor in chemistry.
                                    </p>
                                </div>
                                <div className="resume-item">
                                    <div className="date">1997-1998</div>
                                    <div className="name"> General Studies</div>
                                    <div className="company">UVSC</div>
                                    <p>
                                        General Studies to prepare for pre-med.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="clear"></div>
                    </div>
                </div> 
        </React.Fragment>
    }
}
export default Resume;
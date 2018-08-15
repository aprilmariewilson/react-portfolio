import React from "react";
import "./MainCard.css";

const Main = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="background">
                    <div className="row">

                        <div className="col-xs-12 col-md-10 col-lg-6">
                            <div className="home" id="home-card">
                                <div className="profile">
                                    <div className="small-background" styles="background-image: url(./../../../images/waterfall.jpg)"></div>
                                    <div className="image">
                                        <img src={require('./../../images/profile.jpg')} alt="alt text" />
                                    </div>
                                    <div className="title">April Wilson</div>
                                    <div className="job">Web Developer</div>
                                    <div className="social">


                                        <div className="row justify-content-center">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col" className="fab" id="github">
                                                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/aprilmariewilson">
                                                                        <span className="social"><img className="fab" src={require('./../../images/icons/github.png')}  alt="alt text"/></span>
                                                                    </a>
                                                                </th>

                                                                <th scope="col" className="fab" id="linkedin">
                                                                    <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/april-wilson-14230b5a">
                                                                        <span className="social"><img className="fab" src={require('./../../images/icons/linkedin.png')}  alt="alt text"/></span>
                                                                    </a>
                                                                </th>
                                                                <th scope="col" className="fab" id="stackoverflow">
                                                                    <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/9178361/april-wilson">
                                                                        <span className="social"><img className="fab" src={require('./../../images/icons/stackoverflow.png')}  alt="alt text"/></span>
                                                                    </a>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </React.Fragment>
    )
}

export default Main;
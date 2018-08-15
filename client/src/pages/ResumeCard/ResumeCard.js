import React from "react";
import "./ResumeCard";
import Skills from "../../components/Skills";
import Resume from "../../components/Resume";

class ResumeCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    };

    render() {
        return (
            <React.Fragment>
                <div className="col-xs-12 col-md-10 col-lg-6">
                    <div className="innerCard">
                        <div>
                            <Skills />
                        </div>
                        <div>
                            <Resume />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

export default ResumeCard;
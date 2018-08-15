import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Main from "./pages/MainCard";
import Menu from "./components/Menu";
import ResumeCard from "./pages/ResumeCard";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false
        }
        // setRedirect = () => {
        //     this.setState({
        //         redirect: true
        //     });
        // };
        // renderRedirect = () => {
        //     if(this.state.redirect) {
        //         return <Redirect to='/'/>
        //         // hide asideDiv
        //     }
        // }
    }

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <div className="mainDiv">
                        <Main />
                        <ResumeCard />
                    </div>
                    <div className="menuDiv">
                    <Menu />
                    </div>
                </React.Fragment>
            </BrowserRouter>
        )
    }
}
export default App;
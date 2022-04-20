import './App.css';
import ReactDOM from "react-dom";
import globe from './images/com.gif';
import React from 'react';
import Login from './login';
function home() {
    function login(){
        ReactDOM.render(<Login/>, document.getElementById('root'));
    }
    return (
            React.createElement(React.Fragment,null,
                React.createElement("div",{className:"Home"},
                React.createElement("img",{src: globe,className:"App=logo",width:"200px"}),
                    React.createElement("h1",{className:"title"},"Central Library"),
                    React.createElement("button", {onClick: login},"Login / Signup")
                )
            )
        );

}
export default home;
import React from 'react';
import globe from './images/ZJFD.gif';
import './App.css';
import Form from './form';
class login extends React.Component {
    render() {
        return (
            React.createElement(React.Fragment, null, React.createElement("div", {
                style: {
                    float: "left",
                    width: "60%"
                }
            }, React.createElement("h1", {
                style: {
                    color: "white"
                }
            }, "Central Library"), React.createElement("img", {
                alt: "globe",
                src: globe,
                width: "500px"
            })), React.createElement("div", {
                style: {
                    float: "left",
                    width: "40%"
                }
            }, React.createElement("h1", {
                style: {
                    color: "white"
                }
            }, "Please Login With your Id and Password"),React.createElement(Form, null)))
        );}
}
export default login;

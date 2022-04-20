import React, { useState } from "react";
import ReactDOM from "react-dom";
import Dashboard from "./dashboard";
import "./form.css";
import Login from "./login";

function Form() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const loginSubmit = (event) => {
        event.preventDefault();

        var { uname, pass } = document.forms[0];
        const userData = database.find((user) => user.username === uname.value);
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
                sessionStorage.setItem('LoginStatus', 'True');
                ReactDOM.render(<Dashboard/>, document.getElementById('root'));
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    const renderForm =
        React.createElement("div", {
            className: "form-box"
        },React.createElement("form", {
            onSubmit: loginSubmit
        }, React.createElement("label", {
            htmlFor: "email"
        }, "Email Id"), React.createElement("input", {
            type: "text",
            name: "uname",
            placeholder: "Your Mail..",
            required: true
        }), React.createElement("label", {
            htmlFor: "password"
        }, "Password"), React.createElement("input", {
            type: "password",
            name: "pass",
            placeholder: "Your password..",
            required: true
        }), React.createElement("input", {
            type: "submit",
            value: "Submit"
        }), renderErrorMessage("uname"), renderErrorMessage("pass")));


    return (
        <div >
            <div>
                <div>Sign In</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );
}
export default Form;
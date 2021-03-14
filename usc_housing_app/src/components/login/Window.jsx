import { Row, InputGroup, FormControl, Button, Col } from "react-bootstrap";
import "../../styles/home/Window.css";
import React from 'react';
import ReactDOM from 'react-dom';

const { Component } = React

class Window extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentView: "logIn"
        }
    }

    changeView = (view) => {
        this.setState({
            currentView: view
        })
    }

    currentView = () => {
        switch (this.state.currentView) {
            case "logIn":
                return (
                    <form>
                        <h2>Log In Page</h2>
                        <fieldset>
                            <legend>Log In</legend>
                            <ul>
                                <li>
                                    <label for="username">Email:</label>
                                    <input type="text" id="username" required />
                                </li>
                                <li>
                                    <label for="password">Password:</label>
                                    <input type="password" id="password" required />
                                </li>
                                <li>
                                    <i />
                                    <a onClick={() => this.changeView("PWReset")} href="#">Forgot Password?</a>
                                </li>
                            </ul>
                        </fieldset>
                        <button>Login</button>
                        <button type="button" onClick={() => this.changeView("signUp")}>Create an Account</button>
                    </form>
                )
                break
            case "signUp":
                return (
                    <form>
                        <h2>Sign Up!</h2>
                        <fieldset>
                            <legend>Create Account</legend>
                            <ul>
                                <li>
                                    <label for="username">Name:</label>
                                    <input type="text" id="username" required />
                                </li>
                                <li>
                                    <label for="email">Email:</label>
                                    <input type="email" id="email" required />
                                </li>
                                <li>
                                    <label for="password">Password:</label>
                                    <input type="password" id="password" required />
                                </li>
                            </ul>
                        </fieldset>
                        <button>Submit</button>
                        <button type="button" onClick={() => this.changeView("logIn")}>Have an Account?</button>
                    </form>
                )
                break

            case "PWReset":
                return (
                    <form>
                        <h2>Reset Password</h2>
                        <fieldset>
                            <legend>Password Reset</legend>
                            <ul>
                                <li>
                                    <em>A reset link will be sent to your inbox!</em>
                                </li>
                                <li>
                                    <label for="email">Email:</label>
                                    <input type="email" id="email" required />
                                </li>
                            </ul>
                        </fieldset>
                        <button>Send Reset Link</button>
                        <button type="button" onClick={() => this.changeView("logIn")}>Go Back</button>
                    </form>
                )
            default:
                break
        }
    }


    render() {
        return (
            <section id="entry-page">
                {this.currentView()}
            </section>
        )
    }
}

ReactDOM.render(<Window />, document.getElementById("root"))



export default Window;
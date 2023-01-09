import '../css/components/form.css';
import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="login-panel-student login-panel">
                <form action="">
                    <div>
                        <label>Username</label>
                        <input placeholder="Username . . . " name="UserName_Student" maxLength="15"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input placeholder="Password . . ." name="password_Student" maxLength="15"/>
                    </div>
                    <button type="submit" value="Submit" className="btns">Log in</button>
                </form>
            </div>
        )
    }
}

export default Login;
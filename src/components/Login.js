import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        token: '',
        showPass: false
    }
    
    getToken = (e) => {
        e.preventDefault();
        return console.log("hello")
    }

    toggleVisibility = () => {
        this.setState({showPass: !this.state.showPass})
    }

    render() {
        const {getToken, showPass} = this.state;
        return (
            <div id="login">
                
                <form id="login-form" onSubmit={getToken}>
                    <div className="form-group">
                        <label for="login-email">Email</label>
                        <input id="login-email"
                            className="form-control" 
                            type="email" 
                            placeholder="Username" 
                            defaultValue=""
                        />
                    </div>
                    <div className="form-group">
                        <label for="login-password">Password</label>
                        <input id="login-password" 
                            className="form-control" 
                            type={showPass ? "text" : "password"}
                            placeholder="Password" 
                            defaultValue=""
                        />
                    </div>
                    <button type="Submit" className="btn btn-primary">Log In</button>
                </form>
            </div>
        )
    }
}

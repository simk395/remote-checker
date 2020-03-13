import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        showPass: false,
        user: '',
        pass: ''
    }
    
    //toggle passsword visiblity
    showPassword = () => {
        this.setState({showPass: !this.state.showPass});
    }

    //setState user to email input
    getUsername = (e) => {
        this.setState({ user: e.target.value})
    }

    //setState pass to password input
    getPassword = (e) => {
        this.setState({pass : e.target.value})
    }

    render() {
        const {showPass, user, pass} = this.state;
        const {getToken} = this.props;
        return (
            <div id="login" className="align-self-center container p-0 shadow bg-white">
                <div id="banner" className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-1">Remote Checker</h1>
                    <p className="lead">Check remote attendances without hassle-free for BootCampSpot.</p>
                </div>
            </div>
                <form id="login-form" className="container d-flex flex-column pb-4" onSubmit={(e) => getToken(e, user, pass)}>
                    <div className="form-group">
                        <label htmlFor="login-email">Email</label>
                        <input id="login-email"
                            onChange={this.getUsername}
                            className="form-control form-control-lg" 
                            type="text" 
                            placeholder="E-mail" 
                            autoComplete="off"
                            value={user}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="login-password">Password</label>
                        <input id="login-password" 
                            onChange={this.getPassword}
                            className="form-control form-control-lg" 
                            type={this.statehowPass ? "text" : "password"}
                            placeholder="Password" 
                            defaultValue=""
                        />
                        <a href="https://bootcampspot.com/forgot-password" target="_blank" className="form-text">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn btn-primary align-self-end">Log In</button>
                </form>
            </div>
        )
    }
}

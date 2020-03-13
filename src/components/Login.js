import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        token: '',
        showPass: false
    }
    
    getToken = (e) => {
        e.preventDefault();
        console.log("hello")
    }

    toggleVisibility = () => {
        this.setState({showPass: !this.state.showPass})
    }

    render() {
        const {showPass} = this.state;
        return (
            <div id="login" className="align-self-center container p-0 shadow bg-white">
                <div id="banner" className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-1">Remote Checker</h1>
                    <p className="lead">Check remote attendances without hassle-free for BootCampSpot.</p>
                </div>
            </div>
                <form id="login-form" className="container d-flex flex-column pb-4" onSubmit={this.getToken}>
                    <div className="form-group">
                        <label htmlFor="login-email">Email</label>
                        <input id="login-email"
                            className="form-control form-control-lg" 
                            type="email" 
                            placeholder="E-mail" 
                            defaultValue=""
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="login-password">Password</label>
                        <input id="login-password" 
                            className="form-control form-control-lg" 
                            type={this.statehowPass ? "text" : "password"}
                            placeholder="Password" 
                            defaultValue=""
                        />
                        <a href="https://bootcampspot.com/forgot-password" target="_blank" className="form-text">Forgot Password?</a>
                    </div>
                    <button type="Submit" className="btn btn-primary align-self-end">Log In</button>
                </form>
            </div>
        )
    }
}

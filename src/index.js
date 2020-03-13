import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login'
import StudentContainer from './components/StudentContainer'
import './reset.css'
import './index.css';

//need to add bcrypt for authtoken
//Add TTL and change sessionStorage to local
class App extends React.Component{
    state = {
        token: JSON.parse(sessionStorage.getItem('token'))
    };

    //GET authToken from BootCampSpot API
    getToken = async (e, user, pass) => {
        e.preventDefault();
        const data = {
            email: user,
            password: pass
        };
        const response = await fetch('https://bootcampspot.com/api/instructor/v1/login', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        const json = await response.json();
        const token = json.authenticationInfo.authToken;
        sessionStorage.setItem("token", JSON.stringify(token));
        this.setState({token});
    };

    removeToken = (e) => {
        sessionStorage.removeItem('token');
        this.setState({token:""});
    };

    render(){
        const {token} = this.state
        return(
            <div id="wrapper" className="min-vh-100 d-flex bg-light">
                {token ? <StudentContainer removeToken={this.removeToken}/> : <Login getToken={this.getToken}/>}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

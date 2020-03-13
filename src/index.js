import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login'
import StudentContainer from './components/StudentContainer'
import './reset.css'
import './index.css';

class App extends React.Component{
    state = {
        token: ""
    }

    getToken = async (e, user, pass) => {
        
        const data = {
            email: user,
            password: pass
        }

        // const response = await fetch('https://bootcampspot.com/api/instructor/v1/login', {
        //     method: 'POST',
        //     header: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // })

        console.log(response)
    }

    render(){
        const {token} = this.state
        return(
            <div id="wrapper" className="min-vh-100 d-flex bg-light">
                {token ? <StudentContainer/> : <Login getToken={this.getToken}/>}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login'
import './reset.css'
import './index.css';

class App extends React.Component{

    render(){
        return(
            <div id="wrapper" className="min-vh-100 d-flex bg-light">
                <Login/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

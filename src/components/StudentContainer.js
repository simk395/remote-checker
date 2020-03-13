import React, { Component } from 'react'
import Nav from './Nav'

export default class StudentContainer extends Component {
    
    state = {
        course: ""
    }

    render() {
        const {removeToken} = this.props;
        return (
            <div>
                <Nav removeToken={removeToken}/>
            </div>
        )
    }
}

//student container uses /me to get all classes

import React, { Component } from 'react'
import Nav from './Nav'

export default class StudentContainer extends Component {
    
    state = {
        course: ""
    }

    render() {
        return (
            <div>
                <Nav/>
            </div>
        )
    }
}

//student container uses /me to get all classes

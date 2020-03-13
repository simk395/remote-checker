import React from 'react'

export default function Nav(props) {
    return (
        <nav id="nav" className="navbar navbar-dark bg-dark fixed-top">
            <button className="btn btn-outline-primary" onClick={props.removeToken} type="button">Logout</button>
        </nav>
    )
}

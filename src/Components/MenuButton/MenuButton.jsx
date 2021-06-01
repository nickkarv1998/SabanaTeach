import React from 'react'
import '../../index.css'
import {Link} from 'react-router-dom'

const MenuButton = (props) => {
    return (
        <div className="MenuButton" style={{textDecoration: "none"}} onClick={props.clicked}>
            <Link to={props.link}> <h3>{props.name}</h3></Link>
        </div>
    )
}

export default MenuButton
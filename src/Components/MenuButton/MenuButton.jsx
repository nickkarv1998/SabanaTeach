import React from 'react'
import '../../index.css'

const MenuButton = (props) => {
    return (
        <div className="MenuButton" style={{textDecoration: "none"}}>
            <a href={props.link}> <h3>{props.name}</h3></a>
        </div>
    )
}

export default MenuButton
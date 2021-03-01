import React from 'react'

const MenuButton = (props) => {
    return (
        <div className="MenuButton">
            <a href={props.link}> <h3>{props.name}</h3></a>
        </div>
    )
}

export default MenuButton
import React from 'react'

const SectionClass = (props) => {
    return (
        <div className="SectionClass">
            <a style={{textDecoration: "none"}} href={props.link}> <h2 className={props.class}>{props.name}</h2></a>
        </div>
    )
}

export default SectionClass
import React from 'react'
import './courseStatusCard.css'

const CourseStatusCard = ({props}) => {
    console.log(props)
    console.log(props.name)
    console.log(props.class)

    return (
        <li class="item">
            <p>{props.name}</p>
            <p>{props.class}</p>
        </li>
    )
}

export default CourseStatusCard
import React from 'react'
import './courseStatusCard.css'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';


const CourseStatusCard = ({ props }) => {
    return (
        <Link to={"/CourseContent"} style={{ textDecoration: 'none' }}>
            <li class="item">
                <h2>{props.name}</h2>
                <p>{props.class}</p>
            </li>
        </Link>
    )
}

export default CourseStatusCard
import React from 'react'
import './CourseBasicInfo.css';

const CourseBasicInfo = (props) => {
    return (
        <div className="CourseBasicInfo">
            <h4>Duración: </h4> <p>{props.duration}</p>
            <h4>Profesor: </h4> <p>{props.teacher}</p>
            <h4>Certificado: </h4><p>{props.cert}</p> 
        </div>
    )
}

export default CourseBasicInfo
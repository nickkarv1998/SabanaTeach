import React from 'react'

const CourseBasicInfo = (props) => {
    return (
        <div className="CourseBasicInfo">
            <h4>Duración: </h4> {props.duration}
            <h4>Profesor: </h4> {props.teacher}
            <h4>Certificado: </h4> {props.cert}
        </div>
    )
}

export default CourseBasicInfo
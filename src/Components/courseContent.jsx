import React from 'react'
import Video from './Video'
import CourseBasicInfo from './CourseBasicInfo/CourseBasicInfo'
import '../index.css'


const CourseContent = (props) => {
    return (
        <div className="CourseContent">
            <div className="Title1">
                <h1>{props.name}</h1>
            </div>
            <div className="VideoContainer">
                <Video/>
            </div>
            <CourseBasicInfo duration="2 hrs" teacher="Miguel Camacho" cert="Sí" />
            <div className="CourseDescription">
                <h2>Descripción</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. s cumque blanditiis, nobis sunt debitis ullam molestias ea!</p>
            </div>
        </div>
    )
}

export default CourseContent
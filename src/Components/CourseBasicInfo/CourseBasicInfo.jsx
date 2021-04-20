import React from 'react'
import styles from './CourseBasicInfo.module.css';


const CourseBasicInfo = (props) => {
    return (
        <div className={styles.CourseBasicInfo}>
            <h4>Duración: </h4> <p>{props.duration}</p>
            <h4>Profesor: </h4> <p>{props.teacher}</p>
            <h4>Certificado: </h4><p>{props.cert}</p> 
        </div>
    )
}

export default CourseBasicInfo
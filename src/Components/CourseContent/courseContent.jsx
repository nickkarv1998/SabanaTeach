import React from 'react'
import Video from '../Video/Video'
import CourseBasicInfo from './../CourseBasicInfo/CourseBasicInfo'
import '../../index.css'
import styles from './courseContent.module.css';
import axios from "../../Instances/axiosInstance"
import { Link } from 'react-router-dom';


class CourseContent extends React.Component {
    state = {
        course: {}
    }

    componentDidMount() {
        axios.get(`/courses/${this.props.courseId}`).then(res => {
            const stateCopy = { ...this.state }
            stateCopy.course = res.data
            this.setState(stateCopy)
        }).catch(error => {
            console.log(error)
            alert(error.response.data)
        })
    }

    render() {
        return (
            <div className="CourseContent">
                <div className="Title1">
                    <h1>{this.state.course.title}</h1>
                </div>
                <div className="VideoContainer">
                    <Video url={this.state.course.introVideoUrl} />
                </div>
                <CourseBasicInfo duration={this.state.course.duration} teacher={this.state.course.teacher} cert={this.state.course.isCertified ? 'Sí' : 'No'} />
                <div className="CourseDescription">
                    <h2>Descripción</h2>
                    <p>{this.state.course.description}</p>
                </div>
                <div >
                     <Link to={`/pdf/${this.state.course.id}`}>
                        <button className={styles.button}>Ver Certificado</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default CourseContent
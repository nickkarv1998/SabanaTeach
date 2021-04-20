import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'
import styles from './CourseLibrary.module.css';

import axios from '../../Instances/axiosInstance.js'

class CourseLibrary extends Component {
    setShowMenu = this.props.setShowMenu

    state = {
        availableCourses: []
    }

    componentDidMount() {
        this.setShowMenu(true)

        axios.get('/courses').then(res => {
            const stateCopy = {...this.state}
            stateCopy.availableCourses = res.data
            this.setState(stateCopy)
        }).catch(error => {
            alert(error.response.data)
        })
    }

    render() {
        return <div>
            <SearchBar/>
            <div>
                <h1 className={styles.titulo2}>Catálogo de Cursos</h1>
            </div>

            <div className={styles.curso}>
                {
                    this.state.availableCourses.map(course => (
                        <details className={styles.cursos}>
                            <summary class="resume">
                                + {course.title}
                            </summary>

                            <p className={styles.content}>
                                {course.description}
                                <br/> <br/>
                                <b>Duración:</b> {course.duration}
                                <br/>
                                <b>Profesor:</b> {course.teacher}
                                <br/> <br/>
                                {
                                    course.lessons.map(lesson => (
                                        <div>
                                            <h3>{ lesson.title }</h3>
                                            <p>{ lesson.description }</p>
                                        </div>
                                    ))
                                }
                                <button onClick={() => this.enrollToCourse(course.id)}>Comenzar</button>
                            </p>
                        </details>
                    ))
                }
            </div>
        </div>
    }

    enrollToCourse = (id) => {
        console.log("triggered once")
        axios.post('/courses/enroll', {
            courseId: id,
            userId: localStorage.getItem("userId")
        }).then(_ => {
            alert("Te has inscrito con éxito al curso.")
            this.props.history.push(`/CourseContent/${id}`)
        }).catch(_ => {
            alert("ya estás inscrito en ese curso.")
        })
    }
}


export default withRouter(CourseLibrary)

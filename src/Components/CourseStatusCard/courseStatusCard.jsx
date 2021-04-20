import React, {Component} from 'react'
import styles from './courseStatusCard.module.css';

import { Link } from 'react-router-dom';


class CourseStatusCard extends Component {
    render() {
        return <Link to={`/CourseContent/${this.props.course.course.id}`} style={{textDecoration: 'none'}}>
            <li class={styles.item}>
                <h2>{this.props.course.course.title}</h2>
                <p>{this.nextCourseDisplay(this.props.course.progresses.find(progress => !progress.isCompleted))}</p>
            </li>
        </Link>
    }

    nextCourseDisplay(foundCourse) {
        if (foundCourse)
            return `Siguiente lección: ${foundCourse.lesson.title}`
        else
            return 'Completado.'
    }
}

export default CourseStatusCard
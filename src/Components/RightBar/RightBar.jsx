import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Ilustracion} from '../Ilustration/Ilustracion'
import SectionClass from '../SectionClass/SectionClass'
import styles from './RightBarStyles.module.css';
import axios from '../../Instances/axiosInstance.js';

class RightBar extends Component {

    state = {
        courseEnrollment: null
    }

    componentDidMount() {
        const userId = localStorage.getItem("userId")
        axios.get(`/courses/${this.props.courseId}/progress/${userId}`).then(res => {
            const stateCopy = {...this.state}
            stateCopy.courseEnrollment = res.data
            this.setState(stateCopy)
        }).catch(error => {
            console.log(error)
            alert(error.response.data)
        })
    }

    render() {
        return (
            <div className={styles.RightBarContent}>
                <div>
                    <Ilustracion
                        urlImg='https://blush.design/api/download?shareUri=cOP92rrhr&c=skin_0.1%7E9f91ca-0.4%7E604891-0.5%7E9f91ca&w=800&h=800&fm=png'
                    />
                </div>
                <div className={styles['RightBarContent--title']}>
                    <h1 className={styles['RightBarContent--h1']}>{!!this.state.courseEnrollment ? this.state.courseEnrollment.course.title : 'cargando...'}</h1>
                </div>
                <div className={styles.RightBarContent1}>
                    {
                        !!this.state.courseEnrollment ?
                            this.state.courseEnrollment.progresses.map((progress) => {
                                return <Link to={`/Class/${progress.lesson.id}`}>
                                    <SectionClass class="selected" name={progress.lesson.title}/>
                                </Link>
                            })
                            :
                            <p>Cargando...</p>
                    }
                </div>
            </div>
        )
    }
}

export default RightBar

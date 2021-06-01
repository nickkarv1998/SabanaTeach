import React, { Component } from 'react'
import Video from '../Video/Video'
import styles from './Class.module.css';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import axios from "../../Instances/axiosInstance";


class Class extends Component {
    state = {
        lesson: null
    }

    componentDidMount() {
        const userId = localStorage.getItem("userId")
        axios.get(`/lessons/${this.props.lessonId}`).then(res => {
            const stateCopy = {...this.state}
            stateCopy.lesson = res.data
            this.setState(stateCopy)
        }).catch(error => {
            console.log(error)
            alert(error.response.data)
        })

        axios.post(`/courses/progress/${this.props.lessonId}/${userId}`).then(res => {
            console.log('okay')
        }).catch(error => {
            console.log('no!')
        })
    }

    render() {
        if (!this.props.logged) {
            return <Redirect to='/login' />
        }
        return (
            <div className={styles.Course}>
                <div className={styles.Title1}>
                    <h1>{!!this.state.lesson ? this.state.lesson.title : 'cargando...'}</h1>
                </div>
                <div className={styles.VideoContainer}>
                    <Video url={!!this.state.lesson ? this.state.lesson.videoUrl : ''} />
                </div>
                <div className={styles.CourseDescription}>
                    <h2>Descripción</h2>
                    <p>{!!this.state.lesson ? this.state.lesson.description : ''}</p>
                </div>
                <div className={styles.CourseDescription}>
                    <h2>Transcripción</h2>
                    <p>{!!this.state.lesson ? this.state.lesson.transcript : ''}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        logged: state.sesionStore.IsUserLoggedIn,
        firstname: state.sesionStore.name,
    };
};

export default connect(mapStateToProps)(withRouter(Class))
import React, { Component } from 'react'
import Video from '../Video/Video'
import styles from './Class.module.css';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';


class Class extends Component {

    render() {
        if (!this.props.logged) {
            return <Redirect to='/login' />
        }
        return (
            <div className={styles.Course}>
                <div className={styles.Title1}>
                    <h1>Como Funciona el computador</h1>
                </div>
                <div className={styles.VideoContainer}>
                    <Video />
                </div>
                <div className={styles.CourseDescription}>
                    <h2>Descripción</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. s cumque blanditiis, nobis sunt debitis ullam molestias ea!</p>
                </div>
                <div className={styles.CourseDescription}>
                    <h2>Transcripción</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit earum perferendis unde laborum totam enim est ea nemo tempora.</p>
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
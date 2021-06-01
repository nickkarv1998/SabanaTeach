import React, {Component} from 'react'
import { connect } from "react-redux";
import styles from "./PDF.module.css"
import Logo from './Certification.svg';
import axios from '../../Instances/axiosInstance.js';

class PDF extends Component {
    state = {
        course: {}
    }

    componentDidMount() {
        axios.get(`/courses/${this.props.courseId}`).then(res => {
            const stateCopy = {...this.state}
            stateCopy.course = res.data
            this.setState(stateCopy)
        }).catch(error => {
            console.log(error)
           // alert(error.response.data)
        })

        const userId = localStorage.getItem("userId")
        axios.get(`/courses/user/${userId}`)
            .then(response => {
                const stateCopy = { ...this.state }
                stateCopy.courses = response.data;
                this.setState(stateCopy)
            })
    }

    render() {
    return (
        <div>
            <div className={styles.certificate} id="Certificado">
             <h1 className={styles.title}>Felicidades</h1>
                <h4>Has completado tu curso de {this.state.course.title} </h4>
            <img className={styles.image} src={Logo} alt="foto"/>
            <br />
            <h4>{this.props.firstname}{" "}{this.props.lastname}</h4>
            </div>
            <button className={styles.button} onClick={this.props.printDocument}>Descargar PDF</button>
        </div>
    )
    }
}
const mapStateToProps = (state) => {
    return {
        logged: state.sesionStore.IsUserLoggedIn,
        firstname: state.sesionStore.name,
        lastname:state.sesionStore.surname,
    };
};


export default connect(mapStateToProps)(PDF)
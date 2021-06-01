import React, {Component} from 'react'
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
    }

    render() {
    return (
        <div>
            <div className={styles.certificate} id="Certificado">
             <h1 className={styles.title}>Felicidades</h1>
                <h4>Has completado tu curso de {this.state.course.title} </h4>
            <img className={styles.image} src={Logo} alt="foto"/>
            <br />
            </div>
            <button className={styles.button} onClick={this.props.printDocument}>Descargar PDF</button>
        </div>
    )
    }
}

export default PDF
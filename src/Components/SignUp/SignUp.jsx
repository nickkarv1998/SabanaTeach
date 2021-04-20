import React from 'react'
import styles from './SignUp.module.css';
import axios from '../../Instances/axiosInstance.js'
import { withRouter } from "react-router-dom";

class SingUp extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        rawPassword: '',
        role: 'STUDENT' // TODO: add <select>
    }

    render() {
        return (
            <section>
                <div>
                    <h1 className={styles.title3}>Registrate</h1>
                </div>
                <div className={styles.cont}>
                    <form className={styles.singupcentral}>
                        <label className={styles.label}>Nombre</label>
                        <input type="text" name="firstName" className={styles.campo1} placeholder="Nombre"
                               value={this.state.firstName} onChange={this.handleInputChange}/>

                        <label className={styles.label}>Correo</label>
                        <input type="email" name="email" className={styles.campo1} placeholder="correo electronico"
                               value={this.state.email} onChange={this.handleInputChange}/>

                    </form>
                    <form className={styles.singupcentral}>
                        <label className={styles.label1}>Apellido</label>
                        <input type="text" name="lastName" className={styles.campo2} placeholder="Apellido"
                               value={this.state.lastName} onChange={this.handleInputChange}/>


                        <label className={styles.label1}>Contraseña</label>
                        <input type="password" name="rawPassword" className={styles.campo2} placeholder="Password"
                               value={this.state.rawPassword} onChange={this.handleInputChange}/>

                    </form>
                </div>

                <button className={styles.singup} onClick={this.signUp}>Registrate</button>
            </section>
        )
    }

    handleInputChange = (e) => {
        const stateCopy = {...this.state}
        stateCopy[e.target.name] = e.target.value
        this.setState(stateCopy)
    }

    signUp = () => {
        axios.post('/sign-up', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            rawPassword: this.state.rawPassword,
            role: this.state.role
        }).then(res => {
            alert(res.data)
            this.props.history.push('/Login')
        }).catch(error => {
            alert(error.response.data)
        })
    }
}

export default withRouter(SingUp)

import React, { Component } from 'react'
import styles from './Login.module.css';
import Logo from './login.svg';
import { withRouter } from "react-router-dom";
import axios from '../../Instances/axiosInstance.js'
import { connect } from "react-redux";

class Login extends Component {
    state = {
        email: '',
        rawPassword: ''
    }

    render() {
        return (
            <div>
                <h1 className={styles.principal}>SabanaTeach</h1>
                <img className={styles.image} src={Logo} alt="" />
                <form className={styles.login}>
                    <input type="text" name="email" className={styles.campo} placeholder="Email"
                        value={this.state.email} onChange={this.handleInputChange} />
                    <input type="password" name="rawPassword" className={styles.campo} placeholder="Constraseña"
                        value={this.state.rawPassword} onChange={this.handleInputChange} />
                </form>
                <button className={styles.button} onClick={this.signIn}>Iniciar Sesión</button>
            </div>
        )
    }

    handleInputChange = (e) => {
        const stateCopy = { ...this.state }
        stateCopy[e.target.name] = e.target.value
        this.setState(stateCopy)
    }

    signIn = () => {
        axios.post('/sign-in', {
            email: this.state.email,
            rawPassword: this.state.rawPassword
        }).then(res => {
            localStorage.setItem("userId", res.data.id)
            alert("Ingreso exitoso")
            this.props.onLogin(res.data)
            this.props.history.push('/Home')
        }).catch(_ => {
            alert("Información incorrecta")
        })
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (user) =>
            dispatch({
                type: "LOGIN",
                payload: {
                    name: user.firstName,
                    surname: user.lastName,
                    email: user.email,
                }
            }),
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Login))

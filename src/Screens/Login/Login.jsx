import React from 'react'
import './Login.css'
import Logo from './login.svg';
import { withRouter } from "react-router-dom";
import axios from "axios";

class Login extends React.Component {
    state = {
        email: '',
        rawPassword: ''
    }

    render() {
        return (
            <div>
                <h1>SabanaTeach</h1>
                <img className="image" src={Logo} alt=""/>
                <form className="login">
                    <input type="text" name="email" className="campo" placeholder="Email"
                           value={this.state.email} onChange={this.handleInputChange}/>
                    <input type="password" name="rawPassword" className="campo" placeholder="Constraseña"
                           value={this.state.rawPassword} onChange={this.handleInputChange}/>
                </form>
                <button className="button" onClick={this.signIn}>Iniciar Sesión</button>
            </div>
        )
    }

    handleInputChange = (e) => {
        const stateCopy = {...this.state}
        stateCopy[e.target.name] = e.target.value
        this.setState(stateCopy)
    }

    signIn = () => {
        axios.post('http://sabana-teach-rest.herokuapp.com/sign-in', {
            email: this.state.email,
            rawPassword: this.state.rawPassword
        }).then(res => {
            alert(res.data)
            this.props.history.push('/Home')
        }).catch(error => {
            alert(error.response.data)
        })
    }
}

export default withRouter(Login)

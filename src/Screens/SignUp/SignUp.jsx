import React from 'react'
import './SignUp.css'
import axios from "axios";
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
                    <h1 className="title3">Registrate</h1>
                </div>
                <div className="cont">
                    <form className="singupcentral">
                        <label className="label">Nombre</label>
                        <input type="text" name="firstName" className="campo1" placeholder="Nombre"
                               value={this.state.firstName} onChange={this.handleInputChange}/>

                        <label className="label">Correo</label>
                        <input type="email" name="email" className="campo1" placeholder="correo electronico"
                               value={this.state.email} onChange={this.handleInputChange}/>

                    </form>
                    <form className="singupcentral">
                        <label className="label1">Apellido</label>
                        <input type="text" name="lastName" className="campo2" placeholder="Apellido"
                               value={this.state.lastName} onChange={this.handleInputChange}/>


                        <label className="label1">Contraseña</label>
                        <input type="password" name="rawPassword" className="campo2" placeholder="Password"
                               value={this.state.rawPassword} onChange={this.handleInputChange}/>

                    </form>
                </div>

                <button className="singup" onClick={this.signUp}>Registrate</button>
            </section>
        )
    }

    handleInputChange = (e) => {
        const stateCopy = {...this.state}
        stateCopy[e.target.name] = e.target.value
        this.setState(stateCopy)
    }

    signUp = () => {
        axios.post('http://sabana-teach-rest.herokuapp.com/sign-up', {
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

import React from 'react'
import './Login.css'
import Logo from './login.svg';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div>
            <h1>SabanaTeach</h1>
            <img className="image" src={Logo} alt="" />
            <form className="login">
                <input type="text" name="name" className="campo" placeholder="User" />
                <input type="password" name="name" className="campo" placeholder="Password" />
            </form>
            <Link to={"/Home"}>
                <button className="button">Iniciar Sesión</button>
            </Link>


        </div>
    )
}

export default Login

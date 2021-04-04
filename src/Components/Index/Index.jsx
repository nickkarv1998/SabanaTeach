import React from 'react'
import logo from './learning.svg'
import './Index.css'
import { Link } from 'react-router-dom';


const Index = (props) => {
    return (
        <div>
            <div className="title">
                <h1>Inicia Sesión en SabanaTeach o comienza a ser parte de Nuestra comunidad</h1>
                <Link to={"/Login"}>
                <button className="button1" >Iniciar sesión</button>
                </Link>
            </div>

            <div>
                <img className="ilustracion" src={logo}></img>
            </div>
        </div>
    )
}

export default  Index;

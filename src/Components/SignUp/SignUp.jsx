import React from 'react'
import './SignUp.css'

const SingUp = () => {
    return (

        <section>
            <div>
                <h1 className="title3">Registrate</h1>
            </div>
            <div className="cont">
                <form className="singupcentral">
                    <label className="label">Nombre</label>
                    <input type="text" name="name" className="campo1" placeholder="Nombre" />
                    <label className="label">Correo</label>
                    <input type="email" name="name" className="campo1" placeholder="correo electronico" />

                </form>
                <form className="singupcentral">
                    <label className="label1">Apellidos</label>
                    <input type="text" name="name" className="campo2" placeholder="Apellido" />
                    <label className="label1">Contraseña</label>
                    <input type="password" name="name" className="campo2" placeholder="Password" />

                </form>
            </div>

            <button className="singup">Registrate</button>
        </section>
    )
}

export default SingUp

import React, {useEffect} from 'react'
import logo from './learning.svg'
import styles from './Index.module.css';
import { Link } from 'react-router-dom';


const Index = ({ setShowMenu }) => {
        
    useEffect(() => {
        setShowMenu(false)
    }, [])

    return (
        <div>
            <div className={styles.title}>
                <h1 className={styles.titleIndex}>Inicia Sesión en SabanaTeach o comienza a ser parte de Nuestra comunidad</h1>
                <Link to={"/Login"}>
                <button className={styles.button1} >Iniciar sesión</button>
                </Link>
            </div>

            <div>
                <img className={styles.ilustracion} src={logo}></img>
            </div>
        </div>
    )
}

export default  Index;

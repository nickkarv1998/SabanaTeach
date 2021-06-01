import React from 'react'
import Logo from './notfound.svg';
import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div>
             <img className={styles.image} src={Logo} alt="" />
             <Link to={"/"}>
                        <button className={styles.button}>Ir a Inicio</button>
                    </Link>
        </div>
    )
}

export default NotFound

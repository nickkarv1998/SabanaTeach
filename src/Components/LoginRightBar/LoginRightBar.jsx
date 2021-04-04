import React from 'react'
import SectionClass from '../SectionClass/SectionClass'
import styles from './LoginRightBarStyles.module.css';

const LoginRightBar = ({ urlImg }) => {
    return (
        <div className={styles.RightBarContent}>
           
            <div className={styles['RightBarContent--title']}>
                <h1 className={styles['RightBarContent--h1']}>Bienvenido</h1>
                <h4 className={styles['RightBarContent--h4']}>Registrate y haz parte de nuestra comunidad</h4>
            </div>
            <button className={styles['singup']}>Registrate</button>
        </div>

    )
}

export default LoginRightBar

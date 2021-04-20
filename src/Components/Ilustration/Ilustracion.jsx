import React from 'react'
import styles from './IlustrationStyle.module.css';


export const Ilustracion = ({urlImg}) => {
    return (
        <div>
            <img className={styles.ilustracion1} src={urlImg}    alt=""/>
        </div>
    )
}



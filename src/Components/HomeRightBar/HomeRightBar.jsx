import React from 'react'
import LineDemo from '../Graphic/LineDemo';
import styles from './HomeRightBarStyles.module.css';
import Logo1 from './pc.svg';

const Homerb = ({ urlImg }) => {
    return (
        <div className={styles.RightBarContent3}>
        <div className={styles.RightBarContent}>
               
                <div className={styles.circulo1}></div>
                <img className={styles.image2} src={Logo1} alt=""/>
                <h4 className={styles['RightBarContent1--h4']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h4>
                
        </div>
            <div className={styles.RightBarContent2 }>
            <LineDemo />
            </div>
        </div>

    )
}

export default Homerb

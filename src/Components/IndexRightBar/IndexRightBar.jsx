import React from 'react'
import SectionClass from '../SectionClass/SectionClass'
import styles from './IndexRightBarStyles.module.css';
import Logo from './libro.svg';
import Logo1 from './pc.svg';

const IndexRightBar = ({ urlImg }) => {
    return (
        <div className={styles.RightBarContent}>
                <div className={styles.circulo}></div>
                <img className={styles.image1} src={Logo} alt=""/>
                <h4 className={styles['RightBarContent--h4']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h4>
                <div className={styles.circulo1}></div>
                <img className={styles.image2} src={Logo1} alt=""/>
                <h4 className={styles['RightBarContent1--h4']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h4>
           
        </div>

    )
}

export default IndexRightBar

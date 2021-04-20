import React from 'react'
import styles from './SectionClassStyle.module.css';


const SectionClass = (props) => {
    return (
        <div className={styles.SectionClass}>
            <a style={{textDecoration: "none"}} href={props.link}> <h2 className={props.class}>{props.name}</h2></a>
        </div>  
    )
}

export default SectionClass
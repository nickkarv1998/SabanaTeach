import React from 'react'
import { Link } from 'react-router-dom';
import { Ilustracion } from '../Ilustration/Ilustracion'
import SectionClass from '../SectionClass/SectionClass'
import styles from './RightBarStyles.module.css';

const RightBar = ({ urlImg }) => {
    return (
        <div className={styles.RightBarContent}>
            <div >
                <Ilustracion
                    urlImg='https://blush.design/api/download?shareUri=cOP92rrhr&c=skin_0.1%7E9f91ca-0.4%7E604891-0.5%7E9f91ca&w=800&h=800&fm=png'
                />
            </div>
            <div className={styles['RightBarContent--title']}>
                <h1 className={styles['RightBarContent--h1']}>Introduccion a la Tecnología</h1>
            </div>
            <div className={styles.RightBarContent1}>
                <Link to={"/CourseContent"}>
                    <SectionClass class="selected" name="Resumen" />
                </Link>
                <Link to={"/Class"}>
                    <SectionClass name="Clase 1" />
                </Link>
                <Link to={"/Class"}>
                    <SectionClass name="Clase 2" />
                </Link>
                <SectionClass name="Evaluación 1" link="#test1" />
                <Link to={"/Class"}>
                    <SectionClass name="Clase 3" />
                </Link>
                <Link to={"/Class"}>
                    <SectionClass name="Clase 4" />
                </Link>
                <SectionClass name="Evaluación 2" link="#test2" />
                <SectionClass name="Final" link="#final" />
            </div>
        </div>

    )
}

export default RightBar

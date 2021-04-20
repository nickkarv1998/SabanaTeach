import React , {useEffect} from 'react'
import Video from '../Video/Video'
import styles from './Class.module.css';


const Class = ({ setShowMenu }) => {

    useEffect(() => {
        setShowMenu(true)
    }, [])

    return (
        <div className={styles.Course}>
            <div className={styles.Title1}>
                <h1>Como Funciona el computador</h1>
            </div>
            <div className={styles.VideoContainer}>
                <Video/>
            </div>
            <div className={styles.CourseDescription}>
                <h2>Descripción</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. s cumque blanditiis, nobis sunt debitis ullam molestias ea!</p>
            </div>
            <div className={styles.CourseDescription}>
                <h2>Transcripción</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit earum perferendis unde laborum totam enim est ea nemo tempora.</p>
            </div>
        </div>
    )
}

export default Class
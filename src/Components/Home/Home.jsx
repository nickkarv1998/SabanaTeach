import React, { Component} from 'react'
import SearchBar from '../SearchBar/SearchBar'
import CourseStatusCard from '../CourseStatusCard/courseStatusCard.jsx'
import styles from './Home.module.css';
import News from './NW.jpg'
import News2 from './certificate.jpg'
import axios from '../../Instances/axiosInstance.js'

class Home extends Component {

    constructor(props) {
        super()
        props.setShowMenu(true)
    }

    state = {
        courses: []
    }

    componentDidMount() {
        const userId = localStorage.getItem("userId")
        axios.get(`/courses/user/${userId}`)
            .then(response => {
                const stateCopy = {...this.state}
                stateCopy.courses = response.data;
                this.setState(stateCopy)
            })
    }

    render() {
        return (
            <div >
                <div>
                    <SearchBar />

                    <h2 className={styles.title4}>Mis Cursos</h2>

                    <ul className={styles.hs}>
                        {
                            this.state.courses.map(course => <CourseStatusCard course={course}/>)
                        }
                    </ul>
                </div>

                <div className={styles.news}>

                    <div className={styles.card}>

                        <img className={styles.new} src={News} alt="" />

                        <div className={styles.bar}>
                            Tips para el manejo del tiempo
                            </div>

                    </div>
                    <div className={styles.card}>
                        <img className={styles.new} src={News2} alt="" />

                        <div className={styles.bar}>
                            Certificate en el uso de Excel y Powe BI con nuestro nuevo curso
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Home

import React, { Component} from 'react'
import SearchBar from '../SearchBar/SearchBar'
import CourseStatusCard from '../CourseStatusCard/courseStatusCard.jsx'
import './Home.css'
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

                    <h2 className="title4">Mis Cursos</h2>

                    <ul class="hs">
                        {
                            this.state.courses.map(course => <CourseStatusCard course={course}/>)
                        }
                    </ul>
                </div>

                <div className="news">

                    <div className="card">

                        <blockquote class="twitter-tweet"><p lang="es" dir="ltr">Los invitamos al evento &quot;Innovar desde donde estés&quot; organizado por nuestro partner Google for Education, para seguir conversando sobre el futuro de la educación!<br />. <br />Cuándo: miércoles 24 de marzo, 18 hs Argentina<br />Info e inscripción: <a href="https://t.co/VoE25eDXLW">https://t.co/VoE25eDXLW</a> <a href="https://t.co/ZRcRCllvzW">pic.twitter.com/ZRcRCllvzW</a></p>&mdash; Educacion Tecnologica (@edu_tecnologica) <a href="https://twitter.com/edu_tecnologica/status/1374052643060977670?ref_src=twsrc%5Etfw">March 22, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </div>
                    <div className="card">
                        Sabías que: Durante los primeros 600 años de existencia de la Gran Pirámide de Giza, aún había mamuts en la Tierra
                    </div>

                </div>
            </div>
        )
    }

}

export default Home
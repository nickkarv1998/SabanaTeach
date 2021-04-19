import React, { useEffect, Component} from 'react'
import SearchBar from '../SearchBar/SearchBar'
import CourseStatusCard from '../CourseStatusCard/courseStatusCard.jsx'
import './Home.css'

import News from './NW.jpg';


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
        axios.get('current.JSON')
            .then(response => {
                const loadedCourses = response.data;
                console.log(loadedCourses)
                this.setState({courses: loadedCourses})
            })
    }

    render() {
        return (
            <div >
            <div>
                <SearchBar />

                <h2 className="title4">Mis Cursos</h2>

                <ul class="hs">
                    <li class="item">test</li>
                    <li class="item">test</li>
                    <li class="item">test</li>
                    <li class="item">test</li>
                    <li class="item">test</li>
                    <li class="item">test</li>
                </ul>
            </div>

            <div className="news">

                <div className="card">
                <img className="new" src={News} alt=""/>
                
                <div className="bar">
                    sgrf
                </div>

                </div>
                <div className="card">
                    ggtregtr
                </div>

            </div>


        </div>
    )

        )
    }

}

export default Home

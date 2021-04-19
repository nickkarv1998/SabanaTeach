import React, { useEffect } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'
import './CourseLibrary.css'

const CourseLibrary = ({ setShowMenu }) => {

    const [staticPosts, setStaticPosts] = React.useState([])

    useEffect(() => {
        obtenerDatos()
        setShowMenu(true)

    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/')
        const users = await data.json()
        const posts = users.slice(0, 10);
        setStaticPosts(posts)
    }
    return (

        <div>

            <SearchBar />
            <div>

                <h1 className="titulo2">LISTA DE CURSOS DISPONIBLES</h1>
            </div>

            <div className="curso">
                {
                    staticPosts.map(item => (
                        <details className="cursos">
                            <summary class="resume">
                                + {item.title.slice(0, 40)}
                            </summary>
                            <p className="content">
                                {item.body}
                                <br />  <br />
                                <Link to={"/CourseContent"}>
                                    <button>Comenzar</button>
                                </Link>
                            </p>

                        </details>
                    ))
                }
            </div>

        </div>
    )
}

export default CourseLibrary

import React, { useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './Home.css'

const Home = ({ setShowMenu }) => {

    useEffect(() => {
        setShowMenu(true)

    }, [])

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
    }


export default Home
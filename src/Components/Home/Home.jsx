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

                <blockquote class="twitter-tweet"><p lang="es" dir="ltr">Los invitamos al evento &quot;Innovar desde donde estés&quot; organizado por nuestro partner Google for Education, para seguir conversando sobre el futuro de la educación!<br />. <br />Cuándo: miércoles 24 de marzo, 18 hs Argentina<br />Info e inscripción: <a href="https://t.co/VoE25eDXLW">https://t.co/VoE25eDXLW</a> <a href="https://t.co/ZRcRCllvzW">pic.twitter.com/ZRcRCllvzW</a></p>&mdash; Educacion Tecnologica (@edu_tecnologica) <a href="https://twitter.com/edu_tecnologica/status/1374052643060977670?ref_src=twsrc%5Etfw">March 22, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>              
                  </div>
                                <div className="card">
                                    ggtregtr
                </div>

            </div>

               
        </div>
    )
}

export default Home
